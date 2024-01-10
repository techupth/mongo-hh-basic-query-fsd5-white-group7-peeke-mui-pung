db.pizzaOrders.find({}).sort({ total_price: -1 });

db.pizzaOrders.find().sort({ create_at: 1 });
