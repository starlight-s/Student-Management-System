package com.app.DAO;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Student;

@Repository
public interface StudentDAO extends JpaRepository<Student,Long>{
	Student findByPrn(long prn);
	Student findByEmailAndPassword(String email, String password);
}
