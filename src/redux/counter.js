// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from "./slice";

// function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState("2");

//   return (
//     <>
//       <div className="calculate">
//         <button onClick={() => dispatch(increment())}>+</button>
//         <span>{count}</span>
//         <button onClick={() => dispatch(decrement())}>-</button>
//         <form>
//           <input
//             type="text"
//             value={incrementAmount}
//             onChange={(e) => setIncrementAmount(e.target.value)}
//           />
//           <button
//             onClick={() =>
//               dispatch(incrementByAmount(Number(incrementAmount) || 0))
//             }
//           >
//             Add Amount
//           </button>
//           <button
//             onClick={() =>
//               dispatch(incrementAsync(Number(incrementAmount) || 0))
//             }
//           >
//             Add Async
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Counter;
