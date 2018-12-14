package com.example.android.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.android.myapplication.dataSource.UserDataSource;
import com.example.android.myapplication.model.User;
import com.example.android.myapplication.util.AnStudent;

public class StartActivity extends AppCompatActivity {
    private Button profesor;
    private Button student;
    private UserDataSource userDataSource;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start);
        userDataSource = new UserDataSource(this);
        userDataSource.openDB();

        // todo test addUser in bd
        User user = new User("student", "stud", "123", "Otilia", null,
                1001,AnStudent.anul1.toString(),null);
        userDataSource.adaugaUser(user);

        profesor = findViewById(R.id.profesorBtn);
        student = findViewById(R.id.studentBtn);

        profesor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(StartActivity.this, ProfesorLoginActivity.class));
            }
        });

        student.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(StartActivity.this, StudentLoginActivity.class));
            }
        });
    }
}
