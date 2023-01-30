import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import Contact from './contact';
import { LangContext, LangProvider } from './LanguageContext';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <LangProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </>
  );
}

export default App;
