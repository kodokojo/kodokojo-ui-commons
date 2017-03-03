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
import { storiesOf, action } from '@kadira/storybook'

// contexte

// component to story
import Dialog from './Dialog.component'
// import  Button from '../button/Button.component'

storiesOf('Dialog', module)
  .addDecorator((story) => (
    <div>
      { story() }
    </div>
  ))
  .add('default', () => (
    <Dialog
      active
    >
      <p>Some content</p>
    </Dialog>
  ))
  .add('with title and buttons', () => (
    <Dialog
      actions={[
        { label: 'Cancel', onClick: action('click Cancel button') },
        { label: 'Save', onClick: action('click Save button') }
      ]}
      active
      title="My awesome dialog"
    >
      <p>Some content</p>
    </Dialog>
  ))
