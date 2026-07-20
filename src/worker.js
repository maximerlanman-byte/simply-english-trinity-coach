const TASK_OPENING = "My new neighbours regularly make noise late at night, but I don’t want to create a bad relationship with them.";

const EXAMINER_INSTRUCTIONS = `You are the examiner in a Trinity ISE II Collaborative Task practice simulation.

You are a person with this dilemma: ${TASK_OPENING}
Stay in first person. The student must carry and develop the conversation.

HIDDEN FACTS
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

ABSOLUTE RULES
- Speak only English and answer the student's completed contribution directly.
- Give one short sentence only. Prefer 5–12 words unless a direct answer genuinely requires more.
- Ask no leading or topic-changing questions. After the student volunteers a personal experience, one brief reactive question such as “Oh, really?” is allowed.
- Never rescue, prompt, teach, correct, praise, summarise or suggest what to say.
- Never announce or imply that the task has ended. Only the application controls the ending.
- If the student shows empathy or briefly shares a similar experience, acknowledge it naturally in 2–6 words without adding information.
- If the student only repeats, hesitates, says “OK”, or leaves a thought unfinished, do not reveal any information.
- If the interaction repeatedly stalls, you may say “I’m still not sure what to do.” Do not add anything else.
- Do not interpret or complete unfinished language.
- Speak clearly and naturally for B2 English learners.
- Answer only what the student actually asked or developed.
- Reveal no more than one relevant hidden fact in a turn.
- Never volunteer another fact, option, explanation or conversational route merely to keep the interaction moving.
- Never contradict the hidden facts.`;

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

  const session = {
    type: "realtime",
    model: "gpt-realtime-2.1",
    instructions: EXAMINER_INSTRUCTIONS,
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
  const { transcript } = await request.json();
  if (!transcript?.trim()) return json({ error: "There is no transcript to assess." }, 400);
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4.1-mini", max_output_tokens: 1800, instructions: FEEDBACK_INSTRUCTIONS, input: `Complete practice transcript:\n\n${transcript}` }),
  });
  const payload = await response.json();
  if (!response.ok) return json({ error: "Could not generate feedback." }, response.status);
  return json({ feedback: extractOutputText(payload) });
}

const CONTROLLED_EXAMINER_INSTRUCTIONS = `Write exactly one reply for the examiner in a Trinity ISE II Collaborative Task.
The examiner is the person with the noisy-neighbour dilemma. Stay in first person and use natural English.

AUTHORITATIVE FACTS
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

RULES
- Output only the words to be spoken: no label, quotation marks or explanation.
- Use one short sentence of no more than 16 words.
- Address only the student's latest contribution.
- Never ask a leading or topic-changing question, teach, praise, correct, rescue or provide a conversational route.
- After the student volunteers a personal experience, one brief reactive question such as “Oh, really?” is allowed.
- Never invent, contradict, combine or volunteer facts.
- For a question: answer it directly with at most one requested fact.
- For advice: only agree, disagree or express one reservation; add no fact.
- For a developed comment: acknowledge that exact comment briefly; add no fact.
- For empathy: acknowledge it naturally in 2–6 words; add no fact.`;

function cleanControlledReply(text, mode) {
  const fallback = mode === "empathy" ? "Thank you, I appreciate that." : mode === "experience" ? "Oh, really?" : mode === "advice" ? "I’m not sure that would be best." : mode === "comment" ? "Yes, I understand." : "I’m not sure.";
  const reply = String(text || "").replace(/^[\s“”"']+|[\s“”"']+$/g, "").split(/\r?\n/)[0].trim();
  if (!reply || reply.split(/\s+/).length > 16 || /^(examiner|reply)\s*:/i.test(reply)) return fallback;
  return reply;
}

async function generateControlledReply({ latest, mode, transcript, supportIndex }, env) {
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
  if (mode === "advice") {
    if (/note|message|write/.test(compact) && /enough/.test(compact)) return "I’m not sure a note would be enough.";
    if (/cookie|cake|gift/.test(compact)) return "Talking might help, but bringing something could feel awkward.";
    if (/talk|speak/.test(compact) && /again|one more/.test(compact)) return "Yes, I could try speaking to them again.";
    if (/note|message|write/.test(compact)) return "A polite message might be worth trying.";
    if (/landlord/.test(compact)) return "I’m not sure I’m ready for that.";
    if (/complain|complaint|police/.test(compact)) return "That feels a little too confrontational for me.";
    return "That might be worth trying.";
  }
  if (mode === "question") {
    if (/what.*(say|tell)|how.*(say|explain)/.test(compact)) return "I could politely explain that the noise is affecting my sleep.";
    if (/(relationship|know|get on).*(landlord)|(landlord).*(relationship|know|get on)/.test(compact)) return "We’re not close, but our contact has always been polite.";
  }
  if (mode === "comment") {
    if (/sounds good|good idea|that could work|might work/.test(compact)) return "Yes, I think so too.";
  }
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      max_output_tokens: 60,
      instructions: CONTROLLED_EXAMINER_INSTRUCTIONS,
      input: `Turn type: ${mode}\nLatest student contribution: ${latest}\n\nConversation so far:\n${String(transcript || "").slice(-5000)}`,
    }),
  });
  const raw = await response.text();
  let payload;
  try { payload = JSON.parse(raw); } catch { throw new Error(`Examiner text service returned ${response.status}.`); }
  if (!response.ok) throw new Error(payload?.error?.message || "Could not prepare the examiner reply.");
  return cleanControlledReply(extractOutputText(payload), mode);
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
  const reply = body.opening ? TASK_OPENING : await generateControlledReply(body, env);
  const audio = await synthesiseSpeech(reply, env);
  return json({ reply, audio, contentType: "audio/mpeg" });
}

const HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Simply English | Trinity ISE II Coach</title>
<style>
:root{--ink:#0F1722;--ocean:#41788B;--mist:#8CB8BA;--coral:#E47162;--paper:#FFFFFA;--muted:#66727a}*{box-sizing:border-box}html{background:var(--paper)}body{margin:0;color:var(--ink);background:radial-gradient(circle at 10% 5%,rgba(140,184,186,.22),transparent 25rem),radial-gradient(circle at 92% 28%,rgba(228,113,98,.10),transparent 22rem),var(--paper);font-family:Manrope,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}button{font:inherit}main{width:min(760px,100%);margin:0 auto;padding:24px 18px 72px}.hero{padding:8px 4px 24px}.brand-logo{display:block;width:96px;height:96px;object-fit:cover;border-radius:50%;margin-bottom:16px;box-shadow:0 8px 24px rgba(15,23,34,.08)}.eyebrow{color:var(--ocean);font-size:.76rem;font-weight:800;letter-spacing:.12em;margin:8px 0}h1{font-size:clamp(2rem,8vw,3.6rem);line-height:.98;letter-spacing:-.045em;margin:10px 0 18px}h2{font-size:1.12rem;margin:5px 0}.intro{color:var(--muted);line-height:1.55;max-width:38rem}.card{background:rgba(255,255,255,.94);border:1px solid rgba(65,120,139,.18);border-radius:24px;box-shadow:0 18px 48px rgba(15,23,34,.08);padding:22px;margin-bottom:18px}.task-row{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.label{color:var(--coral);font-size:.72rem;font-weight:900;letter-spacing:.14em}.timer{font-variant-numeric:tabular-nums;font-size:2rem;font-weight:800;color:var(--ocean)}.timer.warning{color:var(--coral)}.status{display:flex;align-items:center;gap:10px;background:rgba(140,184,186,.16);border-radius:14px;padding:13px 15px;margin:20px 0;color:var(--ink)}.dot{width:10px;height:10px;border-radius:50%;background:#aab4b8;flex:0 0 auto}.active .dot,.opening .dot{background:var(--coral);box-shadow:0 0 0 5px rgba(228,113,98,.14)}.finished .dot,.feedback .dot{background:var(--ocean)}.error .dot{background:#b42318}.controls{display:grid;gap:10px}.button{border:0;border-radius:14px;padding:15px 18px;font-weight:800;cursor:pointer;min-height:54px}.button:disabled{opacity:.45;cursor:not-allowed}.primary,.danger{background:var(--coral);color:white}.secondary{background:var(--mist);color:var(--ink)}.disclosure{color:var(--muted);font-size:.75rem;line-height:1.45;margin:16px 2px 0}.error-box{color:#8a1c13;background:#fff0ee;padding:12px 14px;border-radius:12px}.hidden{display:none!important}.turns{display:grid;gap:12px}.turn{border-radius:16px;padding:13px 15px;max-width:90%}.turn small{display:block;font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:5px}.turn p{margin:0;line-height:1.5}.student{margin-left:auto;background:rgba(140,184,186,.18)}.examiner{background:rgba(228,113,98,.11)}.feedback-text{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65;font-size:.98rem}@media(min-width:560px){main{padding-top:36px}.controls{grid-template-columns:repeat(2,minmax(0,1fr))}.card{padding:28px}.brand-logo{width:112px;height:112px}}
.responding .dot{background:var(--ocean);animation:ackPulse 1s ease-in-out infinite}@keyframes ackPulse{0%,100%{transform:scale(.85);box-shadow:0 0 0 3px rgba(65,120,139,.12)}50%{transform:scale(1.15);box-shadow:0 0 0 8px rgba(65,120,139,.18)}}
</style></head><body><main>
<section class="hero"><img class="brand-logo" src="/simply-english-logo.jpeg" alt="Simply English"><p class="eyebrow">TRINITY ISE II VOICE COACH</p><h1>Collaborative Task · Prototype</h1><p class="intro">A four-minute voice practice with patient turn detection and written feedback in Spanish.</p></section>
<section class="card"><div class="task-row"><div><span class="label">PACK 1</span><h2>Task 1 · Noisy neighbours</h2></div><div id="timer" class="timer">4:00</div></div><div id="status" class="status ready"><span class="dot"></span><span id="statusText">Ready to begin</span></div><p id="error" class="error-box hidden"></p><div class="controls"><button id="start" class="button primary">Start Task 1</button><button id="finish" class="button danger hidden">Finish task</button><button id="getFeedback" class="button primary hidden">Get my feedback</button><button id="repeat" class="button secondary hidden">Repeat the same task</button></div><p class="disclosure">The examiner voice is AI-generated. Your microphone is used only during this practice session.</p></section>
<section id="transcriptCard" class="card hidden"><h2>Conversation transcript</h2><div id="turns" class="turns"></div></section>
<section id="feedbackCard" class="card hidden"><p class="eyebrow">COACHING REPORT</p><div id="feedback" class="feedback-text"></div></section>
</main><script>
const OPENING=${JSON.stringify(TASK_OPENING)},TOTAL=240;let status='ready',remaining=TOTAL,turns=[],pc=null,dc=null,timerId=null,openingPending=false,micTracks=[],weakTurnCount=0,supportCount=0,audioContext=null,turnInFlight=false;
const el=id=>document.getElementById(id);const labels={ready:'Ready to begin',connecting:'Connecting microphone…',opening:'Listen to the examiner’s opening',active:'Your task is in progress',responding:'✓ Answer received — examiner is responding…',finished:'Task finished — your transcript is ready',feedback:'Preparing your feedback…',error:'Something went wrong'};
function setStatus(s){status=s;el('status').className='status '+s;el('statusText').textContent=labels[s]||s;el('start').classList.toggle('hidden',!['ready','error'].includes(s));el('finish').classList.toggle('hidden',!['connecting','opening','active','responding'].includes(s));el('getFeedback').classList.toggle('hidden',s!=='finished');el('repeat').classList.toggle('hidden',!(s==='finished'||(s==='feedback'&&el('feedback').textContent)));}
function showError(message){el('error').textContent=message;el('error').classList.remove('hidden');setStatus('error')}
function updateTimer(){el('timer').textContent=Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');el('timer').classList.toggle('warning',remaining<=30&&status==='active')}
function stopConnection(){if(timerId)clearInterval(timerId);timerId=null;if(dc)dc.close();if(pc){pc.getSenders().forEach(s=>s.track&&s.track.stop());pc.close()}if(audioContext)audioContext.close();dc=null;pc=null;micTracks=[];audioContext=null;turnInFlight=false}
function finishTask(){stopConnection();remaining=0;updateTimer();el('transcriptCard').classList.remove('hidden');setStatus('finished')}
function beginTimer(){if(timerId)return;setStatus('active');timerId=setInterval(()=>{remaining--;updateTimer();if(remaining<=0)finishTask()},1000)}
function addTurn(role,text){if(!text.trim())return;turns.push({role,text});const box=document.createElement('div');box.className='turn '+role.toLowerCase();const who=document.createElement('small');who.textContent=role;const p=document.createElement('p');p.textContent=text;box.append(who,p);el('turns').appendChild(box)}
function classifyStudentTurn(text){const raw=(text||'').trim();if(!raw)return 'weak';const words=raw.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(' ').filter(Boolean);const compact=words.join(' ');const experiences=['i had','i have had','happened to me','in my experience','my neighbour','my neighbor','similar situation','similar problem','same problem'];const outcomes=['helped','worked','solved'];if(experiences.some(phrase=>compact.includes(phrase))||outcomes.some(word=>words.includes(word)))return 'experience';const explicitAdvice=['maybe','perhaps','if i were','have you thought','why don t you','what about if'];if(explicitAdvice.some(phrase=>compact.includes(phrase)))return 'advice';if((compact.includes('do you think')||compact.includes('would it'))&&/(note|message|police|landlord|talk|speak|complain)/.test(compact))return 'advice';if(raw.includes('?'))return 'question';const questionStarts=new Set(['who','what','when','where','why','how','do','does','did','is','are','was','were','can','could','would','will','have','has','had']);if(questionStarts.has(words[0]))return 'question';const advice=['i think','you could','you should','you might','you need','you have to'];if(advice.some(phrase=>compact.includes(phrase)))return 'advice';const empathy=['that must be','that sounds difficult','that sounds hard','that sounds frustrating','that s understandable','that is understandable','that s difficult','that is difficult','very difficult','difficult situation','must be difficult','must be frustrated','must be frustrating','very frustrated','understand that','understand how you feel','understand your situation'];if(empathy.some(phrase=>compact.includes(phrase)))return 'empathy';const briefComments=['sounds good','good idea','that could work','might work'];if(briefComments.some(phrase=>compact.includes(phrase)))return 'comment';if(words.length>=8)return 'comment';return 'weak'}
function transcriptText(){return turns.map(t=>t.role+': '+t.text).join('\\n')}
async function playBase64Audio(base64){const bytes=Uint8Array.from(atob(base64),c=>c.charCodeAt(0));const buffer=await audioContext.decodeAudioData(bytes.buffer);await new Promise((resolve,reject)=>{const source=audioContext.createBufferSource();source.buffer=buffer;source.connect(audioContext.destination);source.onended=resolve;try{source.start()}catch(e){reject(e)}})}
async function requestExaminerResponse(mode,latest='',opening=false,supportIndex=0){if(turnInFlight)return;turnInFlight=true;micTracks.forEach(t=>t.enabled=false);if(!opening)setStatus('responding');try{const response=await fetch('/api/examiner',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({opening,mode,latest,supportIndex,transcript:transcriptText()})});const raw=await response.text();let p;try{p=JSON.parse(raw)}catch{throw new Error(raw.slice(0,200)||'Could not prepare examiner audio.')}if(!response.ok)throw new Error(p.error||'Could not prepare examiner audio.');addTurn('Examiner',p.reply);await playBase64Audio(p.audio);if(opening){openingPending=false;beginTimer()}else if(status==='responding'){setStatus('active')}}catch(e){console.error(e);el('error').textContent=e.message||'Could not prepare examiner audio.';el('error').classList.remove('hidden');if(opening){showError(e.message||'Could not prepare examiner audio.')}else{setStatus('active')}}finally{turnInFlight=false;if(status==='active')micTracks.forEach(t=>t.enabled=true)}}
function onEvent(event){if(event.type==='conversation.item.input_audio_transcription.completed'){if(openingPending||turnInFlight||status!=='active')return;const text=event.transcript||'';addTurn('Student',text);if(text.trim()){const kind=classifyStudentTurn(text);if(kind==='question'||kind==='advice'||kind==='comment'||kind==='experience'){weakTurnCount=0;requestExaminerResponse(kind,text)}else if(kind==='empathy'){weakTurnCount=0;requestExaminerResponse('empathy',text)}else{weakTurnCount++;if(weakTurnCount>=2&&supportCount<3){weakTurnCount=0;supportCount++;requestExaminerResponse('nudge',text,false,supportCount)}}}}if(event.type==='error'){console.error(event);showError('The voice connection reported an error. Please try again.')}}
async function startTask(){stopConnection();turns=[];weakTurnCount=0;supportCount=0;remaining=TOTAL;updateTimer();el('turns').textContent='';el('feedback').textContent='';el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden');el('error').classList.add('hidden');setStatus('connecting');try{audioContext=new (window.AudioContext||window.webkitAudioContext)();await audioContext.resume();pc=new RTCPeerConnection();const stream=await navigator.mediaDevices.getUserMedia({audio:true,echoCancellation:true,noiseSuppression:true,autoGainControl:true});micTracks=stream.getAudioTracks();micTracks.forEach(t=>t.enabled=false);stream.getTracks().forEach(t=>pc.addTrack(t,stream));dc=pc.createDataChannel('oai-events');dc.onmessage=m=>onEvent(JSON.parse(m.data));const offer=await pc.createOffer();await pc.setLocalDescription(offer);const response=await fetch('/api/session',{method:'POST',headers:{'Content-Type':'application/sdp'},body:offer.sdp});if(!response.ok){const p=await response.json();throw new Error(p.error||'Could not start session.')}await pc.setRemoteDescription({type:'answer',sdp:await response.text()});dc.onopen=()=>{setStatus('opening');openingPending=true;requestExaminerResponse('opening','',true)}}catch(e){console.error(e);stopConnection();showError(e.message||'Could not start the task.')}}
async function getFeedback(){setStatus('feedback');el('error').classList.add('hidden');try{const transcript=turns.map(t=>t.role+': '+t.text).join('\\n');const response=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({transcript})});const raw=await response.text();let p;try{p=JSON.parse(raw)}catch{throw new Error(response.ok?'The feedback service returned an unreadable response.':raw.slice(0,240)||'Could not generate feedback.')}if(!response.ok)throw new Error(p.error||p.details||'Could not generate feedback.');el('feedback').textContent=p.feedback;el('feedbackCard').classList.remove('hidden');el('statusText').textContent='Feedback ready';el('repeat').classList.remove('hidden')}catch(e){showError(e.message||'Could not generate feedback.')}}
el('start').onclick=startTask;el('finish').onclick=finishTask;el('getFeedback').onclick=getFeedback;el('repeat').onclick=startTask;updateTimer();setStatus('ready');
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
