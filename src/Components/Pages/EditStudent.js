import React, { useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { store } from '../StoreComponent';

const EditStudent = () => {
    const { entries } = useContext(store);
    const navigate = useNavigate();
    const location = useLocation();
  
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');

    const index = location.state?.index;

    useEffect(() => {
        if (index !== undefined && entries[index]) {
            const { name, age, course, batch } = entries[index];
            setName(name);
            setAge(age);
            setCourse(course);
            setBatch(batch);
        }
    }, [index, entries]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (index !== undefined) {
          const updatedEntry = { name, age, course, batch };
          entries[index] = updatedEntry;
        }
        navigate('/students-data');
    };

    return (
        <div>
            <h1>Edit Student Data</h1>
            <form className='Form-Container'> <br/> <br/>
                <label>Name : <input type='text'value={name} onChange={(e) => setName(e.target.value)} /> </label>
                <label>Age : <input type='text' value={age} onChange={(e) => setAge(e.target.value)} /> </label> <br/><br/>
                <label>Course : <input type='text'  value={course} onChange={(e) => setCourse(e.target.value)} /> </label>
                <label>Batch : <input type='text' value={batch} onChange={(e) => setBatch(e.target.value)} /> </label> <br/><br/>

                <div className='Submit-Data-Buttons'>
                    <Link to='/students-data' className='link'><button>Cancel</button></Link>
                    <button onClick={handleSubmit} >Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditStudent;