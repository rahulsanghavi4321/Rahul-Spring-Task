package com.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class USerModel 
{
	@Id
	private int id;
	
	private String name,address;

	public USerModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public USerModel(int id, String name, String address) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
	}

	@Override
	public String toString() {
		return "USerModel [id=" + id + ", name=" + name + ", address=" + address + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
}
