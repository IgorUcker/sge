package br.com.sgelider.sge.tenancy.domain;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Igor Ucker <igor.ucker@hotmail.com>
 */

@Entity
@Table(name = "cidade", schema = "modelo")
public class Cidade implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
	@Column(name = "id", nullable = false)
	private Integer id;
	@Basic
    @Column(name = "nome", nullable = false, length = 255)
    private String nome;
	@Basic
	@Column(name = "cod_cidade", nullable = false)
	private Integer codCidade;
	@Basic
	@Column(name = "estado", nullable = false, length = 2)
	private String estado;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getCodCidade() {
		return codCidade;
	}
	public void setCodCidade(Integer codCidade) {
		this.codCidade = codCidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
}
