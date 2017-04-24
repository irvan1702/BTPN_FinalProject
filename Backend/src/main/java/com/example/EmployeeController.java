package com.example;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
	
	@PostMapping(value="/add")
	@ResponseBody
	public void addEmployee(@RequestBody String jsonObj)
	{
		mapper.setDateFormat(new SimpleDateFormat("yyyy/MM/dd"));
		Employee e;
		try {
			e = mapper.readValue(jsonObj, Employee.class);
			this.repository.save(e);
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}
	
	@GetMapping(value="/findByName")
	@ResponseBody
	public List<Employee> findByName(@RequestParam() String name)
	{
		return this.repository.findByLastNameOrFirstName(name, name);
	}
	
	@GetMapping(value="/delete/{id}")
	public void delete(@PathVariable Integer id){
		this.repository.delete(id);
	}
	
	@GetMapping(value = "/getAll")
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

}
