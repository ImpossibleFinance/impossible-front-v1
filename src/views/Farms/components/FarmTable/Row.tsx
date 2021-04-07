import React, { useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from 'uikit'
import useI18n from 'hooks/useI18n'

import Apr, { AprProps } from './Apr'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;
  justify-content: center;
  align-items: center;
`

const StyledRow = styled.div`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.card.background};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(140, 140, 140, 0.23);
`

const StyledRowContent = styled.div`
  display: flex;
  flex-direction: row;
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { details } = props
  const [actionPanelToggled, setActionPanelToggled] = useState(false)
  const TranslateString = useI18n()

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled)
  }

  const cellLabel = (key: string): string => {
    if (key === 'farm' || key === 'details') {
      return ''
    }

    return key
  }

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledRow>
          <StyledRowContent>
            {Object.keys(props).map((key) => {
              if (columnNames.indexOf(key) === -1) {
                return null
              }

              switch (key) {
                case 'details':
                  return (
                    <CellInner key={key} onClick={toggleActionPanel}>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelToggled} />
                      </CellLayout>
                    </CellInner>
                  )
                case 'apr':
                  return (
                    <CellInner key={key}>
                      <CellLayout label={TranslateString(999, 'Apr')}>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  )
                case 'liquidity':
                  return (
                    <CellInner key={key}>
                      <CellLayout
                        label={cellLabel(key)}
                        help={
                          <div>
                            {TranslateString(
                              999,
                              'The multiplier represents the amount of CAKE rewards each farm gets.',
                            )}
                            <br />
                            <br />
                            {TranslateString(
                              999,
                              'For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.',
                            )}
                          </div>
                        }
                      >
                        {React.createElement(cells[key], props[key])}
                      </CellLayout>
                    </CellInner>
                  )
                case 'multiplier':
                  return (
                    <CellInner key={key}>
                      <CellLayout
                        label={cellLabel(key)}
                        help={TranslateString(999, 'The total value of the funds in this farm’s liquidity pool')}
                      >
                        {React.createElement(cells[key], props[key])}
                      </CellLayout>
                    </CellInner>
                  )
                default:
                  return (
                    <CellInner key={key}>
                      <CellLayout label={cellLabel(key)}>{React.createElement(cells[key], props[key])}</CellLayout>
                    </CellInner>
                  )
              }
            })}
          </StyledRowContent>
          {actionPanelToggled && details && (
            <StyledRowContent>
              <ActionPanel {...props} />
            </StyledRowContent>
          )}
        </StyledRow>
      )
    }

    return (
      <StyledRow onClick={toggleActionPanel}>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <EarnedMobileCell>
              <CellLayout label={TranslateString(999, 'Earned')}>
                <Earned {...props.earned} />
              </CellLayout>
            </EarnedMobileCell>
            <AprMobileCell>
              <CellLayout label={TranslateString(999, 'Apr')}>
                <Apr {...props.apr} hideButton />
              </CellLayout>
            </AprMobileCell>
          </tr>
        </td>
        <td>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelToggled} />
            </CellLayout>
          </CellInner>
        </td>
      </StyledRow>
    )
  }

  return <>{handleRenderRow()}</>
}

export default Row
