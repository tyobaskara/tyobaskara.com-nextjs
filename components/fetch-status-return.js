import React from 'react';

export const LoadingRequest = () => {
    return (
        <div className="data-loading text-center"><img src="/static/images/loading-gear.gif" alt="loading gear"/></div>
    )
}

export const FailedRequest = () => {
    return (
        <div className="data-loading text-center">Try again later..</div>
    )
}