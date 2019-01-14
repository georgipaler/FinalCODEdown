package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Toast;

import com.example.android.myapplication.R;
import com.example.android.myapplication.dataSource.PunctajeDataSource;
import com.example.android.myapplication.dataSource.TestDataSource;
import com.example.android.myapplication.model.Punctaj;
import com.example.android.myapplication.model.Test;

import java.util.ArrayList;

public class ListaStudentiTestActivity extends AppCompatActivity {

    //PunctajeDataSource punctajeDataSource;
    //TestDataSource testDataSource;
    //ArrayAdapter<String> adapter;
    Button BTNgenerareLista;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_studenti_test);

        /*
        Punctaj punctaj1=new Punctaj(1,1,1,5,1);
        Punctaj punctaj2=new Punctaj(2,1,2,5,2);
        Punctaj punctaj3=new Punctaj(3,1,3,5,3);

        Punctaj punctaj4=new Punctaj(4,2,1,3,3);
        Punctaj punctaj5=new Punctaj(5,2,1,3,2);

        Punctaj punctaj6=new Punctaj(1,3,1,5,1);
        Punctaj punctaj7=new Punctaj(2,3,2,5,2);
        Punctaj punctaj8=new Punctaj(3,3,3,5,3);

        punctajeDataSource.adaugaPunctaj(punctaj1);
        punctajeDataSource.adaugaPunctaj(punctaj2);
        punctajeDataSource.adaugaPunctaj(punctaj3);
        punctajeDataSource.adaugaPunctaj(punctaj4);
        punctajeDataSource.adaugaPunctaj(punctaj5);
        punctajeDataSource.adaugaPunctaj(punctaj6);
        punctajeDataSource.adaugaPunctaj(punctaj7);
        punctajeDataSource.adaugaPunctaj(punctaj8);

        Test test1=new Test(1,"Pointeri","POO",4);
        Test test2=new Test(2,"Maps","POO",4);
        Test test3=new Test(3,"Ceva","JAVA",5);

        testDataSource.adaugaTest(test1);
        testDataSource.adaugaTest(test2);
        testDataSource.adaugaTest(test3);


        final ArrayList<Punctaj> listItems=punctajeDataSource.getPunctaje_byTEST(1);

        // lista=findViewById(R.id.LVListaStudenti);


        //adapter=new ArrayAdapter<String>(this,
        //android.R.layout.simple_list_item_1, listItems);
        //setListAdapter(adapter);

        */
        BTNgenerareLista=findViewById(R.id.BTNafiseazaListaSTUDENTI);

        BTNgenerareLista.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(ListaStudentiTestActivity.this, AfisareListaActivity.class);
               // intent.putExtra("listaStudenti", listItems)
                startActivity(intent);
            }
        });
    }
}
