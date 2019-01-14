package com.example.android.myapplication.dbHelper;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class TestDBHelper extends SQLiteOpenHelper {
    public static final String DB_NAME = "finalCODEdown.db";
    public static int DB_VERSION = 1;

    public TestDBHelper(Context context){
        super(context,DB_NAME,null,DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL("CREATE TABLE test (_idTest INTEGER PRIMARY KEY AUTOINCREMENT," +
                "numeTest TEXT NOT NULL, materie TEXT, id_profesor INT NOT NULL)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int j) {
        sqLiteDatabase.execSQL("DROP TABLE test");
        onCreate(sqLiteDatabase);
        DB_VERSION++;
    }
}