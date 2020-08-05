import { resultcontainer } from "../global/vars";

////SHOW INFO (NO RESULTS)
export const showInfo = () => {
  const template = document.importNode(
    document.getElementById("template_noResults")!,
    true
  ) as HTMLTemplateElement;
  const noResultsInfo = template.content.childNodes[1] as HTMLSpanElement;
  resultcontainer.appendChild(noResultsInfo);
};
