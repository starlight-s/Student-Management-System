package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Help;
import com.app.service.StudentHelpService;


@RestController
@CrossOrigin("*")
public class StudentHelpController {
	@Autowired
    private StudentHelpService studentHelpService;
	
	@PostMapping("/student/savehelp")
	public ResponseEntity<?> saveHelpData(@RequestParam("sub") String sub,@RequestParam("msg") String msg,@RequestParam("prn") int prn)
	{
		Help h = this.studentHelpService.saveHelp(sub,msg,prn);
		if(h!=null)
		{
			return ResponseEntity.status(HttpStatus.OK).body("Inserted successfully");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unable To Insert");
	}
}
