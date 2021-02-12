import React from "react";
import PropTypes from "prop-types";
import useBreakpoints from "../../utils/hooks/useBreakpoint";
import { List, Button, Toggle } from "rsuite";

import "./User.scss";

function UserTable(props) {
  const { data, setSelected, setModalState } = props;
  const breakpoint = useBreakpoints();
  console.log(data);

  return (
    <div className="scroll-container">
      <List
        className="user-list"
        size={(() => {
          switch (breakpoint) {
            case "md":
              return "md";
            case "lg":
              return "lg";
            default:
              return "sm";
          }
        })()}
      >
        <div className="list-header">
          <List.Item className="row">
            <div className="left">
              <div className="cell" style={{ width: 60 }}>
                Статус
              </div>
              <div className="cell" style={{ width: 250 }}>
                ФИО
              </div>
              <div className="cell" style={{ width: 180 }}>
                Роль
              </div>
              <div className="cell" style={{ width: 200 }}>
                E-mail
              </div>
            </div>
            <div className="right">
              <div className="cell" style={{ width: 100 }}>
                &#160;
              </div>
            </div>
          </List.Item>
        </div>
        <div className="list-body">
          {data.map((row) => {
            const { id, isActive, fullName, role, email } = row;
            return (
              <List.Item
                className="row"
                onClick={() => {
                  setSelected(row);
                  setModalState(true);
                }}
              >
                <div className="left">
                  <div className="cell" style={{ width: 60 }}>
                    {id}
                    {isActive}
                    <Toggle defaultChecked />
                  </div>

                  <div className="cell" style={{ width: 250 }}>
                    {fullName}
                  </div>

                  <div className="cell" style={{ width: 180 }}>
                    {role}
                  </div>

                  <div className="cell" style={{ width: 200 }}>
                    {email}
                  </div>
                </div>

                <div className="right">
                  <div className="cell" style={{ width: 100 }}>
                    <Button
                      appearance="link"
                      onClick={() => {
                        setSelected(row);
                        setModalState(true);
                      }}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </List.Item>
            );
          })}
        </div>
      </List>
    </div>
  );
}

UserTable.propTypes = {
  data: PropTypes.array,
  setSelected: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default UserTable;
