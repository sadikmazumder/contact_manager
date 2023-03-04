import React, { useEffect, useState } from "react";
//import { uuid } from "uuidv4";
import { v4 as uuid } from "uuid";

import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAT_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAT_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    // console.log(contact);
    // console.log([...contacts, { ...contact }]);
    // console.log(uuid());
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retriveConatcts = JSON.parse(localStorage.getItem(LOCAT_STORAGE_KEY));
    if (retriveConatcts) {
      setContacts(retriveConatcts);
    }
  }, []);

  useEffect(() => {
    //console.log(LOCAT_STORAGE_KEY, contacts);
    localStorage.setItem(LOCAT_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
