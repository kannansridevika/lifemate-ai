# LifeMate AI 🌟
> **Tagline:** *Your Guide • Your Companion • Your Daily Support.*

LifeMate AI is an AI-powered accessibility website prototype engineered primarily for visually impaired individuals to live more independently, safely, and confidently through voice-first assistance.

Built with modern **React**, accessible CSS, **Web Speech API** for multilingual voice synthesis and recognition, and an embedded **Web Audio API procedural sound synthesizer** for acoustic radar pings, confirmation chimes, and emergency siren alerts.

---

## 🚀 Live Prototype Features

LifeMate AI includes dedicated, interactive demo pages for all 5 core pillars plus comprehensive project documentation:

### 1. 🚶 Life Guide – Smart Outdoor Assistance (`#guide`)
- **Large Microphone Activation ("Hi Life"):** Dedicated prominent voice button that triggers immediate audio surroundings analysis.
- **Rear-Camera Spatial Vision Simulation:** Realistic urban street sensing viewport with scanning laser line, tactile paving detection, and depth LiDAR mock. Includes an interactive toggle for live webcam access if permissions are granted.
- **AI Environment Perception & Bounding Boxes:** Dynamic visual and auditory detection overlays:
  - *Doorway Ahead (2.1m)* – Spoken warning: `"There is a door ahead. Please be careful."`
  - *Ascending Stairs (3.0m)* – Alert for 4 steps ascending.
  - *Pedestrian Crosswalk (4.5m)* – Walk signal detection: GREEN.
  - *Clear Pathway (8.0m)* – Sidewalk obstacle-free confirmation.
- **Auditory GPS Route Navigation Demo:** Destination input (e.g. Metro Station, Hospital), turn-by-turn auditory guidance, step countdown, and remaining distance indicators.
- **Proximity Audio Radar:** Procedural acoustic synthesizer pings whose frequency scales with obstacle distance (closer = higher pitch).
- **Sensor Permissions Status:** Clear indicators for Camera, Mic, LiDAR, and GPS lock.
- **Hackathon Transparency Disclaimer:** Prominently highlights that camera vision and GPS navigation are simulated prototype concepts.

### 2. 💬 Life Companion – AI Conversational Friend (`#companion`)
- **Empathetic Conversational Partner:** Warm, conversational chat interface with real-time text-to-speech for every AI response.
- **Voice Dictation & Text Input:** Speak via microphone or type messages.
- **Friendly Daily Prompts:** Quick one-touch chips including:
  - *"How was your day?"*
  - *"Can you tell me an uplifting short story?"*
  - *"Guide me through a 1-minute calming breath"*
  - *"What's the weather like today?"*
- **Persistent Conversation History:** Chat dialogs saved in `localStorage` with clear history controls.
- **Daily Well-being Check-In Settings:** Configurable Morning Greeting Time, Evening Reflection Time, check-in sound chime, and interactive Mood Tracker (Peaceful & Happy, Relaxed & Calm, A Little Tired, Need Encouragement).

### 3. 💊 Life Reminder – Medicine Alerts (`#reminder`)
- **Daily Medication Schedule:** Structured timeline view with medicine name, dosage, time, and food instructions (e.g. Breakfast, Lunch, Dinner, Bedtime).
- **Interactive Medicine Actions:** Dedicated buttons for **Taken** (with confirmation chime), **Snooze 10 Mins**, and **Acknowledge**.
- **Interactive Alarm Simulation Modal:** Triggers an urgent incoming medicine alarm popup with audio chimes and voice speech reading out tablet instructions.
- **Add Prescribed Medicine Form:** Simple accessible modal to register new medicines with custom dosage and schedule.
- **Guardian Missed-Dose Notification Toggle:** Simulates automatic SMS escalation to trusted contacts if a dose is unacknowledged for over 30 minutes.
- **Strict Medical Protocol Notice:** Prominently states that LifeMate AI is a schedule reminder tool and **never** recommends medicines or modifies prescribed dosages.

### 4. 🌐 Life Language – Regional Voice Selection (`#language`)
- **6 Supported Languages:**
  1. **Tamil (தமிழ்)** – *"வணக்கம்! நான் உங்கள் லைஃப்மேட்."*
  2. **English** – *"Hello! I am your LifeMate."*
  3. **Hindi (हिन्दी)** – *"नमस्ते! मैं आपका लाइफमेट हूँ।"*
  4. **Telugu (తెలుగు)** – *"నమస్కారం! నేను మీ లైఫ్‌మేట్."*
  5. **Malayalam (മലയാളം)** – *"നമസ്കാരം! ഞാൻ നിങ്ങളുടെ ലൈഫ്മേറ്റ് ആണ്."*
  6. **Kannada (ಕನ್ನಡ)** – *"ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಲೈಫ್‌ಮೇಟ್."*
- **Instant Global UI Translation:** Changing the preferred language updates all navigation tabs, hero text, guidance warnings, medicine alerts, and emergency dispatches.
- **Audio Voice Preview:** Interactive *"Listen to Voice Greeting"* buttons in all 6 languages using native Web Speech synthesis.

### 5. 🚨 Life Emergency – Rapid Safety Alert System (`#emergency`)
- **High-Visibility Emergency Button:** Extra-large, high-contrast SOS button with red gradient and alert icons.
- **Voice Trigger:** Simulates hands-free command `"Hi Life, Emergency!"`.
- **5-Second False-Alarm Countdown:** Safety countdown with urgent audible ticking sound and a prominent **"CANCEL FALSE ALARM (I AM SAFE)"** override button.
- **Simulated Emergency Phone Call Screen:** Smartphone outgoing call interface with live call timer, animated voice waveforms, speaker status, and End Call button.
- **Simulated Automated SMS Alert Screen:** Pre-formatted distress SMS with live GPS coordinates (`13.0827° N, 80.2707° E`), landmark address (*Near Anna Salai, Chennai*), device battery level (88%), and timestamp.
- **Simulated Live GPS Location Tracker:** Interactive map pin display with high-precision accuracy radius ($\pm 4.2\text{m}$).
- **Multiple Emergency Contacts Directory:** Preloaded with primary physician/son, secondary family member, and National Ambulance (108). Users can add new trusted contacts.

### 6. 🏠 Home Page (`#home`)
- Introduction, value proposition, and hero section with large microphone command button.
- Five Core Feature Cards with interactive preview tags, badges, and direct navigation links.
- Key statistics: 2.2B+ vision-impaired population, 100% voice operated, WCAG AAA compliant, 6 languages.

### 7. 📖 About Project (`#about`)
- **Problem Statement:** Analysis of spatial mobility hazards, drug dosage confusion, emotional loneliness, and touchscreen distress barriers.
- **Solution Architecture:** Multimodal Voice-First AI architecture.
- **Core Engineering Objectives:** Zero-vision operability, empathetic companionship, health adherence, regional language inclusivity.
- **WCAG 2.1 AAA Accessibility Matrix:** Checklist covering Perceivable, Operable, Understandable, and Robust criteria.
- **Technology Stack:** React architecture, Web Speech API, Web Audio synthesizer, LocalStorage, semantic ARIA landmarks.

---

## ♿ Accessibility & Universal Design Features

- **WCAG 2.1 AAA High-Contrast Mode:** Accessible toggle switching to pure black background with sharp gold-yellow (`#facc15`) and cyan (`#38bdf8`) high-visibility accents (contrast ratio $> 12:1$).
- **Dynamic Typography Scaling:** Three instant font size controls:
  - `A` (Normal - 16px)
  - `A+` (Large - 18.5px)
  - `A++` (Extra Large - 21.5px)
- **Zero-Dependency Procedural Sound Synthesizer (`js/soundEngine.js`):** Web Audio API acoustic tones for button taps, positive chimes, alert pings, radar proximity pulses, and siren warbles. Works completely offline.
- **Screen Reader Friendly:** Built with semantic ARIA landmarks (`role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"`, `role="dialog"`, `role="alertdialog"`, `aria-live="polite"`). Includes a hidden skip-to-content link.
- **Keyboard Shortcuts:**
  - `Alt + 1`: Home
  - `Alt + 2`: Life Guide
  - `Alt + 3`: Life Companion
  - `Alt + 4`: Life Reminder
  - `Alt + 5`: Life Language
  - `Alt + 6` or `Alt + E`: Life Emergency
  - `Alt + 7`: About Project
  - `Alt + V`: Open "Hi Life" Voice Assistant Modal
  - `Escape`: Close active modals

---

## 📁 Project Architecture

```
lifemate-ai/
├── index.html                   # HTML5 Entrypoint with React 18 compatible engine
├── README.md                    # Project documentation & feature guide
├── css/
│   └── styles.css               # Accessible styling (Blue, White, Soft Purple & High-Contrast)
└── js/
    ├── icons.js                 # Accessible inline SVG icon components
    ├── soundEngine.js           # Web Audio API procedural sound synthesizer
    ├── speechEngine.js          # Web Speech API TTS & speech recognition manager
    ├── translations.js          # Multi-language dictionaries (ta, en, hi, te, ml, kn)
    ├── store.js                 # LocalStorage persistence & preloaded demo data
    ├── app.js                   # Root React component, router & accessibility listeners
    ├── components/
    │   ├── Navbar.js            # Sticky navigation, toolbar & quick voice trigger
    │   ├── Footer.js            # Accessible footer, sitemap & keyboard hints
    │   └── VoiceAssistantModal.js # Global "Hi Life" voice modal with speech controls
    └── pages/
        ├── HomePage.js          # Hero & 5 feature cards overview
        ├── LifeGuidePage.js     # Camera sensing, obstacle detection & GPS walking
        ├── LifeCompanionPage.js # Conversational friend & daily check-in settings
        ├── LifeReminderPage.js  # Medicine schedule, alarms & guardian alerts
        ├── LifeLanguagePage.js  # Language selection & audio greetings
        ├── LifeEmergencyPage.js # SOS button, 5s countdown, simulated calls & SMS
        └── AboutPage.js         # Problem statement, solution & WCAG standards
```

---

## 💻 How to Run

1. Open `C:\Users\SRI DEVIKA\.gemini\antigravity\scratch\lifemate-ai\index.html` in **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, or **Apple Safari**.
2. No Node.js build steps, npm installations, or complex web servers are required. The prototype is completely self-contained and runs smoothly over `file:///` as well as any standard HTTP static server.
3. To open specific pages directly, append the page hash:
   - `index.html#guide`
   - `index.html#companion`
   - `index.html#reminder`
   - `index.html#language`
   - `index.html#emergency`
   - `index.html#about`

---

## 🏆 Hackathon Prototype Note
This prototype is created for evaluation, demonstration, and hackathon presentation. Simulated camera obstacle bounding boxes, GPS routes, emergency phone calls, and automated SMS messages are modeled representations of full hardware-integrated capabilities designed to test user experience and voice-first ergonomics.
