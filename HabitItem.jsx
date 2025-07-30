function HabitItem({ habit, onDelete, onIncrement }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
      }}
    >
      <h3>{habit.name}</h3>
      <p>
        ✅ Days Completed: <strong>{habit.days}</strong>{' '}
        {habit.days >= 5 && <span>🔥</span>}
      </p>
      <button onClick={() => onIncrement(habit.id)}>+1 Day</button>
      <button
        onClick={() => onDelete(habit.id)}
        style={{ marginLeft: '10px', backgroundColor: 'crimson', color: 'white' }}
      >
        Delete
      </button>
    </div>
  );
}

export default HabitItem;
