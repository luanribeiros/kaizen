import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { exampleLoading } from '../../store/example/actions';

const Example: React.FC = () => {
  const exam = useSelector((state: ApplicationState) => state.example.data);

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleLoading());
  }, []);

  return (
    <ul>
      {exam.map((ex, index) => (
        <li key={index}>{ex.name}</li>
      ))}
    </ul>
  );
};

export default Example;
