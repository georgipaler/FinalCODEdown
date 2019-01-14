package com.example.android.myapplication.Activities;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.User;

public class MeniuStudentActivity extends AppCompatActivity {
    private TextView  numeUser;
    private Button profilStudentBtn;

    private Button accesareTestBtn;
    private Button raportActivitateBtn;
    private Button echipaBtn;
    private Button deconectareBtn;

    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_meniu_student);

        numeUser= findViewById(R.id.infoText);
        profilStudentBtn = findViewById(R.id.profilStudentBtn);

        accesareTestBtn = findViewById(R.id.accesareTestBtn);
        raportActivitateBtn = findViewById(R.id.raportActivitateBtn);
        echipaBtn = findViewById(R.id.BTNechipa);
        deconectareBtn = findViewById(R.id.deconectareBtn);


        User infoUser = (User) getIntent().getSerializableExtra("userInfo");


        if(infoUser.getNume() != null){
            numeUser.setText(infoUser.getNume());
        }

        profilStudentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MeniuStudentActivity.this, ProfilStudentActivity.class);
                startActivity(intent);
            }
        });


        /*acceseazaTestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MeniuStudentActivity.this, ScanActivity.class));
            }
        });*/

        raportActivitateBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(MeniuStudentActivity.this, RaportStudentActivity.class);
                startActivity(intent);


            }
        });

        echipaBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuStudentActivity.this, EchipaActivity.class);
                startActivity(intent);
            }
        });

        deconectareBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuStudentActivity.this, StartActivity.class);
                startActivity(intent);
            }
        });

    }

    private void requestCameraPermssion(){
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_DENIED) {

        }
    }

}
