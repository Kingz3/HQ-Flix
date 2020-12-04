package com.ehayes.HQFlicks.HQFlicks.Model;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table
@RequiredArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    private String username;

    @NonNull
    private String title;

    @NonNull
    private String content;

    private Instant createdOn;

}
