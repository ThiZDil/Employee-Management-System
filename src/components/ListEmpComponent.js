import React, { useState, useEffect } from 'react';
import EmpService from '../services/EmpService';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ListEmpComponent() {
    const [employees, setEmployees] = useState([]);
    const {id}=useParams();
    const navigate = useNavigate();
    useEffect(() => {
        EmpService.getEmployees().then(res => {
            setEmployees(res.data);
        });
    }, [id]);

    const editEmp = (id) => {
        navigate(`/updateEmployee/${id}`);
    }
    
    return (
        <div>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <Link to='/addEmployee' className='btn btn-primary'>Add Employee</Link>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => 
                                <tr key={employee.id}>
                                    <td>{employee.fname}</td>
                                    <td>{employee.lname}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={()=>editEmp(employee.id)}>Edit</button>
                                        <button className='btn btn-danger' >Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmpComponent;
