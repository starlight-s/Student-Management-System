package com.app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Notice {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int noticeId;	
	
	private Date noticedate;
	private String message;
	
	@ManyToOne	
    @JoinColumn(name = "courseId")
    Course course;
	
	
	public Notice() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Notice(int noticeId, java.util.Date noticedate, String message, Course course) {
		super();
		this.noticeId = noticeId;
		this.noticedate = noticedate;
		this.message = message;
		this.course = course;
	}


	public int getNoticeId() {
		return noticeId;
	}


	public void setNoticeId(int noticeId) {
		this.noticeId = noticeId;
	}


	public Date getNoticedate() {
		return noticedate;
	}


	public void setNoticedate(Date noticedate) {
		this.noticedate = noticedate;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public Course getCourse() {
		return course;
	}


	public void setCourse(Course course) {
		this.course = course;
	}	
}
