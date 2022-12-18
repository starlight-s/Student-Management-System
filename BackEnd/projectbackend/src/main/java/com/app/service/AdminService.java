package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.AdminDAO;
import com.app.model.Admin;

@Service
public class AdminService {

	
	@Autowired
	private AdminDAO adminDAO;
	
	public Admin adminLogin(String email, String password) {
			System.out.println("Email check: " +email);
			System.out.println("Pass check: "+ password );
			
			Admin s = adminDAO.findByEmailAndPassword(email.trim(), password.trim());
			if(s != null) {
				return s;
			}else {
				System.out.println("Enter valid username and password");
			}
			
			
			return null;
		}

	public Admin getAdminById(int adminId) {
		Admin b=null;
		if(adminDAO.existsById(adminId))
		{
			b=adminDAO.findById(adminId);
		}else
		{
			System.out.println("this id dosen't exists");
		}
		return b;
	}
	

}