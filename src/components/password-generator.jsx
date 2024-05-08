import { useCallback, useEffect, useState } from "react";

export const PasswordGenerator = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    const passValue = "";
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      return str += "0123456789";
    }
    if (charAllowed) {
     return str += `~!@#$%^&*()_+|}{“:?><[]\;’,./=`;
    }
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      passValue = passValue + str.charAt(char);
    }
    setPassword(passValue);
  }, [length, numberAllowed, charAllowed]);


  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div>
      <h1 className="text-4xl p-4 flex justify-center text-white">
        Password Generator{" "}
      </h1>
      <div className="flex justify-center  bg-sky-400 w-full p-10 gap-3 flex-col ">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            value={password}
            readOnly
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
          />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Copy
          </button>
        </div>
        <div className="flex justify-center gap-4">
          <input
            type="range"
            min={6}
            max={200}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label> length : {length}</label>
          <div>
            <input type="checkbox"  defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)} />
            <label> Number </label>
          </div>
          <div>
            <input type="checkbox" 
            defaultChecked={charAllowed} onChange={()=>setCharAllowed((prev)=>!prev)}
            />
            <label> Special Char</label>
          </div>
        </div>
      </div>
    </div>
  );
};
