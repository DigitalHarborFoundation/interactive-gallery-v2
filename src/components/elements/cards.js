import styled from 'styled-components';

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.backgroundColor || '#ffffff'};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }

  ${props =>
    props.animated &&
    'transition: all 0.5s ease-in-out; :hover {box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px; transform: translate3D(0, -1px, 0) scale(1.04)}'}
`;

// export const AnimatedImageCard = styled(ImageCard)`
//   transition: all 0.5s ease-in-out;

//   :hover {
//     box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px,
//       rgba(39, 44, 49, 0.04) 1px 6px 12px;
//     transform: translate3D(0, -1px, 0) scale(1.04);
//   }
// `;
