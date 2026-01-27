package com.example.CareerPT.entity;

import java.time.LocalDateTime;
import java.util.Base64;

import com.example.CareerPT.dto.ApplicantDTO;
import com.example.CareerPT.enums.ApplicationStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Applicant {
	

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantId;
    private String name;
    private String email;
    private Long phone;
    private String website;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] resume;
    private String coverLetter;
    private LocalDateTime timestamp;
    @Enumerated(EnumType.STRING)   // 🔥 THIS MUST EXIST
    @Column(name = "application_status", nullable = false)
    private ApplicationStatus applicationStatus;
    @ManyToOne
    @JoinColumn(name = "job_id") // FK column in applicants table
    @JsonIgnore // prevents infinite recursion in JSON
    private Job job;
   

    
    public Applicant() {};

   public Applicant(Long applicantId, String name, String email, Long phone, String website, byte[] resume,
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



	public byte[] getResume() {
		return resume;
	}



	public void setResume(byte[] resume) {
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




public ApplicantDTO toDTO() {
	    return new ApplicantDTO(this.applicantId,this.name,this.email,this.phone,this.website
	    		,this.resume!=null?Base64.getEncoder().encodeToString(this.resume):null,this.coverLetter,this.timestamp,this.applicationStatus,this.job);
   }
    
}
