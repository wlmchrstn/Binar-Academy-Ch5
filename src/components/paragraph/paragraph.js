import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './paragraph.module.scss';

const Paragraph = ({ children, variant, weight, color, ...props }) => {
    return (
        <p
            className={classNames(
                styles.root,
                styles[variant],
                styles[color],
                styles[weight],
                props.className
            )}
        >
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
};

Paragraph.defaultProps = {
    children: '',
    variant: 'body-1',
    weight: '',
    color: 'black',
};

export default Paragraph;
