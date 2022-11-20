package com.codegang.moza.login;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codegang.moza.login.domain.RegistParam;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/login")
public class LoginController {
    
    @PostMapping("/regist")
    public String regist(@RequestBody RegistParam registParam) {
        
        // TODO : loginService.regist(registParam);

        return null;
    }
}
