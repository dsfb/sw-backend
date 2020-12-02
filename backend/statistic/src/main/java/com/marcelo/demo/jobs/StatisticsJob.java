package com.marcelo.demo.jobs;


import com.marcelo.demo.model.StatisticsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class StatisticsJob {

    @Autowired
    StatisticsModel statisticsModel;

    @Scheduled(fixedRate = 300000)
    void calcStatistics(){
        if (statisticsModel.getHitsPerSecond()==null){
            statisticsModel.setHitsPerSecond(0);
            statisticsModel.setHits(0);
            return;
        }
        Random r = new Random();
        int max = 1000;
        statisticsModel.setHitsPerSecond(r.nextInt(max));
        var access = statisticsModel.getHitsPerSecond()!= null?
                statisticsModel.getHitsPerSecond()*5:0;
        var oldAcess = statisticsModel.getHits();
        statisticsModel.setHits(oldAcess + access);
    }
}
