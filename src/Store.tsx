import React from 'react';

export function createCtx<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState; // we never actually use this
  const ctx = React.createContext({
    state: initialState,
    dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
  });
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, initialState);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ctx.Provider value={{ state, dispatch }} {...props} />;
  }
  return [ctx, Provider] as const;
}

type StoreActionType = { type: 'FETCH_DATA'; payload: string };

const initialState = {
  cpuLoad: '',
  mem: '',
};
type SysInfoState = typeof initialState;

function sysInfoReducer(
  state: SysInfoState,
  action: StoreActionType
): SysInfoState {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, cpuLoad: action.payload };
    default:
      return state;
  }
}

const [Store, StoreProvider] = createCtx(sysInfoReducer, initialState);

export { Store, StoreProvider };
