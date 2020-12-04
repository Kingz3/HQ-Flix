package com.ehayes.HQFlicks.HQFlicks.Service;

import com.ehayes.HQFlicks.HQFlicks.Model.User;
import com.ehayes.HQFlicks.HQFlicks.Repository.UserRepository;
import com.ehayes.HQFlicks.HQFlicks.Security.JwtProvider;
import com.ehayes.HQFlicks.HQFlicks.dto.LoginRequest;
import com.ehayes.HQFlicks.HQFlicks.dto.RegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtProvider jwtProvider;

    public void signup(RegistrationRequest registrationRequest) {

        User user = new User();
        user.setUsername(registrationRequest.getUsername());
        user.setPassword(encoder(registrationRequest.getPassword()));
        user.setEmail(registrationRequest.getEmail());
        user.setFirstName(registrationRequest.getFirstName());
        user.setLastName(registrationRequest.getLastName());
        userRepository.save(user);
    }

    private String encoder(String password) {
        return passwordEncoder.encode(password);
    }

    public String login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),
                loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        //String authenticationToken = jwtProvider.GenerateToken(authentication);
        //return new AuthenticationResponse(authenticationToken, loginRequest.getUsername());

        return jwtProvider.GenerateToken(authentication);
    }

    public Optional<org.springframework.security.core.userdetails.User> getCurrentUser() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User)
                              SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return Optional.of(principal);
    }

}
