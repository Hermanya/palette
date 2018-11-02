import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import '../components/index.scss';
import App from '../components/App';

export default () => <React.Fragment>
    <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="Description" content="Make a color palette in an intuitive way"/>
        <title>Make a color palette</title>
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css' />
    </Head>
    <App />
</React.Fragment>
