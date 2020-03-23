import React, { FC, useEffect, useState } from "react";
import { typescriptRepos } from "../services/github";

interface IRepoData {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  homepage: string;
  updated_at: string;
}

interface IGithubData {
  total_count: number;
  items: IRepoData[];
}

const GithubSummary: FC = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [repoData, setRepoData] = useState<IRepoData[] | null>(null);

  useEffect(() => {
    typescriptRepos().then((data: IGithubData) => {
      console.log(data);

      const { total_count, items } = data;
      setTotalCount(total_count);
      setRepoData(items);
    });
  }, []);

  if (repoData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-3">Total count: {totalCount.toLocaleString()}</div>
      {repoData && (
        <table className="table table-striped w-100 h-100">
          <thead>
            <tr>
              <th>Repository</th>
              <th>Stars</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {repoData.map((item: IRepoData) => (
              <tr key={item.id} title={item.description}>
                <td>{item.full_name}</td>
                <td>{item.stargazers_count.toLocaleString()}</td>
                <td>
                  <a href={item.html_url} target="_blank">
                    {item.html_url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GithubSummary;
