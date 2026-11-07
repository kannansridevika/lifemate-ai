// speechEngine.js - Text-to-Speech & Speech Recognition Manager
// Voice-first interaction layer for visually impaired users

(function() {
  let isSpeaking = false;
  let isListening = false;
  let recognitionInstance = null;
  let currentLanguage = 'en';

  const LANG_TAGS = {
    en: 'en-US',
    ta: 'ta-IN',
    hi: 'hi-IN',
    te: 'te-IN',
    ml: 'ml-IN',
    kn: 'kn-IN'
  };

  const SpeechEngine = {
    isSupported: () => 'speechSynthesis' in window,
    isRecognitionSupported: () => ('SpeechRecognition' in window) || ('webkitSpeechRecognition' in window),

    setLanguage: (lang) => {
      currentLanguage = lang;
    },

    getLanguage: () => currentLanguage,

    speak: function(text, options = {}) {
      if (!text) return Promise.resolve();
      return new Promise((resolve) => {
        if (!('speechSynthesis' in window)) {
          console.warn('Speech synthesis not supported');
          resolve();
          return;
        }

        try {
          window.speechSynthesis.cancel(); // Stop any pending speech

          const utterance = new SpeechSynthesisUtterance(text);
          const langTag = LANG_TAGS[options.lang || currentLanguage] || 'en-US';
          utterance.lang = langTag;
          utterance.rate = options.rate || 0.95; // Slightly slower for crisp clarity
          utterance.pitch = options.pitch || 1.0;

          // Attempt to find a suitable voice
          const voices = window.speechSynthesis.getVoices();
          if (voices && voices.length > 0) {
            const match = voices.find(v => v.lang && v.lang.startsWith(langTag.slice(0, 2)));
            if (match) utterance.voice = match;
          }

          utterance.onstart = () => {
            isSpeaking = true;
            if (options.onStart) options.onStart();
            window.dispatchEvent(new CustomEvent('lifemate_speech_start', { detail: { text } }));
          };

          utterance.onend = () => {
            isSpeaking = false;
            if (options.onEnd) options.onEnd();
            window.dispatchEvent(new CustomEvent('lifemate_speech_end', { detail: { text } }));
            resolve();
          };

          utterance.onerror = (e) => {
            isSpeaking = false;
            console.warn('Speech utterance error:', e);
            if (options.onError) options.onError(e);
            resolve();
          };

          window.speechSynthesis.speak(utterance);
        } catch (e) {
          console.warn('Speech execution error:', e);
          resolve();
        }
      });
    },

    stopSpeaking: function() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      isSpeaking = false;
    },

    getSpeakingStatus: () => isSpeaking,

    startListening: function(callbacks = {}) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) {
        if (callbacks.onError) callbacks.onError('Speech Recognition not supported in this browser.');
        return null;
      }

      try {
        if (recognitionInstance) {
          try { recognitionInstance.stop(); } catch (e) {}
        }

        const recognition = new SpeechRec();
        const langTag = LANG_TAGS[currentLanguage] || 'en-US';
        recognition.lang = langTag;
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = () => {
          isListening = true;
          if (callbacks.onStart) callbacks.onStart();
        };

        recognition.onresult = (event) => {
          let transcript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
          }
          if (callbacks.onResult) callbacks.onResult(transcript, event.results[0].isFinal);
        };

        recognition.onerror = (err) => {
          isListening = false;
          if (callbacks.onError) callbacks.onError(err);
        };

        recognition.onend = () => {
          isListening = false;
          if (callbacks.onEnd) callbacks.onEnd();
        };

        recognition.start();
        recognitionInstance = recognition;
        return recognition;
      } catch (e) {
        console.warn('Recognition start failed:', e);
        if (callbacks.onError) callbacks.onError(e);
        return null;
      }
    },

    stopListening: function() {
      if (recognitionInstance) {
        try {
          recognitionInstance.stop();
        } catch (e) {}
      }
      isListening = false;
    }
  };

  // Pre-fetch voices if available
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Voices loaded
    };
  }

  window.SpeechEngine = SpeechEngine;
})();
