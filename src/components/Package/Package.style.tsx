import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`

export const Item = styled.li`
  padding: 10px 10px;
  font-size: 34px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const List = styled.ul``

export const Name = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

export const Version = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`
