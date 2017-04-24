package com.example;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Location")
public class Location {

	@Id
	@GeneratedValue(
		strategy = GenerationType.SEQUENCE,
		generator = "location_seq"
	)
	@SequenceGenerator(
		name = "location_seq",
		sequenceName = "location_seq"
	)
	@Column(
			name = "id",
			nullable = false
		)
	private Integer id;
	
	@NotNull
	@Column(nullable = false)
	private String city;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
}
