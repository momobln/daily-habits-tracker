import { useState } from 'react';
import HabitList from './components/HabitList';
import NewHabitForm from './components/NewHabitForm';

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      days: 0,
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const incrementHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, days: habit.days + 1 } : habit
      )
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>🔥 Daily Habits Tracker</h1>
      <NewHabitForm onAdd={addHabit} />
      <HabitList
        habits={habits}
        onDelete={deleteHabit}
        onIncrement={incrementHabit}
      />
    </div>
  );
}

export default App;
