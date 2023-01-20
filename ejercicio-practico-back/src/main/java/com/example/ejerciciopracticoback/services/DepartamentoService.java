package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.DepartamentoModel;
import com.example.ejerciciopracticoback.repositories.DepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DepartamentoService {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    public List<DepartamentoModel> obtenerDepartamentos(){
        return departamentoRepository.findAll();
    }

    public List<DepartamentoModel> obtenerDepartamentoPorPais(Integer paisId){
        return departamentoRepository.findByPaisId(paisId);
    }
}
