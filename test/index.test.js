import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Title from '../client/components/Title'


test('Heading renders on App', t => {
  const wrapper = shallow(<Title />)
  t.is(wrapper.find('h1').first().text(), 'Kelly Keating')
})
