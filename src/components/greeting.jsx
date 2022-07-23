import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGreeting } from '../redux/greeting/reducer';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  const [greeting, setGreeting] = useState('');
  const fetchGreeting = useSelector((state) => state.greeting);
  useEffect(() => {
    (setGreeting(fetchGreeting));
  }, [fetchGreeting]);
  return (
    <div>
      <div className="greeting">
        (
        <h1>{greeting}</h1>
        )
      </div>
    </div>
  );
}

export default Greeting;
