import {renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox',()=> {
  let component;

  beforeEach (()=> {
    component = renderComponent(CommentBox)
  })

  it('Should has correct class',  () => {
    expect(component).to.have.class('comment-box');
  });

  it('Should has a text area',  () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Should has a button',  () => {
    expect(component.find('button')).to.exist;
  })

  describe('enter some text', () => {
    beforeEach(()=> {
      component.find('textarea').simulate('change','new comment');
    })
    it('shows text that is entered',  () => {
      expect(component.find('textarea')).to.have.value('new comment')
    })
  
    it('when submitted, clear the text', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('')
    })
  })

})