import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../app/slices/exampleSlice";

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.example.value);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
