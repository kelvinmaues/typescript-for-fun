/**
 * Generics Patterns:
 * S => State
 * T => Type
 * K => Key
 * V => Value
 * E => Element
 */

type numOrStr = number | string;

function useState<S extends numOrStr = string>() {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState("foo");
console.log(newState.getState());

newState.setState(123);
console.log(newState.getState());
