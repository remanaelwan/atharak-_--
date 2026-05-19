import { create } from 'zustand';

interface AuthState {
  user: any | null;
  isPremium: boolean;
  language: 'ar' | 'en';
  setUser: (user: any) => void;
  setLanguage: (lang: 'ar' | 'en') => void;
  togglePremium: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: { displayName: 'محمد أحمد', email: 'mohamed.ahmed@example.com' },
  isPremium: false,
  language: 'ar',
  setUser: (user) => set({ user }),
  setLanguage: (lang) => {
    set({ language: lang });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  },
  togglePremium: () => set((state) => ({ isPremium: !state.isPremium })),
}));
