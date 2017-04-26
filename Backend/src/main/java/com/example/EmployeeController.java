package com.example;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(value="/employee")
public class EmployeeController {

	@Autowired
	private EmployeeRepository repository;
	
	@Autowired
	private ObjectMapper mapper;
	
	@PostMapping("/add")
	@ResponseBody
	public void addEmployee(@RequestBody String jsonObj)
	{
		mapper.setDateFormat(new SimpleDateFormat("yyyy/MM/dd"));
		Employee e;
		System.out.println(jsonObj);
		try {
			e = mapper.readValue(jsonObj, Employee.class);
			this.repository.save(e);
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/findByName")
	@ResponseBody
	public List<Employee> findByName(@RequestParam() String name)
	{
		return this.repository.findByLastNameContainingOrFirstNameContainingAllIgnoreCase(name, name);
	}
	
	@GetMapping("/filter")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Iterable<Employee> filterEmployee(@RequestParam() String gender, String location)
	{
		if(!gender.isEmpty()&&location.isEmpty()){
			return this.repository.findByGenderAllIgnoreCase(gender);
		}
		return this.repository.findByLocationAndGender(location, gender);

	}
	
	
	@GetMapping("/getAll")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Iterable<Employee> getAllEmployee()
	{
		Sort.Order sorting = new Sort.Order(Sort.Direction.ASC, "firstName").ignoreCase();
		return this.repository.findAll(new Sort(sorting));

	}
	
	@RequestMapping(method = {RequestMethod.PUT, RequestMethod.PATCH}, value="/{employeeId}")
	public void update(@PathVariable Integer employeeId, @RequestBody Employee emp) {
		Employee entity = this.repository.findOne(employeeId);
		if (entity == null) {
			throw new EmployeeNotFoundException();
		}
		else{
			entity = emp;
			this.repository.save(entity);
		}
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	public void deleteEmployeeById(@PathVariable Integer id) {
		this.repository.delete(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getById/{id}")
	public Employee getEmployeeById(@PathVariable Integer id) {
		return this.repository.findOne(id);
	}

}
