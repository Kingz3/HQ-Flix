package com.ehayes.HQFlicks.HQFlicks.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class FavoriteIdException extends RuntimeException {
    public FavoriteIdException(String message) {
        super(message);
    }
}
