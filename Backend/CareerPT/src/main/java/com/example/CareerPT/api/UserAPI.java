package com.example.CareerPT.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CareerPT.dto.LoginDTO;
import com.example.CareerPT.dto.UserDTO;
import com.example.CareerPT.entity.User;
import com.example.CareerPT.exception.JobPortalException;
import com.example.CareerPT.service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/users")
public class UserAPI {

	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserDTO>registerUser(@RequestBody @Valid UserDTO userDTO) throws JobPortalException{
		userDTO = userService.registerUser(userDTO);
		return new ResponseEntity<>(userDTO,HttpStatus.CREATED);
	}
	
	@GetMapping("/getAllusers")
	public ResponseEntity <List<User>>getAllusers(){
		return ResponseEntity.ok(userService.getAllusers());
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserDTO>loginUser(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException{
		return new ResponseEntity<>(userService.loginUser(loginDTO),HttpStatus.OK);
	}
}

