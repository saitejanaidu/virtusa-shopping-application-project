package com.bezkoder.springjwt.products;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

import com.bezkoder.springjwt.models.User;
//import com.fasterxml.jackson.annotation.JsonFormat;
//@JsonFormat(shape=JsonFormat.Shape.ARRAY)
@Entity
@Component
public class cartdetails {
	@Id
	@GeneratedValue
	int cid;
	
int quantity;

public int getCid() {
	return cid;
}


public void setCid(int cid) {
	this.cid = cid;
}


public int getQuantity() {
	return quantity;
}


public void setQuantity(int quantity) {
	this.quantity = quantity;
}


public product_page getPro() {
	return pro;
}


public void setPro(product_page pro) {
	this.pro = pro;
}


public User getU() {
	return u;
}


public void setU(User u) {
	this.u = u;
}


@OneToOne(cascade = {CascadeType.ALL})
product_page pro;


@ManyToOne(cascade = {CascadeType.ALL})
User u;
}
