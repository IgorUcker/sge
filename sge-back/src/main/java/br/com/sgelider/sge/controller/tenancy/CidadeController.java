package br.com.sgelider.sge.controller.tenancy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.sgelider.sge.tenancy.domain.Cidade;
import br.com.sgelider.sge.tenancy.domain.Produto;
import br.com.sgelider.sge.tenancy.repository.CidadeRepository;
import br.com.sgelider.sge.tenancy.service.CidadeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CidadeController {
	
	@Autowired
	private CidadeService cidadeService;
	@Autowired
	private CidadeRepository cidadeRepository;
	
	@PutMapping("/sge/cadastros/cidade")
	public ResponseEntity salvar(@RequestBody @Validated Cidade cidade) {
		cidadeRepository.save(cidade);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/sge/cadastros/cidade")
    public ResponseEntity<Page<Cidade>> buscar(@PageableDefault(sort = "nome") Pageable paginacao, String termo) {
        Page<Cidade> pageable = cidadeService.findAll(paginacao, termo);

        return ResponseEntity.ok(pageable);
    
	}
}
