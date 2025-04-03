import { useEffect, useState } from 'react';
import './App.css';
import TeamList from './TeamList';

function Welcome() {
  return <h1>Welcome! March Madness is Here!</h1>;
}

function App() {

  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App