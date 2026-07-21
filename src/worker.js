const TASK_OPENING = "My new neighbours regularly make noise late at night, but I don’t want to create a bad relationship with them.";

const TASKS = [
  { id: "level-1-task-1", level: 1, number: 1, title: "Noisy neighbours", opening: TASK_OPENING, facts: ["You rent a flat, and the neighbours moved into the flat next door three months ago.", "Loud music happens two or three nights a week.", "You start work early.", "You spoke to them once; they apologised, but the noise continued.", "They seem friendly during the day.", "Other neighbours are also affected."], options: ["speak again", "write a polite message", "involve the landlord"] },
  { id: "level-1-task-2", level: 1, number: 2, title: "Adopting a dog", opening: "My family wants to adopt a dog, but I’m worried that I’ll eventually have to do all the work.", facts: ["You are a parent living with your partner and two teenagers.", "Your partner and both teenagers want the dog and promise to help.", "The teenagers are at school on weekdays, and your partner usually works away from home during the day.", "You live in a flat near a park.", "The dog is young and energetic.", "Nobody in the family has owned a dog before.", "You work from home three days a week."], options: ["adopt", "foster first", "choose an older dog", "wait"] },
  { id: "level-1-task-3", level: 1, number: 3, title: "First smartphone", opening: "My twelve-year-old daughter wants her first smartphone, but I’m not sure she is ready for one.", facts: ["You are her parent and share major parenting decisions with your partner; your partner's view is not yet settled.", "Most of her friends already have phones.", "She travels to school alone.", "She currently uses a family tablet at home.", "An online argument upset her recently.", "The cost is affordable."], options: ["basic phone", "smartphone with controls", "trial period", "wait"] },
  { id: "level-1-task-4", level: 1, number: 4, title: "Faulty online purchase", opening: "I bought an expensive laptop online, but it arrived damaged and the seller has stopped replying.", facts: ["It cost €850.", "The advert described it as being in excellent condition.", "The battery is weak and the screen is damaged.", "You paid by bank transfer.", "You saved the advert and messages."], options: ["platform complaint", "contact the bank", "consumer advice", "repair estimate"] },
  { id: "level-1-task-5", level: 1, number: 5, title: "Holiday booking", opening: "I paid for a weekend break, but the hotel says it has no record of my reservation.", facts: ["The trip is with your partner and is due to begin in three weeks.", "Your work commitments make changing the dates difficult.", "You paid €400 through a small travel agency.", "You have a confirmation email.", "The hotel is now full.", "The agency blames the hotel.", "They offered a cheaper hotel far from the centre."], options: ["accept", "demand an equivalent hotel", "request a refund", "contact the card provider"] },
  { id: "level-1-task-6", level: 1, number: 6, title: "Too much volunteering", opening: "I agreed to help a local charity, but they now expect much more time than I can give.", facts: ["Your volunteer role is administrative support and organising appointments for vulnerable families.", "You originally agreed to four hours per month.", "They now contact you several times a week.", "You enjoy the work and believe it is important.", "The organiser is friendly but disorganised.", "Your paid work is beginning to suffer."], options: ["set limits", "reduce tasks", "take a break", "leave"] },
  { id: "level-1-task-7", level: 1, number: 7, title: "Group project", opening: "I’m doing most of the work on a group project, but I’m unsure whether I should complain.", facts: ["You are a university student preparing a group presentation for a business course.", "There are four students in the group.", "Two rarely attend meetings.", "Everyone will receive the same grade.", "You have already reminded them twice.", "The tutor does not yet know about the imbalance.", "The deadline is in ten days."], options: ["redistribute tasks", "speak firmly", "record contributions", "contact the tutor"] },
  { id: "level-1-task-8", level: 1, number: 8, title: "Using the car less", opening: "I want to use my car less, but public transport where I live is unreliable.", facts: ["You travel twenty kilometres to work.", "The bus takes twice as long.", "It is sometimes cancelled.", "Fuel and parking are expensive.", "Your employer allows one remote-working day per week.", "A colleague who lives nearby is open to discussing car-sharing."], options: ["car-share", "mixed transport", "work remotely sometimes", "reduce rather than stop"] },
  { id: "level-1-task-9", level: 1, number: 9, title: "Embarrassing photo", opening: "A colleague posted an embarrassing photograph of me online without asking, and I don’t know how strongly to react.", facts: ["It was taken at a private birthday party.", "Several coworkers have seen it.", "The colleague says it was only a joke.", "You asked once for it to be removed, but they ignored you.", "You want to avoid a major workplace conflict."], options: ["speak directly", "send a written request", "report the post", "involve a manager"] },
  { id: "level-1-task-10", level: 1, number: 10, title: "Expensive gym membership", opening: "I joined an expensive gym for a year, but I hardly use it and the company says I cannot cancel.", facts: ["You joined three months ago.", "The gym is far from your home.", "Your work schedule recently changed.", "The contract mentions cancellation only for medical reasons or moving away.", "You have not yet asked whether freezing or transferring the membership is possible.", "A cheaper gym has opened nearby."], options: ["negotiate", "transfer membership", "change routine", "seek consumer advice"] },
  { id: "level-2-task-11", level: 2, number: 11, title: "Two job offers", opening: "I’ve received two job offers, one close to home and one abroad, and I can’t decide which opportunity is better.", facts: ["The local job is stable but similar to your current work.", "The overseas job pays more and offers training.", "You would need to move within two months.", "Your partner could work remotely but feels uncertain.", "You have never lived abroad."], options: ["take the local job", "move abroad", "ask for more time", "negotiate a trial period"] },
  { id: "level-2-task-12", level: 2, number: 12, title: "Professional sport", opening: "My niece wants to pursue sport professionally, but I’m unsure whether it is a sensible career choice.", facts: ["She is eighteen and competes nationally.", "A coach believes she has potential.", "Training would limit time for further study.", "Income would be uncertain at first.", "Her parents want her to attend university."], options: ["train full-time", "combine sport and study", "take one trial year", "choose university"] },
  { id: "level-2-task-13", level: 2, number: 13, title: "Neighbourhood development", opening: "A new development could create jobs in my town, but it would also destroy one of the area’s last green spaces.", facts: ["You are a local resident giving your opinion and have no formal decision-making role.", "The council is expected to decide on the proposal in six weeks.", "The proposal is a shopping and entertainment complex.", "It may create 250 jobs.", "The town has high unemployment and many empty shops in the centre.", "The land contains mature trees and is used by walkers.", "Developers promise to replant some trees."], options: ["approve", "reject", "reduce the project", "choose a brownfield site"] },
  { id: "level-2-task-14", level: 2, number: 14, title: "Rare language course", opening: "My nephew wants to spend a year studying a very rare language, and I’m not sure it will be useful enough.", facts: ["He is fascinated by the culture connected to the language.", "The course is well respected but expensive.", "Few employers request the language directly.", "He could combine it with business studies.", "He has saved enough for part of the fees."], options: ["study it alone", "combine subjects", "take a shorter course", "choose a more common language"] },
  { id: "level-2-task-15", level: 2, number: 15, title: "Graduation celebration", opening: "The students I teach want a special graduation celebration, but we can’t agree on what would be affordable and enjoyable.", facts: ["There are forty students.", "Some want a formal dinner and others prefer an outdoor event.", "The available budget is limited.", "Several families cannot contribute extra money.", "The school can provide its hall for free."], options: ["use the school hall", "hold an outdoor event", "organise fundraising", "combine simple elements of both ideas"] },
  { id: "level-2-task-16", level: 2, number: 16, title: "Changing careers", opening: "I’m considering leaving a secure career to train for something I would find more meaningful, but the financial risk frightens me.", facts: ["You work in banking and want to become a teacher.", "Training would take one year.", "You have savings for eight months.", "Your current salary is high, but stress is affecting sleep.", "Your partner is supportive but worried about the mortgage."], options: ["resign", "study part-time", "request reduced hours", "postpone and save more"] },
  { id: "level-2-task-17", level: 2, number: 17, title: "Family celebration conflict", opening: "Two members of my family are refusing to attend the same important celebration, and both expect me to take their side.", facts: ["You are organising your mother’s seventieth birthday, which is one month away.", "Your brother and cousin argued over money last year.", "Neither has apologised.", "Your mother knows little about the conflict.", "Separate celebrations would upset her."], options: ["mediate", "set behaviour rules", "invite both without intervention", "hold separate events"] },
  { id: "level-2-task-18", level: 2, number: 18, title: "Teenager arriving late", opening: "My teenage nephew has started arriving late for school, and I’m worried he doesn’t understand the possible consequences.", facts: ["He is fifteen.", "He was punctual until two months ago.", "He says the morning bus is unreliable.", "His grades remain good.", "His parents have argued with him but have not contacted the school."], options: ["discuss the reason calmly", "change transport", "contact the school", "set clearer consequences"] },
  { id: "level-2-task-19", level: 2, number: 19, title: "Promotion and colleague", opening: "I’ve been encouraged to apply for a promotion, but a close colleague wants the same position and I’m worried it could damage our relationship.", facts: ["You have slightly more experience.", "The colleague has stronger technical qualifications.", "You have supported each other for years.", "Only one internal candidate will be selected.", "Your manager approached you privately, and your colleague does not know this.", "Applications close in two weeks."], options: ["apply openly", "speak to the colleague first", "withdraw", "encourage mutual professionalism"] },
  { id: "level-2-task-20", level: 2, number: 20, title: "Local library closure", opening: "The council plans to close our local library to save money, but many residents still depend on it.", facts: ["You are a local resident who uses the library most weeks and have no formal role in the council.", "The council says the building needs expensive repairs and usage has fallen.", "Many older residents, students and families use its computers, study space and staff support.", "The council proposes online services and a small book-collection point instead.", "The final decision is expected in six weeks."], options: ["organise a petition", "propose reduced opening hours", "seek community funding", "create a shared community hub", "accept the digital alternative"] },
  { id: "level-3-task-1", level: 3, number: 1, title: "Friend moving away", opening: "My closest friend is considering moving abroad for a better job, and I’m finding it difficult to advise her objectively.", facts: ["The job offers better pay and promotion opportunities.", "She would move alone and knows nobody there.", "She has cared for an elderly relative locally.", "She asked for your honest opinion.", "You would miss her but want what is best for her."], options: ["accept the job", "negotiate remote work", "try a short placement", "remain locally"] },
  { id: "level-3-task-2", level: 3, number: 2, title: "School trip worries", opening: "My teenage son wants to join an expensive school trip abroad, but I’m unsure whether the experience justifies the cost.", facts: ["The trip lasts ten days and includes language classes.", "Several of his close friends are going.", "He has never travelled without family.", "Paying would require using some emergency savings.", "The school offers instalments but no financial assistance."], options: ["pay in instalments", "ask about fundraising", "choose a cheaper exchange", "say no"] },
  { id: "level-3-task-3", level: 3, number: 3, title: "Unhappy housemate", opening: "My housemate says I don’t contribute enough at home, but I feel the criticism is unfair.", facts: ["You both work full-time.", "You usually cook while your housemate cleans.", "Your housemate recently began working longer hours.", "No written arrangement exists.", "The argument started after guests visited last weekend."], options: ["make a task schedule", "discuss changing workloads", "apologise for the weekend", "find separate accommodation"] },
  { id: "level-3-task-4", level: 3, number: 4, title: "Community garden", opening: "Some neighbours want to turn an unused car park into a community garden, but others say parking is already difficult.", facts: ["The car park has twenty spaces and is rarely completely full except at weekends.", "The area has few green spaces.", "Local families and a primary school support the garden.", "Several older residents rely on nearby parking.", "The council might allow a one-year trial."], options: ["full garden", "smaller garden", "trial period", "keep the car park"] },
  { id: "level-3-task-5", level: 3, number: 5, title: "Returning to study", opening: "I want to return to university as an adult, but I’m worried that I won’t fit in or manage the workload.", facts: ["You left education fifteen years ago.", "The course is related to work you already do.", "Classes take place two evenings a week.", "Your employer may contribute to the fees.", "Your family is supportive, but you already have limited free time."], options: ["enrol now", "take one module", "study online", "postpone"] },
  { id: "level-3-task-6", level: 3, number: 6, title: "Honest recommendation", opening: "A friend wants me to recommend her for a job at my company, but I’m not convinced she would be reliable.", facts: ["She has the necessary qualifications.", "She has frequently arrived late to previous jobs.", "You have been friends for eight years.", "Your manager trusts your judgment.", "The application deadline is next week."], options: ["recommend honestly", "decline politely", "discuss reliability first", "share the vacancy without endorsing her"] },
  { id: "level-3-task-7", level: 3, number: 7, title: "Family holiday disagreement", opening: "My family wants a busy sightseeing holiday, but I desperately need a quiet break after a stressful year.", facts: ["Four adults are travelling together.", "You have only one week available.", "The others have already suggested an itinerary.", "A coastal town near the planned city could offer both activities and rest.", "Nothing has been booked yet."], options: ["split the week", "take separate days", "choose another destination", "accept the itinerary"] },
  { id: "level-3-task-8", level: 3, number: 8, title: "Team leadership", opening: "I’ve been offered responsibility for leading my team, but some colleagues have much more experience than I do.", facts: ["You joined the organisation two years ago.", "Management values your communication skills.", "Two colleagues have over ten years of experience.", "The role includes a modest pay rise.", "You worry that colleagues may resent the decision."], options: ["accept", "ask for mentoring", "share responsibilities", "decline"] },
  { id: "level-3-task-9", level: 3, number: 9, title: "Festival disruption", opening: "Our town’s annual festival attracts visitors and money, but residents are increasingly frustrated by the noise and rubbish.", facts: ["The festival lasts three days.", "Local hotels and restaurants depend on it.", "Complaints doubled last year.", "Organisers increased cleaning but not security.", "The council is reviewing the licence."], options: ["shorten the festival", "move stages", "increase controls", "cancel it"] },
  { id: "level-3-task-10", level: 3, number: 10, title: "Keeping a secret", opening: "A friend told me she plans to leave her job, but her manager directly asked me whether I know anything.", facts: ["Your friend asked you to keep the plan private.", "You also work for the same manager.", "Her departure could affect an important project.", "She has not submitted formal notice.", "You do not want to lie or betray her trust."], options: ["refuse to discuss it", "encourage her to speak soon", "answer vaguely", "tell the manager"] },
  { id: "level-4-task-1", level: 4, number: 1, title: "Isolated new home", opening: "My sister has bought a beautiful house in a remote area, but I’m worried the isolation will make her unhappy.", facts: ["She previously complained about city noise and wanted more space.", "The nearest town is thirty minutes away by car.", "She works remotely and lives alone.", "She says friends have promised to visit.", "The house would be difficult to sell quickly."], options: ["support the move", "suggest a trial stay", "encourage local activities", "advise reconsideration"] },
  { id: "level-4-task-2", level: 4, number: 2, title: "Education or sport", opening: "My nephew has been offered a place at a professional sports academy, but accepting it would seriously disrupt his education.", facts: ["He is sixteen and highly talented.", "The academy requires moving to another city.", "His grades are good.", "The club promises tutoring but gives no long-term guarantee.", "His parents disagree about the decision."], options: ["accept fully", "negotiate educational safeguards", "delay one year", "remain in school"] },
  { id: "level-4-task-3", level: 4, number: 3, title: "Selling the family café", opening: "My brother wants to sell his successful café and travel for a year, but I’m afraid he’ll regret giving up what he built.", facts: ["He opened the café six years ago.", "It is profitable but demands long hours.", "A serious buyer has made a fair offer.", "He has travelled very little.", "He could possibly appoint a manager instead of selling."], options: ["sell", "hire a manager", "take a shorter break", "keep operating it"] },
  { id: "level-4-task-4", level: 4, number: 4, title: "School phone ban", opening: "My children’s school wants to ban smartphones completely, and I’m not convinced such a strict rule will solve the real problem.", facts: ["Teachers report frequent distraction and online arguments.", "Phones are already forbidden during lessons but enforcement varies.", "Some parents need to contact children after school.", "The school would store emergency contact details.", "Students were not consulted."], options: ["complete ban", "restricted times", "secure storage", "digital-responsibility programme"] },
  { id: "level-4-task-5", level: 4, number: 5, title: "Uncomfortable reference", opening: "A former colleague asked me for a glowing reference, but my experience of working with him was mixed.", facts: ["He was creative and popular with clients.", "He sometimes missed deadlines.", "He believes you were fully satisfied with his work.", "The prospective employer contacted you directly.", "You want to be fair without being misleading."], options: ["decline", "give a balanced reference", "discuss concerns first", "provide only factual details"] },
  { id: "level-4-task-6", level: 4, number: 6, title: "Cycling holiday doubt", opening: "I agreed to a demanding cycling holiday with a friend, but now I’m worried I’ve badly underestimated how difficult it will be.", facts: ["The holiday begins in two months.", "Your friend cycles regularly.", "You have not trained consistently.", "Part of the booking is non-refundable.", "An easier route may be available for an extra fee."], options: ["train intensively", "change route", "join only part", "withdraw"] },
  { id: "level-4-task-7", level: 4, number: 7, title: "Creative career", opening: "My niece wants a career in fashion, but her parents dismiss it as unrealistic and she has asked me to speak to them.", facts: ["She is seventeen and has a strong portfolio.", "Her parents prefer a conventional university degree.", "A respected college offered her an interview.", "The course is expensive.", "She is willing to consider a backup plan."], options: ["support her directly", "mediate a discussion", "suggest combined study", "avoid intervening"] },
  { id: "level-4-task-8", level: 4, number: 8, title: "Life before technology", opening: "People often say life was better before smartphones and social media, but I’m not sure that view is fair.", facts: ["You value instant communication with distant relatives.", "You feel people are more distracted in person now.", "Your work depends on digital tools.", "You remember having more privacy before social media.", "You do not believe technology itself is entirely responsible."], options: ["set personal limits", "promote digital education", "accept social change", "reduce technology use"] },
  { id: "level-4-task-9", level: 4, number: 9, title: "Strange events next door", opening: "While I was away, neighbours reported unusual activity outside my empty house, and I don’t know how seriously to take it.", facts: ["A neighbour saw lights twice late at night.", "Nothing appears stolen or damaged.", "A relative has a spare key but says they did not visit.", "A motion light sometimes activates because of animals.", "The neighbour is usually reliable."], options: ["check security", "ask other neighbours", "install a camera", "treat it as a misunderstanding"] },
  { id: "level-4-task-10", level: 4, number: 10, title: "Small hotel plan", opening: "Two friends want to invest all their savings in a small hotel, and I’m worried enthusiasm is replacing careful planning.", facts: ["They have hospitality experience but have never managed a business.", "The building needs renovation.", "Tourism is seasonal.", "Their financial forecast assumes high occupancy.", "They invited you to become a minor investor."], options: ["commission research", "begin with a smaller project", "seek experienced partners", "decline involvement"] },
  { id: "level-5-task-1", level: 5, number: 1, title: "City traffic restrictions", opening: "My city will restrict private cars in the centre, and I can’t decide whether the wider benefits justify the impact on small businesses.", facts: ["Air pollution regularly exceeds recommended limits.", "The restriction begins in six months.", "Public transport will receive additional funding.", "Some independent shops depend on customers driving in.", "Delivery vehicles will have limited exemptions.", "Previous voluntary measures had little effect."], options: ["support the restriction", "phase it in", "offer business exemptions", "replace it with charges"] },
  { id: "level-5-task-2", level: 5, number: 2, title: "Regretted degree choice", opening: "I chose a practical university degree instead of art, and years later I still wonder whether fear made the decision for me.", facts: ["You now have a stable engineering career.", "You still paint regularly and have exhibited locally.", "Your family strongly encouraged the practical degree.", "Retraining would reduce your income.", "You value both financial security and creative fulfilment."], options: ["change career", "reduce working hours", "study art formally", "keep art separate"] },
  { id: "level-5-task-3", level: 5, number: 3, title: "Unused public centre", opening: "The council built an expensive community sports centre that remains almost empty, and I think the failure reflects poor planning rather than public indifference.", facts: ["The centre opened eighteen months ago.", "Membership costs more than private alternatives.", "Bus access is poor.", "Residents requested a swimming pool, but none was built.", "Closing it would waste the original investment.", "The council is considering another advertising campaign."], options: ["reduce prices", "change facilities", "improve transport", "repurpose the building"] },
  { id: "level-5-task-4", level: 5, number: 4, title: "Expansion into countryside", opening: "Thousands of homes are planned near my village, and I’m unsure how to balance the housing shortage against irreversible changes to the area.", facts: ["Housing costs have risen sharply.", "The development includes some affordable homes.", "The site is farmland rather than protected habitat.", "Roads and schools are already under pressure.", "Developers promise new infrastructure in later phases.", "Local opinion is deeply divided."], options: ["approve", "reduce density", "require infrastructure first", "choose urban sites"] },
  { id: "level-5-task-5", level: 5, number: 5, title: "Friend’s career sacrifice", opening: "My friend left a highly paid career to volunteer overseas, and I’m torn between admiring the decision and thinking it was irresponsible.", facts: ["The placement lasts two years.", "The charity covers basic living costs.", "Your friend had become unhappy at work.", "They have significant savings but no guaranteed job afterward.", "Their family believes the decision was impulsive."], options: ["support fully", "encourage a return plan", "suggest a shorter placement", "question the decision"] },
  { id: "level-5-task-6", level: 5, number: 6, title: "Anonymous messages", opening: "For several years I’ve received anonymous birthday cards with personal messages, and what once seemed amusing now feels unsettling.", facts: ["The cards mention details known by friends and colleagues.", "They arrive by post without a return address.", "The tone is affectionate, not threatening.", "Nobody has admitted sending them.", "You recently moved, yet a card reached the new address."], options: ["ask people directly", "keep records", "seek postal advice", "ignore them unless the tone changes"] },
  { id: "level-5-task-7", level: 5, number: 7, title: "Unpopular school rule", opening: "A local school introduced a strict attendance-reward system, but I suspect it punishes vulnerable pupils while trying to solve a genuine problem.", facts: ["Attendance has fallen over three years.", "Pupils with perfect attendance receive privileges.", "Medical absences currently count against rewards.", "Teachers support improving attendance but disagree about the system.", "The school will review the policy after one term."], options: ["remove rewards", "add fair exemptions", "reward improvement", "keep the trial unchanged"] },
  { id: "level-5-task-8", level: 5, number: 8, title: "Workplace surveillance", opening: "My employer wants software that monitors remote workers continuously, and I’m unsure whether efficiency concerns can justify that loss of trust.", facts: ["Some projects have recently missed deadlines.", "Management has no evidence that remote work caused the delays.", "The software records activity but not private messages.", "Staff were informed but not consulted.", "You manage a small team and must explain the policy."], options: ["accept monitoring", "measure outcomes instead", "run a limited trial", "oppose the policy"] },
  { id: "level-5-task-9", level: 5, number: 9, title: "Historic building decision", opening: "A neglected historic building could become affordable housing, but the proposed renovation would remove most of its original character.", facts: ["The building has been empty for twelve years.", "Restoration would cost substantially more.", "The city urgently needs affordable homes.", "Conservation groups oppose the current design.", "A compromise would create fewer homes.", "The structure will deteriorate further without investment."], options: ["approve redevelopment", "require full restoration", "accept a compromise", "seek another use"] },
  { id: "level-5-task-10", level: 5, number: 10, title: "Artificial intelligence at work", opening: "My company wants AI to make some recruitment decisions, and I’m concerned that apparent efficiency may hide unfair assumptions.", facts: ["The system would rank applications but humans would make final decisions.", "Current recruitment is slow and inconsistent.", "The supplier reports high accuracy but provides limited detail about training data.", "A trial could be independently audited.", "Management wants implementation within three months."], options: ["reject it", "run an audited trial", "use it only for administration", "delay until standards improve"] },
];

const LEVELS = [
  { level: 1, name: "B2 Foundations", short: "Accessible Grade 7 foundations", stage: "Preparation towards B2", examiner: "Use concrete language and direct answers. Make the practical situation easy to explore without carrying the conversation." },
  { level: 2, name: "B2 Developing", short: "Secure Grade 7 interaction", stage: "Preparation towards B2", examiner: "Use natural Grade 7 language. Answers may include a simple reason or trade-off for the student to follow up." },
  { level: 3, name: "B2 Transition", short: "Bridge from Grade 7 to Grade 8", stage: "Preparation towards B2", examiner: "Include feelings, consequences and mild uncertainty. Expect the student to speculate and develop relevant responses." },
  { level: 4, name: "B2 Target", short: "Secure Grade 8 performance", stage: "Evidence towards the B2 target", examiner: "Use nuanced personal reactions and competing considerations. Expect confident turn management, persuasion and developed follow-up." },
  { level: 5, name: "High B2 Challenge", short: "Grade 9 at maximum strictness", stage: "High B2 challenge", examiner: "Allow genuine ambiguity and competing priorities while remaining coherent. Expect paraphrasing, evaluation, assumptions and hypotheses." },
];

function getLevel(level) {
  return LEVELS.find((item) => item.level === level) || LEVELS[0];
}

function getTask(taskId) {
  return TASKS.find((task) => task.id === taskId) || TASKS[0];
}

function taskCanon(task) {
  return [...task.facts, `Possible options include: ${task.options.join(", ")}.`].map((fact) => `- ${fact}`).join("\n");
}

function buildTaskInstructions(task, concise = false) {
  const level = getLevel(task.level);
  return `You are the person with this dilemma in a Trinity GESE Interactive Task: ${task.opening}
Stay in first person and use clear, natural English for B2 learners.

LEVEL PROFILE
- Level ${level.level}: ${level.name}. ${level.examiner}
- Never become academic, wordy or harder to understand merely to signal difficulty.

FIXED CANON — NEVER CHANGE OR CONTRADICT
${taskCanon(task)}

CONTROLLED IMPROVISATION
- You may improvise one minor everyday detail when it directly helps answer the student: timing, wording, routine, preference, emotion or a small practical plan.
- You may also improvise a brief, ordinary piece of personal background when the student asks a relevant rapport question, such as whether you have done a similar activity before.
- Once introduced, that detail becomes true for this conversation. Read the transcript and preserve continuity.
- You may occasionally introduce one relevant option after genuine uncertainty or a stall, but never offer several routes and never repeatedly carry the interaction.
- Never invent consequential events such as threats, crime, children, illness, eviction, police involvement or legal action unless the fixed canon requires them.
- Do not assert demographics, motives or other consequential details not established in the canon or transcript.

RULES
- Speak only English and address the student's latest completed contribution directly.
- Give exactly one short sentence of no more than 20 words${concise ? "; return it in the required structured field" : ""}.
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
- If the completed contribution is unintelligible or has no recoverable meaning, ask the student to repeat it in one natural sentence.
- If the words are understandable but clearly do not connect to the situation, say that you are not sure what the student means and restate the central problem in different words.
- A repair turn must not reveal a new option, invent a fact or continue as though the contribution made sense.
- Speak clearly and naturally for B2 English learners.
- Answer only what the student actually asked or developed.
- Reveal or improvise no more than one relevant detail in a turn.
- Usually follow the student's lead; limited initiative is allowed when it sounds natural.
- Never contradict the fixed canon or an improvised detail already established in the transcript.`;

const FEEDBACK_INSTRUCTIONS = `You are an expert speaking coach assessing a practice Trinity GESE Interactive phase.
Assess only the supplied transcript using this five-level learning pathway:
- Level 1 — B2 Foundations: accessible early Grade 7 expectations.
- Level 2 — B2 Developing: secure Grade 7 expectations.
- Level 3 — B2 Transition: a bridge from Grade 7 to Grade 8.
- Level 4 — B2 Target: secure Grade 8 expectations and the first level that may show evidence consistent with the B2 target in this practice.
- Level 5 — High B2 Challenge: Grade 9 expectations with maximum strictness.
Explain everything in warm, encouraging, clear Spanish. Keep exact quotations, corrections and suggested candidate language in English.
Give an unofficial practice estimate, never an official Trinity result or a promise of a pass.

ASSESSMENT PRINCIPLES
- Prioritise authentic communication and task fulfilment over grammatical perfection.
- Reward taking control, asking for relevant information, commenting on and expanding responses, encouraging examiner opinion, managing turns and maintaining a natural exchange.
- For Levels 1–2, value Grade 7 functions such as asking for information, developing ideas, suggesting, advising, expressing uncertainty and considering advantages and disadvantages.
- At Level 3, begin to value Grade 8 functions such as expressing feelings, speculating and persuading, but treat it as a transition level.
- At Level 4, expect secure Grade 8 interaction: commenting on responses, encouraging examiner opinion, managing turns, speculating, persuading and reporting what others said when relevant.
- At Level 5, expect Grade 9 interaction: expanding responses, managing turns confidently, paraphrasing, expressing assumptions, evaluating options, hypothesising and evaluating past actions when relevant.
- Functions are evidence, not quotas. Do not expect every function in every task.
- Occasional hesitation, self-correction and fillers such as “um”, “well”, “I mean”, “right” and “you know” are normal spoken interaction. Mention them only if repeated use materially disrupts clarity or prevents the learner from developing turns.
- Natural conversational English is not inferior to formal English. Respect valid regional, dialectal and register variation.
- Give substantial weight to grammatically controlled question formation because the candidate must obtain information and maintain this phase. Reward communicative intention separately from linguistic accuracy.
- Occasional mistakes need not lower the estimate materially, but repeated malformed questions must lower both language control and question effectiveness even when their meaning can be inferred.
- When the examiner asks for repetition or explicitly reorients a misunderstanding, count that as examiner repair support. One successful repair can show a useful recovery strategy; repeated repair materially lowers interaction control and clarity.

PRACTICE SCORE
Give one score from 0 to 10, allowing half points, based on:
- Control and maintenance of the interaction: 0–2.5
- Effective questions, follow-ups and development: 0–2.5
- Grammatical and lexical control, especially question formation: 0–3
- Clarity, appropriacy and conversational flow: 0–2
Map the total to an approximate practice band:
- 9–10: Banda A — desempeño excelente
- 7–8.5: Banda B — buen desempeño
- 5–6.5: Banda C — desempeño satisfactorio
- 0–4.5: Banda D — la tarea todavía no se ha cumplido suficientemente
For Levels 1–3, never say the learner has reached, passed or demonstrated B2. Say the score shows performance within that preparation level and progress towards B2.
At Level 4, a strong performance may be described as evidence consistent with the B2 target in this practice.
At Level 5, a strong performance may be described as strong or high-B2 evidence in this practice. Do not claim an official pass, an overall CEFR level or C1.

IDIOMA OBLIGATORIO
- Write every heading, judgment, explanation, reason and coaching comment in Spanish.
- English is allowed only for exact transcript quotations, corrected English and suggested candidate phrases.
- Never write explanatory bullets or assessment paragraphs in English.

MOBILE FORMAT
- Never use tables or columns.
- Use concise headings, short paragraphs, bullets and stacked correction blocks.
- Do not repeat the same criticism in several sections.

Include, in this order:
1. RESULTADO DE ESTA PRÁCTICA: show “X/10 en Nivel [1–5] — Banda [A/B/C/D] aproximada” and a short encouraging explanation grounded in the transcript. Briefly show the four component scores using the exact four category names and maxima above; they must add up exactly to the total. Describe the expected functions for the supplied level correctly: Levels 1–2 are Grade 7, Level 3 bridges Grades 7–8, Level 4 is Grade 8 and Level 5 is Grade 9. For Levels 1–3, explicitly state that this is preparation towards B2 and not a B2 pass. For Levels 4–5, use the cautious evidence wording above.
2. TU INTERACCIÓN EN NÚMEROS: separately count (a) questions attempted, (b) clear and grammatically well-formed questions, (c) understandable questions with important formation errors, (d) developed follow-ups/comments, (e) suggestions or options, (f) clear expressions of opinion, empathy or common ground, and (g) turns that required examiner repetition or reorientation. Counts are descriptive evidence, never minimum requirements. Do not call a malformed question well formed merely because its meaning was guessable. Do not double-count one utterance in the same category.
3. LO QUE HICISTE MUY BIEN: two to four genuine strengths, including successful natural spoken interaction. Start each strength with “✓ ACIERTO COMUNICATIVO:”. You may praise the intention behind an inaccurate utterance, but never present inaccurate English as a correct model. Whenever a praised quotation contains a genuine language error, immediately add two separate lines: “△ LA IDEA FUE BUENA, PERO LA FORMA NECESITA CORRECCIÓN: [original]” and “→ FORMA CORRECTA: [corrected English]”.
4. HERRAMIENTAS PARA LA PRÓXIMA VEZ: zero to two high-impact, positively framed suggestions. Present them as additional tools, not deficiencies or mandatory scripts. Omit this section when no useful improvement is supported.
5. CORRECCIONES IMPORTANTES: zero to three genuine, significant corrections using Dijiste / Una opción más clara / Por qué. Omit the entire section if there is no real error worth correcting. Never manufacture a correction, repeat the original as its correction, or replace correct conversational English merely with a more formal preference. Put a useful stylistic alternative under HERRAMIENTAS, never here.
6. NUEVAS FRASES QUE PUEDES PROBAR: three to five concise, task-relevant English options that add something not already used successfully. Do not imply they are required.

FAIRNESS
- Do not say the examiner supported the interaction unless the examiner actually asked rescue questions or supplied routes.
- Treat “I’m still not sure what to do” and “I can’t decide what would be best” as minimal examiner prompting, not as supplied conversational routes.
- Treat “What do you think I should do?” as a limited examiner rescue question and mention that support fairly.
- Do not count a brief reactive “Oh, really?” after a volunteered personal experience as examiner rescue support.
- If the examiner occasionally introduced one relevant option, note it accurately but do not automatically treat the whole interaction as examiner-led.
- Short student turns show limited development, not automatically examiner support.
- Do not invent quotations or correct a sentence that was already correct.
- This is spoken practice: ignore capitalization, punctuation and formatting introduced by automatic transcription.
- Never present a capitalization or punctuation-only change as an English correction.
- Do not assess pronunciation, stress, intonation, accent, audibility or speech rate from a written transcript. Do not include a pronunciation section.
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
        turn_detection: { type: "server_vad", threshold: 0.5, prefix_padding_ms: 300, silence_duration_ms: 1100, create_response: false, interrupt_response: false },
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
  const { transcript, taskId, previousTranscript, previousFeedback } = await request.json();
  if (!transcript?.trim()) return json({ error: "There is no transcript to assess." }, 400);
  const task = getTask(taskId);
  const comparison = previousTranscript?.trim() ? `\n\nThis is a repeat attempt of the same task. Immediately after RESULTADO DE ESTA PRÁCTICA, add PROGRESO DESDE EL INTENTO ANTERIOR. State the previous score only if it appears explicitly in the previous feedback, then show the current score and the change. For each earlier target, label it LOGRADO, EN PROGRESO or NO OBSERVADO and quote concise evidence. Explicitly celebrate any earlier suggested phrase, question type or strategy used successfully now. Do not recommend that same mastered item again; offer a genuinely new next tool. Compare only visible evidence and say when evidence is insufficient.\n\nPrevious attempt transcript:\n${previousTranscript}\n\nPrevious feedback (use only to recover its explicit score and earlier targets):\n${previousFeedback || "Not available."}` : "";
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4.1-mini", max_output_tokens: 2000, instructions: FEEDBACK_INSTRUCTIONS, input: `Level: ${task.level}\nTask: ${task.title}\nOpening: ${task.opening}\n\nCurrent practice transcript:\n\n${transcript}${comparison}` }),
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
- Return the detected intent and words to be spoken in the required structured format.
- Use one short sentence of no more than 20 words.
- Address only the student's latest contribution.
- Never ask a leading or topic-changing question, teach, praise, correct, rescue or provide a conversational route.
- After the student volunteers a personal experience, one brief reactive question such as “Oh, really?” is allowed.
- Never contradict the fixed canon or a detail already established in the transcript.
- Infer the student's communicative intent from their actual words and the conversation: question, advice, empathy, agreement, rapport, personal experience, development, unclear speech or off-topic misunderstanding.
- Use off_topic only when the completed contribution has understandable words but cannot reasonably connect to the dilemma, its people, causes, consequences, feelings or possible responses. A broad opinion question or a relevant personal-background question is not off-topic.
- For unclear speech or language with no recoverable meaning, say naturally: “I’m sorry, I didn’t understand. Could you say that again?”
- For off-topic meaning, begin “I’m not sure what you mean.” Then briefly paraphrase the central dilemma using only established facts. Do not ask the student to repeat clear words.
- Use natural contractions and varied conversational wording. Avoid stock replies and do not repeat an examiner sentence already used in the transcript.
- “That might be worth trying” is allowed, but use it at most once in the complete conversation.
- If the contribution is ambiguous, respond cautiously without inventing a fact or conversational route.
- For a question: answer it directly with at most one fact or one safe minor improvised detail.
- A direct question must receive a direct answer, not a generic acknowledgment. If the requested detail is genuinely unknown, say so naturally.
- For advice: respond naturally with one agreement, reservation, preference or minor plan.
- For a developed comment: acknowledge it naturally and, when useful, add one consistent reaction.
- For empathy or a brief expression of understanding: acknowledge it naturally; add a short relevant link to the dilemma only when it helps the flow.
- For rapport or a shared preference, respond warmly and briefly without praise or taking over the conversation.
- Never use a decision fallback such as “I’d have to think about that” after empathy, understanding or rapport.`;

const EXAMINER_REPLY_FORMAT = {
  type: "json_schema",
  name: "examiner_reply",
  strict: true,
  schema: {
    type: "object",
    properties: {
      intent: { type: "string", enum: ["question", "advice", "empathy", "agreement", "rapport", "experience", "development", "unclear", "off_topic"] },
      reply: { type: "string" },
    },
    required: ["intent", "reply"],
    additionalProperties: false,
  },
};

function validateControlledReply(draft, transcript = "", expectedIntent = "") {
  const intent = String(draft?.intent || "");
  const reply = String(draft?.reply || "").replace(/^[\s“”"']+|[\s“”"']+$/g, "").split(/\r?\n/)[0].trim();
  const used = String(transcript).toLowerCase();
  const recent = String(transcript).split(/\r?\n/).filter((line) => line.startsWith("Examiner: ")).slice(-4).map((line) => line.slice(10).trim().toLowerCase());
  if (expectedIntent && intent !== expectedIntent) return { valid: false, reason: `keep the detected intent ${expectedIntent}`, intent, reply };
  if (!reply) return { valid: false, reason: "the reply was empty", intent, reply };
  if (reply.split(/\s+/).length > 20) return { valid: false, reason: "the reply exceeded 20 words", intent, reply };
  if (/^(examiner|reply)\s*:/i.test(reply)) return { valid: false, reason: "the reply contained a label", intent, reply };
  if (/\b(what (do|would|should|could) you|what about|how about|any advice)\b/i.test(reply)) return { valid: false, reason: "the reply improperly rescued or redirected the student", intent, reply };
  if (reply.toLowerCase() === "that might be worth trying." && used.includes("that might be worth trying.")) return { valid: false, reason: "the stock reply was already used", intent, reply };
  if (recent.includes(reply.toLowerCase())) return { valid: false, reason: "the reply repeated a recent examiner turn", intent, reply };
  if (intent === "question" && /^(i see|yes|right|okay|that makes sense|i understand)\b/i.test(reply)) return { valid: false, reason: "a direct question received only a generic acknowledgment", intent, reply };
  if (intent === "question" && reply.includes("?")) return { valid: false, reason: "a direct question must receive an answer rather than another question", intent, reply };
  return { valid: true, intent, reply };
}

async function requestExaminerDraft({ instructions, input }, env) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4.1-mini", max_output_tokens: 100, instructions, input, text: { format: EXAMINER_REPLY_FORMAT } }),
  });
  const raw = await response.text();
  let payload;
  try { payload = JSON.parse(raw); } catch { throw new Error(`Examiner text service returned ${response.status}.`); }
  if (!response.ok) throw new Error(payload?.error?.message || "Could not prepare the examiner reply.");
  try { return JSON.parse(extractOutputText(payload)); } catch { throw new Error("Examiner text service returned an invalid structured reply."); }
}

async function generateControlledReply({ latest, mode, transcript, supportIndex, taskId }, env) {
  if (mode === "nudge") {
    const nudges = ["I’m still not sure what to do.", "I can’t decide what would be best.", "What do you think I should do?"];
    return nudges[Math.min(Math.max(Number(supportIndex || 1) - 1, 0), nudges.length - 1)];
  }
  if (mode === "unclear") return "I’m sorry, I didn’t understand. Could you say that again?";
  const instructions = buildTaskInstructions(getTask(taskId), true);
  const input = `Identify the student's communicative intent and respond to the latest contribution.\nLatest student contribution: ${latest}\n\nConversation so far (avoid repeating examiner wording):\n${String(transcript || "").slice(-5000)}`;
  const firstDraft = await requestExaminerDraft({ instructions, input }, env);
  const firstCheck = validateControlledReply(firstDraft, transcript);
  if (firstCheck.valid) return firstCheck.reply;
  const retryInput = `${input}\n\nYour first draft detected intent "${firstCheck.intent}" but was rejected because ${firstCheck.reason}. Rewrite it once, preserving that intent and the storyline. Rejected reply: ${firstCheck.reply}`;
  const secondDraft = await requestExaminerDraft({ instructions, input: retryInput }, env);
  const secondCheck = validateControlledReply(secondDraft, transcript, firstCheck.intent);
  if (!secondCheck.valid) {
    const usableReply = String(secondCheck.reply || "").trim();
    if (usableReply && usableReply.split(/\s+/).length <= 30 && !/^(examiner|reply)\s*:/i.test(usableReply)) return usableReply;
    if (firstCheck.intent === "question") return "I’m not completely sure, but I can tell you what I know.";
    if (firstCheck.intent === "advice") return "I’ll consider that while trying to protect my own limits.";
    return "I see your point, and it does connect with my concern.";
  }
  return secondCheck.reply;
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
const CLIENT_LEVELS = LEVELS.map(({ level, name, short, stage }) => ({ level, name, short, stage }));

const HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Simply English | Trinity GESE B2 Coach</title>
<style>
:root{--ink:#0F1722;--ocean:#41788B;--mist:#8CB8BA;--coral:#E47162;--paper:#FFFFFA;--muted:#66727a}*{box-sizing:border-box}html{background:var(--paper)}body{margin:0;color:var(--ink);background:radial-gradient(circle at 10% 5%,rgba(140,184,186,.22),transparent 25rem),radial-gradient(circle at 92% 28%,rgba(228,113,98,.10),transparent 22rem),var(--paper);font-family:Manrope,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}button{font:inherit}main{width:min(760px,100%);margin:0 auto;padding:24px 18px 72px}.hero{padding:8px 4px 24px}.brand-logo{display:block;width:96px;height:96px;object-fit:cover;border-radius:50%;margin-bottom:16px;box-shadow:0 8px 24px rgba(15,23,34,.08)}.eyebrow{color:var(--ocean);font-size:.76rem;font-weight:800;letter-spacing:.12em;margin:8px 0}h1{font-size:clamp(2rem,8vw,3.6rem);line-height:.98;letter-spacing:-.045em;margin:10px 0 18px}h2{font-size:1.12rem;margin:5px 0}.intro{color:var(--muted);line-height:1.55;max-width:38rem}.card{background:rgba(255,255,255,.94);border:1px solid rgba(65,120,139,.18);border-radius:24px;box-shadow:0 18px 48px rgba(15,23,34,.08);padding:22px;margin-bottom:18px}.task-row{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.label{color:var(--coral);font-size:.72rem;font-weight:900;letter-spacing:.14em}.timer{font-variant-numeric:tabular-nums;font-size:2rem;font-weight:800;color:var(--ocean)}.timer.warning{color:var(--coral)}.status{display:flex;align-items:center;gap:10px;background:rgba(140,184,186,.16);border-radius:14px;padding:13px 15px;margin:20px 0;color:var(--ink)}.dot{width:10px;height:10px;border-radius:50%;background:#aab4b8;flex:0 0 auto}.active .dot,.opening .dot{background:var(--coral);box-shadow:0 0 0 5px rgba(228,113,98,.14)}.finished .dot,.feedback .dot{background:var(--ocean)}.error .dot{background:#b42318}.controls{display:grid;gap:10px}.button{border:0;border-radius:14px;padding:15px 18px;font-weight:800;cursor:pointer;min-height:54px}.button:disabled{opacity:.45;cursor:not-allowed}.primary,.danger{background:var(--coral);color:white}.secondary{background:var(--mist);color:var(--ink)}.disclosure{color:var(--muted);font-size:.75rem;line-height:1.45;margin:16px 2px 0}.error-box{color:#8a1c13;background:#fff0ee;padding:12px 14px;border-radius:12px}.hidden{display:none!important}.turns{display:grid;gap:12px}.turn{border-radius:16px;padding:13px 15px;max-width:90%}.turn small{display:block;font-weight:900;letter-spacing:.08em;text-transform:uppercase;margin-bottom:5px}.turn p{margin:0;line-height:1.5}.student{margin-left:auto;background:rgba(140,184,186,.18)}.examiner{background:rgba(228,113,98,.11)}.feedback-text{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65;font-size:.98rem}@media(min-width:560px){main{padding-top:36px}.controls{grid-template-columns:repeat(2,minmax(0,1fr))}.card{padding:28px}.brand-logo{width:112px;height:112px}}
.responding .dot{background:var(--ocean);animation:ackPulse 1s ease-in-out infinite}@keyframes ackPulse{0%,100%{transform:scale(.85);box-shadow:0 0 0 3px rgba(65,120,139,.12)}50%{transform:scale(1.15);box-shadow:0 0 0 8px rgba(65,120,139,.18)}}
.level-grid,.task-list{display:grid;gap:12px;margin-top:18px}.level-card,.task-choice{width:100%;text-align:left;border:1px solid rgba(65,120,139,.2);background:white;border-radius:18px;padding:18px;cursor:pointer;color:var(--ink)}.level-card:hover,.task-choice:hover{border-color:var(--ocean);transform:translateY(-1px)}.level-card strong,.task-choice strong{display:block;font-size:1.05rem}.level-card span,.task-choice span{display:block;color:var(--muted);font-size:.86rem;line-height:1.45;margin-top:5px}.level-card[disabled]{cursor:not-allowed;opacity:.58;transform:none}.back-button{border:0;background:transparent;color:var(--ocean);font-weight:800;padding:4px 0 12px;cursor:pointer}.practice-back{margin-top:10px;width:100%}@media(min-width:560px){.level-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
.feedback-line{display:block;white-space:pre-wrap}.feedback-line.success{color:#21653c;font-weight:750}.feedback-line.warning{color:#9a5b16;background:#fff7e8;border-radius:8px;padding:4px 7px;margin-top:4px}.feedback-line.corrected{color:#275f75;background:#eef8fa;border-left:3px solid var(--ocean);padding:4px 8px;font-weight:750}
</style></head><body><main>
<section class="hero"><img class="brand-logo" src="/simply-english-logo.jpeg" alt="Simply English"><p class="eyebrow">TRINITY GESE B2 VOICE COACH</p><h1>Interactive Task · Prototype</h1><p class="intro">A five-level route towards confident B2 interaction, with four-minute voice practice and feedback in Spanish.</p></section>
<section id="levelChooser" class="card"><p class="eyebrow">CHOOSE YOUR LEVEL</p><h2>Your route towards B2</h2><p class="intro">Levels 1–3 build the skills you need for B2. A high score there shows progress at that practice level, not a B2 pass. From Level 4, a strong performance can provide evidence consistent with the B2 target in this practice.</p><div id="levelGrid" class="level-grid"></div></section>
<section id="taskChooser" class="card hidden"><button id="backToLevels" class="back-button">← Back to levels</button><p id="taskLevelHeading" class="eyebrow">LEVEL 1 · CORE PRACTICE</p><h2>Choose a collaborative task</h2><div id="taskList" class="task-list"></div></section>
<section id="practiceCard" class="card hidden"><div class="task-row"><div><span id="levelLabel" class="label">LEVEL 1</span><h2 id="taskTitle">Choose a task</h2></div><div id="timer" class="timer">4:00</div></div><div id="status" class="status ready"><span class="dot"></span><span id="statusText">Ready to begin</span></div><p id="error" class="error-box hidden"></p><div class="controls"><button id="start" class="button primary">Start task</button><button id="finish" class="button danger hidden">Finish task</button><button id="getFeedback" class="button primary hidden">Get my feedback</button><button id="repeat" class="button secondary hidden">Try again</button></div><button id="chooseTask" class="button secondary practice-back">Choose another task</button><p class="disclosure">The examiner voice is AI-generated. Your microphone is used only during this practice session.</p></section>
<section id="transcriptCard" class="card hidden"><h2>Conversation transcript</h2><div id="turns" class="turns"></div></section>
<section id="feedbackCard" class="card hidden"><p class="eyebrow">COACHING REPORT</p><div id="feedback" class="feedback-text"></div></section>
</main><script>
const TASKS=${JSON.stringify(CLIENT_TASKS)},LEVELS=${JSON.stringify(CLIENT_LEVELS)},TOTAL=240;let selectedTask=null,status='ready',remaining=TOTAL,turns=[],pc=null,dc=null,timerId=null,openingPending=false,micTracks=[],weakTurnCount=0,supportCount=0,audioContext=null,turnInFlight=false,previousAttempt=null,attemptNumber=1;
const el=id=>document.getElementById(id);const labels={ready:'Ready to begin',connecting:'Connecting microphone…',opening:'Listen to the examiner’s opening',active:'Your task is in progress',responding:'✓ Answer received — examiner is responding…',finished:'Task finished — your transcript is ready',feedback:'Preparing your feedback…',error:'Something went wrong'};
function setStatus(s){status=s;el('status').className='status '+s;el('statusText').textContent=labels[s]||s;el('start').classList.toggle('hidden',!['ready','error'].includes(s));el('finish').classList.toggle('hidden',!['connecting','opening','active','responding'].includes(s));el('getFeedback').classList.toggle('hidden',s!=='finished');el('repeat').classList.toggle('hidden',!(s==='finished'||(s==='feedback'&&el('feedback').textContent)));el('chooseTask').disabled=['connecting','opening','active','responding'].includes(s)}
function showLevels(){stopConnection();selectedTask=null;previousAttempt=null;attemptNumber=1;el('levelChooser').classList.remove('hidden');el('taskChooser').classList.add('hidden');el('practiceCard').classList.add('hidden');el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden')}
function showTasks(level=selectedTask?.level||1){stopConnection();selectedTask=null;previousAttempt=null;attemptNumber=1;const profile=LEVELS.find(item=>item.level===level);el('taskLevelHeading').textContent='LEVEL '+level+' · '+(profile?.name||'PRACTICE').toUpperCase();renderTasks(level);el('levelChooser').classList.add('hidden');el('practiceCard').classList.add('hidden');el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden');el('taskChooser').classList.remove('hidden')}
function taskNumber(task){return TASKS.filter(item=>item.level===task.level).findIndex(item=>item.id===task.id)+1}
function selectTask(task){selectedTask=task;previousAttempt=null;attemptNumber=1;el('taskTitle').textContent='Task '+taskNumber(task)+' · '+task.title;el('levelLabel').textContent='LEVEL '+task.level;el('taskChooser').classList.add('hidden');el('practiceCard').classList.remove('hidden');remaining=TOTAL;updateTimer();setStatus('ready')}
function renderTasks(level){el('taskList').textContent='';TASKS.filter(task=>task.level===level).forEach((task,index)=>{const button=document.createElement('button');button.className='task-choice';const title=document.createElement('strong');title.textContent='Task '+(index+1)+' · '+task.title;button.append(title);button.onclick=()=>selectTask(task);el('taskList').appendChild(button)})}
function renderLevels(){el('levelGrid').textContent='';LEVELS.forEach(profile=>{const button=document.createElement('button');button.className='level-card';const title=document.createElement('strong');title.textContent='Level '+profile.level+' · '+profile.name;const detail=document.createElement('span');detail.textContent=profile.short+' · '+profile.stage;button.append(title,detail);button.onclick=()=>showTasks(profile.level);el('levelGrid').appendChild(button)})}
function showError(message){el('error').textContent=message;el('error').classList.remove('hidden');setStatus('error')}
function updateTimer(){el('timer').textContent=Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');el('timer').classList.toggle('warning',remaining<=30&&status==='active')}
function stopConnection(){if(timerId)clearInterval(timerId);timerId=null;if(dc)dc.close();if(pc){pc.getSenders().forEach(s=>s.track&&s.track.stop());pc.close()}if(audioContext)audioContext.close();dc=null;pc=null;micTracks=[];audioContext=null;turnInFlight=false}
function finishTask(){stopConnection();remaining=0;updateTimer();el('transcriptCard').classList.remove('hidden');setStatus('finished')}
function beginTimer(){if(timerId)return;setStatus('active');timerId=setInterval(()=>{remaining--;updateTimer();if(remaining<=0)finishTask()},1000)}
function addTurn(role,text){if(!text.trim())return;turns.push({role,text});const box=document.createElement('div');box.className='turn '+role.toLowerCase();const who=document.createElement('small');who.textContent=role;const p=document.createElement('p');p.textContent=text;box.append(who,p);el('turns').appendChild(box)}
function classifyStudentTurn(text){const raw=(text||'').trim();if(!raw)return 'weak';if(!/[a-z]/i.test(raw)&&/[\u0400-\u04ff\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/u.test(raw))return 'unclear';const compact=raw.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();const fillers=new Set(['ah','oh','uh','um','erm','er','mm','mhm','hmm','okay','ok','well']);if(!compact||compact.split(' ').every(word=>fillers.has(word)))return 'weak';return 'auto'}
function renderFeedback(text){const target=el('feedback');target.textContent='';String(text||'').split('\\n').forEach(line=>{const row=document.createElement('span');row.className='feedback-line';if(line.startsWith('✓ ACIERTO COMUNICATIVO:'))row.classList.add('success');else if(line.startsWith('△ LA IDEA FUE BUENA'))row.classList.add('warning');else if(line.startsWith('→ FORMA CORRECTA:'))row.classList.add('corrected');row.textContent=line||' ';target.appendChild(row)})}
function transcriptText(){return turns.map(t=>t.role+': '+t.text).join('\\n')}
async function playBase64Audio(base64){const bytes=Uint8Array.from(atob(base64),c=>c.charCodeAt(0));const buffer=await audioContext.decodeAudioData(bytes.buffer);await new Promise((resolve,reject)=>{const source=audioContext.createBufferSource();source.buffer=buffer;source.connect(audioContext.destination);source.onended=resolve;try{source.start()}catch(e){reject(e)}})}
async function requestExaminerResponse(mode,latest='',opening=false,supportIndex=0){if(turnInFlight||!selectedTask)return;turnInFlight=true;micTracks.forEach(t=>t.enabled=false);if(!opening)setStatus('responding');try{const response=await fetch('/api/examiner',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({opening,mode,latest,supportIndex,taskId:selectedTask.id,transcript:transcriptText()})});const raw=await response.text();let p;try{p=JSON.parse(raw)}catch{throw new Error(raw.slice(0,200)||'Could not prepare examiner audio.')}if(!response.ok)throw new Error(p.error||'Could not prepare examiner audio.');addTurn('Examiner',p.reply);await playBase64Audio(p.audio);if(opening){openingPending=false;beginTimer()}else if(status==='responding'){setStatus('active')}}catch(e){console.error(e);el('error').textContent=e.message||'Could not prepare examiner audio.';el('error').classList.remove('hidden');if(opening){showError(e.message||'Could not prepare examiner audio.')}else{setStatus('active')}}finally{turnInFlight=false;if(status==='active')micTracks.forEach(t=>t.enabled=true)}}
function onEvent(event){if(event.type==='conversation.item.input_audio_transcription.completed'){if(openingPending||turnInFlight||status!=='active')return;const text=event.transcript||'';const kind=classifyStudentTurn(text);addTurn('Student',kind==='unclear'?'[Speech not understood]':text);if(text.trim()){if(kind!=='weak'){weakTurnCount=0;requestExaminerResponse(kind,text)}else{weakTurnCount++;if(weakTurnCount>=2&&supportCount<3){weakTurnCount=0;supportCount++;requestExaminerResponse('nudge',text,false,supportCount)}}}}if(event.type==='error'){console.error(event);showError('The voice connection reported an error. Please try again.')}}
async function startTask(){if(!selectedTask)return;stopConnection();turns=[];weakTurnCount=0;supportCount=0;remaining=TOTAL;updateTimer();el('turns').textContent='';el('feedback').textContent='';el('transcriptCard').classList.add('hidden');el('feedbackCard').classList.add('hidden');el('error').classList.add('hidden');setStatus('connecting');try{audioContext=new (window.AudioContext||window.webkitAudioContext)();await audioContext.resume();pc=new RTCPeerConnection();const stream=await navigator.mediaDevices.getUserMedia({audio:true,echoCancellation:true,noiseSuppression:true,autoGainControl:true});micTracks=stream.getAudioTracks();micTracks.forEach(t=>t.enabled=false);stream.getTracks().forEach(t=>pc.addTrack(t,stream));dc=pc.createDataChannel('oai-events');dc.onmessage=m=>onEvent(JSON.parse(m.data));const offer=await pc.createOffer();await pc.setLocalDescription(offer);const response=await fetch('/api/session?task='+encodeURIComponent(selectedTask.id),{method:'POST',headers:{'Content-Type':'application/sdp'},body:offer.sdp});if(!response.ok){const p=await response.json();throw new Error(p.error||'Could not start session.')}await pc.setRemoteDescription({type:'answer',sdp:await response.text()});dc.onopen=()=>{setStatus('opening');openingPending=true;requestExaminerResponse('opening','',true)}}catch(e){console.error(e);stopConnection();showError(e.message||'Could not start the task.')}}
function retryTask(){if(!selectedTask||!turns.length)return;previousAttempt={taskId:selectedTask.id,transcript:transcriptText(),feedback:el('feedback').textContent};attemptNumber++;el('levelLabel').textContent='LEVEL '+selectedTask.level+' · ATTEMPT '+attemptNumber;startTask()}
async function getFeedback(){setStatus('feedback');el('error').classList.add('hidden');try{const transcript=turns.map(t=>t.role+': '+t.text).join('\\n');const prior=previousAttempt?.taskId===selectedTask.id?previousAttempt:null;const response=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({transcript,taskId:selectedTask.id,previousTranscript:prior?.transcript||'',previousFeedback:prior?.feedback||''})});const raw=await response.text();let p;try{p=JSON.parse(raw)}catch{throw new Error(response.ok?'The feedback service returned an unreadable response.':raw.slice(0,240)||'Could not generate feedback.')}if(!response.ok)throw new Error(p.error||p.details||'Could not generate feedback.');renderFeedback(p.feedback);el('feedbackCard').classList.remove('hidden');el('statusText').textContent=prior?'Feedback and progress comparison ready':'Feedback ready';el('repeat').classList.remove('hidden')}catch(e){showError(e.message||'Could not generate feedback.')}}
el('backToLevels').onclick=showLevels;el('chooseTask').onclick=()=>showTasks(selectedTask?.level||1);el('start').onclick=startTask;el('finish').onclick=finishTask;el('getFeedback').onclick=getFeedback;el('repeat').onclick=retryTask;renderLevels();updateTimer();setStatus('ready');showLevels();
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
