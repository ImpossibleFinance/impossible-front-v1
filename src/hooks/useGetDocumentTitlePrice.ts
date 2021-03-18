import { useEffect } from 'react'
import { usePriceStaxBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = usePriceStaxBusd()
  useEffect(() => {
    document.title = `Impossible Finance - $${Number(cakePriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
