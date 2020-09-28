import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import ConfirmDialog from './ConfirmDialog';
import useRest from '../../services/useRest';

const IconButton = ((props) => {
    const { t } = useTranslation();
    const history = useHistory();
    const rest = useRest();

    const [showModal, setShowModal] = useState(false);

    let variant;
    let icon;

    if (props.type === "show") {
        variant = "info";
        icon = faEye;
    } else if (props.type === "edit") {
        variant = "primary";
        icon = faEdit;
    } else if (props.type === "delete") {
        variant = "danger";
        icon = faTrash;
    } else if (props.type === "add") {
        variant = "secondary";
        icon = faPlus;
    }

    const handleModalCancelAction = () => setShowModal(false);

    const handleModalConfirmAction = () => {
        setShowModal(false);
        rest.deleteNote(`notes/${props.id}`);
    }

    const onClick = (e) => {
        if (props.type === "delete") {
            setShowModal(true);
        }

        if (props.type === "show" || props.type === "edit") {
            history.push(`/notes/${props.type}/${props.id}`);
        }

        if (props.type === "add") {
            history.push(`/notes/${props.type}`);
        }
    }

    return (
        <>
            <ConfirmDialog
                show={showModal}
                handleCancelAction={handleModalCancelAction}
                handleConfirmAction={handleModalConfirmAction}
                titleText={t('Delete note')}
                bodyText={t('Are you sure you want do delete this')}
                cancelActionText={t('Cancel')}
                confirmActionText={t('Confirm Delete')}
            />
            <Button onClick={onClick} className="action-buttons" variant={variant}>
                <FontAwesomeIcon icon={icon} /> {t(props.type)}
            </Button>
        </>
    );
});

export default IconButton;