import UserModel from '../models/user.model.js';

class UserController {

  index = async (req, res) => {
    try {
      const users = await UserModel.findAll();
      if (users.length === 0) {
        res.status(404).json({
          message: 'User not found'
        });
      } else {
        res.json(users);
      }
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  show = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findOne(id);
      if (!user) {
        res.status(404).json({
          message: 'User not found'
        });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }

  create = async (req, res) => {
    try {
      const {
        name,
        email,
        age
      } = req.body;
      const user = await UserModel.create({
        name,
        email,
        age
      });
      res.json({
        user,
        'message': 'User created successfully'
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error.message
      });
    }
  }

  update = async (req, res) => {
    try {
      const id = req.params.id;
      const { name,email,age } = req.body;
      const user = await UserModel.update(id, { name, email, age });
      res.status(202).json({
        user,
        'message': 'User update successfully'
      });;
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error.message
      });
    }
  }

  destroy = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.deleteById(id);
      if (!user) {
        res.status(404).json({
          message: 'User not found'
        });
      } else {
        res.json({
          user,
          message: 'User deleted succesfully'
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
}

export default UserController