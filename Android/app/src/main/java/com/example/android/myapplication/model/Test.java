package com.example.android.myapplication.model;

import java.io.Serializable;

public class Test implements Serializable {
    private int idTest;
    private String numeTest;
    private String materie;

    public Test() {

    }

    public Test(int idTest, String numeTest, String materie) {
        this.idTest = idTest;
        this.numeTest = numeTest;
        this.materie = materie;
    }

    public int getIdTest() {
        return idTest;
    }

    public void setIdTest(int idTest) {
        this.idTest = idTest;
    }

    public String getNumeTest() {
        return numeTest;
    }

    public void setNumeTest(String numeTest) {
        this.numeTest = numeTest;
    }

    public String getMaterie() {
        return materie;
    }

    public void setMaterie(String materie) {
        this.materie = materie;
    }

    @Override
    public String toString() {
        return "Test{" +
                "idTest=" + idTest +
                ", numeTest='" + numeTest + '\'' +
                ", materie='" + materie + '\'' +
                '}';
    }
}
