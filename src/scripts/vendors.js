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

// core
import React from 'react'
import { compose } from 'redux'
import { Provider, connect } from 'react-redux'

// router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// intl
import { intlShape, injectIntl, addLocaleData } from 'react-intl'

// ui
import { themr } from 'react-css-themr'

// DOM, browser
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// form
import { reduxForm } from 'redux-form'

// other
import Promise from 'bluebird'
