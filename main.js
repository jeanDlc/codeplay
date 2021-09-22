import "./style.css";
import Split from "split-grid"; //to split the panel
import { encode, decode } from "js-base64"; //now can encode emojis

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

const $js = $("#js");
const $html = $("#html");
const $css = $("#css");
function init() {
  const { pathname } = window.location;
  const [html, css, js] = pathname.slice(1).split("%7C");
  $html.value = decode(html);
  $css.value = decode(css);
  $js.value = decode(js);
  update();
}
$js.addEventListener("input", (e) => {
  update();
});
$html.addEventListener("input", (e) => {
  update();
});

$css.addEventListener("input", (e) => {
  update();
});
const update = () => {
  const html = $html.value;
  const css = $css.value;
  const js = $js.value;
  const hashedCode = `${encode(html)}|${encode(css)}|${encode(js)}`;

  window.history.replaceState(null, null, `/${hashedCode}`);
  const htmlForPreview = createHtml({ html, js, css });
  $("iframe").setAttribute("srcdoc", htmlForPreview);
};
const createHtml = ({ html, js, css }) => {
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
};
init();
