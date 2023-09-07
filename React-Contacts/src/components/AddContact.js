import React, { useState } from 'react';

function AddContact({ onSave, onCancel }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSave = () => {
      const newContact = { name, username, phone };
      onSave(newContact);
      setName('');
      setUsername('');
      setPhone('');
    };
  
    return (
      <div className='contact'>
        <h2>Додати новий контакт</h2>
        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Прізвище"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSave}>Зберегти</button>
        <button onClick={onCancel}>Скасувати</button>
      </div>
    );
}

export default AddContact;