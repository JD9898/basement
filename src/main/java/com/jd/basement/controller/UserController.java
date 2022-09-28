package com.jd.basement.controller;

import com.jd.basement.model.User;
import com.jd.basement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {
    @Autowired
    private UserRepository customerRepo;

    @GetMapping("/customers")
    public String listAll(Model model) {
        List<User> listCustomers = customerRepo.findAll();
        model.addAttribute("listCustomers", listCustomers);

        return "customers";
    }

}
