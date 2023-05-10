import React, { useState } from "react";

interface fields{
    name:string;
    amount:number;
}

export function useForm() {
  const [values, setValues] = useState<fields>({
    name: "",
    amount: 0
  });

  const onAddFields = (event:React.ChangeEvent<HTMLInputElement>):void => {

    setValues((field) => {
      return { ...field,  [event.target.name]: event.target.value };
    });

  };

  const removeFieldsValues = ():void => {
    
    setValues({ name:"", amount:0 })

  }

  return { values, onAddFields , removeFieldsValues};
}