package com.example.ejerciciopracticoback.repositories;

import com.example.ejerciciopracticoback.models.CiudadModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CiudadRepository extends JpaRepository<CiudadModel, Integer> {
    List<CiudadModel> findByDepartamentoId(Integer departamentoId);

}
