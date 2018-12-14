package com.example.android.myapplication.dataSource;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import com.example.android.myapplication.dbHelper.UserDBHelper;
import com.example.android.myapplication.model.User;

import java.util.ArrayList;

public class UserDataSource {
    private SQLiteDatabase database;
    private UserDBHelper userHelper;
    private final String [] COLUMN_NAMES ={"_id","profil","username","password","nume","materie","grupa","anStudent","specializare"};
    private final String TABLE_NAME = "user";

    public UserDataSource(Context context){
        userHelper = new UserDBHelper(context);
    }

    public void openDB(){
        database = userHelper.getWritableDatabase();
    }

    public void closeDB(){
        userHelper.close();
    }

    /**
     * @author Otilia Petcu
     * @param user
     * @description adauga un nou user in tabela user
     */
    public void adaugaUser(User user){
        ContentValues cv = new ContentValues();
        cv.put("profil", user.getProfil());
        cv.put("username", user.getUsername());
        cv.put("password", user.getPassword());
        cv.put("nume", user.getNume());
        cv.put("materie", user.getMaterie());
        cv.put("grupa", user.getGrupa());
        cv.put("anStudent", user.getAnStudent());
        cv.put("specializare", user.getSpecializare());
        Log.i("Add User", user.toString());
        database.insert(TABLE_NAME, null, cv);
    }

    /**
     * @author Otilia Petcu
     * @return
     * @description lista de useri din baza de date
     */
    public ArrayList<User> getUsers(){
        ArrayList<User> users = new ArrayList<User>();

        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, null, null, null, null, null);

        cursor.moveToFirst();

        while(!cursor.isAfterLast()){
            User user = new User();
            user.setId(cursor.getInt(0));
            user.setProfil(cursor.getString(1));
            user.setUsername(cursor.getString(2));
            user.setPassword(cursor.getString(3));
            user.setNume(cursor.getString(4));
            user.setMaterie(cursor.getString(5));
            user.setGrupa(cursor.getInt(6));
            user.setAnStudent(cursor.getString(7));
            user.setSpecializare(cursor.getString(8));
            users.add(user);
            cursor.moveToNext();
        }
        return users;
    }

    /**
     * @author Otilia Petcu
     * @param username
     * @param password
     * @return
     * @description  verfica daca exista userul in baza de date
     */
    public boolean checkUser(String username, String password){
        boolean result = false;
        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, COLUMN_NAMES[2]+"= '"+username+"' and "+COLUMN_NAMES[3] + "= '"+password+"'",null, null, null, null, null);
        Log.i("checkUser","User exista in db "+cursor.moveToFirst());
        if(cursor.moveToFirst()){
            result = true;
        }
        return result;
    }

    public User infoUser(String username){
        User user = new User();
        Cursor cursor = database.query(TABLE_NAME, COLUMN_NAMES, COLUMN_NAMES[2]+"= '"+username+"'", null, null, null, null, null);
        cursor.moveToFirst();
        if(cursor.moveToFirst()){
            user.setId(cursor.getInt(0));
            user.setProfil(cursor.getString(1));
            user.setUsername(cursor.getString(2));
            user.setPassword(cursor.getString(3));
            user.setNume(cursor.getString(4));
            user.setMaterie(cursor.getString(5));
            user.setGrupa(cursor.getInt(6));
            user.setAnStudent(cursor.getString(7));
            user.setSpecializare(cursor.getString(8));
            cursor.close();
        }
        return user;
    }

}
