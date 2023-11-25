/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "~/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "~/components/ui/table";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "~/components/ui/popover";
import { useEffect, useState } from "react";
import Image from "next/image";

export function FinancialDashboard() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <></>;
  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 p-4 text-gray-800">
        <div className="mb-4 flex items-center space-x-1">
          <Image
            alt="Company Logo"
            height="30"
            src="/placeholder.svg"
            style={{
              aspectRatio: "30/30",
              objectFit: "cover",
            }}
            width="30"
          />
          <h1 className="text-lg font-medium">Acme</h1>
        </div>
        <nav className="space-y-2">
          <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
            <IconHome className="h-4 w-4" />
            <span className="text-sm font-medium">Home</span>
          </button>
          <button className="flex w-full items-center space-x-2 rounded-lg bg-gray-200 px-2 py-2 text-gray-800 active:bg-gray-300">
            <IconTransactions className="h-4 w-4" />
            <span className="text-sm font-medium">Transactions</span>
          </button>
          <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
            <IconAccounts className="h-4 w-4" />
            <span className="text-sm font-medium">Accounts</span>
          </button>
          <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
            <IconTax className="h-4 w-4" />
            <span className="text-sm font-medium">Tax</span>
          </button>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-medium">Transactions</h1>
          <Button
            className="flex items-center space-x-2 rounded-lg bg-gray-800 px-2 py-1 text-sm text-white"
            type="button"
          >
            <IconDownload className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Mar 12</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span className="rounded-md bg-red-200 px-2 py-1 text-red-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$175.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 13</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$450.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$200.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 15</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span className="rounded-md bg-green-200 px-2 py-1 text-green-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$15.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 16</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span className="rounded-md bg-red-200 px-2 py-1 text-red-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Office
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 17</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$350.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 18</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span className="rounded-md bg-blue-200 px-2 py-1 text-blue-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Home
                </span>
              </TableCell>
              <TableCell className="text-right">$100.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 19</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span className="rounded-md bg-green-200 px-2 py-1 text-green-800">
                  <IconTag className="mr-1 inline-block h-4 w-4" />
                  Food
                </span>
              </TableCell>
              <TableCell className="text-right">$20.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      className="rounded bg-transparent px-2 py-1 text-black hover:bg-gray-200 active:bg-gray-300"
                      type="button"
                    >
                      <IconMorevertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconEdit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconShare className="h-4 w-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-200 active:bg-gray-300">
                      <IconDelete className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

function IconAccounts(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconHome(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconDownload(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function IconDelete(props: any) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function IconTax(props: any) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function IconTransactions(props: any) {
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
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function IconShare(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function IconEdit(props: any) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function IconTag(props: any) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

function IconMorevertical(props: any) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
