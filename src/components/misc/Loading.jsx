import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = (() => {
    return (
        <div className="spinner" data-testid="spinner">
            <Spinner animation="border" />
        </div>
    );
});

export default Loading;

