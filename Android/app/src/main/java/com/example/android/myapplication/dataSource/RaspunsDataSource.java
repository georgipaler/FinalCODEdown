package com.example.android.myapplication.dataSource;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.example.android.myapplication.dbHelper.UserDBHelper;
import com.example.android.myapplication.model.Intrebare;
import com.example.android.myapplication.model.Raspuns;
import com.example.android.myapplication.model.User;

import java.util.ArrayList;

public class RaspunsDataSource {
    private SQLiteDatabase database;
    private UserDBHelper raspunsHelper;
    private final String [] COLUMN_NAMES ={"_idRaspuns","_idIntrebare","raspuns","corect"};
    private final String TABLE_NAME = "raspuns";

    public RaspunsDataSource(Context context){
        raspunsHelper = new UserDBHelper(context);
    }

    public void openDB(){
        database = raspunsHelper.getWritableDatabase();
    }

    public void closeDB(){
        raspunsHelper.close();
    }

    public void adaugaRaspuns(Raspuns raspuns){
        ContentValues cv = new ContentValues();
        cv.put("_idIntrebare", raspuns.getIdIntrebare());
        cv.put("raspuns", raspuns.getRaspuns());
        cv.put("corect", raspuns.isCorect());
        Log.i("Add Raspuns", raspuns.toString());
        database.insert(TABLE_NAME, null, cv);
    }

    public ArrayList<Raspuns> getRaspunsuri(){
        ArrayList<Raspuns> raspunsuri = new ArrayList<Raspuns>();

        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, null, null, null, null, null);

        cursor.moveToFirst();

        while(!cursor.isAfterLast()){
            Raspuns raspuns = new Raspuns();
            raspuns.setIdRaspuns(cursor.getInt(0));
            raspuns.setIdIntrebare(cursor.getInt(1));
            raspuns.setRaspuns(cursor.getString(2));
            raspuns.setCorect(new Boolean(cursor.getString(3)));
            raspunsuri.add(raspuns);
            cursor.moveToNext();
        }
        return raspunsuri;
    }
}
