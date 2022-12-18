package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DAO.NoticeDAO;
import com.app.model.Notice;

@Service
public class StudentNoticeService {
	
	@Autowired
	private NoticeDAO noticeDAO;
		public List<Notice> getNoticedata() {
		// TODO Auto-generated method stub
		return this.noticeDAO.findAll();
	}
}
