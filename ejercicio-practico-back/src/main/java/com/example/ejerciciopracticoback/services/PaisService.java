package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.PaisModel;
import com.example.ejerciciopracticoback.repositories.PaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaisService {

    @Autowired
    private PaisRepository paisRepository;

    public List<PaisModel> obtenerPaises(){
        return paisRepository.findAll();
    }
}
