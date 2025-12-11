
import { useEffect, useState } from 'react';
import { MultiSelect,  } from '@mantine/core';

const SelectInput=(props:any)=> {
     useEffect(()=>{
        setdata(props.options)
    }, [])
  const [data, setdata] = useState<string[]>([]);
  
    
  

  return (
   <MultiSelect withAsterisk
  className="text-gray-100 [&_input]:font-medium"
  label={props.label}
  placeholder={props.placeholder}
  data={props.options}
  maxValues={3}
  searchable
/>
  );
}
export default SelectInput;