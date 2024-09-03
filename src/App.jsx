import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom' 
import './reset.css'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
