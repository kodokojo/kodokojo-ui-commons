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

// UI library component
import { Chip as ToolboxChip } from 'react-toolbox/lib/chip'
import { autocompleteFactory as toolboxAutocompleteFactory } from 'react-toolbox/lib/autocomplete/Autocomplete'

// component
import { AUTOCOMPLETE } from '../../commons/identifiers'
import autocompleteTheme from './autocomplete.scss'
import '../../../styles/_commons.less'
import Input from '../input/Input.component'

/**
 * UI: Dialog component
 *
 */
const Autocomplete = toolboxAutocompleteFactory(ToolboxChip, Input)
export default themr(AUTOCOMPLETE, autocompleteTheme)(Autocomplete)

