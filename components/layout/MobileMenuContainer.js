import { fetchDataFromApi } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const MobileMenuContainer = ({showMenu, menuCloseHandler}) => {
    const [closeMenu, setCloseMenu] = useState(false);
    const showMenuHandler = ()=>{
        setCloseMenu(!closeMenu);
        menuCloseHandler({
            closeMenu: closeMenu
        })
    }

    const [categories, setCategories] = useState(null);
    useEffect(() => {
      fetchCategories();
    }, []);
    const fetchCategories = async () => {
      const { data } = await fetchDataFromApi("/api/categories?populate=*");
      setCategories(data);
    };

  return (
    <div className="mobile-menu-container" style={{visibility: 'visible', transform: showMenu? "translateX(280px)" : "translateX(0px)"}}>
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close" onClick={showMenuHandler}>
        <i className="icon-close" />
      </span>
      <form action="#" method="get" className="mobile-search">
        <label htmlFor="mobile-search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          className="form-control"
          name="mobile-search"
          id="mobile-search"
          placeholder="Search in..."
          required=""
        />
        <button className="btn btn-primary" type="submit">
          <i className="icon-search" />
        </button>
      </form>
      <ul className="nav nav-pills-mobile" role="tablist">
        <li className="nav-item">
          <Link
            className="nav-link font-size-normal second-primary-color font-weight-normal text-uppercase active"
            id="mobile-menu-link"
            data-toggle="tab"
            href="#mobile-menu-tab"
            role="tab"
            aria-controls="mobile-menu-tab"
            aria-selected="true"
          >
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link font-size-normal second-primary-color font-weight-normal text-uppercase"
            id="mobile-cats-link"
            data-toggle="tab"
            href="#mobile-cats-tab"
            role="tab"
            aria-controls="mobile-cats-tab"
            aria-selected="false"
          >
            Menu
          </Link>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="mobile-menu-tab"
          role="tabpanel"
          aria-labelledby="mobile-menu-link"
        >
          <nav className="mobile-nav">
            <ul className="mobile-menu" >
            {categories?.map((c) => (
              <li key={c?.id} className="active" onClick={showMenuHandler}>
                <Link  href={`/category/${c?.attributes?.slug}`}>
                  {c?.attributes?.name}
                  
                  </Link>
                {c?.attributes?.sub_categories?.data?.length > 0 && (
                <ul style={{ display:  "block"}}>
                  {c?.attributes?.sub_categories?.data?.map(
                                      (sub) => (
                                        <li key={sub?.id} >
                                        <Link
                                          href={`/subcategory/${sub?.attributes?.slug}`}
                                          onClick={showMenuHandler}
                                        >
                                          {sub?.attributes?.name}
                                        </Link>
                                      </li>
                   ))}
                </ul>
                   )}
              </li>
            ))}
              
       
       
            </ul>
          </nav>
          {/* End .mobile-nav */}
        </div>
        {/* .End .tab-pane */}
        <div
          className="tab-pane fade"
          id="mobile-cats-tab"
          role="tabpanel"
          aria-labelledby="mobile-cats-link"
        >
          <nav className="mobile-cats-nav">
            <ul className="mobile-cats-menu">
              <li>
                <Link className="mobile-cats-lead" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="mobile-cats-lead" href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="mobile-cats-lead" href="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="mobile-cats-lead" href="/">
                  Private Policy
                </Link>
              </li>
              <li>
                <Link className="mobile-cats-lead" href="/">
                  Terms & Conditions
                </Link>
              </li>
 
 
            </ul>
            {/* End .mobile-cats-menu */}
          </nav>
          {/* End .mobile-cats-nav */}
        </div>
        {/* .End .tab-pane */}
      </div>
      {/* End .tab-content */}

      {/* End .social-icons */}
    </div>
    {/* End .mobile-menu-wrapper */}
  </div>
  )
}

export default MobileMenuContainer