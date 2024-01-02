"use client";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { CardHeader, CardContent, Card } from "~/components/ui/card";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import type { Endpoints } from "@octokit/types";
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";

type CommitsResponse =
  Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_API_TOKEN,
});

const CommitCard = ({
  message,
  name,
  date,
  hash,
  avatar_url,
}: {
  message: string;
  name: string;
  date: Date;
  hash: string;
  avatar_url: string;
}) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <Avatar className="h-32 w-32 rounded-full border-2 border-gray-300">
            <AvatarImage src={avatar_url} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Badge className="text-sm" variant="secondary">
            Hash: {hash}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div>
          <p className="mt-2 text-gray-500">Commit message: {message}</p>
          <p className="mt-2 text-gray-500">Author: {name}</p>
          <p className="mt-2 text-gray-500">Date: {date.toDateString()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export function GithubCommits({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) {
  const [commits, setCommits] = useState<CommitsResponse>();

  useEffect(() => {
    const getCommits = async () => {
      const results = await octokit.request(
        "GET /repos/{owner}/{repo}/commits",
        {
          owner,
          repo,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        },
      );
      setCommits(results.data);
    };
    void getCommits();
  }, [owner, repo]);

  return (
    <main className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Commit History</h1>
        <Button variant="outline">
          <RefreshCwOffIcon className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>
      <div className="space-y-6">
        {commits?.map((commit) => {
          return (
            <CommitCard
              key={commit.sha}
              message={commit.commit.message}
              name={commit.commit.author?.name ?? ""}
              date={new Date(commit.commit.author?.date ?? "")}
              hash={commit.sha}
              avatar_url={commit.author?.avatar_url ?? ""}
            />
          );
        })}
      </div>
    </main>
  );
}

function RefreshCwOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
      <path d="M8 16H3v5" />
      <path d="M3 12C3 9.51 4 7.26 5.64 5.64" />
      <path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
      <path d="M21 12c0 1-.16 1.97-.47 2.87" />
      <path d="M21 3v5h-5" />
      <path d="M22 22 2 2" />
    </svg>
  );
}
