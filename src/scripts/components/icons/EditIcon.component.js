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
import SVGInline from 'react-svg-inline'

/**
 * UI: Edit Icon
 *
 */
const EditIcon = (props) => (
  <SVGInline
    svg={ `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
        <path d="M10.58,12.367L7.633,9.421L17.055,0H1.668C0.746,0,0,0.746,0,1.667v16.666C0,19.254,0.746,20,1.668,20
          h16.666C19.254,20,20,19.254,20,18.333V2.946L10.58,12.367z M9.205,13.742l-4.42,1.473l1.473-4.419L6.455,10.6L9.4,13.546
          L9.205,13.742z"/>
      </svg>
    `}
  />
)

export default EditIcon
