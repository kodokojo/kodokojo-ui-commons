import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf, action } from '@kadira/storybook'

// contexte
import configureStore from '../../store/configureStore'

// component to story
import Breadcrumb from './Breadcrumb.component'

const initialState = {}

const store = configureStore(initialState)

storiesOf('Breadcrumb', module)
  .add('default', () => (
    <Provider store={store}>
      <Breadcrumb
        active={ 0 }
        items={ [
          {
            labelKey: '',
            route: ''
          },
          {
            labelKey: 'projects-label',
            route: '#projects',
          },
          {
            labelText: 'Kodo Kojo',
            disabled: true
          },
          {
            labelKey: '',
            route: ''
          }
        ] }
      />
    </Provider>
  ))