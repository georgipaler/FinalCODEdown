package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.example.android.myapplication.R;

public class EchipaActivity extends AppCompatActivity {
    Button feedback;
    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_echipa);
        feedback=findViewById(R.id.feedbackBtn);
        feedback.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(EchipaActivity.this, FeedbackActivity.class);
                startActivity(intent);
            }
        });
    }
}
