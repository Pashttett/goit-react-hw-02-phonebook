import styled from 'styled-components';

export const StyledContactForm = styled.form`

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
  width: 300px;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
}

button {
  padding: 8px 12px;
  font-size: 16px;
  color: #fff;
  background-color: #006400;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  width: 200px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #004d00;
}

button:focus {
  background-color: #003366;
}

button:active {
  background-color: #800000;
}
`;
