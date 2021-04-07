import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType } from 'uikit'
import useI18n from 'hooks/useI18n'

import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  sortColumn?: string
}

const Container = styled.div`
  width: 100%;
  margin: 16px 0px;
`

const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.div`
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`

const TableContainer = styled.div`
  position: relative;
}
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

export default React.forwardRef((props: ITableProps) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const TranslateString = useI18n()
  const { data, columns } = props

  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <TableContainer>
        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <TableBody>
              {rows.map((row) => {
                return <Row {...row.original} key={`table-row-${row.id}`} />
              })}
            </TableBody>
          </StyledTable>
        </TableWrapper>
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {TranslateString(999, 'To Top')}
            <ChevronUpIcon color="primary" />
          </Button>
        </ScrollButtonContainer>
      </TableContainer>
    </Container>
  )
})
