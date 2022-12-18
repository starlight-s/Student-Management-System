package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.StudentDAO;
import com.app.DAO.StudentHelpDAO;
import com.app.model.Help;
import com.app.model.Student;


@Service
public class StudentHelpService {
	
	@Autowired
	private StudentDAO studentDAO;
	
	@Autowired
	private StudentHelpDAO studentHelpDAO;
	
	public Help saveHelp(String sub,String msg,int prn) {
		Student s = studentDAO.findByPrn(prn);
		Help help = new Help();
		help.setSub(sub);
		help.setMsg(msg);
		help.setStudent(s);
		studentHelpDAO.save(help);		
		return help;
	}	
}
