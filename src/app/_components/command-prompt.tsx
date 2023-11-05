"use client";

import React, { useEffect, useRef, useState } from "react";

const line_divider = "--------------------------";

const initial_message = `Welcome to my website. Type "exit" to return to Google. Type "help" for a list of commands.`;

const help_message = `Commands:
exit -------- Exits back to Google
help -------- Show this help command
ls ---------- Shows my complete portfolio of apps to view
show {app} -- Shows the app called {app}
`;

type App = {
  name: string;
  href: string;
};

const apps: App[] = [
  {
    name: "t3-stack",
    href: "/t3-stack",
  },
];

const ls_message = `Apps:
${apps.map((g) => g.name).join("\n")}
`;

type ParseTextReturn = {
  type: "message" | "href";
  message: string;
  target?: "blank" | null;
};

const parseText = (text: string): ParseTextReturn => {
  const parts = text.split(" ");
  if (parts[0] === "exit") {
    return {
      type: "href",
      message: "/",
    };
  } else if (parts[0] === "help") {
    return {
      type: "message",
      message: help_message,
    };
  } else if (parts[0] === "ls") {
    return {
      type: "message",
      message: ls_message,
    };
  } else if (parts[0] === "show") {
    const name = parts[1] || "";
    const app = apps.find((g) => g.name === name);
    if (!app) {
      return {
        type: "message",
        message: "app not found",
      };
    }
    return {
      type: "href",
      message: app.href,
      target: "blank",
    };
  }
  return {
    type: "message",
    message: "Unknown command",
  };
};

type Text = {
  text: string;
};

type CommandPromptInputProps = {
  onEnter: (text: string) => void;
};

const CommandPromptInput: React.FC<CommandPromptInputProps> = ({ onEnter }) => {
  const [text, setText] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const message = parseText(text.trim());
      if (message.type === "href") {
        if (message?.target === "blank") {
          window.open(message.message, "_blank");
          onEnter("Opened window");
          setText("");
        } else {
          void window.open(message.message, "_blank");
        }
        return;
      }
      onEnter(message.message);
      setText("");
    }
  };
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className="flex gap-2">
      <div>&gt;</div>
      <input
        ref={ref}
        autoFocus={true}
        type="text"
        className="w-full border-none bg-black outline-none"
        value={text}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onBlur={({ target }) => target.focus()}
      />
    </div>
  );
};

type Props = {
  logo: string;
};

export const CommandPrompt: React.FC<Props> = ({ logo }) => {
  const [text, setText] = useState<Text[]>([{ text: initial_message }]);
  const handleOnEnter = (value: string) => {
    setText([...text, { text: value }]);
  };
  return (
    <div className="h-screen w-screen bg-black text-green-500">
      <div className="p-5">
        <div className="hidden sm:block">
          <pre>{logo}</pre>
          <div>{line_divider}</div>
        </div>
        <div className="block sm:hidden">
          <pre className="text-xl">Andrew G Bliss</pre>
          <div>{line_divider}</div>
        </div>
        {text.map((row, i) => {
          return (
            <div key={i}>
              {row.text.split("\n").map((line, j) => (
                <div key={j}>{line}</div>
              ))}
            </div>
          );
        })}
        <div>
          <CommandPromptInput onEnter={handleOnEnter} />
        </div>
      </div>
    </div>
  );
};
