
// TODO:Add publish key
const strpePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)

import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
       <div>
        <Elements stripe={strpePromise}>
        <CheckOutForm></CheckOutForm>

        </Elements>
       </div>
        </div>
    );
};

export default Payment;