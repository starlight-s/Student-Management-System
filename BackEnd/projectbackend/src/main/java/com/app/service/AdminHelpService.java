package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.StudentHelpDAO;
import com.app.model.Help;

@Service
public class AdminHelpService {
	@Autowired
	private StudentHelpDAO studentHelpDAO;

	public List<Help> showHelp() {
	        return this.studentHelpDAO.findAll();
	    }
}
