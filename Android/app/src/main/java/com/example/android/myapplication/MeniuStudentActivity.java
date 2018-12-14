package com.example.android.myapplication;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.android.myapplication.model.User;

public class MeniuStudentActivity extends AppCompatActivity {
    private Button acceseazaTestBtn, deconecteazaBtn, feedbackBtn;
    private TextView  numeUser;

    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_meniu_student);
        User infoUser = (User) getIntent().getSerializableExtra("userInfo");
        numeUser= findViewById(R.id.infoText);

        if(infoUser.getNume() != null){
            numeUser.setText(infoUser.getNume());
        }

        acceseazaTestBtn = findViewById(R.id.acceseazatestBtn);
        deconecteazaBtn = findViewById(R.id.deconectare);
        feedbackBtn = findViewById(R.id.feedbackBtn);
        /*acceseazaTestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MeniuStudentActivity.this, ScanActivity.class));
            }
        });*/
        deconecteazaBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuStudentActivity.this, StudentLoginActivity.class);
                startActivity(intent);
            }
        });
        feedbackBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MeniuStudentActivity.this, FeedbackActivity.class);
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
