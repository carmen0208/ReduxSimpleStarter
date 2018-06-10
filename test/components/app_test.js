import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App', () => {
  let component;
  beforeEach(()=> {
    component = renderComponent(App);
  })

  it('should show CommentBox component',() => {
    
    // expect(component).to.have.descendants('.comment-box');
    // expect(component.find('.comment-box')).to.exist
  })
})