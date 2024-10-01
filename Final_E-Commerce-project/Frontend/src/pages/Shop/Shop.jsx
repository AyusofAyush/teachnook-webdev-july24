import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Breadcrumbs } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import "./Shop.scss";
import Card from "../../components/Card/Card";
import { getProducts } from "../../utils/api";

export default function Shop() {
  const [shopList, setshopList] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      console.log("Get products", res.data, res);
      setshopList(res.data.data || []);
    });
  }, []); // [] empty array dependency mean run once
  return (
    <div className="shop-parent">
      <Header />
      <main className="shop-grid pt-[2%] mx-[15%]">
        <Breadcrumbs>
          <a href="/" className="opacity-60">
            Home
          </a>
          <a href="/shop" className="opacity-60">
            Shop
          </a>
        </Breadcrumbs>
        <h1>Shop</h1>
        <div className="flex space-btw shop-details-parent">
          <p>Showing all 12 results</p>
          <Menu>
            <MenuHandler>
              <Button>Sorting</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Default Sort</MenuItem>
              <MenuItem>Sort: Low to High</MenuItem>
              <MenuItem>Relevance</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="flex products-grid wrap gap-10 my-10">
          {shopList?.length > 0 &&
            shopList.map((item) => {
              return (
                <Card
                  cardImg={item.product_img}
                  caption={item.description}
                  cardTitle={item.name}
                  cardDesc={item.price}
                />
              );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
