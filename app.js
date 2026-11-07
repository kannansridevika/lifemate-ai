// app.js - Main LifeMate AI Root Application & Global Router

(function() {
  const h = window.React.createElement;

  function App() {
    // Read initial page from hash if present
    const getInitialPage = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const valid = ['home', 'guide', 'companion', 'reminder', 'language', 'emergency', 'about'];
      return valid.includes(hash) ? hash : 'home';
    };

    const [currentPage, setCurrentPage] = window.React.useState(getInitialPage);
    const [lang, setLang] = window.React.useState('en');
    const [highContrast, setHighContrast] = window.React.useState(false);
    const [fontSize, setFontSize] = window.React.useState('normal');
    const [soundEnabled, setSoundEnabled] = window.React.useState(true);
    const [isVoiceModalOpen, setIsVoiceModalOpen] = window.React.useState(false);
    const [screenReaderAnnouncement, setScreenReaderAnnouncement] = window.React.useState('');

    // Load initial settings on mount
    window.React.useEffect(() => {
      const storedLang = window.Store.getLanguage();
      setLang(storedLang);
      window.SpeechEngine.setLanguage(storedLang);

      const storedContrast = window.Store.getHighContrast();
      setHighContrast(storedContrast);
      if (storedContrast) document.body.classList.add('high-contrast');

      const storedFontSize = window.Store.getFontSize();
      setFontSize(storedFontSize);
      document.documentElement.className = 'font-' + storedFontSize;

      const storedSound = window.SoundEngine.isEnabled();
      setSoundEnabled(storedSound);

      // Listen to hash changes (back/forward or external link)
      const handleHashChange = () => {
        const hash = window.location.hash.replace('#', '').trim();
        const valid = ['home', 'guide', 'companion', 'reminder', 'language', 'emergency', 'about'];
        if (valid.includes(hash)) {
          setCurrentPage(hash);
        }
      };
      window.addEventListener('hashchange', handleHashChange);

      // Keyboard shortcuts handler
      const handleKeyDown = (e) => {
        // Alt + 1..7 for rapid page jumping
        if (e.altKey) {
          if (e.key === '1') { e.preventDefault(); navigateTo('home'); }
          else if (e.key === '2') { e.preventDefault(); navigateTo('guide'); }
          else if (e.key === '3') { e.preventDefault(); navigateTo('companion'); }
          else if (e.key === '4') { e.preventDefault(); navigateTo('reminder'); }
          else if (e.key === '5') { e.preventDefault(); navigateTo('language'); }
          else if (e.key === '6') { e.preventDefault(); navigateTo('emergency'); }
          else if (e.key === '7') { e.preventDefault(); navigateTo('about'); }
          else if (e.key.toLowerCase() === 'v') {
            e.preventDefault();
            setIsVoiceModalOpen(true);
          } else if (e.key.toLowerCase() === 'e') {
            e.preventDefault();
            navigateTo('emergency');
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('hashchange', handleHashChange);
      };
    }, []);

    // Get current dictionary
    const t = (window.Translations && window.Translations[lang]) || window.Translations.en;

    const navigateTo = (pageId) => {
      window.SoundEngine.playClick();
      setCurrentPage(pageId);
      window.location.hash = pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Screen reader announcement
      const pageNames = {
        home: t.nav.home,
        guide: t.nav.guide,
        companion: t.nav.companion,
        reminder: t.nav.reminder,
        language: t.nav.language,
        emergency: t.nav.emergency,
        about: t.nav.about
      };
      const announceText = `Navigated to ${pageNames[pageId] || pageId} page.`;
      setScreenReaderAnnouncement(announceText);
    };

    const handleToggleContrast = () => {
      const next = !highContrast;
      setHighContrast(next);
      window.Store.setHighContrast(next);
      if (next) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
      setScreenReaderAnnouncement(next ? "High contrast mode enabled." : "Standard contrast mode enabled.");
    };

    const handleSetFontSize = (size) => {
      setFontSize(size);
      window.Store.setFontSize(size);
      document.documentElement.className = 'font-' + size;
      setScreenReaderAnnouncement(`Font size updated to ${size}.`);
    };

    const handleToggleSound = () => {
      const next = !soundEnabled;
      setSoundEnabled(next);
      window.SoundEngine.setEnabled(next);
      setScreenReaderAnnouncement(next ? "Acoustic sound effects enabled." : "Sound effects muted.");
    };

    const handleSelectLanguage = (newLang) => {
      setLang(newLang);
      window.Store.setLanguage(newLang);
      window.SpeechEngine.setLanguage(newLang);
      setScreenReaderAnnouncement(`Preferred language set to ${newLang}.`);
    };

    const handleTriggerEmergency = () => {
      navigateTo('emergency');
    };

    // Render active page
    let pageContent = null;
    if (currentPage === 'home') {
      pageContent = h(window.HomePage, {
        onNavigate: navigateTo,
        t,
        lang,
        onOpenVoiceModal: () => setIsVoiceModalOpen(true),
        onTriggerEmergency: handleTriggerEmergency
      });
    } else if (currentPage === 'guide') {
      pageContent = h(window.LifeGuidePage, {
        t,
        lang,
        onOpenVoiceModal: () => setIsVoiceModalOpen(true)
      });
    } else if (currentPage === 'companion') {
      pageContent = h(window.LifeCompanionPage, {
        t,
        lang
      });
    } else if (currentPage === 'reminder') {
      pageContent = h(window.LifeReminderPage, {
        t,
        lang
      });
    } else if (currentPage === 'language') {
      pageContent = h(window.LifeLanguagePage, {
        currentLang: lang,
        onSelectLanguage: handleSelectLanguage,
        t
      });
    } else if (currentPage === 'emergency') {
      pageContent = h(window.LifeEmergencyPage, {
        t,
        lang
      });
    } else if (currentPage === 'about') {
      pageContent = h(window.AboutPage, {
        t
      });
    }

    return h('div', { className: 'min-h-screen flex flex-col' },
      // Skip to main content link for screen readers
      h('a', {
        href: '#main-content',
        className: 'skip-link'
      }, 'Skip to main content'),

      // Screen reader live status announcement region
      h('div', {
        className: 'sr-only',
        role: 'status',
        'aria-live': 'polite'
      }, screenReaderAnnouncement),

      // Header Navigation
      h(window.Navbar, {
        currentPage,
        onNavigate: navigateTo,
        lang,
        t,
        highContrast,
        onToggleContrast: handleToggleContrast,
        fontSize,
        onSetFontSize: handleSetFontSize,
        soundEnabled,
        onToggleSound: handleToggleSound,
        onOpenVoiceModal: () => setIsVoiceModalOpen(true),
        onTriggerEmergency: handleTriggerEmergency
      }),

      // Main Content Area
      h('main', { id: 'main-content', className: 'flex-1 focus:outline-none', tabIndex: -1 },
        pageContent
      ),

      // Footer
      h(window.Footer, {
        onNavigate: navigateTo,
        t,
        lang
      }),

      // Global Voice Assistant "Hi Life" Modal
      h(window.VoiceAssistantModal, {
        isOpen: isVoiceModalOpen,
        onClose: () => setIsVoiceModalOpen(false),
        onNavigate: navigateTo,
        lang,
        t,
        onTriggerEmergency: handleTriggerEmergency
      })
    );
  }

  window.App = App;
})();
