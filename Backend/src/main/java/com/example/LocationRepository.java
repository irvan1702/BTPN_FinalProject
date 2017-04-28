package com.example;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface LocationRepository extends PagingAndSortingRepository<Location, Long> {
	
	public Location findByCityAllIgnoreCase(@Param("city") String city);

}
