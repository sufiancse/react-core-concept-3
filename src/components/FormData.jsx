import React from 'react';

const FormData = () => {
    const handleFormData = (formData) => {
      console.log(formData.get('name'));
      console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleFormData}>
                <input type="text" name='name' placeholder='Enter your name' />
                <br />
                <input type="email" name="email" placeholder='Enter your email' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormData;