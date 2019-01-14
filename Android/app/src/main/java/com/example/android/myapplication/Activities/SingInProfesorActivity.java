package com.example.android.myapplication.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.android.myapplication.R;
import com.google.firebase.FirebaseApp;

public class SingInProfesorActivity extends AppCompatActivity {

  /*  private static final String TAG = "";
    private EditText username;
    private EditText password;

    private Button signInButton;
    private FirebaseAuth firebase;
    private  FirebaseAuth.AuthStateListener mAuthListener;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_in_profesor);
        FirebaseApp.initializeApp(this);
        firebase = FirebaseAuth.getInstance();
        username = findViewById(R.id.edUsr);
        password=findViewById(R.id.edtPass);
        signInButton = findViewById(R.id.logIn);


        mAuthListener = new FirebaseAuth.AuthStateListener() {
            @Override
            public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {

                if(firebaseAuth.getCurrentUser() != null)
                {
                    Intent intent = new Intent(SignInProfesor.this,ProfesorProfileActivity.class );
                    startActivity(intent);
                }

            }
        };

        signInButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startSignIn();
            }
        });
    }

    @Override
    protected void onStart() {
        super.onStart();

        firebase.addAuthStateListener(mAuthListener);
    }

     /*public void signInOnClick(View view)
    {
        Intent intent = new Intent(SignInProfesor.this,ProfesorProfileActivity.class );
        startActivity(intent);
    }*/

   /* private void startSignIn()

    {
        String email = username.getText().toString();
        String pass = password.getText().toString();

        if(TextUtils.isEmpty(email) || TextUtils.isEmpty(pass)) {

            Toast.makeText(SignInProfesor.this, "Fields are empty", Toast.LENGTH_LONG).show();
        }else
        {
            firebase.signInWithEmailAndPassword(email, pass).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                @Override
                public void onComplete(@NonNull Task<AuthResult> task) {
                    if (!task.isSuccessful()) {
                        Log.e(TAG, "onComplete: Failed=" + task.getException().getMessage());
                        Toast.makeText(SignInProfesor.this, "Sign in problem", Toast.LENGTH_LONG).show();
                    }

                }
            });
        }

    }
*/




}
