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

import br.com.sgelider.sge.tenancy.domain.StatusPedido;
import br.com.sgelider.sge.tenancy.repository.StatusPedidoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StatusPedidoController {
	
	@Autowired
	private StatusPedidoRepository statusPedidoRepository;
	
	@RequestMapping(value = "/sge/cadastros/status-pedido", method = RequestMethod.GET)
    public ResponseEntity<List<StatusPedido>> buscar() {
        return ResponseEntity.ok(statusPedidoRepository.findAll(Sort.by("id")));
    }
	
	@RequestMapping(value = "/sge/cadastros/status-pedido/{id}", method = RequestMethod.GET)
	public ResponseEntity<StatusPedido> byId(@PathVariable int id) {
		Optional<StatusPedido> nv = statusPedidoRepository.findById(id);
		return nv.isPresent() ? ResponseEntity.ok(nv.get()) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/sge/cadastros/status-pedido")
	public ResponseEntity salvar(@RequestBody @Validated StatusPedido statusPedido) {
		statusPedidoRepository.save(statusPedido);
		return ResponseEntity.ok().build();
	}
	
	@RequestMapping(value = "/sge/cadastros/status-pedido/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable int id) {
		statusPedidoRepository.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}


}
