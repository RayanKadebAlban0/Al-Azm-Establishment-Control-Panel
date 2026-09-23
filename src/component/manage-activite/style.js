import styled from "styled-components";

export const Styles = styled.div`
  padding: 2px 18px 60px 18px;
  margin-top: 0%;
  h4 {
    margin: 6px 0 18px 0;
    font-weight: 700;
    font-size: 20px;
  }
  .mb-4 {
    display: flex;
  }

  .card_wrapper {
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
.add_activity_link {
  text-decoration: none;
  color: inherit;
  display: block;
}
  .card_wrapper > div {
    width: 100%;
    height: 100%;
  }
  /* Filters row */
  .container_filter {
    display: flex;
    gap: 12px;
  align-items: flex-end;
  justify-content: space-between;
    flex-wrap: wrap;
    background: transparent;
    padding: 12px;
  }

  .class_date1,
  .class_type,
  .class_state1 {
    background: #fff;
    min-width: 110px;
    border: 1px solid #0a0a0a;
    border-radius: 14px;
    display: flex;
    align-items: center;
    height: 42px;

    padding: 0 14px;
  }
  .class_type select,
  .class_state1 select {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
  }
  .class_state {
    border: none;
  }

  /* .class_date p,
  .class_type_activite p,
  .class_state p {
    margin: 0 0 6px 0;
    font-size: 13px;
    color: #000000;
  } */
    .class_date,
.class_type_activite,
.class_state {
  display: flex;
  flex-direction: column;
}

  .manage_date1 .react-datepicker-wrapper {
    width: 100%;
  }
.manage_date1 .react-datepicker__input-container {
  width: 100%;
  height: 42px;
  border: 1px solid #0a0a0a;
  border-radius: 14px;
  background: #fff;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0 14px;
}
.manage_date1 .react-datepicker__calendar-icon {
  position: static;
  padding: 0;
  width: 16px;
  height: 16px;
}
.manage_date1 input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 0;
}

  .class_button_app_filter {
    background: #c2bebe;
    border: 1px solid #0a0a0a;
    height: 42px;
    padding: 0 14px;
    border-radius: 14px;
     display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
    cursor: pointer;
  }
  .class_date1,
  .class_type,
  .class_state1,
  .class_button_app_filter {
    width: 160px;
  }

  .mb-4 {
    display: flex;
  }

  .add_activite {
    width: 100%;
    height: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #242222;
    border-radius: 12px;
    padding: 18px;
    background: #fff;
  }

  .add_activite .button_add {
    text-decoration: none;
    color: #222;
    font-size: 28px;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #bbb;
  }

  .add_activite .text {
    margin-top: 14px;
    font-weight: 600;
  }
  .add_activite .description {
    font-size: 13px;
    color: #666;
    text-align: center;
    margin-top: 8px;
  }

  .container_button_review {
    display: flex;
    gap: 12px;
    padding: 0;
    /* margin-top:0px; */
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .container_button_review .button {
    background: transparent;
    border: 3px solid #000000;
    padding: 8px 12px;
    border-radius: 12px;
    cursor: pointer;
  }

  .card1 {
    width: 100%;
  }

  /* responsive tweaks */
  @media (max-width: 768px) {
    .container_filter {
      gap: 8px;
    }
    .class_date,
    .class_type_activite,
    .class_state {
      min-width: 120px;
    }
  }
  .part1 {
    padding: 0%;
    margin: 0%;
  }
`;
