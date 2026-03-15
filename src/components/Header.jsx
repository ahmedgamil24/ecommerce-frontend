import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import Container from "./common/Container";
import { useState } from "react";

const Header = () => {
    const [categories, setCategories] = useState([
        {name: "Fashion", subCategories: ["Men", "Women"], image: "https://api.spicezgold.com/download/file_1734525204708_fash.png"},
        {name: "Electronics", subCategories: ["Laptops", "Cameras"], image: "https://api.spicezgold.com/download/file_1734525218436_ele.png"},
        {name: "Bags", subCategories: ["Men Bags", "Women Bags"], image: "https://api.spicezgold.com/download/file_1734525255799_beauty.png"},
        {name: "FootWear", subCategories: ["Men FootWear", "Women FootWear"], image: "https://api.spicezgold.com/download/file_1734525239704_foot.png"},
        {name: "Groceries", image: "https://api.spicezgold.com/download/file_1734525248057_gro.png"},
        {name: "Beauty", image: "https://api.spicezgold.com/download/file_1734525255799_beauty.png"},
        {name: "Wellness", image: "https://api.spicezgold.com/download/file_1734525275367_well.png"},
    ])
  return (
    <>
      <div className="topHeader flex justify-center bg-primary w-full ">
        <p className="mt-0 mb-0  text-gray-100 px-1.5 py-1.5">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>

      <Container>
        <div className="header flex items-center justify-between py-4 gap-6">
          <img src="src/assets/images/logo.jpeg" alt="" />
          {/* Select Location */}
          <div className="border rounded border-gray-300 px-5 py-1">
            <p className="text-gray-300">Your Location</p>
            <p className="text-[#6330c1]">Select a Location</p>
          </div>
          {/* Search */}
          <div className="search w-xl max-w-xl border border-solid border-gray-300 h- rounded px-4 py-4 flex justify-between items-center bg-[#e5e5e5]">
            <input
              type="text"
              className="outline-0 bg-transparent"
              placeholder="Search for products..."
            />
            <IoIosSearch className="size-6" />
          </div>
          {/* Icons */}
          <div className="flex items-center justify-around gap-2">
            <div className="dropdown dropdown-end border rounded-3xl border-gray-200 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span>$0.00</span>
            <div className="dropdown dropdown-end border rounded-3xl border-gray-200 ">
              <div
                tabIndex={0}
                role="button"
                className="btn size-10 btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <button>
                    <FiUser className="mt-1.5 size-6" />
                  </button>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

{/* Categories Bar */}

<div className="grid grid-cols-12 gap-3 items-center py-2">
    

  {/* Categories Dropdown */}
  <div className="col-span-3 ">

    <div className="dropdown w-[75%]">
      <div tabIndex={0} role="button" className="btn w-full rounded-3xl bg-primary text-gray-100 justify-between">
        ☰ All Categories
      </div>

        <ul className="dropdown-content menu bg-base-100 rounded-box w-60 p-2 shadow">
            {categories.map( (cat) => (
                <li key={cat.name}><a>{cat.name}</a></li>
             ))}  
        </ul>
    </div>

  </div>

  {/* Hover Categories */}

  <div className="col-span-9 flex items-center justify-center gap-5">

    {categories.map( (cat)=> (
    <div key={cat.name} className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <img src={cat.image} width="20" className="mr-2" />
        {cat.name}
      </div>
      <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
        {cat.subCategories?.map( (sub, i) => (
            <li key={i}><a>{sub}</a></li>
        ) )}
      </ul>
    </div>
    ) )}

  </div>

</div>
      </Container>
    </>
  );
};

export default Header;
