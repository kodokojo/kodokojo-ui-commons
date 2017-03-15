/**
 * Kodo Kojo - Software factory done right
 * Copyright © 2017 Kodo Kojo (infos@kodokojo.io)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import { IntlProvider } from 'react-intl'
import { storiesOf, action } from '@kadira/storybook'

// contexte
const albums = [
  { value: 1, label: 'Radiohead' },
  { value: 2, label: 'Joy Division' },
  { value: 3, label: 'Amon Tobin' },
  { value: 4, label: 'Pixies' }
]
import en from '../../i18n/en'

// component to story
import Dropdown from './Dropdown.component'
import { dropdownItemDefault } from './dropdownItem.component'

storiesOf('Dropdown', module)
  .addDecorator((story) => (
    <IntlProvider locale="en" messages={ en }>
      <div style={{ width: '300px', margin: '50px' }}>
        { story() }
      </div>
    </IntlProvider>
  ))
  .add('default', () => (
    <Dropdown
      auto={ false }
      label="Select something"
      onChange={ () => action('change value') }
      source={ albums }
      template={ dropdownItemDefault }
    />
  ))
  .add('with value', () => (
    <Dropdown
      auto={ false }
      label="Select something"
      onChange={ () => action('change value') }
      source={ albums }
      template={ dropdownItemDefault }
      value={ 1 }
    />
  ))
  .add('errored', () => (
    <Dropdown
      auto={ false }
      error="This is an error"
      label="Select something"
      onChange={ () => action('change value') }
      source={ albums }
      template={ dropdownItemDefault }
      value={ 1 }
      />
  ))
  .add('required', () => (
    <Dropdown
      auto={ false }
      label="Select something"
      onChange={ () => action('change value') }
      required
      source={ albums }
      template={ dropdownItemDefault }
    />
  ))
  .add('disabled', () => (
    <Dropdown
      auto={ false }
      disabled
      label="Select something"
      onChange={ () => action('change value') }
      source={ albums }
      template={ dropdownItemDefault }
    />
  ))
