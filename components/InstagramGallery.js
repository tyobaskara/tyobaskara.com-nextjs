import React from 'react';

export class InstagramGallery extends React.Component {
    componentDidMount() {
        require('../lib/vendor/lightwidget.js');
    }
    
    render() {
        return(
            <div>
                <div className="text-center">
                    <h3 className="orgTitle">Follow me on instagram</h3>
                </div>
                <div className="igWrapper" style={{padding: '20px 0'}}>
                    <iframe src="//lightwidget.com/widgets/4229ba7325bf5c2bb964e7ecaa4a0f95.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width: '100%', minHeight: '500px', border: 0,  overflow: 'hidden'}}></iframe>
                </div>
            </div>
        )
    }
};
