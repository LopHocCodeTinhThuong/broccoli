import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.status(201).json({ name: "Created" });
  }

  res.status(200).json({ name: "Long NGuyen" });
}
