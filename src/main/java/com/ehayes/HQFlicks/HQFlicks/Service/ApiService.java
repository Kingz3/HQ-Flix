package com.ehayes.HQFlicks.HQFlicks.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class ApiService {

    @Value("${api.key}")
    private String apiKey;

    public String demo(String TMBD) throws IOException, InterruptedException {
        String api = TMBD + "?api_key=" + apiKey+ "&language=en-US";
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .header("accept", "application/json")
                .uri(URI.create(api))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }

    public String singleCinema(String film, String switchId) throws IOException, InterruptedException {
        String api = "https://api.themoviedb.org/3/"+film+"/"+switchId+"?api_key="+apiKey+"&language=en-US";
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .header("accept", "application/json")
                .uri(URI.create(api))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }



}
