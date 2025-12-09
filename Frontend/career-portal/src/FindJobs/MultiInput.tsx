import { MultiSelect } from '@mantine/core';
import { useEffect, useState } from 'react';

const MultiInput = (props:any) => {
  useEffect(()=>{
    SetData(props.options);

  }, [])

  const [data, SetData] = useState<string[]>([]);
  return (
<MultiSelect
  className="text-gray-100"
  label={
    <div className="flex items-center gap-2">
      <props.icon size={20} color='gold' />
      <span>{props.title}</span>
    </div>
  }
  placeholder={`Select ${props.title}`}
  data={props.options}
  maxValues={6}
  searchable
  
  
/>

  )
}

export default MultiInput