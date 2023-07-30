package com.assignment.project.projectService;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

	private final Map<String, String> urlMap = new HashMap<>();
    private final Map<String, Long> timeMap = new HashMap<>();
    private final Map<String, String> status= new HashMap<>();
    private final  String CREATED = "CREATED";
    private final String EXPIRED = "EXPIRED";
    private final String EXISTED = "EXISTED";
    

    public String shortenUrl(String originalUrl) {
    	String shortUrl = "";
    	try {
    		if(!urlMap.containsValue(originalUrl)) {
	        shortUrl = UUID.randomUUID().toString().substring(0, 8);
	        urlMap.put(shortUrl, originalUrl);
	        timeMap.put(shortUrl, System.currentTimeMillis());
	        status.put(shortUrl, CREATED);
    		}
    		else {
    			for (Map.Entry<String, String> entry : urlMap.entrySet()) {
    			    if (entry.getValue().equals(originalUrl) && CREATED.equalsIgnoreCase(status.get(entry.getKey()))) {
    			        shortUrl = EXISTED + ',' +entry.getKey();
    			    }
    			}
    		}
    	}
    	catch(Exception e) {
    		
    	}
        return shortUrl;
    }

    public String getOriginalUrl(String shortUrl) {
    	if(EXPIRED.equalsIgnoreCase(status.get(shortUrl)))
    		return EXPIRED;
    	else
    		return urlMap.get(shortUrl);
    }

    @Scheduled(fixedRate = 60000) // Run every 60,000 ms (1 minute)
    public void removeExpiredUrls() {
        Iterator<Map.Entry<String, Long>> iterator = timeMap.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Long> entry = iterator.next();
            if (System.currentTimeMillis() - entry.getValue() > 300000) { // More than 5 minutes
                status.put(entry.getKey(),EXPIRED);
                urlMap.remove(entry.getKey());
                iterator.remove();
            }
        }
    }
	}

