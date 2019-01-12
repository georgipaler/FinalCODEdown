package com.example.android.myapplication.dbHelper;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class IntrebareDBHelper extends SQLiteOpenHelper{
    public static final String DB_NAME = "finalCODEdown.db";
    public static int DB_VERSION = 1;

    public IntrebareDBHelper(Context context){
        super(context,DB_NAME,null,DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL("CREATE TABLE intrebare (_idIntrebare INTEGER PRIMARY KEY AUTOINCREMENT," +
                "_idTest INTEGER NOT NULL, intrebare TEXT NOT NULL, tipIntrebare TEXT NOT NULL)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int j) {
        sqLiteDatabase.execSQL("DROP TABLE intrebare");
        onCreate(sqLiteDatabase);
        DB_VERSION++;
    }
}
