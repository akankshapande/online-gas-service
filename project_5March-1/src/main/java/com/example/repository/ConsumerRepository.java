package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.pojos.Consumer;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Long>{

	
	List<Consumer> findByEmailAndPassword(String email,  String password); 
	
	Consumer findByConsumerNo(int consumerno);
	
	Consumer findByEmail(String email);
	
	List<Consumer> findAll(); 
	
	
	void deleteByConsumerNo(Long consumerno);
	
	int deleteByEmail(String email); 
	
}
