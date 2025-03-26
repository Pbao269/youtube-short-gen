const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

export const generateScript = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "Write a two different script for 30 seconds video on Topic:Action Adventure,\n\n* Do not add Scene Description\n\n* Do not Add anything in Braces, just return the plain story in text\n\n* Give me response in JSON format and follow the schema\n-{\nscripts:[\n{\ncontent:''\n},\n],\n}"},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"A shadowed figure sprints across rooftops, leaping across impossible gaps. She crashes through a window, landing silently inside a museum. Alarms blare. She ignores them, heading straight for a display case. With a swift motion, she grabs a glowing artifact. Guards swarm her. She smirks, launching a grappling hook and soaring out another window, leaving chaos behind.\"\n    },\n    {\n      \"content\": \"Dust explodes around a jeep racing across a desert landscape. A helicopter pursues, firing missiles. Inside, two figures struggle to maintain control. The driver swerves, narrowly avoiding a rockslide. The passenger leans out, firing a rocket launcher at the helicopter. The missile hits, sending the helicopter spiraling down in flames. They cheer, but another helicopter appears on the horizon.\"\n    }\n  ]\n}\n```"},
        ],
    },
    ],
});

//const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//console.log(result.response.text());
