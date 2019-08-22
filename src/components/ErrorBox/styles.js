import styled from "styled-components";

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.9);
  background: #f55a5a;
  margin: 20px 0 10px;
  font-size: 13px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 25px;
  }

  img {
    height: 14px;
  }
`;
