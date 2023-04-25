import styled from 'styled-components';
import device from 'styles/device';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  animation: fadeIn 1.5s ease;

  @media ${device.mobileL} {
    max-width: 32rem;
  }
`;

export default Container;
