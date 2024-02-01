package com.example.CRUD.emp.controller;

import com.example.CRUD.emp.model.Employee;
import com.example.CRUD.emp.repository.EmployeeRepository;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/addEmployee")
    public Employee createEmployees(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public void deleteEmployee(@PathVariable long id){
        employeeRepository.deleteById(id);
    }

    @PutMapping("/updateEmployee/{id}")
    public Employee updateEmployee(@PathVariable long id, @RequestBody Employee employee){
        Employee employee1 = employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found for this id : " + id));
        employee1.setFName(employee.getFName());
        employee1.setLName(employee.getLName());
        employee1.setEmailId(employee.getEmailId());
        Employee updatedEmployee = employeeRepository.save(employee1);
        return ResponseEntity.ok(updatedEmployee).getBody();
    }
    
    @GetMapping("/getEmployee/{id}")
    public  Employee getEmployeeById(@PathVariable Long id){
        return employeeRepository.getEmployeeById(id);
    }
}
