import React from 'react';

export default class ButtonToTop extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        window.requestAnimFrame = (() => {
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                    };
        })();

        document.addEventListener('scroll', this.buttonToTopEvent);
        this.topFunction;
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.buttonToTopEvent);
    }

    buttonToTopEvent(event) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.getElementById("btnToTop").style.display = "block";
        } else {
            document.getElementById("btnToTop").style.display = "none";
        }
    }
    
    scrollToY(scrollTargetY, speed, easing) {
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // easing: easing equation to use
    
        var scrollY = window.scrollY || document.documentElement.scrollTop,
            scrollTargetY = scrollTargetY || 0,
            speed = speed || 2000,
            easing = easing || 'easeOutSine',
            currentTime = 0;
    
        // min time .1, max time .8 seconds
        let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
    
        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        let easingEquations = {
                easeOutSine: function (pos) {
                    return Math.sin(pos * (Math.PI / 2));
                },
                easeInOutSine: function (pos) {
                    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                },
                easeInOutQuint: function (pos) {
                    if ((pos /= 0.5) < 1) {
                        return 0.5 * Math.pow(pos, 5);
                    }
                    return 0.5 * (Math.pow((pos - 2), 5) + 2);
                }
            };
    
        // add animation loop
        const tick = () => {
            currentTime += 1 / 60;
    
            var p = currentTime / time;
            var t = easingEquations[easing](p);
    
            if (p < 1) {
                requestAnimFrame(tick);
    
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                //console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }
    
        // call it once to get started
        tick();
    }
    
    topFunction = () => {
        this.scrollToY(0, 1500, 'easeInOutQuint');  
    }

    render(){
        return (
            <button onClick={this.topFunction} id="btnToTop" title="Go to top">Top</button>
        )
    }
}