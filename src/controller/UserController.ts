import { Request, Response } from "express";
import Modeluser from "../db/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";
dotenv.config();

class UserController {
  static GetUser() {
    return async (req: Request, res: Response): Promise<Response> => {
      try {
        const user = await Modeluser.findAll();
        return res.status(200).json({
          status: "ok",
          message: "success",
          data: user,
        });
      } catch (err: any) {
        if (err != null && err instanceof Error) {
          return res.status(500).json({
            status: "error",
            message: err.message,
            errors: err,
          });
        }
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
          errors: err,
        });
      }
    };
  }

  // Registrasi user
  static CreateUser() {
    return async (req: Request, res: Response) => {
      try {
        const {
          username,
          email,
          password,
          auth_type = "normal",
          profile_url = "",
        } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        await Modeluser.findOne({
          where: {
            email: email,
          },
        }).then(async (user) => {
          if (user) {
            res.status(404).json({
              status: "Bad Request",
              message: "Email sudah Terdaftar",
            });
          } else {
            const createUser = await Modeluser.create({
              username,
              email,
              password: hashedPassword,
              auth_type,
              profile_url,
            });
            return res.status(201).json({
              status: "created",
              message: "Berhasil menambahkan user baru",
              data: createUser,
            });
          }
        });
      } catch (err: any) {
        if (err != null && err instanceof Error) {
          return res.status(500).json({
            status: "error",
            message: err.message,
            errors: err,
          });
        }
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
          errors: err,
        });
      }
    };
  }

  //Login User
  static LoginUser() {
    return async (req: Request, res: Response) => {
      try {
        const { email, password, auth_type = "normal" } = req.body;

        const user = await Modeluser.findOne({
          where: {
            email: email,
            auth_type,
          },
        });

        if (!user) {
          return res.status(404).json({
            status: "bad request",
            message: "Email anda salah",
          });
        }

        if (bcrypt.compareSync(password ?? "", `${user.password}`)) {
          const token = jwt.sign(
            { userId: user.id },
            process.env.SECRET_KEY as Secret
          );
          return res.status(200).json({
            status: "ok",
            message: "Anda berhasil login",
            token,
          });
        } else {
          return res.status(404).json({
            status: "bad request",
            message: "Email atau password tidak valid",
          });
        }
      } catch (err) {
        if (err != null && err instanceof Error) {
          return res.status(500).json({
            status: "error",
            message: err.message,
            errors: err,
          });
        }
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
          errors: err,
        });
      }
    };
  }

  // static DeleteUser() {
  //   return async (req: Request, res: Response): Promise<Response> => {};
  // }

  // static Updateuser() {
  //   return async (req: Request, res: Response): Promise<Response> => {};
  // }

  // static LoginUser(){
  //   return async (req: Request, res: Response): Promise<Response> => {
  //     const {email, }
  //   }
  // }
}

export default UserController;
