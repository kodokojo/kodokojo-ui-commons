/**
 * Kodo Kojo - Software factory done right
 * Copyright © 2016 Kodo Kojo (infos@kodokojo.io)
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
import { storiesOf } from '@kadira/storybook'

// contexte

// component to story
import IconButton from './IconButton.component'
import Card from '../card/Card.component'
import EditIcon from '../icons/EditIcon.component'
import CloseIcon from '../icons/CloseIcon.component'

storiesOf('IconButton', module)
  .addDecorator((story) => (
    <div style={{ width: '300px', margin: '50px' }}>
      { story() }
    </div>
  ))
  .add('default', () => (
    <IconButton
      icon="power_settings_new"
    />
  ))
  .add('default - custom icon (edit)', () => (
    <Card>
      <IconButton
        icon={ <EditIcon/> }
      />
    </Card>
  ))
  .add('default - custom icon (close)', () => (
    <Card>
      <IconButton
        icon={ <CloseIcon/> }
      />
    </Card>
  ))
  .add('primary', () => (
    <IconButton
      icon="power_settings_new"
      primary
    />
  ))
  // .add('primary - disabled (flat)', () => (
  //   <IconButton
  //     disabled
  //     label="BUTTON"
  //     primary
  //   />
  // ))
