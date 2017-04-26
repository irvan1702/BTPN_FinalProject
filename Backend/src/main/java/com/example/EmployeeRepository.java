package com.example;



import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;


public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Integer> {

		public List<Employee> findByLastNameContainingOrFirstNameContainingAllIgnoreCase(@Param("last_name")String lastName,@Param("first_name")String firstName);
	
}