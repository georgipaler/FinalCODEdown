package com.example.android.myapplication.dbHelper;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class UserDBHelper extends SQLiteOpenHelper {
    public static final String DB_NAME = "finalCODEdown.db";
    public static int DB_VERSION = 1;

    public UserDBHelper(Context context){
        super(context,DB_NAME,null,DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL("CREATE TABLE user (_id INTEGER PRIMARY KEY AUTOINCREMENT," +
                " profil TEXT NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL,nume TEXT NOT NULL, " +
                " materie TEXT,grupa INTEGER , anStudent TEXT, specializare TEXT)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int j) {
        sqLiteDatabase.execSQL("DROP TABLE user");
        onCreate(sqLiteDatabase);
        DB_VERSION++;
    }
}
