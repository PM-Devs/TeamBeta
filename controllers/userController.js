const getUser = (req, res) => {
    res.cookie('user', 'testUser');
    res.send('Get user details');
  };
  
const createUser = (req, res) => {
    const { name, email } = req.body;
    // Here you would normally add the user to your database
    res.status(201).send({ message: 'User created', user: { name, email } });
  };
  export default {
    getUser,
    createUser
  }