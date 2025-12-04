//package com.example.CareerPT.dto;
//
//import java.time.LocalDateTime;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.Table;
//import lombok.Data;
//
//@Data
//@Entity
//@Table(name="Certifications")
//public class Certification {
//	
//	private String title;
//	private String issuer;
//	private LocalDateTime issueDate;
//	private String CertificateID;
//	
//	public Certification() {}
//
//	public Certification(String title, String issuer, LocalDateTime issueDate, String certificateID) {
//		super();
//		this.title = title;
//		this.issuer = issuer;
//		this.issueDate = issueDate;
//		CertificateID = certificateID;
//	}
//	
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public String getIssuer() {
//		return issuer;
//	}
//
//	public void setIssuer(String issuer) {
//		this.issuer = issuer;
//	}
//
//	public LocalDateTime getIssueDate() {
//		return issueDate;
//	}
//
//	public void setIssueDate(LocalDateTime issueDate) {
//		this.issueDate = issueDate;
//	}
//
//	public String getCertificateID() {
//		return CertificateID;
//	}
//
//	public void setCertificateID(String certificateID) {
//		CertificateID = certificateID;
//	}
//
//	@Override
//	public String toString() {
//		return "Certification [title=" + title + ", issuer=" + issuer + ", issueDate=" + issueDate + ", CertificateID="
//				+ CertificateID + "]";
//	};
//	
//	
//
//}
