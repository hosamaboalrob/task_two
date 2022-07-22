import { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
 import Portfolio from './component/Portfolio/Portfolio';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Copyright from './component/Copyright/Copyright';
 import { Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
class App extends Component {
  render(){
  return (
    <div>
     <Navbar />
        <Header/>
    <Routes>
           <Route path='Portfolio' element={<Portfolio/>}></Route>
           <Route path='About' element={<About/>}></Route>
           <Route path='Contact' element={<Contact/>}></Route>
           <Route path='NotFound' element={<NotFound/>}></Route>
    </Routes> 
      <Footer/>
      <Copyright/>
     </div>
  );
}
}
export default App;
