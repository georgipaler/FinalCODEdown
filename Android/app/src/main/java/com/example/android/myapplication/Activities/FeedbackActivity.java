package com.example.android.myapplication.Activities;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.android.myapplication.R;

public class FeedbackActivity extends AppCompatActivity {
    private Button buton;
    private EditText parere;
    private String parereFeedback;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_feedback);

        buton= findViewById(R.id.BTNsalveazaFeedback);
        buton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //aici pastrez INTR-O VARIABILA ceea ce studentul a scris
                //NU AM PASTRAT IN BAZA DE DATE
                parere=findViewById(R.id.ETparereFeedback);
                parereFeedback=parere.getText().toString();

                //Afisez mesaj si ma intorc la meniul principal
                Toast.makeText(getApplicationContext(), "Multumim pentru feedback!", Toast.LENGTH_SHORT).show();
                finish();

            }
        });

    }
}
