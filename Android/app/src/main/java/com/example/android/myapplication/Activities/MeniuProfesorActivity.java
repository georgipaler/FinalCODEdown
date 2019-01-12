package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.example.android.myapplication.R;

public class MeniuProfesorActivity extends AppCompatActivity {
    private Button testeProfesorBtn;
    private Button creeazaTestNouBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_meniu_profesor);

        testeProfesorBtn = findViewById(R.id.testeProfesorBtn);
        creeazaTestNouBtn = findViewById(R.id.creeazaTestNouBtn);

        testeProfesorBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuProfesorActivity.this, ListaTesteProfesorActivity.class);
                startActivity(intent);
            }
        });

        creeazaTestNouBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuProfesorActivity.this, CreeazaTestNouActivity.class);
                startActivity(intent);
            }
        });
    }
}
