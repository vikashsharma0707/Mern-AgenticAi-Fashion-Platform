import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

const run = async () => {
  await connectDB();
  await User.deleteMany({});
  await Product.deleteMany({});

  const admin = await User.create({
    name: 'Admin',
    email: 'admin@myntra.demo',
    password: 'admin123',
    role: 'admin'
  });



  

  console.log('✅ Seed complete. Admin:', admin.email, '/ admin123');
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
