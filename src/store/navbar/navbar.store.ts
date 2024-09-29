import { create } from 'zustand';

interface NavbarState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  language: 'es' | 'en';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'es' | 'en') => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isSidebarOpen: false,
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
  language: (localStorage.getItem('language') as 'es' | 'en') || 'es',
  toggleSidebar: () => set((state) => ({
    isSidebarOpen: !state.isSidebarOpen
  })),
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },
  setLanguage: (language) => {
    localStorage.setItem('language', language);
    set({ language });
  },
}));
