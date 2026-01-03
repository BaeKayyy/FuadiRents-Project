import React from 'react'

function Input({type = "text", placeholder, onChange, value}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="
    w-full
    rounded-xl
    bg-white
    shadow-md
    px-4 py-3
    mt-4
    text-base
    placeholder:text-base
    ml-[72px]"
    />
  );

}

export default Input