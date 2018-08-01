import { Machine } from 'xstate';

const lightMachine = Machine({
  key: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow',
      },
    },
    yellow: {
      on: {
        TIMER: 'red',
      },
    },
    red: {
      on: {
        TIMER: 'green',
      },
    },
  },
});

const currentState = 'green';

const nextState = lightMachine.transition(currentState, 'TIMER');
console.log(nextState);

const nextNextState = lightMachine.transition(nextState, 'TIMER');
console.log(nextNextState.value);
