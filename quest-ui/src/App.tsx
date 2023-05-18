import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import Footer from './Pages/Footer/Footer';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Pricing from './Pages/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* <SignUp/> */}
      {/* <Contact/> */}
      <Pricing/>
      {/* <Login/> */}
     {/* <Main/> */}
     <Footer/>
    </div>
  );
}

export default App;
