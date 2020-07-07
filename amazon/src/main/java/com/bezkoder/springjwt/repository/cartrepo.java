package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.products.cartdetails;
@Repository
@Component
public interface cartrepo extends JpaRepository<cartdetails,Integer> {
@Query(value="select * from cartdetails  where u_id=:userid",nativeQuery=true)
List<cartdetails> getcartdet(@Param("userid") Long u);
	
}
