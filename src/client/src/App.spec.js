import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'


describe('<App />', () => {
  let wrapper
  let history = {}
  beforeEach(() => {
    wrapper =
      shallow(<App history={history}/>)
  })

  it('has a Router component', () => {
    expect(wrapper.find('Router'))
      .to.have.length(1)
  })

})
