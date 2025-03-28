interface ContactValues {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const data: ContactValues = await req.json();

  const res = `Thank you for your interest, ${data.name}`;

  return Response.json(res);
}
