package br.com.sgelider.sge.tenancy.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.sgelider.sge.tenancy.domain.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer>{
	
	@Query("select p from Produto p where LOWER(p.nome) like LOWER(?1)")
    List<Produto> findByNomeProduto(String nome, Sort sort);

}
