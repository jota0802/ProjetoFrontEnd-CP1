import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom' 
import './global-styled.js'

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
