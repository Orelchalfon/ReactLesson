import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className="Home">
    <header className="nav">
      <div className="nav_link">
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li className="nav_link">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="nav_link">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
    <main className='mainSec'></main>
    <footer className='footerSec'>©️ OrelChalfon</footer>
  </div>
  )
}
