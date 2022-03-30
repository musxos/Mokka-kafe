import { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";

function Page({ items, item }) {
  items = items && items.filter((a) => item.uid === a.uid);
  console.log(items);

  const allCategories = [
    ...new Set(items && items.map((item) => item.category)),
  ];
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setCategories(allCategories);
    if (category === "Categories") {
      setMenuItems(items);
      console.log(category);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    newItems.length < 1 ? setMenuItems(items) : setMenuItems(newItems);
  };
  console.log(item);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>{item.displayName || item.uid}</h2>
        </div>
        <div className="underline"></div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Page;
