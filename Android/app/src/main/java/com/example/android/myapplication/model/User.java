package com.example.android.myapplication.model;

import com.example.android.myapplication.util.AnStudent;

import java.io.Serializable;
import java.util.Date;



public class User implements Serializable {
    private int id;
    private String profil;
    private String username;
    private String password;
    private String nume;
    private String materie;
    private int grupa;
    private String anStudent;
    private String specializare;

    public User() {
    }

    public User(String profil, String username, String password, String nume, String materie, int grupa,String anStudent, String specializare) {
        this.profil = profil;
        this.username = username;
        this.password = password;
        this.nume = nume;
        this.materie = materie;
        this.grupa = grupa;
        this.anStudent = anStudent;
        this.specializare = specializare;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProfil() {
        return profil;
    }

    public void setProfil(String profil) {
        this.profil = profil;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getMaterie() {
        return materie;
    }

    public void setMaterie(String materie) {
        this.materie = materie;
    }

    public int getGrupa() {
        return grupa;
    }

    public void setGrupa(int grupa) {
        this.grupa = grupa;
    }

    public String getAnStudent() {
        return anStudent;
    }

    public void setAnStudent(String anStudent) {
        this.anStudent = anStudent;
    }

    public String getSpecializare() {
        return specializare;
    }

    public void setSpecializare(String specializare) {
        this.specializare = specializare;
    }

    @Override
    public String toString() {
        return "User{" +
                "profil='" + profil + '\'' +
                ", nume='" + nume + '\'' +
                ", materie='" + materie + '\'' +
                '}';
    }

}
