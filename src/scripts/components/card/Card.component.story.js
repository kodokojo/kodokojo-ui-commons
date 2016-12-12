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
import { storiesOf, action } from '@kadira/storybook'

// component to story
import Card from './Card.component'
import CardContent from './CardContent.component'
import CardContainer from './CardContainer.component'
import utils from '../../../styles/_utils.scss'

storiesOf('Card', module)
  .add('one card', () => (
    <div style={{ margin: '40px' }}>
      <Card
        style={{ width: '400px', height: '360px' }}
        title="Some title"
      >
        <div>children</div>
      </Card>
    </div>
  ))
  .add('two merged cards', () => (
    <div style={{ margin: '40px', display: 'flex', flexDirection: 'row' }}>
      <Card
        merged
        primary
        style={{ width: '400px', height: '360px' }}
        title="First title"
      >
        <div>children</div>
      </Card>
      <Card
        merged
        style={{ width: '400px', height: '360px' }}
        title="Second title"
      >
        <div>children</div>
      </Card>
    </div>
  ))
  .add('two merged cards with card-content', () => (
    <div style={{ margin: '40px', display: 'flex', flexDirection: 'row' }}>
      <Card
        merged
        primary
        style={{ width: '400px', height: '360px' }}
        title="First title"
      >
        <CardContent>children</CardContent>
      </Card>
      <Card
        merged
        style={{ width: '400px', height: '360px' }}
        title="Second title"
      >
        <CardContent>children</CardContent>
      </Card>
    </div>
  ))
  .add('two merged cards with card-content in card container', () => (
    <CardContainer>
      <Card
        merged
        primary
        style={{ width: '400px', height: '360px' }}
        title="First title"
      >
        <CardContent>children</CardContent>
      </Card>
      <Card
        merged
        style={{ width: '400px', height: '360px' }}
        title="Second title"
      >
        <CardContent>children</CardContent>
      </Card>
    </CardContainer>
  ))
  .add('two non merged cards with card-content in card container', () => (
    <CardContainer>
      <Card
        primary
        style={{ width: '400px', height: '360px' }}
        title="First title"
      >
        <CardContent>children</CardContent>
      </Card>
      <Card
        style={{ width: '400px', height: '360px' }}
        title="Second title"
      >
        <CardContent>children</CardContent>
      </Card>
    </CardContainer>
  ))
  .add('three non merged cards with card-content in card container', () => (
    <CardContainer>
      <Card
        primary
        style={{ width: '400px', height: '360px' }}
        title="First title"
      >
        <CardContent>children</CardContent>
      </Card>
      <Card
        style={{ width: '400px', height: '360px' }}
        title="Second title"
      >
        <CardContent>children</CardContent>
      </Card>
      <Card
        style={{ width: '400px', height: '360px' }}
        title="Third title"
      >
        <CardContent>children</CardContent>
      </Card>
    </CardContainer>
  ))
  .add('three + one non merged cards with card-content in card container', () => (
    <CardContainer>
    <div style={{ display: 'block', overflow: 'auto', width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <Card
          primary
          row
          style={{ flex: '1 100%', marginBottom: '10px' }}
        >
          <CardContent
            row
            standard
          >
            <div
              className={ utils['title--default'] }
              style={{ flex: '0 40%' }}
            >{ 'First title'.toUpperCase() }</div>
            <div
              style={{ flex: '0 60%' }}
            >content</div>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', justifyContent: 'stretch' }}>
        <div style={{ flex: '0 40%' }}>
          <Card
            style={{ height: '100%', marginRight: '10px' }}
          >
            <CardContent
              standard
              title="Second title"
            >
              children
            </CardContent>
          </Card>
        </div>
        <div style={{ flex: '0 60%', flexDirection: 'row' }} >
          <Card
          >
            <CardContent
              row
              small
              title="Third title"
            >
              children
            </CardContent>
          </Card>
          <Card
            small
            style={{ marginTop: '10px' }}
          >
            <CardContent
              row
              small
              title="Third title"
            >
              children
            </CardContent>
          </Card>
          <Card
            small
            style={{ marginTop: '10px' }}
          >
            <CardContent
              row
              small
              title="Third title"
            >
              children
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </CardContainer>
  ))
