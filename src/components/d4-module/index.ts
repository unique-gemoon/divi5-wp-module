// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';

// Local dependencies.
import metadata from './module.json';
import { D4ModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { D4ModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';


export const d4Module: ModuleRegisterDefinition<D4ModuleAttrs> = {
  metadata,
  placeholderContent,
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: D4ModuleEdit,
  },
};
