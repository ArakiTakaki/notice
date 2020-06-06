/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { createNeumorphismOuter } from '../utils/neumorphism';
import { useState, useEffect } from 'react';
// TODO 構成考える。

const toastWrap = css({
  position: 'fixed',
  top: 10,
  right: 10,
  borderRadius: 20,
  overflow: 'hidden',
  padding: 5,
  visibility: 'visible',
  opacity: 1,
  transitionDuration: '250ms',
  transitionProperty: 'box-shadow, visibility, opacity',
}, createNeumorphismOuter(5));

const toastWrapHide = css({
  opacity: 0,
  visibility: 'hidden'
}, createNeumorphismOuter(0));

const toastContent = css({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  '& > .image': {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: '50%',
  },
  '& > .textContent': {
    paddingLeft: 20,
  },
});

/**
 * icon?
 * title
 * message?
 * onClickPrimary?
 * primaryText?
 * onClickSecondary?
 * secondaryText?
 *
 */
export const Toast = (
  props: {
    icon?: string;
    title?: string;
    message?: string;
    onClickPrimary?: () => void;
    primaryText?: string;
    onClickSecondary?: () => void;
    secondaryText?: string;
  }
) => {
  const [isHide, setHide] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 1000);
  }, []);
  const style = isHide ? toastWrapHide: {};
  return (
    <div css={{
      ...toastWrap,
      ...style
    }}>
      <div css={toastContent}>
        <img
          className="image"
          src="http://arch.casio.jp/image/dc/images/fh20_gallery_pic04.jpg"
          alt=""
        />
        <div className="textContent">
          <h1 className="title">title</h1>
          <div className="content">content</div>
        </div>
        <div className="buttons">
          <button className="primary">okbutton</button>
          <button className="secondary">ngbutton</button>
        </div>
      </div>
    </div>
  );
};

