import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  max-width: 100%;
  height: 5rem;
  background: #000;
`

export const Navbar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;

  p {
    margin-left: 10px;
    font-family: Helvetica, sans-serif;
    color: white;
    font-weight: 600;
  }
`

export const InputHeader = styled.input`
  width: 20rem;
  height: 2.2rem;
  border: 2px solid yellow;
  border-radius: 8px;
  background: gray;
  color: white;
`

export const ModalContainer = styled.div`
  height: 340px;
  overflow: scroll;
  position: absolute;
  background: white;
  z-index: 1;
`
