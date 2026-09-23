import React, { useState } from "react";
import Select, { components } from "react-select";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { SlArrowDown } from "react-icons/sl";

const Styles = styled.div`
  width: ${({ $propWidth }) => ($propWidth ? $propWidth : "100% !important")};

  input[type="text"] {
    background-color: transparent !important;
    min-height: 25px !important;
    width: 100% !important;
    border: none !important;
  }
`;

const MultiValueChip = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  background-color: #e5e6e6;
  border-radius: var(--border-radius);
  margin: 0 2px;
  height: 26.4px;
`;

// Collapses multi-select chips into "first N + count" for compactness.
// Collapses multi-select chips into "first N + count" for compactness.
const MultiValue = (props) => {
  const { data, index, getValue, maxDisplayedItems = 2 } = props;
  const selectedValues = getValue();
  const selectedCount = selectedValues ? selectedValues.length : 0;

  if (selectedCount <= 1 || index < maxDisplayedItems) {
    return (
      <components.MultiValue {...props}>
        <span>{data.label}</span>
      </components.MultiValue>
    );
  }

  if (index === maxDisplayedItems) {
    return <MultiValueChip>+{selectedCount - maxDisplayedItems}</MultiValueChip>;
  }

  return null;
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <SlArrowDown />
  </components.DropdownIndicator>
);

const SelectInput = ({ fieldItem, validateOnChange }) => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";
  const {
    value,
    setValue,
    onChange,
    propWidth = null,
    className,
    isMulti,
    isDisabled,
    loading,
    placeholder,
    options,
    name,
    errorMessage,
    backgroundColor,
    borderColor = null,
  } = fieldItem;
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "var(--border-radius)",
      boxShadow: "none",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      background: backgroundColor ? `${backgroundColor} !important` : "white",
      color: "#000",
      minHeight: "40px",
      justifyContent: "flex-start",
      width: "100%",
      borderColor:
        errorMessage && validateOnChange
          ? "var(--danger)"
          : borderColor
            ? borderColor
            : "var(--border-color)",
      "&:hover": {
        borderColor:
          errorMessage && validateOnChange
            ? "var(--danger)"
            : "var(--main-blue)",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: isAr ? "right" : "left",
      color: "var(--placeholder-grey)",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--main-color)",
    }),
    singleValue: (provided) => ({
      ...provided,
      textAlign: isAr ? "right" : "left",
      color: "#000",
      direction: isAr ? "rtl" : "ltr",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "4px",
      textAlign: isAr ? "right" : "left",
      direction: isAr ? "rtl" : "ltr",
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "var(--border-color)"
        : state.isFocused
          ? "var(--lighter-blue)"
          : "transparent",
      color: state.isFocused ? "var(--main-color)" : "black",
      textAlign: isAr ? "right" : "left",
      direction: isAr ? "rtl" : "ltr",
      cursor: "pointer",
    }),
  };

  const handleChange = (selected) => {
    if (setValue) setValue(selected, name);
    else if (onChange) onChange(selected);
  };

  return (
    <Styles className={className} $propWidth={propWidth}>
      <Select
        styles={customStyles}
        isLoading={loading}
        isMulti={isMulti}
        className="select"
        value={value}
        isClearable
        isDisabled={loading || isDisabled}
        placeholder={placeholder ? t(placeholder) : ""}
        onChange={handleChange}
        options={options}
        menuIsOpen={menuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        menuShouldScrollIntoView={false}
        noOptionsMessage={() => t("No options")}
        components={{ DropdownIndicator, MultiValue }}
      />
    </Styles>
  );
};

export default SelectInput;
