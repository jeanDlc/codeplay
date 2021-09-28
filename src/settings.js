import { $ } from "./utils/dom";
import { dispatch, getState, subscribe } from "./store";
import {
  changeEditorFontSize,
  changeEditorTheme,
} from "./store/actionCreators";
const inputFontSize = $("#editor-font-size");
const selectElemenTheme = $("#editor-select-theme");
//init the default options of the settings menu bar
document.addEventListener("DOMContentLoaded", initSidebarSettings);
function initSidebarSettings() {
  const { fontSize, theme } = getState();
  inputFontSize.value = fontSize;
  selectElemenTheme.value = theme;
}
//listen changes
inputFontSize.addEventListener("change", (e) => {
  const newFontSize = Number(e.target.value);
  dispatch(changeEditorFontSize(newFontSize));
});
selectElemenTheme.addEventListener("change", (e) => {
  const newTheme = e.target.value;
  dispatch(changeEditorTheme(newTheme));
});
