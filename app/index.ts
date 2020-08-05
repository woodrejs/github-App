import "./scss/index.scss";
import { searchBtn } from "../app/global/vars";
import { CheckBox } from "../app/class/CheckBox";
import { getResults } from "../app/utils/getResults";
import { Names } from "../app/ts/enum";
import { Box } from "../app/ts/types";

window.onload = function () {
  ////CHECKBOXES array
  const checkBoxes = [
    new CheckBox(Names.Repo, document.querySelector("#repos") as Box),
    new CheckBox(Names.User, document.querySelector("#users") as Box),
    new CheckBox(Names.Issue, document.querySelector("#issues") as Box),
    new CheckBox(Names.Topic, document.querySelector("#topics") as Box),
  ];
  ////CHECKBOXES state update
  checkBoxes.map((box) => {
    box.targetElement.addEventListener("change", () => {
      for (const box of checkBoxes) box.updateChecked();
    });
  });
  ////get search results
  searchBtn.addEventListener("click", () => getResults(checkBoxes));
};
