import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.input};
  min-height: 96px;

  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;
  flex-direction: row;
  display: flex;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    max-height: 100px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 48px;
    margin-right: 0;
    margin-bottom: 0;
    max-height: 100px;
  }
`

export const ActionTitles = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  flex: 1;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const Subtle = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 2;
`
export const Earned = styled.div<{grey?: boolean}>`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: ${({ theme, grey }) => grey ? theme.colors.contrast : theme.colors.text};
`

export const Staked = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`
