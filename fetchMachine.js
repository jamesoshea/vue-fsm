import { Machine } from "xstate";

const id = "Fetch";

export const fetchMachine = Machine({
  id,
  initial: "idle",
  strict: true,
  states: {
    idle: {
      on: {
        FETCH_DATA_REQUEST: "fetchingData"
      }
    },
    fetchingData: {
      onEntry: ["SHOW_LOADING", "FETCH_DATA"],
      on: {
        SUCCESS: "idle",
        FAILURE: "fetchingData"
      },
      onExit: ["HIDE_LOADING"]
    }
  }
});
