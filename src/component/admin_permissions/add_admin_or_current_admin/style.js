import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  direction: rtl;
  color: #111;
  background: #fff;

  * {
    box-sizing: border-box;
  }
.view-button-text{
  text-decoration: none;
}
  button,
  input,
  select {
    font-family: inherit;
  }

  .admin-page {
    width: 100%;
    padding: 38px 22px 50px;
  }

  /* =================================
     Breadcrumb
  ================================= */

  /* .breadcrumbs {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 13px;

    margin-bottom: 38px;

    font-size: 14px;

    color: #222;
  }

  .breadcrumb-link {
    padding: 0;

    border: 0;
    outline: none;

    background: transparent;

    color: #222;

    font-size: 14px;

    cursor: pointer;
  }

  .breadcrumb-link:hover {
    text-decoration: underline;
  }

  .breadcrumb-arrow {
    font-size: 14px;
    color: #111;
  }

  .breadcrumb-current {
    font-weight: 700;
    color: #111;
  } */

  /* =================================
     Tabs
  ================================= */

  .tabs-container {
    width: 370px;
    height: 58px;

    margin: 0 auto 35px;

    display: flex;

    direction: rtl;

    border: 1px solid #111;
    border-radius: 30px;

    background: #fff;

    overflow: hidden;
  }

  .tab-btn {
    flex: 1;

    height: 100%;

    margin: 0;
    padding: 0;

    border: 0 !important;
    outline: 0 !important;

    background: #fff;

    color: #111;

    font-size: 18px;
    font-weight: 700;

    cursor: pointer;

    box-shadow: none !important;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  .tab-btn.active {
    background: #000 !important;
    color: #fff !important;

    border-radius: 30px;
  }

  .tab-content {
    width: 100%;
  }

  /* =================================
     Current Admin
  ================================= */

  .current-admin-container {
    width: 100%;
  }

  .admins-table-wrapper {
    width: 100%;

    overflow-x: auto;

    border: 1px solid #111;

    background: #fff;
  }

  .admins-table {
    width: 100%;
    min-width: 1000px;

    border-collapse: collapse;
    border-spacing: 0;

    table-layout: fixed;

    direction: rtl;

    background: #fff;
  }

  .admins-table thead tr {
    height: 65px;
  }

  .admins-table tbody tr {
    height: 47px;
  }

  .admins-table th {
    padding: 8px 10px;

    border: 0;
    border-bottom: 1px solid #111;

    background: #fff;

    text-align: center;

    color: #111;

    font-size: 14px;
    font-weight: 500;

    white-space: nowrap;
  }

  .admins-table td {
    padding: 7px 10px;

    border: 0;
    border-bottom: 1px solid #111;

    background: #fff;

    text-align: center;
    vertical-align: middle;

    color: #111;

    font-size: 14px;

    white-space: nowrap;
  }

  .admins-table tbody tr:last-child td {
    border-bottom: 0;
  }

  .admins-table tbody tr:hover td {
    background: #fafafa;
  }

  .admin-name {
    font-weight: 700;
  }

  /* =================================
     Status
  ================================= */

  .status-control {
    width: 63px;
    height: 27px;

    margin: auto;

    display: flex;
    align-items: center;

    overflow: hidden;

    border-radius: 4px;

    direction: ltr;
  }

  .status-active {
    background: #42ef70;
  }

  .status-inactive {
    background: #ff1717;
  }

  .status-icon {
    width: 32px;
    height: 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    font-size: 20px;
  }

  .status-lines {
    width: 27px;
    height: 21px;

    margin-left: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.8);

    border-radius: 3px;

    background: rgba(255, 255, 255, 0.25);

    color: #fff;

    font-size: 11px;

    letter-spacing: -3px;
  }

  /* =================================
     View
  ================================= */

  .view-button {
    padding: 2px 5px;

    border: 0;
    outline: 0;

    background: transparent;

    display: inline-flex;
    align-items: center;

    gap: 7px;

    color: #111;

    font-size: 14px;

    cursor: pointer;
  }

  .view-button svg {
    font-size: 21px;
  }

  .view-button:hover {
    opacity: 0.65;
  }

  /* =================================
     Footer + Pagination
  ================================= */

  .table-footer {
    width: 100%;
    height: 95px;

    padding: 25px 22px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    direction: ltr;

    background: #fff;
  }

  .pagination {
    display: flex;
    align-items: center;

    gap: 8px;

    direction: ltr;
  }

  .pagination button {
    width: 41px;
    height: 41px;

    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #ededed;

    border-radius: 11px;

    background: #fff;

    color: #58616d;

    font-size: 14px;

    cursor: pointer;
  }

  .pagination button:hover:not(:disabled) {
    border-color: #111;
  }

  .pagination .page-number.active {
    border-color: #111;

    color: #111;

    font-weight: 700;
  }

  .pagination button:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .arrow-button svg {
    font-size: 17px;
  }

  .table-result {
    margin: 0;

    direction: rtl;

    color: #555d67;

    font-size: 14px;
  }

  .admins-state {
    min-height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;
  }

  .error-state {
    color: #d32f2f;
  }

  .empty-table {
    height: 90px !important;

    color: #777 !important;
  }

  /* =================================
     Add Admin
  ================================= */

  .add-admin {
    width: 100%;
  }

  .add-admin .p1 {
    width: 100%;

    text-align: right;

    margin-bottom: 35px;
  }

  .add-admin .p1 h4 {
    margin: 0 0 10px;

    color: #111;

    font-size: 27px;
    font-weight: 700;
  }

  .add-admin .description {
    margin: 0;

    color: #6d737b;

    font-size: 14px;
    line-height: 1.9;
  }

  .class_form {
    width: 100%;
  }

  .container_data {
    width: 100%;

    display: grid;

    grid-template-columns: 1fr 0.85fr;

    gap: 70px;

    align-items: stretch;

    margin-bottom: 20px;
  }

  .right_container_data {
    width: 100%;
  }

  .left_container_data {
    min-height: 165px;

    border: 2px dashed #b8c1ce;
    border-radius: 12px;

    background: #fff;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .left_container_data .title {
    margin: 0 0 16px;

    font-size: 14px;
    font-weight: 700;
  }

  .optional {
    margin-right: 4px;

    color: #aaa;

    font-size: 12px;
    font-weight: 400;
  }

  .container_camera {
    width: 66px;
    height: 66px;

    border: 4px solid #fff;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #e8edf4;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.17);

    cursor: pointer;
  }

  .camera {
    color: #8da2bc;

    font-size: 27px;
  }

  .class_field {
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 20px;
  }

  .class_field label {
    margin-bottom: 8px;

    color: #48515d;

    font-size: 13px;
    font-weight: 700;
  }

  .class_field .input,
  .class_field .password {
    width: 100%;
    height: 42px;

    padding: 0 12px;

    border: 1px solid #8190a2;

    border-radius: 8px;

    outline: none;

    background: #fff;

    color: #111;
  }

  .class_field .input:focus,
  .class_field .password:focus {
    border-color: #111;
  }

  .type_and_offic,
  .email_and_phone {
    width: 100%;

    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 70px;
  }

  .class_password {
    width: calc(50% - 35px);
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .error_massage {
    margin-top: 5px;

    color: #d32f2f;

    font-size: 12px;
  }

  .title_radio {
    margin: 15px 0 25px;

    color: #48515d;

    font-size: 14px;
    font-weight: 700;
  }

  .class_type_user {
    width: 100%;

    margin: 0 0 45px;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 70px;
  }

  .class_type_user .card {
    min-height: 180px;

    padding: 22px;

    position: relative;

    border: 1px solid #111;
    border-radius: 18px;

    background: #fff;

    cursor: pointer;
  }

  .class_type_user input {
    display: none;
  }

  .class_type_user .icon_and_title {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;
  }

  .class_type_user .icon {
    position: absolute;

    top: 12px;
    left: 14px;

    display: flex;

    font-size: 25px;
  }

  .class_type_user h6 {
    margin: 0 0 12px;

    font-size: 15px;

    color: #111;
  }

  .class_type_user p {
    margin: 0;

    max-width: 210px;

    color: #444;

    font-size: 13px;
    line-height: 1.8;
  }

  .class_type_user .card.activite {
    border-width: 2px;
  }

  .container_button {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-top: 15px;
  }

  .container_button .button {
    min-width: 180px;
    height: 48px;

    padding: 0 35px;

    border: 2px solid #111;
    border-radius: 13px;

    background: #fff;

    color: #111;

    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
  }

  .container_button .button:hover {
    background: #f7f7f7;
  }

  .container_button .button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* =================================
     Responsive
  ================================= */

  @media (max-width: 1000px) {
    .admin-page {
      padding: 25px 15px 40px;
    }

    .container_data,
    .type_and_offic,
    .email_and_phone {
      grid-template-columns: 1fr;

      gap: 0;
    }

    .class_password {
      width: 100%;
    }

    .class_type_user {
      grid-template-columns: 1fr;

      gap: 20px;
    }
  }

  @media (max-width: 600px) {
    .tabs-container {
      width: 100%;
      max-width: 370px;

      height: 50px;
    }

    .tab-btn {
      font-size: 15px;
    }

    .breadcrumbs {
      gap: 3px;

      font-size: 12px;

      flex-wrap: wrap;
    }

    .breadcrumb-link {
      font-size: 12px;
    }

    .table-footer {
      height: auto;

      gap: 15px;

      flex-wrap: wrap;
    }
  }
`;