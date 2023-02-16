import { styled } from '@stitches/react'

export const Container = styled('div', {})

export const DetailContainer = styled('div', {
  position: 'relative'
})

export const ImgPoster = styled('img', {
  maxWidth: '1200px',
  filter: ' brightness(75%)'
})

export const Title = styled('strong', {
  fontSize: '2rem',
  color: 'white',
  position: 'absolute',
  zIndex: 1
})
