'use client'
import React from 'react'
import Topic from './_components/Topic'
import { useState } from 'react'

function CreateNewVideo() {
    const [formData, setFormData] = useState();

    const onHandleInputChange=(fieldName, fieldValue)=>{
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    };
    console.log(formData);
  return (
    <div>
      <h1 className='text-2xl'>Create New Video</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 '>
        <div className='col-span-3 p-7 border rounded-lg mt-8'>
            <Topic onHandleInputChange={onHandleInputChange}/>
        </div>
        <div>

        </div>
       
      </div>
    </div>
  )
}

export default CreateNewVideo
