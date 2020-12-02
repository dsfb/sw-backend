package com.marcelo.demo.service;

import com.marcelo.demo.model.StatisticsModel;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class StatisticsService {

    @Bean
    @Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
    public StatisticsModel statisticSingleton(){
        return new StatisticsModel();
    }

}
