package com.example.CareerPT.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "otp")
@Entity
public class OTP {
	
	@Id
	private String email;
	private String otpcode;
	private LocalDateTime CreationTime;

}
