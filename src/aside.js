import { $, $$ } from "./utils/dom";
const buttons = $$("[data-action]");
const settingsContainer = $(".settings-container");
const ACTIONS = {
  "open-settings-bar": () => {
    settingsContainer.removeAttribute("hidden");
  },
  "close-settings-bar": () => {
    settingsContainer.setAttribute("hidden", "");
  },
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    $(".is-active").classList.remove("is-active");
    btn.classList.add("is-active");
    const actionKey = btn.getAttribute("data-action");
    ACTIONS[actionKey]();
  });
});
