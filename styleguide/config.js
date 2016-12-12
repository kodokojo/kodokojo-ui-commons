import { configure } from '@kadira/storybook'

function loadStories() {
  // ui
  require('./Avatar.component.story')
  require('./AppBar.component.story')
  require('./Button.component.story')
  require('./IconButton.component.story')
  require('./Card.component.story')
  require('./Checkbox.component.story')
  require('./Content.component.story')
  require('./colors.story')
  require('./Dialog.component.story')
  require('./Input.component.story')
  require('./Layout.component.story')
  require('./Panel.component.story')
  require('./Nav.component.story')
  require('./Page.component.story')
  require('./Toaster.component.story')
  require('./typography.story')
}

configure(loadStories, module)
