import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import NavBar from './components/Home';
import { Card } from './components/Card';
import { Jumbotron } from './components/Jumbotron';
import skyrim from '../img/skyrim.jpg';
import bully from '../img/bully.jpg';
import pz from '../img/pz.jpg';
import civ6 from '../img/civ6.jpg';
import {Footer} from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="d-flex flex-column min-vh-100">
    <NavBar />

    <div className='container flex-grow-1'>
      <div className='p-5 mb-4 bg-light rounded-3'>
        <Jumbotron />
      </div>
      <div className="row">
        <div className="col-md-3 mb-4">
          <Card title='Skyrim' button='Descargar' image={skyrim}/>
        </div>
        <div className="col-md-3 mb-4">
          <Card title='Bully' button='Descargar' image={bully}/>
        </div>
        <div className="col-md-3 mb-4">
          <Card title='Project Zomboid' button='Descargar' image={pz}/>
        </div>
        <div className="col-md-3 mb-4">
          <Card title='Civilization VI' button='Descargar' image={civ6}/>
        </div>

      </div>
    </div>
    <Footer />
    </div>
  </React.StrictMode>,
)
