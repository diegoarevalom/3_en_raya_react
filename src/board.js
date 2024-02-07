import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //para ver si X u O gano
    for(const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x -> x u o -> o
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    //Si no hay ganador
    return null
  }
