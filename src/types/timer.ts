export interface Timer {
  id: string;
  name: string;
  duration: number;
  remainingTime: number;
  isRunning: boolean;
  createdAt: number;
  intervalId?: number; // Add this for simultaneous timers
}