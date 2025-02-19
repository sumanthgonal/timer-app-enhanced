import { useEffect } from 'react';
import { useTimerStore } from '../store/useTimerStore';
import { getSnackbarPosition } from '../utils/responsive';

export const Snackbar = () => {
  const { snackbar, hideSnackbar } = useTimerStore();
  const position = getSnackbarPosition();

  useEffect(() => {
    if (snackbar.isOpen) {
      const timer = setTimeout(() => {
        hideSnackbar();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.isOpen, hideSnackbar]);

  if (!snackbar.isOpen) return null;
#not now
  return (
    <div
      className={`fixed ${
        position === 'top-right' 
          ? 'top-4 right-4' 
          : 'bottom-4 left-4 right-4'
      } bg-gray-800 text-white p-4 rounded-lg shadow-lg flex justify-between items-center`}
    >
      <span>{snackbar.message}</span>
      <button
        onClick={hideSnackbar}
        className="ml-4 text-white hover:text-gray-300"
      >
        ✕
      </button>
    </div>
  );
}; 
