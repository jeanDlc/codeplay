import {
  CHANGE_EDITOR_FONT_SIZE,
  CHANGE_EDITOR_THEME,
  CHANGE_EDITOR_LINE_NUMBERS,
} from "./types";
export function changeEditorFontSize(fontSize = 18) {
  return {
    type: CHANGE_EDITOR_FONT_SIZE,
    payload: fontSize,
  };
}
export function changeEditorTheme(theme = "vs") {
  return {
    type: CHANGE_EDITOR_THEME,
    payload: theme,
  };
}
export function changeEditorLineNumbers(lineNumbers = "off") {
  return {
    type: CHANGE_EDITOR_LINE_NUMBERS,
    payload: lineNumbers,
  };
}
