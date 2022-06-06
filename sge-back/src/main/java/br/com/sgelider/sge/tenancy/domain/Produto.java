package br.com.sgelider.sge.tenancy.domain;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author Igor Ucker <igor.ucker@hotmail.com>
 */

@Entity
@Table(name = "produto", schema = "modelo")
public class Produto implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
	@Column(name = "id", nullable = false)
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
