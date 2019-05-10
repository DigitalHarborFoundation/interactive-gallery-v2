import React from 'react';
import styled from 'styled-components';

export const Separator = props => (
  <React.Fragment>
    <SeparatorWrapper
      color={props.color}
      fontSize={props.fontSize}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
    >
      {' '}
      𐄁{' '}
    </SeparatorWrapper>
  </React.Fragment>
);

const SeparatorWrapper = styled.span`
  color: ${props => (props.color ? props.color : 'blue')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
`;
