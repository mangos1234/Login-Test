import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [authenticationToken, setAuthToken] = useState("");

  const TokenHandler = (authToken) => {
    console.log(authToken)
    setAuthToken(authToken);
  }

  return (
    <>
      {/* <AnimatePresence> */}
        <Routes>
          <Route path="/" element={<LogIn onToken={TokenHandler} />} />
          <Route path="/home" element={<Home token={authenticationToken} />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes> 
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;