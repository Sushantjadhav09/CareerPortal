//package com.example.CareerPT.dto;
//
//import java.util.List;
//
//import com.example.CareerPT.entity.Profile;
//
//import lombok.Data;
//
//@Data
//public class ProfileDTO {
//	
//	private Long id;
//	private String email;
//	private String jobTitle;
//	private String company;
//	private String location;
//	private String about;
//	private List<String>skills;
//	private List<Experience>Experiences;
//	private List<Certification>Certifications;
//	
//	public ProfileDTO() {}
//
//	public ProfileDTO(Long id, String email, String jobTitle, String company, String location, String about,
//			List<String> skills, List<Experience> experiences, List<Certification> certifications) {
//		super();
//		this.id = id;
//		this.email = email;
//		this.jobTitle = jobTitle;
//		this.company = company;
//		this.location = location;
//		this.about = about;
//		this.skills = skills;
//		Experiences = experiences;
//		Certifications = certifications;
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getemail() {
//		return email;
//	}
//
//	public void setemail(String email) {
//		this.email = email;
//	}
//
//	public String getJobTitle() {
//		return jobTitle;
//	}
//
//	public void setJobTitle(String jobTitle) {
//		this.jobTitle = jobTitle;
//	}
//
//	public String getCompany() {
//		return company;
//	}
//
//	public void setCompany(String company) {
//		this.company = company;
//	}
//
//	public String getLocation() {
//		return location;
//	}
//
//	public void setLocation(String location) {
//		this.location = location;
//	}
//
//	public String getAbout() {
//		return about;
//	}
//
//	public void setAbout(String about) {
//		this.about = about;
//	}
//
//	public List<String> getSkills() {
//		return skills;
//	}
//
//	public void setSkills(List<String> skills) {
//		this.skills = skills;
//	}
//
//	public List<Experience> getExperiences() {
//		return Experiences;
//	}
//
//	public void setExperiences(List<Experience> experiences) {
//		Experiences = experiences;
//	}
//
//	public List<Certification> getCertifications() {
//		return Certifications;
//	}
//
//	public void setCertifications(List<Certification> certifications) {
//		Certifications = certifications;
//	}
//
//	@Override
//	public String toString() {
//		return "ProfileDTO [id=" + id + ", email=" + email + ", jobTitle=" + jobTitle + ", company=" + company
//				+ ", location=" + location + ", about=" + about + ", skills=" + skills + ", Experiences=" + Experiences
//				+ ", Certifications=" + Certifications + "]";
//	};
//	
//	public Profile toEntity() {
//		return new Profile(id,email,jobTitle,company,location,about,skills,Experiences,Certifications);
//	}
//
//}
