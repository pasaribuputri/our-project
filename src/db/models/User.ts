// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     no_hp: DataTypes.CHAR,
//     password: DataTypes.STRING,
//     active: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

import { DataTypes, Model, Optional } from "sequelize";
import conn from "../../config/dbConnect";

interface UserAttributes {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  no_hp?: string;
  password?: string;
  active?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<UserAttributes, "id"> {}
export interface RoleOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, RoleInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public username!: string;
  public email!: string;
  public no_hp!: string;
  public password!: string;
  public active!: boolean;
  public readonly createdAt?: Date | undefined;
  public readonly updatedAt?: Date | undefined;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    no_hp: {
      type: DataTypes.CHAR,
    },
    password: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    sequelize: conn,
    underscored: false,
  }
);

export default User;
