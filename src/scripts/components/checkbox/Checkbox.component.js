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

// UI library component
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox'

// component
import '../../../styles/_commons.less'
import checkboxTheme from './checkbox.scss'

/**
 * UI: Checkbox component
 *
 */
const Checkbox = (props) => (
  <ToolboxCheckbox {...props} theme={ checkboxTheme } />
)

export default Checkbox
