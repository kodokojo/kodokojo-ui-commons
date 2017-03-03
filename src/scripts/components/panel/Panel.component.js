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
import { themr } from 'react-css-themr'

// component
import { PANEL } from '../../commons/identifiers'
import '../../../styles/_commons.less'
import panelTheme from './panel.scss'

/**
 * UI: Panel component
 *
 */
export class Panel extends React.Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element
    ]),
    theme: React.PropTypes.object
  }

  render() {
    const { children, theme } = this.props // eslint-disable-line no-shadow

    return (
      <div
        className={ theme.panel }
      >
        { children }
      </div>
    )
  }
}

export default themr(PANEL, panelTheme)(Panel)
