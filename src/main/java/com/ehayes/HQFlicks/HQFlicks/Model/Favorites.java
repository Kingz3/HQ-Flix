package com.ehayes.HQFlicks.HQFlicks.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
//@RequiredArgsConstructor
public class Favorites {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    @NotBlank
    private String username;
    @Column
    private String title;
    @Column
    private String poster_Path;
    @Lob
    @Column
    private String description;
    @Column
    private int movieID;
    @Column
    private boolean isFavorite;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    //cascade says if favorite is deleted just refresh the user
    //@JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

}
