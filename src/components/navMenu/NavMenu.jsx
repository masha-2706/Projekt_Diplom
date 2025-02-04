import React from 'react'
import { Link } from 'react-router'

function NavMenu() {
  return (
    <div>
     <Link to='/'>Main Page</Link> 
     <Link to='/categories'>Categories</Link> 
     <Link to='/products'>All products</Link> 
     <Link to='/sales'>All sales</Link> 
    </div>
  )
}

export default NavMenu
