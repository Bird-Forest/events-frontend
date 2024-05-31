import { useEffect, useState } from 'react';

export default function useFilter(param) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(param);
    return () => {};
  }, [param]);

  return value;
}
