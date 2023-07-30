package com.assignment.project.projectController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.project.projectService.ProjectService;



@CrossOrigin(origins = "*")
@RestController
public class ProjectController {

	    @Autowired
	    private ProjectService projectService;

	    @PostMapping("createShortUrl")
	    public String shortenUrl(@RequestBody String originalUrl) {
	        return projectService.shortenUrl(originalUrl);
	    }

	    @GetMapping("{shortUrl}")
	    public String getOriginalUrl(@PathVariable String shortUrl) {
	        return projectService.getOriginalUrl(shortUrl);
	    }
	}

