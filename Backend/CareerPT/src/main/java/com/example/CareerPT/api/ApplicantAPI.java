package com.example.CareerPT.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CareerPT.dto.ApplicantDTO;
import com.example.CareerPT.entity.Applicant;
import com.example.CareerPT.exception.JobPortalException;
import com.example.CareerPT.service.ApplicantService;

@RestController
@CrossOrigin
@Validated
public class ApplicantAPI {

	@Autowired
	ApplicantService applicantService;
	
	@GetMapping("/getAllapplicants")
	public ResponseEntity<List<Applicant>>getAllapplicant()throws JobPortalException{
		return new ResponseEntity<>(applicantService.getAllapplicant(),HttpStatus.OK);
	}
}
