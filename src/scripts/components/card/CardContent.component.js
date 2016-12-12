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
import { themr } from 'react-css-themr'
import classNames from 'classnames'

// component
import { CARD_CONTENT } from '../../commons/identifiers'
import '../../../styles/_commons.less'
import cardContentTheme from './cardContent.scss'

/**
 * UI: Card component
 *
 */
export class Card extends React.Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element,
      React.PropTypes.string
    ]),
    className: React.PropTypes.string,
    raw: React.PropTypes.bool,
    row: React.PropTypes.bool,
    small: React.PropTypes.bool,
    standard: React.PropTypes.bool,
    theme: React.PropTypes.object,
    title: React.PropTypes.string
  }

  render() {
    const { children, className, raw, row, small, standard, theme, title } = this.props // eslint-disable-line no-shadow

    const contentClasses = classNames({
      [theme['card-content--default']]: (!standard && !small && !raw),
      [theme['card-content--standard']]: standard,
      [theme['card-content--small']]: (small && !standard),
      [theme['card-content--raw']]: raw,
      [theme['card-content--row']]: row
    }, className)

    return (
      <div
        className={ contentClasses }
      >
        <div className={ theme['content-title'] }>
          { title }
        </div>
        { children }
      </div>
    )
  }
}

export default themr(CARD_CONTENT, cardContentTheme)(Card)
