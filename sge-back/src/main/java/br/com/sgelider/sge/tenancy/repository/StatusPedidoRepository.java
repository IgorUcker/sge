package br.com.sgelider.sge.tenancy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sgelider.sge.tenancy.domain.StatusPedido;


public interface StatusPedidoRepository extends JpaRepository<StatusPedido, Integer>{
	
	
}
