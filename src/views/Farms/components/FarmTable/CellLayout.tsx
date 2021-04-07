import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Tooltip from '../Tooltip/Tooltip'

const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
`

interface CellLayoutProps {
  label?: string
  help?: ReactNode
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = '', help, children }) => {
  return (
    <div>
      {label && (
        <Label>
          {label}{' '}
          {help && (
            <Tooltip content={help}>
              <div style={{ marginLeft: '6px' }}>
                <img src="/images/HelpIcon.svg" alt="help" />
              </div>
            </Tooltip>
          )}
        </Label>
      )}
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default CellLayout
