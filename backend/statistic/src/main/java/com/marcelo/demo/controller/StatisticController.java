package com.marcelo.demo.controller;


import com.marcelo.demo.model.StatisticsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Random;

@Controller
@CrossOrigin(origins = "*")
public class StatisticController {

    @Autowired
    StatisticsModel statisticsModel;

    @GetMapping("/api/statistic")
    @ResponseBody
    StatisticsModel getStatistics(){

        return statisticsModel;
    }
}
