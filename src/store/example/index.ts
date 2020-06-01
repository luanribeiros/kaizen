import { Reducer } from 'redux';
import { ExampleState, ExampleTypes } from './types';

const INITIAL_STATE: ExampleState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ExampleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExampleTypes.EXAMPLE_LOADING:
      return { ...state, loading: true };
    case ExampleTypes.EXAMPLE_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case ExampleTypes.EXAMPLE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
