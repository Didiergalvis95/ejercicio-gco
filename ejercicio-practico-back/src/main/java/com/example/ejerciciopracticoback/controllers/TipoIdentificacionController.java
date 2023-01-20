package com.example.ejerciciopracticoback.controllers;

import com.example.ejerciciopracticoback.models.TipoIdentificacionModel;
import com.example.ejerciciopracticoback.services.TipoIdentificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/identificacion")
public class TipoIdentificacionController {

    @Autowired
    TipoIdentificacionService tipoIdentificacionService;

    @GetMapping()
    public ArrayList<TipoIdentificacionModel> obtenerTipos(){
        return tipoIdentificacionService.obtenerTipos();
    }

}
