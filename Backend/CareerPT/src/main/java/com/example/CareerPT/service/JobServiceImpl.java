package com.example.CareerPT.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CareerPT.repository.JobRepository;

@Service("JobService")
public class JobServiceImpl implements JobService{
	@Autowired
	JobRepository jobRepository;
}
