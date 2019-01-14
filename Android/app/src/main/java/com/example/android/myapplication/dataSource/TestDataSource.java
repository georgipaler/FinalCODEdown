package com.example.android.myapplication.dataSource;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.example.android.myapplication.dbHelper.UserDBHelper;
import com.example.android.myapplication.model.Test;

import java.util.ArrayList;

public class TestDataSource {
    private SQLiteDatabase database;
    private UserDBHelper testHelper;
    private final String[] COLUMN_NAMES = {"_idTest", "numeTest", "materie", "id_profesor"};
    private final String TABLE_NAME = "test";

    public TestDataSource(Context context){
        testHelper = new UserDBHelper(context);
    }

    public void openBD() {
        database = testHelper.getWritableDatabase();
    };

    public void closeBD() {
        testHelper.close();
    }

    public void adaugaTest(Test test){
        ContentValues cv = new ContentValues();
        cv.put("numeTest", test.getNumeTest());
        cv.put("materie", test.getMaterie());
        cv.put("id_profesor", test.getId_profesor());
        Log.i("Add Test", test.toString());
        database.insert(TABLE_NAME, null, cv);
    }

    public ArrayList<Test> getTeste(){
        ArrayList<Test> teste = new ArrayList<Test>();

        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, null, null, null, null, null);

        cursor.moveToFirst();

        while(!cursor.isAfterLast()){
            Test test = new Test();
            test.setIdTest(cursor.getInt(0));
            test.setNumeTest(cursor.getString(1));
            test.setMaterie(cursor.getString(2));
            test.setId_profesor(cursor.getInt(2));
            teste.add(test);
            cursor.moveToNext();
        }
        return teste;
    }
}
