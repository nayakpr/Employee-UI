import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployees(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployeesbyId(empId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + empId);
    }
    updateEmployees(employee, empId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + empId, employee);
    }
}

export default new EmployeeService()