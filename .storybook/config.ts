import { configure, addDecorator } from '@storybook/polymer';
import { makeDecorator } from '@storybook/addons';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
