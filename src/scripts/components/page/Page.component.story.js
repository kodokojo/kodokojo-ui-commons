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

// contexte
import configureStore from '../../store/configureStore'

// component to story
import Page from './Page.component'
import Action from './Action.component'
import Paragraph from './Paragraph.component'

const initialState = {}

const store = configureStore(initialState)

storiesOf('Page', module)
  .add('page - title', () => (
    <Page store={store}>
      <h1>Title</h1>
    </Page>
  ))
  .add('paragraph', () => (
    <Paragraph>
      Lorem ipsum dolor sit amet, quo ea autem dolorum expetenda. Ei case brute liber ius, eos ut diam eius,
      graecis corrumpit molestiae in has. Velit corrumpit per ad, no democritum scribentur pro.
      Quo fabellas legendos cu, velit deserunt evertitur at eam.<br/>
      Ut quo feugait appetere vulputate. Diceret perfecto inciderint ut has, his et solum labore inimicus.
      Te probatus gloriatur has, ad est virtute mandamus adolescens. Sed dictas discere et,
      sit noster audiam efficiantur ut.<br/>
      Saepe mediocrem ne mea, ius et consul commune euripidis. At tota delenit copiosae mea.
      Quis paulo invidunt ut eos. Ex justo dicam ius, ea mel dicta legimus volutpat. Nisl facilisi no eos,
      adhuc denique accusamus id pro. Nam dicit simul choro ex.<br/>
      Ne similique appellantur vim, te his liber incorrupte.
      Pro in stet admodum splendide, clita democritum et sea. Ei elit petentium qui, munere argumentum eum eu,
      mel ei atqui nostrud consectetuer. Sale ullum falli cu ius, errem discere aliquam vis eu.
      Inermis ceteros periculis mei ne, eius tritani antiopam ex vel.
      Vel probo alterum an, sea ut quidam consequuntur.<br/>
    </Paragraph>
  ))
  .add('action', () => (
    <Page>
      <Action>
        Default left action
      </Action>
      <Action
        type="right"
      >
        Right action
      </Action>
    </Page>
  ))
  .add('page - title, action and paragraph', () => (
    <Page store={store}>
      <h1>Title</h1>
      <Action>
        Some action
      </Action>
      <Paragraph>
        Lorem ipsum dolor sit amet, quo ea autem dolorum expetenda. Ei case brute liber ius, eos ut diam eius,
        graecis corrumpit molestiae in has. Velit corrumpit per ad, no democritum scribentur pro.
        Quo fabellas legendos cu, velit deserunt evertitur at eam.<br/>
        Ut quo feugait appetere vulputate. Diceret perfecto inciderint ut has, his et solum labore inimicus.
        Te probatus gloriatur has, ad est virtute mandamus adolescens. Sed dictas discere et,
        sit noster audiam efficiantur ut.<br/>
        Saepe mediocrem ne mea, ius et consul commune euripidis. At tota delenit copiosae mea.
        Quis paulo invidunt ut eos. Ex justo dicam ius, ea mel dicta legimus volutpat. Nisl facilisi no eos,
        adhuc denique accusamus id pro. Nam dicit simul choro ex.<br/>
        Ne similique appellantur vim, te his liber incorrupte.
        Pro in stet admodum splendide, clita democritum et sea. Ei elit petentium qui, munere argumentum eum eu,
        mel ei atqui nostrud consectetuer. Sale ullum falli cu ius, errem discere aliquam vis eu.
        Inermis ceteros periculis mei ne, eius tritani antiopam ex vel.
        Vel probo alterum an, sea ut quidam consequuntur.<br/>
      </Paragraph>
    </Page>
  ))
