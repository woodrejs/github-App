export class ResultItem {
  targetElement: HTMLLIElement;
  hostElement: HTMLUListElement;
  linkBox: HTMLLinkElement;
  avatarBox: HTMLImageElement;
  nameBox: HTMLSpanElement;
  descriptionBox: HTMLSpanElement;
  link: string;
  name?: string;
  avatar?: string;
  description?: string;

  constructor(
    link: string,
    avatar?: string,
    name?: string,
    description?: string
  ) {
    const template = document.importNode(
      document.getElementById("template")!,
      true
    ) as HTMLTemplateElement;

    this.targetElement = template.content.childNodes[1] as HTMLLIElement;
    this.hostElement = document.getElementById(
      "resultList"
    )! as HTMLUListElement;
    this.linkBox = this.targetElement.childNodes[1] as HTMLLinkElement;
    this.avatarBox = this.linkBox.childNodes[1] as HTMLImageElement;
    this.nameBox = this.linkBox.childNodes[3] as HTMLSpanElement;
    this.descriptionBox = this.linkBox.childNodes[5] as HTMLSpanElement;
    this.link = link;
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    //init
    this.create();
  }
  create = () => {
    this.hostElement.insertAdjacentElement("afterbegin", this.targetElement);
    this.linkBox.setAttribute("href", this.link);

    if (!this.avatar) this.avatarBox.remove();
    else this.avatarBox.setAttribute("src", this.avatar);

    if (this.name) this.nameBox.innerHTML = this.name;
    if (this.description) this.descriptionBox.innerHTML = this.description;
  };
}
