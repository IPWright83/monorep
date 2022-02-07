import * as React from 'react';
import { log } from '@iw/log';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  return <button {...props}>Click ME PLEASE</button>;
};

log('Button Loaded');

export default Button;
