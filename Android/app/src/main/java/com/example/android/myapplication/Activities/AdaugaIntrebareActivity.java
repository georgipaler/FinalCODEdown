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

public class AdaugaIntrebareActivity extends AppCompatActivity {
    private EditText adaugaIntrebareNouaED;
    private Spinner alegeVariantaRaspunsSP;
    private Button adaugaraspunsBtn;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_adauga_intrebare);

        adaugaIntrebareNouaED = findViewById(R.id.adaugaIntrebareNouaED);
        alegeVariantaRaspunsSP = findViewById(R.id.alegeVariantaRaspunsSP);
        adaugaraspunsBtn = findViewById(R.id.adaugaRaspunsBtn);

        // sa  stii ce valoare este selectata in spinner
        // categorieRaspunsSelectat = este egal cu textul de la pozitia selectata
        adaugaraspunsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Test test = (Test) getIntent().getSerializableExtra("testNou");
                Intrebare intrebare = new Intrebare();


                //intrebare.setIdTest(test.getIdTest());
                intrebare.setIdTest(1);


                if (!adaugaIntrebareNouaED.getText().toString().equals("")) {
                    intrebare.setIntrebare(adaugaIntrebareNouaED.getText().toString());
                    String categorieRaspunsSelectat = alegeVariantaRaspunsSP.getSelectedItem().toString();
                    // de verificat daca este ok itemul selectat si Raspuns Multiplu
                    if (categorieRaspunsSelectat.equals("Raspuns multiplu")) {
                        Intent intent = new Intent(AdaugaIntrebareActivity.this, IntrebareRaspunsMultipluActivity.class);
                        intent.putExtra("numeIntrebare", adaugaIntrebareNouaED.getText().toString());
                        startActivity(intent);
                    } else if (categorieRaspunsSelectat.equals("Raspuns adevarat/fals")) {
                        Intent intent = new Intent(AdaugaIntrebareActivity.this, IntrebareRspunsAdevaratFalsActivity.class);
                        intent.putExtra("numeIntrebare", adaugaIntrebareNouaED.getText().toString());
                        startActivity(intent);
                    } else if (categorieRaspunsSelectat.equals("Raspuns scurt")) {
                        Intent intent = new Intent(AdaugaIntrebareActivity.this, IntrebareRaspunsScurtActivity.class);
                        intrebare.setTipIntrebare(categorieRaspunsSelectat);
                        intrebare.setIdIntrebare(1);

                        intent.putExtra("intrebare", intrebare);
                        startActivity(intent);

                    }
                } else {
                    adaugaIntrebareNouaED.setError("Introduceti intrebarea!");

                }
            }
        });
    }
}
