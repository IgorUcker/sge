package br.com.sgelider.sge.tenancy.service;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import br.com.sgelider.sge.tenancy.domain.Cidade;
import br.com.sgelider.sge.utils.DatabaseUtils;


@Service
public class CidadeService {
	
	@PersistenceContext()
    private EntityManager manager;
	
	 public Page<Cidade> findAll(Pageable paginacao, String termo) {
	        StringBuilder sql = new StringBuilder();
	        sql.append("select * from modelo.cidade c ");

	        Map<String, Object> params = new HashMap<>();
	        if (!StringUtils.isEmpty(termo)) {
	            sql.append(params.isEmpty() ? " where " : " and ").append(" (c.nome ilike :termo or c.estado like :termo) ");
	            params.put("termo", "%" + termo + "%");
	        }

	        StringBuilder sqlCount = new StringBuilder(sql.toString());

	        sql.append(" order by c.").append(DatabaseUtils.toSqlName(paginacao.getSort().get().findFirst().get().getProperty()))
	                .append(" ")
	                .append(paginacao.getSort().get().findFirst().get().getDirection().name());

	        Query q = manager.createNativeQuery(sql.append(" offset ").append(paginacao.getOffset()).append(" limit ").append(paginacao.getPageSize()).toString(), Cidade.class);
	        params.entrySet().forEach(e -> {
	            q.setParameter(e.getKey(), e.getValue());
	        });

	        List<Cidade> findAll = q.getResultList();

	        Query qTotal = manager.createNativeQuery(sqlCount.toString().replace("select *", "select count(c.id)"));
	        params.entrySet().forEach(e -> {
	            qTotal.setParameter(e.getKey(), e.getValue());
	        });

	        return new PageImpl<>(findAll, paginacao, ((BigInteger) qTotal.getSingleResult()).longValue());
	    }


}
