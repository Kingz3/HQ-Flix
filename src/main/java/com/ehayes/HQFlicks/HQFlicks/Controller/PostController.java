package com.ehayes.HQFlicks.HQFlicks.Controller;

import com.ehayes.HQFlicks.HQFlicks.Service.PostService;
import com.ehayes.HQFlicks.HQFlicks.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/api/posts/")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping
    public ResponseEntity createPost(@RequestBody PostDto postDto){
        postService.createPost(postDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PostDto>> showAllPosts() {
        return new ResponseEntity(postService.showAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPost(@PathVariable @RequestBody Long id) {
        return new ResponseEntity(postService.readSinglePost(id), HttpStatus.OK);
    }

}
