import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';
import rootShouldForwardProp from '@mui/material/styles/rootShouldForwardProp';


const SliderComponent = ({ min, max, defaultValue, unit, amount,  step, onChange, value, label }) => {
  return (
    <Stack my={1.4}>
      {/* fake dom */}
      <Stack gap={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>{unit} {amount} </Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction= 'row' justifyContent='space-between'>


      <Typography variant='caption' color='text.secondary' >{unit} {min}</Typography>
      <Typography  variant='caption' color='text.secondary'>{unit} {max}</Typography>
      </Stack>
    </Stack>
  )
}

export default SliderComponent