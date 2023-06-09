// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  Animation,
  Border,
  BoxShadow,
  FieldContainer,
  Filters,
  Font,
  FontBodyGroup,
  Sizing,
  Spacing,
  Text,
  Transform,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import { ColorPickerContainer, RangeContainer } from '@divi/field-library';

// Local dependencies.
import { defaultSettingsAttrs } from './constants';

export const SettingsDesign = (): ReactElement => (
  <React.Fragment>
    <GroupContainer id="icon" title={__('Icon Style', 'd5-extension-example-modules')}>
      <FieldContainer
        attrName="iconColor"
        label={__('Icon Color', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        sticky={false}
        defaultAttr={defaultSettingsAttrs?.iconColor}
      >
        <ColorPickerContainer />
      </FieldContainer>
      <FieldContainer
        attrName="iconSize"
        label={__('Icon Size', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        sticky={false}
        defaultAttr={defaultSettingsAttrs?.iconSize}
      >
        <RangeContainer />
      </FieldContainer>
    </GroupContainer>
    <Text
      defaultGroupAttr={defaultSettingsAttrs?.text}
      hideElements={{
        color: true,
      }}
    />
    <Font
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="titleFont"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      defaultGroupAttr={defaultSettingsAttrs?.titleFont}
    />
    <FontBodyGroup />
    <Sizing />
    <Spacing />
    <Border />
    <BoxShadow />
    <Filters />
    <Transform />
    <Animation />
  </React.Fragment>
);
