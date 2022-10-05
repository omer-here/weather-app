import React from 'react'
import { useState } from 'react'
import Widget from './Widget';


export default function InputCity() {
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


    // const reset = (e) => {
    //   setSeed(Math.random());
    //    setName(city);
    //   console.log(city);
    //   }


    return (
    <>
    {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
    <div className='d-flex justify-content-center'>
      <div className='mt-4'>
    <form onSubmit={handleSubmit}>
    <label className='text-light '>Enter City 
        <input className='mx-1'
          type="text" 
          value={name}
          style={{borderBlockColor: 'grey', borderRadius: '8rem', textAlign: 'center'}}
          onChange={handeChange}
        />
        <input style={{borderBlockColor: 'grey', borderRadius: '8rem', backgroundColor:''}} type='submit' value='submit'/>
      </label>
      </form>
      </div>
      </div>
       <Widget name={name} key={seed}/>

    







      {/* <button onClick={reset}>Reset</button> */}
       
    {/* <form >
      
      <button onClick={handleClick}>Enter</button>
    </form> */}

{/* <button  onClick={changeState} type="button">
                  Send state 
                </button>   */}
    
    </>
  )
}
