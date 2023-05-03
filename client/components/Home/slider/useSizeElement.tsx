import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef:any = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(elementRef.current.clientWidth);
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useSizeElement;