package com.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.dao.USErDao;
import com.api.model.USerModel;
@Service
public class USerServiceIMpl implements UserService
{

	@Autowired
	private USErDao dao;
	
	
	@Override
	public List<USerModel> getuser() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public USerModel adduser(USerModel user) {
		// TODO Auto-generated method stub
		return dao.save(user);
	}

	@Override
	public USerModel updateuser(USerModel user) {
		// TODO Auto-generated method stub
		return dao.save(user);
	}

	@Override
	public void deleteuser(int id) {
		// TODO Auto-generated method stub
		
		USerModel user = dao.getOne(id);
		
		dao.delete(user);
		
	}
	
}
