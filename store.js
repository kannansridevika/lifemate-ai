// store.js - State Management & LocalStorage Persistence for LifeMate AI

(function() {
  const DEFAULT_MEDICINES = [
    {
      id: "med-1",
      name: "Metformin 500mg",
      time: "08:30 PM",
      period: "dinner",
      periodLabel: "Dinner (After Meal)",
      instructions: "Take 1 tablet with warm water after dinner",
      status: "pending", // pending, taken, snoozed
      dosage: "1 Tablet",
      lastTaken: null
    },
    {
      id: "med-2",
      name: "Amlodipine 5mg",
      time: "08:00 AM",
      period: "breakfast",
      periodLabel: "Breakfast (After Meal)",
      instructions: "Take 1 tablet for blood pressure management",
      status: "taken",
      dosage: "1 Tablet",
      lastTaken: "Today, 08:05 AM"
    },
    {
      id: "med-3",
      name: "Multivitamin & Zinc",
      time: "01:30 PM",
      period: "lunch",
      periodLabel: "Lunch (During Meal)",
      instructions: "Take with glass of water during lunch",
      status: "upcoming",
      dosage: "1 Capsule",
      lastTaken: null
    },
    {
      id: "med-4",
      name: "Carboxymethyl Eye Drops",
      time: "10:00 PM",
      period: "bedtime",
      periodLabel: "Bedtime (Before Sleep)",
      instructions: "2 drops in each eye to relieve dryness",
      status: "upcoming",
      dosage: "2 Drops",
      lastTaken: null
    }
  ];

  const DEFAULT_CONTACTS = [
    {
      id: "contact-1",
      name: "Dr. Rajesh Kumar",
      relationship: "Son & Guardian",
      phone: "+91 98401 23456",
      isPrimary: true,
      autoCall: true,
      autoSms: true
    },
    {
      id: "contact-2",
      name: "Priya Kumar",
      relationship: "Daughter",
      phone: "+91 94440 98765",
      isPrimary: false,
      autoCall: false,
      autoSms: true
    },
    {
      id: "contact-3",
      name: "Emergency Medical Response",
      relationship: "National Ambulance",
      phone: "108",
      isPrimary: false,
      autoCall: true,
      autoSms: false
    }
  ];

  const DEFAULT_CHAT = [
    {
      id: "chat-1",
      sender: "ai",
      text: "Hello! I am your LifeMate AI companion. How was your day today? I am here to listen and assist you anytime.",
      timestamp: "Today, 6:00 PM"
    },
    {
      id: "chat-2",
      sender: "user",
      text: "I went for a short evening walk around the garden. It was refreshing.",
      timestamp: "Today, 6:02 PM"
    },
    {
      id: "chat-3",
      sender: "ai",
      text: "That sounds wonderful! Walking in fresh air is great for your well-being. Remember you have your evening medicine scheduled for 8:30 PM. Would you like me to share a calming story or practice breathing together?",
      timestamp: "Today, 6:03 PM"
    }
  ];

  const DEFAULT_CHECKIN = {
    morningTime: "08:30",
    eveningTime: "19:30",
    soundChime: true,
    currentMood: "Peaceful & Happy",
    lastCheckin: "Today at 6:30 PM"
  };

  const Store = {
    getLanguage: function() {
      return localStorage.getItem('lifemate_lang') || 'en';
    },
    setLanguage: function(lang) {
      localStorage.setItem('lifemate_lang', lang);
      window.dispatchEvent(new CustomEvent('lifemate_lang_change', { detail: { lang } }));
    },

    getHighContrast: function() {
      return localStorage.getItem('lifemate_contrast') === 'high';
    },
    setHighContrast: function(enabled) {
      localStorage.setItem('lifemate_contrast', enabled ? 'high' : 'normal');
      window.dispatchEvent(new CustomEvent('lifemate_theme_change', { detail: { highContrast: enabled } }));
    },

    getFontSize: function() {
      return localStorage.getItem('lifemate_fontsize') || 'normal'; // 'normal', 'large', 'xlarge'
    },
    setFontSize: function(size) {
      localStorage.setItem('lifemate_fontsize', size);
      window.dispatchEvent(new CustomEvent('lifemate_fontsize_change', { detail: { size } }));
    },

    getMedicines: function() {
      try {
        const data = localStorage.getItem('lifemate_medicines');
        if (data) return JSON.parse(data);
      } catch (e) {}
      return DEFAULT_MEDICINES;
    },
    saveMedicines: function(meds) {
      try {
        localStorage.setItem('lifemate_medicines', JSON.stringify(meds));
      } catch (e) {}
    },
    addMedicine: function(med) {
      const current = this.getMedicines();
      const updated = [med, ...current];
      this.saveMedicines(updated);
      return updated;
    },
    updateMedicineStatus: function(id, status) {
      const current = this.getMedicines();
      const updated = current.map(m => {
        if (m.id === id) {
          return {
            ...m,
            status,
            lastTaken: status === 'taken' ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : m.lastTaken
          };
        }
        return m;
      });
      this.saveMedicines(updated);
      return updated;
    },

    getContacts: function() {
      try {
        const data = localStorage.getItem('lifemate_contacts');
        if (data) return JSON.parse(data);
      } catch (e) {}
      return DEFAULT_CONTACTS;
    },
    saveContacts: function(contacts) {
      try {
        localStorage.setItem('lifemate_contacts', JSON.stringify(contacts));
      } catch (e) {}
    },
    addContact: function(contact) {
      const current = this.getContacts();
      const updated = [...current, contact];
      this.saveContacts(updated);
      return updated;
    },

    getChatHistory: function() {
      try {
        const data = localStorage.getItem('lifemate_chat');
        if (data) return JSON.parse(data);
      } catch (e) {}
      return DEFAULT_CHAT;
    },
    saveChatHistory: function(chats) {
      try {
        localStorage.setItem('lifemate_chat', JSON.stringify(chats));
      } catch (e) {}
    },
    clearChatHistory: function() {
      this.saveChatHistory([]);
    },

    getCheckinSettings: function() {
      try {
        const data = localStorage.getItem('lifemate_checkin');
        if (data) return JSON.parse(data);
      } catch (e) {}
      return DEFAULT_CHECKIN;
    },
    saveCheckinSettings: function(settings) {
      try {
        localStorage.setItem('lifemate_checkin', JSON.stringify(settings));
      } catch (e) {}
    }
  };

  window.Store = Store;
})();
