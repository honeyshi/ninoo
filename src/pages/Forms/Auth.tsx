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
  Schema,
} from 'rsuite';

import { Login } from 'illustrations';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

const { StringType } = Schema.Types;
const model = Schema.Model({
  password: StringType()
    .minLength(6, 'Введите не менее 6 символов')
    .maxLength(30, 'Введите не более 30 символов')
    .isRequired('Обязательное поле'),
  email: StringType().isEmail('Введите корректный адрес электронной почты').isRequired('Обязательное поле'),
});

export const Auth: React.FC = () => {
  return (
    <Container>
      <Content>
        <FlexboxGrid align="middle" className="h-100">
          <FlexboxGrid.Item colspan={12} className="h-100 bg-light">
            <Login width="100%" height="100%" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <FlexboxGrid justify="center">
              <Panel
                header={
                  <Paragraph primary tag="h3">
                    С возвращением!
                  </Paragraph>
                }>
                <Form fluid model={model}>
                  <FormGroup>
                    <Paragraph tag="span">Продолжите своё увлекательное путешествие по городу</Paragraph>
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl name="email" />
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
                    <Button block appearance="primary" type="submit">
                      Войти
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <Paragraph tag="span">Еще нет аккаунта?</Paragraph>
                    <Button appearance="link" href="/signup">
                      Зарегистрируйтесь.
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
