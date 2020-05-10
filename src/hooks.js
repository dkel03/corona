import { useState } from "react";

const useInput = (initialValue, validator) => {
  // hooks인데, 초기화값, 검증함수를 받는다
  const [value, setValue] = useState(initialValue); // 초기화 값으로 state를 생성한다.
  const onChange = (event) => {
    // 이벤트를 받아, 객체에 저장한다.
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default { useInput };