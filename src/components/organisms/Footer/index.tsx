// lib
import React from 'react'

// style
import { Wrapper, } from './style';

const Footer: React.FC = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default Footer