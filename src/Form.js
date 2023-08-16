import React, { useState } from "react";

export default function Form() {
  const initialFormState = {
    firstname: "",
    lastname: "",
    mobilenumber: "",
    gender: "",
    carbrand: "",
    cartype: "",
    pricerange: "",
    acceptTerms: false
  };

  const [state, setState] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setState((prevState) => ({
      ...prevState,
      [name]: inputValue
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setState(initialFormState); // Reset the form to blank
  };

  return (
    <div>
      <h1>Pre Owned Car Enquiry Form</h1>
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>First Name :*</label>
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            onChange={handleInputChange}
            required
          />
        </div> <br/>

        <div>
          <label>Last Name :</label>
          <input
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={handleInputChange}
          />
        </div> <br/>

        <div>
          <label>Mobile Number :*</label>
          <input
            type="tel"
            name="mobilenumber"
            value={state.mobilenumber}
            onChange={handleInputChange}
            required
          />
        </div> <br/>

          <div>
           <label>Gender :*</label> 
          </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleInputChange}
            required
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleInputChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="others"
            checked={state.gender === "others"}
            onChange={handleInputChange}
          />
          Others
        </div> <br/>

        <h2>Car Details</h2>
        <div>
          <label>Car Brand :</label>
          <select
            name="carbrand"
            value={state.carbrand}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            <option value="maruti">Maruti Suzuki</option>
            <option value="ford">Ford</option>
            <option value="nissan">Nissan</option>
            <option value="nissan">Benze</option>
            <option value="nissan">BMW</option>
            <option value="nissan">Tata</option>
            <option value="nissan">Others</option>
          </select>
        </div> <br/>

        <div>
          <label>Car Type :</label>
          <select
            name="cartype"
            value={state.cartype}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            <option value="suv">Premium</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </div> <br/>

        <div>
          <label>Price Range :</label>
          <select
            name="pricerange"
            value={state.pricerange}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div> <br/>

        <div>
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={state.acceptTerms}
              onChange={handleInputChange}
              required
            />
            I accept the terms & conditions*
          </label>
        </div> <br/>

        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}







































// import React, { useState } from 'react';

// function Form() {
//     const initialFormData = {
//     firstName: '',
//     lastName: '',
//     phone:'',
//     gender:'',
//     checkbox:'',

//   };

//   const [formData, setFormData] = useState(initialFormData);


//    const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const inputValue = type === 'radio' || type === 'checkbox' ? checked : value;
  
//   setFormData((prevData) => ({
//       ...prevData,
//       [name]: inputValue,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form data submitted:', formData);
//     setFormData(initialFormData);
//   };
//   return (
//     <div>
//       <h1>Pre Owned Car Enquiry Form</h1>  
//       <form onSubmit={handleSubmit}>
//         <label>
//          First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </label>
//         <br/>
        

//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </label>
//         <br/>


//         <label>
//           Mobile number:
//           <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           />
//         </label>
//         <br/>

//         <label>
//           Gender :
//           <input
//           type="radio"
//           name="gender"
//           value="male"
//           onChange={handleChange}
//         />
//         Male
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           onChange={handleChange}
//         />
//         Female
//         </label>
//         <br/>

//         <label>
//           <input
//           type="checkbox"
//           name="checkbox"
//           checked={formData.checkbox}
//           onChange={handleChange}
//           required
//           />
//           I confirm that all the information given above is True.
//         </label>
//         <br/>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;