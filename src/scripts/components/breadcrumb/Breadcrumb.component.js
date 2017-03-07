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
import { intlShape, injectIntl } from 'react-intl'
import find from 'lodash/find'
import isNumber from 'lodash/isNumber'

// UI library component
import { Tabs as ToolboxTabs, Tab as ToolboxTab  } from 'react-toolbox'

// component
import breadcrumbColor0Theme from './breadcrumbColor0.scss'
import breadcrumbColor1Theme from './breadcrumbColor1.scss'
import breadcrumbColor2Theme from './breadcrumbColor2.scss'
import breadcrumbColor3Theme from './breadcrumbColor3.scss'

const Breadcrumb = (props) => {
  const { items, index } = props
  const rest = { ...props }
  const { formatMessage } = props.intl

  let theme
  const variantItem = find(items, o => isNumber(o.variant))
  const variantColor = variantItem ? variantItem.variant : 0
  switch (variantColor) {
    default:
    case 0:
      theme = breadcrumbColor0Theme
      break
    case 1:
      theme = breadcrumbColor1Theme
      break
    case 2:
      theme = breadcrumbColor2Theme
      break
    case 3:
      theme = breadcrumbColor3Theme
      break
  }

  return (
    <ToolboxTabs
      {...rest}
      index={ index || items ? items.length - 1 : 0 }
      theme={ theme }
    >
      { items.length > 0 &&
        items.map((tab, index, array) => (
          <ToolboxTab
            active={ tab.active }
            activeClassName={tab.activeClassName }
            className={ tab.className }
            disabled={ tab.disabled }
            hidden={ tab.hidden }
            icon={ tab.icon }
            key={ index }
            label={
              '\u00A0' +
              ( tab.labelKey ? formatMessage({ id: tab.labelKey }) : tab.labelText ) +
              (
                index < array.length - 1 ?
                  ' /' :
                  ''
              )
            }
            onActive={ tab.onActiveItem }
            onClick={ tab.onClickItem }
            title={ ( tab.titleKey ? formatMessage({ id: tab.titleKey }) : tab.titleText ) }
          >
            { tab.content }
          </ToolboxTab>
        ))
      }
    </ToolboxTabs>
  )
}

Breadcrumb.propTypes = {
  index: React.PropTypes.number,
  intl: intlShape.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  onActiveItem: React.PropTypes.func,
  onClickItem: React.PropTypes.func
}

export default injectIntl(Breadcrumb)
