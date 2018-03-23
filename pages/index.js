import React from 'react';
import Layout from '../lib/Layout'
import Link from 'next/link';
import Head from 'next/head';
import { HeroBanner } from '../components/HeroBanner';
import { AboutInro } from '../components/AboutIntro';

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <meta name="robots" content="noindex, nofollow" />
                    <title>Home - Prasetya Aji Baskara</title>
                </Head>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">Web Developer</h1>}
                        subtitle={<h2 className="subtitle">Don't be afraid to be Great</h2>}
                        images="../static/images/herobanner-2.jpg" 
                        altImages="tyobaskara" 
                    />
                    <AboutInro />
                </div>
            </Layout>
        )
    }
}