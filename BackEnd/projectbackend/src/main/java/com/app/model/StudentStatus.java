package com.app.model;

public class StudentStatus {
	int statuscode;
	String msg;
	Student student;
	
	public StudentStatus(int statuscode, String msg, Student student) {
		super();
		this.statuscode = statuscode;
		this.msg = msg;
		this.student = student;
	}
	public StudentStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "StudentStatus [statuscode=" + statuscode + ", msg=" + msg + ", student=" + student + "]";
	}
	public int getStatuscode() {
		return statuscode;
	}
	public void setStatuscode(int statuscode) {
		this.statuscode = statuscode;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
}
