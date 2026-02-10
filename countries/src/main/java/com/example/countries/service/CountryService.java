package com.example.countries.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CountryService {

    private final String API_URL =
            "https://api.first.org/data/v1/countries";

    public String getCountries() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(API_URL, String.class);
    }
}
