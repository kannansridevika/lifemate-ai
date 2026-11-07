// translations.js - Complete Multi-Language Support for LifeMate AI
// Supports: English, Tamil, Hindi, Telugu, Malayalam, Kannada

(function() {
  const translations = {
    en: {
      appName: "LifeMate AI",
      tagline: "Your Guide • Your Companion • Your Daily Support",
      prototypeBadge: "AI Accessibility Prototype",
      simulatedNotice: "Simulated Demonstration – For Accessibility Evaluation & Hackathon Showcase",
      
      nav: {
        home: "Home",
        guide: "Life Guide",
        companion: "Life Companion",
        reminder: "Life Reminder",
        language: "Life Language",
        emergency: "Life Emergency",
        about: "About Project",
        emergencyQuick: "SOS Emergency",
        voiceTrigger: "Hi Life"
      },

      accessibility: {
        toolbar: "Accessibility Settings",
        contrastNormal: "Standard Contrast",
        contrastHigh: "High Contrast (AAA)",
        fontSize: "Text Size",
        fontNormal: "A",
        fontLarge: "A+",
        fontXLarge: "A++",
        soundOn: "Sound On",
        soundOff: "Sound Muted",
        voiceRead: "Read Screen Aloud",
        voiceStop: "Stop Reading"
      },

      home: {
        heroBadge: "Voice-First AI Independence",
        heroTitle: "Empowering Visually Impaired Lives with Voice-First AI",
        heroDesc: "LifeMate AI combines smart outdoor vision navigation, an empathetic conversational companion, safe medication reminders, and a life-saving emergency circle into one voice-guided platform.",
        voicePrompt: "Press microphone or say \"Hi Life\" to start",
        micAction: "Activate Voice Assistant",
        exploreFeatures: "Explore AI Features",
        emergencyDirect: "Emergency SOS Demo",

        featuresTitle: "Five Core Assistive Pillars",
        featuresSubtitle: "Specially engineered for non-visual independence, intuitive auditory feedback, and daily confidence.",
        
        guideCard: {
          title: "Life Guide",
          tag: "Smart Outdoor Assistance",
          desc: "Rear-camera environmental sensing, obstacle detection, door & stair alerts, and turn-by-turn auditory GPS navigation.",
          action: "Open Outdoor Guide"
        },
        companionCard: {
          title: "Life Companion",
          tag: "Empathetic AI Conversation",
          desc: "Friendly voice discussions, emotional check-ins, daily mood tracking, and mindful support to combat isolation.",
          action: "Talk to Companion"
        },
        reminderCard: {
          title: "Life Reminder",
          tag: "Medication & Health Schedule",
          desc: "Clear daily medicine alarms, dosage audio guidance, snooze & taken confirmations, plus missed-dose guardian alerts.",
          action: "View Medicine Schedule"
        },
        languageCard: {
          title: "Life Language",
          tag: "Regional Voice Inclusivity",
          desc: "Immediate switching across Tamil, English, Hindi, Telugu, Malayalam, and Kannada with native voice feedback.",
          action: "Select Language"
        },
        emergencyCard: {
          title: "Life Emergency",
          tag: "Rapid Safety Alert System",
          desc: "One-touch SOS button, \"Hi Life, Emergency!\" voice trigger, 5-second false-alarm countdown, and simulated location SMS/call dispatch.",
          action: "Emergency System"
        },

        stats: {
          users: "2.2B+",
          usersLabel: "People with Vision Impairment Globally",
          voice: "100%",
          voiceLabel: "Voice-Operated & Screen-Reader Optimized",
          contrast: "WCAG AAA",
          contrastLabel: "Highest Contrast Standard Compliant",
          languages: "6",
          languagesLabel: "Indian & Global Languages Supported"
        }
      },

      guide: {
        title: "Life Guide – Smart Outdoor Assistance",
        subtitle: "Real-time obstacle awareness, object description, and auditory walking navigation.",
        simulatedAlert: "Simulation Notice: Camera computer vision and GPS navigation shown here are simulated assistive concepts for prototype testing.",
        
        micCommand: "Hi Life",
        micSub: "Tap to listen or say \"Hi Life\"",
        assistantStatusReady: "Life Guide is standing by. Tap mic or activate camera below.",
        assistantStatusListening: "Listening to your surroundings or command...",
        assistantStatusProcessing: "Analyzing spatial environment...",
        
        cameraHeader: "Smart Spatial Vision",
        rearCamMode: "Simulated Rear-Camera Sensor",
        webcamToggle: "Toggle Webcam / Simulation",
        detectionTitle: "AI Environment Perception",
        activeAlert: "Active Spatial Warning:",
        doorWarning: "There is a door ahead. Please be careful. Distance: 2.1 meters.",
        stairWarning: "Staircase detected 3 meters ahead, 4 steps ascending.",
        clearWarning: "Sidewalk clear for the next 8 meters.",
        crosswalkWarning: "Pedestrian crosswalk ahead. Signal light is GREEN.",
        
        navHeader: "Auditory Destination Walking Guidance",
        destInputPlaceholder: "Enter destination (e.g. Metro Station, General Hospital)",
        startNavBtn: "Start GPS Route Guidance",
        cancelNavBtn: "Stop Navigation",
        routeStatus: "Route Active: Guiding to",
        nextStepTitle: "Next Auditory Step:",
        stepInstruction: "Walk straight for 35 meters, then veer slightly left at the tactile paving.",
        distanceRemaining: "Remaining Distance: 240 meters (~3 mins walk)",
        audioPulseBtn: "Test Proximity Audio Radar",

        permissionStates: {
          title: "Sensor Permissions Status",
          camera: "Camera Sensor: Simulated Stream Ready",
          mic: "Microphone Input: Active & Listening",
          location: "Location GPS: High Accuracy Mode Sim"
        }
      },

      companion: {
        title: "Life Companion – AI Conversational Friend",
        subtitle: "A warm, comforting voice companion to talk about your day, listen, and brighten your spirits.",
        dailyGreeting: "Good evening! How was your day today? I am here to listen whenever you want to talk.",
        quickPromptsLabel: "Quick voice prompts to try:",
        prompt1: "How was your day?",
        prompt2: "Can you tell me an uplifting short story?",
        prompt3: "Guide me through a 1-minute calming breath",
        prompt4: "What's the weather like today?",
        
        inputPlaceholder: "Type a message or press the mic button to speak...",
        sendBtn: "Send Message",
        micBtn: "Speak to LifeMate",
        clearHistory: "Clear Chat History",
        readAloudBtn: "Read aloud",
        
        checkinHeader: "Daily Well-being Check-In Settings",
        checkinDesc: "Configure gentle automatic check-ins so LifeMate can check on your comfort.",
        morningTime: "Morning Greeting Time",
        eveningTime: "Evening Reflection Time",
        moodTrackerTitle: "How are you feeling right now?",
        moodHappy: "Peaceful & Happy",
        moodCalm: "Relaxed & Calm",
        moodTired: "A Little Tired",
        moodAnxious: "Need Encouragement",
        saveCheckin: "Save Check-In Preferences"
      },

      reminder: {
        title: "Life Reminder – Medication Schedule & Alerts",
        subtitle: "Empowering visually impaired individuals to manage prescribed medicines safely with voice alerts.",
        disclaimer: "Strict Medical Notice: LifeMate AI is a schedule reminder tool. It NEVER recommends medications, alters doses, or replaces medical professional advice.",
        
        addMedicineBtn: "+ Add New Medicine",
        dailyScheduleHeader: "Today's Medicine Schedule",
        testAlarmBtn: "Simulate Incoming Reminder Alarm",
        
        statusTaken: "Taken",
        statusPending: "Due Now",
        statusUpcoming: "Scheduled",
        statusSnoozed: "Snoozed (10m)",
        
        btnTaken: "Mark as Taken",
        btnSnooze: "Snooze 10 Mins",
        btnAcknowledge: "Acknowledge",
        
        trustedContactAlert: "Guardian Notification Feature",
        trustedContactDesc: "Automatically send an SMS alert to your primary contact if medication is unacknowledged for over 30 minutes.",
        trustedToggle: "Guardian Missed-Dose SMS Alerts: ENABLED",

        modalTitle: "MEDICINE TIME ALERT",
        modalText: "It is 08:30 PM. Please take Metformin 500mg tablet with warm water after dinner.",
        closeModal: "Dismiss"
      },

      language: {
        title: "Life Language – Regional Voice Selection",
        subtitle: "Choose your preferred language. The entire interface, voice guidance, and companion dialogues will adapt immediately.",
        currentSelected: "Currently Active Language:",
        previewVoiceBtn: "Listen to Voice Greeting",
        saveLanguageBtn: "Apply & Set as Default",
        audioSampleText: "Sample Voice Audio Preview:"
      },

      emergency: {
        title: "Life Emergency – Rapid Safety Alert System",
        subtitle: "Instant multi-contact SOS dispatch with voice command and location sharing.",
        emergencyVoiceCommand: "Voice Command: Say \"Hi Life, Emergency!\"",
        sosBtnText: "TRIGGER EMERGENCY SOS",
        sosSubtext: "Tap once to activate emergency countdown",
        
        countdownWarning: "EMERGENCY SOS ACTIVATING!",
        countdownDesc: "Alerting trusted emergency contacts and sharing simulated GPS coordinates in:",
        secondsLabel: "SECONDS",
        cancelSosBtn: "CANCEL FALSE ALARM (I AM SAFE)",
        
        simulationNotice: "Hackathon Demonstration: All calls and SMS messages shown are simulations. No real phone calls or SMS are dispatched.",
        
        simCallTitle: "Simulated Outgoing Emergency Call",
        simCallContact: "Calling: Dr. Rajesh Kumar (Son / Primary Guardian)",
        simCallStatus: "Connected • Live Voice Link Active",
        simEndCall: "End Emergency Call",
        
        simSmsTitle: "Simulated Automated SMS Alert",
        simSmsRecipient: "To: +91 98401 23456 (Dr. Rajesh Kumar), +91 94440 98765 (Priya Kumar)",
        simSmsBody: "EMERGENCY ALERT: LifeMate AI user initiated an urgent distress call. Last known GPS location: 13.0827° N, 80.2707° E (Near Anna Salai, Chennai). Battery: 88%. Live location tracker active.",
        
        locationCardTitle: "Simulated Live GPS Location Tracker",
        gpsCoords: "Latitude: 13.0827° N | Longitude: 80.2707° E",
        gpsAddress: "Near Anna Salai, Chennai, Tamil Nadu 600002",
        gpsAccuracy: "Accuracy: ± 4.2 meters (High Precision GPS)",
        
        contactsHeader: "Registered Emergency Contacts",
        addContactBtn: "+ Add New Emergency Contact",
        primaryBadge: "Primary Contact"
      },

      about: {
        title: "About LifeMate AI Project",
        subtitle: "A Voice-First AI Companion Designed for Non-Visual Independence",
        problemHeader: "The Problem Statement",
        problemText: "Over 2.2 billion people globally experience visual impairment. Everyday tasks such as independently walking on unpredictable streets, navigating unfamiliar indoor spaces, managing complex multidrug dosage routines without confusing bottles, and dealing with isolation or sudden emergencies pose immense challenges. Traditional smartphones are highly visual and touch-centric, leaving visually impaired users frustrated.",
        
        solutionHeader: "The LifeMate AI Solution",
        solutionText: "LifeMate AI re-imagines independence through a Voice-First, multimodal assistive platform. By fusing simulated computer-vision obstacle sensing, turn-by-turn auditory guidance, an empathetic conversational companion, safe medication reminders with guardian circles, and an instant SOS emergency protocol in 6 regional languages, LifeMate acts as an ever-present digital guardian.",
        
        objectivesTitle: "Core Engineering Objectives",
        obj1: "Zero-Vision Operability: Every key flow operates through clear speech synthesis, voice recognition, and procedural acoustic cues.",
        obj2: "Empathetic Companionship: Mitigating loneliness through interactive check-ins, mood reflection, and warm dialogue.",
        obj3: "Health Adherence & Safety: Preventing dosage confusion through timed auditory alarms and guardian escalation.",
        obj4: "Multilingual Inclusivity: Breaking language barriers with fluent Tamil, Hindi, Telugu, Malayalam, Kannada, and English support.",

        techHeader: "Technologies & Accessibility Standards",
        techText: "LifeMate AI is built adhering strictly to WCAG 2.1 AAA accessibility benchmarks, featuring high-contrast modes, dynamic typography scaling, Web Speech API integration, Web Audio procedural acoustics, and semantic ARIA landmarks.",
        
        disclaimerTitle: "Hackathon Prototype Transparency Notice",
        disclaimerText: "This website prototype is engineered for evaluation, demonstration, and hackathon presentation. Simulated camera detection, GPS coordinates, SMS dispatches, and phone calls are modeled representations of full hardware-integrated capabilities."
      }
    },

    ta: {
      appName: "லைஃப்மேட் AI (LifeMate)",
      tagline: "உங்கள் வழிகாட்டி • உங்கள் தோழன் • உங்கள் தினசரி ஆதரவு",
      prototypeBadge: "AI அணுகல்தன்மை மாதிரி வடிவம்",
      simulatedNotice: "செயற்கை மாதிரி விளக்கக்காட்சி – பார்வை மாற்றுத்திறனாளிகளுக்கான குரல் AI முன்மாதிரி",

      nav: {
        home: "முகப்பு",
        guide: "லைஃப் வழிகாட்டி",
        companion: "லைஃப் தோழன்",
        reminder: "மருந்து நினைவூட்டல்",
        language: "மொழி தேர்வு",
        emergency: "அவசரகால உதவி",
        about: "திட்டம் பற்றி",
        emergencyQuick: "SOS அவசரம்",
        voiceTrigger: "ஹாய் லைஃப்"
      },

      accessibility: {
        toolbar: "அணுகல்தன்மை அமைப்புகள்",
        contrastNormal: "சாதாரண வண்ணம்",
        contrastHigh: "உயர் மாறுபாடு (AAA)",
        fontSize: "எழுத்து அளவு",
        fontNormal: "A",
        fontLarge: "A+",
        fontXLarge: "A++",
        soundOn: "ஒலி இயக்கத்தில்",
        soundOff: "ஒலி முடக்கம்",
        voiceRead: "திரையை வாசி",
        voiceStop: "வாசிப்பதை நிறுத்து"
      },

      home: {
        heroBadge: "குரல் வழி இயங்கும் AI சுதந்திரம்",
        heroTitle: "பார்வை மாற்றுத்திறனாளிகளுக்கு குரல் வழி AI மூலமான சுதந்திர வாழ்க்கை",
        heroDesc: "லைஃப்மேட் AI ஸ்மார்ட் வெளிப்புற கேமரா வழிகாட்டல், அன்பான உரையாடல் தோழன், பாதுகாப்பான மருந்து நினைவூட்டல் மற்றும் அவசரகால பாதுகாப்பை ஒரே குரல் தளத்தில் வழங்குகிறது.",
        voicePrompt: "தொடங்க மைக்ரோஃபோனை அழுத்தவும் அல்லது \"ஹாய் லைஃப்\" என்று கூறவும்",
        micAction: "குரல் உதவியாளரை இயக்கு",
        exploreFeatures: "அம்சங்களை ஆராயுங்கள்",
        emergencyDirect: "அவசரகால SOS டெமோ",

        featuresTitle: "ஐந்து முக்கிய அம்சங்கள்",
        featuresSubtitle: "பார்வையற்றோர் நம்பிக்கையுடனும் தன்னிச்சையாகவும் வாழ பிரத்யேகமாக வடிவமைக்கப்பட்டது.",

        guideCard: {
          title: "லைஃப் வழிகாட்டி",
          tag: "ஸ்மார்ட் வெளிப்புற வழிகாட்டல்",
          desc: "கேமரா மூலம் தடைகள் கண்டறிதல், கதவு மற்றும் படிக்கட்டுகள் பற்றிய குரல் எச்சரிக்கை, ஜி.பி.எஸ் நடைபாதை வழிகாட்டல்.",
          action: "வழிகாட்டியைத் திற"
        },
        companionCard: {
          title: "லைஃப் தோழன்",
          tag: "அன்பான AI உரையாடல்",
          desc: "நட்பான தினசரி குரல் உரையாடல்கள், மனநிலை கண்காணிப்பு, ஆறுதலான கதைகள் மற்றும் மன அமைதி பயிற்சிகள்.",
          action: "தோழனுடன் பேசு"
        },
        reminderCard: {
          title: "மருந்து நினைவூட்டல்",
          tag: "மருந்து மற்றும் சுகாதார அட்டவணை",
          desc: "சரியான நேரத்திற்கு மருந்து எச்சரிக்கை, குரல் அறிவிப்பு, உறவினர்களுக்கு விடுபட்ட மருந்து குறுஞ்செய்தி.",
          action: "மருந்து அட்டவணை"
        },
        languageCard: {
          title: "மொழி தேர்வு",
          tag: "தமிழ் மற்றும் பிற மொழிகள்",
          desc: "தமிழ், ஆங்கிலம், இந்தி, தெலுங்கு, மலையாளம் மற்றும் கன்னடம் ஆகிய மொழிகளில் உடனடி குரல் மாற்றம்.",
          action: "மொழியைத் தேர்ந்தெடு"
        },
        emergencyCard: {
          title: "அவசரகால உதவி",
          tag: "விரைவான பாதுகாப்பு அமைப்பு",
          desc: "\"ஹாய் லைஃப், எமர்ஜென்சி!\" குரல் கட்டளை, 5 வினாடி பாதுகாப்பு கவுண்ட்டவுன், இருப்பிட குறுஞ்செய்தி மற்றும் அழைப்பு டெமோ.",
          action: "அவசரகால உதவி"
        },

        stats: {
          users: "2.2B+",
          usersLabel: "உலகளவில் பார்வை குறைபாடுடைய நபர்கள்",
          voice: "100%",
          voiceLabel: "முழு குரல் வழி கட்டுப்பாடு",
          contrast: "WCAG AAA",
          contrastLabel: "உயர்ந்த மாறுபட்ட பார்வை தரம்",
          languages: "6",
          languagesLabel: "ஆதரிக்கப்படும் இந்திய மொழிகள்"
        }
      },

      guide: {
        title: "லைஃப் வழிகாட்டி – ஸ்மார்ட் வெளிப்புற வழிகாட்டல்",
        subtitle: "நிகழ்நேர தடைகள் கண்டறிதல், பொருள் விவரங்கள் மற்றும் நடைபாதை வழிகாட்டல்.",
        simulatedAlert: "மாதிரி அறிவிப்பு: கேமரா பார்வை மற்றும் ஜி.பி.எஸ் வழிகாட்டல் ஒரு மாதிரி செயல்விளக்கமாகும்.",

        micCommand: "ஹாய் லைஃப்",
        micSub: "மைக்ரோஃபோனைத் தொடவும் அல்லது \"ஹாய் லைஃப்\" எனக் கூறவும்",
        assistantStatusReady: "லைஃப் வழிகாட்டி தயாராக உள்ளது. மைக்கை தொடவும்.",
        assistantStatusListening: "சுற்றுப்புறத்தை கவனிக்கிறது...",
        assistantStatusProcessing: "சுற்றுச்சூழலை பகுப்பாய்வு செய்கிறது...",

        cameraHeader: "ஸ்மார்ட் இடஞ்சார்ந்த பார்வை",
        rearCamMode: "மாதிரி பின்புற கேமரா சென்சார்",
        webcamToggle: "வெப்கேம் / மாதிரி பார்வை மாற்று",
        detectionTitle: "AI சூழல் பார்வை",
        activeAlert: "செயலில் உள்ள குரல் எச்சரிக்கை:",
        doorWarning: "முன்னால் ஒரு கதவு உள்ளது. தயவுசெய்து கவனமாக இருங்கள். தூரம் 2.1 மீட்டர்கள்.",
        stairWarning: "3 மீட்டர் முன்னால் படிக்கட்டுகள் உள்ளன, 4 படிகள் மேலே செல்ல வேண்டும்.",
        clearWarning: "அடுத்த 8 மீட்டருக்கு நடைபாதை தடையின்றி தெளிவாக உள்ளது.",
        crosswalkWarning: "முன்னால் பாதசாரிகள் கடக்கும் பாதை. பச்சை விளக்கு எரிகிறது.",

        navHeader: "குரல் வழி நடைபாதை ஜி.பி.எஸ் வழிகாட்டல்",
        destInputPlaceholder: "செல்ல வேண்டிய இடம் (எ.கா. மெட்ரோ நிலையம், அரசு மருத்துவமனை)",
        startNavBtn: "வழிகாட்டலைத் தொடங்கு",
        cancelNavBtn: "வழிகாட்டலை நிறுத்து",
        routeStatus: "செயலில் உள்ள பாதை: செல்லும் இடம்",
        nextStepTitle: "அடுத்த குரல் அறிவுறுத்தல்:",
        stepInstruction: "35 மீட்டர்கள் நேராகச் செல்லுங்கள், பின்னர் இடதுபுறம் லேசாகத் திரும்புங்கள்.",
        distanceRemaining: "மீதமுள்ள தூரம்: 240 மீட்டர்கள் (~3 நிமிடங்கள் நடை)",
        audioPulseBtn: "ரேடார் ஒலி துடிப்பை சோதிக்கவும்",

        permissionStates: {
          title: "சென்சார் அனுமதி நிலைகள்",
          camera: "கேமரா சென்சார்: மாதிரி பார்வை தயார்",
          mic: "மைக்ரோஃபோன்: செயலில் உள்ளது",
          location: "ஜி.பி.எஸ் இருப்பிடம்: உயர் துல்லியம்"
        }
      },

      companion: {
        title: "லைஃப் தோழன் – AI உரையாடல் நண்பன்",
        subtitle: "உங்கள் அன்றாட நிகழ்வுகளைப் பகிர்ந்துகொள்ளவும் ஆறுதல் பெறவும் ஒரு அன்பான குரல் தோழன்.",
        dailyGreeting: "வணக்கம்! இன்று உங்கள் நாள் எப்படி இருந்தது? நீங்கள் பேச விரும்பும் எதையும் என்னிடம் பகிர்ந்துகொள்ளலாம்.",
        quickPromptsLabel: "முயற்சி செய்யக்கூடிய குரல் கேள்விகள்:",
        prompt1: "இன்று உங்கள் நாள் எப்படி இருந்தது?",
        prompt2: "எனக்கு ஒரு நல்ல சிறுகதை கூற முடியுமா?",
        prompt3: "1 நிமிட சுவாச தியானத்திற்கு வழிகாட்டவும்",
        prompt4: "இன்றைய வானிலை எப்படி உள்ளது?",

        inputPlaceholder: "செய்தியை தட்டச்சு செய்யவும் அல்லது பேச மைக்கை அழுத்தவும்...",
        sendBtn: "அனுப்பு",
        micBtn: "பேச மைக்",
        clearHistory: "உரையாடலை அழி",
        readAloudBtn: "வாசித்து காட்டு",

        checkinHeader: "தினசரி நலம் விசாரிக்கும் அமைப்புகள்",
        checkinDesc: "லைஃப்மேட் உங்களிடம் அன்புடன் நலம் விசாரிக்க நேரத்தை தேர்வு செய்யவும்.",
        morningTime: "காலை வாழ்த்து நேரம்",
        eveningTime: "மாலை நலம் விசாரிக்கும் நேரம்",
        moodTrackerTitle: "இப்போது உங்கள் மனம் எவ்வாறு உணர்கிறது?",
        moodHappy: "மகிழ்ச்சியாக உள்ளேன்",
        moodCalm: "அமைதியாக உள்ளேன்",
        moodTired: "சற்று சோர்வாக உள்ளேன்",
        moodAnxious: "ஆறுதல் தேவைப்படுகிறது",
        saveCheckin: "அமைப்புகளைச் சேமி"
      },

      reminder: {
        title: "லைஃப் நினைவூட்டல் – மருந்து அட்டவணை",
        subtitle: "மருந்துகளை சரியான நேரத்தில் தவறாமல் எடுத்துக்கொள்ள குரல் வழி நினைவூட்டல்.",
        disclaimer: "முக்கிய மருத்துவ குறிப்பு: லைஃப்மேட் AI மருந்து அட்டவணையை மட்டுமே நினைவூட்டும். எந்த மருந்தையும் பரிந்துரைக்கவோ மாற்றவோ செய்யாது.",

        addMedicineBtn: "+ புதிய மருந்தைச் சேர்க்கவும்",
        dailyScheduleHeader: "இன்றைய மருந்து அட்டவணை",
        testAlarmBtn: "மருந்து எச்சரிக்கை அலாரத்தை சோதிக்கவும்",

        statusTaken: "எடுத்துக்கொள்ளப்பட்டது",
        statusPending: "இப்போது நேரம்",
        statusUpcoming: "திட்டமிடப்பட்டுள்ளது",
        statusSnoozed: "தள்ளிவைக்கப்பட்டது (10 நிமிடம்)",

        btnTaken: "மருந்து எடுத்தேன்",
        btnSnooze: "10 நிமிடம் கழித்து",
        btnAcknowledge: "புரிந்துகொண்டேன்",

        trustedContactAlert: "பாதுகாவலர் குறுஞ்செய்தி அம்சம்",
        trustedContactDesc: "30 நிமிடங்களுக்குள் மருந்து எடுக்கப்படாவிட்டால் உங்கள் பாதுகாவலருக்கு குறுஞ்செய்தி அனுப்பப்படும்.",
        trustedToggle: "பாதுகாவலர் அவசர குறுஞ்செய்தி: இயக்கத்தில் உள்ளது",

        modalTitle: "மருந்து எடுத்துக்கொள்ளும் நேரம்!",
        modalText: "இரவு 08:30 மணி. உணவுக்குப் பிறகு மெட்ஃபோர்மின் 500mg மாத்திரையை வெதுவெதுப்பான நீருடன் எடுத்துக்கொள்ளவும்.",
        closeModal: "மூடு"
      },

      language: {
        title: "மொழி தேர்வு – குரல் மொழி அமைப்புகள்",
        subtitle: "உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும். அனைத்து குரல் வழிகாட்டல்களும் உடனே மாறும்.",
        currentSelected: "தற்போது செயலில் உள்ள மொழி:",
        previewVoiceBtn: "குரல் வாழ்த்தை கேட்கவும்",
        saveLanguageBtn: "இயல்புநிலை மொழியாக அமை",
        audioSampleText: "குரல் மாதிரி ஒலி:"
      },

      emergency: {
        title: "லைஃப் அவசர உதவி – உடனடி பாதுகாப்பு அமைப்பு",
        subtitle: "குரல் கட்டளை மற்றும் இருப்பிட பகிர்வுடன் கூடிய அவசரகால பாதுகாப்பு தளம்.",
        emergencyVoiceCommand: "குரல் கட்டளை: \"ஹாய் லைஃப், எமர்ஜென்சி!\" என்று கூறவும்",
        sosBtnText: "அவசரகால SOS பொத்தான்",
        sosSubtext: "அவசர கவுண்ட்டவுனை தொடங்க அழுத்தவும்",

        countdownWarning: "அவசர உதவி இயக்கப்படுகிறது!",
        countdownDesc: "பாதுகாவலர்களைத் தொடர்பு கொள்ளவும் ஜி.பி.எஸ் இருப்பிடத்தை அனுப்பவும் மீதமுள்ள நேரம்:",
        secondsLabel: "வினாடிகள்",
        cancelSosBtn: "தவறான எச்சரிக்கை - ரத்து செய் (நான் பாதுகாப்பாக உள்ளேன்)",

        simulationNotice: "மாதிரி டெமோ: இங்கே காட்டப்படும் அழைப்புகள் மற்றும் குறுஞ்செய்திகள் மாதிரி காட்சிகளே. உண்மையான அழைப்புகள் செல்லாது.",

        simCallTitle: "அவசரகால மாதிரி அழைப்பு",
        simCallContact: "அழைக்கப்படுகிறது: டாக்டர். ராஜேஷ் குமார் (மகன் / பாதுகாவலர்)",
        simCallStatus: "இணைக்கப்பட்டது • குரல் தொடர்பு செயலில் உள்ளது",
        simEndCall: "அழைப்பை முடி",

        simSmsTitle: "மாதிரி தானியங்கி அவசர குறுஞ்செய்தி",
        simSmsRecipient: "பெறுநர்: +91 98401 23456 (டாக்டர். ராஜேஷ் குமார்)",
        simSmsBody: "அவசர எச்சரிக்கை: லைஃப்மேட் AI பயனர் அவசர உதவியைக் கோரியுள்ளார். ஜி.பி.எஸ் இருப்பிடம்: 13.0827° N, 80.2707° E (அண்ணா சாலை அருகில், சென்னை). பேட்டரி: 88%.",

        locationCardTitle: "மாதிரி நேரலை ஜி.பி.எஸ் இருப்பிடம்",
        gpsCoords: "அட்சரேகை: 13.0827° N | தீர்க்கரேகை: 80.2707° E",
        gpsAddress: "அண்ணா சாலை அருகில், சென்னை, தமிழ்நாடு 600002",
        gpsAccuracy: "துல்லியம்: ± 4.2 மீட்டர்கள்",

        contactsHeader: "பதிவுசெய்யப்பட்ட அவசர தொடர்புகள்",
        addContactBtn: "+ புதிய தொடர்பைச் சேர்க்க",
        primaryBadge: "முதன்மை தொடர்பு"
      },

      about: {
        title: "லைஃப்மேட் AI திட்டம் பற்றி",
        subtitle: "பார்வை மாற்றுத்திறனாளிகளுக்கான குரல் வழி இயங்கும் AI தோழன்",
        problemHeader: "பிரச்சனை பின்னணி",
        problemText: "உலகளவில் 220 கோடிக்கும் அதிகமான மக்கள் பார்வை குறைபாட்டுடன் வாழ்கின்றனர். சாலையில் சுயமாக நடப்பது, மருந்துகளைத் தவறாமல் எடுப்பது மற்றும் திடீர் அவசரநிலைகளில் உடனடியாக உதவி பெறுவது மிகப்பெரிய சவால்களாக உள்ளன.",

        solutionHeader: "லைஃப்மேட் AI தீர்வு",
        solutionText: "லைஃப்மேட் AI குரல் வழி கட்டுப்பாட்டுடன் செயல்படுகிறது. கேமரா தடை கண்டறிதல், நடைபாதை வழிகாட்டல், அன்பான உரையாடல் மற்றும் அவசரகால பாதுகாப்பு ஆகியவற்றை ஒரே அமைப்பில் ஒருங்கிணைக்கிறது.",

        objectivesTitle: "முக்கிய குறிக்கோள்கள்",
        obj1: "முழுமையான குரல் கட்டுப்பாடு: திரையைப் பார்க்காமலேயே அனைத்து அம்சங்களையும் இயக்க முடியும்.",
        obj2: "அன்பான தோழமை: தனிமையைப் போக்க குரல் வழி உரையாடல் மற்றும் நலம் விசாரித்தல்.",
        obj3: "சுகாதாரப் பாதுகாப்பு: மருந்துகளை மறக்காமல் எடுத்துக்கொள்ள உதவும் குரல் நினைவூட்டல்.",
        obj4: "பிராந்திய மொழி ஆதரவு: தமிழ், இந்தி, தெலுங்கு, மலையாளம், கன்னடம் மற்றும் ஆங்கிலத்தில் செயல்படும் திறன்.",

        techHeader: "தொழில்நுட்பங்கள் மற்றும் அணுகல்தன்மை",
        techText: "WCAG 2.1 AAA தரநிலைகளுக்கு ஏற்ப உயர் மாறுபாடு, பெரிய பொத்தான்கள் மற்றும் குரல் வாசிப்பு வசதியுடன் கட்டமைக்கப்பட்டுள்ளது.",

        disclaimerTitle: "ஹேக்கத்தான் மாதிரி வெளிப்படைத்தன்மை குறிப்பு",
        disclaimerText: "இந்த இணையதளம் ஹேக்கத்தான் செயல்விளக்கத்திற்கான மாதிரி வடிவமாகும். உண்மையான சென்சார்கள் மற்றும் ஜி.பி.எஸ் இந்த முன்மாதிரியில் செயற்கையாக உருவகப்படுத்தப்பட்டுள்ளன."
      }
    },

    hi: {
      appName: "लाइफमेट AI (LifeMate)",
      tagline: "आपका मार्गदर्शक • आपका साथी • आपका दैनिक संबल",
      prototypeBadge: "AI सुगम्यता प्रोटोटाइप",
      simulatedNotice: "सिम्युलेटेड डेमो – दृष्टिबाधित उपयोगकर्ताओं के लिए वॉयस AI प्रोटोटाइप",

      nav: {
        home: "होम",
        guide: "लाइफ गाइड",
        companion: "लाइफ साथी",
        reminder: "दवा रिमाइंडर",
        language: "भाषा चयन",
        emergency: "आपातकालीन SOS",
        about: "परियोजना विवरण",
        emergencyQuick: "SOS आपातकाल",
        voiceTrigger: "हाय लाइफ"
      },

      accessibility: {
        toolbar: "सुगम्यता सेटिंग्स",
        contrastNormal: "सामान्य कंट्रास्ट",
        contrastHigh: "उच्च कंट्रास्ट (AAA)",
        fontSize: "फॉन्ट आकार",
        fontNormal: "A",
        fontLarge: "A+",
        fontXLarge: "A++",
        soundOn: "ध्वनि चालू",
        soundOff: "ध्वनि म्यूट",
        voiceRead: "स्क्रीन पढ़कर सुनाएं",
        voiceStop: "पढ़ना बंद करें"
      },

      home: {
        heroBadge: "वॉयस-फर्स्ट AI स्वतंत्रता",
        heroTitle: "दृष्टिबाधित व्यक्तियों के लिए वॉयस-फर्स्ट AI द्वारा आत्मनिर्भर जीवन",
        heroDesc: "लाइफमेट AI स्मार्ट आउटडोर कैमरा मार्गदर्शन, आत्मीय संवादी साथी, सुरक्षित दवा रिमाइंडर और आपातकालीन सुरक्षा चक्र को एक आवाज-निर्देशित मंच पर लाता है।",
        voicePrompt: "शुरू करने के लिए माइक दबाएं या \"हाय लाइफ\" कहें",
        micAction: "वॉयस असिस्टेंट सक्रिय करें",
        exploreFeatures: "सुविधाएं देखें",
        emergencyDirect: "आपातकालीन SOS डेमो",

        featuresTitle: "पाँच मुख्य स्तंभ",
        featuresSubtitle: "नेत्रहीन व्यक्तियों की दैनिक आत्मनिर्भरता और सुरक्षा के लिए विशेष रूप से डिज़ाइन किया गया।",

        guideCard: {
          title: "लाइफ गाइड",
          tag: "स्मार्ट आउटडोर सहायता",
          desc: "रियर-कैमरा बाधा पहचान, दरवाजे और सीढ़ियों की वॉयस चेतावनी और टर्न-बाय-टर्न ऑडियो जीपीएस नेविगेशन।",
          action: "गाइड खोलें"
        },
        companionCard: {
          title: "लाइफ साथी",
          tag: "आत्मीय AI बातचीत",
          desc: "मित्रवत बातचीत, भावनात्मक हालचाल, दैनिक मूड ट्रैकर और तनावमुक्ति अभ्यास।",
          action: "साथी से बात करें"
        },
        reminderCard: {
          title: "दवा रिमाइंडर",
          tag: "दवा और स्वास्थ्य शेड्यूल",
          desc: "समय पर दवा अलार्म, खुराक वॉयस मार्गदर्शन, स्नूज़ बटन और अभिभावक अलर्ट।",
          action: "दवा शेड्यूल देखें"
        },
        languageCard: {
          title: "भाषा चयन",
          tag: "क्षेत्रीय भारतीय भाषाएं",
          desc: "तमिल, अंग्रेजी, हिंदी, तेलुगु, मलयालम और कन्नड़ में सहज आवाज अनुवाद।",
          action: "भाषा चुनें"
        },
        emergencyCard: {
          title: "आपातकालीन SOS",
          tag: "त्वरित सुरक्षा प्रणाली",
          desc: "\"हाय लाइफ, इमरजेंसी!\" वॉयस कमांड, 5-सेकंड उलटी गिनती, लाइव लोकेशन SMS और कॉल डेमो।",
          action: "आपातकालीन प्रणाली"
        },

        stats: {
          users: "2.2B+",
          usersLabel: "विश्वभर में दृष्टिबाधित व्यक्ति",
          voice: "100%",
          voiceLabel: "पूर्ण वॉयस-नियंत्रित प्रणाली",
          contrast: "WCAG AAA",
          contrastLabel: "उच्चतम दृश्य कंट्रास्ट मानक",
          languages: "6",
          languagesLabel: "समर्थित भारतीय भाषाएं"
        }
      },

      guide: {
        title: "लाइफ गाइड – स्मार्ट आउटडोर सहायता",
        subtitle: "रीयल-टाइम बाधा पहचान, वस्तु विवरण और ऑडियो नेविगेशन।",
        simulatedAlert: "सिम्युलेशन सूचना: कैमरा विज़न और जीपीएस नेविगेशन प्रोटोटाइप परीक्षण के लिए सिम्युलेटेड हैं।",

        micCommand: "हाय लाइफ",
        micSub: "माइक छुएं या कहें \"हाय लाइफ\"",
        assistantStatusReady: "लाइफ गाइड तैयार है। माइक पर टैप करें।",
        assistantStatusListening: "आसपास की आवाज सुन रहा है...",
        assistantStatusProcessing: "परिवेश का विश्लेषण जारी है...",

        cameraHeader: "स्मार्ट स्थानिक दृष्टि",
        rearCamMode: "सिम्युलेटेड रियर-कैमरा सेंसर",
        webcamToggle: "वेबकैम / सिम्युलेशन स्विच",
        detectionTitle: "AI परिवेश बोध",
        activeAlert: "सक्रिय स्थानिक चेतावनी:",
        doorWarning: "आगे एक दरवाज़ा है। कृपया सावधान रहें। दूरी: २.१ मीटर।",
        stairWarning: "३ मीटर आगे सीढ़ियां हैं, ४ कदम ऊपर चढ़ना है।",
        clearWarning: "अगले ८ मीटर तक फुटपाथ एकदम साफ़ है।",
        crosswalkWarning: "आगे पैदल पार पथ है। हरी बत्ती जल रही है।",

        navHeader: "ऑडियो वॉकिंग जीपीएस मार्गदर्शन",
        destInputPlaceholder: "गंतव्य दर्ज करें (जैसे: मेट्रो स्टेशन, सिटी अस्पताल)",
        startNavBtn: "नेविगेशन शुरू करें",
        cancelNavBtn: "नेविगेशन रोकें",
        routeStatus: "सक्रिय मार्ग: गंतव्य",
        nextStepTitle: "अगला ऑडियो निर्देश:",
        stepInstruction: "३५ मीटर सीधे चलें, फिर टाइल्स के साथ बाईं ओर मुड़ें।",
        distanceRemaining: "शेष दूरी: २४० मीटर (~३ मिनट की पैदल दूरी)",
        audioPulseBtn: "दूरी रडार बीप का परीक्षण करें",

        permissionStates: {
          title: "सेंसर अनुमति स्थिति",
          camera: "कैमरा सेंसर: सिम्युलेटेड तैयार",
          mic: "माइक्रोफोन: सक्रिय एवं सुन रहा है",
          location: "जीपीएस लोकेशन: उच्च सटीकता सिम"
        }
      },

      companion: {
        title: "लाइफ साथी – AI संवादी मित्र",
        subtitle: "एक आत्मीय वॉयस साथी जो आपकी सुनेगा और आपका उत्साह बढ़ाएगा।",
        dailyGreeting: "नमस्ते! आज आपका दिन कैसा रहा? मैं हमेशा आपकी बात सुनने के लिए उपस्थित हूँ।",
        quickPromptsLabel: "आज़माने के लिए त्वरित वॉयस सुझाव:",
        prompt1: "आज आपका दिन कैसा बीता?",
        prompt2: "क्या आप मुझे एक प्रेरक लघु कथा सुना सकते हैं?",
        prompt3: "१ मिनट के श्वास प्राणायाम का मार्गदर्शन करें",
        prompt4: "आज का मौसम कैसा है?",

        inputPlaceholder: "संदेश लिखें या बोलने के लिए माइक दबाएं...",
        sendBtn: "भेजें",
        micBtn: "बोलने के लिए माइक",
        clearHistory: "बातचीत हटाएं",
        readAloudBtn: "पढ़कर सुनाएं",

        checkinHeader: "दैनिक कुशलक्षेम सेटिंग्स",
        checkinDesc: "लाइफमेट के हालचाल पूछने का पसंदीदा समय निर्धारित करें।",
        morningTime: "सुबह का अभिवादन समय",
        eveningTime: "शाम का विचार समय",
        moodTrackerTitle: "इस समय आप कैसा महसूस कर रहे हैं?",
        moodHappy: "प्रसन्न और संतुष्ट",
        moodCalm: "शांत और रिलैक्स",
        moodTired: "थोड़ा थका हुआ",
        moodAnxious: "प्रोत्साहन की आवश्यकता",
        saveCheckin: "सेटिंग्स सहेजें"
      },

      reminder: {
        title: "लाइफ रिमाइंडर – दवा शेड्यूल और अलर्ट",
        subtitle: "दृष्टिबाधित व्यक्तियों के लिए वॉयस अलार्म द्वारा सुरक्षित दवा प्रबंधन।",
        disclaimer: "सख्त चिकित्सा सूचना: लाइफमेट AI केवल एक समय रिमाइंडर है। यह कभी दवा की सलाह नहीं देता और न ही खुराक बदलता है।",

        addMedicineBtn: "+ नई दवा जोड़ें",
        dailyScheduleHeader: "आज का दवा शेड्यूल",
        testAlarmBtn: "अलार्म का परीक्षण करें",

        statusTaken: "ली जा चुकी",
        statusPending: "लेने का समय",
        statusUpcoming: "निर्धारित",
        statusSnoozed: "स्नूज़ किया (१० मिनट)",

        btnTaken: "दवा ली गई",
        btnSnooze: "१० मिनट बाद",
        btnAcknowledge: "स्वीकार किया",

        trustedContactAlert: "अभिभावक अलर्ट सुविधा",
        trustedContactDesc: "यदि ३० मिनट तक दवा नहीं ली गई तो अभिभावक को स्वचालित SMS भेजा जाएगा।",
        trustedToggle: "अभिभावक SMS अलर्ट: सक्रिय",

        modalTitle: "दवा का समय हो गया है!",
        modalText: "रात के ०८:३० बज रहे हैं। कृपया भोजन के बाद मेटफॉर्मिन 500mg गोली गुनगुने पानी के साथ लें।",
        closeModal: "बंद करें"
      },

      language: {
        title: "भाषा चयन – क्षेत्रीय वॉयस भाषा",
        subtitle: "अपनी पसंदीदा भाषा चुनें। पूरा इंटरफ़ेस और वॉयस तुरंत बदल जाएगा।",
        currentSelected: "वर्तमान सक्रिय भाषा:",
        previewVoiceBtn: "वॉयस नमूना सुनें",
        saveLanguageBtn: "डिफ़ॉल्ट भाषा बनाएं",
        audioSampleText: "ऑडियो नमूना:"
      },

      emergency: {
        title: "लाइफ इमरजेंसी – तीव्र आपातकालीन सुरक्षा",
        subtitle: "वॉयस कमांड और लाइव लोकेशन साझा करने वाली त्वरित सुरक्षा प्रणाली।",
        emergencyVoiceCommand: "वॉयस कमांड: कहें \"हाय लाइफ, इमरजेंसी!\"",
        sosBtnText: "आपातकालीन SOS बटन",
        sosSubtext: "उलटी गिनती शुरू करने के लिए दबाएं",

        countdownWarning: "आपातकालीन SOS सक्रिय हो रहा है!",
        countdownDesc: "विश्वसनीय संपर्कों को अलर्ट करने और लोकेशन भेजने में शेष समय:",
        secondsLabel: "सेकंड",
        cancelSosBtn: "गलत अलार्म रद्द करें (मैं सुरक्षित हूँ)",

        simulationNotice: "हैकाथॉन डेमो: यहाँ प्रदर्शित कॉल्स और संदेश केवल सिम्युलेशन हैं। कोई वास्तविक कॉल नहीं की जाती।",

        simCallTitle: "सिम्युलेटेड आपातकालीन आउटगोइंग कॉल",
        simCallContact: "कॉल जारी: डॉ. राजेश कुमार (पुत्र / मुख्य अभिभावक)",
        simCallStatus: "कनेक्टेड • लाइव वॉयस लिंक चालू",
        simEndCall: "कॉल समाप्त करें",

        simSmsTitle: "सिम्युलेटेड स्वचालित SMS अलर्ट",
        simSmsRecipient: "प्राप्तकर्ता: +91 98401 23456 (डॉ. राजेश कुमार)",
        simSmsBody: "आपातकालीन चेतावनी: लाइफमेट AI उपयोगकर्ता ने सहायता मांगी है। अंतिम GPS स्थान: 13.0827° N, 80.2707° E (अन्ना सलाई के पास, चेन्नई)। बैटरी: 88%।",

        locationCardTitle: "सिम्युलेटेड लाइव GPS स्थान",
        gpsCoords: "अक्षांश: 13.0827° N | देशांतर: 80.2707° E",
        gpsAddress: "अन्ना सलाई के पास, चेन्नई, तमिलनाडु 600002",
        gpsAccuracy: "सटीकता: ± ४.२ मीटर",

        contactsHeader: "पंजीकृत आपातकालीन संपर्क",
        addContactBtn: "+ नया संपर्क जोड़ें",
        primaryBadge: "प्राथमिक संपर्क"
      },

      about: {
        title: "लाइफमेट AI परियोजना के बारे में",
        subtitle: "दृष्टिबाधित स्वतंत्रता के लिए निर्मित वॉयस-फर्स्ट AI साथी",
        problemHeader: "समस्या का विवरण",
        problemText: "विश्वभर में २.२ अरब से अधिक लोग दृष्टिबाधित हैं। रास्तों पर बिना सहारे चलना, दवाइयाँ पहचानना और आपातकालीन स्थितियों में तुरंत मदद पाना उनके लिए दैनिक चुनौतियां हैं।",

        solutionHeader: "लाइफमेट AI का समाधान",
        solutionText: "लाइफमेट AI वॉयस-फर्स्ट मल्टीमॉडल दृष्टिकोण से स्वावलंबन देता है। यह कैमरा विज़न, ऑडियो नेविगेशन, आत्मीय साथी और आपातकालीन तंत्र को सहजता से जोड़ता है।",

        objectivesTitle: "अभियांत्रिकी उद्देश्य",
        obj1: "शून्य-दृष्टि संचालन: प्रत्येक सुविधा वॉयस और विशेष ऑडियो बीप्स द्वारा संचालित होती है।",
        obj2: "आत्मीय संबल: एकाकीपन दूर करने के लिए वॉयस बातचीत और मूड ट्रैकिंग।",
        obj3: "दवा सुरक्षा: समय पर दवा अनुस्मारक और अभिभावक सूचना।",
        obj4: "बहुभाषी पहुंच: ६ प्रमुख भारतीय भाषाओं में समान कार्यक्षमता।",

        techHeader: "प्रौद्योगिकी एवं सुगम्यता मानक",
        techText: "WCAG 2.1 AAA मानकों, हाई-कंट्रास्ट मोड, वेब स्पीच API और वेब ऑडियो सिंथेसाइज़र के साथ निर्मित।",

        disclaimerTitle: "हैकाथॉन प्रोटोटाइप पारदर्शिता सूचना",
        disclaimerText: "यह वेबसाइट प्रोटोटाइप मूल्यांकन और हैकाथॉन प्रदर्शन के लिए बनाया गया है। इसमें कैमरा विज़न और जीपीएस सिम्युलेटेड रूप में प्रदर्शित हैं।"
      }
    },

    te: {
      appName: "లైఫ్‌మేట్ AI (LifeMate)",
      tagline: "మీ మార్గదర్శి • మీ సహచరుడు • మీ రోజువారీ మద్దతు",
      prototypeBadge: "AI ప్రాప్యత ప్రోటోటైప్",
      simulatedNotice: "సిమ్యులేటెడ్ ప్రదర్శన – అంధుల కోసం వాయిస్ AI నమూనా",

      nav: {
        home: "హోమ్",
        guide: "లైఫ్ గైడ్",
        companion: "లైఫ్ సహచరుడు",
        reminder: "మందుల రిమైండర్",
        language: "భాష ఎంపిక",
        emergency: "అత్యవసర SOS",
        about: "ప్రాజెక్ట్ గురించి",
        emergencyQuick: "SOS అత్యవసరం",
        voiceTrigger: "హాయ్ లైఫ్"
      },

      accessibility: {
        toolbar: "యాక్సెసిబిలిటీ సెట్టింగ్‌లు",
        contrastNormal: "సాధారణ కాంట్రాస్ట్",
        contrastHigh: "హై కాంట్రాస్ట్ (AAA)",
        fontSize: "అక్షర పరిమాణం",
        fontNormal: "A",
        fontLarge: "A+",
        fontXLarge: "A++",
        soundOn: "శబ్దం ఆన్",
        soundOff: "శబ్దం మ్యూట్",
        voiceRead: "స్క్రీన్‌ను చదవండి",
        voiceStop: "చదవడం ఆపండి"
      },

      home: {
        heroBadge: "వాయిస్-ఫస్ట్ AI స్వాతంత్ర్యం",
        heroTitle: "దృష్టి లోపం ఉన్నవారికి వాయిస్-ఫస్ట్ AI ద్వారా స్వతంత్ర జీవనం",
        heroDesc: "లైఫ్‌మేట్ AI స్మార్ట్ అవుట్‌డోర్ కెమెరా మార్గదర్శకత్వం, స్నేహపూర్వక సహచరుడు, సురక్షితమైన మందుల రిమైండర్‌లు మరియు అత్యవసర రక్షణను అందిస్తుంది.",
        voicePrompt: "ప్రారంభించడానికి మైక్ నొక్కండి లేదా \"హాయ్ లైఫ్\" అని చెప్పండి",
        micAction: "వాయిస్ అసిస్టెంట్‌ని ఆన్ చేయండి",
        exploreFeatures: "ఫీచర్లు చూడండి",
        emergencyDirect: "అత్యవసర SOS డెమో",

        featuresTitle: "ఐదు ముఖ్య స్తంభాలు",
        featuresSubtitle: "అంధుల రోజువారీ ఆత్మవిశ్వాసం మరియు భద్రత కోసం ప్రత్యేకంగా రూపొందించబడింది.",

        guideCard: {
          title: "లైఫ్ గైడ్",
          tag: "స్మార్ట్ అవుట్‌డోర్ సహాయం",
          desc: "కెమెరా ద్వారా అడ్డంకుల గుర్తింపు, తలుపులు మరియు మెట్ల వాయిస్ హెచ్చరికలు మరియు GPS నడక మార్గదర్శకత్వం.",
          action: "గైడ్‌ని తెరవండి"
        },
        companionCard: {
          title: "లైఫ్ సహచరుడు",
          tag: "ఆప్యాయతతో కూడిన సంభాషణ",
          desc: "రోజువారీ వాయిస్ సంభాషణలు, మానసిక ఉల్లాసం, స్నేహపూర్వక కథలు మరియు శ్వాస వ్యాయామాలు.",
          action: "సహచరుడితో మాట్లాడండి"
        },
        reminderCard: {
          title: "మందుల రిమైండర్",
          tag: "మందుల సమయ పట్టిక",
          desc: "సరైన సమయానికి మందుల అలారాలు, మోతాదు వివరాలు మరియు సంరక్షకులకు అలర్ట్ మెసేజ్.",
          action: "మందుల షెడ్యూల్"
        },
        languageCard: {
          title: "భాష ఎంపిక",
          tag: "ప్రాంతీయ భాషా మద్దతు",
          desc: "తెలుగు, ఇంగ్లీష్, హిందీ, తమిళం, మలయాళం మరియు కన్నడ భాషల్లో తక్షణ వాయిస్ మార్పిడి.",
          action: "భాషను ఎంచుకోండి"
        },
        emergencyCard: {
          title: "అత్యవసర SOS",
          tag: "త్వరిత రక్షణ వ్యవస్థ",
          desc: "\"హాయ్ లైఫ్, ఎమర్జెన్సీ!\" వాయిస్ కమాండ్, 5 సెకన్ల కౌంట్‌డౌన్, లొకేషన్ SMS మరియు కాల్ డెమో.",
          action: "అత్యవసర వ్యవస్థ"
        },

        stats: {
          users: "2.2B+",
          usersLabel: "ప్రపంచవ్యాప్తంగా దృష్టి లోపం ఉన్న వ్యక్తులు",
          voice: "100%",
          voiceLabel: "పూర్తి వాయిస్ నియంత్రణ",
          contrast: "WCAG AAA",
          contrastLabel: "అత్యుత్తమ కాంట్రాస్ట్ ప్రమాణం",
          languages: "6",
          languagesLabel: "మద్దతు గల భారతీయ భాషలు"
        }
      },

      guide: {
        title: "లైఫ్ గైడ్ – స్మార్ట్ అవుట్‌డోర్ సహాయం",
        subtitle: "నిజ-సమయ అడ్డంకుల గుర్తింపు, వస్తువుల వివరాలు మరియు GPS నడక సహాయం.",
        simulatedAlert: "సిమ్యులేషన్ నోటీసు: కెమెరా గుర్తింపు మరియు GPS నావిగేషన్ నమూనా కోసం సిమ్యులేట్ చేయబడ్డాయి.",

        micCommand: "హాయ్ లైఫ్",
        micSub: "మైక్ నొక్కండి లేదా \"హాయ్ లైఫ్\" అని చెప్పండి",
        assistantStatusReady: "లైఫ్ గైడ్ సిద్ధంగా ఉంది. మైక్‌పై నొక్కండి.",
        assistantStatusListening: "పరిసరాలను వింటోంది...",
        assistantStatusProcessing: "పరిసరాలను విశ్లేషిస్తోంది...",

        cameraHeader: "స్మార్ట్ స్పేషియల్ విజన్",
        rearCamMode: "సిమ్యులేటెడ్ రియర్ కెమెరా సెన్సార్",
        webcamToggle: "వెబ్‌క్యామ్ / సిమ్యులేషన్ మార్చు",
        detectionTitle: "AI వాతావరణ అవగాహన",
        activeAlert: "క్రియాశీల వాయిస్ హెచ్చరిక:",
        doorWarning: "ముందు ఒక తలుపు ఉంది. దయచేసి జాగ్రత్తగా ఉండండి. దూరం: 2.1 మీటర్లు.",
        stairWarning: "3 మీటర్ల ముందు మెట్లు ఉన్నాయి, 4 మెట్లు పైకి ఎక్కాలి.",
        clearWarning: "తదుపరి 8 మీటర్ల వరకు ఫుట్‌పాత్ స్పష్టంగా ఉంది.",
        crosswalkWarning: "ముందు పాదచారుల మార్గం ఉంది. గ్రీన్ లైట్ వెలుగుతోంది.",

        navHeader: "వాయిస్ GPS నడక మార్గదర్శకత్వం",
        destInputPlaceholder: "గమ్యస్థానాన్ని నమోదు చేయండి (ఉదా: మెట్రో స్టేషన్, ఆసుపత్రి)",
        startNavBtn: "నావిగేషన్ ప్రారంభించండి",
        cancelNavBtn: "నావిగేషన్ ఆపండి",
        routeStatus: "యాక్టివ్ రూట్: వెళ్లే ప్రదేశం",
        nextStepTitle: "తదుపరి వాయిస్ సూచన:",
        stepInstruction: "35 మీటర్లు నేరుగా నడవండి, ఆపై ఎడమవైపు కొద్దిగా తిరగండి.",
        distanceRemaining: "మిగిలిన దూరం: 240 మీటర్లు (~3 నిమిషాల నడక)",
        audioPulseBtn: "దూర రాడార్ శబ్దాన్ని పరీక్షించండి",

        permissionStates: {
          title: "సెన్సార్ అనుమతి స్థితి",
          camera: "కెమెరా సెన్సార్: సిద్ధంగా ఉంది",
          mic: "మైక్రోఫోన్: యాక్టివ్‌గా వింటోంది",
          location: "GPS లొకేషన్: హై కచ్చితత్వం"
        }
      },

      companion: {
        title: "లైఫ్ సహచరుడు – AI సంభాషణ స్నేహితుడు",
        subtitle: "మీతో మాట్లాడటానికి మరియు మీ రోజును ఉల్లాసంగా మార్చడానికి ఒక ఆత్మీయ మిత్రుడు.",
        dailyGreeting: "నమస్కారం! ఈరోజు మీ రోజు ఎలా గడిచింది? మీరు నాతో ఏదైనా పంచుకోవచ్చు.",
        quickPromptsLabel: "ప్రయత్నించగల వాయిస్ సూచనలు:",
        prompt1: "ఈరోజు మీ రోజు ఎలా ఉంది?",
        prompt2: "నాకు ఒక మంచి చిన్న కథ చెప్పగలరా?",
        prompt3: "1 నిమిషం శ్వాస ధ్యానం చేయించండి",
        prompt4: "ఈరోజు వాతావరణం ఎలా ఉంది?",

        inputPlaceholder: "సందేశాన్ని టైప్ చేయండి లేదా మాట్లాడటానికి మైక్ నొక్కండి...",
        sendBtn: "పంపు",
        micBtn: "మాట్లాడటానికి మైక్",
        clearHistory: "చరిత్రను తొలగించు",
        readAloudBtn: "చదివి వినిపించు",

        checkinHeader: "రోజువారీ క్షేమ సమాచార సెట్టింగ్‌లు",
        checkinDesc: "లైఫ్‌మేట్ మీతో కుశల ప్రశ్నలు అడగడానికి సమయాన్ని ఎంచుకోండి.",
        morningTime: "ఉదయపు శుభాకాంక్షల సమయం",
        eveningTime: "సాయంత్రపు సమీక్ష సమయం",
        moodTrackerTitle: "ప్రస్తుతం మీ మానసిక స్థితి ఎలా ఉంది?",
        moodHappy: "సంతోషంగా ఉన్నాను",
        moodCalm: "ప్రశాంతంగా ఉన్నాను",
        moodTired: "కొద్దిగా అలసిపోయాను",
        moodAnxious: "ఓదార్పు అవసరం",
        saveCheckin: "సెట్టింగ్‌లను సేవ్ చేయండి"
      },

      reminder: {
        title: "మందుల రిమైండర్ – షెడ్యూల్ మరియు అలర్ట్‌లు",
        subtitle: "వాయిస్ అలారాల ద్వారా మందులను సురక్షితంగా మరియు సకాలంలో వేసుకోవడానికి సహాయపడుతుంది.",
        disclaimer: "ముఖ్యమైన వైద్య గమనిక: లైఫ్‌మేట్ AI మందుల షెడ్యూల్‌ను మాత్రమే గుర్తు చేస్తుంది. ఇది మందులను సిఫార్సు చేయదు లేదా మార్చదు.",

        addMedicineBtn: "+ కొత్త మందును జోడించండి",
        dailyScheduleHeader: "నేటి మందుల పట్టిక",
        testAlarmBtn: "మందుల అలారాన్ని పరీక్షించండి",

        statusTaken: "వేసుకున్నారు",
        statusPending: "ఇప్పుడు సమయం",
        statusUpcoming: "షెడ్యూల్ చేయబడింది",
        statusSnoozed: "వాయిదా పడింది (10 నిమి)",

        btnTaken: "మందు వేసుకున్నాను",
        btnSnooze: "10 నిమిషాల తర్వాత",
        btnAcknowledge: "అర్థమైంది",

        trustedContactAlert: "సంరక్షకుల అలర్ట్ ఫీచర్",
        trustedContactDesc: "30 నిమిషాల్లో మందు వేసుకోకపోతే సంరక్షకుడికి ఆటోమేటిక్ SMS వెళ్తుంది.",
        trustedToggle: "సంరక్షకుల SMS అలర్ట్: ఆన్‌లో ఉంది",

        modalTitle: "మందులు వేసుకునే సమయం!",
        modalText: "రాత్రి 08:30 గంటలు. భోజనం తర్వాత మెట్‌ఫార్మిన్ 500mg టాబ్లెట్‌ను గోరువెచ్చని నీటితో తీసుకోండి.",
        closeModal: "మూసివేయి"
      },

      language: {
        title: "భాష ఎంపిక – ప్రాంతీయ వాయిస్ భాష",
        subtitle: "మీకు కావలసిన భాషను ఎంచుకోండి. వాయిస్ సూచనలు వెంటనే ఆ భాషలోకి మారుతాయి.",
        currentSelected: "ప్రస్తుతం క్రియాశీలకంగా ఉన్న భాష:",
        previewVoiceBtn: "వాయిస్ నమూనా వినండి",
        saveLanguageBtn: "డిఫాల్ట్ భాషగా సెట్ చేయండి",
        audioSampleText: "వాయిస్ ఆడియో నమూనా:"
      },

      emergency: {
        title: "లైఫ్ ఎమర్జెన్సీ – తక్షణ అత్యవసర రక్షణ",
        subtitle: "వాయిస్ కమాండ్ మరియు లొకేషన్ షేరింగ్‌తో కూడిన అత్యవసర రక్షణ వేదిక.",
        emergencyVoiceCommand: "వాయిస్ కమాండ్: \"హాయ్ లైఫ్, ఎమర్జెన్సీ!\" అని చెప్పండి",
        sosBtnText: "అత్యవసర SOS బటన్",
        sosSubtext: "కౌంట్‌డౌన్ ప్రారంభించడానికి నొక్కండి",

        countdownWarning: "అత్యవసర SOS ప్రారంభమవుతోంది!",
        countdownDesc: "సంరక్షకులకు సమాచారం అందించడానికి మరియు లొకేషన్ షేర్ చేయడానికి మిగిలిన సమయం:",
        secondsLabel: "సెకన్లు",
        cancelSosBtn: "తప్పుడు అలారం రద్దు చేయి (నేను క్షేమంగా ఉన్నాను)",

        simulationNotice: "డెమో నోటీసు: ఇక్కడ చూపించే కాల్స్ మరియు సందేశాలు నమూనా మాత్రమే. నిజమైన కాల్స్ వెళ్లవు.",

        simCallTitle: "సిమ్యులేటెడ్ అత్యవసర కాల్",
        simCallContact: "కాల్ చేస్తోంది: డాక్టర్ రాజేష్ కుమార్ (కుమారుడు / సంరక్షకుడు)",
        simCallStatus: "కనెక్ట్ అయింది • లైవ్ వాయిస్ ప్రారంభమైంది",
        simEndCall: "కాల్ ముగించండి",

        simSmsTitle: "సిమ్యులేటెడ్ ఆటోమేటిక్ SMS అలర్ట్",
        simSmsRecipient: "స్వీకర్త: +91 98401 23456 (డాక్టర్ రాజేష్ కుమార్)",
        simSmsBody: "అత్యవసర హెచ్చరిక: లైఫ్‌మేట్ AI యూజర్ సహాయాన్ని కోరారు. చివరి GPS లొకేషన్: 13.0827° N, 80.2707° E (అన్నా సలై సమీపంలో, చెన్నై). బ్యాటరీ: 88%.",

        locationCardTitle: "సిమ్యులేటెడ్ లైవ్ GPS లొకేషన్",
        gpsCoords: "అక్షాంశం: 13.0827° N | రేఖాంశం: 80.2707° E",
        gpsAddress: "అన్నా సలై సమీపంలో, చెన్నై, తమిళనాడు 600002",
        gpsAccuracy: "కచ్చితత్వం: ± 4.2 మీటర్లు",

        contactsHeader: "నమోదైన అత్యవసర పరిచయాలు",
        addContactBtn: "+ కొత్త పరిచయాన్ని జోడించండి",
        primaryBadge: "ప్రధాన పరిచయం"
      },

      about: {
        title: "లైఫ్‌మేట్ AI ప్రాజెక్ట్ గురించి",
        subtitle: "అంధుల ఆత్మవిశ్వాసం కోసం రూపొందించిన వాయిస్-ఫస్ట్ AI సహచరుడు",
        problemHeader: "సమస్య నేపథ్యం",
        problemText: "ప్రపంచవ్యాప్తంగా 220 కోట్లకు పైగా ప్రజలు దృష్టి లోపంతో జీవిస్తున్నారు. నడవడం, మందుల వేళలు పాటించడం మరియు అత్యవసర సమయాల్లో సహాయం పొందడం నిత్య సవాళ్లుగా ఉన్నాయి.",

        solutionHeader: "లైఫ్‌మేట్ AI పరిష్కారం",
        solutionText: "లైఫ్‌మేట్ AI పూర్తి వాయిస్ మార్గదర్శకత్వం ద్వారా స్వతంత్రతను అందిస్తుంది. అడ్డంకుల గుర్తింపు, ఆత్మీయ సంభాషణ మరియు అత్యవసర భద్రతను ఒకే వేదికపైకి తెస్తుంది.",

        objectivesTitle: "ముఖ్య లక్ష్యాలు",
        obj1: "జీరో-విజన్ ఆపరేషన్: స్క్రీన్‌ను చూడకుండానే పూర్తి వాయిస్ నియంత్రణ.",
        obj2: "ఆత్మీయ సహచర్యం: ఒంటరితనాన్ని దూరం చేసే స్నేహపూర్వక సంభాషణలు.",
        obj3: "ఆరోగ్య భద్రత: సకాలంలో మందుల రిమైండర్‌లు మరియు సంరక్షకుల అలర్ట్.",
        obj4: "బహుభాషా సౌలభ్యం: తెలుగు, హిందీ, తమిళం, కన్నడ, మలయాళం, ఇంగ్లీష్ భాషల్లో సేవలు.",

        techHeader: "సాంకేతికత మరియు ప్రాప్యత ప్రమాణాలు",
        techText: "WCAG 2.1 AAA ప్రమాణాలు, హై కాంట్రాస్ట్ మరియు వెబ్ ఆడియో సింథసైజర్‌తో అభివృద్ధి చేయబడింది.",

        disclaimerTitle: "హ్యాకథాన్ ప్రోటోటైప్ నోటీసు",
        disclaimerText: "ఇది హ్యాకథాన్ పరిశీలన కోసం తయారుచేసిన నమూనా వెబ్‌సైట్. కెమెరా మరియు జీపీఎస్ ఫీచర్లు సిమ్యులేట్ చేయబడ్డాయి."
      }
    },

    ml: {
      appName: "ലൈഫ്മേറ്റ് AI (LifeMate)",
      tagline: "നിങ്ങളുടെ വഴികാട്ടി • നിങ്ങളുടെ കൂട്ടുകാരൻ • നിങ്ങളുടെ പ്രതിദിന പിന്തുണ",
      prototypeBadge: "AI ആക്സസിബിലിറ്റി പ്രോട്ടോടൈപ്പ്",
      simulatedNotice: "സിമുലേറ്റഡ് ഡെമോ – കാഴ്ചപരിമിതർക്കായുള്ള വോയ്സ് AI മാതൃക",

      nav: {
        home: "ഹോം",
        guide: "ലൈഫ് ഗൈഡ്",
        companion: "ലൈഫ് കൂട്ടുകാരൻ",
        reminder: "മരുന്ന് ഓർമ്മപ്പെടുത്തൽ",
        language: "ഭാഷ തിരഞ്ഞെടുക്കൽ",
        emergency: "അടിയന്തര SOS",
        about: "പദ്ധതി വിവരണം",
        emergencyQuick: "SOS അടിയന്തരം",
        voiceTrigger: "ഹായ് ലൈഫ്"
      },

      accessibility: {
        toolbar: "ആക്സസിബിലിറ്റി ക്രമീകരണങ്ങൾ",
        contrastNormal: "സാധാരണ ദൃശ്യത",
        contrastHigh: "ഉയർന്ന കോൺട്രാസ്റ്റ് (AAA)",
        fontSize: "ഫോണ്ട് വലുപ്പം",
        fontNormal: "A",
        fontLarge: "A+",
        fontXLarge: "A++",
        soundOn: "ശബ്ദം ഓൺ",
        soundOff: "ശബ്ദം മ്യൂട്ട്",
        voiceRead: "സ്ക്രീൻ വായിക്കുക",
        voiceStop: "വായന നിർത്തുക"
      },

      home: {
        heroBadge: "വോയ്സ്-ഫസ്റ്റ് AI സ്വാതന്ത്ര്യം",
        heroTitle: "കാഴ്ചപരിമിതർക്ക് വോയ്സ് AI വഴി സ്വതന്ത്ര ജീവിതം",
        heroDesc: "ലൈഫ്മേറ്റ് AI സ്മാർട്ട് ഔട്ട്ഡോർ ക്യാമറ ഗൈഡൻസ്, സ്നേഹമുള്ള സംഭാഷണ സഹായി, സുരക്ഷിതമായ മരുന്ന് ഓർമ്മപ്പെടുത്തൽ, അടിയന്തര സുരക്ഷ എന്നിവ ഒരു പ്ലാറ്റ്‌ഫോമിൽ നൽകുന്നു.",
        voicePrompt: "തുടങ്ങാൻ മൈക്ക് അമർത്തുക അല്ലെങ്കിൽ \"ഹായ് ലൈഫ്\" എന്ന് പറയുക",
        micAction: "വോയ്സ് അസിസ്റ്റന്റ് ആരംഭിക്കുക",
        exploreFeatures: "സവിശേഷതകൾ കാണുക",
        emergencyDirect: "അടിയന്തര SOS ഡെമോ",

        featuresTitle: "അഞ്ച് പ്രധാന സവിശേഷതകൾ",
        featuresSubtitle: "കാഴ്ചപരിമിതർക്ക് ആത്മവിശ്വാസത്തോടെയും സ്വതന്ത്രമായും ജീവിക്കാൻ പ്രത്യേകം രൂപകൽപ്പന ചെയ്തത്.",

        guideCard: {
          title: "ലൈഫ് ഗൈഡ്",
          tag: "സ്മാർട്ട് ഔട്ട്ഡോർ സഹായം",
          desc: "ക്യാമറ വഴി തടസ്സങ്ങൾ കണ്ടെത്തൽ, വാതിലുകൾ, പടികൾ എന്നിവയുടെ ശബ്ദ മുന്നറിയിപ്പുകൾ, GPS നടത്ത സഹായം.",
          action: "ഗൈഡ് തുറക്കുക"
        },
        companionCard: {
          title: "ലൈഫ് കൂട്ടുകാരൻ",
          tag: "സ്നേഹമുള്ള സംഭാഷണം",
          desc: "ദൈനംദിന വോയ്സ് സംഭാഷണങ്ങൾ, മാനസിക സന്തോഷം, കഥകൾ, ശ്വസന വ്യായാമങ്ങൾ.",
          action: "കൂട്ടുകാരനോട് സംസാരിക്കുക"
        },
        reminderCard: {
          title: "മരുന്ന് ഓർമ്മപ്പെടുത്തൽ",
          tag: "മരുന്ന് സമയക്രമം",
          desc: "കൃത്യസമയത്ത് മരുന്ന് അലാറങ്ങൾ, ഡോസേജ് നിർദ്ദേശങ്ങൾ, രക്ഷിതാക്കൾക്ക് സന്ദേശം.",
          action: "മരുന്ന് പട്ടിക"
        },
        languageCard: {
          title: "ഭാഷ തിരഞ്ഞെടുക്കൽ",
          tag: "പ്രാദേശിക ഭാഷകൾ",
          desc: "മലയാളം, ഇംഗ്ലീഷ്, തമിഴ്, ഹിന്ദി, തെലുങ്ക്, കന്നഡ ഭാഷകളിൽ തത്സമയ ശബ്ദ മാറ്റം.",
          action: "ഭാഷ തിരഞ്ഞെടുക്കുക"
        },
        emergencyCard: {
          title: "അടിയന്തര SOS",
          tag: "സുരക്ഷാ സംവിധാനം",
          desc: "\"ഹായ് ലൈഫ്, എമർജൻസി!\" വോയ്സ് കമാൻഡ്, 5 സെക്കൻഡ് കൗണ്ട്ഡൗൺ, ലൊക്കേഷൻ SMS ഡെമോ.",
          action: "അടിയന്തര സഹായം"
        },

        stats: {
          users: "2.2B+",
          usersLabel: "ലോകമെമ്പാടുമുള്ള കാഴ്ചപരിമിതർ",
          voice: "100%",
          voiceLabel: "പൂർണ്ണ വോയ്സ് നിയന്ത്രണം",
          contrast: "WCAG AAA",
          contrastLabel: "ഉയർന്ന നിലവാരമുള്ള ദൃശ്യ തീവ്രത",
          languages: "6",
          languagesLabel: "പിന്തുണയ്ക്കുന്ന ഇന്ത്യൻ ഭാഷകൾ"
        }
      },

      guide: {
        title: "ലൈഫ് ഗൈഡ് – സ്മാർട്ട് ഔട്ട്ഡോർ സഹായം",
        subtitle: "തത്സമയ തടസ്സങ്ങൾ തിരിച്ചറിയൽ, വസ്തു വിവരണം, GPS നടത്ത ഗൈഡൻസ്.",
        simulatedAlert: "സിമുലേഷൻ അറിയിപ്പ്: ക്യാമറ കാഴ്ചയും GPS നാവിഗേഷനും പ്രോട്ടോടൈപ്പ് പരീക്ഷണത്തിനായി അനുകരിച്ചതാണ്.",

        micCommand: "ഹായ് ലൈഫ്",
        micSub: "മൈക്ക് തൊടുക അല്ലെങ്കിൽ \"ഹായ് ലൈഫ്\" എന്ന് പറയുക",
        assistantStatusReady: "ലൈഫ് ഗൈഡ് തയ്യാറാണ്. മൈക്ക് അമർത്തുക.",
        assistantStatusListening: "പരിസരം ശ്രദ്ധിക്കുന്നു...",
        assistantStatusProcessing: "വിശകലനം ചെയ്യുന്നു...",

        cameraHeader: "സ്മാർട്ട് സ്പേഷ്യൽ വിഷൻ",
        rearCamMode: "സിമുലേറ്റഡ് റിയർ ക്യാമറ സെൻസർ",
        webcamToggle: "വെബ്ക്യാം / സിമുലേഷൻ മാറ്റുക",
        detectionTitle: "AI പരിസ്ഥിതി കാഴ്ച",
        activeAlert: "ശബ്ദ മുന്നറിയിപ്പ്:",
        doorWarning: "മുന്നിൽ ഒരു വാതിലുണ്ട്. ദയവായി ശ്രദ്ധിക്കുക. അകലം: 2.1 മീറ്റർ.",
        stairWarning: "3 മീറ്റർ മുന്നിൽ പടവുകളുണ്ട്, 4 പടികൾ മുകളിലേക്ക് കയറണം.",
        clearWarning: "അടുത്ത 8 മീറ്റർ നടപ്പാത തടസ്സമില്ലാത്തതാണ്.",
        crosswalkWarning: "മുന്നിൽ കാൽനടയാത്രക്കാരുടെ വഴി. പച്ച വെളിച്ചം കത്തുന്നു.",

        navHeader: "വോയ്സ് GPS നടത്ത സഹായം",
        destInputPlaceholder: "ലക്ഷ്യസ്ഥാനം നൽകുക (ഉദാ: മെട്രോ സ്റ്റേഷൻ, ഹോസ്പിറ്റൽ)",
        startNavBtn: "വഴികാട്ടൽ ആരംഭിക്കുക",
        cancelNavBtn: "വഴികാട്ടൽ നിർത്തുക",
        routeStatus: "സജീവ റൂട്ട്: ലക്ഷ്യസ്ഥാനം",
        nextStepTitle: "അടുത്ത ശബ്ദ നിർദ്ദേശം:",
        stepInstruction: "35 മീറ്റർ നേരെ നടക്കുക, തുടർന്ന് ചെറുതായി ഇടത്തേക്ക് തിരിയുക.",
        distanceRemaining: "ബാക്കി ദൂരം: 240 മീറ്റർ (~3 മിനിറ്റ് നടത്തം)",
        audioPulseBtn: "റഡാർ ബീപ് പരിശോധിക്കുക",

        permissionStates: {
          title: "സെൻസർ അനുമതി നില",
          camera: "ക്യാമറ സെൻസർ: തയ്യാറാണ്",
          mic: "മൈക്രോഫോൺ: സജീവം",
          location: "GPS ലൊക്കേഷൻ: കൃത്യത ഉറപ്പുവരുത്തി"
        }
      },

      companion: {
        title: "ലൈഫ് കൂട്ടുകാരൻ – AI സൗഹൃദ സംഭാഷണം",
        subtitle: "നിങ്ങളോട് സംസാരിക്കാനും മാനസിക പിന്തുണ നൽകാനും ഒരു സ്നേഹിതൻ.",
        dailyGreeting: "നമസ്കാരം! ഇന്ന് നിങ്ങളുടെ ദിവസം എങ്ങനെ ഉണ്ടായിരുന്നു? നിങ്ങൾക്ക് എന്നോട് എന്തും സംസാരിക്കാം.",
        quickPromptsLabel: "ശ്രമിക്കാവുന്ന വോയ്സ് നിർദ്ദേശങ്ങൾ:",
        prompt1: "ഇന്ന് നിങ്ങളുടെ ദിവസം എങ്ങനെയുണ്ടായിരുന്നു?",
        prompt2: "ഒരു പ്രചോദനാത്മകമായ കഥ പറയാമോ?",
        prompt3: "1 മിനിറ്റ് ശ്വസന ധ്യാനത്തിലേക്ക് നയിക്കുക",
        prompt4: "ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയുണ്ട്?",

        inputPlaceholder: "സന്ദേശം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ സംസാരിക്കാൻ മൈക്ക് അമർത്തുക...",
        sendBtn: "അയക്കുക",
        micBtn: "സംസാരിക്കാൻ മൈക്ക്",
        clearHistory: "ചരിത്രം മായ്ക്കുക",
        readAloudBtn: "വായിച്ചു കേൾപ്പിക്കുക",

        checkinHeader: "ദൈനംദിന ക്ഷേമാന്വേഷണ ക്രമീകരണങ്ങൾ",
        checkinDesc: "ലൈഫ്മേറ്റ് നിങ്ങളോട് ക്ഷേമം അന്വേഷിക്കാൻ ഇഷ്ടമുള്ള സമയം തിരഞ്ഞെടുക്കുക.",
        morningTime: "പ്രഭാത വന്ദന സമയം",
        eveningTime: "സായാഹ്ന അവലോകന സമയം",
        moodTrackerTitle: "ഇപ്പോൾ നിങ്ങളുടെ മനസ്സിന് എന്ത് തോന്നുന്നു?",
        moodHappy: "സന്തോഷം തോന്നുന്നു",
        moodCalm: "ശാന്തമായിരിക്കുന്നു",
        moodTired: "അല്പം ക്ഷീണമുണ്ട്",
        moodAnxious: "ആശ്വാസം വേണം",
        saveCheckin: "ക്രമീകരണങ്ങൾ സംരക്ഷിക്കുക"
      },

      reminder: {
        title: "ലൈഫ് ഓർമ്മപ്പെടുത്തൽ – മരുന്ന് സമയക്രമം",
        subtitle: "വോയ്സ് അലാറങ്ങൾ വഴി കൃത്യസമയത്ത് മരുന്ന് കഴിക്കാൻ സഹായിക്കുന്നു.",
        disclaimer: "പ്രത്യേക അറിയിപ്പ്: ലൈഫ്മേറ്റ് AI മരുന്ന് സമയം ഓർമ്മിപ്പിക്കാൻ മാത്രമുള്ളതാണ്. ഇത് ഒരിക്കലും മരുന്നുകൾ നിർദ്ദേശിക്കുകയോ മാറ്റുകയോ ഇല്ല.",

        addMedicineBtn: "+ പുതിയ മരുന്ന് ചേർക്കുക",
        dailyScheduleHeader: "ഇന്നത്തെ മരുന്ന് സമയക്രമം",
        testAlarmBtn: "മരുന്ന് അലാറം പരിശോധിക്കുക",

        statusTaken: "കഴിച്ചു",
        statusPending: "ഇപ്പോൾ കഴിക്കേണ്ടത്",
        statusUpcoming: "ഷെഡ്യൂൾ ചെയ്തത്",
        statusSnoozed: "മാറ്റിവെച്ചു (10 മിനിറ്റ്)",

        btnTaken: "മരുന്ന് കഴിച്ചു",
        btnSnooze: "10 മിനിറ്റിനു ശേഷം",
        btnAcknowledge: "മനസ്സിലായി",

        trustedContactAlert: "രക്ഷിതാവ് അലർട്ട് സംവിധാനം",
        trustedContactDesc: "30 മിനിറ്റിനകം മരുന്ന് കഴിച്ചില്ലെങ്കിൽ രക്ഷിതാവിന് സ്വയമേവ SMS പോകും.",
        trustedToggle: "രക്ഷിതാവ് SMS അലർട്ട്: സജീവം",

        modalTitle: "മരുന്ന് കഴിക്കാനുള്ള സമയമായി!",
        modalText: "രാത്രി 08:30 ആയി. ഭക്ഷണത്തിന് ശേഷം മെറ്റ്ഫോർമിൻ 500mg ഗുളിക ചെറുചൂടുവെള്ളത്തിൽ കഴിക്കുക.",
        closeModal: "അടയ്ക്കുക"
      },

      language: {
        title: "ഭാഷ തിരഞ്ഞെടുക്കൽ – പ്രാദേശിക ഭാഷ ക്രമീകരണങ്ങൾ",
        subtitle: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക. എല്ലാ വോയ്സ് നിർദ്ദേശങ്ങളും ഉടനടി മാറും.",
        currentSelected: "നിലവിലെ സജീവ ഭാഷ:",
        previewVoiceBtn: "വോയ്സ് സാമ്പിൾ കേൾക്കുക",
        saveLanguageBtn: "ഡിഫോൾട്ട് ഭാഷയായി ക്രമീകരിക്കുക",
        audioSampleText: "ഓഡിയോ സാമ്പിൾ:"
      },

      emergency: {
        title: "ലൈഫ് എമർജൻസി – അടിയന്തര സുരക്ഷാ സംവിധാനം",
        subtitle: "വോയ്സ് കമാൻഡും ലൈവ് ലൊക്കേഷൻ പങ്കിടലും ഉൾപ്പെടുന്ന സുരക്ഷാ തട്ടകം.",
        emergencyVoiceCommand: "വോയ്സ് കമാൻഡ്: \"ഹായ് ലൈഫ്, എമർജൻസി!\" എന്ന് പറയുക",
        sosBtnText: "അടിയന്തര SOS ബട്ടൺ",
        sosSubtext: "കൗണ്ട്ഡൗൺ ആരംഭിക്കാൻ അമർത്തുക",

        countdownWarning: "അടിയന്തര സഹായം ആരംഭിക്കുന്നു!",
        countdownDesc: "ബന്ധുക്കളെ ബന്ധപ്പെടാനും ലൊക്കേഷൻ അയക്കാനും ബാക്കിയുള്ള സമയം:",
        secondsLabel: "സെക്കൻഡുകൾ",
        cancelSosBtn: "തെറ്റായ അലാറം റദ്ദാക്കുക (ഞാൻ സുരക്ഷിതനാണ്)",

        simulationNotice: "ഡെമോ അറിയിപ്പ്: ഇവിടെ കാണിച്ചിരിക്കുന്ന കോളുകളും സന്ദേശങ്ങളും ഒരു മാതൃക മാത്രമാണ്. യഥാർത്ഥ കോളുകൾ പോവില്ല.",

        simCallTitle: "സിമുലേറ്റഡ് അടിയന്തര കോൾ",
        simCallContact: "വിളിക്കുന്നു: ഡോ. രാജേഷ് കുമാർ (മകൻ / രക്ഷിതാവ്)",
        simCallStatus: "ബന്ധിപ്പിച്ചു • ലൈവ് വോയ്സ് സജീവം",
        simEndCall: "കോൾ അവസാനിപ്പിക്കുക",

        simSmsTitle: "സിമുലേറ്റഡ് ഓട്ടോമാറ്റിക് SMS അലർട്ട്",
        simSmsRecipient: "സ്വീകർത്താവ്: +91 98401 23456 (ഡോ. രാജേഷ് കുമാർ)",
        simSmsBody: "അടിയന്തര മുന്നറിയിപ്പ്: ലൈഫ്മേറ്റ് AI ഉപയോക്താവ് സഹായം ആവശ്യപ്പെട്ടു. അവസാന GPS സ്ഥാനം: 13.0827° N, 80.2707° E (ചെന്നൈ അണ്ണാ സാലയ്ക്ക് സമീപം). ബാറ്ററി: 88%.",

        locationCardTitle: "സിമുലേറ്റഡ് ലൈവ് GPS ലൊക്കേഷൻ",
        gpsCoords: "അക്ഷാംശം: 13.0827° N | രേഖാംശം: 80.2707° E",
        gpsAddress: "അണ്ണാ സാലയ്ക്ക് സമീപം, ചെന്നൈ, തമിഴ്നാട് 600002",
        gpsAccuracy: "കൃത്യത: ± 4.2 മീറ്റർ",

        contactsHeader: "രജിസ്റ്റർ ചെയ്ത അടിയന്തര നമ്പറുകൾ",
        addContactBtn: "+ പുതിയ നമ്പർ ചേർക്കുക",
        primaryBadge: "പ്രധാന നമ്പർ"
      },

      about: {
        title: "ലൈഫ്മേറ്റ് AI പദ്ധതിയെക്കുറിച്ച്",
        subtitle: "കാഴ്ചപരിമിതരുടെ സ്വയംപര്യാപ്തതയ്ക്കായി രൂപകൽപ്പന ചെയ്ത AI കൂട്ടുകാരൻ",
        problemHeader: "പ്രശ്ന പശ്ചാത്തലം",
        problemText: "ലോകമെമ്പാടും 220 കോടിയിലധികം ആളുകൾ കാഴ്ച വൈകല്യങ്ങളോടെ ജീവിക്കുന്നു. റോഡുകളിൽ നടക്കുക, മരുന്നുകൾ കൃത്യമായി കഴിക്കുക, അടിയന്തര സാഹചര്യങ്ങളിൽ സഹായം തേടുക എന്നിവ വലിയ വെല്ലുവിളികളാണ്.",

        solutionHeader: "ലൈഫ്മേറ്റ് AI പരിഹാരം",
        solutionText: "ലൈഫ്മേറ്റ് AI വോയ്സ് വഴിയുള്ള സ്വാതന്ത്ര്യം ഉറപ്പാക്കുന്നു. ക്യാമറ തടസ്സങ്ങൾ കണ്ടെത്തൽ, സൗഹൃദ സംഭാഷണം, മരുന്ന് ഓർമ്മപ്പെടുത്തൽ എന്നിവ ഒറ്റ കുടക്കീഴിൽ നൽകുന്നു.",

        objectivesTitle: "പ്രധാന ലക്ഷ്യങ്ങൾ",
        obj1: "പൂർണ്ണ ശബ്ദ നിയന്ത്രണം: സ്ക്രീൻ നോക്കാതെ തന്നെ മുഴുവൻ സേവനങ്ങളും ഉപയോഗിക്കാം.",
        obj2: "സ്നേഹമുള്ള പിന്തുണ: ഏകാന്തത ഒഴിവാക്കാൻ സൗഹൃദ സംഭാഷണങ്ങൾ.",
        obj3: "ആരോഗ്യ സംരക്ഷണം: മരുന്നുകൾ കൃത്യസമയത്ത് കഴിക്കാൻ സഹായിക്കുന്നു.",
        obj4: "ബഹുഭാഷാ സൗകര്യം: മലയാളം, തമിഴ്, തെലുങ്ക്, കന്നഡ, ഹിന്ദി, ഇംഗ്ലീഷ് ഭാഷകളിൽ ലഭ്യമാണ്.",

        techHeader: "സാങ്കേതികവിദ്യയും മാനദണ്ഡങ്ങളും",
        techText: "WCAG 2.1 AAA നിലവാരം, ഉയർന്ന കോൺട്രാസ്റ്റ്, വെബ് ഓഡിയോ സിന്തസൈസർ എന്നിവ ഉപയോഗിച്ച് നിർമ്മിച്ചത്.",

        disclaimerTitle: "ഹാക്കത്തോൺ പ്രോട്ടോടൈപ്പ് സുതാര്യതാ കുറിപ്പ്",
        disclaimerText: "ഈ വെബ്സൈറ്റ് ഹാക്കത്തോൺ വിലയിരുത്തലിനായുള്ള പ്രോട്ടോടൈപ്പാണ്. ക്യാമറയും ജിപിഎസും സാങ്കൽപ്പികമായി ഉൾപ്പെടുത്തിയിരിക്കുന്നു."
      }
    },

    kn: {
      appName: "ಲೈಫ್‌ಮೇಟ್ AI (LifeMate)",
      tagline: "ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ • ನಿಮ್ಮ ಒಡನಾಡಿ • ನಿಮ್ಮ ದೈನಂದಿನ ಬೆಂಬಲ",
      prototypeBadge: "AI ಪ್ರವೇಶಸಾಧ್ಯತೆ ಮಾದರಿ",
      simulatedNotice: "ಸಿಮ್ಯುಲೇಟೆಡ್ ಡೆಮೊ – ದೃಷ್ಟಿಹೀನರಿಗಾಗಿ ಧ್ವನಿ AI ಮಾದರಿ",

      nav: {
        home: "ಮುಖಪುಟ",
        guide: "ಲೈಫ್ ಗೈಡ್",
        companion: "ಲೈಫ್ ಒಡನಾಡಿ",
        reminder: "ಔಷಧಿ ಜ್ಞಾಪನೆ",
        language: "ಭಾಷೆ ಆಯ್ಕೆ",
        emergency: "ತುರ್ತು SOS",
        about: "ಯೋಜನೆ ವಿವರ",
        emergencyQuick: "SOS ತುರ್ತು",
        voiceTrigger: "ಹಾಯ್ ಲೈಫ್"
      },

      accessibility: {
        toolbar: "ಪ್ರವೇಶಸಾಧ್ಯತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        contrastNormal: "ಸಾಮಾನ್ಯ ಕಾಂಟ್ರಾಸ್ಟ್",
        contrastHigh: "ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್ (AAA)",
        fontSize: "ಅಕ್ಷರ ಗಾತ್ರ",
        fontNormal: "A",
        fontLarge: "A+",
        fontXLarge: "A++",
        soundOn: "ಧ್ವನಿ ಆನ್",
        soundOff: "ಧ್ವನಿ ಮ್ಯೂಟ್",
        voiceRead: "ಪರದೆಯನ್ನು ಓದಿ",
        voiceStop: "ಓದುವುದನ್ನು ನಿಲ್ಲಿಸಿ"
      },

      home: {
        heroBadge: "ಧ್ವನಿ-ಆಧಾರಿತ AI ಸ್ವಾತಂತ್ರ್ಯ",
        heroTitle: "ದೃಷ್ಟಿಹೀನರಿಗೆ ಧ್ವನಿ-ಆಧಾರಿತ AI ಮೂಲಕ ಸ್ವಾವಲಂಬಿ ಜೀವನ",
        heroDesc: "ಲೈಫ್‌ಮೇಟ್ AI ಹೊರಾಂಗಣ ಕ್ಯಾಮೆರಾ ಮಾರ್ಗದರ್ಶನ, ಪ್ರೀತಿಯ ಸಂಭಾಷಣಾ ಒಡನಾಡಿ, ಸುರಕ್ಷಿತ ಔಷಧಿ ಜ್ಞಾಪನೆ ಮತ್ತು ತುರ್ತು ರಕ್ಷಣೆಯನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒದಗಿಸುತ್ತದೆ.",
        voicePrompt: "ಪ್ರಾರಂಭಿಸಲು ಮೈಕ್ ಒತ್ತಿರಿ ಅಥವಾ \"ಹಾಯ್ ಲೈಫ್\" ಎಂದು ಹೇಳಿ",
        micAction: "ಧ್ವನಿ ಸಹಾಯಕವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
        exploreFeatures: "ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೋಡಿ",
        emergencyDirect: "ತುರ್ತು SOS ಡೆಮೊ",

        featuresTitle: "ಐದು ಪ್ರಮುಖ ಆಧಾರಸ್ತಂಭಗಳು",
        featuresSubtitle: "ದೃಷ್ಟಿಹೀನರ ದಿನನಿತ್ಯದ ಆತ್ಮವಿಶ್ವಾಸ ಮತ್ತು ಸ್ವಾವಲಂಬನೆಗಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",

        guideCard: {
          title: "ಲೈಫ್ ಗೈಡ್",
          tag: "ಸ್ಮಾರ್ಟ್ ಹೊರಾಂಗಣ ನೆರವು",
          desc: "ಕ್ಯಾಮೆರಾ ಮೂಲಕ ಅಡೆತಡೆಗಳ ಗುರುತಿಸುವಿಕೆ, ಬಾಗಿಲು ಮತ್ತು ಮೆಟ್ಟಿಲುಗಳ ಧ್ವನಿ ಎಚ್ಚರಿಕೆ, GPS ನಡಿಗೆ ಮಾರ್ಗದರ್ಶನ.",
          action: "ಗೈಡ್ ತೆರೆಯಿರಿ"
        },
        companionCard: {
          title: "ಲೈಫ್ ಒಡನಾಡಿ",
          tag: "ಪ್ರೀತಿಯ AI ಸಂಭಾಷಣೆ",
          desc: "ದೈನಂದಿನ ಧ್ವನಿ ಸಂಭಾಷಣೆಗಳು, ಮನಸ್ಥಿತಿ ಪರಿಶೀಲನೆ, ಕಥೆಗಳು ಮತ್ತು ವಿಶ್ರಾಂತಿ ಉಸಿರಾಟದ ವ್ಯಾಯಾಮಗಳು.",
          action: "ಒಡನಾಡಿಯೊಂದಿಗೆ ಮಾತನಾಡಿ"
        },
        reminderCard: {
          title: "ಔಷಧಿ ಜ್ಞಾಪನೆ",
          tag: "ಔಷಧಿ ವೇಳಾಪಟ್ಟಿ",
          desc: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಔಷಧಿ ಅಲಾರಂ, ಪ್ರಮಾಣದ ವಿವರಗಳು ಮತ್ತು ಪೋಷಕರಿಗೆ ಸಂದೇಶ.",
          action: "ಔಷಧಿ ವೇಳಾಪಟ್ಟಿ"
        },
        languageCard: {
          title: "ಭಾಷೆ ಆಯ್ಕೆ",
          tag: "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು",
          desc: "ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ತಮಿಳು, ಹಿಂದಿ, ತೆಲುಗು, ಮಲಯಾಳಂ ಭಾಷೆಗಳಲ್ಲಿ ತಕ್ಷಣದ ಧ್ವನಿ ಬದಲಾವಣೆ.",
          action: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ"
        },
        emergencyCard: {
          title: "ತುರ್ತು SOS",
          tag: "ತ್ವರಿತ ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆ",
          desc: "\"ಹಾಯ್ ಲೈಫ್, ಎಮರ್ಜೆನ್ಸಿ!\" ಧ್ವನಿ ಆದೇಶ, 5 ಸೆಕೆಂಡುಗಳ ಕೌಂಟ್‌ಡೌನ್, ಲೊಕೇಶನ್ SMS ಮತ್ತು ಕರೆ ಡೆಮೊ.",
          action: "ತುರ್ತು ವ್ಯವಸ್ಥೆ"
        },

        stats: {
          users: "2.2B+",
          usersLabel: "ವಿಶ್ವದಾದ್ಯಂತ ದೃಷ್ಟಿಹೀನ ವ್ಯಕ್ತಿಗಳು",
          voice: "100%",
          voiceLabel: "ಪೂರ್ಣ ಧ್ವನಿ ನಿಯಂತ್ರಣ",
          contrast: "WCAG AAA",
          contrastLabel: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕಾಂಟ್ರಾಸ್ಟ್",
          languages: "6",
          languagesLabel: "ಬೆಂಬಲಿತ ಭಾರತೀಯ ಭಾಷೆಗಳು"
        }
      },

      guide: {
        title: "ಲೈಫ್ ಗೈಡ್ – ಸ್ಮಾರ್ಟ್ ಹೊರಾಂಗಣ ನೆರವು",
        subtitle: "ನೈಜ-ಸಮಯದ ಅಡೆತಡೆ ಗುರುತಿಸುವಿಕೆ, ವಸ್ತುಗಳ ವಿವರಣೆ ಮತ್ತು GPS ನಡಿಗೆ ಮಾರ್ಗದರ್ಶನ.",
        simulatedAlert: "ಸಿಮ್ಯುಲೇಶನ್ ಸೂಚನೆ: ಕ್ಯಾಮೆರಾ ದೃಷ್ಟಿ ಮತ್ತು GPS ಮಾರ್ಗದರ್ಶನವನ್ನು ಡೆಮೊಗಾಗಿ ಅಣಕುಗೊಳಿಸಲಾಗಿದೆ.",

        micCommand: "ಹಾಯ್ ಲೈಫ್",
        micSub: "ಮೈಕ್ ಸ್ಪರ್ಶಿಸಿ ಅಥವಾ \"ಹಾಯ್ ಲೈಫ್\" ಎಂದು ಹೇಳಿ",
        assistantStatusReady: "ಲೈಫ್ ಗೈಡ್ ಸಿದ್ಧವಾಗಿದೆ. ಮೈಕ್ ಟ್ಯಾಪ್ ಮಾಡಿ.",
        assistantStatusListening: "ಪರಿಸರವನ್ನು ಆಲಿಸುತ್ತಿದೆ...",
        assistantStatusProcessing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",

        cameraHeader: "ಸ್ಮಾರ್ಟ್ ಸ್ಪೇಷಿಯಲ್ ವಿಷನ್",
        rearCamMode: "ಸಿಮ್ಯುಲೇಟೆಡ್ ರಿಯರ್ ಕ್ಯಾಮೆರಾ ಸಂವೇದಕ",
        webcamToggle: "ವೆಬ್‌ಕ್ಯಾಮ್ / ಸಿಮ್ಯುಲೇಶನ್ ಬದಲಾಯಿಸಿ",
        detectionTitle: "AI ಪರಿಸರ ಗ್ರಹಿಕೆ",
        activeAlert: "ಸಕ್ರಿಯ ಧ್ವನಿ ಎಚ್ಚರಿಕೆ:",
        doorWarning: "ಮುಂದೆ ಒಂದು ಬಾಗಿಲು ಇದೆ. ದಯವಿಟ್ಟು ಜಾಗರೂಕರಾಗಿರಿ. ದೂರ: 2.1 ಮೀಟರ್.",
        stairWarning: "3 ಮೀಟರ್ ಮುಂದೆ ಮೆಟ್ಟಿಲುಗಳಿವೆ, 4 ಮೆಟ್ಟಿಲುಗಳನ್ನು ಹತ್ತಬೇಕು.",
        clearWarning: "ಮುಂದಿನ 8 ಮೀಟರ್‌ಗಳವರೆಗೆ ಪಾದಚಾರಿ ಮಾರ್ಗವು ಸ್ಪಷ್ಟವಾಗಿದೆ.",
        crosswalkWarning: "ಮುಂದೆ ಪಾದಚಾರಿ ರಸ್ತೆ ದಾಟುವ ಹಾದಿ ಇದೆ. ಹಸಿರು ದೀಪ ಉರಿಯುತ್ತಿದೆ.",

        navHeader: "ಧ್ವನಿ GPS ನಡಿಗೆ ಮಾರ್ಗದರ್ಶನ",
        destInputPlaceholder: "ಗಮ್ಯಸ್ಥಾನವನ್ನು ನಮೂದಿಸಿ (ಉದಾ: ಮೆಟ್ರೋ ನಿಲ್ದಾಣ, ಆಸ್ಪತ್ರೆ)",
        startNavBtn: "ಮಾರ್ಗದರ್ಶನ ಪ್ರಾರಂಭಿಸಿ",
        cancelNavBtn: "ಮಾರ್ಗದರ್ಶನ ನಿಲ್ಲಿಸಿ",
        routeStatus: "ಸಕ್ರಿಯ ಮಾರ್ಗ: ಗಮ್ಯಸ್ಥಾನ",
        nextStepTitle: "ಮುಂದಿನ ಧ್ವನಿ ಸೂಚನೆ:",
        stepInstruction: "35 ಮೀಟರ್ ನೇರವಾಗಿ ನಡೆಯಿರಿ, ನಂತರ ಎಡಕ್ಕೆ ಸ್ವಲ್ಪ ತಿರುಗಿ.",
        distanceRemaining: "ಉಳಿದ ದೂರ: 240 ಮೀಟರ್ (~3 ನಿಮಿಷಗಳ ನಡಿಗೆ)",
        audioPulseBtn: "ದೂರ ರಾಡಾರ್ ಬೀಪ್ ಪರೀಕ್ಷಿಸಿ",

        permissionStates: {
          title: "ಸಂವೇದಕ ಅನುಮತಿ ಸ್ಥಿತಿ",
          camera: "ಕ್ಯಾಮೆರಾ ಸಂವೇದಕ: ಸಿದ್ಧವಾಗಿದೆ",
          mic: "ಮೈಕ್ರೋಫೋನ್: ಸಕ್ರಿಯವಾಗಿದೆ",
          location: "GPS ಲೊಕೇಶನ್: ಉನ್ನತ ನಿಖರತೆ"
        }
      },

      companion: {
        title: "ಲೈಫ್ ಒಡನಾಡಿ – AI ಸ್ನೇಹಪರ ಸಂಭಾಷಣೆ",
        subtitle: "ನಿಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲು ಮತ್ತು ನಿಮ್ಮ ದಿನವನ್ನು ಹರ್ಷಚಿತ್ತವಾಗಿಸಲು ಪ್ರೀತಿಯ ಧ್ವನಿ ಒಡನಾಡಿ.",
        dailyGreeting: "ನಮಸ್ಕಾರ! ಇಂದು ನಿಮ್ಮ ದಿನ ಹೇಗಿತ್ತು? ನೀವು ನನ್ನೊಂದಿಗೆ ಏನನ್ನಾದರೂ ಮುಕ್ತವಾಗಿ ಹಂಚಿಕೊಳ್ಳಬಹುದು.",
        quickPromptsLabel: "ಪ್ರಯತ್ನಿಸಬಹುದಾದ ಧ್ವನಿ ಸಲಹೆಗಳು:",
        prompt1: "ಇಂದು ನಿಮ್ಮ ದಿನ ಹೇಗಿತ್ತು?",
        prompt2: "ನನಗೆ ಒಂದು ಪ್ರೇರಕ ಸಣ್ಣ ಕಥೆಯನ್ನು ಹೇಳುವಿರಾ?",
        prompt3: "1 ನಿಮಿಷದ ಉಸಿರಾಟದ ವಿಶ್ರಾಂತಿ ಮಾಡಿಸಿ",
        prompt4: "ಇಂದಿನ ಹವಾಮಾನ ಹೇಗಿದೆ?",

        inputPlaceholder: "ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿರಿ...",
        sendBtn: "ಕಳುಹಿಸಿ",
        micBtn: "ಮಾತನಾಡಲು ಮೈಕ್",
        clearHistory: "ಇತಿಹಾಸ ಅಳಿಸಿ",
        readAloudBtn: "ಓದಿ ಕೇಳಿಸಿ",

        checkinHeader: "ದೈನಂದಿನ ಯೋಗಕ್ಷೇಮ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        checkinDesc: "ಲೈಫ್‌ಮೇಟ್ ನಿಮ್ಮೊಂದಿಗೆ ಕುಶಲ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಲು ಸಮಯವನ್ನು ನಿಗದಿಪಡಿಸಿ.",
        morningTime: "ಬೆಳಗಿನ ಶುಭಾಶಯದ ಸಮಯ",
        eveningTime: "ಸಂಜೆಯ ಅವಲೋಕನದ ಸಮಯ",
        moodTrackerTitle: "ಈಗ ನಿಮ್ಮ ಮನಸ್ಥಿತಿ ಹೇಗಿದೆ?",
        moodHappy: "ಸಂತೋಷವಾಗಿದ್ದೇನೆ",
        moodCalm: "ಶಾಂತವಾಗಿದ್ದೇನೆ",
        moodTired: "ಸ್ವಲ್ಪ ದಣಿದಿದ್ದೇನೆ",
        moodAnxious: "ಸಮಾಧಾನ ಬೇಕಿದೆ",
        saveCheckin: "ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ"
      },

      reminder: {
        title: "ಔಷಧಿ ಜ್ಞಾಪನೆ – ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು",
        subtitle: "ಧ್ವನಿ ಅಲಾರಂ ಮೂಲಕ ಔಷಧಿಗಳನ್ನು ಸಕಾಲದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
        disclaimer: "ಪ್ರಮುಖ ವೈದ್ಯಕೀಯ ಸೂಚನೆ: ಲೈಫ್‌ಮೇಟ್ AI ಕೇವಲ ವೇಳಾಪಟ್ಟಿ ಜ್ಞಾಪಕವಾಗಿದೆ. ಇದು ಯಾವುದೇ ಔಷಧಿಯನ್ನು ಶಿಫಾರಸು ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಬದಲಾಯಿಸುವುದಿಲ್ಲ.",

        addMedicineBtn: "+ ಹೊಸ ಔಷಧಿಯನ್ನು ಸೇರಿಸಿ",
        dailyScheduleHeader: "ಇಂದಿನ ಔಷಧಿ ವೇಳಾಪಟ್ಟಿ",
        testAlarmBtn: "ಔಷಧಿ ಅಲಾರಂ ಪರೀಕ್ಷಿಸಿ",

        statusTaken: "ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ",
        statusPending: "ಈಗ ತೆಗೆದುಕೊಳ್ಳಿ",
        statusUpcoming: "ನಿಗದಿಯಾಗಿದೆ",
        statusSnoozed: "ಮುಂದೂಡಲಾಗಿದೆ (10 ನಿಮಿಷ)",

        btnTaken: "ಔಷಧಿ ತೆಗೆದುಕೊಂಡೆ",
        btnSnooze: "10 ನಿಮಿಷಗಳ ನಂತರ",
        btnAcknowledge: "ತಿಳಿಯಿತು",

        trustedContactAlert: "ಪೋಷಕರ ಸಂದೇಶ ವೈಶಿಷ್ಟ್ಯ",
        trustedContactDesc: "30 ನಿಮಿಷಗಳಲ್ಲಿ ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳದಿದ್ದರೆ ಪೋಷಕರಿಗೆ ಸ್ವಯಂಚಾಲಿತ SMS ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
        trustedToggle: "ಪೋಷಕರ SMS ಎಚ್ಚರಿಕೆ: ಆನ್ ಆಗಿದೆ",

        modalTitle: "ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯ!",
        modalText: "ರಾತ್ರಿ 08:30 ಆಗಿದೆ. ಊಟದ ನಂತರ ಮೆಟ್‌ಫಾರ್ಮಿನ್ 500mg ಮಾತ್ರೆಯನ್ನು ಬೆಚ್ಚಗಿನ ನೀರಿನೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳಿ.",
        closeModal: "ಮುಚ್ಚಿ"
      },

      language: {
        title: "ಭಾಷೆ ಆಯ್ಕೆ – ಪ್ರಾದೇಶಿಕ ಧ್ವನಿ ಭಾಷೆ",
        subtitle: "ನಿಮ್ಮ ನೆಚ್ಚಿನ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಎಲ್ಲಾ ಧ್ವನಿ ಸೂಚನೆಗಳು ತಕ್ಷಣವೇ ಆ ಭಾಷೆಗೆ ಬದಲಾಗುತ್ತವೆ.",
        currentSelected: "ಪ್ರಸ್ತುತ ಸಕ್ರಿಯ ಭಾಷೆ:",
        previewVoiceBtn: "ಧ್ವನಿ ಮಾದರಿ ಆಲಿಸಿ",
        saveLanguageBtn: "ಡೀಫಾಲ್ಟ್ ಭಾಷೆಯಾಗಿ ಹೊಂದಿಸಿ",
        audioSampleText: "ಧ್ವನಿ ಆಡಿಯೋ ಮಾದರಿ:"
      },

      emergency: {
        title: "ಲೈಫ್ ತುರ್ತು – ತ್ವರಿತ ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆ",
        subtitle: "ಧ್ವನಿ ಆದೇಶ ಮತ್ತು ಲೈವ್ ಸ್ಥಳ ಹಂಚಿಕೆಯೊಂದಿಗೆ ತ್ವರಿತ ತುರ್ತು ರಕ್ಷಣಾ ವೇದಿಕೆ.",
        emergencyVoiceCommand: "ಧ್ವನಿ ಆದೇಶ: \"ಹಾಯ್ ಲೈಫ್, ಎಮರ್ಜೆನ್ಸಿ!\" ಎಂದು ಹೇಳಿ",
        sosBtnText: "ತುರ್ತು SOS ಬಟನ್",
        sosSubtext: "ಕೌಂಟ್‌ಡೌನ್ ಪ್ರಾರಂಭಿಸಲು ಒತ್ತಿರಿ",

        countdownWarning: "ತುರ್ತು SOS ಸಕ್ರಿಯಗೊಳ್ಳುತ್ತಿದೆ!",
        countdownDesc: "ಪೋಷಕರನ್ನು ಸಂಪರ್ಕಿಸಲು ಮತ್ತು ಲೊಕೇಶನ್ ಹಂಚಿಕೊಳ್ಳಲು ಉಳಿದ ಸಮಯ:",
        secondsLabel: "ಸೆಕೆಂಡುಗಳು",
        cancelSosBtn: "ತಪ್ಪು ಅಲಾರಂ ರದ್ದುಮಾಡಿ (ನಾನು ಸುರಕ್ಷಿತವಾಗಿದ್ದೇನೆ)",

        simulationNotice: "ಡೆಮೊ ಸೂಚನೆ: ಇಲ್ಲಿ ತೋರಿಸಲಾದ ಕರೆಗಳು ಮತ್ತು ಸಂದೇಶಗಳು ಕೇವಲ ಮಾದರಿ ಮಾತ್ರ. ಯಾವುದೇ ನೈಜ ಕರೆಗಳು ಹೋಗುವುದಿಲ್ಲ.",

        simCallTitle: "ಸಿಮ್ಯುಲೇಟೆಡ್ ತುರ್ತು ಕರೆ",
        simCallContact: "ಕರೆ ಮಾಡಲಾಗುತ್ತಿದೆ: ಡಾ. ರಾಜೇಶ್ ಕುಮಾರ್ (ಮಗ / ಪೋಷಕ)",
        simCallStatus: "ಸಂಪರ್ಕಗೊಂಡಿದೆ • ಲೈವ್ ಧ್ವನಿ ಸಕ್ರಿಯವಾಗಿದೆ",
        simEndCall: "ಕರೆ ಮುಕ್ತಾಯಗೊಳಿಸಿ",

        simSmsTitle: "ಸಿಮ್ಯುಲೇಟೆಡ್ ಸ್ವಯಂಚಾಲಿತ SMS ಎಚ್ಚರಿಕೆ",
        simSmsRecipient: "ಸ್ವೀಕರಿಸುವವರು: +91 98401 23456 (ಡಾ. ರಾಜೇಶ್ ಕುಮಾರ್)",
        simSmsBody: "ತುರ್ತು ಎಚ್ಚರಿಕೆ: ಲೈಫ್‌ಮೇಟ್ AI ಬಳಕೆದಾರರು ತುರ್ತು ನೆರವು ಕೋರಿದ್ದಾರೆ. ಕೊನೆಯ GPS ಸ್ಥಳ: 13.0827° N, 80.2707° E (ಅಣ್ಣಾ ಸಲೈ ಬಳಿ, ಚೆನ್ನೈ). ಬ್ಯಾಟರಿ: 88%.",

        locationCardTitle: "ಸಿಮ್ಯುಲೇಟೆಡ್ ಲೈವ್ GPS ಸ್ಥಳ",
        gpsCoords: "ಅಕ್ಷಾಂಶ: 13.0827° N | ರೇಖಾಂಶ: 80.2707° E",
        gpsAddress: "ಅಣ್ಣಾ ಸಲೈ ಬಳಿ, ಚೆನ್ನೈ, ತಮಿಳುನಾಡು 600002",
        gpsAccuracy: "ನಿಖರತೆ: ± 4.2 ಮೀಟರ್",

        contactsHeader: "ನೋಂದಾಯಿತ ತುರ್ತು ಸಂಪರ್ಕಗಳು",
        addContactBtn: "+ ಹೊಸ ಸಂಪರ್ಕವನ್ನು ಸೇರಿಸಿ",
        primaryBadge: "ಮುಖ್ಯ ಸಂಪರ್ಕ"
      },

      about: {
        title: "ಲೈಫ್‌ಮೇಟ್ AI ಯೋಜನೆಯ ಬಗ್ಗೆ",
        subtitle: "ದೃಷ್ಟಿಹೀನರ ಸ್ವಾವಲಂಬನೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಧ್ವನಿ AI ಒಡನಾಡಿ",
        problemHeader: "ಸಮಸ್ಯೆಯ ಹಿನ್ನೆಲೆ",
        problemText: "ವಿಶ್ವದಾದ್ಯಂತ 220 ಕೋಟಿಗೂ ಹೆಚ್ಚು ಜನರು ದೃಷ್ಟಿಹೀನತೆಯೊಂದಿಗೆ ಬದುಕುತ್ತಿದ್ದಾರೆ. ರಸ್ತೆಗಳಲ್ಲಿ ನಡೆಯುವುದು, ಔಷಧಿಗಳನ್ನು ಸರಿಯಾಗಿ ತೆಗೆದುಕೊಳ್ಳುವುದು ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ತಕ್ಷಣ ಸಹಾಯ ಪಡೆಯುವುದು ದಿನನಿತ್ಯದ ಸವಾಲುಗಳಾಗಿವೆ.",

        solutionHeader: "ಲೈಫ್‌ಮೇಟ್ AI ಪರಿಹಾರ",
        solutionText: "ಲೈಫ್‌ಮೇಟ್ AI ಸಂಪೂರ್ಣ ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಸ್ವಾವಲಂಬನೆಯನ್ನು ನೀಡುತ್ತದೆ. ಕ್ಯಾಮೆರಾ ಅಡೆತಡೆ ಗುರುತಿಸುವಿಕೆ, ಸ್ನೇಹಪರ ಸಂಭಾಷಣೆ ಮತ್ತು ತುರ್ತು ರಕ್ಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",

        objectivesTitle: "ಮುಖ್ಯ ಉದ್ದೇಶಗಳು",
        obj1: "ಪೂರ್ಣ ಧ್ವನಿ ನಿಯಂತ್ರಣ: ಪರದೆಯನ್ನು ನೋಡದೆಯೇ ಎಲ್ಲಾ ಸೇವೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಬಳಸಬಹುದು.",
        obj2: "ಪ್ರೀತಿಯ ಒಡನಾಟ: ಒಂಟಿತನವನ್ನು ಹೋಗಲಾಡಿಸಲು ಧ್ವನಿ ಸಂಭಾಷಣೆ ಮತ್ತು ಮನಸ್ಥಿತಿ ಪರಿಶೀಲನೆ.",
        obj3: "ಆರೋಗ್ಯ ರಕ್ಷಣೆ: ಸಕಾಲಿಕ ಔಷಧಿ ಜ್ಞಾಪನೆ ಮತ್ತು ಪೋಷಕರ ಎಚ್ಚರಿಕೆ.",
        obj4: "ಬಹುಭಾಷಾ ಬೆಂಬಲ: ಕನ್ನಡ, ತೆಲುಗು, ತಮಿಳು, ಮಲಯಾಳಂ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್ ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯ.",

        techHeader: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಮಾನದಂಡಗಳು",
        techText: "WCAG 2.1 AAA ಮಾನದಂಡಗಳು, ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್ ಮತ್ತು ವೆಬ್ ಆಡಿಯೊ ಸಿಂಥಸೈಜರ್‌ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.",

        disclaimerTitle: "ಹ್ಯಾಕಥಾನ್ ಮಾದರಿ ಪಾರದರ್ಶಕತೆ ಸೂಚನೆ",
        disclaimerText: "ಇದು ಹ್ಯಾಕಥಾನ್ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾದ ಮಾದರಿ ಜಾಲತಾಣವಾಗಿದೆ. ಕ್ಯಾಮೆರಾ ಮತ್ತು ಜಿಪಿಎಸ್ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅಣಕುಗೊಳಿಸಲಾಗಿದೆ."
      }
    }
  };

  window.Translations = translations;
})();
