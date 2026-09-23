import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  direction: rtl;
  font-size: 14px;
  position: relative;
  z-index: 10; 

  .breadcrumb_link {
    color: #777;
    text-decoration: none;
    cursor: pointer; 
    display: inline-block;
  }

  .breadcrumb_link:hover {
    color: #111;
  }

  .breadcrumb_separator {
    color: #999;
    font-size: 13px;
    user-select: none;
  }

  .breadcrumb_active {
    color: #111;
    font-weight: 600;
  }
`;