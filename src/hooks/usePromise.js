import React, { useCallback, useReducer } from 'react';

export default function usePromise(promisingFn) {
  const initialState = {
    isLoading: false,
    isLoaded: false,
    result: null,
    error: null,
  };

  function reducer(state, { type, result, error }) {
    switch (type) {
      case 'start':
        return {
          ...initialState,
          isLoading: true,
        };
      case 'loaded':
        return {
          ...initialState,
          isLoaded: true,
          result,
        };
      case 'error':
        return {
          ...initialState,
          isLoaded: true,
          error,
        };
      case 'reset':
        return initialState;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const load = useCallback(async () => {
    dispatch({ type: 'reset' });
    dispatch({ type: 'start' });
    try {
      const response = await promisingFn;
      dispatch({ type: 'loaded', result: response });
    } catch (error) {
      console.error('Promise Error', error);
      dispatch({ type: 'error', error });
    }
  });

  return { ...state, load, reload: load };
}
