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

public class IntrebareRaspunsScurtActivity extends AppCompatActivity {
    private TextView textIntrebareRaspunsScurtTV;
    private Button salveazaIntrebareRaspunsScurtBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intrebare_raspuns_scurt);

        textIntrebareRaspunsScurtTV = findViewById(R.id.intrebareRaspunsScurtTV);
        salveazaIntrebareRaspunsScurtBtn = findViewById(R.id.salveazaIntrebareRaspunsScurtBtn);

        Intrebare intrebare = (Intrebare) getIntent().getSerializableExtra("intrebareRaspunsScurt");
        Raspuns raspuns = new Raspuns();
        raspuns.setIdIntrebare(intrebare.getIdIntrebare());
        textIntrebareRaspunsScurtTV.setText(intrebare.getIntrebare());

        salveazaIntrebareRaspunsScurtBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(IntrebareRaspunsScurtActivity.this, AdaugaIntrebareActivity.class);
                startActivity(intent);
            }
        });
    }
}
