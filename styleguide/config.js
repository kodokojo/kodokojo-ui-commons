import { configure } from '@kadira/storybook'

function loadStories() {
  // ui
  require('../src/scripts/components/avatar/Avatar.component.story')
  require('../src/scripts/components/appBar/AppBar.component.story')
  require('../src/scripts/components/button/Button.component.story')
  require('../src/scripts/components/button/IconButton.component.story')
  require('../src/scripts/components/card/Card.component.story')
  require('../src/scripts/components/checkbox/Checkbox.component.story')
  require('../src/scripts/components/content/Content.component.story')
  require('../src/scripts/components/colors/colors.story')
  require('../src/scripts/components/dialog/Dialog.component.story')
  require('../src/scripts/components/input/Input.component.story')
  require('../src/scripts/components/layout/Layout.component.story')
  require('../src/scripts/components/panel/Panel.component.story')
  require('../src/scripts/components/nav/Nav.component.story')
  require('../src/scripts/components/page/Page.component.story')
  require('../src/scripts/components/breadcrumb/Breadcrumb.component.story.js')
  require('../src/scripts/components/toaster/Toaster.component.story')
  require('../src/scripts/components/typography/typography.story')
}

configure(loadStories, module)
