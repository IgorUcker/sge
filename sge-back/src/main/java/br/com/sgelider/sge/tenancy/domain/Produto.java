package br.com.sgelider.sge.tenancy.domain;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "produto", schema = "modelo")
public class Produto {
	@Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
	private Integer id;
	@ManyToOne
    @JoinColumn(name = "cod_unidade_medida", referencedColumnName = "id")
	private UnidadeMedida codUnidadeMedida;
	@Basic
    @Column(name = "nome", nullable = false, length = 100)
	private String nome;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public UnidadeMedida getCodUnidadeMedida() {
		return codUnidadeMedida;
	}
	public void setCodUnidadeMedida(UnidadeMedida codUnidadeMedida) {
		this.codUnidadeMedida = codUnidadeMedida;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
}
