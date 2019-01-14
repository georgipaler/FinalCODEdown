package com.example.android.myapplication.Activities;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.android.myapplication.R;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class AfisareListaActivity extends AppCompatActivity {

    TextView numeTV;
    TextView punctajTV;
    Button salveazaPDF;
    LinearLayout savingLayout;
    //private ArrayList<Punctaj> listaFinala;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_studenti_teste_2);

 /*       Punctaj punctaj1 = new Punctaj(1, 1, 1, 5, 1);
        Punctaj punctaj2 = new Punctaj(2, 1, 2, 5, 2);
        Punctaj punctaj3 = new Punctaj(3, 1, 3, 5, 3);

        Punctaj punctaj4 = new Punctaj(4, 2, 1, 3, 3);
        Punctaj punctaj5 = new Punctaj(5, 2, 1, 3, 2);

        Punctaj punctaj6 = new Punctaj(1, 3, 1, 5, 1);
        Punctaj punctaj7 = new Punctaj(2, 3, 2, 5, 2);
        Punctaj punctaj8 = new Punctaj(3, 3, 3, 5, 3);
        listaFinala.add(punctaj1);
        listaFinala.add(punctaj2);
        listaFinala.add(punctaj3);
        listaFinala.add(punctaj4);
        listaFinala.add(punctaj5);
        listaFinala.add(punctaj6);
        listaFinala.add(punctaj7);
        listaFinala.add(punctaj8);

        Test test1=new Test(1,"Pointeri","POO",4);
        Test test2=new Test(2,"Maps","POO",4);
        Test test3=new Test(3,"Ceva","JAVA",5);
*/
        numeTV=findViewById(R.id.numeTV);
        punctajTV=findViewById(R.id.punctajTV);

        numeTV.setText("Pana Madalina");
        punctajTV.setText("90%");


        salveazaPDF=findViewById(R.id.BTNpdf);
        salveazaPDF.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Toast.makeText(AfisareListaActivity.this, "Image generate successfully!", Toast.LENGTH_SHORT).show();

                savingLayout = findViewById(R.id.printLayout);

                //File file = saveBitMap(AfisareListaActivity.this, savingLayout);
                // convert view group to bitmap
               /* layout.setDrawingCacheEnabled(true);
                layout.buildDrawingCache();
                Bitmap bm = layout.getDrawingCache();
                Intent share = new Intent(Intent.ACTION_SEND);
                share.setType("image/jpeg");
                ByteArrayOutputStream bytes = new ByteArrayOutputStream();
                bm.compress(Bitmap.CompressFormat.JPEG, 100, bytes);

                File f = new File(Environment.getExternalStorageDirectory() + File.separator + "image.jpg");
                try {
                    f.createNewFile();
                    FileOutputStream fo = new FileOutputStream(f);
                    fo.write(bytes.toByteArray());

                } catch (IOException e) {
                    e.printStackTrace();
                }

               // finish();
*/

            }
        });

    }

    private File saveBitMap(Context context, View drawView){
        File pictureFileDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),"Logicchip");
        if (!pictureFileDir.exists()) {
            boolean isDirectoryCreated = pictureFileDir.mkdirs();
            if(!isDirectoryCreated)
                Log.i("TAG", "Can't create directory to save the image");
            return null;
        }
        String filename = pictureFileDir.getPath() +File.separator+ System.currentTimeMillis()+".jpg";
        File pictureFile = new File(filename);
        Bitmap bitmap =getBitmapFromView(drawView);
        try {
            pictureFile.createNewFile();
            FileOutputStream oStream = new FileOutputStream(pictureFile);
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, oStream);
            oStream.flush();
            oStream.close();
        } catch (IOException e) {
            e.printStackTrace();
            Log.i("TAG", "There was an issue saving the image.");
        }
        scanGallery( context,pictureFile.getAbsolutePath());
        return pictureFile;
    }

    //create bitmap from view and returns it
    private Bitmap getBitmapFromView(View view) {
        //Define a bitmap with the same size as the view
        Bitmap returnedBitmap = Bitmap.createBitmap(view.getWidth(), view.getHeight(),Bitmap.Config.ARGB_8888);
        //Bind a canvas to it
        Canvas canvas = new Canvas(returnedBitmap);
        //Get the view's background
        Drawable bgDrawable =view.getBackground();
        if (bgDrawable!=null) {
            //has background drawable, then draw it on the canvas
            bgDrawable.draw(canvas);
        }   else{
            //does not have background drawable, then draw white background on the canvas
            canvas.drawColor(Color.WHITE);
        }
        // draw the view on the canvas
        view.draw(canvas);
        //return the bitmap
        return returnedBitmap;
    }


    // used for scanning gallery
    private void scanGallery(Context cntx, String path) {
        try {
            MediaScannerConnection.scanFile(cntx, new String[]{path}, null, new MediaScannerConnection.OnScanCompletedListener() {
                public void onScanCompleted(String path, Uri uri) {
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
            Log.i("TAG", "There was an issue scanning gallery.");
        }
    }
}






