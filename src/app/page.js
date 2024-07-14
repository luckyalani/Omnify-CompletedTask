"use client";
import { Field, Form, Formik, useFormik, resetForm } from "formik";
import Link from "next/link";
import React from "react";
import { useReducer, useState } from "react";
import { useRef } from "react";
import Modal from "react-modal";
import { Button } from "@mantine/core";
import Image from "next/image";
import avatarimg from "./mages/user.png";

const Page = () => {
  // objects of table

  // function for the select dropdonw position
  // const position=()=>{
  //   const dropdownRef = dropdownMenu.current
  //   if(dropdownRef){
  //     dropdownRef.style.position = 'fixed';
  //     dropdownRef.style.top = '50px';
  //     dropdownRef.style.width = '300px';
  //     // alert("hello")
  //   }
  // }
  const servicespostion = () => {
    const dropservice = dropdownMenu2.current;
  };
  const uncheck = () => {
    inref.current.querySelectorAll('input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
    setForm2Search("");

    // SetTooglevalues(!Tooglevalues);
  };
  const [data, setData] = useState([
    {
      id: 1,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Lucky",
      status: "Active",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
      add1: "class",
      add2: "public",
    },
    {
      id: 2,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "himanshu2",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
      add1: "Facility",
      add2: "private",
    },

    {
      id: 3,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "divyanshu",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
      add1: "class",
      add2: "public",
    },
    {
      id: 4,
      createdOn: "dannie",
      payer: "theodore T.C. Calvin",
      status: "Active",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 5,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "joe root",
      status: "Inactive",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 6,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 7,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 8,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 9,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 10,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 11,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 12,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 13,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 14,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 15,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 16,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      payerPhone: "+91 966559186876",
      services: "Private Language Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
  ]);

  // TabComponent
  const tab1Dot = useRef();
  const tab2Dot = useRef();
  const tabComp1 = useRef();
  const tabComp2 = useRef();

  const openTab1 = (e) => {
    tabComp1.current.classList.remove("hidden");
    tabComp2.current.classList.add("hidden");
    tab2Dot.current.classList.remove("bg-black");
    tab1Dot.current.classList.add("bg-black");
  };
  const openTab2 = (e) => {
    tabComp2.current.classList.remove("hidden");
    tabComp1.current.classList.add("hidden");
    tab1Dot.current.classList.remove("bg-black");
    tab2Dot.current.classList.add("bg-black");
  };
  // people Object
  const [People, Setpeople] = useState([
    {
      id: 1,
      name: "luckyalani",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"
            class="clr-i-solid clr-i-solid-path-1"
          />
          <circle
            cx="18"
            cy="10"
            r="7"
            fill="currentColor"
            class="clr-i-solid clr-i-solid-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Himanshu",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"
            class="clr-i-solid clr-i-solid-path-1"
          />
          <circle
            cx="18"
            cy="10"
            r="7"
            fill="currentColor"
            class="clr-i-solid clr-i-solid-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Rahul",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"
            class="clr-i-solid clr-i-solid-path-1"
          />
          <circle
            cx="18"
            cy="10"
            r="7"
            fill="currentColor"
            class="clr-i-solid clr-i-solid-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Vishal",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98"
            class="clr-i-solid clr-i-solid-path-1"
          />
          <circle
            cx="18"
            cy="10"
            r="7"
            fill="currentColor"
            class="clr-i-solid clr-i-solid-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      ),
    },
  ]);

  const form1 = useRef();
  const form2 = useRef();
  const form3 = useRef();

  // input ref
  const inref = useRef([]);
  // input check function

  // Left Form1
  const [selectedOption, setSelectedOption] = useState("All time");
  // Left Form3.1
  const [selectedOption1, setSelectedOption1] = useState("Select service type");
  // Left Form3.1
  const [selectedOption2, setSelectedOption2] = useState("Select service type");

  const openmodal = () => {
    // filter modal
    SetinputToggle(!inputtoggle);
  };
  const formik = useFormik({
    initialValues: {
      //  form1Select:selectedOption,
      form1FromD: "",
      form1ToD: "",
      form2Search: "",
    },
    onSubmit: (form1Valuse) => {
      console.log("chala");
      console.log(formik.values, selectedOption);
    },
  });
  // state variable for modal
  const [inputtoggle, SetinputToggle] = useState(false);

  const [form2Search, setForm2Search] = useState("");
  const [searchData, setSearchData] = useState([]);

  // setSearchData(data.filter((d)=>{
  //   d.name.includes(form2Search);
  // }))
  // console.log(searchData);

  const dummyFun = (e) => {
    console.log(formik.values);
  };

  const dropdownButton = useRef();
  const dropdownButton1 = useRef();
  const dropdownButton2 = useRef();
  const dropdownMenu = useRef();
  const dropdownMenu1 = useRef();
  const dropdownMenu2 = useRef();

  const getSelected = (e) => {
    setSelectedOption(e.target.innerHTML);
    dropdownMenu.current.classList.toggle("hidden");
  };

  const getSelected1 = (e) => {
    setSelectedOption1(e.target.innerHTML);
    dropdownMenu1.current.classList.toggle("hidden");
  };
  const getSelected2 = (e) => {
    setSelectedOption2(e.target.innerHTML);
    dropdownMenu2.current.classList.toggle("hidden");
  };

  const dropdownButtonF = (event) => {
    event.stopPropagation();
    console.log("open chala");
    dropdownMenu.current.classList.toggle("hidden");
  };

  const dropdownButtonF1 = (event) => {
    event.stopPropagation();
    console.log("open chala");
    dropdownMenu1.current.classList.toggle("hidden");
  };
  const dropdownButtonF2 = (event) => {
    event.stopPropagation();
    console.log("open chala");
    dropdownMenu2.current.classList.toggle("hidden");
  };

  const [chipData, setChipData] = useState([]);

  const [chips, setChips] = useState([
    { value: "him", id: 1 },
    { value: "him", id: 2 },
  ]);
  const addChip = (checked) => {
    chipData.map((cData) => {
      data.map((object) => {
        object.id === cData
          ? setChips([...chips, { value: object.payer, id: object.id }])
          : null;
      });
    });
    // console.log(checked);
    // if (inputValue.trim()) {
    //   setChips([...chips, { value: inputValue, id: Math.random().toString() }]); // Unique ID for deletion
    //   setInputValue("");
    // }
  };
  const handleDeleteChip = (chipId) => {
    setChips(chips.filter((chip) => chip.id !== chipId));
  };

  const [tableCols, setTableCols] = useState({
    createdOn: true,
    payer: true,
    status: true,
    email: true,
    payerPhone: true,
    services: true,
    scheduled: true,
  });

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const closeinputmodal = () => {
    SetinputToggle(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const [sidebar, setSidebar] = useState(true);
  const sidebar1 = useRef(null);
  const sidebar2 = useRef(null);

  const SidebarToggle = () => {
    // console.log("chala");
    if (sidebar1.current.classList.contains("-translate-x-full")) {
      sidebar1.current.classList.remove("-translate-x-full");
      // sidebar1.current.classList.add("relative overflow-y-auto h-full");
    } else {
      sidebar1.current.classList.add("-translate-x-full");
    }
  };

  const collapse = () => {
    sidebar1.current.style.display = "none";
    sidebar2.current.style.display = "flex";
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  const expand = () => {
    sidebar1.current.style.display = "flex";
    sidebar2.current.style.display = "none";
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  return (
    <div className="flex min-h-screen overflow-y-auto max-w-full w-full ">
      {/* Main Sidebar */}

      <div
        id="sidebar"
        ref={sidebar1}
        className=" bg-zinc-100  md:w-[20vw] p-4 space-y-4 transition-transform transform md:translate-x-0 -translate-x-full  md:relative fixed inset-y-0 left-0 z-50 flex flex-col justify-between"
      >
        {/* FrontDesk Heading */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <span
              onClick={() => collapse()}
              className="text-md lg:text-xl font-semibold flex items-center justify-between w-full  "
            >
              <span className="flex items-cemter gap-3 md:text-[13px] lg:text-lg ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.48 0H3.52001C1.57596 0 0 1.57596 0 3.52001V18.48C0 20.424 1.57596 22 3.52001 22H18.48C20.424 22 22 20.424 22 18.48V3.52001C22 1.57596 20.424 0 18.48 0Z"
                    fill="#262626"
                  />
                  <path
                    d="M17.7627 12.9381C18.8596 12.9381 19.7488 12.047 19.7488 10.9479C19.7488 9.84878 18.8596 8.95776 17.7627 8.95776C16.6658 8.95776 15.7766 9.84878 15.7766 10.9479C15.7766 12.047 16.6658 12.9381 17.7627 12.9381Z"
                    fill="white"
                  />
                  <path
                    d="M4.17823 12.9578C5.27512 12.9578 6.16433 12.0668 6.16433 10.9677C6.16433 9.86856 5.27512 8.97754 4.17823 8.97754C3.08134 8.97754 2.19214 9.86856 2.19214 10.9677C2.19214 12.0668 3.08134 12.9578 4.17823 12.9578Z"
                    fill="white"
                  />
                  <path
                    d="M6.12525 8.10188C7.22214 8.10188 8.11135 7.21086 8.11135 6.11173C8.11135 5.0126 7.22214 4.12158 6.12525 4.12158C5.02836 4.12158 4.13916 5.0126 4.13916 6.11173C4.13916 7.21086 5.02836 8.10188 6.12525 8.10188Z"
                    fill="white"
                  />
                  <path
                    d="M10.97 6.15157C12.0669 6.15157 12.9561 5.26055 12.9561 4.16142C12.9561 3.06229 12.0669 2.17126 10.97 2.17126C9.87309 2.17126 8.98389 3.06229 8.98389 4.16142C8.98389 5.26055 9.87309 6.15157 10.97 6.15157Z"
                    fill="white"
                  />
                  <path
                    d="M15.8165 8.10188C16.9134 8.10188 17.8026 7.21086 17.8026 6.11173C17.8026 5.0126 16.9134 4.12158 15.8165 4.12158C14.7196 4.12158 13.8304 5.0126 13.8304 6.11173C13.8304 7.21086 14.7196 8.10188 15.8165 8.10188Z"
                    fill="white"
                  />
                  <path
                    d="M15.8165 17.6546C16.9134 17.6546 17.8026 16.7636 17.8026 15.6645C17.8026 14.5653 16.9134 13.6743 15.8165 13.6743C14.7196 13.6743 13.8304 14.5653 13.8304 15.6645C13.8304 16.7636 14.7196 17.6546 15.8165 17.6546Z"
                    fill="white"
                  />
                  <path
                    d="M10.97 19.7244C12.0669 19.7244 12.9561 18.8334 12.9561 17.7343C12.9561 16.6352 12.0669 15.7441 10.97 15.7441C9.87309 15.7441 8.98389 16.6352 8.98389 17.7343C8.98389 18.8334 9.87309 19.7244 10.97 19.7244Z"
                    fill="white"
                  />
                  <path
                    d="M6.12525 17.6546C7.22214 17.6546 8.11135 16.7636 8.11135 15.6645C8.11135 14.5653 7.22214 13.6743 6.12525 13.6743C5.02836 13.6743 4.13916 14.5653 4.13916 15.6645C4.13916 16.7636 5.02836 17.6546 6.12525 17.6546Z"
                    fill="white"
                  />
                </svg>
                Front-Desk
              </span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                    stroke="#64748B"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 2V14"
                    stroke="#64748B"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="8"
                    y="2"
                    width="6"
                    height="12"
                    rx="1"
                    fill="#64748B"
                  />
                </svg>
              </span>
            </span>

            {/* <button id="closeSidebar" className="md:hidden">
            <img undefinedhidden="true" alt="close" src="https://placehold.co/20x20" />
          </button> */}
          </div>

          {/* Location and Time zone */}

          <div className="space-y-2 mb-10">
            <div className="text-sm flex items-center justify-between mt-5">
              <span>Location Name</span>

              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3334 7.33333L14 4.66667L11.3334 2"
                    stroke="#475569"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 4.66663H6"
                    stroke="#475569"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66667 14L2 11.3333L4.66667 8.66663"
                    stroke="#475569"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11.3334H2"
                    stroke="#475569"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-[#F1F5F9] flex flex-col gap-3">
              <div className="md:text-[12px] lg:text-lg font-semibold">
                08:30 AM Tue 20 Jan
              </div>
              <select className="border-none outline-none text-sm w-full bg-transparent outline-none">
                <option value="">UTC: +5 hours</option>
              </select>
            </div>
          </div>

          {/* Routs Provider */}

          <div className="">
            <nav className="space-y-2 my-7">
              <Link href="#" className=" text-zinc-700 flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Orders
              </Link>
              <Link href="#" className="flex items-center gap-1 text-zinc-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_12388)">
                    <path
                      d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12388">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Subscriptions
              </Link>
              <Link href="#" className="flex items-center gap-1 text-zinc-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6666 1.33337V4.00004"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33337 1.33337V4.00004"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 6.66663H14"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33337 9.33337H5.34004"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 9.33337H8.00667"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6666 9.33337H10.6733"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33337 12H5.34004"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H8.00667"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6666 12H10.6733"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Calendar
              </Link>
              <Link href="#" className="flex items-center gap-1 text-zinc-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Waitlist
              </Link>
            </nav>
          </div>
        </div>

        {/* Lower Section Sidebar */}
        <div className="">
          <div className="">
            <Link
              href="#"
              className="flex items-center justify-between gap-1 text-zinc-700"
            >
              <span className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 2H2V8H6.66667V2Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 2H9.33337V5.33333H14V2Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 8H9.33337V14H14V8Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Dashboard
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 2H14V6"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66663 9.33333L14 2"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <div className="flex items-center space-x-2 mt-4">
              <Image
                src={avatarimg}
                alt="Example Image"
                width={40}
                height={40}
              />
              <div className="my-2">
                <div className="text-sm font-semibold">Admin name</div>
                <div className="text-xs text-zinc-500">adminname@mail.com</div>
              </div>
            </div>
            <Link href="#" className="block text-zinc-700 mt-4">
              Help center
            </Link>
            <div className="text-xs text-zinc-500 mt-2">@2024 Omnify, Inc.</div>
          </div>
        </div>
      </div>

      {/* Collapsed Sideber */}

      <div
        ref={sidebar2}
        className="hidden flex flex-col items-center space-y-4 p-4 bg-zinc-50 z-50 relative h-full min-h-screen"
      >
        {/* 1 */}
        <div
          onClick={() => expand()}
          className=" bg-zinc-100 mb-8  p-4 rounded-lg shadow-md"
        >
          <span className="flex items-cemter gap-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.48 0H3.52001C1.57596 0 0 1.57596 0 3.52001V18.48C0 20.424 1.57596 22 3.52001 22H18.48C20.424 22 22 20.424 22 18.48V3.52001C22 1.57596 20.424 0 18.48 0Z"
                fill="#262626"
              />
              <path
                d="M17.7627 12.9381C18.8596 12.9381 19.7488 12.047 19.7488 10.9479C19.7488 9.84878 18.8596 8.95776 17.7627 8.95776C16.6658 8.95776 15.7766 9.84878 15.7766 10.9479C15.7766 12.047 16.6658 12.9381 17.7627 12.9381Z"
                fill="white"
              />
              <path
                d="M4.17823 12.9578C5.27512 12.9578 6.16433 12.0668 6.16433 10.9677C6.16433 9.86856 5.27512 8.97754 4.17823 8.97754C3.08134 8.97754 2.19214 9.86856 2.19214 10.9677C2.19214 12.0668 3.08134 12.9578 4.17823 12.9578Z"
                fill="white"
              />
              <path
                d="M6.12525 8.10188C7.22214 8.10188 8.11135 7.21086 8.11135 6.11173C8.11135 5.0126 7.22214 4.12158 6.12525 4.12158C5.02836 4.12158 4.13916 5.0126 4.13916 6.11173C4.13916 7.21086 5.02836 8.10188 6.12525 8.10188Z"
                fill="white"
              />
              <path
                d="M10.97 6.15157C12.0669 6.15157 12.9561 5.26055 12.9561 4.16142C12.9561 3.06229 12.0669 2.17126 10.97 2.17126C9.87309 2.17126 8.98389 3.06229 8.98389 4.16142C8.98389 5.26055 9.87309 6.15157 10.97 6.15157Z"
                fill="white"
              />
              <path
                d="M15.8165 8.10188C16.9134 8.10188 17.8026 7.21086 17.8026 6.11173C17.8026 5.0126 16.9134 4.12158 15.8165 4.12158C14.7196 4.12158 13.8304 5.0126 13.8304 6.11173C13.8304 7.21086 14.7196 8.10188 15.8165 8.10188Z"
                fill="white"
              />
              <path
                d="M15.8165 17.6546C16.9134 17.6546 17.8026 16.7636 17.8026 15.6645C17.8026 14.5653 16.9134 13.6743 15.8165 13.6743C14.7196 13.6743 13.8304 14.5653 13.8304 15.6645C13.8304 16.7636 14.7196 17.6546 15.8165 17.6546Z"
                fill="white"
              />
              <path
                d="M10.97 19.7244C12.0669 19.7244 12.9561 18.8334 12.9561 17.7343C12.9561 16.6352 12.0669 15.7441 10.97 15.7441C9.87309 15.7441 8.98389 16.6352 8.98389 17.7343C8.98389 18.8334 9.87309 19.7244 10.97 19.7244Z"
                fill="white"
              />
              <path
                d="M6.12525 17.6546C7.22214 17.6546 8.11135 16.7636 8.11135 15.6645C8.11135 14.5653 7.22214 13.6743 6.12525 13.6743C5.02836 13.6743 4.13916 14.5653 4.13916 15.6645C4.13916 16.7636 5.02836 17.6546 6.12525 17.6546Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        {/* 2 */}
        <div className=" bg-zinc-100   p-4 rounded-lg shadow-md">
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3333 7.33333L20 4.66667L17.3333 2"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 4.66663H12"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6667 14L8 11.3333L10.6667 8.66663"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 11.3334H8"
              stroke="#475569"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* 3 */}
        <div className=" bg-zinc-100   p-4 rounded-lg shadow-md">
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_19_6790)">
              <path
                d="M8.5 11.9167C11.4915 11.9167 13.9167 9.49158 13.9167 6.50004C13.9167 3.5085 11.4915 1.08337 8.5 1.08337C5.50845 1.08337 3.08333 3.5085 3.08333 6.50004C3.08333 9.49158 5.50845 11.9167 8.5 11.9167Z"
                stroke="#64748B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.08333 6.5H13.9167"
                stroke="#64748B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.49999 1.08337C9.85486 2.56665 10.6248 4.49156 10.6667 6.50004C10.6248 8.50852 9.85486 10.4334 8.49999 11.9167C7.14513 10.4334 6.37517 8.50852 6.33333 6.50004C6.37517 4.49156 7.14513 2.56665 8.49999 1.08337Z"
                stroke="#64748B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_6790">
                <rect
                  width="13"
                  height="13"
                  fill="white"
                  transform="translate(2)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* 4 */}
        <div className=" bg-zinc-100   p-4 rounded-lg shadow-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 8H10.6667L9.33333 10H6.66666L5.33333 8H1.33333"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.63333 3.40663L1.33333 7.99996V12C1.33333 12.3536 1.4738 12.6927 1.72385 12.9428C1.9739 13.1928 2.31304 13.3333 2.66666 13.3333H13.3333C13.687 13.3333 14.0261 13.1928 14.2761 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0861 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1733 2.66663H4.82666C4.57861 2.66676 4.3355 2.73608 4.12469 2.86681C3.91388 2.99754 3.74371 3.18448 3.63333 3.40663Z"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* 5 */}
        <div className=" bg-zinc-100   p-4 rounded-lg shadow-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_19_6835)">
              <path
                d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
                stroke="#334155"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_6835">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* 6 */}
        <div className=" bg-zinc-100 mb-10  p-4 rounded-lg shadow-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6667 1.33337V4.00004"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33333 1.33337V4.00004"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 6.66663H14"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33333 9.33337H5.33999"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 9.33337H8.00667"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6667 9.33337H10.6733"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33333 12H5.33999"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12H8.00667"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6667 12H10.6733"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* 7 */}
        <div className=" bg-zinc-100 mt-10  p-4 rounded-lg shadow-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 2H14V6"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66667 9.33333L14 2"
              stroke="#334155"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className=" bg-zinc-100   p-4 rounded-lg shadow-md">
          <Image src={avatarimg} alt="Example Image" width={20} height={20} />
        </div>

        <div className=" bg-zinc-100   p-4 rounded-lg shadow-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_19_6885)">
              <path
                d="M8 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8 1.33325C4.3181 1.33325 1.33333 4.31802 1.33333 7.99992C1.33333 11.6818 4.3181 14.6666 8 14.6666Z"
                stroke="#475569"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.06 6.00014C6.21673 5.55458 6.5261 5.17887 6.9333 4.93956C7.3405 4.70024 7.81926 4.61276 8.28478 4.69261C8.7503 4.77246 9.17254 5.01449 9.47672 5.37582C9.78089 5.73716 9.94737 6.19448 9.94666 6.6668C9.94666 8.00014 7.94666 8.6668 7.94666 8.6668"
                stroke="#475569"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 11.3333H8.00667"
                stroke="#475569"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_6885">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex-1 md:p-4 px-2 w-[100vw] md:w-[80vw] ">
        <div className="flex w-10/12 py-5 px-5 justify-between items-center mb-4 w-full">
          <h1 className="text-2xl lg:text-2xl font-semibold">Waitlist</h1>
          <button
            id="openSidebar"
            className="md:hidden "
            onClick={() => {
              SidebarToggle();
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                stroke="#64748B"
                stroke-width="0.666667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 2V14"
                stroke="#64748B"
                stroke-width="0.666667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect x="8" y="2" width="6" height="12" rx="1" fill="#64748B" />
            </svg>
          </button>
        </div>
        {/* Inputs */}{" "}
        <div className="w-full flex flex-wrap gap-7 2xl:space-x-2 flex-col items-center  justify-center md:justify-start md:flex-row ">
          <div className="px-4 py-2 border border-black rounded flex items-center w-fit flex-nowrap">
            <label
              htmlFor=""
              className="bg-transp font-semibold text-sm text-nowrap"
            >
              {" "}
              All Waitlists{" "}
            </label>
            <input
              type="text"
              className="text-black text-sm outline-none inputproject"
              placeholder="100"
            />
          </div>
          <div className="px-4 py-2 border border-black rounded flex items-center w-fit flex-nowrap">
            <label
              htmlFor=""
              className="bg-transp font-semibold text-sm text-nowrap"
            >
              {" "}
              All Waitlists{" "}
            </label>
            <input
              type="text"
              className="text-black text-sm outline-none inputproject"
              placeholder="100"
            />
          </div>
          <div className="px-4 py-2 border border-black rounded flex items-center w-fit flex-nowrap">
            <label
              htmlFor=""
              className="bg-transp font-semibold text-sm text-nowrap"
            >
              {" "}
              All Waitlists{" "}
            </label>
            <input
              type="text"
              className="text-black text-sm outline-none inputproject"
              placeholder="100"
            />
          </div>
        </div>
        {/* Search and all */}
        <div className=" mt-5 flex flex-col xl:flex-row  md:justify-between md:items-start justify-center items-center gap-7 w-full  mb-4  ">
          <div className="add-filter flex gap-3">
            <button
              className="bg-[#F1F5F9] rounded-md p-2 px-3 flex items-center text-nowrap h-12 hover:bg-gray-200 hover:rounded-sm "
              onClick={openmodal}
            >
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Add Filter
            </button>

            {/* CHIPS */}
            <div className="flex">
              <div className="chips-list flex justify-center items-center gap-2 bounceIn ">
                {chips &&
                  chips.map((chip) => (
                    <div
                      key={chip.id}
                      className="chip px-2 py-1 flex gap-2 border "
                    >
                      <span> {chip.value}</span>
                      <button
                        className="bg-[#FFFFFF] text-slate-700 "
                        onClick={() => handleDeleteChip(chip.id)}
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-2 items-center flex-col md:flex-row gap-3 md:gap-2">
            {/* <input type="text" placeholder="Search client" className="px-4 py-2 border rounded" /> */}
            <div className="px-2 py-1 shadow-md rounded flex gap-1 items-center flex-nowrap bounceIn ">
              <label
                htmlFor=""
                className="bg-transp font-semibold text-sm text-nowrap"
              >
                <span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49998 9.49998L7.34998 7.34998M8.5 4.5C8.5 6.70914 6.70914 8.5 4.5 8.5C2.29086 8.5 0.5 6.70914 0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5C6.70914 0.5 8.5 2.29086 8.5 4.5Z"
                      stroke="#64748B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </label>
              <input
                type="text"
                className="text-black text-sm outline-none inputproject"
                placeholder="Search client"
              />
            </div>
            <div>
              <button className="px-2 md:px-4 py-2 hover:bg-gray-200 hover:rounded-md ">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 1.33337V5.33337H6"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 8.00003C13.9989 6.84224 13.6629 5.70948 13.0325 4.73839C12.4021 3.76729 11.5041 2.99934 10.447 2.52715C9.38987 2.05497 8.2187 1.89873 7.07476 2.07727C5.93082 2.2558 4.86297 2.7615 4 3.53336L2 5.33336"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 14.6666V10.6666H10"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 8C2.00105 9.15779 2.33707 10.2905 2.9675 11.2616C3.59794 12.2327 4.49588 13.0007 5.55301 13.4729C6.61013 13.9451 7.7813 14.1013 8.92524 13.9228C10.0692 13.7442 11.137 13.2385 12 12.4667L14 10.6667"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => {
                  handleOpenModal();
                }}
                className="px-2 md:px-4 py-2 hover:bg-gray-200 hover:rounded-md "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 2V14"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="px-2 md:px-4 py-2 hover:bg-gray-200 hover:rounded-md ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Table */}
        {/* <div className={`border  md:${sidebar ? `w-[calc(100dvw-19.5rem)]` : `w-[calc(100dvw-18.5rem)] `} overflow-x-auto`}> */}
        <div className={`border     overflow-x-auto`}>
          {/*       EDit Column Modal                RIGHT DSide                     */}

          <Modal
            className="w-fit absolute top-[30%] right-2 slideInRight"
            isOpen={showModal}
            onRequestClose={handleCloseModal}
          >
            <div className="max-w-sm  bg-white w-70 rounded-lg shadow-lg p-6  ">
              <h2 className="text-lg font-semibold mb-2 text-zinc-900 ">
                Edit Columns
              </h2>
              <p className="text-sm text-zinc-600  mb-4">
                Select the columns to rearrange
              </p>
              <Formik
                initialValues={{
                  createdOn: true,
                  payer: true,
                  status: true,
                  email: true,
                  payerPhone: true,
                  services: true,
                  scheduled: true,
                }}
                onSubmit={async (values) => {
                  // await sleep(500);
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ values }) => (
                  console.log(values),
                  setTableCols(values),
                  (
                    <Form>
                      <div className="space-y-2 px-2  h-64 overflow-y-auto">
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            className="focus:border-none active:border-none checked:text-black border border-black"
                            id="createdOn"
                            name="createdOn"
                          />
                          <label className="ml-2 text-zinc-900  border py-1 px-1 w-full ">
                            Order Created On
                          </label>
                        </div>
                        <div className="flex items-center ">
                          <Field
                            type="checkbox"
                            className="  checked:text-black"
                            name="payer"
                          />
                          <label className="ml-2 text-zinc-900  border py-1 px-1 w-full ">
                            Payer
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            className="  checked:text-black"
                            name="status"
                          />
                          <label className="ml-2 text-zinc-900  border py-1 px-1 w-full ">
                            Status
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            className="  checked:text-black"
                            name="email"
                          />
                          <label className="ml-2 text-zinc-900  border py-1 px-1 w-full ">
                            Email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            className="  checked:text-black"
                            name="payerPhone"
                          />
                          <label className="ml-2 text-zinc-900  border py-1 px-1 w-full ">
                            Payer Phone
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            className="  checked:text-black"
                            name="services"
                          />
                          <label className="ml-2 text-zinc-900  border py-1 px-1 w-full ">
                            Service
                          </label>
                        </div>
                        <div className="flex items-center ">
                          <Field
                            type="checkbox"
                            className="  checked:text-black"
                            name="scheduled"
                          />
                          <label className="ml-2 text-zinc-900 border py-1 px-1 w-full ">
                            Scheduled
                          </label>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            handleCloseModal();
                          }}
                          className="border  text-zinc-900   py-2 px-4 rounded-lg"
                        >
                          Reset to Default
                        </button>
                        <button
                          type="submit"
                          onClick={() => {
                            handleCloseModal();
                          }}
                          className="bg-black text-white py-1 px-4 rounded-lg text-md"
                        >
                          Apply
                        </button>
                      </div>
                    </Form>
                  )
                )}
              </Formik>
            </div>
          </Modal>

          {/* FILTER MODAL          Left POPUP */}

          <div className="flex flex-col  min-h-44  max-h-80  w-fit border hidden ">
            {/* UpperDiv */}
            {/* inputtoogle modal */}
            <Modal
              isOpen={inputtoggle}
              shouldCloseOnOverlayClick={true}
              className={
                "p-0 flex bounceIn border-none lg:justify-evenly justify-center  sm:ml-10 h-full items-center "
              }
            >
              <div className="flex flex-col md:flex-row  md:w-fit border bg-white md:h-[430px] h-auto w-10/12 z-50 ">
                <div className="  sm:flex border-r border-b bg-[#F8FAFC] p-4 text-ms">
                  <ul className="w-full">
                    <li
                      className="flex items-center justify-between p-1 text-sm   cursor-pointer rounded-lg mb-2"
                      onClick={(e) => {
                        form1.current.classList.remove("hidden");
                        form2.current.classList.add("hidden");
                        form3.current.classList.add("hidden");
                        // form2.current.classList.remove('bg-zinc-200')
                      }}
                    >
                      <span className="flex gap-1 items-center">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
                              stroke="#334155"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.6665 1.33337V4.00004"
                              stroke="#334155"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.3335 1.33337V4.00004"
                              stroke="#334155"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2 6.66663H14"
                              stroke="#334155"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        Scheduled Date
                      </span>
                      <span className="bg-zinc-300 text-zinc-700rounded-full px-2 py-1 text-xs">
                        1
                      </span>
                    </li>
                    <li
                      className=" cursor-pointer flex gap-1 items-center p-1 text-md mb-2"
                      onClick={(e) => {
                        e.preventDefault();
                        form2.current.classList.remove("hidden");
                        form1.current.classList.add("hidden");
                        form3.current.classList.add("hidden");
                      }}
                    >
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6668 14V12.6667C10.6668 11.9594 10.3859 11.2811 9.88578 10.781C9.38568 10.281 8.70741 10 8.00016 10H4.00016C3.29292 10 2.61464 10.281 2.11454 10.781C1.61445 11.2811 1.3335 11.9594 1.3335 12.6667V14"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.00016 7.33333C7.47292 7.33333 8.66683 6.13943 8.66683 4.66667C8.66683 3.19391 7.47292 2 6.00016 2C4.5274 2 3.3335 3.19391 3.3335 4.66667C3.3335 6.13943 4.5274 7.33333 6.00016 7.33333Z"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6665 14V12.6667C14.6661 12.0758 14.4694 11.5019 14.1074 11.0349C13.7454 10.5679 13.2386 10.2344 12.6665 10.0867"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.6665 2.08667C11.2401 2.23354 11.7485 2.56714 12.1116 3.03488C12.4747 3.50262 12.6717 4.07789 12.6717 4.67C12.6717 5.26212 12.4747 5.83739 12.1116 6.30513C11.7485 6.77287 11.2401 7.10647 10.6665 7.25334"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      People
                    </li>
                    <li
                      className=" cursor-pointer flex gap-1 items-center p-1 text-md"
                      onClick={(e) => {
                        e.preventDefault();
                        form3.current.classList.remove("hidden");
                        form1.current.classList.add("hidden");
                        form2.current.classList.add("hidden");
                      }}
                    >
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66667 2H2V8H6.66667V2Z"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.0002 2H9.3335V5.33333H14.0002V2Z"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.0002 8H9.3335V14H14.0002V8Z"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.66667 10.6666H2V14H6.66667V10.6666Z"
                            stroke="#334155"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Services/Products
                    </li>
                  </ul>
                </div>
                {/*Form 1     Schedule Date Form */}

                <div
                  ref={form1}
                  className="md:w-3/4 p-4 flex flex-col justify-between"
                >
                  <div className="mb-4 flex flex-col  gap-3 ">
                    <div className="flex justify-end ">
                      {" "}
                      <button className="" onClick={closeinputmodal}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
                          />
                        </svg>
                      </button>
                    </div>
                    <label
                      htmlFor="order-time"
                      className="block text-sm font-medium text-zinc-700"
                    >
                      Show orders for
                    </label>

                    <form
                      onSubmit={formik.handleSubmit}
                      className="relative inline-block w-64"
                    >
                      <button
                        ref={dropdownButton}
                        onClick={(e) => {
                          dropdownButtonF(e);
                          // position()
                        }}
                        className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-left flex justify-between items-center"
                        fdprocessedid="wbirnm"
                      >
                        <span id="selectedOption">
                          {selectedOption}
                          {formik.values.form1Select}
                        </span>
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="#71717A"
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdownMenu"
                        ref={dropdownMenu}
                        onChange={(e) => {
                          dropdownMenuF(e);
                        }}
                        className="absolute z-50 w-full mt-1 bg-white border border-zinc-300 rounded-lg shadow-lg max-h-[171px] overflow-y-auto hidden overflowscroll"
                      >
                        <ul
                          id="form1Select"
                          name="form1Select"
                          value={formik.values.form1Select}
                          className="py-1"
                          onClick={(e) => getSelected(e)}
                        >
                          {/* onClick={(e)=>getSelected(e)} */}
                          <li
                            id="1"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            All
                          </li>
                          <li
                            id="2"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            Custom
                          </li>
                          <li
                            id="3"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            Last 30 days
                          </li>
                          <li
                            id="4"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            This month
                          </li>
                          <li
                            id="5"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            Last month
                          </li>
                          <li
                            id="6"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            This quarter
                          </li>
                          <li
                            id="7"
                            className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                          >
                            2 quarter ago
                          </li>
                        </ul>
                      </div>
                    </form>

                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                      <div className="md:w-1/2 shadow-sm">
                        <label
                          htmlFor="from-date"
                          className="block text-sm font-medium text-zinc-700"
                        >
                          From
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            name="form1FromD"
                            id="form1FromD"
                            value={formik.values.form1FromD}
                            onChange={formik.handleChange}
                            type="date"
                            className=" block w-full pl-10 pr-3 py-2 border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Pick a date"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2 shadow-sm">
                        <label
                          htmlFor="to-date"
                          className="block text-sm font-medium text-zinc-700"
                        >
                          To
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            name="form1ToD"
                            value={formik.values.form1ToD}
                            onChange={formik.handleChange}
                            type="date"
                            id="form1ToD"
                            className="block w-full pl-10 pr-3 py-2 border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Pick a date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4 py-2 px-3 border border-t border-t-gray border-r-0 border-l-0 border-b-0">
                    <button className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded-md">
                      Reset to Default
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2 rounded-md"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                {/* Form 2     PEOPLE      */}
                <div
                  ref={form2}
                  className="hidden md:w-3/4 h-full  p-4 flex flex-col justify-between"
                >
                  <section className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-md px-1 py-0 w-full bg-white  border-zinc-300">
                        <svg
                          className="w-5 h-5 text-zinc-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <input
                          className=" focus:shadow-none inputproject  focus:border-none ml-2 w-full px-0 mx-0 bg-transparent border-none  text-zinc-700 rounded-lg placeholder-zinc-500 text-xs "
                          type="text"
                          placeholder="Search Payer or attendee name"
                          value={form2Search}
                          id="form2Search"
                          name="form2Search"
                          onChange={(e) => setForm2Search(e.target.value)}
                        />
                      </div>
                      {/* close icon  */}
                      <div className="flex justify-end ">
                        {" "}
                        <button className="" onClick={closeinputmodal}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="overflow-y-auto px-5 py-5 md:px-0 md:py-0 max-h-[250px] md:max-h-[275px] ">
                      {data.map((d) =>
                        form2Search === "" ? null : d.payer.includes(
                            form2Search
                          ) ? (
                          // Ensure strict comparison
                          <div
                            className="data flex justify-start items-center gap-2"
                            key={d.id}
                          >
                            {" "}
                            {/* Add unique key */}
                            <input
                              type="checkbox"
                              ref={inref}
                              id={d.id}
                              onClick={(e) => {
                                setChipData(e.target.getAttribute("id"));
                              }}
                              name="payerCheckbox"
                              value={d.id}
                              className="inputcheck"
                            />
                            <p className="flex gap-2 items-center w-full border-t-0 border-l-0 border-r-0">
                              {d.svg}
                              {d.payer}
                            </p>{" "}
                          </div>
                        ) : null
                      )}
                    </div>
                    {/* button div */}
                  </section>
                  <section>
                    {/* <div className="max-w-[200px] overflow-x-auto py-10 md:py-0">
                      <div className="whitespace-nowrap text-sm break-words w-fit">
                        Showing 2 results matching
                      </div>
                      <div className="flex flex-wrap break-words w-fit whitespace-pre-wrap uo">
                        ‘{form2Search}’
                      </div>
                      <div className="flex flex-col">
                        <div className="data flex">
                          <input type="checkbox" />
                          <p>name</p>
                          <p>info</p>
                        </div>
                      </div>
                    </div> */}

                    <div className="flex justify-end space-x-4 py-2 px-3 border border-t border-t-gray border-r-0 border-l-0 border-b-0">
                      <button
                        className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded-md"
                        onClick={uncheck}
                      >
                        Reset to Default
                      </button>
                      <button
                        onClick={() => {
                          addChip();
                        }}
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded-md"
                      >
                        Apply
                      </button>
                    </div>
                  </section>
                </div>

                {/* Form 3     Sewrvices      */}
                <div
                  ref={form3}
                  className="hidden flex flex-col justify-between md:w-[400px] p-4"
                >
                  {/* section  */}
                  <section className="pb-10 md:py-0">
                    <div className="flex justify-end">
                      <button className="" onClick={closeinputmodal}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="max-w-md mx-auto p-4">
                      <div className="flex md:space-x-4 mb-4 flex-col md:flex-row justify-center items-center">
                        <button
                          onClick={(e) => openTab1(e)}
                          id="tab-name"
                          className="flex ml-1 md:ml-0 items-center space-x-2 p-2  border-b-2 border-transparent"
                        >
                          <span
                            ref={tab1Dot}
                            className="w-3 h-3 bg-black rounded-full"
                          ></span>
                          <span>Search by name</span>
                        </button>
                        <button
                          id="tab-tags"
                          onClick={(e) => openTab2(e)}
                          className="flex items-center space-x-2 p-2 border-b-2 border-transparent"
                        >
                          <span
                            ref={tab2Dot}
                            className="w-3 h-3  border border-zinc-500 rounded-full"
                          ></span>
                          <span>Search by tags</span>
                        </button>
                      </div>
                      <div ref={tabComp1} id="content-name" className="block max-h-[150px] -z-20">
                        <div className=" mb-4">
                          <span className=" left-3 top-2.5 text-zinc-400 flex items-center border-2 border-black rounded-lg h-8 px-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                stroke="#3F3F46"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.0001 14.0001L11.1001 11.1001"
                                stroke="#3F3F46"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <input
                              type="text"
                              style={{ height: "-webkit-fill-available" }}
                              placeholder="Search service name"
                              className="w-full h-fit px-2 border rounded-md inputproject"
                              onChange={(e) => setForm2Search(e.target.value)}
                              value={form2Search}
                            />
                          </span>

                          <div className="overflow-y-auto narrow-line max-h-[150px] md:max-h-[200px] px-5 py-5 my-4 md:px-0 md:py-0 my-2">
                            {data.map((d) =>
                              form2Search === "" ? null : d.payer.includes(
                                  form2Search
                                ) ? (
                                // Ensure strict comparison
                                <div
                                  className="data flex items-center gap-2   justify-between "
                                  key={d.id}
                                >
                                  {console.log(form2Search)}
                                  <span className="flex gap-2 text-sm items-center">
                                    {" "}
                                    <input
                                      type="checkbox"
                                      ref={inref}
                                      id={d.id}
                                      name="payerCheckbox"
                                      value={d.id}
                                      className="inputcheck"
                                    />
                                    <p className="flex gap-2 items-center w-full border-t-0 border-l-0 border-r-0">
                                      {d.svg}
                                      {d.payer}
                                    </p>
                                  </span>

                                  <span className="flex gap-2 text-sm items-center">
                                    <p className="inputcheck">{d.add1}</p>
                                    <button
                                      className={` px-1 py-1 rounded ${
                                        d.add2 == `private` &&
                                        `text-[#BF8000] bg-transparent `
                                      } ${
                                        d.add2 == `public` &&
                                        `text-[#039855] bg-transparent `
                                      }  `}
                                    >
                                      {d.add2}
                                    </button>
                                  </span>
                                </div>
                              ) : null
                            )}
                          </div>
                        </div>
                      </div>
                      <div ref={tabComp2} id="content-tags" className="hidden">
                        <div className="mb-4">
                          {/* Select 1 */}
                          <div className="relative">
                            <button
                              ref={dropdownButton1}
                              onClick={(e) => {
                                dropdownButtonF1(e);
                              }}
                              className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-left flex justify-between items-center"
                              fdprocessedid="wbirnm"
                            >
                              <span id="selectedOption">
                                {selectedOption1}
                                {formik.values.form3Select1}
                              </span>
                              <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.5L6 6.5L11 1.5"
                                  stroke="#71717A"
                                  stroke-width="1.67"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                            <div
                              id="dropdownMenu"
                              ref={dropdownMenu1}
                              onChange={(e) => {
                                dropdownMenuF1(e);
                              }}
                              className="absolute z-50 w-full mt-1 bg-white border border-zinc-300 rounded-lg shadow-lg max-h-[171px] overflow-y-auto hidden"
                            >
                              <ul
                                id="form1Select"
                                name="form1Select"
                                value={formik.values.form3Select1}
                                className="py-1"
                                onClick={(e) => getSelected1(e)}
                              >
                                {/* onClick={(e)=>getSelected(e)} */}
                                <li
                                  id="1"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Show all service type
                                </li>
                                <li
                                  id="2"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Class
                                </li>
                                <li
                                  id="3"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Facility
                                </li>
                                <li
                                  id="4"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Class Pack
                                </li>
                                <li
                                  id="5"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Membership
                                </li>
                                <li
                                  id="6"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  General items
                                </li>

                                <li
                                  id="7"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Select service type
                                </li>
                              </ul>
                            </div>

                            {/* SELECT 2 */}
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="relative">
                            <button
                              ref={dropdownButton2}
                              onClick={(e) => {
                                dropdownButtonF2(e);
                              }}
                              className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-left flex justify-between items-center"
                              fdprocessedid="wbirnm"
                            >
                              <span id="selectedOption">
                                {selectedOption2}
                                {formik.values.form3Select2}
                              </span>
                              <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.5L6 6.5L11 1.5"
                                  stroke="#71717A"
                                  stroke-width="1.67"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                            <div
                              id="dropdownMenu"
                              ref={dropdownMenu2}
                              onChange={(e) => {
                                dropdownMenuF2(e);
                              }}
                              className="absolute z-50 w-full mt-1 bg-white border border-zinc-300 rounded-lg shadow-lg max-h-[171px] overflow-y-auto hidden"
                            >
                              <ul
                                id="form1Select"
                                name="form1Select"
                                value={formik.values.form3Select2}
                                className="py-1"
                                onClick={(e) => getSelected2(e)}
                              >
                                {/* onClick={(e)=>getSelected(e)} */}
                                <li
                                  id="1"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Show all
                                </li>
                                <li
                                  id="2"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Public
                                </li>
                                <li
                                  id="3"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Private
                                </li>
                                <li
                                  id="4"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Disable
                                </li>
                                <li
                                  id="5"
                                  className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
                                >
                                  Draft
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </section>

                  <div className="flex justify-end space-x-4 py-2 px-3 border border-t border-t-gray border-r-0 border-l-0 border-b-0">
                    <button
                      className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded-md"
                      onClick={uncheck}
                    >
                      Reset to Default
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2 rounded-md"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div></div>
            </Modal>
          </div>

          <table className=" bg-white w-screen whitespace-nowrap  ">
            <thead>
              <tr className="">
                <th className="px-4 py-2">
                  <input type="checkbox" />
                </th>
                {tableCols.createdOn && (
                  <th className="px-4 py-2 flex items-center gap-1 text-nowrap">
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1V3"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 1V3"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.5 5H10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Created On
                  </th>
                )}
                {tableCols.payer && (
                  <th className="px-4 py-2 ">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 10.5V9.5C9.5 8.96957 9.28929 8.46086 8.91421 8.08579C8.53914 7.71071 8.03043 7.5 7.5 7.5H4.5C3.96957 7.5 3.46086 7.71071 3.08579 8.08579C2.71071 8.46086 2.5 8.96957 2.5 9.5V10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Payer
                    </span>
                  </th>
                )}
                {tableCols.status && (
                  <th className="px-4 py-2">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_18317)">
                          <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#64748B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 6.5C6.27614 6.5 6.5 6.27614 6.5 6C6.5 5.72386 6.27614 5.5 6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5Z"
                            stroke="#64748B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_18317">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Status
                    </span>
                  </th>
                )}
                {tableCols.email && (
                  <th className="px-4 py-2">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Email{" "}
                    </span>
                  </th>
                )}
                {tableCols.payerPhone && (
                  <th className="px-4 py-2">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Payer Phone{" "}
                    </span>
                  </th>
                )}
                {tableCols.services && (
                  <th className="px-4 py-2">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Services{" "}
                    </span>
                  </th>
                )}
                {tableCols.scheduled && (
                  <th className="px-4 py-2">
                    <span className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 7.5H10"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.5L4 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1.5L7 10.5"
                          stroke="#64748B"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Scheduled{" "}
                    </span>
                  </th>
                )}
              </tr>
            </thead>

            <tbody>
              {data.map((d) => (
                <tr key={d.id} className="border-t text-sm p-2 m-1 py-4">
                  <td className="text-center ">
                    <input type="checkbox" className="border-2" />
                  </td>
                  {tableCols.createdOn && (
                    <td className="px-4 py-2">{d.createdOn}</td>
                  )}
                  {tableCols.payer && <td className="px-4 py-2 ">{d.payer}</td>}
                  {/* Button Conditional rendering==> className={` px-2 py-1 rounded ${this.innerHTML==`Lead`?` bg-blue-200 `:`` } `} */}
                  {tableCols.status && (
                    <td className="px-4 py-2 ">
                      <span
                        className={` px-3 py-1 rounded ${
                          d.status == `Lead` && `text-[#3B82F6] bg-[#EFF6FF] `
                        } ${
                          d.status == `Active` && `text-[#15803D] bg-[#F0FDF9] `
                        }  ${
                          d.status == `Inactive` && `text-black bg-[#F1F5F9] `
                        } `}
                      >
                        {d.status}
                      </span>
                    </td>
                  )}
                  {tableCols.email && <td className="px-4 py-2 ">{d.email}</td>}
                  {tableCols.payerPhone && (
                    <td className="px-4 py-2 text-nowrap ">{d.payerPhone}</td>
                  )}
                  {tableCols.services && (
                    <td className="px-4 py-2 ">{d.services}</td>
                  )}
                  {tableCols.scheduled && (
                    <td className="px-4 py-2 ">{d.scheduled}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-7 pb-10 md:pb-0 items-center mt-4">
          <div>Displaying 15 out of 104</div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 flex items-center gap-2  hover:rounded-sm ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Previous
            </button>
            <button className="px-4 py-1  rounded focus:border hover:bg-gray-200 hover:rounded-sm focus-within:border-gray-400 focus:rounded-md">
              1
            </button>
            <button className="px-4 py-1  rounded focus:border hover:bg-gray-200 hover:rounded-sm focus-within:border-gray-400 focus:rounded-md">
              2
            </button>
            <button className="px-4 py-1  rounded focus:border hover:bg-gray-200 hover:rounded-sm focus-within:border-gray-400 focus:rounded-md">
              3
            </button>
            <button className="px-4 py-1  rounded focus:border  hover:rounded-sm focus-within:border-gray-400 focus:rounded-md flex items-center gap-2 ">
              Next
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    // <script>
    //   document.getElementById('openSidebar').addEventListener('click', () => {
    //     document.getElementById('sidebar').classList.remove('-translate-x-full');
    //   });

    //   document.getElementById('closeSidebar').addEventListener('click', () => {
    //     document.getElementById('sidebar').classList.add('-translate-x-full');
    //   });
    // </>
  );
};

export default Page;
