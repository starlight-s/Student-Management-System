package com.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Notice;
@Repository
public interface NoticeDAO extends JpaRepository<Notice,Integer>{

	
}
