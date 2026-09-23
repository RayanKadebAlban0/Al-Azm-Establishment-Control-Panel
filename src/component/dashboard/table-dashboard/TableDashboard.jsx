import React from "react";
import BaseDataTable from "../../common/tabel/base_data_table/BaseDataTable";
import { useState } from "react";
import { Styles } from "./style";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditUser from "../edit-user/EditUser";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";

import AddCustomer from "../../../page/controlpanel/add-customer/AddCustomer";
const columns = [
  {
    name: "firstName",
    selector: (row) => row.firstName,
  },
  {
    name: "lastName",
    selector: (row) => row.lastName,
  },
  {
    name: "email",
    selector: (row) => row.email,
  },
  {
    name: "typeUser",
    selector: (row) => row.typeUser,
  },
  {
    name: "year",
    selector: (row) => row.year,
  },
  {
    name: "dateCreate",
    selector: (row) => row.dateCreate,
  },
  {
    name: "add",
    selector: (row) => row.add,
  },
];

const TableDashboard = () => {
  const profileData = useSelector((state) => state.student2.profileData);
  const [search, setSearch] = useState("");
  const [displayAdd, setDisplayAdd] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [item, setItem] = useState({
    id: "",
    firstNamename: "",
    lastName: "",
    email: "",
    typeUser: "",
    year: "",
    dateCreate: "",
  });
  const [filterData, setFilterData] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  // const [date,setDate]=useState(new Date())
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "omar",
      lastName: "alanizy",
      email: "omar12345@gmail.com",
      typeUser: "يافع",
      year: "10",
      password: "12",
      confirmPassword: "12",
    },
    {
      id: 2,
      firstName: "sara",
      lastName: "alanizy",
      email: "sara12345@gmail.com",
      typeUser: "متطوع",
      year: "19",
      password: "12",
      confirmPassword: "12",
    },
    {
      id: 3,
      firstName: " sedra",
      lastName: "alanizy",
      email: "sedra12345@gmail.com",
      typeUser: "يافع",
      year: "16",
      password: "12",
      confirmPassword: "12",
    },
    {
      id: 4,
      firstName: "ahmad",
      lastName: "ahmad",
      email: "ahmad12345@gmail.com",
      typeUser: "ادمن",
      year: "1984",
      password: "12",
      confirmPassword: "12",
    },
  ]);
  const handleDisplayEdit = (item) => {
    setDisplayEdit(true);
    setItem(item);
  };
  const handleEdit = (values, domainYear) => {
    const newItems = data.map((i, index) => {
      if (i === item) {
        i = {
          id: uuid(),
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          typeUser: domainYear,
          year: values.year,
          password: values.password,
          confirmPassword: values.confirmPassword,
        };
        return i;
      } else {
        return i;
      }
    });

    setData(newItems);
  };

  const handleDeleteRow = (id) => {
    alert("هل انت متاكد من الحذف؟");
    const selectedIds = dataNew.filter((item) => {
      return item.id !== id;
    });
    return setData(selectedIds);
  };
  const dataNew = data.map((item) => {
    const newItem = {
      ...item,
      add: (
        <div>
          <button
            className="button_edit"
            onClick={() => {
              handleDisplayEdit(item);
            }}
          >
            <CiEdit />
          </button>
          <button
            className="button_delete"
            onClick={() => {
              handleDeleteRow(item.id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      ),
    };
    return newItem;
  });

  const newData = dataNew.filter((item, index) => {
    const matchSearch =
      search === "" || item.name.toLowerCase().includes(search.toLowerCase());
    if (profileData.Permission === "*") {
      const matchFilter = filterData === "";
      const match2 = filterData === "متطوع" ? item.year >= 18 : item.year < 18;
      return matchSearch && (matchFilter || match2);
    } else if (profileData.Permission === "youthAdmin") {
      const match2 = item.year <= 18;
      return matchSearch && match2;
    } else {
      const match2 = item.year > 18 && item.typeUser === "متطوع";
      return matchSearch && match2;
    }
  });

  const handleDelete = () => {
    const selectedIds = selectedRows.map((row) => row.id);
    const newData = data.filter((row) => !selectedIds.includes(row.id));
    setData(newData);
  };

  return (
    <Styles>
      <BaseDataTable
        subHeader
        subHeaderComponent={
          <div className="container_button">

            {" "}
            <button
              className="class_add_user"
              onClick={() => {
                setDisplayAdd(true);
              }}
            >
              اضافة مستخدم
            </button>

            {displayAdd ? (
              <AddCustomer
                data={data}
                setData={setData}
                setDisplay={setDisplayAdd}
              />
            ) : (
              <></>
            )}
            {displayEdit ? (
              <EditUser
                data={item}
                handleEdit={handleEdit}
                setDisplay={setDisplayEdit}
              />
            ) : (
              <></>
            )}
            <div className="class_header">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="البحث من خلال الاسم"
              />
              {profileData.Permission === "*" ? (
                <select
                  value={filterData}
                  onChange={(e) => {
                    setFilterData(e.target.value);
                  }}
                >
                  <option value="">الكل</option>
                  <option value="يافع">يافع</option>
                  <option value="متطوع">متطوع</option>
                </select>
              ) : (
                <></>
              )}
            </div>
          </div>
        }
        columns={columns}
        data={newData}
        selectableRows
        onSelectedRowsChange={(state) => setSelectedRows(state.selectedRows)}
        onDelet={handleDelete}
      />
    </Styles>
  );
};

export default TableDashboard;
