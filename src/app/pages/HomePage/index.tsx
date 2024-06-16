import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 2px 10px rgb(0 0 0 /0.1);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

const TodoListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="A Boilerplate application Main" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoList>
            <TodoListItem>
              <TodoCheck type="checkbox" />
              나는 투두야
            </TodoListItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
