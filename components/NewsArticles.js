import React from 'react';
import Masonry from 'react-masonry-component';
import { NewsItem } from './NewsItem';
import { LoadingRequest, FailedRequest } from './fetch-status-return';
import equalheight from '../lib/util/EqualHeight';

import axios from "axios";
import { withRouter } from "next/router";

class NewsArticles extends React.Component {
    state = {
        articles: [],
        loadingRequest: false,
        failedRequest: false
    }

    componentDidMount() {
        this.getNewsJson();
    }

    getNewsJson() {
        // new york times api
        //let topstories = new URL("https://api.nytimes.com/svc/topstories/v2/home.json");
        // let params = {
        //     'api-key': "7c73b2ded34e4fcfabcf7222f78b6577"
        // };
        //Object.keys(params).forEach(key => topstories.searchParams.append(key, params[key]))

        // newsapi.org key 1878c21cdaa74709a6db87229692a5e7
        // https://newsapi.org/s/bloomberg-api
        var _this = this;
        let articles = new URL("https://newsapi.org/v2/everything?sources=bloomberg&apiKey=1878c21cdaa74709a6db87229692a5e7");

        _this.setState({loadingRequest: true});// show loading

        axios({
            method:'get',
            url: articles,
            responseType:'stream'
        })
        .then(function(jsonResponse) {
            if(jsonResponse != null) {
                _this.setState({ articles: jsonResponse.data.articles, loadingRequest: false}, () => {
                    if(screen.width > 767) {
                        equalheight('.news-wrap .eq-col');
                    }
                });
            }
        });
    }

    render() {
        const masonryOptions = {
            transitionDuration: 250
        };

        const article = this.state.articles.map((value, index) => {
                            return (
                                <li key={index}>
                                    <NewsItem data={value} />
                                </li>
                            )
                        });

        return (
            <div className="news news--articles">
                <h2 className="orgTitle">Article News</h2>
                
                <Masonry
                    className={'nts-list'}
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    { article }
                </Masonry>

                { this.state.failedRequest && <FailedRequest /> }
                { this.state.loadingRequest && <LoadingRequest /> }
            </div>
        )
    }
}

export default withRouter(NewsArticles);