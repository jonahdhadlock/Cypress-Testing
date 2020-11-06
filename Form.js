import React, { useEffect, useState } from 'react';

function Form(props) {
    const [formValues, setFormValues] = useState({ name: "", email: "", password: "", checkbox: false });
    const [buttonDisabled, setButtonDisabled] = useState(true)

  const submitForm = (event) => {
      event.preventDefault();
      const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      setFormValues({ ...formValues, [event.target.name]: value });
      console.log(formValues);
    };
    
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet" />
            </head>
            <form onSubmit={submitForm}>
                <label>Name:</label>
                <input type='text' name='name' id='name' value={formValues.name} placeholder='John Doe' minlength="5"
                        onChange={submitForm} required />
                <label>Email:</label>
                <input type='email' name='email' id='email' value={formValues.email} placeholder='johndoe@email.com' onChange={submitForm} required />
                <label>Password:</label>
                <input type='password' name='password' id='password' value={formValues.password} placeholder='***************' minlength="8" onChange={submitForm} required />
                <a href="#">Terms of Service</a>
                <input type='checkbox' name="checkbox" value={formValues.checkbox} onChange={submitForm} required />
                <button type='submit' disabled={buttonDisabled} onClick={() => submitForm} >Submit</button>
            </form>
        </div>
    );
}

export default Form;