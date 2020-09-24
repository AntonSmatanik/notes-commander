import React, { useState, useEffect } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useRest from '../../services/useRest';

function Note() {
    const [title, setTitle] = useState();
    const { id } = useParams();
    const location = useLocation();
    const history = useHistory();
    const { t } = useTranslation();    
    const rest = useRest();
    let data = useSelector((state) => state.noteReducer);
    
    const readMode = location.pathname.includes('show');
    const addMode = location.pathname.includes('add');
    const editMode = location.pathname.includes('edit');
    
    if (addMode) {
        data = null;
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleClick = (e) => {
        history.push(`/notes`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            title: title ? title : data.title
        };
        
        if (addMode) {
            rest.postNote(`notes`, body);
        }

        if (editMode) {
            rest.putNote(`notes/${id}`, body);            
        }
    }

    useEffect(() => {
        if (!addMode) {
            rest.getNote(`notes/${id}`);
        }        
    }, [addMode, id]);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} md="2">
                    <Form.Label>{t('ID')}</Form.Label>
                    <Form.Control
                        defaultValue={data?.id}
                        disabled
                    />
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>{t('Title')}</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        defaultValue={data?.title}
                        disabled={readMode}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} md="2">
                    <Button
                        variant="info"
                        onClick={handleClick}
                    >
                        {t('Back to all Notes')}
                </Button>
                </Form.Group>
                <Form.Group className="text-right" as={Col} md="3">
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={readMode || (!title && !data)}
                    >
                        {t('Submit')}
                </Button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default Note;