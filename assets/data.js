/* Serisphere shared data + store (localStorage-backed mock CMS) */
(function(){
  const DEFAULT_POSTS = [
    { id:"whole-person-care", cat:"Approach", date:"2026-02-04",
      title:"Whole-Person Care: Why Your Mind and Body Belong in the Same Plan",
      excerpt:"Anxiety, sleep, nutrition, and mood are deeply connected. Here's why treating them together works better than treating them apart.",
      body:"<p>For a long time, mental and physical health were treated in separate rooms — sometimes separate buildings. But your body doesn't work that way. Poor sleep can deepen depression; chronic stress can raise blood pressure; a gut out of balance can cloud your mood.</p><p>Whole-person care simply means looking at all of it together. At Serisphere, a psychiatric evaluation might lead to a conversation about your sleep schedule, your meals, and your stress load — because those are levers that move mental health too.</p><p>The goal isn't to add more to your plate. It's to find the few changes that make the biggest difference, and to make sure every part of your care team is working from the same plan.</p>" },
    { id:"everyday-habits", cat:"Wellness", date:"2026-02-11",
      title:"5 Everyday Habits That Quietly Shape Your Mental Health",
      excerpt:"Small, repeatable choices often matter more than big resolutions. Five that consistently move the needle.",
      body:"<p>1. <b>A consistent wake time.</b> Your body's clock craves regularity more than a perfect eight hours. Waking at the same time steadies mood and energy.</p><p>2. <b>Morning light.</b> Ten minutes of daylight early helps set your circadian rhythm and lift mood.</p><p>3. <b>Movement you'll actually repeat.</b> A daily walk beats an intense workout you dread and skip.</p><p>4. <b>Protein at breakfast.</b> Steadier blood sugar means steadier focus and fewer afternoon crashes.</p><p>5. <b>A wind-down ritual.</b> Dimming screens and lights an hour before bed signals your brain it's safe to rest.</p>" },
    { id:"understanding-anxiety", cat:"Conditions", date:"2026-02-18",
      title:"Understanding Anxiety: When Worry Becomes Something More",
      excerpt:"Everyone worries. Here's how to tell ordinary stress from an anxiety condition that deserves support.",
      body:"<p>Worry is a normal, even useful, response to uncertainty. It becomes something more when it's persistent, hard to control, and starts shrinking your life — avoiding calls, places, or decisions.</p><p>Physical signs matter too: a racing heart, restlessness, trouble sleeping, or a stomach in knots that has no medical cause. When these show up most days for weeks, it's worth talking to someone.</p><p>The encouraging news: anxiety is one of the most treatable conditions we see. Therapy, and sometimes medication, help the large majority of people feel meaningfully better.</p>" },
    { id:"medication-or-therapy", cat:"Treatment", date:"2026-02-25",
      title:"Medication and Therapy: Do You Need One, the Other, or Both?",
      excerpt:"A common question with a personal answer. How we think it through with each patient.",
      body:"<p>There's no universal rule — the right path depends on what you're facing, how severe it is, and what you prefer. For mild symptoms, therapy alone is often enough. For moderate to severe symptoms, the combination frequently works best.</p><p>Medication can turn the volume down enough to make therapy's skills easier to practice. Therapy builds tools that last long after a prescription ends. They're partners, not competitors.</p><p>Whatever we recommend, it's a shared decision. You'll always understand the why, the options, and what to expect.</p>" },
    { id:"sleep-and-mood", cat:"Integrative", date:"2026-03-04",
      title:"The Sleep–Mood Connection: Small Changes, Big Results",
      excerpt:"Sleep isn't a reward for a good day — it's often the cause of one. Where to start.",
      body:"<p>Sleep and mood run on a two-way street. Depression and anxiety disrupt sleep; poor sleep, in turn, worsens both. Fixing sleep is one of the highest-leverage things we can do for mental health.</p><p>Start with the basics: a steady schedule, a cool and dark room, caffeine before noon, and screens off before bed. If you lie awake for more than 20 minutes, get up and do something calm until you're sleepy.</p><p>If good habits aren't enough, that's worth a conversation — persistent insomnia is treatable, and it rarely resolves by willpower alone.</p>" },
    { id:"nutrition-calm-mind", cat:"Integrative", date:"2026-03-11",
      title:"Nutrition for a Calmer Mind: What the Research Actually Says",
      excerpt:"No miracle diets — just a few evidence-based patterns that support mood and focus.",
      body:"<p>Food isn't a substitute for treatment, but it's a real lever. Diets rich in vegetables, whole grains, legumes, fish, and olive oil are consistently linked with lower rates of depression.</p><p>Two practical anchors: keep blood sugar steady with protein and fiber, and support your gut with a variety of plants. Both influence the brain more than we once believed.</p><p>Skip the extremes. Sustainable, mostly-whole-food eating beats any rigid plan you can't keep for more than a week.</p>" },
    { id:"supporting-a-teen", cat:"Family", date:"2026-03-18",
      title:"Supporting a Teen Who's Struggling: A Parent's Starting Guide",
      excerpt:"Signs to watch for, what to say, and when to reach out for help.",
      body:"<p>Adolescence is turbulent by design, but some changes deserve attention: withdrawal from friends, falling grades, sleeping far more or less, loss of interest, or talk of hopelessness.</p><p>Lead with curiosity, not interrogation. \"I've noticed you seem down lately — I'm here whenever you want to talk\" opens more doors than \"What's wrong with you?\"</p><p>You don't have to have the answers. Reaching out to a professional early is a strength, not a failure — and it's often a relief for teens to have a neutral person to talk to.</p>" },
    { id:"burnout-vs-stress", cat:"Wellness", date:"2026-03-25",
      title:"Burnout Isn't Just Stress — Here's How to Tell the Difference",
      excerpt:"Stress says 'too much.' Burnout says 'empty.' Why the distinction changes what helps.",
      body:"<p>Stress is usually about too much — too many demands, not enough time. It tends to ease when the pressure lifts. Burnout is different: it's the exhaustion, cynicism, and detachment that build up when stress goes unaddressed for too long.</p><p>A weekend off can dent stress. Burnout usually needs bigger changes — boundaries, support, and sometimes a hard look at the load itself.</p><p>If you feel emotionally flat, dread things you used to enjoy, or run on fumes most days, that's worth taking seriously. Recovery is absolutely possible with the right support.</p>" },
    { id:"mindfulness-practical", cat:"Integrative", date:"2026-04-01",
      title:"Mindfulness Without the Mysticism: A Practical Beginner's Guide",
      excerpt:"You don't need incense or an hour a day. Just a few minutes and a willingness to notice.",
      body:"<p>Mindfulness is simply paying attention to the present moment without judging it. That's it. The research on its benefits for anxiety, focus, and stress is genuinely strong.</p><p>Try this: once a day, take sixty seconds to notice five things you can see, four you can hear, three you can feel. When your mind wanders — and it will — gently bring it back. That returning <i>is</i> the practice.</p><p>Consistency beats duration. Two minutes daily will do more than an hour once a month.</p>" },
    { id:"starting-therapy", cat:"Getting Started", date:"2026-04-08",
      title:"Starting Therapy: What to Expect at Your First Visit",
      excerpt:"Nervous about your first appointment? Here's exactly how it usually goes.",
      body:"<p>Your first visit is mostly a conversation. Your clinician will ask what brought you in, a bit about your history, and what you're hoping to change. There are no wrong answers, and you share only what you're comfortable sharing.</p><p>By the end, you'll usually leave with an initial sense of direction — a working plan and next steps. It's also your chance to see if it feels like a good fit; the relationship matters, and it's okay to say so.</p><p>Come as you are. You don't need to prepare a speech or have it all figured out — that's what we're here for.</p>" },
    { id:"depression-more-than-sadness", cat:"Conditions", date:"2026-04-15",
      title:"Depression: More Than Just Sadness",
      excerpt:"Depression often shows up as numbness, fatigue, or irritability — not only tears. Knowing the fuller picture helps you catch it sooner.",
      body:"<p>We tend to picture depression as sadness, but for many people it looks different: a flat, empty feeling; losing interest in things you used to enjoy; exhaustion that sleep doesn't fix; or a short fuse that surprises even you.</p><p>Physical signs count too — changes in appetite, aches without a clear cause, trouble concentrating. When several of these last most of the day for two weeks or more, it's worth a conversation.</p><p>Depression is highly treatable. Therapy, lifestyle changes, and sometimes medication help the vast majority of people feel like themselves again.</p>" },
    { id:"adult-adhd", cat:"Conditions", date:"2026-04-22",
      title:"Understanding Adult ADHD: Late Diagnosis and What Helps",
      excerpt:"Many adults spent years thinking they were 'lazy' or 'scattered.' A late ADHD diagnosis can be a turning point.",
      body:"<p>ADHD doesn't always look like a restless child. In adults it often shows up as chronic lateness, unfinished projects, trouble with focus and follow-through, or feeling perpetually overwhelmed by ordinary tasks.</p><p>A late diagnosis can be a relief — it reframes years of self-blame as a treatable difference in how your brain manages attention and motivation.</p><p>Support ranges from practical strategies and coaching to therapy and, when appropriate, medication. Most people find a combination works best.</p>" },
    { id:"building-resilience", cat:"Wellness", date:"2026-04-29",
      title:"Building Resilience: How to Bounce Back Stronger",
      excerpt:"Resilience isn't about never struggling — it's about recovering. And it's a skill you can build.",
      body:"<p>Resilient people aren't unbreakable; they've simply built habits that help them recover. The good news: those habits can be learned at any age.</p><p>Three that matter most: strong connections (people you can lean on), a sense of meaning (something bigger than the setback), and self-compassion (talking to yourself like you would a friend).</p><p>Start small. Each time you move through a hard moment without abandoning yourself, you're strengthening the muscle.</p>" },
    { id:"power-of-routine", cat:"Wellness", date:"2026-05-06",
      title:"Why Routine Is Quiet Medicine for Your Mind",
      excerpt:"Predictable rhythms lower anxiety and steady mood. Here's how to build a routine that supports you.",
      body:"<p>Uncertainty is tiring. A gentle daily routine removes dozens of small decisions and gives your nervous system something steady to rest on.</p><p>You don't need a rigid schedule — just a few reliable anchors: a consistent wake time, regular meals, movement, and a wind-down before bed. Those alone can meaningfully lift mood and focus.</p><p>Think of routine not as a cage, but as a trellis — a support structure that lets the rest of your life grow.</p>" },
    { id:"grief-and-loss", cat:"Family", date:"2026-05-13",
      title:"Grief Has No Timeline: Moving Through Loss",
      excerpt:"There's no 'right' way or schedule for grief. What helps is support, patience, and permission to feel.",
      body:"<p>Grief isn't a set of tidy stages you pass through and finish. It comes in waves, often when you least expect it, and it can resurface around anniversaries and milestones for years.</p><p>What helps isn't rushing it. Naming the loss, staying connected to others, and keeping gentle routines all give grief somewhere to go.</p><p>If grief becomes all-consuming — you can't function, or hopelessness sets in — that's a sign to reach out. You don't have to carry it alone.</p>" },
    { id:"postpartum-mental-health", cat:"Family", date:"2026-05-20",
      title:"Postpartum Mental Health: A Guide for New Parents",
      excerpt:"The 'baby blues' are common — but persistent anxiety or depression deserves real support. You're not failing.",
      body:"<p>The early weeks with a newborn are a whirlwind of joy and exhaustion. Mild mood swings in the first two weeks are common. But when low mood, anxiety, or intrusive thoughts persist beyond that, it may be postpartum depression or anxiety.</p><p>This is medical, not a character flaw — and it affects birthing and non-birthing parents alike. It's also very treatable.</p><p>If you're struggling, tell someone and reach out to a professional. Getting support is one of the most caring things you can do for your baby and yourself.</p>" },
    { id:"workplace-stress", cat:"Wellness", date:"2026-05-27",
      title:"Beating Workplace Stress Before It Beats You",
      excerpt:"A demanding job doesn't have to cost your health. Practical ways to protect your energy and focus.",
      body:"<p>Some work stress is normal. It becomes a problem when it never switches off — when you're answering messages at midnight, skipping breaks, and running on adrenaline.</p><p>Small boundaries protect you: a real lunch away from your desk, a hard stop at the end of the day, and short resets between tasks. Protecting recovery time isn't slacking — it's what makes sustained focus possible.</p><p>If stress is bleeding into your sleep, mood, or health, it's worth talking to someone before it becomes burnout.</p>" },
    { id:"gut-brain-connection", cat:"Integrative", date:"2026-06-03",
      title:"The Gut–Brain Connection: How Digestion Shapes Mood",
      excerpt:"Your gut and brain are in constant conversation. Supporting one can help the other.",
      body:"<p>The gut and brain talk to each other constantly through nerves, hormones, and the trillions of microbes living in your digestive tract. That's why stress can upset your stomach — and why gut health can influence mood.</p><p>You don't need a special diet. A variety of plants, fiber, fermented foods, and steady meals support a healthier gut microbiome, which research links to better mood and stress resilience.</p><p>It's not a cure-all, but it's a real, accessible lever — and it pairs well with the rest of your care.</p>" },
    { id:"setting-boundaries", cat:"Wellness", date:"2026-06-10",
      title:"Setting Boundaries Without Guilt",
      excerpt:"Boundaries aren't walls — they're how you protect your energy and keep relationships healthy.",
      body:"<p>If saying 'no' fills you with guilt, you're not alone. Many of us learned that being good means being endlessly available. But without boundaries, resentment and burnout quietly build.</p><p>A boundary can be simple and kind: 'I can't take that on right now,' or 'I need the evening to recharge.' You don't owe a lengthy justification.</p><p>Healthy boundaries actually strengthen relationships — they let you show up fully, instead of stretched thin and resentful.</p>" },
    { id:"digital-wellness", cat:"Integrative", date:"2026-06-17",
      title:"Digital Wellness: A Healthier Relationship With Your Screens",
      excerpt:"Technology isn't the enemy — but how we use it matters. Small shifts that protect focus and calm.",
      body:"<p>Screens aren't inherently bad, but endless scrolling can fragment attention, disrupt sleep, and quietly stoke anxiety through constant comparison.</p><p>Try a few gentle guardrails: no phone for the first and last 30 minutes of the day, notifications trimmed to what truly matters, and one screen-free ritual you protect daily.</p><p>The goal isn't to quit technology — it's to make sure you're using it, rather than it using you.</p>" }
  ];

  const DEFAULT_FLYERS = [
    { id:"new-patients", accent:"teal", tag:"Welcome", title:"Now Accepting New Patients", subtitle:"Whole-person care for mind and body", body:"Psychiatry · Therapy · Integrative wellness — in-person & telehealth.", cta:"Book a consultation today" },
    { id:"telehealth", accent:"plum", tag:"Telehealth", title:"Care From Anywhere", subtitle:"Secure telehealth across the state", body:"Meet with your clinician from home — same trusted team, no commute.", cta:"Schedule a virtual visit" },
    { id:"same-week", accent:"clay", tag:"Availability", title:"Same-Week Consultations", subtitle:"You don't have to wait to feel better", body:"New-patient appointments often available within days.", cta:"Request an appointment" },
    { id:"child-teen", accent:"teal", tag:"Ages 6+", title:"Child & Adolescent Care", subtitle:"Support for young people and families", body:"Compassionate, developmentally-informed care for kids and teens.", cta:"Talk to our team" },
    { id:"nutrition", accent:"sage", tag:"Integrative", title:"Nutrition & Wellness", subtitle:"Food, sleep, and stress — as part of your care", body:"Integrative coaching that supports your mental health, not just your body.", cta:"Explore integrative care" },
    { id:"anxiety", accent:"plum", tag:"You're not alone", title:"Managing Anxiety", subtitle:"One of the most treatable conditions we see", body:"Evidence-based therapy and, when helpful, medication — tailored to you.", cta:"Start feeling steadier" },
    { id:"couples-family", accent:"teal", tag:"Together", title:"Couples & Family Therapy", subtitle:"Rebuild communication and connection", body:"A supportive space to be heard — and to hear each other.", cta:"Begin as a family" },
    { id:"burnout", accent:"clay", tag:"Running on empty?", title:"Stress & Burnout Support", subtitle:"When rest isn't enough", body:"Practical tools and real support to help you recover and rebuild.", cta:"Get support today" },
    { id:"insurance", accent:"sage", tag:"Coverage", title:"Most Insurance Accepted", subtitle:"We'll help verify your benefits", body:"Transparent self-pay options too — no surprises before your first visit.", cta:"Verify my benefits" },
    { id:"mindfulness-group", accent:"plum", tag:"New group", title:"Mindfulness Group", subtitle:"Practical skills for calm and focus", body:"A guided, judgment-free group starting soon — space is limited.", cta:"Reserve your spot" }
  ];

  const DEFAULT_VIDEOS = [
    { id:"v-anxiety",    title:"Understanding Anxiety in 3 Minutes", desc:"A short, plain-language introduction to what anxiety is and when it's worth reaching out for support.", url:"" },
    { id:"v-breathing",  title:"A 2-Minute Calming Breath",          desc:"A simple guided breathing exercise you can use anytime you feel overwhelmed or anxious.", url:"" },
    { id:"v-first-visit",title:"What to Expect at Your First Visit",  desc:"A friendly walkthrough of your first appointment so you know exactly what to expect.", url:"" },
    { id:"v-sleep",      title:"Better Sleep, Better Mood",           desc:"Evidence-based tips you can start tonight to improve your sleep and, with it, your mood.", url:"" }
  ];
  const DEFAULT_PROTOCOLS = [
    { id:"p-intake", title:"New Patient Intake Guide",         cat:"Getting Started", desc:"What to bring and how to prepare for your first appointment at Serisphere.", url:"", file:"", fileName:"" },
    { id:"p-anxiety",title:"Anxiety Self-Management Toolkit",   cat:"Self-help",       desc:"Practical grounding and coping strategies to use between sessions.", url:"", file:"", fileName:"" },
    { id:"p-sleep",  title:"Sleep Hygiene Checklist",          cat:"Wellness",        desc:"A one-page checklist to help you build healthier, more consistent sleep habits.", url:"", file:"", fileName:"" },
    { id:"p-crisis", title:"Crisis & Safety Resources",        cat:"Safety",          desc:"Important numbers and steps to take if you or someone you love is in crisis.", url:"", file:"", fileName:"" }
  ];

  function read(key, fallback){ try{ var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } }
  function write(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); return true; }catch(e){ return false; } }

  const DEFAULT_CONTACT = {
    phone:"(555) 123-4567", email:"care@serisphere.example",
    addr1:"123 Wellness Way, Suite 200", addr2:"City, State ZIP",
    hours:"Mon–Fri 8am–6pm · Sat by appointment"
  };
  const DEFAULT_CRED = { user:"admin", pass:"serisphere2026" };

  window.SERI = {
    DEFAULT_POSTS: DEFAULT_POSTS,
    DEFAULT_FLYERS: DEFAULT_FLYERS,
    DEFAULT_CONTACT: DEFAULT_CONTACT,
    DEFAULT_VIDEOS: DEFAULT_VIDEOS,
    DEFAULT_PROTOCOLS: DEFAULT_PROTOCOLS,
    ADMIN_CODE: "serisphere2026",
    getPosts:  function(){ return read("seri-posts",  DEFAULT_POSTS.slice()); },
    savePosts: function(p){ return write("seri-posts", p); },
    getFlyers: function(){ return read("seri-flyers", DEFAULT_FLYERS.slice()); },
    saveFlyers:function(f){ return write("seri-flyers", f); },
    getVideos: function(){ return read("seri-videos", DEFAULT_VIDEOS.slice()); },
    saveVideos:function(v){ return write("seri-videos", v); },
    getProtocols: function(){ return read("seri-protocols", DEFAULT_PROTOCOLS.slice()); },
    saveProtocols:function(p){ return write("seri-protocols", p); },
    getContact:function(){ var c=read("seri-contact",{}); return Object.assign({},DEFAULT_CONTACT,c); },
    saveContact:function(c){ return write("seri-contact", c); },
    getCred:   function(){ var c=read("seri-cred",{}); return Object.assign({},DEFAULT_CRED,c); },
    saveCred:  function(c){ return write("seri-cred", c); },
    getComments: function(id){ return read("seri-cmt-"+id, []); },
    saveComments:function(id,c){ return write("seri-cmt-"+id, c); },
    resetAll: function(){ try{ Object.keys(localStorage).filter(k=>k.indexOf("seri-")===0).forEach(k=>localStorage.removeItem(k)); }catch(e){} },
    accentHex: { teal:"var(--teal)", plum:"var(--plum)", sage:"var(--sage)", clay:"var(--clay)" }
  };
})();
