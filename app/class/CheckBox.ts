import { ResultItem } from "./ResultItem";
import { showInfo } from "../utils/showInfo";
import { Data, Header } from "../ts/types";

export class CheckBox {
  public name: string;
  public targetElement: HTMLInputElement;
  public checked: boolean;
  private hostElement: HTMLUListElement;
  private searchInput: HTMLInputElement;
  private HEADERS: Header;

  constructor(name: string, targetElement: HTMLInputElement) {
    this.name = name;
    this.targetElement = targetElement;
    this.checked = targetElement.checked;
    this.HEADERS = {
      headers: { Accept: "application/vnd.github.mercy-preview+json" },
    };
    this.hostElement = document.getElementById(
      "resultList"
    )! as HTMLUListElement;
    this.searchInput = document.querySelector(
      "#searchZone"
    )! as HTMLInputElement;
  }
  public updateChecked() {
    this.checked = this.targetElement.checked;
  }
  public clear() {
    this.hostElement.innerHTML = "";
  }
  public fetchData() {
    this.clear();
    const URL = `https://api.github.com/search/${this.name}?q=${this.searchInput.value}`;

    return fetch(URL, this.HEADERS)
      .then((resp) => resp.json())
      .then((resp) => {
        const resultsTotal: number = resp.total_count;
        if (!resultsTotal) {
          showInfo();
        } else {
          switch (this.name) {
            case "repositories":
              return this.getRepositories(resp);
            case "users":
              return this.getUsers(resp);
            case "issues":
              return this.getIssues(resp);
            case "topics":
              return this.getTopics(resp);
            default:
              break;
          }
        }
      });
  }
  private getRepositories(resp: { items: Data[] }) {
    resp.items.forEach((item) => {
      const { html_url, owner } = item;
      new ResultItem(html_url, owner!.avatar_url, owner!.login);
    });
  }
  private getUsers(resp: { items: Data[] }) {
    resp.items.forEach((item) => {
      const { html_url, avatar_url, login } = item;
      new ResultItem(html_url, avatar_url, login);
    });
  }
  private getTopics(resp: { items: Data[] }) {
    resp.items.forEach((item) => {
      const { url, name, created_at } = item;
      new ResultItem(url!, undefined, name, created_at);
    });
  }
  private getIssues(resp: { items: Data[] }) {
    resp.items.forEach((item) => {
      const { html_url, user, title } = item;
      new ResultItem(html_url, user!.avatar_url, title);
    });
  }
}
