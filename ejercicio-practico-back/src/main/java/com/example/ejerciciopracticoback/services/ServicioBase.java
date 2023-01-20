package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.UsuarioModel;

import java.util.List;

public interface ServicioBase <E> {

    public List<E> listarUsuarios() throws Exception;

    public E buscarPorId (Long id) throws Exception;

    UsuarioModel registrarUsuarios(UsuarioModel entity) throws Exception;
}