
import {useState} from "react"; 
import './App.css'; 
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js' 
import About from './components/About.js'
//import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const [mode,setMode] = useState('light'); 
  const [alert,setAlert] = useState(null); // alert is an object containing the type of alert and the text to print on the alert.

  function defineAlert(type,message) {
    setAlert({
      type: type, 
      message: message
    });
    
    setTimeout(() => {  // So that the alert will disappear after 1500 ms
      setAlert(null); 
    }, 1500); 
  }

  function toggleMode() { 
    if(mode === 'light')
    {
      setMode('dark'); 
      document.body.style.backgroundColor="black"; 
      defineAlert("success","Enabled Dark Mode"); 
    }
    else 
    {
      setMode('light'); 
      document.body.style.backgroundColor="white"; 
      defineAlert("success","Enabled Light Mode"); 
    }
  }

  return (
    // <BrowserRouter>
      <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} defineAlert={defineAlert} />} /> */}
            <TextForm heading="Enter the text to analyze below" mode={mode} defineAlert={defineAlert}/>
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      </>
    // </BrowserRouter>
  );
} 

export default App; 