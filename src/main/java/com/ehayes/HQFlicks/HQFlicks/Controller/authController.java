package com.ehayes.HQFlicks.HQFlicks.Controller;



import com.ehayes.HQFlicks.HQFlicks.Service.AuthService;
import com.ehayes.HQFlicks.HQFlicks.dto.LoginRequest;
import com.ehayes.HQFlicks.HQFlicks.dto.RegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class authController {

    @Autowired
    private AuthService authService;


    //data to get transferred between front end and back end
    //ResponseEntity is built in class lets you send a response to the client
    @PostMapping("/register")
    public ResponseEntity Signup(@Valid @RequestBody RegistrationRequest registrationRequest){
        authService.signup(registrationRequest);

        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){
       return authService.login(loginRequest);
    }

}
