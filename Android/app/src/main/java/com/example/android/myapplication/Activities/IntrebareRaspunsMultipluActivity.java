package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

import com.example.android.myapplication.R;

public class IntrebareRaspunsMultipluActivity extends AppCompatActivity {
    private TextView textIntrebareRaspunsMultiplu;
    private FloatingActionButton adaugaRaspunsNou;
    private Button salveazaIntrebare;

    private LinearLayout raspunsuriLinearLayout;
 //   private LinearLayout rowLinearLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intrebare_raspuns_multiplu);

        textIntrebareRaspunsMultiplu = findViewById(R.id.intrebareRaspunsMultipluTV);
        adaugaRaspunsNou = findViewById(R.id.adaugaVariantaRaspunsFAB);
        salveazaIntrebare = findViewById(R.id.salveazaIntrebareRaspunsMultipluBtn);

        raspunsuriLinearLayout = findViewById(R.id.raspunsLL);
       // rowLinearLayout = findViewById(R.id.rowLL);

        String intrebare = (String) getIntent().getSerializableExtra("numeIntrebare");
        textIntrebareRaspunsMultiplu.setText(intrebare);

        adaugaRaspunsNou.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                CheckBox checkBox = new CheckBox(getApplicationContext());
                EditText variantaRaspuns = new EditText(getApplicationContext());
                variantaRaspuns.setHint("Varianta raspuns");
                //variantaRaspuns.setRight(Integer.parseInt(String.valueOf(variantaRaspuns)));
                raspunsuriLinearLayout.addView(checkBox);
                raspunsuriLinearLayout.addView(variantaRaspuns);
                //rowLinearLayout.addView(checkBox);
                //rowLinearLayout.addView(variantaRaspuns);

            }
        });
        salveazaIntrebare.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(IntrebareRaspunsMultipluActivity.this, AdaugaIntrebareActivity.class);
                startActivity(intent);
            }
        });
    }
}
