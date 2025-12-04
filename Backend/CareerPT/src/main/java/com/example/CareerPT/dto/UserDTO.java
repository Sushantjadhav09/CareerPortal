package com.example.CareerPT.dto;



import com.example.CareerPT.entity.User;
import com.example.CareerPT.enums.AccountType;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class UserDTO {

    private Long id;
    @NotBlank(message="{user.name.absent}")
    private String name;
    @NotBlank(message="{Email is null or blank}")
    @Email(message="{user.email.invalid}")
    @Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",message = "Email must be in lowercase")
    private String email;
    @NotBlank(message="{user.password.absent}")
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",message="Password is invalid")
    private String password;
    private AccountType accountType;

    public UserDTO() {}   // IMPORTANT for JSON

    public UserDTO(Long id, String name, String email, String password, AccountType accountType) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
    }

    // ⭐ MANDATORY – Jackson needs getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public AccountType getAccountType() { return accountType; }
    public void setAccountType(AccountType accountType) { this.accountType = accountType; }

    public User toEntity() {
        return new User(id, name, email, password, accountType);
    }
}
