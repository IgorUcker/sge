package br.com.sgelider.sge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class SgeLiderApplication {
	
	public static final String PERSISTENCE_UNIT_NAME_TENANCY = "tenancy";

	public static void main(String[] args) {
		SpringApplication.run(SgeLiderApplication.class, args);
	}
	
}
