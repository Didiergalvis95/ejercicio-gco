package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.TipoIdentificacionModel;
import com.example.ejerciciopracticoback.repositories.TipoIdentificacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TipoIdentificacionService {

    @Autowired
    TipoIdentificacionRepository tipoIdentificacionRepository;

    public ArrayList<TipoIdentificacionModel> obtenerTipos(){
        return (ArrayList<TipoIdentificacionModel>)  tipoIdentificacionRepository.findAll();
    }


}
