package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.MarcaModel;
import com.example.ejerciciopracticoback.repositories.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MarcaService {

    @Autowired
    MarcaRepository marcaRepository;

    public ArrayList<MarcaModel> obtenerMarca(){
        return (ArrayList<MarcaModel>) marcaRepository.findAll();
    }
}
