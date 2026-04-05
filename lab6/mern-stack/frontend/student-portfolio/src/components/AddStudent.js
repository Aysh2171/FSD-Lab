import { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const addStudent = async () => {
    await axios.post('http://localhost:3000/student/add', {
      name,
      email,
      course
    });
    alert('Student Added');
  };

  return (
    <div>
      <h3>Add Student</h3>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input placeholder="Course" onChange={e => setCourse(e.target.value)} />
      <br />
      <button onClick={addStudent}>Add</button>
    </div>
  );
}

export default AddStudent;