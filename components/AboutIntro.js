import React from 'react';
import { SliderAbout } from './SliderAbout';
import Link from 'next/link'

export class AboutInro extends React.Component {
    state = {
        fakeLoading: true
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({fakeLoading: false});
        }, 250);
    }

    render() {
        return (
            <div className="aboutIntro">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        <div className={this.state.fakeLoading ? "fakeLoading-show" : "fakeLoading-hide"}>
                            <div className="fakeLoading__img"><img src="/static/images/loading-gear.gif" alt="loading"/></div>
                            <SliderAbout />
                        </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="aboutIntro__description">
                                <h3 className="orgTitle">Who am i ?</h3>
                                <p>As time goes by, I’m really grateful that I’m able to make a living through it and made my passion my work. I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!</p>
                                <Link href="/about">
                                    <a className="btn btn-brown">Find Out More!</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};