package com.example.m3s02_back.mappers;

import com.example.m3s02_back.controllers.dtos.AutomovelResponse;
import com.example.m3s02_back.models.Automovel;

public class AutomovelMapper {
    public static AutomovelResponse map(Automovel source) {
        AutomovelResponse target = new AutomovelResponse();
        target.setId(source.getId());
        target.setName(source.getName());
        target.setYear(source.getYear());
        target.setType(source.getType());
        target.setPricePerDay(source.getPricePerDay());
        target.setImage(source.getImage());
        target.setDescription(source.getDescription());
        return target;
    }
}
