import styled from "styled-components";

export const Styles = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  height: calc(100vh - 70px);
  width: ${(props) => (props.isOpen ? "220px" : "70px")};
  background-color: #0b5c9e;
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out;
  z-index: 99;
  box-shadow: -2px 0 8px rgba(90, 89, 89, 0.1);
  overflow-x: hidden;

  .toggle_btn {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
    padding: 15px 20px;
    font-size: 1.6rem;
    cursor: pointer;
    color: white;
    transition: background 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .nav_list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    flex: 1;
  }

  .nav_link {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    color: #e0e6ed;
    text-decoration: none;
    font-size: 0.95rem;
    white-space: nowrap;
    gap: 15px;
    transition: all 0.2s ease;
    border-right: 4px solid transparent;

    .class_icon {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 25px;
    }

    span {
      font-weight: 500;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
      color: #ffffff;
    }

    &.active {
      background-color: #08477a;
      color: #ffffff;
      border-right: 4px solid #ffcc00;
    }
  }

  .logout_container {
    padding: ${(props) => (props.isOpen ? "15px" : "10px 5px")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .logout_btn {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
    gap: 12px;
    width: 100%;
    padding: ${(props) => (props.isOpen ? "10px 12px" : "10px 0")};
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    white-space: nowrap;
    transition: background 0.2s;
    .class_icon {
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: ${(props) => (props.isOpen ? "auto" : "100%")};
    }
    &:hover {
      background-color: #d9534f;
      text-decoration: none;
    }
  } 
`;
