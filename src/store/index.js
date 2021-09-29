import { createStore } from "redux";
import {
  CHANGE_EDITOR_FONT_SIZE,
  CHANGE_EDITOR_THEME,
  CHANGE_EDITOR_LINE_NUMBERS,
} from "./types";
const DEFAULT_STATE = {
  fontSize: 17,
  wordWrap: true,
  theme: "vs-dark", // vs || hc-black
  lineNumbers: "off", // on || relative || interval
  automaticLayout: true,
  fixedOverflowWidgets: true,
  scrollBeyondLastLine: false,
  roundedSelection: false,
  padding: {
    top: 16,
  },
};

//to remember the state, save it in LocalStorage
const lsKey = "editor-settings";
const setStateInLocalStorage = (state = {}) => {
  localStorage.setItem(lsKey, JSON.stringify(state));
};
const getStateOfLocalStorage = () => JSON.parse(localStorage.getItem(lsKey));

// in the render, get the state of LocalStorage (if there is any stored state)
const INITIAL_STATE = getStateOfLocalStorage() || DEFAULT_STATE;
function settings(state = INITIAL_STATE, action) {
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
    case CHANGE_EDITOR_LINE_NUMBERS:
      return {
        ...state,
        lineNumbers: action.payload,
      };
    default:
      return state;
  }
}

export let store = createStore(settings);
store.subscribe(() => {
  //any change of the state, store the that state in LocalStorage
  const state = store.getState();
  setStateInLocalStorage(state);
});
export const subscribe = (callback) => {
  store.subscribe(callback);
};
export function getState() {
  return store.getState();
}
export function dispatch(someActionCreator = {}) {
  store.dispatch(someActionCreator);
}
