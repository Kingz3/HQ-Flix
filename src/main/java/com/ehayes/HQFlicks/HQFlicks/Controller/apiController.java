package com.ehayes.HQFlicks.HQFlicks.Controller;

import com.ehayes.HQFlicks.HQFlicks.Service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth/cinema")
public class apiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/movie/upcoming")
    public String upcoming_Movies() throws IOException, InterruptedException {
        return apiService.demo("https://api.themoviedb.org/3/movie/upcoming");
    }

    @GetMapping("/movie/now_playing")
    public String movie_now_playing() throws IOException, InterruptedException {
        return apiService.demo("https://api.themoviedb.org/3/movie/now_playing");
    }

    @GetMapping("/movie/popular")
    public String popular_movies() throws IOException, InterruptedException {
        return apiService.demo("https://api.themoviedb.org/3/movie/popular");
    }

    @GetMapping("/tv/popular")
    public String popular_tv() throws IOException, InterruptedException {
        return apiService.demo("https://api.themoviedb.org/3/tv/popular");
    }

    @GetMapping("/genre")
    public String get_genre() throws IOException, InterruptedException {
        return apiService.demo("https://api.themoviedb.org/3/genre/movie/list");
    }

    @GetMapping("/{film}/{switchId}")
    public String getSummary(@PathVariable String film, @PathVariable String switchId) throws IOException, InterruptedException {
        return apiService.singleCinema(film, switchId);
    }


}
