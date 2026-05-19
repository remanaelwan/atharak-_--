import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      "app": {
        "tagline": "أثرك خالد دائمًا",
        "greeting": "مرحباً",
        "legacyTitle": "أثرك"
      },
      "tabs": {
        "home": "الرئيسية",
        "will": "وصيتي",
        "charity": "صدقتي",
        "memories": "ذكرياتي",
        "profile": "حسابي"
      },
      "home": {
        "legacyStarted": "أثرك يبدأ اليوم",
        "legacyCompletion": "اكتمال الأثر"
      },
      "actions": {
        "digitalWill": "وصيتي الرقمية",
        "ongoingCharity": "صدقتي الجارية",
        "myMemories": "ذكرياتي",
        "aiAssistant": "مساعدي الذكي"
      }
    }
  },
  en: {
    translation: {
      "app": {
        "tagline": "Your Legacy Lives Forever",
        "greeting": "Welcome",
        "legacyTitle": "Atharak"
      },
      "tabs": {
        "home": "Home",
        "will": "Will",
        "charity": "Charity",
        "memories": "Memories",
        "profile": "Profile"
      },
      "home": {
        "legacyStarted": "Your legacy starts today",
        "legacyCompletion": "Legacy Completion"
      },
      "actions": {
        "digitalWill": "Digital Will",
        "ongoingCharity": "Ongoing Charity",
        "myMemories": "My Memories",
        "aiAssistant": "AI Assistant"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
