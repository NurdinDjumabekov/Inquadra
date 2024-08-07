/////// hooks
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

/////// componnets
import { Box, Slider } from "@mui/material";

/////// style
import "./style.scss";

/////// fns
import { activePriceFN } from "../../../store/reducers/stateSlice";
import { getListProds } from "../../../store/reducers/requestSlice";

const ClothPrices = () => {
  const timerRef = useRef(null);

  const dispatch = useDispatch();

  const { initialPrice, activeBrands } = useSelector(
    (state) => state.stateSlice
  );

  const { active, activePrice } = useSelector((state) => state.stateSlice);

  const onSliderChange = (event, newValue) => {
    dispatch(activePriceFN({ min: newValue?.[0], max: newValue?.[1] }));
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      dispatch(
        getListProds({
          ...active,
          price: { min: newValue?.[0], max: newValue?.[1] },
          brandId: activeBrands,
        })
      );
    }, 500);
  };

  return (
    <div className="priceBlock">
      <Box sx={{ width: "100%" }}>
        <Slider
          // aria-label="Temperature"
          onChange={onSliderChange}
          step={250}
          valueLabelDisplay="on"
          min={initialPrice?.min}
          max={initialPrice?.max}
          sx={{
            "& .MuiSlider-thumb": {
              color: "black",
            },
            "& .MuiSlider-track": {
              color: "black",
            },
            "& .MuiSlider-rail": {
              color: "black",
            },
            "& .MuiSlider-mark": {
              color: "black",
            },
            "& .MuiSlider-markLabel": {
              color: "black",
            },
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#fff",
              color: "#222",
            },
          }}
          value={[activePrice?.min, activePrice?.max]}
          disableSwap
        />
      </Box>
    </div>
  );
};

export default ClothPrices;
