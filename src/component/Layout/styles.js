import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main_wrapper {
    display: flex;
    flex: 1;
    margin-top: 70px;
    position: relative;
  }

  .page_container {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 70px);

    margin-right: ${(props) => (props.$isSidebarOpen ? "220px" : "70px")};
    transition: margin-right 0.3s ease-in-out;
    width: calc(100% - ${(props) => (props.$isSidebarOpen ? "220px" : "70px")});
  }

  .outlet_container {
    flex: 1;
    padding: 10px;
  }
`;
