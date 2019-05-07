import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  min-width: 24rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  padding: 1.6rem 2.4rem;
  text-align: center;

  margin-left: ${props => props.onRight && '2.4rem'};
  margin-right: ${props => props.onLeft && '2.4rem'};

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;

    &:first-child {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }

    &:last-child {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 2.4rem;
    }
  }
`;

export const GhostButton = styled(Button)`
  border: 2px solid;
  border-color: ${props => props.primaryColor || '#fafafa'};
  background-color: rgba(196, 196, 196, 0);
  color: ${props => props.primaryColor || '#fafafa'};
  transition: all ease 0.5s;

  &:hover {
    border: 2px solid;
    border-color: ${props => props.hoverColor || '#e96544'};
    color: ${props => props.hoverColor || '#e96544'};
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
