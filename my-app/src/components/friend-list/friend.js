import React from 'react';
import PropTypes from 'prop-types';
import s from './friend.module.css';

function Friend({avatar, name, isOnline}) {
    return (
        <li className={s.item}>
            <span className={s.status}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}
 
Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default Friend;