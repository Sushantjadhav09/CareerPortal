package com.example.CareerPT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CareerPT.dto.ApplicantDTO;
import com.example.CareerPT.entity.Applicant;
import com.example.CareerPT.repository.ApplicantRepository;

@Service
public class ApplicantService {
	
	@Autowired
	ApplicantRepository applicantRepository;

	public List<Applicant> getAllapplicant() {
		return applicantRepository.findAll();
	}
	public List<ApplicantDTO> getApplicantsForCompany(String company) {
	    return applicantRepository
	            .findApplicantsByCompany(company)
	            .stream()
	            .map(Applicant::toDTO)
	            .toList();
	}


}
