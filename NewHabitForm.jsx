import { useState } from 'react';

function NewHabitForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new habit"
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Add
      </button>
    </form>
  );
}

export default NewHabitForm;
