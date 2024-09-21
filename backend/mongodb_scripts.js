
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

async function insertUser() {
  const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });

  try {
    await newUser.save();
    console.log('User inserted successfully');
  } catch (error) {
    console.error('Error inserting user:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertUser();