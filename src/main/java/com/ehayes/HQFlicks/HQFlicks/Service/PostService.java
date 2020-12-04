package com.ehayes.HQFlicks.HQFlicks.Service;

import com.ehayes.HQFlicks.HQFlicks.Exception.PostNotFoundException;
import com.ehayes.HQFlicks.HQFlicks.Model.Post;
import com.ehayes.HQFlicks.HQFlicks.Repository.PostRepository;
import com.ehayes.HQFlicks.HQFlicks.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.List;

import static java.util.stream.Collectors.toList;


@Service
public class PostService {

    @Autowired
    AuthService authService;

    @Autowired
    PostRepository postRepository;

    public void createPost(PostDto postDto){
        Post post = mapFromDtoToPost(postDto);
        postRepository.save(post);
    }


    public List<PostDto> showAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(this::mapFromPostToDto).collect(toList());
    }

    private PostDto mapFromPostToDto(Post post){
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setContent(post.getContent());
        postDto.setUsername(post.getUsername());
        return postDto;
    }

    private Post mapFromDtoToPost(PostDto postDto){
        Post post = new Post();
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        User username = authService.getCurrentUser().orElseThrow(()->
                new IllegalArgumentException("No User Found"));
        post.setUsername(username.getUsername());
        post.setCreatedOn(Instant.now());
        return post;
    }

    public Object readSinglePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException("For id " + id));
        return mapFromPostToDto(post);
    }
}
