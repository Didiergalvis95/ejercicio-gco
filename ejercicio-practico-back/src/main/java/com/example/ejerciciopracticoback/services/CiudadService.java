package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.CiudadModel;
import com.example.ejerciciopracticoback.repositories.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CiudadService {

    @Autowired
    private CiudadRepository ciudadRepository;

    public List<CiudadModel> obtenerCiudades() {
        return ciudadRepository.findAll();
    }

    public List<CiudadModel> optenerCiudadPorDepartamento(Integer departamentoId) {
        return ciudadRepository.findByDepartamentoId(departamentoId);
    }
}