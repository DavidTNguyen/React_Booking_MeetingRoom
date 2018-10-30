import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('Bug found'));
    return(
        <div>

        </div>
    );
};

