package com.example.android.myapplication.dataSource;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.example.android.myapplication.dbHelper.UserDBHelper;
import com.example.android.myapplication.model.Intrebare;
import com.example.android.myapplication.model.User;

import java.util.ArrayList;

public class IntrebareDataSource {
    private SQLiteDatabase database;
    private UserDBHelper intrebareHelper;
    private final String [] COLUMN_NAMES ={"_idIntrebare","_idTest","intrebare","tipIntrebare"};
    private final String TABLE_NAME = "intrebare";

    public IntrebareDataSource(Context context){
        intrebareHelper = new UserDBHelper(context);
    }

    public void openDB(){
        database = intrebareHelper.getWritableDatabase();
    }

    public void closeDB(){
        intrebareHelper.close();
    }

    public void adaugaIntrebare(Intrebare intrebare){
        ContentValues cv = new ContentValues();
        cv.put("_idTest", intrebare.getIdTest());
        cv.put("intrebare", intrebare.getIntrebare());
        cv.put("tipIntrebare", intrebare.getTipIntrebare());
        database.insert(TABLE_NAME, null, cv);
    }

    public ArrayList<Intrebare> getIntrebari(){
        ArrayList<Intrebare> intrebari = new ArrayList<Intrebare>();

        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, null, null, null, null, null);

        cursor.moveToFirst();

        while(!cursor.isAfterLast()){
            Intrebare intrebare = new Intrebare();
            intrebare.setIdTest(cursor.getInt(0));
            intrebare.setIntrebare(cursor.getString(1));
            intrebare.setTipIntrebare(cursor.getString(2));

            intrebari.add(intrebare);
            cursor.moveToNext();
        }
        return intrebari;
    }
}
