import React from 'react'
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Footer from './components/Footer'
import  Header from './components/Header'
import HomeScreens from './screens/HomeScreens'


function App() {
  return (
    
    <Router>
      <Header/>
      <main className="py-3">
      <Container>
        <Route path='/' component={HomeScreens} exact/>
      </Container>
      </main>
      <Footer/>
      
    </Router>
  );
}


export default App
