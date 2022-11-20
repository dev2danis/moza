package com.codegang.moza.login.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RegistParam {
    private String email;
    private String name;
    private String password;
}
