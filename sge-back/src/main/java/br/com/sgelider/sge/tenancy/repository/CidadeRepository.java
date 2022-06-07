package br.com.sgelider.sge.tenancy.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.sgelider.sge.tenancy.domain.Cidade;


public interface CidadeRepository extends JpaRepository<Cidade, Integer> {
	
	@Query("select c from Cidade c where LOWER(c.nome) like LOWER(?1)")
    List<Cidade> findByNome(String nome, Sort sort);

}
