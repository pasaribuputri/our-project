import { Request, Response } from "express";
import Role from "../db/models/Role";

class Rolecontroller {
  static GetRole() {
    return async (req: Request, res: Response): Promise<Response> => {
      try {
        const roles = await Role.findAll({
          where: {
            active: true,
          },
        });
        return res.status(200).json({
          status: "ok",
          message: "success",
          data: roles,
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

  static CreateRole() {
    return async (req: Request, res: Response): Promise<Response> => {
      try {
        console.log(req.body);
        const { roleName, active } = req.body;
        const createRole = await Role.create({
          roleName,
          active,
        });
        return res.status(201).json({
          status: "created",
          message: "Berhasil create role baru",
          data: createRole,
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

  static UpdateRole() {
    return async (req: Request, res: Response): Promise<Response> => {
      try {
        const idRole = req.params.id;
        const { roleName, active } = req.body;
        await Role.update(
          {
            roleName,
            active,
          },
          {
            where: {
              id: idRole,
            },
          }
        );
        return res.status(200).json({
          status: "ok",
          message: "Role berhasil di update",
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

  static DeleteRole() {
    return async (req: Request, res: Response): Promise<Response> => {
      try {
        const idRole = req.params.id;
        await Role.destroy({
          where: {
            id: idRole,
          },
        });
        return res.status(200).json({
          status: "ok",
          message: "Role berhasil di hapus",
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
}

export default Rolecontroller;
