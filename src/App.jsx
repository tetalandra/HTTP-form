import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts, addContact, deleteContact } from "./services/api.js";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts().then(res => {
      setContacts(res.data);
      setLoading(false);
    });
  }, []);

  const handleAdd = (contact) => {
    const newContact = { ...contact, id: Date.now() };
    setContacts([...contacts, newContact]); 
    addContact(newContact);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id)); 
    deleteContact(id);
  };

  return (
    <div className="bod">
      <h1>Contacts Manager</h1>
      <ContactForm onAdd={handleAdd} />
      {loading ? <p>Loading...</p> : <ContactList contacts={contacts} onDelete={handleDelete} />}
    </div>
  );
}

export default App;
