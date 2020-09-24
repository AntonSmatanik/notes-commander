import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import useRest from '../../services/useRest';

function Note() {
    const { id } = useParams();
    const location = useLocation();
    const history = useHistory();
    const { t } = useTranslation();
    const rest = useRest();

    const readMode = location.pathname.includes('show');
    const addMode = location.pathname.includes('add');
    const editMode = location.pathname.includes('edit');

    const formTitle = readMode ? 'Show' : addMode ? 'Add' : 'Edit';

    const [data, setData] = useState();

    const handleChange = (e) => {
        const newData = {
            ...data,
            title: e.target.value,
        }
        setData(newData);
    }

    const handleClick = (e) => {
        history.push(`/notes`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            title: data.title,
        };

        if (addMode) {
            rest.postNote(`notes`, body);
        }

        if (editMode) {
            rest.putNote(`notes/${id}`, body);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await rest.getNote(`notes/${id}`);

            if (!(result instanceof Error)) {
                setData(result.data);
            }
        }

        if (!addMode) {
            fetchData();
        }
    }, [addMode, id]);

    return (
        <Row className="justify-content-md-center">
            <Col lg="6">
                <h3>{t(`${formTitle} note`)}:</h3>
                <Form onSubmit={handleSubmit} className="note-form">
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col} md="5">
                            <Form.Label>{t('ID')}</Form.Label>
                            <Form.Control
                                defaultValue={data?.id}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="7">
                            <Form.Label>{t('Title')}</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                defaultValue={data?.title}
                                disabled={readMode}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col} md="5">
                            <Button
                                variant="info"
                                onClick={handleClick}
                            >
                                {t('Back to all Notes')}
                            </Button>
                        </Form.Group>
                        <Form.Group className="text-right" as={Col} md="7">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={readMode || !data?.title}
                            >
                                {t('Submit')}
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    );
}

export default Note;