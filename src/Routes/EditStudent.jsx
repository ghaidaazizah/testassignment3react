import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams(); 
    const [student, setStudent] = useState({
        nama: '',
        nim: '',
        jurusan: ''
    });

    useEffect(() => {
        fetch(`https://api.example.com/students/${id}`)
            .then(response => response.json())
            .then(data => setStudent(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

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
            <button type="submit">Edit Student</button>
        </form>
    );
};

export default EditStudent;
