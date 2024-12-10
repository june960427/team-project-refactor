import styled from 'styled-components'

export const DefaultContainer = styled.div`
  --header-height: 48px;
  --nav-height: 60px;

  height: calc(100vh - var(--header-height) - var(--nav-height));
`
