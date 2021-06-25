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

import { ForgotPassword as ForgotPasswordIcon } from 'illustrations';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType().isEmail('Введите корректный адрес электронной почты').isRequired('Обязательное поле'),
});

export const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <FlexboxGrid align="middle" className="h-100">
          <FlexboxGrid.Item colspan={12} className="h-100 bg-light">
            <ForgotPasswordIcon width="100%" height="100%" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <FlexboxGrid justify="center">
              <Panel
                header={
                  <Paragraph primary tag="h3">
                    Забыли пароль
                  </Paragraph>
                }>
                <Form fluid model={model}>
                  <FormGroup>
                    <Paragraph tag="span">Введите свой email для восстановления пароля</Paragraph>
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl name="email" />
                  </FormGroup>
                  <FormGroup>
                    <Button block appearance="primary" type="submit">
                      Отправить ссылку
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
