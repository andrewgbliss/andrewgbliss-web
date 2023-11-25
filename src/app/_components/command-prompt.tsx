"use client";

import React, { useEffect, useRef, useState } from "react";
import { apps } from "types/apps";

const line_divider = "--------------------------";

const initial_message = `Welcome to my website. You are about to become a hacker. Type "help" for a list of commands.`;

const help_message = `Commands:
help -------- Show this help command
ls ---------- Shows my complete portfolio of apps to view
show {app} -- Shows the app called {app}
clear ------- Clears the screen
`;

const ls_message = `Apps:
${apps
  .filter((g) => g.show !== false)
  .map((g) => g.name)
  .join("\n")}
`;

type ParseTextReturn = {
  type: "message" | "href";
  message: string;
  target?: "blank" | null;
};

const parseText = (text: string): ParseTextReturn => {
  const parts = text.split(" ");
  if (parts[0] === "help") {
    return {
      type: "message",
      message: help_message,
    };
  } else if (parts[0] === "ls") {
    return {
      type: "message",
      message: ls_message,
    };
  } else if (parts[0] === "clear") {
    return {
      type: "message",
      message: "clear",
    };
  } else if (parts[0] === "show") {
    const name = parts[1] ?? "";
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

const parseTab = (
  text: string,
): { command: string; message: string } | undefined => {
  const parts = text.split(" ");
  if (parts[0] === "show") {
    const name = parts[1] ?? "";
    const app = apps.find((g) => g.name.startsWith(name));
    return { command: "show", message: app?.name ?? name };
  }
};

type Text = {
  text: string;
};

type CommandPromptInputProps = {
  onEnter: (text: string) => void;
  clearText: () => void;
};

const CommandPromptInput: React.FC<CommandPromptInputProps> = ({
  onEnter,
  clearText,
}) => {
  const [text, setText] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if key is tab
    if (e.key === "Tab") {
      e.preventDefault();
      const results = parseTab(text.trim());
      if (results) {
        setText(results.command + " " + results.message);
      }
      return;
    }
    if (e.key === "Enter") {
      const message = parseText(text.trim());
      console.log(message);
      if (message.type === "message" && message.message === "clear") {
        clearText();
        setText("");
        return;
      } else if (message.type === "href") {
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
  const clearText = () => {
    console.log("clearing text");
    setText([{ text: initial_message }]);
  };
  return (
    <div
      style={{ fontFamily: "DOS" }}
      className="h-screen w-screen bg-black text-green-500"
    >
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
          <CommandPromptInput onEnter={handleOnEnter} clearText={clearText} />
        </div>
      </div>
    </div>
  );
};
