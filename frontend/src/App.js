import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message, type)=>{
    setalert({msg:message,
    type:type})

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
