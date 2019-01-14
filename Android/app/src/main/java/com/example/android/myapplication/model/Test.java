package com.example.android.myapplication.model;

import java.io.Serializable;

public class Test implements Serializable {
    private int idTest;
    private String numeTest;
    private String materie;
    private int id_profesor;

    public Test() {

    }

    public Test(int idTest, String numeTest, String materie, int id_profesor) {
        this.idTest = idTest;
        this.numeTest = numeTest;
        this.materie = materie;
        this.id_profesor=id_profesor;
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

    public int getId_profesor() {
        return id_profesor;
    }

    public void setId_profesor(int id_profesor) {
        this.id_profesor = id_profesor;
    }

    @Override
    public String toString() {
        return "Test{" +
                "idTest=" + idTest +
                ", numeTest='" + numeTest + '\'' +
                ", materie='" + materie + '\'' +
                ", id_profesor=" + id_profesor +
                '}';
    }
}
