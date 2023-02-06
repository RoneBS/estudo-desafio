import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '460px',
  height: 'auto',
  // position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  left: '300px',
  zIndex: '9999'
})

export const MovieContainer = styled('div', {
  width: '860px',
  height: 'auto',
  display: 'flex',

  img: {
    width: '84px',
    height: '84px'
  }
})
