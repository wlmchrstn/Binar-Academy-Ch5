import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

const Button = ({ children, variant, type, ...props }) => (
    <button className={classNames(styles.root, styles[variant])} type={type} {...props}>
        {children}
    </button>
);


Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    type: PropTypes.string,
};

Button.defaultProps = {
    children: '',
    variant: 'primary',
    type: 'button',
};

export default Button;
