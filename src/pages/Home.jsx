import {useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import HomeBody from '../components/HomeBody';
import { Link } from 'react-router-dom';
export default function Home() {

  
    return (
      <>
      <div>
      <Navbar/>
      <HomeBody/>
      
      <Footer/>


      </div>  
      </>
    
    )
}
