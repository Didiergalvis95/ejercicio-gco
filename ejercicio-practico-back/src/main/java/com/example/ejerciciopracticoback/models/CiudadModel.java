package com.example.ejerciciopracticoback.models;

import jakarta.persistence.*;

@Entity
@Table(name = "ciudades")
public class CiudadModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "nombre")
    private String nombre;
    @ManyToOne
    @JoinColumn(name = "departamento_id", nullable = false)
    private DepartamentoModel departamento;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public DepartamentoModel getDepartamentoModel() {
        return departamento;
    }

    public void setDepartamentoModel(DepartamentoModel departamentoModel) {
        this.departamento = departamentoModel;
    }
}
