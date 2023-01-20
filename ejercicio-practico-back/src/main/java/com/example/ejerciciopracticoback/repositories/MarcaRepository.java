package com.example.ejerciciopracticoback.repositories;

import com.example.ejerciciopracticoback.models.MarcaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcaRepository extends JpaRepository<MarcaModel, Integer> {
}
