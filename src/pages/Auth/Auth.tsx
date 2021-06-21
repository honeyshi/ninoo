import {
  Button,
  Checkbox,
  Container,
  Content,
  ControlLabel,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  Panel,
} from 'rsuite';

import { Login } from 'illustrations';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

export const Auth: React.FC = () => {
  return (
    <Container>
      <Content>
        <FlexboxGrid align="middle" className="h-100">
          <FlexboxGrid.Item colspan={12} className="h-100 bg-light">
            <Login />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <FlexboxGrid justify="center">
              <Panel
                header={
                  <Paragraph primary tag="h3">
                    С возвращением!
                  </Paragraph>
                }>
                <Form fluid>
                  <FormGroup>
                    <Paragraph tag="span">Продолжите своё увлекательное путешествие по городу</Paragraph>
                  </FormGroup>
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
                      <Checkbox>Запомнить меня</Checkbox>
                      <Button appearance="link">Забыли пароль?</Button>
                    </FlexboxGrid>
                  </FormGroup>
                  <FormGroup>
                    <Button appearance="primary" block>
                      Войти
                    </Button>
                  </FormGroup>
                </Form>
              </Panel>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  );
};
