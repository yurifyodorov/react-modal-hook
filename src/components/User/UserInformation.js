import React from 'react';
import PropTypes from 'prop-types';
import UserDetail from './UserDetail';
import UserList from './UserList';
import { useModalWithData } from '../../utils/hooks/useModal';
import CustomModal from '../Modal/modal';


const UserInformation = props => {
  const {
    modalOpen,
    selected,
    setSelected,
    setModalState
  } = useModalWithData()
  const {data} = props

  return (
    <div>
      <div style={{ padding: '1rem' }}>
      <CustomModal
        title="Паспорт пользователя"
        isActive={modalOpen}
        handleClose={() => setModalState(false)}
      >
        <UserDetail data={selected} />
      </CustomModal>

      <UserList
        data={data}
        setSelected={setSelected}
        setModalState={setModalState}
      />
      </div>
    </div>
  )
}

UserInformation.propTypes = {
  data: PropTypes.array.isRequired,
}
export default UserInformation
