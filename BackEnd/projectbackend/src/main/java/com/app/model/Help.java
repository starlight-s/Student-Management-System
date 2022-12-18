package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Help {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int helpId;
	private String sub;
	private String msg;
	
	@ManyToOne	
    @JoinColumn(name = "prn")
    Student student;

	public Help() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Help(int helpId, String sub, String msg, Student student) {
		super();
		this.helpId = helpId;
		this.sub = sub;
		this.msg = msg;
		this.student = student;
	}

	public int getHelpId() {
		return helpId;
	}

	public void setHelpId(int helpId) {
		this.helpId = helpId;
	}

	public String getSub() {
		return sub;
	}

	public void setSub(String sub) {
		this.sub = sub;
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
