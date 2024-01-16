import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({
        status: "unauthorized",
        message: "Token tidak ada",
      });
    }

    const validToken = jwt.verify(`${token}`, process.env.SECRET_KEY as Secret);
    if (validToken) {
      const decodedToken = jwt.decode(token as string) as JwtPayload;
      if (decodedToken && typeof decodedToken.userId !== "undefined") {
        let userId = decodedToken.userId;
        req.headers.user = userId;
        next();
      }
    } else {
      return res.status(401).json({
        status: "unauthorized",
        message: "Token tidak valid",
      });
    }
  } catch (err: any) {
    console.log(err);
    return res.status(401).json({
      status: "internal server error",
      message: "Token tidak valid atau sesi telah berakhir",
    });
  }
};

export default verifyToken;
