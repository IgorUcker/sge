package br.com.sgelider.sge.tenancy.service;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import br.com.sgelider.sge.tenancy.domain.Pessoa;
import br.com.sgelider.sge.tenancy.repository.PessoaRepository;
import br.com.sgelider.sge.utils.DatabaseUtils;

@Service
public class PessoaService {
	
	@PersistenceContext
    private EntityManager manager;
	@Autowired
	private PessoaRepository pessoaRepository;
	
	 public Page<Pessoa> findAll(Pageable paginacao, String termo) {
	        StringBuilder sql = new StringBuilder();
	        sql.append("select * from modelo.pessoa p ");

	        Map<String, Object> params = new HashMap<>();
	        if (!StringUtils.isEmpty(termo)) {
	            sql.append(params.isEmpty() ? " where " : " and ").append(" (p.nome ilike :termo or p.tipo_pessoa like :termo) ");
	            params.put("termo", "%" + termo + "%");
	        }

	        StringBuilder sqlCount = new StringBuilder(sql.toString());

	        sql.append(" order by p.").append(DatabaseUtils.toSqlName(paginacao.getSort().get().findFirst().get().getProperty()))
	                .append(" ")
	                .append(paginacao.getSort().get().findFirst().get().getDirection().name());

	        Query q = manager.createNativeQuery(sql.append(" offset ").append(paginacao.getOffset()).append(" limit ").append(paginacao.getPageSize()).toString(), Pessoa.class);
	        params.entrySet().forEach(e -> {
	            q.setParameter(e.getKey(), e.getValue());
	        });

	        List<Pessoa> findAll = q.getResultList();

	        Query qTotal = manager.createNativeQuery(sqlCount.toString().replace("select *", "select count(p.id)"));
	        params.entrySet().forEach(e -> {
	            qTotal.setParameter(e.getKey(), e.getValue());
	        });

	        return new PageImpl<>(findAll, paginacao, ((BigInteger) qTotal.getSingleResult()).longValue());
	    }
	 
}
