package com.example;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Employee")
public class Employee {
	@Id
	@Column(name="emp_id")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long empId;
	@Column(name = "first_name", nullable = false)
	private String firstName;
	@Column(name = "last_name", nullable = false)
	private String lastName;
	@Column(name = "gender", nullable = false)
	private String gender;
	@Column(name = "date_of_birth", nullable=false)
	private Date dateOfBirth;
	@Column(name = "nationality", nullable = false)
	private String nationality;
	@Column(name = "marital_status", nullable = false)
	private String maritalStatus;
	@Column(name = "phone", nullable = false)
	private String phone;
	@Column(name = "sub_division", nullable = false)
	private String subDivision;
	@Column(name = "status", nullable = false)
	private String status;
	@Column(name = "suspend_date")
	private Date suspendDate;
	@Column(name = "hired_date", nullable = false)
	private Date hiredDate;
	@Column(name = "grade", nullable = false)
	private String grade;
	@Column(name = "division", nullable = false)
	private String division;
	@Column(name = "email", nullable = false)
	private String email;
	@Column(nullable = true)
	private String photo;

	@ManyToOne
	@JoinColumn(name = "loc_id", nullable = true)
	private Location location;
	
	
	public Employee() {
		
	}

	public Employee(Long empId, String firstName, String lastName, String gender, Date dateOfBirth,
			String nationality, String maritalStatus, String phone, String subDivision, String status, Date suspendDate,
			Date hiredDate, String grade, String division, String email, String photo, Location location) {
		super();
		this.empId = empId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.nationality = nationality;
		this.maritalStatus = maritalStatus;
		this.phone = phone;
		this.subDivision = subDivision;
		this.status = status;
		this.suspendDate = suspendDate;
		this.hiredDate = hiredDate;
		this.grade = grade;
		this.division = division;
		this.email = email;
		this.photo = photo;
		this.location = location;
	}

	public Long getEmpId() {
		return empId;
	}

	public void setEmpId(Long empId) {
		this.empId = empId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSubDivision() {
		return subDivision;
	}

	public void setSubDivision(String subDivision) {
		this.subDivision = subDivision;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getSuspendDate() {
		return suspendDate;
	}

	public void setSuspendDate(Date suspendDate) {
		this.suspendDate = suspendDate;
	}

	public Date getHiredDate() {
		return hiredDate;
	}

	public void setHiredDate(Date hiredDate) {
		this.hiredDate = hiredDate;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	
	
}
