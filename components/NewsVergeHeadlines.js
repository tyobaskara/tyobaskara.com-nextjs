import React from 'react';
import Masonry from 'react-masonry-component';
import { NewsItem } from './NewsItem';
import { LoadingRequest, FailedRequest } from './fetch-status-return';

import axios from "axios";
import { withRouter } from "next/router";

export class NewsVergeHeadlines extends React.Component {
    state = {
        vergeHeadlines: [],
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
        let vergeHeadlines = new URL("https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=1878c21cdaa74709a6db87229692a5e7");
        var _this = this;

        _this.setState({loadingRequest: true});// show loading

        axios({
            method:'get',
            url: vergeHeadlines,
            responseType:'stream'
        })
        .then(function(jsonResponse) {
            if(jsonResponse != null) {
                _this.setState({ vergeHeadlines: jsonResponse.data.articles, loadingRequest: false});
            }
        });
    }

    render() {
        const masonryOptions = {
            transitionDuration: 250
        };

        const article = this.state.vergeHeadlines.map((value, index) => {
                            return (
                                <li key={index}>
                                    <NewsItem data={value} />
                                </li>
                            )
                        });

        return (
            <div className="news news--verge-headline">
                <h2 className="orgTitle">Technology</h2>
                
                <ul className="nts-list-scroll">
                    { article }
                </ul>

                { this.state.failedRequest && <FailedRequest /> }
                { this.state.loadingRequest && <LoadingRequest /> }
            </div>
        )
    }
}

export default withRouter(NewsVergeHeadlines);