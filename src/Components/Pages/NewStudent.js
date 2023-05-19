import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/newstudent.css'
import { store } from '../StoreComponent';

function NewStudent() {
    const { addEntry } = useContext(store);
    const history = useNavigate();
  
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newEntry = { name, age, course, batch };
      addEntry(newEntry);
      history('/students-data');
    };

    return (
        <div>
            <h1>Add New Student</h1>
            <form className='Form-Container'> <br/> <br/>
                <label>Name : <input type='text' placeholder= "Name" name="name" value={name} onChange={(e) => setName(e.target.value)} /> </label>
                <label>Age : <input type='text' placeholder= "Age" name="age"  value={age} onChange={(e) => setAge(e.target.value)} /> </label> <br/><br/>
                <label>Course : <input type='text' placeholder= "Course"  name="course" value={course} onChange={(e) => setCourse(e.target.value)} /> </label>
                <label>Batch :<input type='text' placeholder= "Batch"   name="batch" value={batch} onChange={(e) => setBatch(e.target.value)} /> </label> <br/><br/>

                <div className='Submit-Data-Buttons'>
                    <Link to='/students-data' className='link'><button>Cancel</button></Link>
                    <button className='Submit-Button' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewStudent;