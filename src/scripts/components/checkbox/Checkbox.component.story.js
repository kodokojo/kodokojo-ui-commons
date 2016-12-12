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
import { storiesOf, action, linkTo } from '@kadira/storybook'

// contexte
import gitlab from '../../../images/brick-gitlab.svg'

// component to story
import Checkbox from './Checkbox.component'

storiesOf('Checkbox', module)
  .addDecorator((story) => (
    <div style={{ width: '300px', margin: '50px' }}>
      { story() }
    </div>
  ))
  .add('unchecked', () => (
    <Checkbox
      checked={ false }
      label="Unchecked option"
      onChange={ action('click on checkbox') }
    />
  ))
  .add('checked', () => (
    <Checkbox
      checked
      label="Checked option"
      onChange={ action('click on checkbox') }
    />
  ))
  .add('disabled checked', () => (
    <Checkbox
      checked
      disabled
      label="disabled checked option"
      onChange={ action('click on checkbox') }
    />
  ))
  .add('disabled unchecked', () => (
    <Checkbox
      checked={ false }
      disabled
      label="disabled unchecked option"
      onChange={ action('click on checkbox') }
    />
  ))
  .add('unchecked with picto', () => (
    <Checkbox
      checked={ false }
      label={
        <span style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
          <img src={ gitlab } style={{ width: '70px', height: '70px' }} />
            { 'some text' }
        </span>
      }
      onChange={ action('click on checkbox') }
    />
  ))
  .add('checked with picto', () => (
    <Checkbox
      checked
      label={
        <span style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
          <img src={ gitlab } style={{ width: '70px', height: '70px' }} />
            { 'some text' }
        </span>
      }
      onChange={ action('click on checkbox') }
    />
  ))
