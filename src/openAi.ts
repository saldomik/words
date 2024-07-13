import OpenAI from "openai";
import { OPENAI_API_KEY, OPENAI_PROJECT_ID } from "./config";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    project: OPENAI_PROJECT_ID
});

export default openai;