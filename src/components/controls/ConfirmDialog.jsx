import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmDialog(props) {
    const [show, setShow] = useState();

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <Modal show={show} onHide={props.handleCancelAction}>
            <Modal.Header closeButton>
                <Modal.Title>{props.titleText}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.bodyText}</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleCancelAction} variant="secondary">{props.cancelActionText}</Button>
                <Button onClick={props.handleConfirmAction} variant="danger">{props.confirmActionText}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDialog;