package com.api.service;

import java.util.List;

import com.api.model.USerModel;

public interface UserService 
{
	public List<USerModel> getuser();
	
	public USerModel adduser(USerModel user);
	
	public USerModel updateuser(USerModel user);
	
	public void deleteuser(int id);
}
