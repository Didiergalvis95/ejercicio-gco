package com.example.ejerciciopracticoback.controllers;

import com.example.ejerciciopracticoback.models.CiudadModel;
import com.example.ejerciciopracticoback.services.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @GetMapping()
    public ResponseEntity<List<CiudadModel>> obtenerCiudades(@RequestParam(required = false) Integer departamentoId){
        List<CiudadModel> ciudades = departamentoId == null ?
                ciudadService.obtenerCiudades() :
                ciudadService.optenerCiudadPorDepartamento(departamentoId);
        return new ResponseEntity<>(ciudades, HttpStatus.OK);
    }
}
