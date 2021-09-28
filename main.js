import "./style.css";
import Split from "split-grid"; //to split the panel
import { encode, decode } from "js-base64"; //now can encode emojis
import { createEditor } from "./src/editor";
import "./src/aside";
import "./src/settings";
import { subscribe, getState } from "./src/store";

const $ = (selector) => document.querySelector(selector);
Split({
  columnGutters: [
    {
      track: 1,
      element: $(".vertical-gutter"),
    },
  ],
  rowGutters: [
    {
      track: 1,
      element: $(".horizontal-gutter"),
    },
  ],
});
const { pathname } = window.location;
const [htmlRaw, cssRaw, jsRaw] = pathname.slice(1).split("%7C");
const html = decode(htmlRaw || "");
const css = decode(cssRaw || "");
const js = decode(jsRaw || "");

const $js = $("#js");
const $html = $("#html");
const $css = $("#css");
const htmlEditor = createEditor({
  domEl: $html,
  language: "html",
  value: html,
});
const cssEditor = createEditor({ domEl: $css, language: "css", value: css });
const jsEditor = createEditor({
  domEl: $js,
  language: "javascript",
  value: js,
});
update();

//listening changes of the editor settings
subscribe(() => {
  const newSettings = getState();
  const editors = [htmlEditor, cssEditor, jsEditor];
  editors.forEach((editor) => {
    editor.updateOptions(newSettings);
  });
});

htmlEditor.onDidChangeModelContent(update);
cssEditor.onDidChangeModelContent(update);
jsEditor.onDidChangeModelContent(update);
function update() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();
  const hashedCode = `${encode(html)}|${encode(css)}|${encode(js)}`;

  window.history.replaceState(null, null, `/${hashedCode}`);
  const htmlForPreview = createHtml({ html, js, css });
  $("iframe").setAttribute("srcdoc", htmlForPreview);
}
function createHtml({ html, js, css }) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <style> ${css} </style>
  </head>
  
  <body>
    ${html}
    <script> ${js} </script>
  </body>
  
</html>

  `;
}
