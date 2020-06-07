/** @jsx jsx */
import styled from '@emotion/styled';
import { createBoxShadow, numHexToRgbaArray } from '../utils/styling';

const brightColor = 0xFF7F9D;
const baseColorString = `rgba(${numHexToRgbaArray(0xEF486F, 0.9).join(', ')})`
const hoverColorString = `rgba(${numHexToRgbaArray(0xEF486F, 1).join(', ')})`

const creatButtonShadow = (alpha: number) => createBoxShadow([
  {
    x: 0,
    y: 0,
    blur: 0,
    inset: true,
    scale: 1,
    color: {
      hex: 0xFFFFFF,
      opacity: 0.5,
    },
  },
  {
    x: 1,
    y: 2,
    blur: 10,
    scale: 4,
    color: {
      hex: brightColor,
      opacity: alpha / 2
    },
  },
  {
    x: 10,
    y: 20,
    blur: 40,
    scale: 4,
    color: {
      hex: brightColor,
      opacity: 0.1,
    },
  }
]);

const boxShadow = creatButtonShadow(0.5);
const boxShadowHover = creatButtonShadow(1);
export const Button = styled.button(() => {
  return {
    cursor: 'pointer',
    width: '100%',
    padding: '5px 10px',
    backgroundColor: baseColorString,
    color: '#EEE',
    fontWeight: 600,
    fontSize: '1.8rem',
    letterSpacing: 1.5,
    boxShadow,
    borderRadius: 7,
    transitionDuration: '200ms',
    '&:hover': {
      boxShadow: boxShadowHover,
      backgroundColor: hoverColorString,
      color: '#FFF',
    }
  };
});
