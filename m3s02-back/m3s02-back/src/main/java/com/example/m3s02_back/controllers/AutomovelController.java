package com.example.m3s02_back.controllers;

import com.example.m3s02_back.controllers.dtos.AutomovelResponse;
import com.example.m3s02_back.services.AutomovelService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/automoveis")
public class AutomovelController {
    private final AutomovelService service;
    public AutomovelController(AutomovelService service) {
        this.service = service;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AutomovelResponse> listAll() {
        return service.listAll();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AutomovelResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }
}
