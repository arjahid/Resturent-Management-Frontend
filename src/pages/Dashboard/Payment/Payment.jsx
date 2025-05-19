
// TODO:Add publish key
const strpePromise=loadStripe('')

import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
       <div>
        <Elements stripe={strpePromise}>
            

        </Elements>
       </div>
        </div>
    );
};

export default Payment;