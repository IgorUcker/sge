package br.com.sgelider.sge.controller.tenancy;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import br.com.sgelider.sge.tenancy.domain.Produto;
import br.com.sgelider.sge.tenancy.repository.ProdutoRepository;
import br.com.sgelider.sge.tenancy.service.ProdutoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	@Autowired
	private ProdutoService produtoService;
	
	@PutMapping("/sge/cadastros/produto")
    public ResponseEntity salvar(@RequestBody @Validated Produto produto) {
		produtoRepository.save(produto);
        return ResponseEntity.ok().build();
    }

	@GetMapping("/sge/cadastros/produto")
    public ResponseEntity<Page<Produto>> buscar(@PageableDefault(sort = "nome") Pageable paginacao, String termo) {
        Page<Produto> pageable = produtoService.findAll(paginacao, termo);

        return ResponseEntity.ok(pageable);
    }
}
