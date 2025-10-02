import React from 'react';

const SimpleForm = () => {
    const formHandler = (e) => {
        e.preventDefault()
      console.log(e.target.name.value, e.target.email.value);
    }
    return (
        <div>
             <form onSubmit={formHandler}>
                <input type="text" name='name' placeholder='Enter your name..' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <br></br>
                <input type="submit" value="Submit" />
             </form>
        </div>
    );
};

export default SimpleForm;