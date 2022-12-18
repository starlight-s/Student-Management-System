package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admintable")
public class Admin {
	@Id
	int admin_id;
	@Column(nullable = false)
	String email;
	@Column(nullable = false)
	String password;
	@Column(nullable = false)
	String Name;
	@Column(nullable = false)
	String Designation;
	@Column(nullable = false)
	int PhoneNo;
	
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		this.Name = name;
	}
	public String getDesignation() {
		return Designation;
	}
	public void setDesignation(String designation) {
		this.Designation = designation;
	}
	public int getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(int phoneno) {
		this.PhoneNo = phoneno;
	}
	
	
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public String getEmail() {
		return email;
	}
	public Admin(int admin_id, String email, String password, String name, String designation, int phoneno) {
		super();
		this.admin_id = admin_id;
		this.email = email;
		this.password = password;
		this.Name = name;
		this.Designation = designation;
		this.PhoneNo = phoneno;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Admin [admin_id=" + admin_id + ", email=" + email + ", password=" + password + ", name=" + Name
				+ ", designation=" + Designation + ", phoneno=" + PhoneNo + "]";
	}
	
	
	
	
}