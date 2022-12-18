package com.app.controller;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.model.Notice;
import com.app.service.AdminNoticeService;


@RestController
@CrossOrigin("*")
public class AdminNoticeController {
	
	@Autowired
	private AdminNoticeService adminNoticeService;
	@PostMapping("/admin/addnotice")
	public Notice addNotice(@RequestParam("course_id") int course_id ,@RequestParam("noticedate") Date noticedate, @RequestParam ("message") String message) {
         {
            //true
             return this.adminNoticeService.addNotice(course_id,noticedate,message);
         }
	}
	
	@DeleteMapping("/admin/deletenotice/{notice_id}")
	public ResponseEntity<?> deleteNotice(@PathVariable("notice_id") int notice_id){
		
		return this.adminNoticeService.deleteNotice(notice_id);
		
	}
}
    
	
