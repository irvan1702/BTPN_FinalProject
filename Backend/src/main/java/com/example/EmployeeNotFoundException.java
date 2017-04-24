package com.example;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
	value = HttpStatus.NOT_FOUND,
	reason = "No such Employment"
)
public class EmployeeNotFoundException
	extends RuntimeException
{
	// TODO detail implementation
}