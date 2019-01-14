package com.example.android.myapplication.model;

public class Punctaj {
    private int id;
    private int id_test;
    private int id_student;
    private int total_intrebari;
    private int puncte;

    public Punctaj() {
    }
    public Punctaj(int id, int id_test, int id_student, int total_intrebari, int puncte) {
        this.id = id;
        this.id_test = id_test;
        this.id_student = id_student;
        this.total_intrebari = total_intrebari;
        this.puncte = puncte;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_test() {
        return id_test;
    }

    public void setId_test(int id_test) {
        this.id_test = id_test;
    }

    public int getId_student() {
        return id_student;
    }

    public void setId_student(int id_student) {
        this.id_student = id_student;
    }

    public int getTotal_intrebari() {
        return total_intrebari;
    }

    public void setTotal_intrebari(int total_intrebari) {
        this.total_intrebari = total_intrebari;
    }

    public int getPuncte() {
        return puncte;
    }

    public void setPuncte(int puncte) {
        this.puncte = puncte;
    }

    @Override
    public String toString() {
        return "Punctaj{" +
                "id=" + id +
                ", id_test=" + id_test +
                ", id_student=" + id_student +
                ", total_intrebari=" + total_intrebari +
                ", puncte=" + puncte +
                '}';
    }
}
