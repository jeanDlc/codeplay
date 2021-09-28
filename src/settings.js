import { $ } from "./utils/dom";
import { dispatch, getState } from "./store";
import {
  changeEditorFontSize,
  changeEditorTheme,
  changeEditorLineNumbers,
} from "./store/actionCreators";
const inputFontSize = $("#editor-font-size");
const selectElemenTheme = $("#editor-select-theme");
const selectElementLineNumbers = $("#editor-select-line-numbers");

//init the default options of the settings menu bar
document.addEventListener("DOMContentLoaded", initSidebarSettings);
function initSidebarSettings() {
  const { fontSize, theme, lineNumbers } = getState();
  inputFontSize.value = fontSize;
  selectElemenTheme.value = theme;
  selectElementLineNumbers.value = lineNumbers;
}
//listen change of setting editor
inputFontSize.addEventListener("change", (e) => {
  const newFontSize = Number(e.target.value);
  dispatch(changeEditorFontSize(newFontSize));
});
selectElemenTheme.addEventListener("change", (e) => {
  const newTheme = e.target.value;
  dispatch(changeEditorTheme(newTheme));
});
selectElementLineNumbers.addEventListener("change", (e) => {
  const numberLinesConfig = e.target.value;
  dispatch(changeEditorLineNumbers(numberLinesConfig));
});
