import React from 'react';
// import ReactDOM from 'react-dom';
import app from "../FirebaseConfig";
import 'firebase/auth'
import {BigQuery} from "@google-cloud/bigquery";

export default function Home() {
    const auth = app.auth();
    const Loginoptions = {
        keyFilename: './service_account.json',
        projectId: 'hyperoffice',
      };
    const BigQueryClient = new BigQuery(Loginoptions);
    const sqlQuery = "SELECT event_name  FROM `hyperoffice.analytics_184022260.events_20201018` LIMIT 1000";
    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US'
        };
    // const [rows] = BigQueryClient.query(options);
    // console.log('Rows:');
    // rows.forEach(row => console.log(row));
    console.log(BigQueryClient)
    return (
    <div>
        <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/927c95a4-ad50-4d20-9e07-a45806bba2f8/page/MO9kB" frameborder="0" style={{xborder:0}} allowfullscreen></iframe>
    </div>
    )
}