package com.example.android.myapplication.Activities;

import android.app.Activity;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

import com.example.android.myapplication.Adapters.UtilizatoriRecyclerAdapter;
import com.example.android.myapplication.R;
import com.example.android.myapplication.model.User;

import java.util.ArrayList;
import java.util.List;

public class ListaUtilizatoriActivity extends AppCompatActivity {

    private AppCompatActivity activity = ListaUtilizatoriActivity.this;
    private RecyclerView recyclerViewUsers;

    private UtilizatoriRecyclerAdapter utilizatoriRecyclerAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_utilizatori);

        recyclerViewUsers = findViewById(R.id.utilizatoriRV);

        //listUsers = new ArrayList<>();
        utilizatoriRecyclerAdapter = new UtilizatoriRecyclerAdapter(AdaugareUserActivity.listUsers);

        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerViewUsers.setLayoutManager(mLayoutManager);
        recyclerViewUsers.setAdapter(utilizatoriRecyclerAdapter);
    }
}
