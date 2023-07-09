import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>
                    Incrementar
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>
                    Decrementar
                </button>
            </div>
        </div>
    )
}