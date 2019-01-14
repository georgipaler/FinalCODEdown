package com.example.android.myapplication.dbHelper;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class PunctajeDBHelper extends SQLiteOpenHelper {
    public static final String DB_NAME = "finalCODEdown.db";
    public static int DB_VERSION = 1;

    public PunctajeDBHelper(Context context){
        super(context,DB_NAME,null,DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL("CREATE TABLE punctaje (_id INTEGER PRIMARY KEY AUTOINCREMENT," +
                " id_test INTEGER NOT NULL, id_student INTEGER NOT NULL, total_intrebari INTEGER NOT NULL,puncte INTEGER NOT NULL) " );
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int j) {
        sqLiteDatabase.execSQL("DROP TABLE punctaje");
        onCreate(sqLiteDatabase);
        DB_VERSION++;
    }


}
