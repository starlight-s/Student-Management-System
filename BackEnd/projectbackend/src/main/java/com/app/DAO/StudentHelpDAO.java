package com.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Help;

@Repository
public interface StudentHelpDAO extends JpaRepository<Help,Integer>{

}
