package com.example.android.myapplication.Activities;

import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.util.SparseArray;
import android.widget.ExpandableListView;

import com.example.android.myapplication.Adapters.ExpandableListAdapter_TestProfesor;
import com.example.android.myapplication.R;
import com.example.android.myapplication.util.Group;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class TestProfesorActivity extends Activity {
    SparseArray<Group> groups = new SparseArray<Group>();
    ExpandableListView listView;
    String urlJSON = "https://api.myjson.com/bins/yz012";
    ExpandableListAdapter_TestProfesor adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test_profesor);
        createData();
        listView = findViewById(R.id.testExpandableListView);
        adapter = new ExpandableListAdapter_TestProfesor(this, groups);
        //listView.setAdapter(adapter);

        runOnUiThread( new Runnable() {
            @Override
            public void run() {
                new ReadJSON().execute(urlJSON);
            }
        } );

    }

   public void createData() {
        for (int j = 0; j < 10; j++) {
            Group group = new Group("Intrebare " + j);
            for (int i = 1; i < 5; i++) {
                group.children.add("Raspuns" + i);
            }
            groups.append(j, group);
        }
    }

    class ReadJSON extends AsyncTask<String,Integer,String> {

        @Override
        protected String doInBackground(String... strings) {
            return readURL(urlJSON);

        }

        private  String readURL(String theUrl) {
            Log.i("OtiJSON", theUrl);
            StringBuilder content = new StringBuilder();
            try {
                URL url = new URL(theUrl);
                URLConnection urlConnection = url.openConnection();
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    content.append(line + "\n");
                }
                bufferedReader.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            return content.toString();

        }

        @Override
        protected void onPostExecute(String content) {
            Log.i("OtiJSONPOST", "mere");
            try {
                JSONObject jsonObject = new JSONObject(content);
                JSONArray jsonArray =  jsonObject.getJSONArray("teste");

                for(int i = 0; i < jsonArray.length(); i++){
                    Group group = new Group();
                    JSONObject intrebareObject = jsonArray.getJSONObject(i);
                    JSONArray raspunsuri =  intrebareObject.getJSONArray("raspuns");
                    for(int j = 0; j < raspunsuri.length(); j++){
                        //group.getListaRaspunsuri().add(raspunsuri.getString(j));
                        group.children.add(raspunsuri.getString(j));
                    }
                    group.string = intrebareObject.getString("numeIntrebare");
                    groups.append(i, group);

                }

            } catch (JSONException e) {
                e.printStackTrace();
            }

            //ExpandableListAdapter_TestProfesor adapter = new ExpandableListAdapter_TestProfesor(getParent(), groups);
            listView.setAdapter(adapter);
        }

    }


}


