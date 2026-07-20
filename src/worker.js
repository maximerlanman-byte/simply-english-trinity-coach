const TASK_OPENING = "My new neighbours regularly make noise late at night, but I don’t want to create a bad relationship with them.";

const TASKS = [
  { id: "level-1-task-1", level: 1, number: 1, title: "Noisy neighbours", opening: TASK_OPENING, facts: ["Loud music happens two or three nights a week.", "You start work early.", "You spoke to them once; they apologised, but the noise continued.", "They seem friendly during the day.", "Other neighbours are also affected."], options: ["speak again", "write a polite message", "involve the landlord"] },
  { id: "level-1-task-2", level: 1, number: 2, title: "Adopting a dog", opening: "My family wants to adopt a dog, but I’m worried that I’ll eventually have to do all the work.", facts: ["Two teenagers promise to help.", "You live in a flat near a park.", "The dog is young and energetic.", "Nobody in the family has owned a dog before.", "You work from home three days a week."], options: ["adopt", "foster first", "choose an older dog", "wait"] },
  { id: "level-1-task-3", level: 1, number: 3, title: "First smartphone", opening: "My twelve-year-old daughter wants her first smartphone, but I’m not sure she is ready for one.", facts: ["Most of her friends already have phones.", "She travels to school alone.", "She currently uses a family tablet at home.", "An online argument upset her recently.", "The cost is affordable."], options: ["basic phone", "smartphone with controls", "trial period", "wait"] },
  { id: "level-1-task-4", level: 1, number: 4, title: "Faulty online purchase", opening: "I bought an expensive laptop online, but it arrived damaged and the seller has stopped replying.", facts: ["It cost €850.", "The advert described it as being in excellent condition.", "The battery is weak and the screen is damaged.", "You paid by bank transfer.", "You saved the advert and messages."], options: ["platform complaint", "contact the bank", "consumer advice", "repair estimate"] },
  { id: "level-1-task-5", level: 1, number: 5, title: "Holiday booking", opening: "I paid for a weekend break, but the hotel says it has no record of my reservation.", facts: ["You paid €400 through a small travel agency.", "You have a confirmation email.", "The hotel is now full.", "The agency blames the hotel.", "They offered a cheaper hotel far from the centre."], options: ["accept", "demand an equivalent hotel", "request a refund", "contact the card provider"] },
  { id: "level-1-task-6", level: 1, number: 6, title: "Too much volunteering", opening: "I agreed to help a local charity, but they now expect much more time than I can give.", facts: ["You originally agreed to four hours per month.", "They now contact you several times a week.", "You enjoy the work and believe it is important.", "The organiser is friendly but disorganised.", "Your paid work is beginning to suffer."], options: ["set limits", "reduce tasks", "take a break", "leave"] },
  { id: "level-1-task-7", level: 1, number: 7, title: "Group project", opening: "I’m doing most of the work on a group project, but I’m unsure whether I should complain.", facts: ["There are four students in the group.", "Two rarely attend meetings.", "Everyone will receive the same grade.", "You have already reminded them twice.", "The deadline is in ten days."], options: ["redistribute tasks", "speak firmly", "record contributions", "contact the tutor"] },
  { id: "level-1-task-8", level: 1, number: 8, title: "Using the car less", opening: "I want to use my car less, but public transport where I live is unreliable.", facts: ["You travel twenty kilometres to work.", "The bus takes twice as long.", "It is sometimes cancelled.", "Fuel and parking are expensive.", "A colleague lives nearby."], options: ["car-share", "mixed transport", "work remotely sometimes", "reduce rather than stop"] },
  { id: "level-1-task-9", level: 1, number: 9, title: "Embarrassing photo", opening: "A colleague posted an embarrassing photograph of me online without asking, and I don’t know how strongly to react.", facts: ["It was taken at a private birthday party.", "Several coworkers have seen it.", "The colleague says it was only a joke.", "You asked once for it to be removed, but they ignored you.", "You want to avoid a major workplace conflict."], options: ["speak directly", "send a written request", "report the post", "involve a manager"] },
  { id: "level-1-task-10", level: 1, number: 10, title: "Expensive gym membership", opening: "I joined an expensive gym for a year, but I hardly use it and the company says I cannot cancel.", facts: ["You joined three months ago.", "The gym is far from your home.", "Your work schedule recently changed.", "The contract mentions cancellation only for medical reasons or moving away.", "A cheaper gym has opened nearby."], options: ["negotiate", "transfer membership", "change routine", "seek consumer advice"] },
  { id: "level-2-task-11", level: 2, number: 11, title: "Social media photo", opening: "A colleague posted an embarrassing photograph of me online without permission, and I don’t know how strongly I should react.", facts: ["It was taken at a private birthday party.", "Several coworkers have commented on it.", "The colleague says it is only a joke.", "You asked once for removal; they ignored the message.", "Your workplace has a social-media policy.", "You want it removed but do not want a formal conflict."], options: ["speak directly", "send a written request", "report it to the platform", "involve a manager or HR"] },
  { id: "level-2-task-12", level: 2, number: 12, title: "Technology for children", opening: "My twelve-year-old wants a smartphone because all her friends have one, but I’m worried she isn’t ready for it.", facts: ["She currently uses a family tablet at home.", "She travels to school alone, so contact would be useful.", "A previous online argument upset her badly.", "She says she feels excluded socially.", "The cost is manageable."], options: ["basic phone", "smartphone with controls", "trial period", "wait"] },
  { id: "level-2-task-13", level: 2, number: 13, title: "Neighbourhood development", opening: "A new development could create jobs in my town, but it would also destroy one of the area’s last green spaces.", facts: ["The proposal is a shopping and entertainment complex.", "It may create 250 jobs.", "The town has high unemployment and many empty shops in the centre.", "The land contains mature trees and is used by walkers.", "Developers promise to replant some trees."], options: ["approve", "reject", "reduce the project", "choose a brownfield site"] },
  { id: "level-2-task-14", level: 2, number: 14, title: "Volunteering pressure", opening: "I agreed to help a local charity, but they now expect far more time than I can realistically give.", facts: ["You agreed to four hours per month.", "They now contact you several times a week.", "The work supports vulnerable families and feels meaningful.", "The organiser is kind but disorganised.", "Your paid work and health are suffering."], options: ["set boundaries", "reduce tasks", "take a break", "leave"] },
  { id: "level-2-task-15", level: 2, number: 15, title: "Noisy neighbours", opening: "My new neighbours regularly make noise late at night, but I’m reluctant to complain because I want us to have a good relationship.", facts: ["Loud music happens two or three nights a week.", "You start work early.", "You have spoken casually once; they apologised, but it continued.", "They recently moved in and seem friendly.", "Other neighbours are also affected."], options: ["direct conversation", "written message", "shared solution", "landlord or community complaint"] },
  { id: "level-2-task-16", level: 2, number: 16, title: "Changing careers", opening: "I’m considering leaving a secure career to train for something I would find more meaningful, but the financial risk frightens me.", facts: ["You work in banking and want to become a teacher.", "Training would take one year.", "You have savings for eight months.", "Your current salary is high, but stress is affecting sleep.", "Your partner is supportive but worried about the mortgage."], options: ["resign", "study part-time", "request reduced hours", "postpone and save more"] },
  { id: "level-2-task-17", level: 2, number: 17, title: "Family celebration conflict", opening: "Two members of my family are refusing to attend the same important celebration, and both expect me to take their side.", facts: ["The event is your mother’s seventieth birthday.", "Your brother and cousin argued over money last year.", "Neither has apologised.", "Your mother knows little about the conflict.", "Separate celebrations would upset her."], options: ["mediate", "set behaviour rules", "invite both without intervention", "hold separate events"] },
  { id: "level-2-task-18", level: 2, number: 18, title: "Car or public transport", opening: "I want to stop using my car so much, but public transport where I live is unreliable and giving it up could make daily life difficult.", facts: ["You commute twenty kilometres.", "The bus takes twice as long and is sometimes cancelled.", "Parking and fuel are expensive.", "Cycling is possible only part of the route.", "A colleague lives nearby."], options: ["car-share", "mixed transport", "remote work days", "keep the car but reduce use"] },
  { id: "level-2-task-19", level: 2, number: 19, title: "Promotion and colleague", opening: "I’ve been encouraged to apply for a promotion, but a close colleague wants the same position and I’m worried it could damage our relationship.", facts: ["You have slightly more experience.", "The colleague has stronger technical qualifications.", "You have supported each other for years.", "Only one internal candidate will be selected.", "Your manager approached you privately."], options: ["apply openly", "speak to the colleague first", "withdraw", "encourage mutual professionalism"] },
  { id: "level-2-task-20", level: 2, number: 20, title: "Adopting a pet", opening: "My family wants to adopt a dog, but I’m concerned that the responsibility will eventually fall almost entirely on me.", facts: ["Two teenagers promise to help.", "The family lives in a flat but near a park.", "You work from home three days a week.", "The proposed dog is young and energetic.", "The family has never owned a dog."], options: ["adopt", "foster first", "choose an older dog", "wait", "create a written responsibility plan"] },
];

function getTask(taskId) {
  return TASKS.find((task) => task.id === taskId) || TASKS[0];
}

function taskCanon(task) {
  return [...task.facts, `Possible options include: ${task.options.join(", ")}.`].map((fact) => `- ${fact}`).join("\n");
}

function buildTaskInstructions(task, concise = false) {
  return `You are the person with this dilemma in a Trinity ISE II Collaborative Task: ${task.opening}
Stay in first person and use clear, natural English for B2 learners.

LEVEL PROFILE
${task.level === 1 ? "- Level 1: keep language concrete, clear and accessible while remaining natural." : "- Level 2: use slightly richer B2 language, nuanced reactions and qualified opinions about trade-offs, consequences and uncertainty."}
- Never become academic, wordy or harder to understand merely to signal difficulty.

FIXED CANON — NEVER CHANGE OR CONTRADICT
${taskCanon(task)}

CONTROLLED IMPROVISATION
- You may improvise one minor everyday detail when it directly helps answer the student: timing, wording, routine, preference, emotion or a small practical plan.
- Once introduced, that detail becomes true for this conversation. Read the transcript and preserve continuity.
- You may occasionally introduce one relevant option after genuine uncertainty or a stall, but never offer several routes and never repeatedly carry the interaction.
- Never invent consequential events such as threats, crime, children, illness, eviction, police involvement or legal action unless the fixed canon requires them.
- Do not assert demographics, motives or other consequential details not established in the canon or transcript.

RULES
- Speak only English and address the student's latest completed contribution directly.
- Give exactly one short sentence of no more than 16 words${concise ? "; output only the words to be spoken" : ""}.
- Use natural contractions and varied conversational wording; do not repeat an examiner sentence from the transcript.
- Ask no leading or topic-changing question. One brief reactive question after a volunteered personal experience is allowed.
- Usually follow the student's lead; limited initiative is allowed when it sounds natural.
- Reveal or improvise no more than one relevant detail in a turn.
- Never teach, correct, praise, summarise or announce that the task has ended.
- If the student only repeats, hesitates, says OK or leaves a thought unfinished, reveal no information.
- Never contradict the fixed canon or an improvised detail already established in the transcript.`;
}

const EXAMINER_INSTRUCTIONS = `You are the examiner in a Trinity ISE II Collaborative Task practice simulation.

You are a person with this dilemma: ${TASK_OPENING}
Stay in first person. The student must carry and develop the conversation.

FIXED CANON — NEVER CHANGE OR CONTRADICT
- The neighbours moved in three months ago.
- They seem friendly during the day, but you are not friends.
- They play loud music two or three nights a week, often until after midnight.
- You start office work early and the noise is affecting your sleep and concentration.
- You spoke to them once. They apologised, but the noise continued.
- You are considering speaking to them again, leaving a polite written message, contacting the landlord, or making a formal complaint.
- You dislike confrontation and do not want a hostile relationship.
- You rent a flat in a small building, and the neighbours live next door on the same floor.
- The walls are thin, and the bass is especially noticeable in your bedroom.
- You have tried closing the windows and using earplugs, but neither solves the problem.
- You normally contact the landlord by email about practical matters.
- The landlord has always been polite and usually replies within a few days, but you are not close.
- As far as you know, no other neighbour has made a complaint.

CONTROLLED IMPROVISATION
- You may improvise one minor everyday detail when it directly helps answer the student: timing, wording, routine, preference, emotion or a small practical plan.
- Once you introduce a detail, treat it as true for the rest of this conversation and remain consistent with the transcript.
- You may occasionally introduce one relevant option after genuine uncertainty or a stall, but never several options at once and never repeatedly rescue the student.
- Never invent consequential events such as threats, crime, children, illness, eviction, police involvement or legal action.
- Do not claim certainty about the neighbours' age, motives, schedule or whether anyone else has complained.

ABSOLUTE RULES
- Speak only English and answer the student's completed contribution directly.
- Give one short sentence only. Prefer 5–12 words unless a direct answer genuinely requires more.
- Ask no leading or topic-changing questions. After the student volunteers a personal experience, one brief reactive question such as “Oh, really?” is allowed.
- Do not repeatedly rescue, prompt, teach, correct, praise, summarise or suggest what to say.
- Never announce or imply that the task has ended. Only the application controls the ending.
- If the student shows empathy or briefly shares a similar experience, acknowledge it naturally in 2–6 words without adding information.
- If the student only repeats, hesitates, says “OK”, or leaves a thought unfinished, do not reveal any information.
- If the interaction repeatedly stalls, you may say “I’m still not sure what to do.” Do not add anything else.
- Do not interpret or complete unfinished language.
- Speak clearly and naturally for B2 English learners.
- Answer only what the student actually asked or developed.
- Reveal or improvise no more than one relevant detail in a turn.
- Usually follow the student's lead; limited initiative is allowed when it sounds natural.
- Never contradict the fixed canon or an improvised detail already established in the transcript.`;

const FEEDBACK_INSTRUCTIONS = `You are an expert speaking coach for the current Trinity ISE II Collaborative Task.
Assess only the supplied transcript. Explain everything in clear Spanish; keep corrections and suggested candidate language in English.
Be supportive but completely honest. Do not award an official Trinity score or promise a pass.

MOBILE FORMAT
- Never use tables or columns.
- Use concise headings, short paragraphs, bullets and stacked correction blocks.
- Do not repeat the same criticism in several sections.

Include:
1. RESULTADO GENERAL: independent, partly developed, or well below ISE II expectations, and why.
2. LO QUE SÍ HICISTE BIEN: genuine strengths with exact examples.
3. TRES PRIORIDADES: exactly three high-impact improvements.
4. CORRECCIONES DEL INGLÉS: maximum five stacked examples using Dijiste / Corrección / Versión B2 / Por qué. Distinguish errors, unnatural language and correct but basic language.
5. PRONUNCIACIÓN E INTELIGIBILIDAD: be cautious because the transcript may normalise audio.
6. OPORTUNIDADES PERDIDAS: exact moments and useful English alternatives.
7. UNA RUTA MEJOR: a short situation-specific route, not a complete script.
8. OBJETIVOS PARA EL INTENTO 2: exactly three observable targets.
9. FRASES ÚTILES: 6–10 English options grouped by relevant Trinity functions.

FAIRNESS
- Do not say the examiner supported the interaction unless the examiner actually asked rescue questions or supplied routes.
- Treat “I’m still not sure what to do” and “I can’t decide what would be best” as minimal examiner prompting, not as supplied conversational routes.
- Treat “What do you think I should do?” as a limited examiner rescue question and mention that support fairly.
- Do not count a brief reactive “Oh, really?” after a volunteered personal experience as examiner rescue support.
- If the examiner occasionally introduced one relevant option, note it accurately but do not automatically treat the whole interaction as examiner-led.
- Short student turns show limited development, not automatically examiner support.
- Do not invent quotations or correct a sentence that was already correct.
- Judge relevance in context, not in isolation.`;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json; charset=utf-8" } });
}

async function createSession(request, env) {
  if (!env.OPENAI_API_KEY) return json({ error: "OPENAI_API_KEY is not configured." }, 500);
  const sdp = await request.text();
  if (!sdp) return json({ error: "Missing WebRTC offer." }, 400);
  const task = getTask(new URL(request.url).searchParams.get("task"));

  const session = {
    type: "realtime",
    model: "gpt-realtime-2.1",
    instructions: buildTaskInstructions(task),
    output_modalities: ["audio"],
    max_output_tokens: 1000,
    audio: {
      input: {
        transcription: { model: "gpt-4o-mini-transcribe", language: "en" },
        turn_detection: { type: "server_vad", threshold: 0.5, prefix_padding_ms: 300, silence_duration_ms: 650, create_response: false, interrupt_response: false },
      },
      output: { voice: "marin" },
    },
  };

  const form = new FormData();
  form.set("sdp", sdp);
  form.set("session", JSON.stringify(session));
  const response = await fetch("https://api.openai.com/v1/realtime/calls", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "OpenAI-Safety-Identifier": "simply-english-prototype" },
    body: form,
  });
  const body = await response.text();
  if (!response.ok) return json({ error: "Could not start the voice session.", details: body }, response.status);
  return new Response(body, { status: 200, headers: { "Content-Type": "application/sdp" } });
}

function extractOutputText(payload) {
  if (typeof payload?.output_text === "string") return payload.output_text;
  return (payload?.output || []).flatMap((item) => item.content || []).filter((part) => part.type === "output_text").map((part) => part.text || "").join("\n");
}

async function createFeedback(request, env) {
  if (!env.OPENAI_API_KEY) return json({ error: "OPENAI_API_KEY is not configured." }, 500);
  const { transcript, taskId } = await request.json();
  if (!transcript?.trim()) return json({ error: "There is no transcript to assess." }, 400);
  const task = getTask(taskId);
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4.1-mini", max_output_tokens: 1800, instructions: FEEDBACK_INSTRUCTIONS, input: `Level: ${task.level}\nTask: ${task.title}\nOpening: ${task.opening}\n\nComplete practice transcript:\n\n${transcript}` }),
  });
  const payload = await response.json();
  if (!response.ok) return json({ error: "Could not generate feedback." }, response.status);
  return json({ feedback: extractOutputText(payload) });
}

const CONTROLLED_EXAMINER_INSTRUCTIONS = `Write exactly one reply for the examiner in a Trinity ISE II Collaborative Task.
The examiner is the person with the noisy-neighbour dilemma. Stay in first person and use natural English.

FIXED CANON — NEVER CHANGE OR CONTRADICT
- The neighbours moved in three months ago.
- They seem friendly during the day, but the examiner is not friends with them.
- Their age is unknown. Never describe them as young or old.
- They play loud music two or three nights a week, often until after midnight.
- The examiner starts office work early; sleep and concentration are affected.
- The examiner spoke to them once. They apologised, but the noise continued.
- Possible options are speaking again, a polite written message, contacting the landlord, or a formal complaint.
- The examiner dislikes confrontation and wants to avoid hostility.
- The examiner rents a flat in a small building; the noisy neighbours live next door on the same floor.
- The walls are thin, and the bass is especially noticeable in the examiner's bedroom.
- Closing the windows and using earplugs have not solved the problem.
- The examiner normally contacts the landlord by email about practical matters.
- The landlord has always been polite and usually replies within a few days, but they are not close.
- The examiner does not know whether anyone else has complained.

CONTROLLED IMPROVISATION
- You may improvise one minor everyday detail when it directly helps answer the latest contribution: timing, wording, routine, preference, emotion or a small practical plan.
- Once introduced, that detail becomes true for this conversation. Read the transcript and preserve continuity.
- You may occasionally introduce one relevant option after genuine uncertainty or a stall, but never offer several routes and never repeatedly carry the interaction.
- Never invent consequential events such as threats, crime, children, illness, eviction, police involvement or legal action.
- Keep unknowns unknown: do not assert the neighbours' age, motives, schedule or whether anyone else has complained.

RULES
- Output only the words to be spoken: no label, quotation marks or explanation.
- Use one short sentence of no more than 16 words.
- Address only the student's latest contribution.
- Never ask a leading or topic-changing question, teach, praise, correct, rescue or provide a conversational route.
- After the student volunteers a personal experience, one brief reactive question such as “Oh, really?” is allowed.
- Never contradict the fixed canon or a detail already established in the transcript.
- Infer the student's communicative intent from their actual words; the supplied turn type is only a hint.
- Use natural contractions and varied conversational wording. Avoid stock replies and do not repeat an examiner sentence already used in the transcript.
- “That might be worth trying” is allowed, but use it at most once in the complete conversation.
- If the contribution is ambiguous, respond cautiously without inventing a fact or conversational route.
- For a question: answer it directly with at most one fact or one safe minor improvised detail.
- For advice: respond naturally with one agreement, reservation, preference or minor plan.
- For a developed comment: acknowledge it naturally and, when useful, add one consistent reaction.
- For empathy: acknowledge it naturally in 2–6 words; add no fact.`;

function cleanControlledReply(text, mode, transcript = "") {
  const fallbacks = ["I’d have to think about that.", "I’m not completely sure about that.", "That might be worth trying."];
  const used = String(transcript).toLowerCase();
  const fallback = mode === "empathy" ? "Thank you, I appreciate that." : mode === "experience" ? "Oh, really?" : fallbacks.find((item) => !used.includes(item.toLowerCase())) || "I’m still uncertain about that.";
  const reply = String(text || "").replace(/^[\s“”"']+|[\s“”"']+$/g, "").split(/\r?\n/)[0].trim();
  const recentExaminerReplies = String(transcript).split(/\r?\n/).filter((line) => line.startsWith("Examiner: ")).slice(-4).map((line) => line.slice(10).trim().toLowerCase());
  const repeatedStockReply = reply.toLowerCase() === "that might be worth trying." && used.includes("that might be worth trying.");
  if (!reply || reply.split(/\s+/).length > 16 || /^(examiner|reply)\s*:/i.test(reply) || reply.includes("?") || repeatedStockReply || recentExaminerReplies.includes(reply.toLowerCase())) return fallback;
  return reply;
}

async function generateControlledReply({ latest, mode, transcript, supportIndex, taskId }, env) {
  if (mode === "nudge") {
    const nudges = ["I’m still not sure what to do.", "I can’t decide what would be best.", "What do you think I should do?"];
    return nudges[Math.min(Math.max(Number(supportIndex || 1) - 1, 0), nudges.length - 1)];
  }
  const compact = String(latest || "").toLowerCase().replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
  if (mode === "empathy") {
    if (/understand|understandable|see how you feel/.test(compact)) return "Thank you, I appreciate that.";
    if (/similar|same problem|happened to me/.test(compact)) return "I’m sorry you went through that.";
    return "Yes, it really is.";
  }
  if (mode === "experience") {
    if (/helped|worked|made things better|solved/.test(compact)) return "I see—that helped you.";
    return "Oh, really?";
  }
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      max_output_tokens: 60,
      instructions: buildTaskInstructions(getTask(taskId), true),
      input: `Turn type hint: ${mode}\nLatest student contribution: ${latest}\n\nConversation so far (avoid repeating examiner wording):\n${String(transcript || "").slice(-5000)}`,
    }),
  });
  const raw = await response.text();
  let payload;
  try { payload = JSON.parse(raw); } catch { throw new Error(`Examiner text service returned ${response.status}.`); }
  if (!response.ok) throw new Error(payload?.error?.message || "Could not prepare the examiner reply.");
  return cleanControlledReply(extractOutputText(payload), mode, transcript);
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary);
}

async function synthesiseSpeech(text, env) {
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini-tts",
      voice: "marin",
      input: text,
      instructions: "Speak clearly and naturally for B2 English learners. Use a slightly slower-than-normal conversational pace, short natural pauses, and clear pronunciation. Keep the delivery warm and human. Do not over-enunciate, stretch words, or use robotic pauses.",
      response_format: "mp3",
      speed: 1.0,
    }),
  });
  if (!response.ok) throw new Error("Could not create the examiner audio.");
  return arrayBufferToBase64(await response.arrayBuffer());
}

async function createControlledExaminerTurn(request, env) {
  if (!env.OPENAI_API_KEY) return json({ error: "OPENAI_API_KEY is not configured." }, 500);
  const body = await request.json();
  const task = getTask(body.taskId);
  const reply = body.opening ? task.opening : await generateControlledReply(body, env);
  const audio = await synthesiseSpeech(reply, env);
  return json({ reply, audio, contentType: "audio/mpeg" });
}

const CLIENT_TASKS = TASKS.map(({ id, level, number, title, opening }) => ({ id, level, number, title, opening }));

const HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Simply English | Trinity ISE II Coach</title>
<style>
:root{--ink:#0F1722;--ocean:#41788B;--mist:#8CB8BA;--coral:#E47162;--paper:#FFFFFA;--muted:#66727a}*{box-sizing:border-box}html{background:var(--paper)}body{margin:0;color:var(--ink);background:radial-gradient(circle at 10% 5%,rgba(140,184,186,.22),transparent 25rem),radial-gradient(circle at 92% 28%,rgba(228,113,98,.10),transparent 22rem),var(--paper);font-family:Manrope,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}button{font:inherit}main{width:min(760px,100%);margin:0 auto;padding:24px 18px 72px}.hero{padding:8px 4px 24px}.brand-logo{display:block;width:96px;height:96px;object-fit:cover;border-radius:50%;margin-bottom:16px;box-shadow:0 8px 24px rgba(15,23,34,.08)}.eyebrow{color:var(--ocean);font-size:.76rem;font-weight:800;letter-spacing:.12em;margin:8px 0}h1{font-size:clamp(2rem,8vw,3.6rem);line-height:.98;letter-spacing:-.045em;margin:10px 0 18px}h2{font-size:1.12rem;margin:5px 0}.intro{color:var(--muted);line-height:1.55;max-width:38rem}.card{background:rgba(255,255,255,.94);border:1px solid rgba(65,120,139,.18);border-radius:24px;box-shadow:0 18px 48px rgba(15,23,34,.08);padding:22px;margin-bottom:18px}.task-row{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.label{color:var(--coral);font-size:.72rem;font-weight:900;letter-spacing:.14em}.timer{font-variant-numeric:tabular-nums;font-size:2rem;font-weight:800;color:var(--ocean)}.timer.warning{color:var(--coral)}.status{display:flex;align-items:center;gap:10px;background:rgba(140,184,186,.16);border-radius:14px;padding:13px 15px;margin:20px 0;color:var(--ink)}.dot{width:10px;height:10px;border-radius:50%;background:#aab4b8;flex:0 0 auto}.active .dot,.opening .dot{background:var(--coral);box-shadow:0 0 0 5px rgba(228,113,98,.14)}.finished .dot,.feedback .dot{background:var(--ocean)}.error .dot{background:#b42318}.controls{display:grid;gap:10px}.button{border:0;border-radius:14px;padding:15px 18px;font-weight:800;cursor:pointer;min-height:54px}.button:disabled{opacity:.45;cursor:not-allowed}.primary,.danger{background:var(--coral);color:white}.secondary{background:var(--mist);color:var(--ink)}.disclosure{color:var(--muted);font-size:.75rem;line-height:1.45;margin:16px 2px 0}.error-box{color:#8a1c13;background:#fff0ee;padding:12px 14px;border-radius:12px}.hidden{display:none!important}.turns{display:grid;gap:12px}.turn{border-radius:16px;padding:13px 15px;max-width:90%}.turn small{display:block;font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:5px}.turn p{margin:0;line-height:1.5}.student{margin-left:auto;background:rgba(140,184,186,.18)}.examiner{background:rgba(228,113,98,.11)}.feedback-text{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65;font-size:.98rem}@media(min-width:560px){main{padding-top:36px}.controls{grid-template-columns:repeat(2,minmax(0,1fr))}.card{padding:28px}.brand-logo{width:112px;height:112px}}
.responding .dot{background:var(--ocean);animation:ackPulse 1s ease-in-out infinite}@keyframes ackPulse{0%,100%{transform:scale(.85);box-shadow:0 0 0 3px rgba(65,120,139,.12)}50%{transform:scale(1.15);box-shadow:0 0 0 8px rgba(65,120,139,.18)}}
.level-grid,.task-list{display:grid;gap:12px;margin-top:18px}.level-card,.task-choice{width:100%;text-align:left;border:1px solid rgba(65,120,139,.2);background:white;border-radius:18px;padding:18px;cursor:pointer;color:var(--ink)}.level-card:hover,.task-choice:hover{border-color:var(--ocean);transform:translateY(-1px)}.level-card strong,.task-choice strong{display:block;font-size:1.05rem}.level-card span,.task-choice span{display:block;color:var(--muted);font-size:.86rem;line-height:1.45;margin-top:5px}.level-card[disabled]{cursor:not-allowed;opacity:.58;transform:none}.back-button{border:0;background:transparent;color:var(--ocean);font-weight:800;padding:4px 0 12px;cursor:pointer}.practice-back{margin-top:10px;width:100%}@media(min-width:560px){.level-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style></head><body><main>
<section class="hero"><img class="brand-logo" src="/simply-english-logo.jpeg" alt="Simply English"><p class="eyebrow">TRINITY ISE II VOICE COACH</p><h1>Collaborative Task · Prototype</h1><p class="intro">A four-minute voice practice with patient turn detection and written feedback in Spanish.</p></section>
<section id="levelChooser" class="card"><p class="eyebrow">CHOOSE YOUR LEVEL</p><h2>What would you like to practise?</h2><div class="level-grid"><button id="level1" class="level-card"><strong>Level 1</strong><span>Core practice · 10 familiar, concrete situations</span></button><button id="level2" class="level-card"><strong>Level 2</strong><span>Challenge practice · 10 more complex situations</span></button></div></section>
<section id="taskChooser" class="card hidden"><button id="backToLevels" class="back-button">← Back to levels</button><p id="taskLevelHeading" class="eyebrow">LEVEL 1 · CORE PRACTICE</p><h2>Choose a collaborative task</h2><div id="taskList" class="task-list"></div></section>
<section id="practiceCard" class="card hidden"><div class="task-row"><div><span id="levelLabel" class="label">LEVEL 1</span><h2 id="taskTitle">Choose a task</h2></div><div id="timer" class="timer">4:00</div></div><div id="status" class="status ready"><span class="dot"></span><span id="statusText">Ready to begin</span></div><p id="error" class="error-box hidden"></p><div class="controls"><button id="start" class="button primary">Start task</button><button id="finish" class="button danger hidden">Finish task</button><button id="getFeedback" class="button primary hidden">Get my feedback</button><button id="repeat" class="button secondary hidden">Repeat the same task</button></div><button id="chooseTask" class="button secondary practice-back">Choose another task</button><p class="disclosure">The examiner voice is AI-generated. Your microphone is used only during this practice session.</p></section>
<section id="transcriptCard" class="card hidden"><h2>Conversation transcript</h2><div id="turns" class="turns"></div></section>
<section id="feedbackCard" class="card hidden"><p class="eyebrow">COACHING REPORT</p><div id="feedback" class="feedback-text"></div></section>
</main><script>
const TASKS=${JSON.stringify(CLIENT_TASKS)},TOTAL=240;let selectedTask=null,status='ready',remaining=TOTAL,turns=[],pc=null,dc=null,timerId=null,openingPending=false,micTracks=[],weakTurnCount=0,supportCount=0,audioContext=null,turnInFlight=false;
const el=id=>document.getElementById(id);const labels={ready:'Ready to begin',connecting:'Connecting microphone…',opening:'Listen to the examiner’s opening',active:'Your task is in progress',responding:'✓ Answer received — examiner is responding…',finished:'Task finished — your transcript is ready',feedback:'Preparing your feedback…',error:'Something went wrong'};
function setStatus(s){status=s;el('status').className='status '+s;el('statusText').textContent=labels[s]||s;el('start').classList.toggle('hidden',!['ready','error'].includes(s));el('finish').classList.toggle('hidden',!['connecting','opening','active','responding'].includes(s));el('getFeedback').classList.toggle('hidden',s!=='finished');el('repeat').classList.toggle('hidden',!(s==='finished'||(s==='feedback'&&el('feedback').textContent)));el('chooseTask').disabled=['connecting','opening','active','responding'].includes(s)}
function showLevels(){stopConnection();selectedTask=null;el('levelChooser').classList.remove('hidden');el('taskChooser').classList.add('hidden');el('practiceCard').classList.add('hidden');el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden')}
function showTasks(level=selectedTask?.level||1){stopConnection();selectedTask=null;el('taskLevelHeading').textContent='LEVEL '+level+' · '+(level===1?'CORE PRACTICE':'CHALLENGE PRACTICE');renderTasks(level);el('levelChooser').classList.add('hidden');el('practiceCard').classList.add('hidden');el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden');el('taskChooser').classList.remove('hidden')}
function selectTask(task){selectedTask=task;el('taskTitle').textContent='Task '+task.number+' · '+task.title;el('levelLabel').textContent='LEVEL '+task.level;el('taskChooser').classList.add('hidden');el('practiceCard').classList.remove('hidden');remaining=TOTAL;updateTimer();setStatus('ready')}
function renderTasks(level){el('taskList').textContent='';TASKS.filter(task=>task.level===level).forEach(task=>{const button=document.createElement('button');button.className='task-choice';const title=document.createElement('strong');title.textContent='Task '+task.number+' · '+task.title;button.append(title);button.onclick=()=>selectTask(task);el('taskList').appendChild(button)})}
function showError(message){el('error').textContent=message;el('error').classList.remove('hidden');setStatus('error')}
function updateTimer(){el('timer').textContent=Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');el('timer').classList.toggle('warning',remaining<=30&&status==='active')}
function stopConnection(){if(timerId)clearInterval(timerId);timerId=null;if(dc)dc.close();if(pc){pc.getSenders().forEach(s=>s.track&&s.track.stop());pc.close()}if(audioContext)audioContext.close();dc=null;pc=null;micTracks=[];audioContext=null;turnInFlight=false}
function finishTask(){stopConnection();remaining=0;updateTimer();el('transcriptCard').classList.remove('hidden');setStatus('finished')}
function beginTimer(){if(timerId)return;setStatus('active');timerId=setInterval(()=>{remaining--;updateTimer();if(remaining<=0)finishTask()},1000)}
function addTurn(role,text){if(!text.trim())return;turns.push({role,text});const box=document.createElement('div');box.className='turn '+role.toLowerCase();const who=document.createElement('small');who.textContent=role;const p=document.createElement('p');p.textContent=text;box.append(who,p);el('turns').appendChild(box)}
function classifyStudentTurn(text){const raw=(text||'').trim();if(!raw)return 'weak';const words=raw.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(' ').filter(Boolean);const compact=words.join(' ');const experiences=['i had','i have had','happened to me','in my experience','my neighbour','my neighbor','similar situation','similar problem','same problem'];const outcomes=['helped','worked','solved'];if(experiences.some(phrase=>compact.includes(phrase))||outcomes.some(word=>words.includes(word)))return 'experience';const acknowledgements=['i understand','i can understand','ah i understand','ah i can understand','oh i understand','oh i can understand'];if(acknowledgements.includes(compact))return 'weak';const empathy=['how difficult','how horrible','that must be','that sounds difficult','that sounds hard','that sounds frustrating','that s understandable','that is understandable','that s difficult','that is difficult','that s terrible','that is terrible','that s awful','that is awful','very difficult','difficult situation','must be difficult','must be frustrated','must be frustrating','very frustrated','understand that','understand how you feel','understand your situation'];if(empathy.some(phrase=>compact.includes(phrase)))return 'empathy';if(raw.includes('?'))return 'context';const meaningful=['try','talk','speak','write','note','landlord','police','think','feel','problem','noise','help','option','friendly'];if(words.length>=4||meaningful.some(word=>words.includes(word)))return 'context';return 'weak'}
function transcriptText(){return turns.map(t=>t.role+': '+t.text).join('\\n')}
async function playBase64Audio(base64){const bytes=Uint8Array.from(atob(base64),c=>c.charCodeAt(0));const buffer=await audioContext.decodeAudioData(bytes.buffer);await new Promise((resolve,reject)=>{const source=audioContext.createBufferSource();source.buffer=buffer;source.connect(audioContext.destination);source.onended=resolve;try{source.start()}catch(e){reject(e)}})}
async function requestExaminerResponse(mode,latest='',opening=false,supportIndex=0){if(turnInFlight||!selectedTask)return;turnInFlight=true;micTracks.forEach(t=>t.enabled=false);if(!opening)setStatus('responding');try{const response=await fetch('/api/examiner',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({opening,mode,latest,supportIndex,taskId:selectedTask.id,transcript:transcriptText()})});const raw=await response.text();let p;try{p=JSON.parse(raw)}catch{throw new Error(raw.slice(0,200)||'Could not prepare examiner audio.')}if(!response.ok)throw new Error(p.error||'Could not prepare examiner audio.');addTurn('Examiner',p.reply);await playBase64Audio(p.audio);if(opening){openingPending=false;beginTimer()}else if(status==='responding'){setStatus('active')}}catch(e){console.error(e);el('error').textContent=e.message||'Could not prepare examiner audio.';el('error').classList.remove('hidden');if(opening){showError(e.message||'Could not prepare examiner audio.')}else{setStatus('active')}}finally{turnInFlight=false;if(status==='active')micTracks.forEach(t=>t.enabled=true)}}
function onEvent(event){if(event.type==='conversation.item.input_audio_transcription.completed'){if(openingPending||turnInFlight||status!=='active')return;const text=event.transcript||'';addTurn('Student',text);if(text.trim()){const kind=classifyStudentTurn(text);if(kind!=='weak'){weakTurnCount=0;requestExaminerResponse(kind,text)}else{weakTurnCount++;if(weakTurnCount>=2&&supportCount<3){weakTurnCount=0;supportCount++;requestExaminerResponse('nudge',text,false,supportCount)}}}}if(event.type==='error'){console.error(event);showError('The voice connection reported an error. Please try again.')}}
async function startTask(){if(!selectedTask)return;stopConnection();turns=[];weakTurnCount=0;supportCount=0;remaining=TOTAL;updateTimer();el('turns').textContent='';el('feedback').textContent='';el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden');el('error').classList.add('hidden');setStatus('connecting');try{audioContext=new (window.AudioContext||window.webkitAudioContext)();await audioContext.resume();pc=new RTCPeerConnection();const stream=await navigator.mediaDevices.getUserMedia({audio:true,echoCancellation:true,noiseSuppression:true,autoGainControl:true});micTracks=stream.getAudioTracks();micTracks.forEach(t=>t.enabled=false);stream.getTracks().forEach(t=>pc.addTrack(t,stream));dc=pc.createDataChannel('oai-events');dc.onmessage=m=>onEvent(JSON.parse(m.data));const offer=await pc.createOffer();await pc.setLocalDescription(offer);const response=await fetch('/api/session?task='+encodeURIComponent(selectedTask.id),{method:'POST',headers:{'Content-Type':'application/sdp'},body:offer.sdp});if(!response.ok){const p=await response.json();throw new Error(p.error||'Could not start session.')}await pc.setRemoteDescription({type:'answer',sdp:await response.text()});dc.onopen=()=>{setStatus('opening');openingPending=true;requestExaminerResponse('opening','',true)}}catch(e){console.error(e);stopConnection();showError(e.message||'Could not start the task.')}}
async function getFeedback(){setStatus('feedback');el('error').classList.add('hidden');try{const transcript=turns.map(t=>t.role+': '+t.text).join('\\n');const response=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({transcript,taskId:selectedTask.id})});const raw=await response.text();let p;try{p=JSON.parse(raw)}catch{throw new Error(response.ok?'The feedback service returned an unreadable response.':raw.slice(0,240)||'Could not generate feedback.')}if(!response.ok)throw new Error(p.error||p.details||'Could not generate feedback.');el('feedback').textContent=p.feedback;el('feedbackCard').classList.remove('hidden');el('statusText').textContent='Feedback ready';el('repeat').classList.remove('hidden')}catch(e){showError(e.message||'Could not generate feedback.')}}
el('level1').onclick=()=>showTasks(1);el('level2').onclick=()=>showTasks(2);el('backToLevels').onclick=showLevels;el('chooseTask').onclick=()=>showTasks(selectedTask?.level||1);el('start').onclick=startTask;el('finish').onclick=finishTask;el('getFeedback').onclick=getFeedback;el('repeat').onclick=startTask;updateTimer();setStatus('ready');showLevels();
</script></body></html>`;

export async function handleRequest(request, env) {
    const url = new URL(request.url);
    try {
      if (request.method === "POST" && url.pathname === "/api/session") return await createSession(request, env);
      if (request.method === "POST" && url.pathname === "/api/examiner") return await createControlledExaminerTurn(request, env);
      if (request.method === "POST" && url.pathname === "/api/feedback") return await createFeedback(request, env);
      if (url.pathname === "/favicon.ico") return new Response(null, { status: 204 });
      if (request.method === "GET") return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
      return new Response("Not found", { status: 404 });
    } catch (error) {
      console.error(error);
      return json({ error: error?.message || "Unexpected server error." }, 500);
    }
}

export default {
  fetch: handleRequest,
};
