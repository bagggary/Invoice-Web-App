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
    },
  ];
  total: number;
};
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
  submitSuccessful?: boolean;
  reset?: <T>(
    values?: T | ResetAction<T>,
    options?: Record<string, boolean>
  ) => void;
};
export type ResetAction<TFieldValues> = (
  formValues: TFieldValues
) => TFieldValues;

export interface DateProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: UseFormSetValue<FieldValues> | any;
  submitSuccessful?: boolean;
  reset?: <T>(
    values?: T | ResetAction<T>,
    options?: Record<string, boolean>
  ) => void;
  disable?: boolean;
}
//createdAt: string , invoiceId : string
