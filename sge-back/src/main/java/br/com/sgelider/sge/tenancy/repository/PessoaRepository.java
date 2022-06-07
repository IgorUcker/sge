package br.com.sgelider.sge.tenancy.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.sgelider.sge.tenancy.domain.Pessoa;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
	
	@Query("select p from Pessoa p where LOWER(p.nome) like LOWER(?1)")
	List<Pessoa> findByNome(String nome, Sort sort);
}
