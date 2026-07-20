var c="My new neighbours regularly make noise late at night, but I don\u2019t want to create a bad relationship with them.",d=`You are the examiner in a Trinity ISE II Collaborative Task practice simulation.

You are a person with this dilemma: ${c}
Stay in first person. The student must carry and develop the conversation.

HIDDEN FACTS
- The neighbours moved in three months ago.
- They seem friendly during the day, but you are not friends.
- They play loud music two or three nights a week, often until after midnight.
- You start office work early and the noise is affecting your sleep and concentration.
- You spoke to them once. They apologised, but the noise continued.
- You are considering speaking to them again, leaving a polite written message, contacting the landlord, or making a formal complaint.
- You dislike confrontation and do not want a hostile relationship.

ABSOLUTE RULES
- Speak only English and answer the student's completed contribution directly.
- Usually speak one short sentence; use at most two short sentences.
- Never ask the student a question.
- Never rescue, prompt, teach, correct, praise, summarise or suggest what to say.
- Never announce or imply that the task has ended. Only the application controls the ending.
- If the student says only \u201Cum\u201D, \u201Cuh\u201D, a fragment, repetition, false start or unfinished sentence, remain silent and wait.
- Do not interpret or complete unfinished language.
- Use natural British English. Speak clearly and slightly slowly.
- Reveal hidden facts only when relevant. Never contradict them.`,p=`You are an expert speaking coach for the current Trinity ISE II Collaborative Task.
Assess only the supplied transcript. Explain everything in clear Spanish; keep corrections and suggested candidate language in English.
Be supportive but completely honest. Do not award an official Trinity score or promise a pass.

MOBILE FORMAT
- Never use tables or columns.
- Use concise headings, short paragraphs, bullets and stacked correction blocks.
- Do not repeat the same criticism in several sections.

Include:
1. RESULTADO GENERAL: independent, partly developed, or well below ISE II expectations, and why.
2. LO QUE S\xCD HICISTE BIEN: genuine strengths with exact examples.
3. TRES PRIORIDADES: exactly three high-impact improvements.
4. CORRECCIONES DEL INGL\xC9S: maximum five stacked examples using Dijiste / Correcci\xF3n / Versi\xF3n B2 / Por qu\xE9. Distinguish errors, unnatural language and correct but basic language.
5. PRONUNCIACI\xD3N E INTELIGIBILIDAD: be cautious because the transcript may normalise audio.
6. OPORTUNIDADES PERDIDAS: exact moments and useful English alternatives.
7. UNA RUTA MEJOR: a short situation-specific route, not a complete script.
8. OBJETIVOS PARA EL INTENTO 2: exactly three observable targets.
9. FRASES \xDATILES: 6\u201310 English options grouped by relevant Trinity functions.

FAIRNESS
- Do not say the examiner supported the interaction unless the examiner actually asked rescue questions or supplied routes.
- Short student turns show limited development, not automatically examiner support.
- Do not invent quotations or correct a sentence that was already correct.
- Judge relevance in context, not in isolation.`;function a(e,t=200){return new Response(JSON.stringify(e),{status:t,headers:{"Content-Type":"application/json; charset=utf-8"}})}async function l(e,t){if(!t.OPENAI_API_KEY)return a({error:"OPENAI_API_KEY is not configured."},500);let n=await e.text();if(!n)return a({error:"Missing WebRTC offer."},400);let r={type:"realtime",model:"gpt-realtime-2.1",instructions:d,output_modalities:["audio"],max_output_tokens:90,audio:{input:{transcription:{model:"gpt-4o-mini-transcribe",language:"en"},turn_detection:{type:"semantic_vad",eagerness:"low",create_response:!0,interrupt_response:!0}},output:{voice:"marin"}}},i=new FormData;i.set("sdp",n),i.set("session",JSON.stringify(r));let o=await fetch("https://api.openai.com/v1/realtime/calls",{method:"POST",headers:{Authorization:`Bearer ${t.OPENAI_API_KEY}`,"OpenAI-Safety-Identifier":"simply-english-prototype"},body:i}),s=await o.text();return o.ok?new Response(s,{status:200,headers:{"Content-Type":"application/sdp"}}):a({error:"Could not start the voice session.",details:s},o.status)}function u(e){return typeof e?.output_text=="string"?e.output_text:(e?.output||[]).flatMap(t=>t.content||[]).filter(t=>t.type==="output_text").map(t=>t.text||"").join(`
`)}async function h(e,t){if(!t.OPENAI_API_KEY)return a({error:"OPENAI_API_KEY is not configured."},500);let{transcript:n}=await e.json();if(!n?.trim())return a({error:"There is no transcript to assess."},400);let r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{Authorization:`Bearer ${t.OPENAI_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({model:"gpt-5.6-sol",instructions:p,input:`Complete practice transcript:

${n}`})}),i=await r.json();return r.ok?a({feedback:u(i)}):a({error:"Could not generate feedback."},r.status)}var m=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Simply English | Trinity ISE II Coach</title>
<style>
:root{--ink:#0f1722;--ocean:#41788b;--mist:#8cb8ba;--sage:#e4ebcf;--coral:#e47162;--peach:#f1bf98;--paper:#fbfcf8;--muted:#66727a}*{box-sizing:border-box}html{background:var(--paper)}body{margin:0;color:var(--ink);background:radial-gradient(circle at 10% 5%,rgba(140,184,186,.25),transparent 25rem),radial-gradient(circle at 92% 28%,rgba(241,191,152,.2),transparent 22rem),var(--paper);font-family:Manrope,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}button{font:inherit}main{width:min(760px,100%);margin:0 auto;padding:32px 18px 72px}.hero{padding:18px 4px 24px}.brand{font-family:Georgia,serif;font-size:1.15rem;color:var(--ocean);font-style:italic}.eyebrow{color:var(--ocean);font-size:.76rem;font-weight:800;letter-spacing:.12em;margin:8px 0}h1{font-size:clamp(2rem,8vw,3.6rem);line-height:.98;letter-spacing:-.045em;margin:10px 0 18px}h2{font-size:1.12rem;margin:5px 0}.intro{color:var(--muted);line-height:1.55;max-width:38rem}.card{background:rgba(255,255,255,.92);border:1px solid rgba(65,120,139,.16);border-radius:24px;box-shadow:0 18px 48px rgba(15,23,34,.08);padding:22px;margin-bottom:18px}.task-row{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.label{color:var(--coral);font-size:.72rem;font-weight:900;letter-spacing:.14em}.timer{font-variant-numeric:tabular-nums;font-size:2rem;font-weight:800;color:var(--ocean)}.timer.warning{color:var(--coral)}.status{display:flex;align-items:center;gap:10px;background:#f1f6f4;border-radius:14px;padding:13px 15px;margin:20px 0;color:#33444b}.dot{width:10px;height:10px;border-radius:50%;background:#aab4b8;flex:0 0 auto}.active .dot,.opening .dot{background:var(--coral);box-shadow:0 0 0 5px rgba(228,113,98,.14)}.finished .dot,.feedback .dot{background:var(--ocean)}.error .dot{background:#b42318}.controls{display:grid;gap:10px}.button{border:0;border-radius:14px;padding:15px 18px;font-weight:800;cursor:pointer;min-height:54px}.button:disabled{opacity:.45;cursor:not-allowed}.primary{background:var(--ocean);color:white}.secondary{background:var(--sage);color:var(--ink)}.danger{background:var(--coral);color:white}.disclosure{color:var(--muted);font-size:.75rem;line-height:1.45;margin:16px 2px 0}.error-box{color:#8a1c13;background:#fff0ee;padding:12px 14px;border-radius:12px}.hidden{display:none!important}.turns{display:grid;gap:12px}.turn{border-radius:16px;padding:13px 15px;max-width:90%}.turn small{display:block;font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:5px}.turn p{margin:0;line-height:1.5}.student{margin-left:auto;background:#edf4f4}.examiner{background:#f8eee7}.feedback-text{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65;font-size:.98rem}@media(min-width:560px){main{padding-top:52px}.controls{grid-template-columns:repeat(2,minmax(0,1fr))}.card{padding:28px}}
</style></head><body><main>
<section class="hero"><div class="brand">Simply English</div><p class="eyebrow">TRINITY ISE II VOICE COACH</p><h1>Collaborative Task \xB7 Prototype</h1><p class="intro">A four-minute voice practice with patient turn detection and written feedback in Spanish.</p></section>
<section class="card"><div class="task-row"><div><span class="label">PACK 1</span><h2>Task 1 \xB7 Noisy neighbours</h2></div><div id="timer" class="timer">4:00</div></div><div id="status" class="status ready"><span class="dot"></span><span id="statusText">Ready to begin</span></div><p id="error" class="error-box hidden"></p><div class="controls"><button id="start" class="button primary">Start Task 1</button><button id="finish" class="button danger hidden">Finish task</button><button id="getFeedback" class="button primary hidden">Get my feedback</button><button id="repeat" class="button secondary hidden">Repeat the same task</button></div><p class="disclosure">The examiner voice is AI-generated. Your microphone is used only during this practice session.</p></section>
<section id="transcriptCard" class="card hidden"><h2>Conversation transcript</h2><div id="turns" class="turns"></div></section>
<section id="feedbackCard" class="card hidden"><p class="eyebrow">COACHING REPORT</p><div id="feedback" class="feedback-text"></div></section>
</main><script>
const OPENING=${JSON.stringify(c)},TOTAL=240;let status='ready',remaining=TOTAL,turns=[],pc=null,dc=null,timerId=null,openingPending=false;
const el=id=>document.getElementById(id);const labels={ready:'Ready to begin',connecting:'Connecting microphone\u2026',opening:'Listen to the examiner\u2019s opening',active:'Your task is in progress',finished:'Task finished \u2014 your transcript is ready',feedback:'Preparing your feedback\u2026',error:'Something went wrong'};
function setStatus(s){status=s;el('status').className='status '+s;el('statusText').textContent=labels[s]||s;el('start').classList.toggle('hidden',!['ready','error'].includes(s));el('finish').classList.toggle('hidden',!['connecting','opening','active'].includes(s));el('getFeedback').classList.toggle('hidden',s!=='finished');el('repeat').classList.toggle('hidden',!(s==='finished'||(s==='feedback'&&el('feedback').textContent)));}
function showError(message){el('error').textContent=message;el('error').classList.remove('hidden');setStatus('error')}
function updateTimer(){el('timer').textContent=Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');el('timer').classList.toggle('warning',remaining<=30&&status==='active')}
function stopConnection(){if(timerId)clearInterval(timerId);timerId=null;if(dc)dc.close();if(pc){pc.getSenders().forEach(s=>s.track&&s.track.stop());pc.close()}dc=null;pc=null}
function finishTask(){stopConnection();remaining=0;updateTimer();setStatus('finished')}
function beginTimer(){if(timerId)return;setStatus('active');timerId=setInterval(()=>{remaining--;updateTimer();if(remaining<=0)finishTask()},1000)}
function addTurn(role,text){if(!text.trim())return;turns.push({role,text});el('transcriptCard').classList.remove('hidden');const box=document.createElement('div');box.className='turn '+role.toLowerCase();const who=document.createElement('small');who.textContent=role;const p=document.createElement('p');p.textContent=text;box.append(who,p);el('turns').appendChild(box)}
function onEvent(event){if(event.type==='conversation.item.input_audio_transcription.completed')addTurn('Student',event.transcript||'');if(event.type==='response.output_audio_transcript.done')addTurn('Examiner',event.transcript||'');if(event.type==='response.done'&&openingPending){openingPending=false;beginTimer()}if(event.type==='error'){console.error(event);showError('The voice connection reported an error. Please try again.')}}
async function startTask(){stopConnection();turns=[];remaining=TOTAL;updateTimer();el('turns').textContent='';el('feedback').textContent='';el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden');el('error').classList.add('hidden');setStatus('connecting');try{pc=new RTCPeerConnection();const audio=new Audio();audio.autoplay=true;pc.ontrack=e=>audio.srcObject=e.streams[0];const stream=await navigator.mediaDevices.getUserMedia({audio:true});stream.getTracks().forEach(t=>pc.addTrack(t,stream));dc=pc.createDataChannel('oai-events');dc.onmessage=m=>onEvent(JSON.parse(m.data));const offer=await pc.createOffer();await pc.setLocalDescription(offer);const response=await fetch('/api/session',{method:'POST',headers:{'Content-Type':'application/sdp'},body:offer.sdp});if(!response.ok){const p=await response.json();throw new Error(p.error||'Could not start session.')}await pc.setRemoteDescription({type:'answer',sdp:await response.text()});dc.onopen=()=>{setStatus('opening');openingPending=true;dc.send(JSON.stringify({type:'response.create',response:{output_modalities:['audio'],instructions:'Say exactly this sentence and nothing else: \u201C'+OPENING+'\u201D'}}))}}catch(e){console.error(e);stopConnection();showError(e.message||'Could not start the task.')}}
async function getFeedback(){setStatus('feedback');el('error').classList.add('hidden');try{const transcript=turns.map(t=>t.role+': '+t.text).join('
');const response=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({transcript})});const p=await response.json();if(!response.ok)throw new Error(p.error||'Could not generate feedback.');el('feedback').textContent=p.feedback;el('feedbackCard').classList.remove('hidden');el('statusText').textContent='Feedback ready';el('repeat').classList.remove('hidden')}catch(e){showError(e.message||'Could not generate feedback.')}}
el('start').onclick=startTask;el('finish').onclick=finishTask;el('getFeedback').onclick=getFeedback;el('repeat').onclick=startTask;updateTimer();setStatus('ready');
<\/script></body></html>`;async function g(e,t){let n=new URL(e.url);try{return e.method==="POST"&&n.pathname==="/api/session"?await l(e,t):e.method==="POST"&&n.pathname==="/api/feedback"?await h(e,t):n.pathname==="/favicon.ico"?new Response(null,{status:204}):e.method==="GET"?new Response(m,{headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}}):new Response("Not found",{status:404})}catch(r){return console.error(r),a({error:"Unexpected server error."},500)}}var f={fetch:g};export{f as default,g as handleRequest};
