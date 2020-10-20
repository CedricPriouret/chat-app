import React from 'react';
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="App">
      {/* <Contact 
      name = "Debra West"
      avatar = "https://randomuser.me/api/portraits/women/94.jpg"
      online = {true} />
      <Contact 
      name = "Clifton Sanders"
      avatar = "https://randomuser.me/api/portraits/men/93.jpg"
      online = {false} />
      <Contact 
      name = "Frederick Hanson"
      avatar = "https://randomuser.me/api/portraits/men/45.jpg"
      online = {true} /> */}

      <ContactList />
    </div>
  );
}

export default App;
