import { createMachine } from "xstate";
import { inspect } from '@xstate/inspect';
inspect({iframe: false});

// This machine is completely decoupled from Svelte
export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});
