package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Help;
import com.app.service.AdminHelpService;

@RestController
@CrossOrigin("*")
public class AdminHelpController {
	@Autowired
    private AdminHelpService adminHelpService;
	
	@GetMapping("/admin/help")
    public List<Help> getAllHelp() {
        return this.adminHelpService.showHelp();
    }
}
