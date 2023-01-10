// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  var data = await fs.promises.readdir("blogdata");
  var length = data.length;
  data = data.slice(0, req.query.count);
  let files = [];
  for (let i = 0; i < data.length; i++) {
    const file = await fs.promises.readFile("blogdata/" + data[i], "utf-8");
    files.push(JSON.parse(file));
  }
  res.status(200).json({ files, length });
}
