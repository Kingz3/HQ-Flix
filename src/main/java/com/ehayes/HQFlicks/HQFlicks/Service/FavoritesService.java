package com.ehayes.HQFlicks.HQFlicks.Service;

import com.ehayes.HQFlicks.HQFlicks.Exception.FavoriteIdException;
import com.ehayes.HQFlicks.HQFlicks.Model.Favorites;
import com.ehayes.HQFlicks.HQFlicks.Repository.FavoritesRepository;
import com.ehayes.HQFlicks.HQFlicks.dto.FavoritesDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;


@Service
public class FavoritesService {

    @Autowired
    private FavoritesRepository favoritesRepository;

    @Autowired
    private AuthService authService;

    public void createFavorite(FavoritesDto favoritesDto){
        Favorites favorites = mapFromdtotoFavorite(favoritesDto);
        favoritesRepository.save(favorites);
    }

    private Favorites mapFromdtotoFavorite(FavoritesDto favoritesDto){
        Favorites favorite = new Favorites();
        favorite.setTitle(favoritesDto.getTitle());
        favorite.setDescription(favoritesDto.getDescription());
        favorite.setPoster_Path(favoritesDto.getPoster_path());
        favorite.setMovieID(favoritesDto.getMovieID());
        User username = authService.getCurrentUser().orElseThrow(()->
                new IllegalArgumentException("No User Found"));
        favorite.setUsername(username.getUsername());
        favorite.setFavorite(favoritesDto.isFavorite());
        return favorite;
    }



    public Iterable<Favorites> userFavorites(String username){
        return favoritesRepository.findByUsername(username);
    }

    public Favorites fineMovieByUsername(String username, int MovieId){

        Favorites favorites = favoritesRepository.findByMovieID(MovieId);
        if(favorites == null){
            throw  new FavoriteIdException("Movie not found");
        }
        if(!favorites.getUsername().equals(username)){
            throw new FavoriteIdException("Movie is not in your account");
        }
        return favorites;
    }

    public void removeSingleFavorite(String username, int movieID){

        favoritesRepository.delete(fineMovieByUsername(username, movieID));
    }

}
