import { $ } from "./utils/dom";
import { isPositive } from "./utils";
import { dispatch, getState } from "./store";
import {
  changeEditorFontSize,
  changeEditorTheme,
  changeEditorLineNumbers,
  changeEditorWordWrap,
} from "./store/actionCreators";
const inputFontSize = $("#editor-font-size");
const selectElemenTheme = $("#editor-select-theme");
const selectElementLineNumbers = $("#editor-select-line-numbers");
const selectElementWordWrap = $("#editor-select-word-wrap");

//init the default options of the settings menu bar
document.addEventListener("DOMContentLoaded", initSidebarSettings);
function initSidebarSettings() {
  const { fontSize, theme, lineNumbers, wordWrap } = getState();
  inputFontSize.value = fontSize;
  selectElemenTheme.value = theme;
  selectElementLineNumbers.value = lineNumbers;
  selectElementWordWrap.value = wordWrap;
}
//listen change of setting editor
inputFontSize.addEventListener("change", (e) => {
  const newFontSize = Number(e.target.value);
  if (isPositive(newFontSize)) {
    dispatch(changeEditorFontSize(newFontSize));
  }
});
selectElemenTheme.addEventListener("change", (e) => {
  const newTheme = e.target.value;
  dispatch(changeEditorTheme(newTheme));
});
selectElementLineNumbers.addEventListener("change", (e) => {
  const numberLinesConfig = e.target.value;
  dispatch(changeEditorLineNumbers(numberLinesConfig));
});
selectElementWordWrap.addEventListener("change", (e) => {
  const wordWrap = e.target.value;
  dispatch(changeEditorWordWrap(wordWrap));
});
