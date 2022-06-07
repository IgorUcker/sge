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

import br.com.sgelider.sge.SgeLiderApplication;
import br.com.sgelider.sge.tenancy.domain.Produto;
import br.com.sgelider.sge.utils.DatabaseUtils;

@Service
public class ProdutoService {
	
	@PersistenceContext()
    private EntityManager manager;
	
	
	public Page<Produto> findAll(Pageable paginacao, String termo) {
        StringBuilder sql = new StringBuilder();
        sql.append("select * from modelo.produto p ");

        Map<String, Object> params = new HashMap<>();
        if (!StringUtils.isEmpty(termo)) {
            sql.append(params.isEmpty() ? " where " : " and ").append(" (p.nome ilike :termo) ");
            params.put("termo", "%" + termo + "%");
        }

        StringBuilder sqlCount = new StringBuilder(sql.toString());

        sql.append(" order by p.").append(DatabaseUtils.toSqlName(paginacao.getSort().get().findFirst().get().getProperty()))
                .append(" ")
                .append(paginacao.getSort().get().findFirst().get().getDirection().name());

        Query q = manager.createNativeQuery(sql.append(" offset ").append(paginacao.getOffset()).append(" limit ").append(paginacao.getPageSize()).toString(), Produto.class);
        params.entrySet().forEach(e -> {
            q.setParameter(e.getKey(), e.getValue());
        });

        List<Produto> findAll = q.getResultList();

        Query qTotal = manager.createNativeQuery(sqlCount.toString().replace("select *", "select count(p.id)"));
        params.entrySet().forEach(e -> {
            qTotal.setParameter(e.getKey(), e.getValue());
        });

        return new PageImpl<>(findAll, paginacao, ((BigInteger) qTotal.getSingleResult()).longValue());
    }

}
