package com.example.CareerPT.JWT;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.CareerPT.dto.UserDTO;
import com.example.CareerPT.entity.User;
import com.example.CareerPT.exception.JobPortalException;
import com.example.CareerPT.repository.UserRepository;
import com.example.CareerPT.service.UserService;


@Service
public class MyUserDetailService implements UserDetailsService {
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private UserRepository userRepository;

//	@Override
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//		try {
//			UserDTO dto = userService.getUserByEmail(email);
//			return new CustomUserDetails(dto.getId(),email,dto.getPassword(),
//					dto.getAccountType(),new ArrayList<>());
//		} catch (JobPortalException e) {
//			e.printStackTrace();
//		}
//		return null;
//	}
	@Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword()) // ✅ MUST NOT BE NULL
                .authorities("ROLE_" + user.getAccountType().name())
                .build();
    }

}
