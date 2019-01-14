package com.example.android.myapplication.dataSource;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.example.android.myapplication.dbHelper.PunctajeDBHelper;
import com.example.android.myapplication.model.Punctaj;


import java.util.ArrayList;


public class PunctajeDataSource {

    private SQLiteDatabase database;
    private PunctajeDBHelper puntajHelper;
    private final String [] COLUMN_NAMES ={"_id","id_test","id_student","total_intrebari","puncte"};
    private final String TABLE_NAME = "punctaje";

    public PunctajeDataSource(Context context) {
        this.puntajHelper=new PunctajeDBHelper(context) ;
    }


    public void openDB(){
        database = puntajHelper.getWritableDatabase();
    }

    public void closeDB(){
        puntajHelper.close();
    }
    
    //adauga un punctaj nou in tabela punctaj
    
    public void adaugaPunctaj(Punctaj punctaj)
    {
        ContentValues cv = new ContentValues();
        cv.put("id", punctaj.getId());
        cv.put("id_test", punctaj.getId_test());
        cv.put("id_student", punctaj.getId_student());
        cv.put("total_intrebari", punctaj.getTotal_intrebari());
        cv.put("puncte", punctaj.getPuncte());
    }
    
    //lista de punctaje pentru un anumit TEST
    public ArrayList<Punctaj> getPunctaje_byTEST(int test){
        ArrayList<Punctaj> punctaje= new ArrayList<Punctaj>();

        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, null, null, null, null, null);

        cursor.moveToFirst();
        Punctaj punctaj = new Punctaj();
        if(test==cursor.getInt(1))
        {
            while(!cursor.isAfterLast()){


                punctaj.setId(cursor.getInt(0));
                punctaj.setId_test(cursor.getInt(1));
                punctaj.setId_student(cursor.getInt(2));
                punctaj.setTotal_intrebari(cursor.getInt(3));
                punctaj.setPuncte(cursor.getInt(4));

                punctaje.add(punctaj);
                cursor.moveToNext();
            }
        }


        return punctaje;
    }
    
    
    
    // lista de punctaje pentru un anumit STUDENT

    public ArrayList<Punctaj> getPunctaje_bySTUDENT(int student){
        ArrayList<Punctaj> punctaje= new ArrayList<Punctaj>();

        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, null, null, null, null, null);

        cursor.moveToFirst();
        Punctaj punctaj = new Punctaj();
        if(student==cursor.getInt(2))
        {
            while(!cursor.isAfterLast()){


                punctaj.setId(cursor.getInt(0));
                punctaj.setId_test(cursor.getInt(1));
                punctaj.setId_student(cursor.getInt(2));
                punctaj.setTotal_intrebari(cursor.getInt(3));
                punctaj.setPuncte(cursor.getInt(4));

                punctaje.add(punctaj);
                cursor.moveToNext();
            }
        }


        return punctaje;
    }


}
