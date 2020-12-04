package com.ehayes.HQFlicks.HQFlicks.Controller;


import com.ehayes.HQFlicks.HQFlicks.Model.Favorites;
import com.ehayes.HQFlicks.HQFlicks.Service.FavoritesService;
import com.ehayes.HQFlicks.HQFlicks.dto.FavoritesDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class FavoritesController {

    @Autowired
    FavoritesService favoritesService;

    @PostMapping("/favorites")
    public ResponseEntity createFavorites(@Valid @RequestBody FavoritesDto favoritesDto){
        favoritesService.createFavorite(favoritesDto);
        return new ResponseEntity(favoritesDto, HttpStatus.CREATED);
    }

    public List<Favorites> getAllFavorites(@PathVariable String username){
        return null;
    }

    @GetMapping("/{movieID}")
    public ResponseEntity<?> getProjectById(@PathVariable int movieID, Principal principal){
       Favorites favorites = favoritesService.fineMovieByUsername(principal.getName(), movieID);
        return new ResponseEntity<>(favorites, HttpStatus.OK);
    }


    @GetMapping("/all")
    public Iterable<Favorites> showUserFavorites( Principal principal){
        return favoritesService.userFavorites(principal.getName());
    }

    @DeleteMapping("/{movieId}")
    public ResponseEntity<?> deleteFavorite(Principal principal, @PathVariable int movieId){
       favoritesService.removeSingleFavorite(principal.getName(), movieId);
              return new ResponseEntity<String>("", HttpStatus.OK);
    }

}
