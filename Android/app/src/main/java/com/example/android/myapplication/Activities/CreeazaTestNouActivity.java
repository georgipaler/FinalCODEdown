package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.android.myapplication.R;
import com.example.android.myapplication.model.Test;

public class CreeazaTestNouActivity extends AppCompatActivity {
    private Button adaugaIntrebareNouaBtn;
    private EditText numeTestET;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_creeaza_test_nou);

        adaugaIntrebareNouaBtn = findViewById(R.id.adaugaIntrebareNouaBtn);
        numeTestET = findViewById(R.id.numeTestET);

        adaugaIntrebareNouaBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(!numeTestET.getText().toString().equals("")){
                    Test test = new Test();
                    test.setNumeTest(numeTestET.getText().toString());
                    test.setMaterie("TestMaterie");
                    // salvare in bd
                    test.setIdTest(30);
                    Intent intent = new Intent(CreeazaTestNouActivity.this, AdaugaIntrebareActivity.class);
                    intent.putExtra("testNou", test);
                    startActivity(intent);
                }else{
                    //Toast.makeText(getApplicationContext(),"Numele testului este obligatoriu", Toast.LENGTH_LONG).show();
                    numeTestET.setError("Introduceti numele testului");

                }

            }
        });
    }
}
