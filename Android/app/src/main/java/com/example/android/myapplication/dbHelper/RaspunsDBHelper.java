package com.example.android.myapplication.dbHelper;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class RaspunsDBHelper extends SQLiteOpenHelper {
    public static final String DB_NAME = "finalCODEdown.db";
    public static int DB_VERSION = 1;

    public RaspunsDBHelper(Context context){
        super(context,DB_NAME,null,DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL("CREATE TABLE raspuns (_idRaspuns INTEGER PRIMARY KEY AUTOINCREMENT," +
                " _idIntrebare INTEGER NOT NULL, raspuns TEXT NOT NULL, corect BOOLEAN)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int j) {
        sqLiteDatabase.execSQL("DROP TABLE raspuns");
        onCreate(sqLiteDatabase);
        DB_VERSION++;
    }
}
