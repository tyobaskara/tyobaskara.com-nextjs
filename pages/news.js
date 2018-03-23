import React from 'react';
import Layout from '../lib/Layout'
import Head from 'next/head';
import { HeroBanner } from '../components/HeroBanner';
import HeadLines from '../components/NewsHeadlines';
import NewsArticles from '../components/NewsArticles';
import NewsVergeHeadlines from '../components/NewsVergeHeadlines';
import ButtonToTop from '../components/ButtonToTop';
import equalheight from '../lib/util/EqualHeight';

class NewsPage extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', this.scroll);

        window.onresize = function(event) {
            if(screen.width > 767) {
                setTimeout(() => {
                    equalheight('.news-wrap .eq-col');
                }, 250);
            }
            else {
                const length = document.getElementsByClassName('eq-col').length;
                for(var i = 0;i<length;i++) {
                    document.getElementsByClassName('eq-col')[i].style.height = 'auto'; 
                }
            }
        };
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

    render = () => {
        return (
            <Layout>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content="Prasetya Aji Baskara" />
                    <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.ico" />
                    <meta name="robots" content="noindex, nofollow" />
                    <title>tyobaskara.rocks - Bloomberg and the Verge News</title>
                </Head>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">News Section</h1>}
                        subtitle={<h2 className="subtitle">Powered by newsapi.org</h2>}
                        images="../static/images/herobanner-2.jpg" 
                        altImages="bloomberg news" 
                    />
                    
                    <div className="news-wrap">
                        <div className="container container--wrap" style={{minHeight: '50vh'}}>
                            <div className="row">
                                <div className="col-sm-4 eq-col">
                                    <HeadLines />
                                </div>
                                <div className="col-sm-8 eq-col">
                                    <NewsArticles />
                                </div>
                            </div>

                            <NewsVergeHeadlines />
                        </div>
                    </div>
                </div>

                <ButtonToTop />
            </Layout>
        )
    }
};

export default NewsPage;