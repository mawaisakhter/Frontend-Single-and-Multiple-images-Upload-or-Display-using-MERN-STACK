import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    singleImage: null,
    multipleImages: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSingleImageChange = (e) => {
    setFormData({ ...formData, singleImage: e.target.files[0] });
  };

  const handleMultipleImagesChange = (e) => {
    setFormData({ ...formData, multipleImages: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('age', formData.age);
    formDataToSend.append('singleImage', formData.singleImage);
    for (let i = 0; i < formData.multipleImages.length; i++) {
      formDataToSend.append('multipleImages', formData.multipleImages[i]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/forms', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>Single Image:</label>
        <input type="file" name="singleImage" onChange={handleSingleImageChange} required />
      </div>
      <div>
        <label>Multiple Images:</label>
        <input type="file" name="multipleImages" onChange={handleMultipleImagesChange} multiple required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
