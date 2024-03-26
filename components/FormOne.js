
import React, { useContext } from 'react';
import AppContext from './Context';
import './form.module.css'


const FormOne = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (updateContext.userName == null) {
            console.log('Please enter your Name')
        } else if (updateContext.userMail == null || regex.test(updateContext.userMail) !== true) {
            console.log('Please enter your email correctly')
        } else if (updateContext.userPhone == null || updateContext.userPhone.length !== 10 ) {
            console.log('Please enter your phone number correctly')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain" style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Fill all form field to go to the next step</p>
        <form className="form">
          <br />
          <p>Comapany Name (Brand Name):</p>
          <input
            className="formInput"
            type="text"
            placeholder="Comapany Name (Brand Name):"
            onChange={(e) => updateContext.setName(e.target.value)}
            required
          />
          <br />
          <br />
          <p>Legal Name (Registered Name)</p>
          <input
            className="formInput"
            type="text"
            placeholder="Legal Name (Registered Name):"
            onChange={(e) => updateContext.setName(e.target.value)}
            required
          />
          <br />
          <br />
          <p>Website *:</p>
          <input
            className="formInput"
            type="email"
            placeholder="https:// "
            onChange={(e) => updateContext.setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="logo">
            Logo <span>(300X300)</span> *
          </label>
          <br />
          <input type="file" id="logo" name="logo" required />
          <br />
          <br />
          <label htmlFor="incorporated-date">
          
          Incorporated Date :
        </label>
        <br />
        <input type="date" id="incorporated-date" name="incorporated-date" />
        <br />
        <br />
  
        <div>
        <label htmlFor="num-employees">Number of Employees *</label>
        <br />
        <br />
        <select id="num-employees" name="num-employees" required>
          <option value="<10">&lt;10</option>
          <option value="11 to 20">11 to 20</option>
          <option value="21 to 40">21 to 40</option>
          <option value="41 to 60">41 to 60</option>
          <option value="61 to 100">61 to 100</option>
          <option value="101 to 150">101 to 150</option>
          <option value="151 to 250">151 to 250</option>
          <option value="251 to 500">251 to 500</option>
          <option value="501 to 1000">501 to 1000</option>
          <option value="More than 1000">More than 1000</option>
        </select>
        <br />
        <br />
      </div>
  
      <div>
        <label htmlFor="company-headquarters">Company Headquarters *</label>
        <br />
        <input type="text" id="company-headquarters" name="company-headquarters" placeholder="Country" required />
        <br />
        <input type="text" id="state" name="state" placeholder="State/Province" style={{ marginTop: '10px' }} />
        <br />
        <input type="text" id="city" name="city" placeholder="City" style={{ marginTop: '10px' }} />
        <br />
        <input type="text" id="postal-code" name="postal-code" placeholder="Postal code/Zip code" style={{ marginTop: '10px' }} />
      </div>
      <br />
  
      <label htmlFor="company-headquarters">Primary Email: *</label>
      <br />
          <input
            className="formInput"
            type="email"
            placeholder="Enter email Id"
            onChange={(e) => updateContext.setEmail(e.target.value)}
            required
          />
  <br />
  <br />
    <label htmlFor="company-headquarters">Phone number: *</label>
      <br />
          <input
            className="formInput"
            type="text"
            placeholder="Phone Number"
            maxLength="10"
            onChange={(e) => updateContext.setPhone(e.target.value)}
            required
          />
          <br />
          <br />  
          <button type="button" className="formSubmit" onClick={next}>
            Next
          </button>
        </form>
      </div>
    );
};

export default FormOne;
