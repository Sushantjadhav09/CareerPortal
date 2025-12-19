//package com.example.CareerPT.entity;
//
//import java.time.LocalDateTime;
//
//import com.example.CareerPT.enums.ApplicationStatus;
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "applicants")
//public class ApplicantEntity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long applicantId;
//
//    private LocalDateTime timestamp;
//
//    @Enumerated(EnumType.STRING)
//    private ApplicationStatus applicationStatus;
//
//    @JsonIgnore
//    @ManyToOne
//    @JoinColumn(name = "job_id")
//    private Job job;
//
//
//    public ApplicantEntity() {}
//
//	public ApplicantEntity(Long applicantId, LocalDateTime timestamp, ApplicationStatus applicationStatus, Job job) {
//		super();
//		this.applicantId = applicantId;
//		this.timestamp = timestamp;
//		this.applicationStatus = applicationStatus;
//		this.job = job;
//	}
//
//	public Long getApplicantId() {
//		return applicantId;
//	}
//
//	public void setApplicantId(Long applicantId) {
//		this.applicantId = applicantId;
//	}
//
//	public LocalDateTime getTimestamp() {
//		return timestamp;
//	}
//
//	public void setTimestamp(LocalDateTime timestamp) {
//		this.timestamp = timestamp;
//	}
//
//	public ApplicationStatus getApplicationStatus() {
//		return applicationStatus;
//	}
//
//	public void setApplicationStatus(ApplicationStatus applicationStatus) {
//		this.applicationStatus = applicationStatus;
//	}
//
//	public Job getJob() {
//		return job;
//	}
//
//	public void setJob(Job job) {
//		this.job = job;
//	}
//    
//    
//}
