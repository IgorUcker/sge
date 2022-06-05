package br.com.sgelider.sge.controller.tenancy;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.sgelider.sge.tenancy.domain.FormaPagamento;
import br.com.sgelider.sge.tenancy.repository.FormaPagamentoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FormaPagamentoController {
	
	@Autowired
	private FormaPagamentoRepository formaPagamentoRepository;
	
	@RequestMapping(value = "/sge/cadastros/forma-pagamento", method = RequestMethod.GET)
    public ResponseEntity<List<FormaPagamento>> buscar() {
        return ResponseEntity.ok(formaPagamentoRepository.findAll(Sort.by("id")));
    }
	
	@RequestMapping(value = "/sge/cadastros/forma-pagamento/{id}", method = RequestMethod.GET)
	public ResponseEntity<FormaPagamento> byId(@PathVariable int id) {
		Optional<FormaPagamento> nv = formaPagamentoRepository.findById(id);
		return nv.isPresent() ? ResponseEntity.ok(nv.get()) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/sge/cadastros/forma-pagamento")
	public ResponseEntity salvar(@RequestBody @Validated FormaPagamento formaPagamento) {
		formaPagamentoRepository.save(formaPagamento);
		return ResponseEntity.ok().build();
	}
	
	@RequestMapping(value = "/sge/cadastros/forma-pagamento/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable int id) {
		formaPagamentoRepository.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
