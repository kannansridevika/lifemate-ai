// soundEngine.js - Web Audio API Procedural Synthesizer for LifeMate AI
// Accessible acoustic feedback for visually impaired navigation

(function() {
  let audioCtx = null;
  let soundEnabled = true;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const SoundEngine = {
    isEnabled: () => soundEnabled,
    setEnabled: (val) => {
      soundEnabled = !!val;
      try {
        localStorage.setItem('lifemate_sound_enabled', soundEnabled ? 'true' : 'false');
      } catch (e) {}
    },

    playTone: function(freq = 440, type = 'sine', duration = 0.15, vol = 0.1) {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {
        console.warn('Audio tone error:', e);
      }
    },

    playClick: function() {
      this.playTone(600, 'sine', 0.04, 0.05);
    },

    playChime: function() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.08, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.25);
        });
      } catch (e) {}
    },

    playSuccess: function() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        [440, 554.37, 659.25, 880].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(0.1, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.3);
        });
      } catch (e) {}
    },

    playAlert: function() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        [880, 587.33].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.12, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.2);
        });
      } catch (e) {}
    },

    playCountdownBeep: function(urgent = false) {
      this.playTone(urgent ? 1000 : 750, urgent ? 'square' : 'sine', 0.1, urgent ? 0.2 : 0.12);
    },

    playEmergencySiren: function() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.linearRampToValueAtTime(1100, now + 0.25);
        osc.frequency.linearRampToValueAtTime(600, now + 0.5);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.55);
      } catch (e) {}
    },

    playNavRadar: function(distance = 2.0) {
      if (!soundEnabled) return;
      // Closer distance = higher pitch and shorter pulse
      const clamped = Math.max(0.5, Math.min(10, distance));
      const freq = 300 + (10 - clamped) * 70; // 300Hz (far) to 965Hz (close)
      this.playTone(freq, 'sine', 0.08, 0.08);
    }
  };

  // Initialize stored preference
  try {
    const saved = localStorage.getItem('lifemate_sound_enabled');
    if (saved !== null) {
      soundEnabled = saved === 'true';
    }
  } catch (e) {}

  window.SoundEngine = SoundEngine;
})();
