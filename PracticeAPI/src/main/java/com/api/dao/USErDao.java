package com.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.model.USerModel;

@Repository
public interface USErDao extends JpaRepository<USerModel, Integer>
{

}
