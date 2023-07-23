import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [countryname, setCountryname] = useState('');

  const Navigate = useNavigate();

  function check(x) {
    if (x.length >= 3 && x.length <= 15) {
      console.log(x);
      setCountryname(x);
      Navigate(`/Weather_Details/${x}`);
    } else {
      alert('Please Enter Correct Country Or City');
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      check(inputValue);
    }
  };

  return (
    <>
      <h4 className='text-center mt-5 fw-bold my-5'>Search about your Weather</h4>
      <div className="container">
        <div className="row">
          <div className="d-flex">
            <input
              min={3}
              max={15}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress} // Add this line to handle "Enter" key press
              type="text"
              className="form-control"
              placeholder="Enter Your Country or city"
            />
            <button onClick={() => check(inputValue)} type='submit' className='btn btn-danger ms-2'>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
