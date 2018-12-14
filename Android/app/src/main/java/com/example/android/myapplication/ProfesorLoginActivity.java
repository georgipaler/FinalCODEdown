package com.example.android.myapplication;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class ProfesorLoginActivity extends AppCompatActivity {
    Button loginProfesor;
    EditText usernameProfesor;
    EditText passwordProfesor;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_profesor);

        loginProfesor = findViewById(R.id.btnLoginProfesor);
        usernameProfesor = findViewById(R.id.usernameProfesor);
        passwordProfesor = findViewById(R.id.passwordProfesor);

        loginProfesor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(usernameProfesor.getText().toString().equals("prof") &&
                        passwordProfesor.getText().toString().equals("12345")) {
                    Toast.makeText(getApplicationContext(), "Ok...", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(ProfesorLoginActivity.this, TestProfesorActivity.class);
                    startActivity(intent);
                }
                else {
                    Toast.makeText(getApplicationContext(), "Something wrong...", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

}
