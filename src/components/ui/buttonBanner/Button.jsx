import React from 'react';
import styles from './Button.module.css';

function Button({ variant = 'green', children, ...rest }) {
  // Выбираем класс по variant, если его нет — пусть будет пустая строка.
  const variantClass = styles[variant] || '';

  // Общая строка с классами: base + (variantClass)
  const className = `${styles.base} ${variantClass}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
