import styled from "styled-components";

export const Styles = styled.div`
  direction: rtl;
  width: 100%;

  padding: 20px 32px 40px;

  font-family: "Cairo", sans-serif;

  background: #fff;

  .page_title {
    font-size: 24px;
    font-weight: 700;

    text-align: right;

    margin-bottom: 16px;
  }



  .activity_header {
    display: flex;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 28px;

    margin-bottom: 10px;
  }

  .activity_info {
    min-width: 300px;

    padding-top: 8px;

    p {
      display: flex;

      gap: 10px;

      margin: 0 0 10px;

      font-size: 14px;
    }

    strong {
      min-width: 65px;
    }
  }

  .activity_image {
    width: 180px;

    height: 160px;

    border: 1.5px dashed #999;

    border-radius: 12px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #fff;

    .icon_close {
      font-size: 86px;

      color: #222;
    }
  }



  .list_title {
    font-size: 18px;

    margin: 4px 0 14px;

    font-weight: 500;
  }


  .attendance_filter {
    display: flex;

    justify-content: center;

    gap: 70px;

    margin-bottom: 18px;
  }

  .attendance_card {
    width: 170px;

    height: 40px;

    border: 1px solid #d1d5db;

    border-radius: 8px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 14px;

    cursor: pointer;

    background: white;

    input {
      display: none;
    }

    span {
      font-size: 14px;
    }

    .radio_icon {
      display: flex;

      font-size: 19px;
    }

    &.active {
      border-color: #111;
    }
  }

  /* 
     الجدول
   */

  .table_wrapper {
    border: 1px solid #111;

    padding: 0 14px;

    background: #fff;

    overflow: hidden;
  }

  .table_confirm {
    width: 100%;
  }

  /*
    react-data-table-component
  */

  .table_wrapper
    .rdt_Table {
    direction: rtl;

    border: none;
  }

  .table_wrapper
    .rdt_TableHeadRow {
    min-height: 48px;

    font-weight: 700;

    font-size: 13px;

    border-bottom:
      1px solid #222 !important;
  }

  .table_wrapper
    .rdt_TableRow {
    min-height: 52px;

    font-size: 12px;

    border-bottom:
      1px solid #222 !important;
  }

  .table_wrapper
    .rdt_TableRow:last-child {
    border-bottom:
      none !important;
  }

  .table_wrapper
    .rdt_TableCell,
  .table_wrapper
    .rdt_TableCol {
    justify-content: center;

    text-align: center;
  }

  /* 
     select حالة الحضور
 */

  .table_select {
    width: 88px;

    height: 30px;

    border: 1px solid #aaa;

    border-radius: 4px;

    background: white;

    font-family: inherit;

    font-size: 12px;

    text-align: center;
  }

  /*
     عدد الساعات
*/

  .hours_input {
    width: 62px;

    height: 28px;

    border: 1px solid #aaa;

    border-radius: 4px;

    text-align: center;

    font-family: inherit;

    font-size: 12px;
  }

  /* 
     Switch
 */

  .mini_switch {
    position: relative;

    width: 36px;

    height: 20px;

    display: inline-block;

    input {
      display: none;
    }

    .slider {
      position: absolute;

      inset: 0;

      background: #cbd5e1;

      border-radius: 20px;

      cursor: pointer;

      transition: 0.2s;
    }

    .slider::before {
      content: "";

      position: absolute;

      width: 16px;

      height: 16px;

      top: 2px;

      right: 2px;

      background: #fff;

      border-radius: 50%;

      transition: 0.2s;
    }

    input:checked
      + .slider {
      background: #22c55e;
    }

    input:checked
      + .slider::before {
      transform:
        translateX(-16px);
    }
  }

  /* 
     زر الحفظ
*/

  .save_container {
    display: flex;

    justify-content: center;

    margin-top: 14px;
  }

  .save_button {
    min-width: 150px;

    height: 38px;

    border: 1px solid #111;

    background: white;

    border-radius: 20px;

    font-family: inherit;

    font-size: 14px;

    font-weight: 600;

    cursor: pointer;

    &:hover {
      background: #111;

      color: white;
    }
  }

     /* Pagination */


  .custom_pagination {
    width: 100%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 18px;

    padding: 12px 8px;

   
    direction: ltr;
  }

  .pagination_info {
    direction: rtl;

    font-size: 12px;

    color: #666;
  }

  .pagination_buttons {
    display: flex;

    align-items: center;

    gap: 8px;
  }

  .page_number,
  .page_arrow {
    min-width: 34px;

    height: 34px;

    border: 1px solid
      #e5e7eb;

    border-radius: 8px;

    background: #fff;

    color: #333;

    display: flex;

    align-items: center;

    justify-content: center;

    cursor: pointer;

    font-family: inherit;

    font-size: 13px;

    transition: 0.2s;
  }

  .page_number.active {
    border-color: #111;

    font-weight: 700;
  }

  .page_number:hover,
  .page_arrow:hover:not(
      :disabled
    ) {
    border-color: #111;
  }

  .page_arrow:disabled {
    opacity: 0.35;

    cursor: default;
  }



  @media (max-width: 900px) {
    padding: 16px;

    .activity_header {
      flex-direction:
        column-reverse;

      align-items: stretch;
    }

    .activity_image {
      width: 100%;
    }

    .attendance_filter {
      gap: 12px;

      flex-wrap: wrap;
    }

    .attendance_card {
      width: 160px;
    }

    .table_wrapper {
      overflow-x: auto;
    }

    .custom_pagination {
      gap: 16px;

      flex-wrap: wrap;
    }
  }
`;