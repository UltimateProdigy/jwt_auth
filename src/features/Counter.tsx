import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	reset,
} from "./counter/counterSlice";
import { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

const Counter = () => {
	const count = useSelector((state: any) => state.counter.count);
	const dispatch = useDispatch();
	const [incrementValue, setIncrementValue] = useState(0);

	const addValue = Number(incrementValue) || 0;

	const resetAll = () => {
		setIncrementValue(0);
		dispatch(reset());
	};
	return (
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<Box mt={10}>
				<Input
					type="text"
					value={incrementValue}
					onChange={(e) =>
						setIncrementValue(parseInt(e.target.value))
					}
				/>
			</Box>
			<Box>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>
					Add Amount
				</button>
				<button onClick={() => resetAll()}>Reset All</button>
			</Box>
		</div>
	);
};

export default Counter;
