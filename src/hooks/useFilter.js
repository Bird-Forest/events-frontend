import { useEffect, useState } from 'react';

export default function useFilter(param) {
  const [value, setValue] = useState(null);
  console.log(value);
  useEffect(() => {
    setValue(param);
    return () => {};
  }, [param]);

  return value;
}
