package com.example.CareerPT.dto;

import java.time.LocalDateTime;
import java.util.Base64;

import com.example.CareerPT.entity.Applicant;
import com.example.CareerPT.entity.Job;
import com.example.CareerPT.enums.ApplicationStatus;
import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApplicantDTO {

    private Long applicantId;
    private String name;
    private String email;
    private Long phone;
    private String website;
    private String resume;
    private String coverLetter;
    private LocalDateTime timestamp;
    private ApplicationStatus applicationStatus;
    private Job job;

    
    public ApplicantDTO() {};

   public ApplicantDTO(Long applicantId, String name, String email, Long phone, String website, String resume,
			String coverLetter, LocalDateTime timestamp, ApplicationStatus applicationStatus,Job job) {
		super();
		this.applicantId = applicantId;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.website = website;
		this.resume = resume;
		this.coverLetter = coverLetter;
		this.timestamp = timestamp;
		this.applicationStatus = applicationStatus;
		this.job = job;
	}


public Long getApplicantId() {
		return applicantId;
	}


	public void setApplicantId(Long applicantId) {
		this.applicantId = applicantId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Long getPhone() {
		return phone;
	}


	public void setPhone(Long phone) {
		this.phone = phone;
	}


	public String getWebsite() {
		return website;
	}


	public void setWebsite(String website) {
		this.website = website;
	}


	public String getResume() {
		return resume;
	}


	public void setResume(String resume) {
		this.resume = resume;
	}


	public String getCoverLetter() {
		return coverLetter;
	}


	public void setCoverLetter(String coverLetter) {
		this.coverLetter = coverLetter;
	}


	public LocalDateTime getTimestamp() {
		return timestamp;
	}


	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}


	public ApplicationStatus getApplicationStatus() {
		return applicationStatus;
	}


	public void setApplicationStatus(ApplicationStatus applicationStatus) {
		this.applicationStatus = applicationStatus;
	}
	
	public Job getJob() {
		return job;
	}



	public void setJob(Job job ) {
		this.job = job;
	}


public Applicant toEntity() {
	return new Applicant(this.applicantId,this.name,this.email,this.phone,this.website
    		,this.resume!=null?Base64.getDecoder().decode(this.resume):null,this.coverLetter,
    				this.timestamp,this.applicationStatus,this.job);
   }
    
}
