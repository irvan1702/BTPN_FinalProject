package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {

	@Autowired
	private EmployeeRepository repository;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add")
	@ResponseBody
	public Employee saveEmployee(@RequestBody Employee emp) {
		return this.repository.save(emp);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/update/{id}")
	@ResponseBody
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
		emp.setEmpId(id);
		return this.repository.save(emp);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/findByName")
	@ResponseBody
	public List<Employee> findByName(@RequestParam() String name) {
		return this.repository.findByLastNameContainingOrFirstNameContainingAllIgnoreCase(name, name);
	}

	@GetMapping("/filterGender")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Iterable<Employee> filterEmployeeByGender(@RequestParam() String gender) {
		return this.repository.findByGenderAllIgnoreCase(gender);
	}

	@GetMapping("/filterLocation")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Iterable<Employee> filterEmployeeByLocation(@RequestParam() String location) {
		return this.repository.findByLocationCityAllIgnoreCase(location);
	}

	@GetMapping("/filterLocationAndGender")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Iterable<Employee> filterEmployeeByLocationAndGender(@RequestParam() String location,
			@RequestParam() String gender) {
		System.out.println(location);
		System.out.println(gender);
		return this.repository.findByLocationCityAndGenderAllIgnoreCase(location, gender);
	}

	@GetMapping("/getAll")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Iterable<Employee> getAllEmployee() {
		Sort.Order sorting = new Sort.Order(Sort.Direction.ASC, "lastName").ignoreCase();
		return this.repository.findAll(new Sort(sorting));

	}

	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	public Long deleteEmployeeById(@PathVariable Long id) {
		this.repository.delete(id);
		return id;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getById/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return this.repository.findOne(id);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/sortBy/{sort}")
	public Iterable<Employee> sortingEmployee(@PathVariable String sort) {
		if (sort.equalsIgnoreCase("asc")) {
			Sort.Order sorting = new Sort.Order(Sort.Direction.ASC, "lastName").ignoreCase();
			return this.repository.findAll(new Sort(sorting));
		} else if (sort.equalsIgnoreCase("desc")) {
			Sort.Order sorting = new Sort.Order(Sort.Direction.DESC, "lastName").ignoreCase();
			return this.repository.findAll(new Sort(sorting));
		}

		return this.repository.findAll();

	}

}
