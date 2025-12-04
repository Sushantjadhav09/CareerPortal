//package com.example.CareerPT.service;
//
//import java.util.ArrayList;
//
//import javax.swing.text.Utilities;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.CareerPT.entity.Profile;
//import com.example.CareerPT.repository.ProfileRepository;
//
//@Service(value="ProfileService")
//public class ProfileServiceImpl implements ProfileService{
//	
//	@Autowired
//	private ProfileRepository profileRepository;
//
//	@Override
//	public Long createProfile(String email) {
//		Profile profile = new Profile();
//		profile.setemail(email);
//		profile.setSkills(new ArrayList<>());
//		profile.setExperiences(new ArrayList<>());
//		profile.setCertifications(new ArrayList<>());
//		profileRepository.save(profile);
//		return profile.getId();
//		
//	}
//
//}
