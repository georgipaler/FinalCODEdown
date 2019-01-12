package com.example.android.myapplication.model;

import java.io.Serializable;

public class Intrebare implements Serializable {
    private int idIntrebare;
    private int idTest;
    private String intrebare;
    private String tipIntrebare;

    public Intrebare() {

    }

    public Intrebare(int idIntrebare, int idTest, String intrebare, String tipIntrebare) {
        this.idIntrebare = idIntrebare;
        this.idTest = idTest;
        this.intrebare = intrebare;
        this.tipIntrebare = tipIntrebare;
    }

    public int getIdIntrebare() {
        return idIntrebare;
    }

    public void setIdIntrebare(int idIntrebare) {
        this.idIntrebare = idIntrebare;
    }

    public int getIdTest() {
        return idTest;
    }

    public void setIdTest(int idTest) {
        this.idTest = idTest;
    }

    public String getIntrebare() {
        return intrebare;
    }

    public void setIntrebare(String intrebare) {
        this.intrebare = intrebare;
    }

    public String getTipIntrebare() {
        return tipIntrebare;
    }

    public void setTipIntrebare(String tipIntrebare) {
        this.tipIntrebare = tipIntrebare;
    }

    @Override
    public String toString() {
        return "Intrebare{" +
                "idIntrebare=" + idIntrebare +
                ", idTest=" + idTest +
                ", intrebare='" + intrebare + '\'' +
                ", tipIntrebare='" + tipIntrebare + '\'' +
                '}';
    }
}