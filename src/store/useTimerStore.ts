import { create } from 'zustand';

interface Timer {
  id: string;
  name: string;
  duration: number;
  isRunning: boolean;
  remainingTime: number;
  createdAt: number;
}

interface TimerStore {
  timers: Timer[];
  activeTimer: Timer | null;
  snackbarMessage: string | null;
  addTimer: (timer: Omit<Timer, 'id' | 'createdAt'>) => void;
  deleteTimer: (id: string) => void;
  setActiveTimer: (timer: Timer | null) => void;
  updateTimer: (id: string) => void;
  toggleTimer: (id: string) => void;
  restartTimer: (id: string) => void;
  editTimer: (id: string, updates: Partial<Timer>) => void;
  showSnackbar: (message: string) => void;
  hideSnackbar: () => void;
}

export const useTimerStore = create<TimerStore>((set) => ({
  timers: [],
  activeTimer: null,
  snackbarMessage: null,
  addTimer: (timer) =>
    set((state) => ({
      timers: [...state.timers, { 
        ...timer, 
        id: crypto.randomUUID(),
        createdAt: Date.now() 
      }],
    })),
  deleteTimer: (id) =>
    set((state) => ({
      timers: state.timers.filter((timer) => timer.id !== id),
      activeTimer: state.activeTimer?.id === id ? null : state.activeTimer,
    })),
  setActiveTimer: (timer) =>
    set(() => ({
      activeTimer: timer,
    })),
  updateTimer: (id) =>
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id && timer.isRunning
          ? { ...timer, remainingTime: timer.remainingTime - 1 }
          : timer
      ),
    })),
  toggleTimer: (id) =>
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, isRunning: !timer.isRunning } : timer
      ),
    })),
  restartTimer: (id) =>
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, remainingTime: timer.duration, isRunning: false } : timer
      ),
    })),
  editTimer: (id, updates) =>
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, ...updates } : timer
      ),
    })),
  showSnackbar: (message) => set({ snackbarMessage: message }),
  hideSnackbar: () => set({ snackbarMessage: null }),
}));