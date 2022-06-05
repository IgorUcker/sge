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

import br.com.sgelider.sge.tenancy.domain.Veiculo;
import br.com.sgelider.sge.tenancy.repository.VeiculoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class VeiculoController {
	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@RequestMapping(value = "/sge/cadastros/veiculo", method = RequestMethod.GET)
    public ResponseEntity<List<Veiculo>> buscar() {
        return ResponseEntity.ok(veiculoRepository.findAll(Sort.by("id")));
    }
	
	@RequestMapping(value = "/sge/cadastros/veiculo/{id}", method = RequestMethod.GET)
	public ResponseEntity<Veiculo> byId(@PathVariable int id) {
		Optional<Veiculo> nv = veiculoRepository.findById(id);
		return nv.isPresent() ? ResponseEntity.ok(nv.get()) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/sge/cadastros/veiculo")
	public ResponseEntity salvar(@RequestBody @Validated Veiculo veiculo) {
		veiculoRepository.save(veiculo);
		return ResponseEntity.ok().build();
	}
	
	@RequestMapping(value = "/sge/cadastros/veiculo/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable int id) {
		veiculoRepository.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
