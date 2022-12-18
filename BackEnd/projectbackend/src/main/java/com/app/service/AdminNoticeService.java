package com.app.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.DAO.CourseDAO;
import com.app.DAO.NoticeDAO;
import com.app.model.Course;
import com.app.model.Notice;

@Service
public class AdminNoticeService {

	@Autowired
	private NoticeDAO noticeDAO;
	
	@Autowired
	private CourseDAO courseDAO;
	
	public Notice addNotice(int course_id, Date noticedate, String message) {
		// TODO Auto-generated method stub
		Notice notice = new Notice();
		Course c = courseDAO.findByCourseId(course_id);
		notice.setCourse(c);
		notice.setNoticedate(noticedate);
		notice.setMessage(message);
		
		return noticeDAO.save(notice);
	}
	public ResponseEntity<?> deleteNotice(int notice_id) {
		// TODO Auto-generated method stub
		if(noticeDAO.existsById(notice_id)) {
			noticeDAO.deleteById(notice_id);
			return ResponseEntity.status(HttpStatus.OK).body("Notice deleted succesfully");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Notice deleted failed");
	}
	
	
}
