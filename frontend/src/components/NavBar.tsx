import axios from "axios";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

export type Category = {
  id: number;
  name: string;
};

const NavBar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios.get<Category[]>(
          "http://localhost:5001/categories"
        );
        setCategories(result.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <nav className="categories-navigation">
      {categories.map((el, index) => (
        <Fragment key={el.id}>
          <Link
            href={`/category/${el.id}`}
            className="category-navigation-link"
          >
            {el.name}
          </Link>
          {index < categories.length - 1 ? <span> • </span> : null}
        </Fragment>
      ))}
    </nav>
  );
};

export default NavBar;
