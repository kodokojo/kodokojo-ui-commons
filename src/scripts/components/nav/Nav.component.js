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
import classNames from 'classnames'

// component
import { NAV } from '../../commons/identifiers'
import '../../../styles/_commons.less'
import navTheme from './nav.scss'

/**
 * UI: Nav component
 *
 */
export class Nav extends React.Component {

  static propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element,
      React.PropTypes.string
    ]),
    onOverlayClick: React.PropTypes.func,
    permanentAt: React.PropTypes.string,
    pinned: React.PropTypes.bool,
    scrollY: React.PropTypes.bool,
    theme: React.PropTypes.object,
    width: React.PropTypes.string
  }

  render() {
    const { children, active, onOverlayClick, permanentAt, pinned, scrollY, theme, width } = this.props // eslint-disable-line no-shadow
    const navClasses = classNames(theme.nav, {
      [theme['nav--open']]: (pinned || active),
      [theme['nav--closed']]: (!pinned && !active)
    })

    return (
      <div
        className={ navClasses }
      >
        <aside
          // onOverlayClick={ onOverlayClick }
          // permanentAt={ permanentAt }
          // pinned={ pinned }
          // scrollY={ scrollY }
        >
          { children }
        </aside>
      </div>
    )
  }
}

export default themr(NAV, navTheme)(Nav)
