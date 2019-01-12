package com.example.android.myapplication.Activities;

import android.os.Bundle;

import android.support.v7.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.Test;

import java.util.ArrayList;
import java.util.List;

public class ListaTesteProfesorActivity extends AppCompatActivity {
    public static List<String> listaTeste = new ArrayList<>();
    private ListView listaTesteLV;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_teste_profesor);
        ArrayAdapter<String> testeArrayAdapter = new ArrayAdapter<String>(getApplicationContext(),R.layout.row_lista_teste_profesor,R.id.rowlistaTest,listaTeste);
        listaTesteLV = findViewById(R.id.testeProfesorLV);
        listaTesteLV.setAdapter(testeArrayAdapter);

    }
}
