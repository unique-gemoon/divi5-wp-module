import { createElement } from 'react';
import { shallow } from 'enzyme';
import {
  forEach,
  pickBy,
  has,
  get,
  omit,
} from 'lodash';

import { registerAppUiStore } from '@divi/app-ui';
import { registerModule, registerModuleLibraryStore } from '@divi/module-library';
import { registerEventsStore } from '@divi/events';
import { registerKeyboardShortcutsStore } from '@divi/keyboard-shortcuts';
import { registerModals } from '@divi/modal-library';
import { registerEditPostStore } from '@divi/edit-post';
import { registerSerializedPostStore } from '@divi/serialized-post';
import { StaticModuleEdit } from '../edit';
import { registerAppPreferencesStore } from '@divi/app-preferences';
import { staticModule } from '..';

import * as editStories  from '../stories/edit.stories';

// Only test story that has description. This naturally excludes `default` export from being included as test.
const testableStories = pickBy(editStories, story => has(story, 'parameters.docs.description.story')) as Omit<typeof editStories, 'default'>;


beforeAll(() => {
  registerModuleLibraryStore();
  registerModule(staticModule.metadata, omit(staticModule, 'metadata'));
});

beforeEach(() => {
  registerAppPreferencesStore();
  registerAppUiStore();
  registerEventsStore();
  registerKeyboardShortcutsStore();
  registerModals();
  registerSerializedPostStore();
  registerEditPostStore();
});

describe('<StaticModuleEdit />', () => {
  // Snapshot test based on storybook configuration.
  // Prevents regression due to unintentionally modifying component.
  forEach(testableStories, testableStory => {
    it(`Should match the snapshot when "${get(testableStory, 'parameters.docs.description.story') as string}"`, () => {
      expect(
        shallow(createElement(StaticModuleEdit, testableStory.args)).html(),
      ).toMatchSnapshot();
    });
  });
});
