package com.example.android.myapplication.Adapters;

import android.support.v7.widget.AppCompatTextView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.android.myapplication.Activities.AdaugareUserActivity;
import com.example.android.myapplication.R;
import com.example.android.myapplication.model.User;
import java.util.List;



public class UtilizatoriRecyclerAdapter extends RecyclerView.Adapter<UtilizatoriRecyclerAdapter.UtilizatoriViewHolder> {

    private List<User> listUsers;

    public UtilizatoriRecyclerAdapter(List<User> listUsers) {
        this.listUsers = listUsers;
    }

    @Override
    public UtilizatoriViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.recycler_view_row_utilizatori, parent, false);

        return new UtilizatoriViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(UtilizatoriViewHolder holder, int position) {
        holder.numeTextView.setText(listUsers.get(position).getNume());
        holder.usernameTextView.setText(listUsers.get(position).getUsername());
        holder.profilTextView.setText(listUsers.get(position).getProfil());

    }

    @Override
    public int getItemCount() {
        //Log.v(UtilizatoriRecyclerAdapter.class.getSimpleName(),""+listUsers.size());
        return listUsers.size();
    }

    public class UtilizatoriViewHolder extends RecyclerView.ViewHolder {

        public AppCompatTextView numeTextView;
        public AppCompatTextView usernameTextView;
        public AppCompatTextView profilTextView;

        public UtilizatoriViewHolder(View view) {
            super(view);

            numeTextView = view.findViewById(R.id.numeTextView);
            usernameTextView = view.findViewById(R.id.usernameTextView);
            profilTextView = view.findViewById(R.id.profilTextView);

        }
    }
}
