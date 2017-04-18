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
import en from '../../i18n/en'

// component to story
import Autocomplete from './Autocomplete.component'

const testArray = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6']

storiesOf('Autocomplete', module)
  .addDecorator((story) => (
    <IntlProvider locale="en" messages={ en }>
      <div style={{ width: '300px', margin: '50px' }}>
        { story() }
      </div>
    </IntlProvider>
  ))
  .add('default', () => (
      <Autocomplete
        direction="down"
        hint="You can only choose one..."
        label="input label"
        multiple={false}
        onChange={ () => action('on-change') }
        onQueryChange={ () => action('query-change') }
        source={testArray}
      />
    )
  )
