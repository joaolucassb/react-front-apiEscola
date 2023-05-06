import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 40px;
    font-size: 18px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
