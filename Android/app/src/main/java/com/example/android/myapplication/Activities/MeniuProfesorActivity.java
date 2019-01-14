package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.User;

public class MeniuProfesorActivity extends AppCompatActivity {

    private Button profilProfesorBtn;
    private Button testeProfesorBtn;
    private Button creeazaTestNouBtn;
    private Button rapoarteTesteBTN;
    private Button echipaBtn;
    private Button deconectareBtn;
    private TextView numeUser;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_meniu_profesor);
        profilProfesorBtn = findViewById(R.id.BTNprofilProfesor);
        testeProfesorBtn = findViewById(R.id.testeProfesorBtn);
        creeazaTestNouBtn = findViewById(R.id.creeazaTestNouBtn);
        rapoarteTesteBTN = findViewById(R.id.BTNrapoarte);
        echipaBtn = findViewById(R.id.BTNechipa);
        deconectareBtn = findViewById(R.id.deconectareBtn);

        numeUser= findViewById(R.id.infoText);
        User infoUser = (User) getIntent().getSerializableExtra("userInfo");


        if(infoUser.getNume() != null){
            numeUser.setText(infoUser.getNume());
        }

        profilProfesorBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MeniuProfesorActivity.this, ProfilProfesorActivity.class);
                startActivity(intent);
            }
        });
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
   

     
        rapoarteTesteBTN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuProfesorActivity.this, ListaStudentiTestActivity.class);
                startActivity(intent);
            }
        });

        echipaBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuProfesorActivity.this, EchipaActivity.class);
                startActivity(intent);
            }
        });

        deconectareBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuProfesorActivity.this, StartActivity.class);
                startActivity(intent);
            }
        });


    }
}
