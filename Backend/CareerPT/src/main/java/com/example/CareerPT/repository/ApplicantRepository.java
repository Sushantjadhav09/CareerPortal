package com.example.CareerPT.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.CareerPT.entity.Applicant;

public interface ApplicantRepository extends JpaRepository<Applicant, Long>{
	@Query("""
			SELECT a FROM Applicant a
			JOIN a.job j
			WHERE j.company = :company
			""")
			List<Applicant> findApplicantsByCompany(String company);

}
