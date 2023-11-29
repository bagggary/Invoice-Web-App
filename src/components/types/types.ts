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
export type ItemTypeProps = {
  index: number;
  itemData: ItemTypes;
  handleRemove: () => void;
  setItemList: React.Dispatch<React.SetStateAction<ItemTypes[]>>;
};

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
