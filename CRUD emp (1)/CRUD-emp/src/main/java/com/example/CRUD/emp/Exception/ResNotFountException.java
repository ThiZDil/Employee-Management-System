package com.example.CRUD.emp.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResNotFountException extends RuntimeException{
    private static final long serialversionUID=1L;

    public ResNotFountException(String message){
        super(message);
    }
}
