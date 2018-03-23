import React from 'react';
import Head from 'next/head';
import Layout from '../lib/Layout'
import { HeroBanner } from '../components/HeroBanner';
import { InstagramGallery } from '../components/InstagramGallery';
import ButtonToTop from '../components/ButtonToTop';

class About extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scroll);
    }

    scroll(event) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("nav")[0].classList.add("nav--active");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("nav--active");
        }
    };

    render() {
        return (
            <Layout navigation="fixed">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content="Prasetya Aji Baskara" />
                    <link rel="shortcut icon" type="image/x-icon" href="../static/images/favicon.ico" />
                    <meta name="robots" content="noindex, nofollow" />
                    <title>About - Prasetya Aji Baskara</title>
                </Head>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">The Passion</h1>}
                        subtitle={<h2 className="subtitle">The only way to do great work is to love what you do<br/>-steve jobs</h2>}
                        images="../static/images/about.jpg" 
                        altImages="tyobaskara" 
                    />
                    <div className="container container--wrap">
                        <InstagramGallery />
                    </div>
                </div>

                <ButtonToTop />
            </Layout>
        )
    }
};

export default About;