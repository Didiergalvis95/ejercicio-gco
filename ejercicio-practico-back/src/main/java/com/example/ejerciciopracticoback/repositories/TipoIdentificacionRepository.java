package com.example.ejerciciopracticoback.repositories;

import com.example.ejerciciopracticoback.models.TipoIdentificacionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoIdentificacionRepository extends JpaRepository<TipoIdentificacionModel, Integer> {
}
