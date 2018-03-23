import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

export class HeroBanner extends React.Component {
    state = {
        onWaypoint: false
    }
    _handleWaypointEnter = () => {
        this.setState({onWaypoint: true});
    }
    _handleWaypointLeave = () => {
        this.setState({onWaypoint: false});
    }
    render() {
        return (
            <div className="heroBanner">             
                <Waypoint
                onEnter={this._handleWaypointEnter}
                onLeave={this._handleWaypointLeave}
                />
                <div className="heroBanner__image">
                    <img src={this.props.images} alt={this.props.altImages} />
                </div>
                <div className="heroBanner__content">
                    <div className={"container" + (this.state.onWaypoint ? ' on-way-point':'')}>   
                        <div
                            className={"animated" + (this.state.onWaypoint ? ' fadeInDown':' fadeOutDown')}
                        >
                            {this.props.title ? this.props.title : ''}  
                        </div>  
                        <div
                            className={"animated" + (this.state.onWaypoint ? ' fadeInRight':' fadeOutLeft')}
                        >
                            {this.props.subtitle ? this.props.subtitle : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

HeroBanner.propTypes = {
    images: PropTypes.string,
    altImages: PropTypes.string,
    title: PropTypes.object,
    subtitle: PropTypes.object,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func
}