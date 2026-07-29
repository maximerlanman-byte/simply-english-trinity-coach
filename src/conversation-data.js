export const CONVERSATION_TOPICS = [
  {
    id: "world-of-work",
    name: "World of Work",
    description: "Careers, working conditions, skills and the changing workplace",
    angles: ["career choices", "remote and hybrid work", "job satisfaction", "work-life balance", "skills and training", "working conditions", "job security", "technology at work", "leadership", "future careers"],
    vocabulary: ["career path", "working environment", "labour market", "job security", "financial stability", "remote work", "hybrid work", "flexitime", "overtime", "annual leave", "earn a living", "meet deadlines", "work under pressure", "gain experience", "develop skills", "climb the career ladder", "get promoted", "take responsibility", "work-life balance", "job satisfaction", "career prospects", "transferable skills", "self-employed", "freelancer", "entrepreneur", "minimum wage", "working conditions", "unemployment", "recruit staff", "attend a job interview"],
  },
  {
    id: "public-figures",
    name: "Public Figures",
    description: "Fame, influence, privacy, role models and social media",
    angles: ["role models", "public image", "privacy", "social media influence", "fame and responsibility", "celebrity culture", "controversy", "activism", "advertising", "future public figures"],
    vocabulary: ["public figure", "household name", "role model", "influencer", "content creator", "public image", "fan base", "in the public eye", "in the spotlight", "rise to fame", "make headlines", "go viral", "gain popularity", "lose popularity", "influential", "controversial", "overrated", "underrated", "down-to-earth", "genuine", "attention-seeking", "endorse products", "promote a campaign", "speak out about issues", "use fame for a good cause", "protect their privacy", "set a good example", "media attention", "online criticism", "social responsibility"],
  },
  {
    id: "environment",
    name: "National Environmental Concerns",
    description: "Climate, pollution, recycling, energy and sustainable choices",
    angles: ["personal environmental habits", "climate change", "recycling", "transport", "renewable energy", "plastic pollution", "government responsibility", "consumer choices", "environmental education", "future consequences"],
    vocabulary: ["environmental concern", "environmental damage", "environmental awareness", "eco-friendly", "sustainable", "sustainability", "green lifestyle", "carbon footprint", "renewable energy", "fossil fuels", "greenhouse gases", "air pollution", "water pollution", "plastic pollution", "toxic waste", "exhaust fumes", "climate change", "global warming", "extreme weather", "rising sea levels", "deforestation", "loss of habitat", "biodiversity", "reduce waste", "reusable containers", "sort your rubbish", "public transport", "energy-efficient appliances", "conserve natural resources", "protect the environment"],
  },
  {
    id: "personal-values",
    name: "Personal Values and Ideals",
    description: "Principles, character, responsibility and difficult choices",
    angles: ["important personal values", "role models", "honesty", "loyalty", "fairness", "responsibility", "changing values", "moral dilemmas", "influence of family and society", "learning from experience"],
    vocabulary: ["values", "beliefs", "principles", "moral dilemma", "mindset", "worldview", "sense of responsibility", "sense of justice", "open-mindedness", "self-discipline", "self-confidence", "generosity", "kindness", "fairness", "loyalty", "humility", "empathy", "compassion", "determination", "courage", "tolerance", "honesty", "integrity", "trustworthy", "genuine", "stand up for your beliefs", "set a good example", "be true to yourself", "learn from mistakes", "take responsibility for your actions"],
  },
  {
    id: "society",
    name: "Society and Living Standards",
    description: "Quality of life, inequality, housing, services and community",
    angles: ["quality of life", "cost of living", "social inequality", "housing", "healthcare", "education", "community support", "equal opportunities", "social change", "future living standards"],
    vocabulary: ["living standards", "standard of living", "quality of life", "cost of living", "social issues", "social inequality", "wealth gap", "income inequality", "poverty", "financial hardship", "inflation", "job insecurity", "low-income families", "social mobility", "lack of opportunities", "housing crisis", "affordable housing", "high rent prices", "social exclusion", "healthcare system", "universal healthcare", "mental health support", "education system", "equal opportunities", "social services", "government funding", "multicultural society", "community support", "sense of belonging", "equal rights"],
  },
];

export const GRAMMAR_OPPORTUNITIES = [
  { id: "present-perfect", label: "present perfect", guidance: "Ask about a change or development from the past up to now." },
  { id: "present-perfect-continuous", label: "present perfect continuous", guidance: "Ask about an activity or trend continuing recently." },
  { id: "past-experience", label: "past experience", guidance: "Ask about a relevant personal experience and what happened or what the student learned." },
  { id: "will-prediction", label: "will for predictions", guidance: "Ask for a reasoned prediction about the future." },
  { id: "going-to", label: "be going to", guidance: "Ask about likely developments, intentions or expected future consequences." },
  { id: "may-might", label: "may and might for speculation", guidance: "Ask the student to speculate about possible causes, effects or future changes." },
  { id: "gerund-infinitive", label: "gerunds and infinitives", guidance: "Ask about enjoying, avoiding, considering, deciding or wanting to do something." },
  { id: "preference", label: "expressions of preference", guidance: "Ask the student to compare two realistic choices and explain a preference." },
  { id: "opinion", label: "giving and supporting an opinion", guidance: "Ask for a personal view with reasons and an example." },
];

export const SPOKEN_LANGUAGE_TOOLS = [
  "That's a good question. For me personally, ...",
  "The first thing that comes to mind is ...",
  "As far as I'm concerned, ...",
  "From my point of view, ...",
  "One important aspect is ...",
  "A good example of this is ...",
  "Something else worth mentioning is ...",
  "On top of that, ...",
  "However, I also think ...",
  "On the one hand, ...; on the other hand, ...",
  "The main reason is that ...",
  "This could lead to ...",
  "It may depend on ...",
  "If I had to choose, I'd prefer ...",
  "I'd rather ... than ...",
  "Over the last few years, ...",
  "I've noticed that ...",
  "In the future, I think ... will ...",
  "This might become more important because ...",
  "Overall, I'd say ...",
];

export function getConversationTopic(topicId) {
  return CONVERSATION_TOPICS.find((topic) => topic.id === topicId) || CONVERSATION_TOPICS[0];
}
