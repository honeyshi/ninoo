import { Button, Container, Content, FlexboxGrid, Form, FormGroup, Panel } from 'rsuite';

import { Paragraph } from 'components/Paragraph';
import React from 'react';

interface FormLayoutProps {
  header: string;
  helperText: string;
  buttonText: string;
  icon: JSX.Element;
  model: any;
  afterButton?: JSX.Element;
  onFormChange?: (formValue: any) => void;
  formValue?: any;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  header,
  helperText,
  buttonText,
  icon,
  model,
  afterButton,
  onFormChange,
  formValue,
  children,
}) => {
  return (
    <Container className="bg-light">
      <Content>
        <FlexboxGrid align="middle" className="h-100">
          <FlexboxGrid.Item colspan={12} className="h-100 ">
            {icon}
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <FlexboxGrid justify="center">
              <Panel
                header={
                  <Paragraph primary tag="h3">
                    {header}
                  </Paragraph>
                }>
                <Form fluid model={model} onChange={onFormChange} formValue={formValue}>
                  <FormGroup>
                    <Paragraph tag="span">{helperText}</Paragraph>
                  </FormGroup>
                  {children}
                  <FormGroup>
                    <Button block appearance="primary" type="submit">
                      {buttonText}
                    </Button>
                  </FormGroup>
                  {afterButton}
                </Form>
              </Panel>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  );
};
