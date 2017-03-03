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
import { Provider } from 'react-redux'
import { storiesOf, action } from '@kadira/storybook'

// contexte
import configureStore from '../../store/configureStore'

// component to story
import Nav from './Nav.component'

const initialState = {}

const store = configureStore(initialState)

storiesOf('Nav', module)
  .add('pinned', () => (
    <Provider store={store}>
      <Nav
        pinned
      >
        <div>children</div>
      </Nav>
    </Provider>
  ))
