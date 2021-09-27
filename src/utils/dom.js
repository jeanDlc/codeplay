export function $(selector = "", context = document) {
  return document.querySelector(selector);
}
export function $$(selector = "", context = document) {
  return document.querySelectorAll(selector);
}
