import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function StripeCardForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    // Debug useEffect to check if router and stripe are available
    useEffect(() => {
        console.log("StripeCardForm mounted");
        console.log("Router available:", !!router);
        console.log("Stripe available:", !!stripe);
        console.log("Elements available:", !!elements);
        
        return () => {
            console.log("StripeCardForm unmounting");
        }
    }, [router, stripe, elements]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        
        if (!stripe || !elements) {
            console.log('Stripe or Elements not available');
            setError("Stripe not loaded properly. Please refresh the page and try again.");
            return;
        }

        // Start loading state
        setLoading(true);
        setError(null);

        try {
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
                throw new Error("Card element not found");
            }
            
            console.log('Creating payment method...');
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.log('Payment error:', error);
                setError(error.message || 'Payment error');
                setLoading(false);
                return;
            }

            console.log('Payment method created:', paymentMethod.id);
            
            // Simulate successful payment
            setSuccess(true);
            console.log('Payment successful, preparing to redirect...');
            
            // Wait before redirecting to show success message
            setTimeout(() => {
                try {
                    const orderId = 'ORD' + Math.floor(100000 + Math.random() * 900000);
                    console.log('Redirecting to:', `/order-confirmation?orderId=${orderId}`);
                    router.push(`/order-confirmation?orderId=${orderId}`);
                } catch (error) {
                    console.error('Navigation error:', error);
                    setError("Error during navigation. Please try again.");
                    setLoading(false);
                }
            }, 2000);
            
        } catch (err: any) {
            console.error('Error processing payment:', err);
            setError(err.message || 'An unexpected error occurred');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement 
                className="border-line px-4 py-3 w-full rounded mt-2 bg-white" 
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            
            {success && (
                <div className="bg-green-100 text-green-700 p-3 rounded mt-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Payment successful! Redirecting to confirmation page...
                </div>
            )}
            
            {error && (
                <div className="bg-red-100 text-red-600 p-3 rounded mt-3">
                    {error}
                </div>
            )}
            
            <button 
                className={`button-main w-full mt-4 bg-blue-600 text-white rounded-lg py-3 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`} 
                type="submit" 
                disabled={!stripe || loading}
            >
                {loading ? 'Processing...' : 'Pay with Stripe'}
            </button>
        </form>
    );
}