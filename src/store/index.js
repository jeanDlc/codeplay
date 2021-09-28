import { createStore } from "redux";
import { CHANGE_EDITOR_FONT_SIZE, CHANGE_EDITOR_THEME } from "./types";
const COMMON_EDITOR_OPTIONS = {
  fontSize: 17,
  wordWrap: true,
  theme: "vs-dark",

  automaticLayout: true,
  fixedOverflowWidgets: true,
  scrollBeyondLastLine: false,
  roundedSelection: false,
  padding: {
    top: 16,
  },
};
function settings(state = COMMON_EDITOR_OPTIONS, action) {
  switch (action.type) {
    case CHANGE_EDITOR_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload,
      };
    case CHANGE_EDITOR_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
export const subscribe = (callback) => {
  store.subscribe(callback);
};
export function getState() {
  return store.getState();
}
export function dispatch(someActionCreator = {}) {
  store.dispatch(someActionCreator);
}
export let store = createStore(settings);