import React, { useState } from 'react';

import { FormLayout } from 'components/Layout';
import { PasswordConfirmation } from 'components/PasswordHandlers';
import { ResetPassword as ResetPasswordIcon } from 'illustrations';
import { Schema } from 'rsuite';

type FormValueType = { password: string; passwordConfirm: string };
const { StringType } = Schema.Types;

const model = Schema.Model({
  password: StringType()
    .rangeLength(6, 30, 'Введите не менее 6 и не более 30 символов')
    .containsNumber('Пароль должен содержать числа')
    .containsLetter('Пароль должен содержать английские буквы')
    .isRequired('Обязательное поле'),
  passwordConfirm: StringType()
    .addRule((value, data) => {
      return value === data.password;
    }, 'Пароли не совпадают')
    .isRequired('Обязательное поле'),
});

export const ResetPassword: React.FC = () => {
  const [formValue, setFormValue] = useState<FormValueType>({
    password: '',
    passwordConfirm: '',
  });

  return (
    <FormLayout
      header="Смена пароля"
      helperText="Установите новый пароль для своего аккаунта"
      buttonText="Изменить пароль"
      icon={<ResetPasswordIcon width="100%" height="100%" />}
      model={model}
      onFormChange={(formValue) => setFormValue(formValue as FormValueType)}
      formValue={formValue}>
      <PasswordConfirmation />
    </FormLayout>
  );
};
