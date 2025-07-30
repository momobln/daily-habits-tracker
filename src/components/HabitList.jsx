import HabitItem from './HabitItem';

function HabitList({ habits, onDelete, onIncrement }) {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
}

export default HabitList;
