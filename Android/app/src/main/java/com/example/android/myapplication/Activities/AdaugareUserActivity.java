package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.User;

import java.util.ArrayList;
import java.util.List;

public class AdaugareUserActivity extends AppCompatActivity {
    private Button adaugareUserBtn, utilizatoriBtn;
    private EditText numeET, usernameET, passwordET;
    private Spinner profilSpinner, specializareSpinner, anSpinner, grupaSpinner;

    public static List<User> listUsers = new ArrayList<>();


    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_adaugare_user);

        adaugareUserBtn = findViewById(R.id.adaugareUserBtn);
        utilizatoriBtn = findViewById(R.id.utilizatoriBtn);

        numeET = findViewById(R.id.numeNouET);
        usernameET = findViewById(R.id.usernameNouET);
        passwordET = findViewById(R.id.passwordNouET);

        profilSpinner = findViewById(R.id.profilSpinner);
        specializareSpinner = findViewById(R.id.specializareSpinner);
        anSpinner = findViewById(R.id.anSpinner);
        grupaSpinner = findViewById(R.id.grupaSpinner);

        adaugareUserBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                 boolean result  =  validariCampuri();
                 if(result){
                     User userNou = new User();
                     // setarea informatiilor din EditTexte
                     userNou.setNume(numeET.getText().toString());
                     userNou.setUsername(usernameET.getText().toString());
                     userNou.setPassword(passwordET.getText().toString());

                     userNou.setProfil(profilSpinner.getSelectedItem().toString());
                     userNou.setSpecializare(specializareSpinner.getSelectedItem().toString());
                     userNou.setAnStudent(anSpinner.getSelectedItem().toString());
                     userNou.setGrupa(Integer.parseInt(grupaSpinner.getSelectedItem().toString()));

                     listUsers.add(userNou);

                     Toast.makeText(getApplicationContext(), "User adaugat cu succes!", Toast.LENGTH_LONG).show();
                 }
                //Toast.makeText(getApplicationContext(), "Users "+ listUsers.size(), Toast.LENGTH_LONG).show();

            }
        });

        utilizatoriBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(AdaugareUserActivity.this, ListaUtilizatoriActivity.class);
                startActivity(intent);
            }
        });
    }

    boolean validariCampuri() {
        boolean result = true;
        // todo Spinner!!!
        if(numeET.getText().toString().equals("")){
            numeET.setError("Completati numele!");
            result = false;
        }else if(usernameET.getText().toString().equals("")){
            usernameET.setError("Completati username!");
            result = false;
        }else if(passwordET.getText().toString().equals("")){
            passwordET.setError("Completati pass!");
            result = false;
        }
        return result;
    }

}
