package com.ehayes.HQFlicks.HQFlicks.Model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@RequiredArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class User {

    //todo: think about email for notification for upcoming movie

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @NotEmpty(message = "Please Enter Your First Name")
    private String firstName;

    @NonNull
    @NotEmpty(message = "Please Enter Your Last Name")
    private String lastName;

    @Column(nullable = false, unique = true)
    @NotEmpty(message = "Please Enter a Username")
    @Size(min = 5)
    @NonNull
    private String username;

    @NonNull
    @NotEmpty(message = "Please Enter a Password")
    @Size(min = 6)
    private String password;

    @NonNull
    @NotEmpty(message = "Please Enter a Email")
    private String email;

    @Override
    public String toString() {
        return "User{" +
                "FirstName='" + firstName + '\'' +
                ", LastName='" + lastName + '\'' +
                '}';
    }

    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "user", orphanRemoval = true)
    private List<Favorites> favorites = new ArrayList<>();

    //Possibly not needed but will check on front end
    //public void addFavorites(Favorites favorite){
//        favorites.add(favorite);
//    }



}
