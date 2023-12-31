import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';

function Application() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Помилка отримання даних з API', error));
  }, []);

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSaveContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowForm(false); 
  };

  return (
    <div className='form'>
      <h1>Список контактів</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm ? (
        <AddContact onSave={handleSaveContact} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Додати контакт</button>
      )}
      
    </div>
  );
}

export default Application;