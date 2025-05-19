import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxious from '../../../Hooks/useAxious';

const PaymentHistory = () => {
    const {user}=useAuth();
    const axiousSecure=useAxious();
 
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async ()=>{
            const res=await axiousSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
  
    return (
        <div>
            <h3>Total Payments: {payments.length}</h3>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, idx) => (
                            <tr key={payment._id || idx}>
                                <td>{idx + 1}</td>
                                <td>{payment.email}</td>
                                <td>
                                    {payment.status}
                                </td>
                                <td>${payment.price}</td>
                                <td>
                                    {payment.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;