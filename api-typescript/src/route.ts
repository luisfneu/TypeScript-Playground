import { Router, Request, Response } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

router.get("/users", (req: Request, res: Response) => {
  res.json([
    { id: 1, nome: "Fernando" },
    { id: 2, nome: "Maria" }
  ]);
});

export default router;