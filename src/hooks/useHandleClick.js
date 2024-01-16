import { useState } from 'react'

export const useHandleClick = () => {
  const [quantidade, setQuantidade] = useState(1)

  const handleMinusClick = () => {
      if (quantidade > 1) {
          setQuantidade(quantidade - 1)
      }
  }

  const handlePlusClick = () => {
      setQuantidade(quantidade + 1)
  }

  const showVariable = () => {
      alert(quantidade)
  }

  return {
    handleMinusClick,
    handlePlusClick, 
    showVariable
  }
}
