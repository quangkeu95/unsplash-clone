import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import NavBar from '../components/NavBar';
import css from '../styles/index.css';

const Index = (props) => (
    <div>
        <Head>
            <title>Home</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
    </div>
);

export default Index;