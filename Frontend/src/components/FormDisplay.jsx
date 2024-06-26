import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormDisplay = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/forms//getform');
      setForms(response.data);
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  };

  return (
    <div>

<div className='p-20'>
        <div className="">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface">
                  <thead className="border-b border-neutral-200 font-medium ">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">Name</th>
                      <th scope="col" className="px-6 py-4">Age</th>
                      <th scope="col" className="px-6 py-4">Image</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      forms.map((user, index)=>{
                        return(                        
                            <tr className="border-b border-neutral-200" key={user._id}>
                              <th className="px-6 py-4">{index + 1}</th>
                              <td className="px-6 py-4 font-medium">{user.name}</td>
                              <td className="px-6 py-4 font-medium">{user.age}</td>
                              <td className="px-6 py-4">
                                <img src={`http://localhost:5000/${user.singleImage}`} className='w-20 h-16' alt="" />
                              </td>
                              <td className="px-6 py-4">
                                <a href=''  className="bg-blue-500 hover:bg-blue-600 mx-auto text-white font-bold py-2 px-6 rounded inline-flex items-center">View</a>
                              </td>
                              <td className="px-6 py-4">
                                <a href='' className="bg-blue-500 hover:bg-blue-600 mx-auto text-white font-bold py-2 px-6 rounded inline-flex items-center">Edit</a>
                              </td>
                              <td className="px-6 py-4">
                                <button className="bg-red-500 hover:bg-red-600 mx-auto text-white font-bold py-2 px-6 rounded inline-flex items-center">Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FormDisplay;
