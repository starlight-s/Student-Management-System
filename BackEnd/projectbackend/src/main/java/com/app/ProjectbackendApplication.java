package com.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectbackendApplication implements CommandLineRunner  {

	public static void main(String[] args) {
		SpringApplication.run(ProjectbackendApplication.class, args);
	}
	
	@Override
    public void run(String... args) throws Exception {
        System.out.println("this is testing");
    }
}
