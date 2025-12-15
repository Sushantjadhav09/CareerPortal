package com.example.CareerPT.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.swing.text.Utilities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.JpaObjectRetrievalFailureException;
import org.springframework.stereotype.Service;

import com.example.CareerPT.dto.JobDTO;
import com.example.CareerPT.entity.Job;
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

}
