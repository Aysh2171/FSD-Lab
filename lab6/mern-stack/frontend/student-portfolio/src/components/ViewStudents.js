import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:3000/student/view');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // DELETE
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/student/delete/${id}`);
    fetchStudents();
  };

  // UPDATE (simple prompt)
  const updateStudent = async (id) => {
    const newName = prompt("Enter new name:");

    if (newName) {
      await axios.put(`http://localhost:3000/student/update/${id}`, {
        name: newName
      });
      fetchStudents();
    }
  };

  return (
    <div>
      <h3>Students List</h3>

      {students.map(s => (
        <div key={s._id} style={{ marginBottom: "10px" }}>
          {s.name} - {s.email} - {s.course}

          <br />

          <button onClick={() => updateStudent(s._id)}>
            Update
          </button>

          <button onClick={() => deleteStudent(s._id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewStudents;