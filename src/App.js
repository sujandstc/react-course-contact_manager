import React, { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

import "./styles/app.css";

const App = () => {
  // Get JSON data that is saved on localstorage and parse to create array from string
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  // Create state for contacts
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  // This function is called by the child. i.e. ContactAdder
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  // Clear all contacts
  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3>Contact list: </h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContacts} style={{ background: "#cc0800" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
