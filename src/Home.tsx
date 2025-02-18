import { useState, useEffect } from 'react';
import { Plus, Clock } from 'lucide-react';
import { TimerList } from './components/TimerList';
import { TimerModal } from './components/TimerModal';
import { Toaster } from 'sonner';
import { useTimerStore } from './store/useTimerStore';
import { Snackbar } from './components/Snackbar';
import { Timer } from './types/timer';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { timers, updateTimer, showSnackbar, editTimer, addTimer } = useTimerStore();
  const [editingTimer, setEditingTimer] = useState<Timer | undefined>(undefined);

  useEffect(() => {
    const intervals: number[] = [];

    timers.forEach(timer => {
      if (timer.isRunning) {
        const intervalId = setInterval(() => {
          updateTimer(timer.id);
          
          // Check if timer just completed
          if (timer.remainingTime <= 1) {
            showSnackbar(`Timer "${timer.name}" has completed!`);
            // Play sound here
          }
        }, 1000);
        
        intervals.push(intervalId);
      }
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [timers, updateTimer, showSnackbar]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>
        
        <TimerList />
        
        <TimerModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTimer(undefined);
          }}
          timer={editingTimer}
          onSubmit={(timerData) => {
            if (editingTimer) {
              editTimer(editingTimer.id, timerData);
            } else {
              addTimer(timerData);
            }
          }}
        />
        <Snackbar />
      </div>
    </div>
  );
}

export default Home;