package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.model.USerModel;
import com.api.service.UserService;

@RestController
public class MyController 
{
	
	@Autowired
	private UserService service;
	
	
	@RequestMapping("/get")
	public List<USerModel> getuser()
	{
		return this.service.getuser();
	}
	
	
	
	@RequestMapping("/add")
	public USerModel adduser(@RequestBody USerModel user)
	{
		return this.service.adduser(user);
	}
	
	
	@RequestMapping("/update")
	public USerModel updateuser(@RequestBody USerModel user)
	{
		return this.service.updateuser(user);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteuser(@PathVariable String id)
	{
		try {
			
			this.service.deleteuser(Integer.parseInt(id));
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (Exception e) {
			// TODO: handle exception
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
