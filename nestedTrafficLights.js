import { Machine } from 'xstate';

const pedestrianStates = {
  initial: 'walk',
  states: {
    walk: {
      on: {
        PED_TIMER: 'wait',
      },
    },
    wait: {
      on: {
        PED_TIMER: 'stop',
      },
    },
    stop: {},
  },
};

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
      ...pedestrianStates,
    },
  },
});

let currentState = 'yellow';

let nextState = lightMachine.transition(currentState, 'TIMER').value;
console.log(nextState);

nextState = lightMachine.transition({ red: 'walk' }, 'PED_TIMER').value;
console.log(nextState);
