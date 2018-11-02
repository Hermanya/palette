import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import '../components/index.scss';
import App from '../components/App';

export default () => <React.Fragment>
    <Head>
        <meta name="Description" content="Make a color palette in an intuitive way"/>
        <title>Make a color palette</title>
    </Head>
    <App />
 </React.Fragment>
