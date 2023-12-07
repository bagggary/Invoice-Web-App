import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";

export type ItemTypes = {
  item: string;
  itemQty: number;
  itemPrice: number;
  itemTotal: number;
};

export type FormValues = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: [
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }
  ];
  total: number;
};
// export type ItemTypeProps = {
//   index: number;
//   register: UseFormRegister<FieldValues>;
// };
// export interface InputProps extends Partial<Pick<UseFormReturn, "register">> {
//   rules?: ValidationRule;
//   index: number;
//   register: UseFormRegister<FieldValues>;

//   // type: "text" | "email" | "number";
// }
export type FieldTypes = {
  name: string;
  price: number;
  quantity: number;
  total: number;
};
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  index: number;
  key?: string;
  register: UseFormRegister<FieldValues> | any;
  remove: (index?: number | number[]) => void;
  watch: any;
  setValue: UseFormSetValue<FieldValues> | any;
  fields?: FieldTypes[];
  total?: number;
  errors: any;
}

export type PaymentTypes = {
  watch: any;
  setValue: UseFormSetValue<FieldValues> | any;
};

export interface DateProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: UseFormSetValue<FieldValues> | any;
}
//createdAt: string , invoiceId : string
export function defaultFields() {
  return {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 0,
    clientName: " ",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  };
}
