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

// component to story
import '../../../styles/_commons.less'
import utilsTheme from '../../../styles/_utils.scss'

storiesOf('Typography', module)
  .add('family & weight', () => (
    <div>
      <div style={{ margin: '30px' }}>
        Primary font : Catamaran<br/>
        <a href="https://www.google.com/fonts/specimen/Catamaran" target="_blank">See font</a>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <h1>default h1</h1>
          </div>
          <div>
            <h2>default h2</h2>
          </div>
          <div>
            <h3>default h3</h3>
          </div>
          <div>
            default
          </div>
          <div
            className={ utilsTheme['font-standard--thin'] } >
            .font-standard--thin 100
          </div>
          <div
            className={ utilsTheme['font-standard--light'] }>
            .font-standard--light 300
          </div>
          <div
            className={ utilsTheme['font-standard--normal'] }>
            .font-standard--normal 400
          </div>
          <div
            className={ utilsTheme['font-standard--semi-bold'] }>
            .font-standard--semi-bold 600
          </div>
          <div
            className={ utilsTheme['font-standard--bold'] }>
            .font-standard--bold 700
          </div>
        </div>
      </div>
      <div style={{ margin: '30px' }}>
        Primary icon-font : Material Design Icons<br/>
        <a href="http://google.github.io/material-design-icons/" target="_blank">See font</a>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <i className="material-icons">domain</i>
        </div>
      </div>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <div style={{ margin: '30px' }}>
        Titles
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={ utilsTheme['title-size--1'] }>
            .title-size--1
          </div>
          <div className={ utilsTheme['title-size--2'] }>
            .title-size--2
          </div>
          <div className={ utilsTheme['title-size--3'] }>
            .title-size--3
          </div>
        </div>
      </div>
      <div style={{ margin: '30px' }}>
        fonts
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={ utilsTheme['font-size--smaller'] }>
            .font-size--smaller
          </div>
          <div className={ utilsTheme['font-size--small'] }>
            .font-size--small
          </div>
          <div className={ utilsTheme['font-size--normal'] }>
            .font-size--normal
          </div>
          <div className={ utilsTheme['font-size--medium'] }>
            .font-size--medium
          </div>
          <div className={ utilsTheme['font-size--large'] }>
            .font-size--large
          </div>
          <div className={ utilsTheme['font-size--larger'] }>
            .font-size--larger
          </div>
        </div>
      </div>
    </div>
  ))
