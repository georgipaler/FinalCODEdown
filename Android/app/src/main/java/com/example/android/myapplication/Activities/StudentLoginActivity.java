package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import com.example.android.myapplication.R;
import com.example.android.myapplication.dataSource.UserDataSource;
import com.example.android.myapplication.model.User;

public class StudentLoginActivity extends AppCompatActivity {
    private EditText usernameStudent;
    private EditText passwordStudent;
    private Button loginStudent;

    private CheckBox rememberCheckBox;
    private UserDataSource userDataSource;
    boolean result;

    public static final String PREFS_NAME = "myPrefsFileStudent";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_student);
        userDataSource = new UserDataSource(this);
        userDataSource.openDB();
        final SharedPreferences settings = getSharedPreferences(PREFS_NAME, 0);

        loginStudent = findViewById(R.id.btnLoginStudent);
        usernameStudent= findViewById(R.id.usernameStudent);
        passwordStudent = findViewById(R.id.passwordStudent);
        rememberCheckBox = findViewById(R.id.cbRemember);

        usernameStudent.setText(settings.getString("usernameStudent", ""));
        passwordStudent.setText(settings.getString("passwordStudent", ""));




        loginStudent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                result = userDataSource.checkUser(usernameStudent.getText().toString(), passwordStudent.getText().toString());
                if (result) {
                    SharedPreferences.Editor editor = settings.edit();
                    editor.putString("usernameStudent", usernameStudent.getText().toString());
                    editor.putString("passwordStudent", passwordStudent.getText().toString());
                    editor.apply();

                    Intent intent = new Intent(StudentLoginActivity.this, MeniuStudentActivity.class);
                    User userinfo = userDataSource.infoUser(usernameStudent.getText().toString());
                    intent.putExtra("userInfo", userinfo);
                    startActivity(intent);
                    Toast.makeText(getApplicationContext(), "Success!", Toast.LENGTH_SHORT).show();


                    if (result) {
                        rememberCheckBox.setChecked(true);
                    }


                } else {
                    Toast.makeText(getApplicationContext(), "User/Password wrong!", Toast.LENGTH_SHORT).show();
                }

            }
        });

    }

}
