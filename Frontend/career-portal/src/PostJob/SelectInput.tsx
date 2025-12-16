import { Select } from '@mantine/core';

type SelectInputProps = {
  form: any;
  name: string;
  label: string;
  placeholder?: string;
  options: string[];
};

const SelectInput = ({ form, name, label, placeholder, options }: SelectInputProps) => {
  return (
    <Select
      withAsterisk
      label={label}
      placeholder={placeholder}
      data={options}
      searchable
      {...form.getInputProps(name)}
    />
  );
};

export default SelectInput;
