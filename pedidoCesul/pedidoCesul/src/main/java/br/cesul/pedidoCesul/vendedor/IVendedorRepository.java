package br.cesul.pedidoCesul.vendedor;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface IVendedorRepository extends JpaRepository<VendedorModel, UUID> {

    VendedorModel findByEmail(String email);
    List<VendedorModel> findAllBySituacao(boolean situacao);
}
