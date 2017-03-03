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
import { storiesOf } from '@kadira/storybook'

// contexte
import en from '../../i18n/en'

// component to story
import Input from './Input.component'

storiesOf('Input', module)
  .addDecorator((story) => (
    <IntlProvider locale="en" messages={ en }>
      <div style={{ width: '300px', margin: '50px' }}>
        { story() }
      </div>
    </IntlProvider>
  ))
  .add('input text default', () => (
    <Input
      label="input label"
    />
  ))
  .add('input text with icon', () => (
    <Input
      icon="email"
      label="input label"
      name="inputValue"
    />
  ))
  .add('input text with value', () => (
    <Input
      icon="email"
      label="input label"
      name="inputValue"
      value="something"
    />
  ))
  .add('input text required', () => (
    <Input
      icon="email"
      label="input label"
      name="inputValue"
      required
    />
  ))
  .add('input text disabled', () => (
    <Input
      disabled
      icon="email"
      label="input label"
      name="inputValue"
    />
  ))
  .add('input text with hint', () => (
    <Input
      hint="This is a hint"
      icon="email"
      label="input label"
      name="inputValue"
    />
  ))
  .add('input text with hint & value', () => (
    <Input
      hint="This is a hint"
      icon="email"
      label="input label"
      name="inputValue"
      value="some value"
    />
  ))
  .add('input text on error', () => (
    <Input
      hint="This is a hint"
      icon="email"
      label="input label"
      meta={{
        touched: true,
        error: 'error in this input'
      }}
      name="inputValue"
      value="some value"
    />
  ))
  .add('input text on error - required', () => (
    <Input
      error="error in this input"
      hint="This is a hint"
      icon="email"
      label="input label"
      meta={{
        touched: true,
        error: 'error in this input'
      }}
      name="inputValue"
      required
      value="some value"
    />
  ))
  .add('texarea', () => (
    <Input
      hint="This is a hint"
      icon="key"
      label="multiline label"
      multiline
      name="inputValue"
    />
  ))
  .add('texarea empty - required', () => (
    <Input
      error="error in this input"
      hint="This is a hint"
      icon="email"
      label="multiline label"
      multiline
      name="inputValue"
      required
    />
  ))
  .add('texarea - filled', () => (
    <Input
      error="error in this input"
      hint="This is a hint"
      icon="email"
      label="multiline label"
      multiline
      name="inputValue"
      required
      value="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCu9lE7h8Xt1rM8FDs8CPx9Rbmve3AOAOgYJkVEyzzkj12RJjBzK2vfhn7HhJPk3BCT9ehoofBwuw1tuh2T+WBB44mPyoBJ+pAbxiq8EUtOgG8Dg2T+n/rAIPKLBgtNQNoDSmBrPwVJzStMCvVo/j5DhnYTk3Mo989qmaKmS+AjCu6oZnqM65CIOD8/G7acQbGCED5ppI6QMiJgyMVGkezSGrdQsx247uRQ1taF+dcW61vadtm1tKFDjF6Zyd13jXBjsVLDu185/dDEMqNfbeFAGlbENCepugnfqTe/J/mRKSUbxC50UIoSKVeovOKvU+TJyCjKhq1y5j2TByhVHtS5 toto@toto.com" // eslint-disable-line max-len
    />
  ))
  .add('texarea - alf filled', () => (
    <Input
      error="error in this input"
      hint="This is a hint"
      icon="email"
      label="multiline label"
      multiline
      name="inputValue"
      required
      value="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAABAAABAQCu9lE7h8Xt1rM8FDs8CPx9Rbmve3AO"
    />
  ))
