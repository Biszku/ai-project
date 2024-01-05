export default async function Home() {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
      max_tokens: 100,
    }),
  };

  const req = await fetch(
    "https://api.openai.com/v1/chat/completions",
    options
  );
  const res = await req.json();
  console.log(res);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>elo</p>
    </main>
  );
}
