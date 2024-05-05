import { ChangeEvent, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Slider,
} from "@mui/material";
import { LuChevronDown } from "react-icons/lu";
import { filterProducts } from "../../slices/productsSlice";
import { useDispatch } from "react-redux";

export default function FilterMenu() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch();

  const valueRange = (value: number) => {
    return `${value}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    event.preventDefault();
    setPriceRange(newValue as number[]);
  };

  const handleCategoryChange = (
    event: ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (event.target.checked) {
      setCategories((prevCategories) => [
        ...prevCategories,
        category.toLowerCase(),
      ]);
    } else {
      setCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category.toLowerCase())
      );
    }
  };

  const filter = () => {
    dispatch(filterProducts({ priceRange, categories }));
  };

  return (
    <div>
      <div>
        <Accordion
          sx={{
            margin: "0 !important",
            border: "none",
            boxShadow: "none",
            padding: 0,
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<LuChevronDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              "&> div.Mui-expanded": {
                minHeight: 0,
                margin: 0,
              },
              "&> div": {
                margin: 0,
              },
              margin: "0 !important",
              paddingLeft: 1,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h2 className="font-semibold text-xl">Filter by price</h2>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <p className="pl-2">
              Price: $ {priceRange[0]} - $ {priceRange[1]}
            </p>
            <div className="px-2 pb-4">
              <Slider
                sx={{
                  color: "#252d3b",
                }}
                getAriaLabel={() => "Filter by price"}
                value={priceRange}
                min={0}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueRange}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <hr />
      <div className="pt-3">
        <Accordion
          sx={{
            margin: "0 !important",
            border: "none",
            boxShadow: "none",
            padding: 0,
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<LuChevronDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              "&> div.Mui-expanded": {
                minHeight: 0,
                margin: 0,
              },
              "&> div": {
                margin: 0,
              },
              margin: "0 !important",
              paddingLeft: 1,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h2 className="font-semibold text-xl">Categories</h2>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <ul className="pb-4">
              <li className="flex pl-2 items-center gap-3">
                <Checkbox
                  id="mens-clothing"
                  className="w-4 h-4"
                  onChange={(event) =>
                    handleCategoryChange(event, "Men's clothing")
                  }
                />
                <label htmlFor="mens-clothing">Men's clothing</label>
              </li>
              <li className="flex pl-2 items-center gap-3">
                <Checkbox
                  id="womens-clothing"
                  className="w-4 h-4"
                  onChange={(event) =>
                    handleCategoryChange(event, "Women's clothing")
                  }
                />
                <label htmlFor="womens-clothing">Women's clothing</label>
              </li>
              <li className="flex pl-2 items-center gap-3">
                <Checkbox
                  id="electronics"
                  className="w-4 h-4"
                  onChange={(event) =>
                    handleCategoryChange(event, "Electronics")
                  }
                />
                <label htmlFor="electronics">Electronics</label>
              </li>
              <li className="flex pl-2 items-center gap-3">
                <Checkbox
                  id="jewelery"
                  className="w-4 h-4"
                  onChange={(event) => handleCategoryChange(event, "Jewelery")}
                />
                <label htmlFor="jewelery">Jewelery</label>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <button
        onClick={filter}
        className="w-full p-3 rounded text-white border border-primary font-medium bg-primary mt-4 transition-opacity hover:opacity-90"
      >
        Apply filters
      </button>
    </div>
  );
}
