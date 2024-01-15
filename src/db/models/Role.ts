import { DataTypes, Model, Optional } from "sequelize";
import conn from "../../config/dbConnect";

interface RoleAttributes {
  id?: number;
  roleName?: string;
  active?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<RoleAttributes, "id"> {}
export interface RoleOutput extends Required<RoleAttributes> {}

class Role extends Model<RoleAttributes, RoleInput> implements RoleAttributes {
  public id!: number;
  public roleName!: string;
  public active!: boolean;
  public readonly createdAt?: Date | undefined;
  public readonly updatedAt?: Date | undefined;
}

Role.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    roleName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    active: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true,
    sequelize: conn,
    underscored: false,
  }
);

export default Role;
