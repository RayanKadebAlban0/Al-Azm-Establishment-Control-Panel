import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #111;
  direction: rtl;

  * {
    box-sizing: border-box;
  }

  .admin-page {
    width: 100%;
    padding: 10px 24px 50px;
  }

  /* =========================
     Tabs
  ========================== */

  .tabs-container {
    width: 370px;
    height: 58px;
    margin: 0 auto 35px;

    display: flex;

    border: 1.5px solid #111;
    border-radius: 30px;

    overflow: hidden;

    background: #fff;
  }

  .tab-btn {
    width: 50%;
    height: 100%;

    border: none;
    outline: none;

    background: #fff;

    font-family: inherit;
    font-size: 18px;
    font-weight: 700;

    color: #111;

    cursor: pointer;

    transition: 0.2s;
  }

  .tab-btn.active {
    background: #000;
    color: #fff;
    border-radius: 30px;
  }

  .tab-content {
    width: 100%;
  }

  /* =========================
     Current Admin
  ========================== */

  .current-admin-container {
    width: 100%;
    margin-top: 10px;
  }

  .admins-table-wrapper {
    width: 100%;

    border: 1px solid #222;

    overflow-x: auto;

    background: #fff;
  }

  .admins-table {
    width: 100%;

    min-width: 1000px;

    border-collapse: collapse;

    table-layout: fixed;

    direction: rtl;
  }

  .admins-table thead {
    background: #fff;
  }

  .admins-table th {
    height: 62px;

    padding: 10px 8px;

    border-bottom: 1px solid #111;

    text-align: center;

    font-size: 14px;
    font-weight: 500;

    color: #111;

    white-space: nowrap;
  }

  .admins-table td {
    height: 48px;

    padding: 7px 8px;

    border-bottom: 1px solid #111;

    text-align: center;

    vertical-align: middle;

    font-size: 14px;

    color: #111;

    white-space: nowrap;
  }

  .admins-table tbody tr:last-child td {
    border-bottom: none;
  }

  .admins-table tbody tr:hover {
    background: #fafafa;
  }

  .admin-name {
    font-weight: 700;
  }

  /* =========================
     Status
  ========================== */

  .status-control {
    width: 64px;
    height: 26px;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 4px;

    overflow: hidden;

    color: white;
  }

  .status-active {
    background: #42ec6d;
  }

  .status-inactive {
    background: #ff1d25;
  }

  .status-icon {
    width: 32px;
    height: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 21px;
  }

  .status-lines {
    width: 26px;
    height: 20px;

    margin-left: 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.25);

    border: 1px solid rgba(255, 255, 255, 0.75);

    border-radius: 3px;

    color: #fff;

    letter-spacing: -3px;

    font-size: 12px;
  }

  /* =========================
     View button
  ========================== */

  .view-button {
    border: none;
    background: transparent;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 7px;

    cursor: pointer;

    font-family: inherit;
    font-size: 14px;

    color: #111;

    padding: 4px 6px;
  }

  .view-button svg {
    font-size: 21px;
  }

  .view-button:hover {
    opacity: 0.7;
  }

  /* =========================
     Table Footer
  ========================== */

  .table-footer {
    width: 100%;

    min-height: 90px;

    padding: 25px 22px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    direction: ltr;

    background: #fefefe;
  }

  .pagination {
    display: flex;
    align-items: center;

    gap: 8px;
  }

  .pagination button {
    width: 40px;
    height: 40px;

    border: 1px solid #ececec;

    border-radius: 11px;

    background: #fff;

    color: #555;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-size: 14px;
  }

  .pagination button:hover:not(:disabled) {
    border-color: #111;
  }

  .pagination button:disabled {
    opacity: 0.35;
    cursor: default;
  }

  .pagination .page-number.active {
    border-color: #111;

    color: #111;

    font-weight: 700;
  }

  .arrow-button svg {
    font-size: 18px;
  }

  .table-result {
    margin: 0;

    direction: rtl;

    color: #555;

    font-size: 14px;
  }

  /* =========================
     Loading / Error
  ========================== */

  .admins-state {
    width: 100%;

    min-height: 250px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    gap: 15px;

    font-size: 16px;
  }

  .error-state {
    color: #d32f2f;
  }

  .error-state button {
    padding: 8px 25px;

    border: 1px solid #111;

    border-radius: 8px;

    background: #fff;

    cursor: pointer;

    font-family: inherit;
  }

  .empty-table {
    height: 100px !important;

    color: #777 !important;
  }

  /* =========================
     Add Admin old styles
     حتى لا نخرب الفورم الحالي
  ========================== */

  .description {
    margin: 0;
  }

  .class_type_activite,
  .class_date,
  .class_state {
    display: flex;
    flex-direction: column;
  }

  .default_option {
    display: none;
  }

  .title_radio {
    color: rgb(72, 74, 75);
  }

  .class_type_user {
    display: flex;
    flex-direction: row;

    width: 95%;

    margin: 20px;

    justify-content: space-between;

    gap: 20px;

    .card {
      border-radius: 20px;
      border: 1px solid black;
    }

    input {
      display: none;
    }

    .icon_and_title {
      position: relative;

      width: 300px;

      display: flex;
      flex-direction: column;

      justify-content: center;

      gap: 10px;

      padding: 20px;

      .icon {
        position: absolute;

        top: 0;
        left: 10px;
      }
    }
  }

  .massage_warning {
    margin: 10px;

    width: 50%;

    color: red;
  }

  .class_form {
    margin-top: 20px;

    .class_field {
      display: flex;
      flex-direction: column;

      padding: 10px;

      .input {
        height: 38.6px;

        margin-top: 10px;

        border: 1px solid black;

        border-radius: 10px;
      }
    }

    .manage {
      width: 50%;
    }

    .container_button {
      display: flex;

      justify-content: center;

      .button {
        padding: 10px 50px;

        border: 1px solid black;

        border-radius: 10px;
      }
    }
  }

  .date_and_time,
  .type_and_offic,
  .email_and_phone {
    display: flex;

    width: 100%;
  }

  .class_field {
    width: 100%;

    .input {
      width: 90%;
    }

    .password {
      width: 44.2%;

      height: 38.6px;

      margin-top: 10px;

      border: 1px solid black;

      border-radius: 10px;
    }
  }

  .container_data {
    display: flex;

    flex-direction: row;

    width: 100%;

    .right_container_data {
      width: 50%;
    }

    .left_container_data {
      margin-right: auto;
      margin-left: auto;

      padding: 10px;

      width: 30%;

      border: 3px dotted black;

      border-radius: 10px;

      background-color: rgb(248, 254, 255);

      .title {
        margin: auto;

        margin-top: 10px;
        margin-bottom: 0;
      }

      .container_camera {
        width: 70px;
        height: 70px;

        margin: auto;
        margin-top: 20px;

        border: 4px solid white;
        border-radius: 50%;

        display: flex;

        justify-content: center;
        align-items: center;

        background-color: rgb(212, 218, 219);

        box-shadow: 0 2px 5px 1px black;

        .camera {
          font-size: 1.5rem;
        }
      }
    }
  }

  /* =========================
     Responsive
  ========================== */

  @media (max-width: 900px) {
    .admin-page {
      padding: 10px 15px 40px;
    }

    .tabs-container {
      width: min(370px, 100%);
    }

    .table-footer {
      gap: 15px;
      flex-wrap: wrap;
    }

    .class_type_user {
      flex-wrap: wrap;
    }
  }
`;