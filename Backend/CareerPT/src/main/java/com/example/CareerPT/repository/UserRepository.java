package com.example.CareerPT.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CareerPT.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	public Optional<User> findByEmail(String email);
}
