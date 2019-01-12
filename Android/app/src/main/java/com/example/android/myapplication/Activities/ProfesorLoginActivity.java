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

public class ProfesorLoginActivity extends AppCompatActivity {
    Button loginProfesor;
    EditText usernameProfesor;
    EditText passwordProfesor;

    private CheckBox rememberCheckBox;
    private UserDataSource userDataSource;
    boolean result;

    public static final String PREFS_NAME = "myPrefsFileProfesor";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_profesor);

        userDataSource = new UserDataSource(this);
        userDataSource.openDB();
        final SharedPreferences settings = getSharedPreferences(PREFS_NAME, 0);

        loginProfesor = findViewById(R.id.btnLoginProfesor);
        usernameProfesor = findViewById(R.id.usernameProfesor);
        passwordProfesor = findViewById(R.id.passwordProfesor);
        rememberCheckBox = findViewById(R.id.cbRemember);

        usernameProfesor.setText(settings.getString("usernameProfesor", ""));
        passwordProfesor.setText(settings.getString("passwordProfesor", ""));



        loginProfesor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                result = userDataSource.checkUser(usernameProfesor.getText().toString(), passwordProfesor.getText().toString());
                if (result) {
                    SharedPreferences.Editor editor = settings.edit();
                    editor.putString("usernameProfesor", usernameProfesor.getText().toString());
                    editor.putString("passwordProfesor", passwordProfesor.getText().toString());
                    editor.apply();

                    Intent intent = new Intent(ProfesorLoginActivity.this, MeniuProfesorActivity.class);
                    User userinfo = userDataSource.infoUser(usernameProfesor.getText().toString());
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


               /* if(usernameProfesor.getText().toString().equals("prof") &&
                        passwordProfesor.getText().toString().equals("12345")) {
                    Toast.makeText(getApplicationContext(), "Ok", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(ProfesorLoginActivity.this, MeniuProfesorActivity.class);
                    startActivity(intent);
                }
                else {
                    Toast.makeText(getApplicationContext(), "Something wrong", Toast.LENGTH_SHORT).show();
                }
            }*/
        });
    }

}
