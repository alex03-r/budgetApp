import React, { useState } from "react";
import { formatAmount } from "../helpers/helper";


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
      return { 
        ...field,         
        [event.target.name]: event.type == "number" ?  formatAmount( parseInt(event.target.value + ".00" )  )  :  event.target.value      };
    });

  };

  const removeFieldsValues = ():void => {
    
    setValues({ name:"", amount:0 })

  }

  return { values, onAddFields , removeFieldsValues};
}