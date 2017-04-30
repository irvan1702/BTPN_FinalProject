package com.example;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {

	public List<Employee> findByLastNameContainingOrFirstNameContainingAllIgnoreCase(
			@Param("last_name") String lastName, @Param("first_name") String firstName);

	public Iterable<Employee> findByLocationCityAllIgnoreCase(@Param("location") String location);

	public Iterable<Employee> findByGenderAllIgnoreCase(@Param("gender") String gender);

	public Iterable<Employee> findByLocationCityAndGenderAllIgnoreCase(@Param("location") String location,
			@Param("gender") String gender);

}