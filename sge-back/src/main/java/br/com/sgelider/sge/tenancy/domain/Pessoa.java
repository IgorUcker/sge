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

import br.com.sgelider.sge.tenancy.domain.enums.TipoPessoa;

/**
 * @author Igor Ucker <igor.ucker@hotmail.com>
 */

@Entity
@Table(name = "pessoa", schema = "modelo")
public class Pessoa implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
	@Column(name = "id", nullable = false)
	private Integer id;
	@Basic
    @Column(name = "nome", nullable = true, length = 150)
    private String nome;
	@Basic
    @Column(name = "tipo_pessoa", nullable = true, length = 18)
	private TipoPessoa tipoPessoa;
	@Basic
    @Column(name = "insc_federal", nullable = false, length = 18)
	private String inscFederal;
	@Basic
    @Column(name = "endereco", nullable = false, length = 200)
	private String endereco; 
	@Basic
    @Column(name = "complemento", nullable = false, length = 50)
	private String complemento;
	@Basic
    @Column(name = "cep", nullable = false, length = 9)
    private String cep;
	@Basic
    @Column(name = "numero", nullable = false, length = 50)
    private String numero;
	@Basic
    @Column(name = "bairro", nullable = false, length = 120)
    private String bairro;
	@ManyToOne
    @JoinColumn(name = "id_cidade", referencedColumnName = "id")
	private Cidade idCidade;
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
	public TipoPessoa getTipoPessoa() {
		return tipoPessoa;
	}
	public void setTipoPessoa(TipoPessoa tipoPessoa) {
		this.tipoPessoa = tipoPessoa;
	}
	public String getInscFederal() {
		return inscFederal;
	}
	public void setInscFederal(String inscFederal) {
		this.inscFederal = inscFederal;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getComplemento() {
		return complemento;
	}
	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public Cidade getIdCidade() {
		return idCidade;
	}
	public void setIdCidade(Cidade idCidade) {
		this.idCidade = idCidade;
	}

}
