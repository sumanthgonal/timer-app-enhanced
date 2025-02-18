import { useState, useEffect } from 'react';
import { Timer } from '../types/timer';
import { Button } from './Button';
import { validateTimer } from '../utils/validation';

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  timer?: Timer;
  onSubmit: (timer: Omit<Timer, 'id' | 'createdAt'>) => void;
}

export const TimerModal = ({ isOpen, onClose, timer, onSubmit }: TimerModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    duration: 0,
  });
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (timer) {
      setFormData({
        name: timer.name,
        duration: timer.duration,
      });
    } else {
      setFormData({
        name: '',
        duration: 0,
      });
    }
  }, [timer, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateTimer(formData);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({
      ...formData,
      remainingTime: formData.duration,
      isRunning: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {timer ? 'Edit Timer' : 'Add Timer'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration (seconds)
              </label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: Number(e.target.value) }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {errors.length > 0 && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md">
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="secondary"
                onClick={onClose}
                type="button"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
              >
                {timer ? 'Save Changes' : 'Add Timer'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}; 