import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
  Typography,
} from "@mui/material";
import { LuChevronDown } from "react-icons/lu";

export default function FilterMenu() {
  const [value, setValue] = useState<number[]>([0, 1000]);

  const valueRange = (value: number) => {
    return `${value}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    event.preventDefault();
    setValue(newValue as number[]);
  };

  return (
    <section className="max-w-80 w-full">
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
            <Typography
              sx={{
                "&> div.Mui-expanded": {
                  margin: 0,
                },
                margin: "0 !important",
                fontSize: 20,
                fontWeight: "bold",
                padding: 0,
              }}
            >
              Filter by price
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <Typography>
              <p className="pl-2">
                Price: $ {value[0]} - $ {value[1]}
              </p>
              <div className="px-2 pb-4">
                <Slider
                  sx={{
                    color: "#252d3b",
                  }}
                  getAriaLabel={() => "Filter by price"}
                  value={value}
                  min={0}
                  max={1000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valueRange}
                />
              </div>
            </Typography>
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
            <Typography
              sx={{
                "&> div.Mui-expanded": {
                  margin: 0,
                },
                margin: "0 !important",
                fontSize: 20,
                fontWeight: "bold",
                padding: 0,
              }}
            >
              Categories
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <Typography>
              <ul className="pb-4">
                <li className="flex pl-2 items-center">
                  <input
                    type="checkbox"
                    id="mens-clothing"
                    className="w-4 h-4"
                  />
                  <label htmlFor="mens-clothing" className="pl-2 text-base">
                    Men's clothing
                  </label>
                </li>
                <li className="flex pl-2 items-center">
                  <input
                    type="checkbox"
                    id="womens-clothing"
                    className="w-4 h-4"
                  />
                  <label htmlFor="womens-clothing" className="pl-2 text-base">
                    Women's clothing
                  </label>
                </li>
                <li className="flex pl-2 items-center">
                  <input type="checkbox" id="electronics" className="w-4 h-4" />
                  <label htmlFor="electronics" className="pl-2 text-base">
                    Electronics
                  </label>
                </li>
                <li className="flex pl-2 items-center">
                  <input type="checkbox" id="jewelery" className="w-4 h-4" />
                  <label htmlFor="jewelery" className="pl-2 text-base">
                    Jewelery
                  </label>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <button className="w-full p-3 rounded text-white border border-primary font-medium bg-primary mt-4 transition-opacity hover:opacity-90">
        Apply filters
      </button>
    </section>
  );
}
