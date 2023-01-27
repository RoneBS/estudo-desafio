import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

export const CardContainer = styled('div', {
  maxWidth: '78rem',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '2px solid #fede00',
  background: '#000',
  color: '#fff',
  padding: '0.5rem',
  margin: '0.5rem'
})

export const MovieCover = styled('img', {
  maxWidth: 'fit-content'
})

export const Text = styled('strong', {
  width: '10cm',
  padding: '0.5rem',
  textAlign: 'center'
})
