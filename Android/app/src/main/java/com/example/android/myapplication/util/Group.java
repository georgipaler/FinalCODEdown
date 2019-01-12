package com.example.android.myapplication.util;

import java.util.ArrayList;
import java.util.List;

public class Group {
    public String string;
    public final List<String> children = new ArrayList<String>();

    private List<String>  listaRaspunsuri = new ArrayList<>();

    public Group(String string) {
        this.string = string;
    }

    public Group(){

    }

    public List<String> getListaRaspunsuri() {
        return listaRaspunsuri;
    }

    public void setListaRaspunsuri(List<String> listaRaspunsuri) {
        this.listaRaspunsuri = listaRaspunsuri;
    }
}
