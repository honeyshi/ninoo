import { Button, Container, Content, ControlLabel, FlexboxGrid, Form, FormControl, FormGroup, Panel } from 'rsuite';

import { Login } from 'illustrations';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

export const Auth: React.FC = () => {
  return (
    <Container>
      <Content>
        <FlexboxGrid align="middle" justify="space-between">
          <FlexboxGrid.Item colspan={12}>
            <Login />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={10}>
            <Panel
              header={
                <Paragraph primary tag="h3">
                  С возвращением!
                </Paragraph>
              }>
              <Form fluid>
                <FormGroup>
                  <Paragraph tag="span">Еще нет аккаунта?</Paragraph>
                  <Button appearance="link">Зарегистрируйтесь.</Button>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email</ControlLabel>
                  <FormControl name="name" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Пароль</ControlLabel>
                  <FormControl name="password" type="password" />
                </FormGroup>
                <FormGroup>
                  <FlexboxGrid justify="space-between">
                    <Button appearance="primary">Войти</Button>
                    <Button appearance="link">Забыли пароль?</Button>
                  </FlexboxGrid>
                </FormGroup>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  );
};
