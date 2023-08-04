import styled from 'styled-components';

export const ContactListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactListItem = styled.li`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeleteButton = styled.button`
  background-color: #800000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.3s;

`;
