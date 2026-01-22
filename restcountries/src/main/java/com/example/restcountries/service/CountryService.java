package com.example.restcountries.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CountryService {

    private final String API_URL = "https://restcountries.com/v3.1/all";

    public List<Map<String, Object>> fetchCountries(
            String name,
            String code,
            String continent,
            String capital
    ) {
        RestTemplate restTemplate = new RestTemplate();

        // Build the URL (you can add query params if needed)
        String url = UriComponentsBuilder
                .fromHttpUrl(API_URL)
                .toUriString();

        // Fetch all countries
        List<Map<String, Object>> countries = restTemplate.getForObject(url, List.class);

        if (countries == null) {
            return Collections.emptyList();
        }

        // Filter and map the countries
        return countries.stream()
                .filter(c -> name == null || (
                        c.get("name") != null &&
                        ((Map<?, ?>) c.get("name")).get("common") != null &&
                        ((Map<?, ?>) c.get("name")).get("common").toString().toLowerCase().contains(name.toLowerCase())
                ))
                .filter(c -> code == null || (c.get("cca2") != null &&
                        c.get("cca2").toString().equalsIgnoreCase(code)))
                .filter(c -> continent == null || (c.get("region") != null &&
                        c.get("region").toString().equalsIgnoreCase(continent)))
                .filter(c -> capital == null || (
                        c.getOrDefault("capital", List.of()) != null &&
                        c.getOrDefault("capital", List.of()).toString().toLowerCase().contains(capital.toLowerCase())
                ))
                .map(c -> {
                    Map<String, Object> result = new HashMap<>();
                    result.put("name", ((Map<?, ?>) c.get("name")).get("common"));
                    result.put("code", c.get("cca2"));
                    result.put("capital", c.getOrDefault("capital", List.of("N/A")));
                    result.put("continent", c.get("region"));
                    return result;
                })
                .collect(Collectors.toList());
    }
}
