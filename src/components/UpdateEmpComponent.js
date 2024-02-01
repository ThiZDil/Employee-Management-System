
import React, { useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmpService from '../services/EmpService';


function UpdateEmployee(){
    const [employee, setEmployee] = useState({id:null,fname: '', lname: '', emailId: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    const changeFNameHandler = (event) => setEmployee({...employee, fname: event.target.value});
    const changeLNameHandler = (event) => setEmployee({...employee, lname: event.target.value});
    const changeEmailIdHandler = (event) => setEmployee({...employee, emailId: event.target.value});
    

    const updateEmployee =  (e) => {
        e.preventDefault();
        EmpService.updateEmployee(employee.id,employee).then(response=>{
            navigate('/employees')
        }).catch(error=>{
            console.error('Something went wrong!', error);
        });
    }

    useEffect(() => {
        if (id) {
            EmpService.getEmployeeById(id)
                .then(response => {
                    setEmployee(response.data);
                })
                .catch(error => {
                    console.error('Something went wrong!', error);
                });
        }
    }, [id]); 

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: '10px' }}>
                        <h3 className='text-center'>Update Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name: </label>
                                    <input placeholder='First Name' name='fName' className='form-control' value={employee.fname} onChange={changeFNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name: </label>
                                    <input placeholder='Last Name' name='lName' className='form-control' value={employee.lname} onChange={changeLNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Email Id: </label>
                                    <input placeholder='Email Id' name='emailId' className='form-control' value={employee.emailId} onChange={changeEmailIdHandler} />
                                </div>
                                <button className='btn btn-success' onClick={updateEmployee}> Update </button>
                                <button className='btn btn-danger' onClick={() => navigate('/employees')}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployee;

