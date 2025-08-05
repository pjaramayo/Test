export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface ProfileForm {
  firstName: string;
  lastName: string;
  address: Address;
}
