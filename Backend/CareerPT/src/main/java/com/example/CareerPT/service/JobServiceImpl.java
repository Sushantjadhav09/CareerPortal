package com.example.CareerPT.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.swing.text.Utilities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.JpaObjectRetrievalFailureException;
import org.springframework.stereotype.Service;

import com.example.CareerPT.dto.ApplicantDTO;
import com.example.CareerPT.dto.JobDTO;
import com.example.CareerPT.entity.Applicant;
import com.example.CareerPT.entity.Job;
import com.example.CareerPT.enums.ApplicationStatus;
import com.example.CareerPT.enums.JobStatus;
import com.example.CareerPT.exception.JobPortalException;
import com.example.CareerPT.repository.JobRepository;

@Service("JobService")
public class JobServiceImpl implements JobService{
	@Autowired
	JobRepository jobRepository;

	@Override
	public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {
	    // Convert DTO to Entity
	    Job job = jobDTO.toEntity();
	    job.setJobStatus(JobStatus.POSTED);
	    // Save entity
	    Job savedJob = jobRepository.save(job);

	    // Convert back to DTO for response
	    return savedJob.toDTO();
	}

	@Override
	public List<JobDTO> getALLJobs() {
		return jobRepository.findAll().stream().map((x)->x.toDTO()).toList();
	}

	@Override
	public JobDTO getJobById(Long id)throws JobPortalException {
		return jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND")).toDTO();
	}

//	@Override
//	public Job applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {
//		Job job = jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
//		List<Applicant>applicants = job.getApplicants();
//		if(applicants == null)applicants = new ArrayList<>();
//		if(applicants.stream().filter((x)->x.getApplicantId()==applicantDTO.getApplicantId())
//				.toList().size()>0)throw new JobPortalException("JOB_APPLIED_ALREADY");
//		applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
//		applicants.add(applicantDTO.toEntity());
//		job.setApplicants(applicants);
//		jobRepository.save(job);
//		return job;
//				
//	}
	
	@Override
	public Job applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {

	    Job job = jobRepository.findById(id)
	            .orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));

	    List<Applicant> applicants = job.getApplicants();
	    if (applicants == null) {
	        applicants = new ArrayList<>();
	    }

	    boolean alreadyApplied = applicants.stream()
	            .anyMatch(a -> Objects.equals(a.getApplicantId(), applicantDTO.getApplicantId()));

	    if (alreadyApplied) {
	        throw new JobPortalException("JOB_APPLIED_ALREADY");
	    }

	    Applicant applicant = applicantDTO.toEntity();
	    applicant.setApplicationStatus(ApplicationStatus.APPLIED);
	    applicant.setTimestamp(LocalDateTime.now());
	    applicant.setJob(job);
	    
	    applicants.add(applicant);
	    job.setApplicants(applicants);

	    jobRepository.save(job);
	    return job;
	}




}
