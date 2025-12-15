package com.example.CareerPT.config;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

@Component
public class ConverterDebugConfig {

    @Autowired
    private RequestMappingHandlerAdapter adapter;

    @PostConstruct
    public void checkConverters() {
        System.out.println("==== Registered HttpMessageConverters ====");
        adapter.getMessageConverters()
               .forEach(c -> System.out.println(c.getClass().getName()));
        System.out.println("========================================");
    }
}
