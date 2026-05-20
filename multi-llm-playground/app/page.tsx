export default function Home() {
  const responses = [
    {
      model: "Llama 3",
      response:
        "Artificial Intelligence is the simulation of human intelligence by machines.",
      latency: "1.2s",
      tokens: 120,
    },
    {
      model: "Mistral",
      response:
        "AI refers to systems that mimic human learning and decision making.",
      latency: "0.9s",
      tokens: 110,
    },
    {
      model: "Gemma",
      response:
        "Artificial Intelligence enables computers to perform tasks requiring human intelligence.",
      latency: "1.5s",
      tokens: 140,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Navbar */}
        <div className="bg-white shadow-md rounded-2xl p-5 mb-6">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Multi-LLM Evaluation Playground
          </h1>
        </div>

        {/* Prompt Input */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
          <label className="block text-lg font-semibold mb-3">
            Enter Prompt
          </label>

          <textarea
            className="w-full border rounded-xl p-4 h-32 outline-none"
            placeholder="Enter your prompt here..."
          ></textarea>
        </div>

        {/* Model Selection */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Select Models</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <label className="border rounded-xl p-4 flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Llama 3
            </label>

            <label className="border rounded-xl p-4 flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Mistral
            </label>

            <label className="border rounded-xl p-4 flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Gemma
            </label>

            <label className="border rounded-xl p-4 flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              GPT-4 (Paid)
            </label>

          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Compare Responses
          </button>
        </div>

        {/* Response Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {responses.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5"
            >
              <h2 className="text-xl font-bold text-blue-600 mb-3">
                {item.model}
              </h2>

              <p className="text-gray-700 mb-4">
                {item.response}
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Latency:</span>{" "}
                  {item.latency}
                </p>

                <p>
                  <span className="font-semibold">Tokens:</span>{" "}
                  {item.tokens}
                </p>

                <p>
                  <span className="font-semibold">Rating:</span> ⭐⭐⭐⭐
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}