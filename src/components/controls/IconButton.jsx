import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import useRest from '../../services/useRest';

const IconButton = ((props) => {
    const { t } = useTranslation();
    const history = useHistory();
    const rest = useRest({ endpoint: `notes/${props.id}` });

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

    const onClick = (e) => {
        if (props.type === "delete") {
            rest.deleteNote(`notes/${props.id}`);
        }

        if (props.type === "show" || props.type === "edit") {
            history.push(`/notes/${props.type}/${props.id}`);
        }

        if (props.type === "add") {
            history.push(`/notes/${props.type}`);
        }
    }

    return (
        <Button onClick={onClick} className="action-buttons" variant={variant}>
            <FontAwesomeIcon icon={icon} /> {t(props.type)}
        </Button>
    );
});

export default IconButton;