package com.example.restcountries.controller;

import com.example.restcountries.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin(origins = "http://localhost:5173")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public List<Map<String, Object>> getCountries(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String code,
            @RequestParam(required = false) String continent,
            @RequestParam(required = false) String capital
    ) {
        return countryService.fetchCountries(name, code, continent, capital);
    }
}
