import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'react-bootstrap';

import IconButton from '../controls/IconButton';

function DataTable(props) {
    const { t } = useTranslation();
    const data = props.data;

    return (
        <Table data-testid="table" striped bordered hover responsive>
            <thead>
                <tr>
                    <th>{t('ID')}</th>
                    <th>{t('Title')}</th>
                    <th>{t('Actions')}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => (<tr key={item.id}>
                    <td className="text-center">{item.id}</td>
                    <td>{item.title}</td>
                    <td className="text-center">
                        <IconButton type="show" id={item.id} />
                        <IconButton type="edit" id={item.id} />
                        <IconButton type="delete" id={item.id} />
                    </td>
                </tr>))}
            </tbody>
        </Table>
    );
}

export default DataTable;