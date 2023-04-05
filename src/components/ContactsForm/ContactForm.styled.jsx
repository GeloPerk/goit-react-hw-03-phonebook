import styled from 'styled-components';
import { Field as FormikField } from 'formik';

export const FormContainer = styled.div`
  width: 250px;
  text-align: center;
  margin-left: auto;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Field = styled(FormikField)`
  padding-left: 10px;
  outline: none;
  height: 20px;
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 10px;
  border: 0;
  padding: 5px;
  color: dodgerblue;
  border-radius: 10px;
`;
