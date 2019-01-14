package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;

import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import com.example.android.myapplication.R;
import com.example.android.myapplication.dataSource.PunctajeDataSource;
import com.example.android.myapplication.dataSource.TestDataSource;
import com.example.android.myapplication.dbHelper.PunctajeDBHelper;
import com.example.android.myapplication.model.Punctaj;
import com.example.android.myapplication.model.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class ListaTesteProfesorActivity extends AppCompatActivity {



    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_teste_profesor);



    }
}
