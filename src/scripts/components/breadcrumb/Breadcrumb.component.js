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
  const activeItem = find(items, o => isNumber(o.active))
  const activeColor = activeItem ? activeItem.active : 0
  switch (activeColor) {
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
            active={ tab.active}
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
