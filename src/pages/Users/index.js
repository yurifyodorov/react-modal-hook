import React from "react";
import { useModal } from "../../utils/hooks/useModal";
import useBreakpoints from '../../utils/hooks/useBreakpoint';
import { Form, FormGroup, ControlLabel, Input, SelectPicker, Button } from 'rsuite';

import CustomModal from "../../components/Modal/modal";
import UserInformation from "../../components/User/UserInformation";

const users = [
  {
    id: 1,
    fullName: "Федоров Юрий Владимирович",
    isActive: true,
    role: "администратор",
    email: " engineer@example.com",
  },
  {
    id: 2,
    fullName: "Иванов Иван Иванович",
    isActive: true,
    role: "наблюдатель",
    email: "ivanov@example.com",
  },
  {
    id: 3,
    fullName: "Сергеев Сергей Сергеевич",
    isActive: true,
    role: "наблюдатель",
    email: "sergeev@example.com",
  },
  {
    id: 4,
    fullName: "Максимов Максим Максимович",
    isActive: false,
    role: "оператор",
    email: "maximov@example.com",
  },
  {
    id: 5,
    fullName: "Николаев Николай Николаевич",
    isActive: false,
    role: "оператор",
    email: "nikolaev@example.com",
  },
  {
    id: 6,
    fullName: "Феликсович Гаспар Гумбертович",
    isActive: true,
    role: "сервисный инженер",
    email: "gaspar@example.com",
  },
  {
    id: 7,
    fullName: "Федорова Елена Николаевна",
    isActive: true,
    role: "наблюдатель",
    email: "elena@example.com",
  },
  {
    id: 8,
    fullName: "Дмитриев Дмитрий Дмитриевич",
    isActive: true,
    role: "оператор",
    email: "dmitrii@example.com",
  },
];

const statusValues = [
  {
    label: 'завершен',
    value: 'завершен',
  },
  {
    label: 'в работе',
    value: 'в работе',
  },
  {
    label: 'опоздание',
    value: 'опоздание',
  },
  {
    label: 'неактивна',
    value: 'неактивна',
  },
];

export default function Users() {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const breakpoint = useBreakpoints();

  return (
    <>
      <h1 className="title">Управление пользователями</h1>
      <Form className="list-toolbar">
        <div className="left">
          {breakpoint !== 'sm' && (
            <FormGroup className="field">
              <ControlLabel>Статус</ControlLabel>
              <SelectPicker data={statusValues} searchable={false} placeholder="Выберите статус" />
            </FormGroup>
          )}

          <FormGroup className="field">
            <ControlLabel>Поиск</ControlLabel>
            <Input placeholder="Введите запрос" />
          </FormGroup>
        </div>

        <div className="right">{breakpoint !== 'sm' && <Button onClick={toggleModal} appearance="primary">Новый пользователь</Button>}</div>
      </Form>

      
      <CustomModal
        title="Item Modal"
        isActive={itemModalOpen}
        handleClose={() => setItemModalOpen(false)}
      >
        <h2>Hey Modal</h2>
      </CustomModal>
      <UserInformation data={users} />
    </>
  );
}