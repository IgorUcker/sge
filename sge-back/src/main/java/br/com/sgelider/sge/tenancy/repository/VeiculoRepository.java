package br.com.sgelider.sge.tenancy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sgelider.sge.tenancy.domain.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {

}
