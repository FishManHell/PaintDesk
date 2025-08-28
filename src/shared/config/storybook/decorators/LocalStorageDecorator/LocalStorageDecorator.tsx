import { Decorator } from "@storybook/react";

export const LocalStorageDecorator = <T,>(key: string, value: T): Decorator => {
  return (Story) => {
    localStorage.setItem(key, JSON.stringify(value));
    return <Story />;
  };
};
