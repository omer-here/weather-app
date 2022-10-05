import React from "react";
import { useState } from 'react'
import Widget from './Widget';

export default function Navbar() {

  const [name, setName] = useState('islamabad');
    const [seed, setSeed] = useState(1);
    // const[city, setCity] = useState('');
    let city = '';

    const handleSubmit = (event) => {
      event.preventDefault();
      city = name;
      // alert(`The name you entered was: ${name}`);
      setSeed(Math.random());
      setName(city);
      console.log(city);
    }
    // const changeState = (e)=>{
    //   setName(e.target.value);
    //   setName('lahore');
    // }
    // const handleClick = e =>{
    //   e.preventDefault(); 
    //   console.log(name)
    // }

    const handeChange= (e) =>{
       setName(e.target.value);
      // alert(`The name you entered was: ${name}`)
      // console.log(city);
    }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Weather-App
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit} class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter here!"
                aria-label="Search"
                onChange={handeChange}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Widget name={name} key={seed}/>
    </>
  );
}
