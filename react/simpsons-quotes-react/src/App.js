import React from 'react';
import Navbar from './components/Navbar'
import QuoteCard from './components/QuoteCard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
        quote="Marriage is like a coffin and each kid is another nail."
        character="Homer Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <QuoteCard 
        quote="Yeah. Call this an unfair generalization if you must.. but old people are no good at everything"
        character="Moe Szyslak"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411"
      />
      <QuoteCard 
        quote="My eyes! The goggles do nothing!"
      />
    </div>
  );
}

export default App;
