package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LocationController {

	@Autowired
	private LocationRepository locationRepo;
	
	@GetMapping("/locations/all")
	@ResponseStatus(HttpStatus.OK)
	public Iterable<Location> allLocations() {
		return locationRepo.findAll();
	}
}