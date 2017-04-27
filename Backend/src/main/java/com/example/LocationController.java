package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LocationController {

	@Autowired
	private LocationRepository locationRepo;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/locations/all")
	@ResponseStatus(HttpStatus.OK)
	public Iterable<Location> allLocations() {
		return locationRepo.findAll();
	}
	
	@PostMapping("/locations/add")
	@ResponseStatus(HttpStatus.OK)
	public void addLocations(Location location) {
		 this.locationRepo.save(location);
	}
}