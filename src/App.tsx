import { useTimerStore } from './store/useTimerStore';

function App() {
  const timers = useTimerStore((state) => state.timers);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Timer App</h1>
        
        {/* Add Timer Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
          Add Timer
        </button>

        {/* Timer List */}
        <div className="space-y-4">
          {timers.map((timer) => (
            <div 
              key={timer.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold">{timer.name}</h2>
              <p>Duration: {timer.duration} seconds</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
