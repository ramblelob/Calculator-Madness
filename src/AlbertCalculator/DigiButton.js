import { ACTIONS } from "./AlbertCalculator"

export default function DigiButton({ dispatch, digit }) {
    return (
      <button
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      >
        {digit}
      </button>
    )
  }