package com.ehayes.HQFlicks.HQFlicks.Exception;

public class PostNotFoundException extends RuntimeException {
    public PostNotFoundException(String message){
        super(message);
    }
}
