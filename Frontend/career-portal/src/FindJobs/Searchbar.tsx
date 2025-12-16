import { Divider, RangeSlider, Slider } from "@mantine/core"
import { dropdownData } from "../Data/JobsData"
import MultiInput from "./MultiInput"
import { useState } from "react"
import React from "react"

  
const Searchbar = () => {
  const [value, setValue] = useState<[number, number]>([1,100]);
  return (
    <div className="flex px-5 py-8">
        {
          dropdownData.map((item, index) => (
            <React.Fragment key={`${item.title}-${index}`}>
              <div className="w-1/5">
                <MultiInput {...item} />
              </div>
              <Divider size="xs" mr="xs" orientation="vertical" />
            </React.Fragment>
          ))


        }
        <div className="w-1/5">
          <div className="flex justify-between">
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
          </div>
          <RangeSlider size="xs" color="gold" value={value} onChange={setValue} />
        </div>
    </div>
  )
}

export default Searchbar