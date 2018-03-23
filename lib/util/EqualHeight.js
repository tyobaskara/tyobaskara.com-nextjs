import React from 'react';
import $ from 'jquery';

export default (container) => {
    setTimeout(() => {
        var maxHeight = 0;
        var count = $(container).length;
    
        $(container).each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
    
        $(container).height(maxHeight);
    }, 0);
}