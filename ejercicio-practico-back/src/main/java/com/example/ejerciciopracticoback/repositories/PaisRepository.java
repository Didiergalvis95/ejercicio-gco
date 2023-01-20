package com.example.ejerciciopracticoback.repositories;

import com.example.ejerciciopracticoback.models.PaisModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaisRepository extends JpaRepository<PaisModel, Integer> {
}
