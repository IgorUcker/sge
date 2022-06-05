package br.com.sgelider.sge.tenancy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sgelider.sge.tenancy.domain.FormaPagamento;


public interface FormaPagamentoRepository extends JpaRepository<FormaPagamento, Integer>  {

}
