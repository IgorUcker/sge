package br.com.sgelider.sge.controller.tenancy;


import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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

import br.com.sgelider.sge.tenancy.domain.UnidadeMedida;
import br.com.sgelider.sge.tenancy.repository.UnidadeMedidaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UnidadeMedidaController {
	
	@Autowired
	private UnidadeMedidaRepository unidadeMedidaRepository;

	
	@RequestMapping(value = "/sge/cadastros/unidade-medida", method = RequestMethod.GET)
    public ResponseEntity<List<UnidadeMedida>> buscar() {
        return ResponseEntity.ok(unidadeMedidaRepository.findAll(Sort.by("id")));
    }
	
	@RequestMapping(value = "/sge/cadastros/unidade-medida/{id}", method = RequestMethod.GET)
	public ResponseEntity<UnidadeMedida> byId(@PathVariable int id) {
		Optional<UnidadeMedida> nv = unidadeMedidaRepository.findById(id);
		return nv.isPresent() ? ResponseEntity.ok(nv.get()) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/sge/cadastros/unidade-medida")
	public ResponseEntity salvar(@RequestBody @Validated UnidadeMedida unidadeMedida) {
		unidadeMedidaRepository.save(unidadeMedida);
		return ResponseEntity.ok().build();
	}
	
	@RequestMapping(value = "/sge/cadastros/unidade-medida/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable int id) {
		unidadeMedidaRepository.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
