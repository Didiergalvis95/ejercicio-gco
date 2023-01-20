package com.example.ejerciciopracticoback.controllers;

import com.example.ejerciciopracticoback.models.DepartamentoModel;
import com.example.ejerciciopracticoback.services.DepartamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/departamentos")
public class DepartamentoController {

    @Autowired
    private DepartamentoService departamentoService;

    @GetMapping()
    public ResponseEntity<List<DepartamentoModel>> obtenerDepartamentos(@RequestParam(required = false) Integer paisId){
        List<DepartamentoModel> departamentos = paisId == null ?
                departamentoService.obtenerDepartamentos() :
                departamentoService.obtenerDepartamentoPorPais(paisId);
        return new ResponseEntity<>(departamentos, HttpStatus.OK);
    }
}
