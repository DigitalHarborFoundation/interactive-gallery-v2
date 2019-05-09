import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
export const AppWrapper = styled.div`
  min-height: 100vh;
  @media only screen and (max-width: 1000px) {
    max-height: 100vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 7rem;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: 80%;
  margin: ${props => props.allMargin || '10vh auto'};
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${props => props.marginAll && props.marginAll};
`;

export const GridThreeColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${props => props.columnGap || '2vw'};
  grid-row-gap: ${props => props.rowGap || '10vh'};
  margin-top: ${props => props.marginTop || '5rem'};

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : 'initial')};
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  }
`;
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => (props.width ? props.width : 'auto')};
`;
