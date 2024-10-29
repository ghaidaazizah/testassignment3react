import React, { useState } from 'react';

const AddStudent = () => {
    const [student, setStudent] = useState({
        nama: '',
        nim: '',
        jurusan: ''
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nama" value={student.nama} onChange={handleChange} placeholder="Nama" />
            <input name="nim" value={student.nim} onChange={handleChange} placeholder="NIM" />
            <input name="jurusan" value={student.jurusan} onChange={handleChange} placeholder="Jurusan" />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudent;
