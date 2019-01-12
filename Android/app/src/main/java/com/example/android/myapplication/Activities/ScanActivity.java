package com.example.android.myapplication.Activities;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.budiyev.android.codescanner.CodeScanner;
import com.budiyev.android.codescanner.CodeScannerView;
import com.budiyev.android.codescanner.DecodeCallback;
import com.example.android.myapplication.R;
import com.google.zxing.Result;

public class ScanActivity extends AppCompatActivity {

    private CodeScanner mCodeScanner;
    final Activity activity = ScanActivity.this;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scan);

        CodeScannerView scannerView = (CodeScannerView) findViewById(R.id.scanner_view);
        mCodeScanner = new CodeScanner(ScanActivity.this, scannerView);

        mCodeScanner.setDecodeCallback(new DecodeCallback()
        {
            @Override
            public void onDecoded(@NonNull final Result result)
            {
                activity.runOnUiThread(new Runnable()
                {
                    @Override
                    public void run()
                    {
                        Toast.makeText(ScanActivity.this, result.getText(), Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });
        scannerView.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                mCodeScanner.startPreview();
            }
        });
    }

    @Override
    protected void onResume()
    {
        super.onResume();
        mCodeScanner.startPreview();
    }

    @Override
    protected void onPause()
    {
        mCodeScanner.releaseResources();
        super.onPause();
    }

}
