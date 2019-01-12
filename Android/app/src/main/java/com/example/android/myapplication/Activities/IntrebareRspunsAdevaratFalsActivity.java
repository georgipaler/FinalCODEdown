package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.Intrebare;
import com.example.android.myapplication.model.Raspuns;

public class IntrebareRspunsAdevaratFalsActivity extends AppCompatActivity {
    private TextView textIntrebareRaspunsAdevaratFalsTV;
    private Button salveazaIntrebareRaspunsAdevaratFalsBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intrebare_raspuns_adevarat_fals);

        textIntrebareRaspunsAdevaratFalsTV = findViewById(R.id.intrebareRaspunsAdevaratFalsTV);
        salveazaIntrebareRaspunsAdevaratFalsBtn = findViewById(R.id.salveazaIntrebareRaspunsAdevaratFalsBtn);

        Intrebare intrebare = (Intrebare) getIntent().getSerializableExtra("intrebareRaspunsAdevaratFals");
        Raspuns raspuns = new Raspuns();
        raspuns.setIdIntrebare(intrebare.getIdIntrebare());
        textIntrebareRaspunsAdevaratFalsTV.setText(intrebare.getIntrebare());

        salveazaIntrebareRaspunsAdevaratFalsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(IntrebareRspunsAdevaratFalsActivity.this, AdaugaIntrebareActivity.class);
                startActivity(intent);
            }
        });
    }
}
