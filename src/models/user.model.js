import { sequelize } from '../../db/connection.js';
import { DataTypes } from "sequelize";

const User = sequelize.define('users', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
class UserModel {

  static findAll = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static findOne = async (id) => {
    try {
      const user = await User.findOne({ where: { id }})
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static create = async (data) => {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw new Error(`Failed to create user : ${error.message}`);
    }
  };

  static update = async (id, data) => {
    try {
      console.log(id)
      const user = await User.update(data, { where: { id }})
      if (user[0] === 1) {
        return `User with ${id} succesfully updated`
      } else {
        throw new Error(`User with ${id} not found`);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static deleteById = async (id) => {
    try {
      const user = await User.destroy({ where: { id }})
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UserModel;