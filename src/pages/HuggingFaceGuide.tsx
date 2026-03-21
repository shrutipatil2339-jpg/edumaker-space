import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Brain, Cpu, MessageSquare, Image, Mic, Languages, FileText, Sparkles,
  BookOpen, Users, Building2, Code, Play, ArrowRight, ChevronRight, Send,
  Zap, Clock, CheckCircle2, ExternalLink,
  LayoutGrid, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const models = [
  { icon: FileText, title: "Text Generation", desc: "Generate human-like text for stories, articles, and creative writing", tag: "NLP", color: "from-violet-500 to-purple-600" },
  { icon: Sparkles, title: "Sentiment Analysis", desc: "Detect emotions and opinions in text — positive, negative, or neutral", tag: "NLP", color: "from-blue-500 to-cyan-600" },
  { icon: Languages, title: "Translation", desc: "Translate text between 100+ languages instantly", tag: "NLP", color: "from-emerald-500 to-green-600" },
  { icon: Image, title: "Image Recognition", desc: "Identify objects, scenes, and patterns in images", tag: "Vision", color: "from-orange-500 to-amber-600" },
  { icon: Mic, title: "Speech Recognition", desc: "Convert spoken words to text with high accuracy", tag: "Audio", color: "from-pink-500 to-rose-600" },
  { icon: Brain, title: "Question Answering", desc: "Get precise answers from documents and knowledge bases", tag: "NLP", color: "from-indigo-500 to-blue-600" },
];

const experiments = [
  { icon: FileText, title: "Text Classification", desc: "Categorize text into predefined labels" },
  { icon: Sparkles, title: "Summarization", desc: "Condense long documents into key points" },
  { icon: Brain, title: "Question Answering", desc: "Extract answers from context passages" },
  { icon: Languages, title: "Translation", desc: "Convert text between languages" },
  { icon: Image, title: "Image Generation", desc: "Create images from text descriptions" },
  { icon: Mic, title: "Speech Processing", desc: "Transcribe and analyze audio" },
];

const spaces = [
  { title: "Sentiment Analyzer", desc: "Paste any text and get instant sentiment scores", icon: Sparkles, users: "12K" },
  { title: "Object Detection", desc: "Upload an image and detect objects automatically", icon: Image, users: "8.5K" },
  { title: "Story Generator", desc: "Enter a prompt and generate creative stories", icon: FileText, users: "15K" },
  { title: "Q&A System", desc: "Ask questions about any uploaded document", icon: Brain, users: "6.2K" },
];

const steps = [
  { step: 1, title: "Load a Model", code: "from transformers import pipeline\nmodel = pipeline('sentiment-analysis')", desc: "Import and load a pre-trained model in one line" },
  { step: 2, title: "Give Input", code: "result = model('Hugging Face is amazing!')", desc: "Pass your text, image, or audio as input" },
  { step: 3, title: "Observe Output", code: "# Output: [{'label': 'POSITIVE', 'score': 0.9998}]", desc: "Get structured predictions instantly" },
];

const HuggingFaceGuide = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: "Hi! I'm here to help you learn about Hugging Face. Ask me anything!" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [demoInput, setDemoInput] = useState("");
  const [demoOutput, setDemoOutput] = useState("");

  const handleChat = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");
    setTimeout(() => {
      const responses: Record<string, string> = {
        model: "A model is a trained AI that can perform tasks like translation, text generation, or image recognition. Hugging Face hosts thousands of them!",
        transformer: "Transformers are the architecture behind most modern AI models. They use attention mechanisms to understand context in data.",
        space: "Spaces are mini web apps on Hugging Face where you can try AI models directly in your browser — no coding required!",
        dataset: "Datasets on Hugging Face are collections of data used to train or evaluate AI models. You can find datasets for almost any task!",
        fine: "Fine-tuning means taking a pre-trained model and training it further on your own data to specialize it for your specific task.",
      };
      const key = Object.keys(responses).find((k) => userMsg.toLowerCase().includes(k));
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", text: key ? responses[key] : "Great question! Hugging Face makes AI accessible by providing pre-trained models, datasets, and tools. Try asking about models, transformers, spaces, datasets, or fine-tuning!" },
      ]);
    }, 600);
  };

  const handleDemo = () => {
    if (!demoInput.trim()) return;
    setDemoOutput("");
    setTimeout(() => {
      setDemoOutput(`Analysis of "${demoInput}":\n\n✅ Sentiment: POSITIVE (95.2% confidence)\n📊 Emotion: Joy / Excitement\n🏷️ Topics: Technology, AI, Learning`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero / Intro */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-40" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge className="mb-4 bg-white/10 text-white backdrop-blur">🤗 Beginner-Friendly Guide</Badge>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Understanding <span className="text-yellow-300">Hugging Face</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              The open-source platform revolutionizing how we build, share, and use AI models.
              Think of it as the GitHub for Artificial Intelligence.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mx-auto mt-10 flex max-w-lg gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, topics..."
                className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50 focus-visible:ring-yellow-300"
              />
            </div>
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">Search</Button>
          </motion.div>

          {/* Comparison */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mx-auto mt-12 grid max-w-md gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <Code className="mx-auto mb-2 h-8 w-8 text-blue-300" />
              <p className="font-heading font-bold text-white">GitHub</p>
              <p className="mt-1 text-sm text-white/60">Share &amp; collaborate on code</p>
            </div>
            <div className="rounded-xl border border-yellow-300/30 bg-yellow-300/10 p-5 backdrop-blur">
              <Brain className="mx-auto mb-2 h-8 w-8 text-yellow-300" />
              <p className="font-heading font-bold text-yellow-300">Hugging Face</p>
              <p className="mt-1 text-sm text-white/60">Share &amp; collaborate on AI models</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Hugging Face */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🤗 Platform Overview</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">What is Hugging Face?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A platform and community where developers and researchers share AI models, datasets, and tools — making AI accessible to everyone.
            </p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, label: "Find Models", desc: "Browse 400K+ models" },
              { icon: ArrowRight, label: "Download", desc: "Use models locally" },
              { icon: Cpu, label: "Integrate", desc: "Add to your apps" },
              { icon: Zap, label: "Fine-Tune", desc: "Customize with data" },
            ].map((item, i) => (
              <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="group h-full text-center transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="font-heading font-semibold text-foreground">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Useful for Students */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🎓 For Students</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">Why Hugging Face is Useful for Students</h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-destructive">
                    <Clock className="h-5 w-5" /> Without Hugging Face
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Huge datasets needed to train models", "Expensive GPU hardware required", "Days or weeks of training time"].map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 text-destructive">✗</span>
                      <span className="text-sm text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Card className="border-green-500/20 bg-green-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5" /> With Hugging Face
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Use pre-trained models — no training needed", "Run models in the cloud for free", "Experiment and learn in minutes"].map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 text-green-600 dark:text-green-400">✓</span>
                      <span className="text-sm text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready-Made Models */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🧩 Model Library</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">Explore Ready-Made Models</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Pre-trained models you can use right away</p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m, i) => (
              <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5">
                  <div className={`h-2 bg-gradient-to-r ${m.color}`} />
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${m.color} text-white`}>
                        <m.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">{m.tag}</Badge>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Models Work */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">⚙️ How It Works</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">How AI Models Work</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Three simple steps to use any model</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="overflow-hidden">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                      {s.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      <pre className="mt-3 overflow-x-auto rounded-lg bg-muted p-3 font-mono text-xs text-foreground">
                        {s.code}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiment Without Building */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🧪 Experiment</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">Experiment Without Building from Scratch</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Try these tasks instantly using pre-trained models</p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((e, i) => (
              <motion.div key={e.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="group cursor-pointer transition-all hover:border-primary hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <e.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">{e.title}</p>
                      <p className="text-xs text-muted-foreground">{e.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Hub */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🏛️ Model Hub</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">Hugging Face Model Hub</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A vast collection of 400,000+ models shared by researchers, developers, and companies worldwide.
            </p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl">
            <Tabs defaultValue="contributors" className="w-full">
              <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="contributors">Contributors</TabsTrigger>
                <TabsTrigger value="details">Model Details</TabsTrigger>
                <TabsTrigger value="code">Code Example</TabsTrigger>
              </TabsList>
              <TabsContent value="contributors" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: BookOpen, label: "Researchers", desc: "Publishing cutting-edge models" },
                    { icon: Users, label: "Developers", desc: "Building practical applications" },
                    { icon: Building2, label: "Companies", desc: "Google, Meta, Microsoft & more" },
                  ].map((c, i) => (
                    <motion.div key={c.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                      <Card className="text-center">
                        <CardContent className="p-6">
                          <c.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                          <p className="font-heading font-semibold text-foreground">{c.label}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="details" className="mt-6">
                <Card>
                  <CardContent className="space-y-4 p-6">
                    {[
                      { label: "Description", value: "What the model does and how it was trained" },
                      { label: "Task", value: "Text Classification, Translation, Image Generation, etc." },
                      { label: "Example Usage", value: "Code snippets showing how to use the model" },
                      { label: "API Access", value: "Use models via the Inference API without downloading" },
                    ].map((d) => (
                      <div key={d.label} className="flex items-start gap-3">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">{d.label}: </span>
                          <span className="text-sm text-muted-foreground">{d.value}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-foreground">
{`from transformers import pipeline

# Load a sentiment analysis model
classifier = pipeline("sentiment-analysis")

# Analyze text
result = classifier("I love learning about AI!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🚀 Spaces</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">Hugging Face Spaces</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Small web applications that run AI models directly in your browser — no setup required.
            </p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {spaces.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="group transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" /> {s.users} users
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    <Button variant="outline" size="sm" className="mt-4 gap-1">
                      Try Demo <ExternalLink className="h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mx-auto mt-12 max-w-md">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Built With</CardTitle>
                <CardDescription>Technologies powering Spaces</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center gap-6">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <LayoutGrid className="h-6 w-6" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">Gradio</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                    <Globe className="h-6 w-6" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">Streamlit</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Try Demo + Chatbot */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <Badge variant="outline" className="mb-3">🎮 Interactive</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground">Try It Yourself</h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Demo Box */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Play className="h-5 w-5 text-primary" /> Try Demo — Sentiment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input value={demoInput} onChange={(e) => setDemoInput(e.target.value)} placeholder="Type a sentence to analyze..." onKeyDown={(e) => e.key === "Enter" && handleDemo()} />
                    <Button onClick={handleDemo} className="shrink-0">Analyze</Button>
                  </div>
                  {demoOutput && (
                    <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4 font-mono text-sm text-foreground">{demoOutput}</pre>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Chatbot */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="h-5 w-5 text-primary" /> AI Learning Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-4 flex-1 space-y-3 overflow-y-auto rounded-lg bg-muted/50 p-4" style={{ maxHeight: 240 }}>
                    {chatMessages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ask about Hugging Face..." onKeyDown={(e) => e.key === "Enter" && handleChat()} />
                    <Button onClick={handleChat} size="icon" className="shrink-0"><Send className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HuggingFaceGuide;
