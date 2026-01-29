package com.example.CareerPT.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.CareerPT.entity.OTP;

@Repository
public interface OTPrepository extends JpaRepository<OTP, String>{

}
