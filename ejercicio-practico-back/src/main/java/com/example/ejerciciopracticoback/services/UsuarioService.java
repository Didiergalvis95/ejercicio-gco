package com.example.ejerciciopracticoback.services;

import com.example.ejerciciopracticoback.models.UsuarioModel;
import com.example.ejerciciopracticoback.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements ServicioBase<UsuarioModel> {

    @Autowired
    UsuarioRepository usuarioRepository;


    @Override
    public List<UsuarioModel> listarUsuarios() throws Exception {
        try{
            List<UsuarioModel> usuarios= usuarioRepository.findAll();
            return usuarios;
        }
        catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }


    @Override
    public UsuarioModel buscarPorId(Long id) throws Exception {
        try{
            Optional<UsuarioModel> usuarioBuscado= usuarioRepository.findById(id);
            return usuarioBuscado.get();
        }
        catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }


    @Override
    public UsuarioModel registrarUsuarios(UsuarioModel entity) throws Exception {
        try{
            entity = usuarioRepository.save(entity);
            return entity;
        }
        catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }


}
