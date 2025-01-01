import React from 'react';
import styles from './button.module.scss';
let button_types = {
  dark: { background: '#f8872b', color: '#fff' },
  light: { background: '#FFFFFF', color: '#f8872b' },
  other: {
    background: 'none',
    color: '#f8872b',
    border: '0.3rem solid #f8872b',
  },
  diff: { background: '#0b3954', color: '#fff' },
  transparent: {
    background: 'transparent',
    color: '#fff',
    border: '.3rem solid #bbb',
  },
};

function Button({ type, children, size = 'small', square = false }) {
  let btn_size_classes;
  let btn_shape_classes;
  let type_btn_classes;
  if (size === 'big') {
    btn_size_classes = 'btn_big';
  } else if (size == 'small') {
    btn_size_classes = 'btn_small';
  }

  if (type === 'dark') {
    type_btn_classes = styles.dark_btn;
  }
  if (type === 'light') {
    type_btn_classes = styles.light_btn;
  }
  if (type === 'other') {
    type_btn_classes = styles.other_btn;
  }
  if (type === 'diff') {
    type_btn_classes = styles.diff_btn;
  }
  if (type === 'primary') {
    type_btn_classes = styles.primary_btn;
  }
  if (type === 'transparent') {
    type_btn_classes = styles.transparent_btn;
  }

  if (!square) btn_shape_classes = 'br_rounded';
  return (
    <button
      className={`${styles.btn} btn ${btn_size_classes} ${type_btn_classes} ${btn_shape_classes} flex_items align_middle align_horizontal`}
      style={button_types[type]}
    >
      {children}
    </button>
  );
}

export default Button;
