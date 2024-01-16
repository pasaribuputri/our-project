"use strict";
import { Model, DataTypes, Optional } from "sequelize";
import conn from "../../config/dbConnect";

interface UserAttributes {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  auth_type?: string;
  profile_url?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id?: string | undefined;
  public username?: string | undefined;
  public email?: string | undefined;
  public password?: string | undefined;
  public auth_type?: string | undefined;
  public profile_url?: string | undefined;
}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    auth_type: DataTypes.STRING,
    profile_url: DataTypes.STRING,
  },
  {
    timestamps: true,
    sequelize: conn,
    modelName: "User",
  }
);

export default User;
