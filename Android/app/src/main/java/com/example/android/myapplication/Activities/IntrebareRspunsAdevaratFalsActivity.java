package com.example.android.myapplication.Activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import com.example.android.myapplication.R;

public class IntrebareRspunsAdevaratFalsActivity extends AppCompatActivity {
    TextView textIntrebareRaspunsAdevaratFalsTV;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intrebare_raspuns_adevarat_fals);

        textIntrebareRaspunsAdevaratFalsTV = findViewById(R.id.intrebareRaspunsAdevaratFalsTV);

        String intrebare = (String) getIntent().getSerializableExtra("numeIntrebare");
        textIntrebareRaspunsAdevaratFalsTV.setText(intrebare);
    }
}
