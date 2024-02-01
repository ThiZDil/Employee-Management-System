import axios from 'axios';

const EMP_LIST_API_URL="http://localhost:8090/api/v1/employees";
const EMP_CREATE_API_URL="http://localhost:8090/api/v1/addEmployee";
const EMP_UPDATE_API_URL="http://localhost:8090/api/v1/updateEmployee";
const EMP_GET_SINGLE_API_URL="http://localhost:8090/api/v1/getEmployee"
class EmpService{
    getEmployees(){
        return axios.get(EMP_LIST_API_URL);
    } 
    createEmployee(employee){
        return axios.post(EMP_CREATE_API_URL,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMP_GET_SINGLE_API_URL+"/"+employeeId);
    }
    updateEmployee(employeeId,employee){
        return axios.put(EMP_UPDATE_API_URL+"/"+employeeId,employee);
    }



}

export default new EmpService()