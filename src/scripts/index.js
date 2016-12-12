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

// FIXME README
// At the moment we ar not exporting each sub module.
// Must find a way to do it properly, like react-toolbox do, to be able to use them directly from an another component.
// For the moment import it (need webpack, see kodokojo-ui config) like this:
//
// import AppBar from 'kodokojo-ui-commons/src/scripts/components/appBar/AppBar.component'

import AppBarComponent from './components/appBar/AppBar.component'
import AvatarComponent from './components/avatar/Avatar.component'
import ButtonComponent from './components/button/Button.component'
import IconButtonComponent from './components/button/IconButton.component'
import CardComponent from './components/card/Card.component'
import CardContainerComponent from './components/card/CardContainer.component'
import CardContentComponent from './components/card/CardContent.component'
import CheckboxComponent from './components/checkbox/Checkbox.component'
import ContentComponent from './components/content/Content.component'
import DialogComponent from './components/dialog/Dialog.component'
import FontIconComponent from './components/fontIcon/FontIcon.component'
import CloseIconComponent from './components/icons/CloseIcon.component'
import EditIconComponent from './components/icons/EditIcon.component'
import InputComponent from './components/input/Input.component'
import LayoutComponent from './components/layout/Layout.component'
import NavComponent from './components/nav/Nav.component'
import ActionComponent from './components/page/Action.component'
import PageComponent from './components/page/Page.component'
import ParagraphComponent from './components/page/Paragraph.component'
import PanelComponent from './components/panel/Panel.component'
import ToasterComponent from './components/toaster/Toaster.component'

export const AppBar = AppBarComponent
export const Avatar = AvatarComponent
export const Button = ButtonComponent
export const IconButton = IconButtonComponent
export const Card = CardComponent
export const CardContainer = CardContainerComponent
export const CardContent = CardContentComponent
export const Checkbox = CheckboxComponent
export const Content = ContentComponent
export const Dialog = DialogComponent
export const FontIcon = FontIconComponent
export const CloseIcon = CloseIconComponent
export const EditIcon = EditIconComponent
export const Input = InputComponent
export const Layout = LayoutComponent
export const Nav = NavComponent
export const Action = ActionComponent
export const Page = PageComponent
export const Paragraph = ParagraphComponent
export const Panel = PanelComponent
export const Toaster = ToasterComponent
