import React from 'react'
import PropTypes from 'prop-types'

function UserDetail(props) {
  const { data } = props
  if (!data) return null
  return (
    <div>
     <p>ФИО: {data.fullName}</p>
     <p>Статус: {data.isActive ? 'активен' : 'неактивен' }</p>
     <p>Роль: {data.role }</p>
     <p>Gender: {data.email}</p>
    </div>
  )
}

UserDetail.propTypes = {
  data: PropTypes.object
}

export default UserDetail