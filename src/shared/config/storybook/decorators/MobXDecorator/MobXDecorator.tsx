import { MobXProvider } from "app/providers/MobXProvider";
import { StoryFn } from "@storybook/react";
import { RootStore } from "app/providers/MobXProvider/config/rootStore";

export const MobXDecorator = (store: RootStore) => (Story: StoryFn) => (
  <MobXProvider store={store}>
    <Story />
  </MobXProvider>
);
