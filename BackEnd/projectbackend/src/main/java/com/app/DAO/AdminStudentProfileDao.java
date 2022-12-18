package com.app.DAO;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Student;


@Repository
public interface AdminStudentProfileDao extends JpaRepository<Student, Long> {
}
