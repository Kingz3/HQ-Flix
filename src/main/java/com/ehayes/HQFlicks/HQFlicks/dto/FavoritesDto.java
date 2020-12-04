package com.ehayes.HQFlicks.HQFlicks.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoritesDto {

    private long id;
    private String username;
    private String title;
    private String description;
    private String poster_path;
    private int movieID;
    private boolean isFavorite = true;


}
