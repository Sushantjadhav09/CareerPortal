package com.example.CareerPT.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.CareerPT.dto.LoginDTO;
import com.example.CareerPT.dto.UserDTO;
import com.example.CareerPT.entity.OTP;
import com.example.CareerPT.entity.User;
import com.example.CareerPT.exception.JobPortalException;
import com.example.CareerPT.repository.OTPrepository;
import com.example.CareerPT.repository.UserRepository;
import com.example.CareerPT.utility.Data;
import com.example.CareerPT.utility.Utilities;

import jakarta.mail.internet.MimeMessage;

@Service(value="userService")
public class UserServiceImpl implements UserService{
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private  JavaMailSender mailSender;
	
	@Autowired
	private OTPrepository otprepository;

	@Override
	public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {

	    Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
	    if (optional.isPresent())
	        throw new JobPortalException("USER_FOUND");

	    User user = userDTO.toEntity();

	    // ENCODE HERE → correct
	    if (userDTO.getPassword() != null && !userDTO.getPassword().isBlank()) {
	        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
	    }

	    user = userRepository.save(user);

	    // do NOT send password back
	    UserDTO response = user.toDTO();
	    response.setPassword(null);

	    return response;
	}


	@Override
	public List<User> getAllusers() {
		return userRepository.findAll() ;
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException{
	
		User user= userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()-> new JobPortalException("USER_NOT_FOUND"));
		System.out.println("user data"+user);
		if(!passwordEncoder.matches(loginDTO.getPassword(),user.getPassword()))throw new JobPortalException("INVALID_CREDENTIALS");
		return user.toDTO();
	}


	@Override
	public UserDTO getUserByEmail(String email) throws JobPortalException {
		return userRepository.findByEmail(email).orElseThrow(()-> new JobPortalException("USER_NOT FOUND")).toDTO();
	}


//	@Override
//	public Boolean sendOtp(String email) throws Exception {
//		     userRepository.findByEmail(email).orElseThrow(()-> new 
//				JobPortalException("USER_NOT_FOUND"));
//			MimeMessage mm = mailSender.createMimeMessage();
//			MimeMessageHelper message = new MimeMessageHelper(mm,true);
//			message.setTo(email);
//			message.setSubject("Your OTP Code");
//			String genOTP = Utilities.generateOTP();
//			OTP otp = new OTP(email,genOTP,LocalDateTime.now());
//			otprepository.save(otp);
//			message.setText("Your Code is : "+genOTP,false);
//			mailSender.send(mm);
//			
//			return true;
//	}
	
	@Override
	public Boolean sendOtp(String email) {

	    try {
	        MimeMessage mm = mailSender.createMimeMessage();
	        MimeMessageHelper message = new MimeMessageHelper(mm, true);

	        // Sender (masked with display name)
	        message.setFrom("Career Po Security <your_email@gmail.com>");

	        message.setTo(email);
	        message.setSubject("Your OTP Code");

	        String genOTP = Utilities.generateOTP();

	        // OPTIONAL: delete old OTP for same email
	        OTP otp = new OTP(
	                email,
	                genOTP,
	                LocalDateTime.now().plusMinutes(5) // ⏱ expiry
	        );
	        otprepository.save(otp);

	        message.setText(Data.buildOtpEmailTemplate(genOTP), true);

	        mailSender.send(mm);
	        return true;

	    } catch (Exception e) {
	        e.printStackTrace();
	        return false;
	    }
	}

}
