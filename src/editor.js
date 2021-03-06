import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { emmetHTML } from "emmet-monaco-es";
import { getState } from "./store";
emmetHTML(monaco);
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};
const COMMON_OPTIONS_EDITOR = {
  automaticLayout: true,
  fixedOverflowWidgets: true,
  scrollBeyondLastLine: false,
  roundedSelection: false,
  padding: {
    top: 16,
  },
};
const settings = getState();
export const createEditor = ({ domEl, value, language }) => {
  return monaco.editor.create(domEl, {
    value,
    language,
    ...COMMON_OPTIONS_EDITOR,
    ...settings,
  });
};
