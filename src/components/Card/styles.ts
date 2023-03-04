import styled from 'styled-components'

export const Card = styled.div`
  width: 14rem;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #d6d6d6;
  border-radius: 6px;
  background-color: #000;
  color: #fff;
`

export const MovieCover = styled.img`
  width: 224px;
  object-fit: cover;
`

export const Text = styled.strong`
  width: 4cm;
  padding: 0.5rem;
  text-align: center;
`
