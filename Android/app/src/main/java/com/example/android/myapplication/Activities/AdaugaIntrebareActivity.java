package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.Intrebare;
import com.example.android.myapplication.model.Test;

import static com.example.android.myapplication.Activities.ListaTesteProfesorActivity.listaTeste;

public class AdaugaIntrebareActivity extends AppCompatActivity {
    private EditText adaugaIntrebareNouaED;
    private Spinner alegeVariantaRaspunsSP;
    private Button adaugaraspunsBtn;
    private Button salveazaTestBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_adauga_intrebare);

        adaugaIntrebareNouaED = findViewById(R.id.adaugaIntrebareNouaED);
        alegeVariantaRaspunsSP = findViewById(R.id.alegeVariantaRaspunsSP);
        adaugaraspunsBtn = findViewById(R.id.adaugaRaspunsBtn);
        salveazaTestBtn  = findViewById(R.id.salveazaTestBtn);

        final Test test = (Test) getIntent().getSerializableExtra("testNou");
        // sa  stii ce valoare este selectata in spinner
        // categorieRaspunsSelectat = este egal cu textul de la pozitia selectata
        adaugaraspunsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intrebare intrebare = new Intrebare();

                //intrebare.setIdTest(test.getIdTest());
                intrebare.setIdTest(1);

                if (!adaugaIntrebareNouaED.getText().toString().equals("")) {
                    intrebare.setIntrebare(adaugaIntrebareNouaED.getText().toString());
                    String categorieRaspunsSelectat = alegeVariantaRaspunsSP.getSelectedItem().toString();
                    // de verificat daca este ok itemul selectat si Raspuns Multiplu
                    if (categorieRaspunsSelectat.equals("Raspuns multiplu")) {
                        Intent intent = new Intent(AdaugaIntrebareActivity.this, IntrebareRaspunsMultipluActivity.class);
                        intrebare.setTipIntrebare(categorieRaspunsSelectat);
                        intrebare.setIdIntrebare(3);
                        intent.putExtra("intrebareRaspunsMultiplu", intrebare);
                        startActivity(intent);
                    } else if (categorieRaspunsSelectat.equals("Raspuns adevarat/fals")) {
                        Intent intent = new Intent(AdaugaIntrebareActivity.this, IntrebareRspunsAdevaratFalsActivity.class);
                        intrebare.setTipIntrebare(categorieRaspunsSelectat);
                        intrebare.setIdIntrebare(2);
                        intent.putExtra("intrebareRaspunsAdevaratFals", intrebare);
                        startActivity(intent);
                    } else if (categorieRaspunsSelectat.equals("Raspuns scurt")) {
                        Intent intent = new Intent(AdaugaIntrebareActivity.this, IntrebareRaspunsScurtActivity.class);
                        intrebare.setTipIntrebare(categorieRaspunsSelectat);
                        intrebare.setIdIntrebare(1);
                        intent.putExtra("intrebareRaspunsScurt", intrebare);
                        startActivity(intent);
                    }
                } else {
                    adaugaIntrebareNouaED.setError("Introduceti intrebarea!");

                }
            }
        });

        salveazaTestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                listaTeste.add( "re");
                Intent intent = new Intent(AdaugaIntrebareActivity.this, ListaTesteProfesorActivity.class);
                startActivity(intent);
            }
        });
    }
}
