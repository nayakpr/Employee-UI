import React, { Component } from 'react';
import EmployeeService from '../services/employeeService';

class EmployeeListComponent extends Component {
    constructor(props){
            super(props);

            this.state={
                employees:[]
            }
            this.addEmployee = this.addEmployee.bind(this);
            this.editEmployee = this.editEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        })
    }
    addEmployee(){
        this.props.history.push('/addEmployee/-1');
    }
    editEmployee(id){
        this.props.history.push(`/addEmployee/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row"> 
                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                           {
                               this.state.employees.map(
                                   emp =>
                                   <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.emailId}</td>  
                                        <td>
                                            <button onClick={() => this.editEmployee(emp.id)} className="btn btn-info">Update</button>
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
}

export default EmployeeListComponent;