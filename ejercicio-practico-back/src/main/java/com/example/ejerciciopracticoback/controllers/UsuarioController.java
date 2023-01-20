package com.example.ejerciciopracticoback.controllers;

import com.example.ejerciciopracticoback.models.UsuarioModel;
import com.example.ejerciciopracticoback.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity <?> registrarUsuarios(@RequestBody UsuarioModel usuario){
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(usuarioService.registrarUsuarios(usuario));
        }catch (Exception error) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{Mensaje: Revisa la peticion}" + error);
        }
    }

    @GetMapping
    public ResponseEntity<?>buscarUsuario(){
        try{
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(usuarioService.listarUsuarios());
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{Mensaje: Revisa la peticion}" + error);
        }

    }

}
