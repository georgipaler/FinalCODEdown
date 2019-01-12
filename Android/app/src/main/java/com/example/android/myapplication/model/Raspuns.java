package com.example.android.myapplication.model;

import java.io.Serializable;

public class Raspuns implements Serializable {
    private int idRaspuns;
    private int idIntrebare;
    private String raspuns;
    private boolean corect;

    public Raspuns() {

    }

    public Raspuns(int idRaspuns, int idIntrebare, String raspuns, boolean corect) {
        this.idRaspuns = idRaspuns;
        this.idIntrebare = idIntrebare;
        this.raspuns = raspuns;
        this.corect = corect;
    }

    public int getIdRaspuns() {
        return idRaspuns;
    }

    public void setIdRaspuns(int idRaspuns) {
        this.idRaspuns = idRaspuns;
    }

    public int getIdIntrebare() {
        return idIntrebare;
    }

    public void setIdIntrebare(int idIntrebare) {
        this.idIntrebare = idIntrebare;
    }

    public String getRaspuns() {
        return raspuns;
    }

    public void setRaspuns(String raspuns) {
        this.raspuns = raspuns;
    }

    public boolean isCorect() {
        return corect;
    }

    public void setCorect(boolean corect) {
        this.corect = corect;
    }


    @Override
    public String toString() {
        return "Raspuns{" +
                "idRaspuns=" + idRaspuns +
                ", idIntrebare=" + idIntrebare +
                ", raspuns='" + raspuns + '\'' +
                ", corect=" + corect +
                '}';
    }
}
