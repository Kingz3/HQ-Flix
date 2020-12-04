package com.ehayes.HQFlicks.HQFlicks.Repository;

import com.ehayes.HQFlicks.HQFlicks.Model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {

    Iterable<Favorites> findByUsername(String username);

    Favorites findByMovieID(int id);

    Iterable<Favorites> findAllByUsername(String username);
}
