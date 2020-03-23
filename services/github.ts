import axios from "axios";

export async function typescriptRepos(): Promise<any> {
  return (
    await axios.get(
      "https://api.github.com/search/repositories?q=language:typescript&sort=stars&order=desc&per_page=30"
    )
  ).data;
}
