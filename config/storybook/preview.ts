import {Preview} from "@storybook/react";
import {StyleDecorator} from "shared/config/storybook/decorators";


const decorators = [
    StyleDecorator,
]

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                icon: "paintbrush",
                dynamicTitle: true,
                items: [
                    { value: "light", left: "☀️", title: "Light mode" },
                    { value: "dark", left: "🌙", title: "Dark mode" },
                ],
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
    decorators,
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;