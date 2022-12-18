package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ModulePerformance {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int pmId;
	 	
	 	@ManyToOne	
	    @JoinColumn(name = "prn")
	 	Student student;
	 	
	 	//fk
//	 	private long prn;
	 	
	 	private int labExam;
	 	private int internal;
	 	private int ccee;
	 	
	 	@ManyToOne	
	    @JoinColumn(name = "subjectId")
	 	Subject subject;
	 	
	 	//fk
//	 	private int subjectId;

		public ModulePerformance() {
			super();
			// TODO Auto-generated constructor stub
		}

		public ModulePerformance(int pmId, Student student, int labExam, int internal, int ccee, Subject subject) {
			super();
			this.pmId = pmId;
			this.student = student;
			this.labExam = labExam;
			this.internal = internal;
			this.ccee = ccee;
			this.subject = subject;
		}

		public int getPmId() {
			return pmId;
		}

		public void setPmId(int pmId) {
			this.pmId = pmId;
		}

		public Student getStudent() {
			return student;
		}

		public void setStudent(Student student) {
			this.student = student;
		}

		public int getLabExam() {
			return labExam;
		}

		public void setLabExam(int labExam) {
			this.labExam = labExam;
		}

		public int getInternal() {
			return internal;
		}

		public void setInternal(int internal) {
			this.internal = internal;
		}

		public int getCcee() {
			return ccee;
		}

		public void setCcee(int ccee) {
			this.ccee = ccee;
		}

		public Subject getSubject() {
			return subject;
		}

		public void setSubject(Subject subject) {
			this.subject = subject;
		}					
}
