/** @jsx jsx */
import styled from '@emotion/styled';
import { createBoxShadow } from '../utils/styling';

const creatButtonShadow = (isHover: boolean) => createBoxShadow([
  {
    x: -1,
    y: -1,
    inset: true,
    blur: 3,
    color: {
      hex: 0xFFFFFF,
      opacity: 1,
    }
  },
  {
    x: 1,
    y: 1,
    inset: true,
    blur: 3,
    color: {
      hex: 0x000000,
      opacity: 0.1,
    }
  },
  {
    x: -6,
    y: -6,
    blur: 10,
    color: {
      hex: 0xFFFFFF,
      opacity: isHover ? 1 : 0.8,
    }
  },
  {
    x: 6,
    y: 6,
    blur: 10,
    color: {
      hex: 0x999999,
      opacity: isHover ? 0.5 : 0.2,
    }
  }
]);

const boxShadow = creatButtonShadow(false);
const boxShadowHover = creatButtonShadow(true);
export const Button = styled.button(() => {
  return {
    cursor: 'pointer',
    width: '100%',
    padding: '5px 10px',
    fontWeight: 300,
    fontSize: '1.8rem',
    letterSpacing: 1.5,
    boxShadow,
    borderRadius: 10,
    transitionDuration: '200ms',
    '&:hover': {
      boxShadow: boxShadowHover,
    },
  };
});
