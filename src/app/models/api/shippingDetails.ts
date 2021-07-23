export class ShippingDetails {
    firstName: string;
    lastName: string = "";
    email: string;
    phone: string;
    contactOption: string = "Phone";
    paymentOption: string = "No payment method selected";
    country: string = "";
    state: string = "Hidden Field. Details Omitted";
    city: string = "Hidden Field. Details Omitted";
    zip: string = "Hidden Field. Details Omitted";
    address1: string = "Hidden Field. Details Omitted";
    address2: string = "";
    notes: String = "";
}