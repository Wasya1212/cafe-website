import { ShoppingBag, ShoppingCart, MapPin, CreditCard, Clock } from 'lucide-react';

export function DeliveryProcess() {
  const steps = [
    {
      icon: ShoppingBag,
      title: 'Select Product',
      description: '商品を選ぶ'
    },
    {
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'カートに追加'
    },
    {
      icon: MapPin,
      title: 'Select Location',
      description: '場所を選択'
    },
    {
      icon: CreditCard,
      title: 'Payment',
      description: 'お支払い'
    },
    {
      icon: Clock,
      title: 'Wait for Delivery',
      description: '配達を待つ'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple and easy ordering process. Select your favorite Japanese cakes, choose your delivery location, and enjoy fresh pastries delivered to your door.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:bg-red-200">
                <step.icon className="w-10 h-10 text-red-600" />
              </div>
              
              {/* Title */}
              <h3 className="mb-1">{step.title}</h3>
              
              {/* Japanese Description */}
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
