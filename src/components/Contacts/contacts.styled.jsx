import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 2em;
  padding-inline: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;
`;
// export const Li = styled.li`
//   display: flex;
//   padding-left: 5px;
//   gap: 10px;
//   font-size: 18px;
//   justify-content: center;
//   align-items: center;
//   white-space: normal;
// `;

export const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
  // width: 120px;
  // height: 35px;
  &:hover,
  :focus {
    // box-shadow: 0 2px 4px teal;
    background-color: #035f5f;
  }
`;
