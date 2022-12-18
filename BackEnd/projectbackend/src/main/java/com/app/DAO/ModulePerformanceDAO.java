package com.app.DAO;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.app.model.ModulePerformance;
import com.app.model.Student;
import com.app.model.Subject;

@Repository
public interface ModulePerformanceDAO extends JpaRepository<ModulePerformance,Integer> {
	List<ModulePerformance> findBySubject(Subject sub);
	List<ModulePerformance> findByStudent(Student stud);
	ModulePerformance findByPmId(int pm_id);

}
