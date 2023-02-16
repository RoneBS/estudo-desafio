import { styled } from '@stitches/react'

export const Card = styled('div', {
  width: '9.625rem',
  height: '22.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // border: '2px solid #fede00',
  borderRadius: '8px',
  background: '#000',
  color: '#fff',
  // padding: '0.5rem',
  margin: '2.5rem'
})

export const MovieCover = styled('img', {
  maxWidth: 'fit-content'
  // borderRadius: '8px'
})

export const Text = styled('strong', {
  width: '4cm',
  padding: '0.5rem',
  textAlign: 'center'
})
