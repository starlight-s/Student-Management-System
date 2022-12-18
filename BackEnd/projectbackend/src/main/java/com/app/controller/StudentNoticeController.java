package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Notice;
import com.app.service.StudentNoticeService;

@RestController
@CrossOrigin("*")
public class StudentNoticeController {
	@Autowired
	private StudentNoticeService studentNoticeService;
	
	@GetMapping("/student/notice")
	public List<Notice> getAllNotice(){
		return this.studentNoticeService.getNoticedata();
	}
	
	
}
