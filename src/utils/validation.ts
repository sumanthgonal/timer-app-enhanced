import { toast } from 'sonner';

export interface TimerFormData {
  name: string;
  description?: string;
  hours: number;
  minutes: number;
  seconds: number;
}

export const validateTimerForm = (data: TimerFormData): boolean => {
  const { name, hours, minutes, seconds } = data;
  
  if (!name.trim()) {
    toast.error('Name is required');
    return false;
  }

  if (name.length > 50) {
    toast.error('Name must be less than 50 characters');
    return false;
  }

  if (hours < 0 || minutes < 0 || seconds < 0) {
    toast.error('Time values cannot be negative');
    return false;
  }

  if (minutes > 59 || seconds > 59) {
    toast.error('Minutes and seconds must be between 0 and 59');
    return false;
  }

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  if (totalSeconds === 0) {
    toast.error('Please set a time greater than 0');
    return false;
  }

  if (totalSeconds > 86400) { // 24 hours
    toast.error('Timer cannot exceed 24 hours');
    return false;
  }

  return true;
};

interface TimerInput {
  name: string;
  duration: number;
}

export const validateTimer = (timer: TimerInput): string[] => {
  const errors: string[] = [];

  if (!timer.name.trim()) {
    errors.push('Timer name is required');
  }

  if (timer.name.length > 50) {
    errors.push('Timer name must be less than 50 characters');
  }

  if (!timer.duration || timer.duration <= 0) {
    errors.push('Duration must be greater than 0');
  }

  if (timer.duration > 86400) { // 24 hours in seconds
    errors.push('Duration cannot exceed 24 hours');
  }

  return errors;
};