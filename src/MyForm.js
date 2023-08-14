
import React, { useState } from 'react';

function MyForm() {
    const initialFormData = {
    firstName: '',
    lastName: '',
    phone:'',
    gender:'',
    checkbox:'',

  };

  const [formData, setFormData] = useState(initialFormData);


   const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'radio' || type === 'checkbox' ? checked : value;
  
  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData(initialFormData);
  };
  return (
    <div>
      <h1>Pre Owned Car Enquiry Form</h1>  
      <form onSubmit={handleSubmit}>
        <label>
         First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br/>
        

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br/>


        <label>
          Mobile number:
          <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Gender :
          <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        </label>
        <br/>
      
        <

        <label>
          <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
          required
          />
          I confirm that all the information given above is True.
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;