import {
  Button,
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

import { Paragraph } from 'components/Paragraph';
import React from 'react';
import { Signup as SignupIcon } from 'illustrations';

const { StringType } = Schema.Types;
const model = Schema.Model({
  email: StringType().isEmail('Введите корректный адрес электронной почты').isRequired('Обязательное поле'),
  password: StringType()
    .minLength(6, 'Введите не менее 6 символов')
    .maxLength(30, 'Введите не более 30 символов')
    .isRequired('Обязательное поле'),
  passwordConfirm: StringType()
    .isRequired('Обязательное поле')
    .addRule((value, data) => {
      return value === data.password;
    }, 'Пароли не совпадают'),
});

export const Signup: React.FC = () => {
  return (
    <Container>
      <Content>
        <FlexboxGrid align="middle" className="h-100">
          <FlexboxGrid.Item colspan={12} className="h-100 bg-light">
            <SignupIcon width="100%" height="100%" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <FlexboxGrid justify="center">
              <Panel
                header={
                  <Paragraph primary tag="h3">
                    Регистрация
                  </Paragraph>
                }>
                <Form
                  fluid
                  model={model}
                  //   onChange={(formValue) => {
                  //     console.log(formValue);
                  //     setFormValue({ formValue });
                  //   }}
                  //   formValue={formValue}>
                >
                  <FormGroup>
                    <Paragraph tag="span">Начните своё увлекательное путешествие по городу</Paragraph>
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
                    <ControlLabel>Повторите пароль</ControlLabel>
                    <FormControl name="passwordConfirm" type="password" />
                  </FormGroup>
                  <FormGroup>
                    <Button block appearance="primary" type="submit">
                      Регистрация
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <Paragraph tag="span">Уже есть аккаунт?</Paragraph>
                    <Button appearance="link" href="/auth">
                      Войти.
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
