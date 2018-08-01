import { Machine } from 'xstate';

const wordMachine = Machine({
  parallel: true,
  initial: {
    bold: 'disabled',
    underline: 'disabled',
  },
  states: {
    bold: {
      initial: 'disabled',
      states: {
        enabled: {
          on: {
            TOGGLE_BOLD: 'disabled',
          },
        },
        disabled: {
          on: {
            TOGGLE_BOLD: 'enabled',
          },
        },
      },
    },
    underline: {
      initial: 'disabled',
      states: {
        enabled: {
          on: {
            TOGGLE_UNDERLINE: 'disabled',
          },
        },
        disabled: {
          on: {
            TOGGLE_UNDERLINE: 'enabled',
          },
        },
      },
    },
  },
});

const initialState = wordMachine.transition('bold.disabled', 'TOGGLE_BOLD')
  .value;
console.log(initialState);
