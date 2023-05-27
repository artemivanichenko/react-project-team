import styled from '@emotion/styled';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export const WrapperStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
`;

export const TextStyled = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  text-align: right;
  letter-spacing: 0.04em;
  color: rgba(199, 204, 220, 0.5);
`;

export const IconStyled = styled(EqualizerIcon)`
  width: 24px;
  height: 24px;
  color: #c7ccdc;
`;
