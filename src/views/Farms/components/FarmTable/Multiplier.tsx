import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

export interface MultiplierProps {
  multiplier: string
}

const MultiplierWrapper = styled.div`
  color: #687fc2;
  background: ${({ theme }) => theme.colors.primaryBright};
  text-align: center;
  font-weight: 700;
  border-radius: 14px;
  font-size: 15px;
  padding: 2px 10px;
`

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 0;
    }
  }
`

const Multiplier: React.FunctionComponent<MultiplierProps> = ({ multiplier }) => {
  const displayMultipler = multiplier || '-'

  return (
    <Container>
      <MultiplierWrapper>{displayMultipler}</MultiplierWrapper>
    </Container>
  )
}

export default Multiplier
