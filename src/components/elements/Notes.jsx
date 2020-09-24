import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Loading from '../misc/Loading';
import DataTable from './DataTable';
import IconButton from '../controls/IconButton';

function Notes() {
    const { t } = useTranslation();
    const data = useSelector((state) => state.notesReducer);

    return (
        <>
            <Row className="justify-content-md-center">
                <Col lg="7">
                    <h4>{t('All notes')}:</h4>
                    {data.length === 0 && <Loading />}
                    {data.length !== 0 && <DataTable data={data} />}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg="7" className="text-right">
                    {data.length !== 0 && <IconButton type="add" />}
                </Col>
            </Row>
        </>
    );
}

export default Notes;