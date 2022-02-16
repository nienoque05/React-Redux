import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css'
import {IoIosAirplane} from 'react-icons/io'

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);

 return (
   <header className="container">

     <Link to="/">
      <IoIosAirplane size={70} color="#fff"/>
     </Link>

     <Link  className="reserva" to="/reservas">
       <div>
         <strong>Minhas reservas</strong>
         <span>{reserveSize} reservas</span>
       </div>
     </Link>

   </header>
 );
}