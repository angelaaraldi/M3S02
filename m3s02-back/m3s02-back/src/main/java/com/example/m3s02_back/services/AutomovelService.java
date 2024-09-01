package com.example.m3s02_back.services;

import com.example.m3s02_back.controllers.dtos.AutomovelResponse;
import com.example.m3s02_back.models.Automovel;
import com.example.m3s02_back.repositories.AutomovelRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.example.m3s02_back.mappers.AutomovelMapper.map;

@Service
public class AutomovelService {
    private final AutomovelRepository repository;
    public AutomovelService(AutomovelRepository repository) {
        this.repository = repository;
    }
    public List<AutomovelResponse> listAll() {
        List<AutomovelResponse> lista = new ArrayList<>();
        for (Automovel automovel : repository.findAll()) {
            lista.add(map(automovel));
        }
        return lista;
    }
    public AutomovelResponse getById(Long id) {
        return map(repository.findById(id).orElseThrow(EntityNotFoundException::new));
    }
}
