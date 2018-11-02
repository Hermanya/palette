import * as React from 'react';
import { SliderItem, GetHandleProps } from 'react-compound-slider';

interface IHandleProps {
  divOrButton: string;
  name: string;
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}

const size: number = 30;

export const Handle: React.SFC<IHandleProps> = ({
  divOrButton: Comp,
  domain: [min, max],
  handle: { id, value, percent },
  name,
  getHandleProps
}) => (
  <Comp
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    name={name}
    title={name}
    style={{
      left: `${percent}%`,
      position: 'absolute',
      transform: 'translate3d(-50%,-50%,0)',
      top: '50%',
      zIndex: 2,
      width: size,
      height: size,
      cursor: 'pointer',
      borderRadius: '50%',
      border: 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,.16)',
      backgroundColor: '#f8f9fa'
    }}
    {...getHandleProps(id)}
  />
);

interface IMyRailProps {
  background: string;
}

export const MyRail: React.SFC<IMyRailProps> = ({ background, ...props }) => (
  <div
    style={{
      background,
      height: 14,
      borderRadius: 7,
      cursor: 'pointer',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,.4)'
    }}
    {...props}
  />
);
