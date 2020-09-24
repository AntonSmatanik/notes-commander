import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Messages from './elements/Messages';
import Router from './Router';
import LanguageSelector from './controls/LanguageSelector';

const App = (() => {
    return (
        <Container fluid>
            <Row>
                <Col lg="2" className="messages">
                    <Messages />
                </Col>
                <Col lg="9" className="main-content">
                    <Router />
                </Col>
                <Col lg="1" className="justify-content-md-right">
                    <LanguageSelector />
                </Col>
            </Row>
        </Container>
    );
});

export default App;