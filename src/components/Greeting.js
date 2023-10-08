import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/features/greetingSlice';

function Greeting() {
  const { message } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>{message.greeting}</h1>
    </div>
  );
}

export default Greeting;
