package com.example;



import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;


public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {

		public List<Employee> findByLastNameContainingOrFirstNameContainingAllIgnoreCase(@Param("last_name")String lastName,@Param("first_name")String firstName);
		public Iterable<Employee> findByLocation(@Param("location") String location);
		public Iterable<Employee> findByGenderAllIgnoreCase(@Param("gender") String gender);
		public Iterable<Employee> findByLocationAndGender(@Param("location") Location location, @Param("gender") String gender);
	
}