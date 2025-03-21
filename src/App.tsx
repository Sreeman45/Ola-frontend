
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import Profile from './components/profile';
import About from './components/about';
import Settings from './components/settings';
import Homepage from './pages/home';



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Homepage}></Route>
      <Route  path='/Profile' Component={Profile}></Route>
      <Route  path='/about' Component={About}></Route>
      <Route  path='/Settings' Component={Settings}></Route>
      
     
   
     </Routes>
     </BrowserRouter>
    
  </>

  )
}

export default App
