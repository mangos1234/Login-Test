import './App.css';
import { Route, Routes } from 'react-router';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { useState } from 'react';

function App() {
  const [authenticationToken, setAuthToken] = useState("");

  const TokenHandler = (authToken) => {
    console.log(authToken)
    setAuthToken(authToken);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn onToken={TokenHandler} />} />
        <Route path="/home" element={<Home token={authenticationToken} />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;