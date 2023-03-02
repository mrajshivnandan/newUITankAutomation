import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/user/register" className="btn btn-primary">Add data</NavLink>
        </div>
      </div>
    </div>

    <NavLink to={'/users/register'}> Register </NavLink>
    <NavLink to={'/users/edit'}> Edit </NavLink>
    <NavLink to={'/users/view'}> View </NavLink>
    </>
  )
}

export default Home
