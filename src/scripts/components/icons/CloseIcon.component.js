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
import SVGInline from 'react-svg-inline'

/**
 * UI: Close Icon
 *
 */
const CloseIcon = (props) => (
  <SVGInline
    svg={ `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
      <g id="XMLID_784_">
        <path id="XMLID_843_" d="M7.899,16.754c0.146,0,0.293-0.055,0.404-0.166l3.839-3.84l3.839,3.84
          c0.111,0.111,0.258,0.166,0.404,0.166s0.292-0.055,0.403-0.166c0.224-0.224,0.224-0.586,0-0.809L12.95,11.94l3.637-3.637
          c0.224-0.224,0.224-0.585,0-0.808c-0.223-0.224-0.585-0.224-0.808,0l-3.637,3.637L8.506,7.496c-0.223-0.224-0.585-0.224-0.808,0
          c-0.223,0.223-0.223,0.584,0,0.808l3.637,3.637l-3.839,3.839c-0.224,0.223-0.224,0.585,0,0.809
          C7.607,16.699,7.754,16.754,7.899,16.754z"/>
        <path id="XMLID_795_" d="M0,12c0,6.504,5.495,12,12,12s12-5.496,12-12c0-6.506-5.495-12-12-12S0,5.494,0,12z
           M12,1.143c5.885,0,10.856,4.972,10.856,10.857c0,5.885-4.972,10.856-10.856,10.856C6.114,22.856,1.143,17.885,1.143,12
          C1.143,6.114,6.114,1.143,12,1.143z"/>
      </g>
      </svg>
    `}
  />
)

export default CloseIcon
