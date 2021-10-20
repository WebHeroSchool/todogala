import { Typography } from '@material-ui/core';
import React from 'react';
// import styles from './Footer.module.css'

const Footer = ({ count, onClickFooter }) => (
        <Typography variant = 'subtitle1' color='textSecondary' onClick={onClickFooter}>
                Осталось выполнить: {count} дел
        </Typography>
);

Footer.defaultProps = {
        count: 0
}

export default Footer;