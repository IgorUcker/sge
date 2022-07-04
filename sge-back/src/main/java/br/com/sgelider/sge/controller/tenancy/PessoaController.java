package br.com.sgelider.sge.controller.tenancy;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.sgelider.sge.tenancy.domain.Pessoa;
import br.com.sgelider.sge.tenancy.repository.PessoaRepository;
import br.com.sgelider.sge.tenancy.service.PessoaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PessoaController {
	
	@Autowired
	private PessoaService pessoaService;
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@PutMapping("/sge/cadastros/pessoa")
	public ResponseEntity salvar(@RequestBody @Validated Pessoa pessoa) {
		pessoaRepository.save(pessoa);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/sge/cadastros/pessoa")
    public ResponseEntity<Page<Pessoa>> buscar(@PageableDefault(sort = "nome") Pageable paginacao, String termo) {
        Page<Pessoa> pageable = pessoaService.findAll(paginacao, termo);

        return ResponseEntity.ok(pageable);
	}
	
	@RequestMapping(value = "/sge/cadastros/pessoa/{id}", method = RequestMethod.GET)
    public ResponseEntity<Pessoa> byId(@PathVariable int id) {
        Optional<Pessoa> nv = pessoaRepository.findById(id);
        return nv.isPresent() ? ResponseEntity.ok(nv.get()) : ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/sge/cadastros/pessoa/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable int id) {
    	pessoaRepository.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
    	
}
