import { styled } from '@stitches/react'
import { Link } from 'react-router-dom'

export const Container = styled('header', {
  maxWidth: '100%',
  height: '5rem',
  background: '#000'
})

export const Navbar = styled('nav', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem'
})

export const LinkContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  textDecoration: 'none',

  p: {
    marginLeft: '10px',
    fontFamily: 'Helvetica, sans-serif',
    color: 'white',
    fontWeight: 600
  }
})

export const InputHeader = styled('input', {
  width: '20rem',
  height: '2.2rem',
  border: '2px solid yellow',
  borderRadius: '8px',
  background: 'gray',
  color: 'white'
})

export const ModalContainer = styled('div', {
  height: '340px',
  overflow: 'scroll',
  position: 'absolute',
  background: 'white',
  zIndex: '1'
})
