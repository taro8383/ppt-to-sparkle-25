import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Recycle, Leaf, Factory, Smartphone, BarChart3, Globe2, Coins,
  ArrowRight, Building2, Truck, Cpu, ScanLine, Wallet, Target, MapPin,
  ChevronRight, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroCity from "@/assets/hero-city.jpg";
import recyclingMetal from "@/assets/recycling-metal.jpg";
import factoryImg from "@/assets/factory.jpg";
import appPhone from "@/assets/app-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STA · Reciclaje Urbano Inteligente" },
      { name: "description", content: "STA\\CUT: ecosistema urbano para reciclaje de metales, app ciudadana y comercio de carbono en Europa." },
      { property: "og:title", content: "STA · Reciclaje Urbano Inteligente" },
      { property: "og:description", content: "Reciclaje, datos de carbono y participación ciudadana en una sola plataforma." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const sections = [
  { id: "perfil", label: "Perfil" },
  { id: "ventajas", label: "Ventajas" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "app", label: "App" },
  { id: "expansion", label: "Expansión" },
  { id: "carbono", label: "Carbono" },
  { id: "vision", label: "Visión" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Profile />
      <Advantages />
      <Technology />
      <AppSection />
      <Expansion />
      <Carbon />
      <Goals />
      <Vision />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground">
            <Recycle className="w-4 h-4" />
          </span>
          STA<span className="text-muted-foreground">\CUT</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 border-0">
          Descargar App <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroCity} alt="Ciudad sostenible STA" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="absolute inset-0 grain" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-8">
          <Badge className="bg-secondary text-primary border-primary/30 mb-6">
            <Sparkles className="w-3 h-3 mr-1.5" /> Ecosistema urbano · desde 2016
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Reciclaje urbano,<br />
            <span className="text-gradient">reinventado.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            STA\CUT integra recolección de metales, una app ciudadana de un solo clic y un centro de comercio de
            carbono para construir el ecosistema urbano sostenible de Europa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow">
              Explorar la plataforma <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-card/50">
              Ver tecnología
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 grid grid-cols-2 gap-3"
        >
          {[
            { v: "5K", l: "Toneladas/año de metal" },
            { v: "4K", l: "Toneladas de electrónicos" },
            { v: "3", l: "Países activos" },
            { v: "1M+", l: "Usuarios objetivo (3 años)" },
          ].map((s) => (
            <Card key={s.l} className="bg-card-gradient border-border p-5">
              <div className="text-4xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-2">{s.l}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-3xl mb-14"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{kicker}</div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {desc && <p className="text-lg text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

function Profile() {
  return (
    <section id="perfil" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Perfil de la empresa"
          title="Una década reinventando los recursos urbanos."
          desc="Fundada en 2016, STA\CUT opera plantas de reciclaje en Polonia, Bosnia y Herzegovina y Montenegro, con canales de venta hacia Malasia, China y más allá."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Building2, k: "2016", t: "Año de fundación", d: "Origen en el comercio de recuperación de metales." },
            { icon: Globe2, k: "3 países", t: "Red de plantas", d: "Polonia · Bosnia · Montenegro como base operativa." },
            { icon: Cpu, k: "2023", t: "Nace STA City", d: "Ecosistema de app urbana tras años de I+D." },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card-gradient border-border p-8 h-full hover:border-primary/50 transition">
                <c.icon className="w-8 h-8 text-primary mb-6" />
                <div className="text-3xl font-bold mb-1">{c.k}</div>
                <div className="text-sm font-medium mb-3">{c.t}</div>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-stretch">
          <Card className="overflow-hidden border-border p-0">
            <img src={factoryImg} alt="Planta de reciclaje STA" width={1600} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </Card>
          <Card className="bg-card-gradient border-border p-10 flex flex-col justify-center">
            <Badge className="w-fit bg-primary/10 text-primary border-primary/30 mb-4">Capacidad operativa</Badge>
            <h3 className="text-3xl font-bold mb-4">5.000 t de metal · 4.000 t de electrónicos</h3>
            <p className="text-muted-foreground">
              STA y sus socios reciclan y procesan al año 5.000 toneladas de metales de desecho, con capacidad adicional para
              4.000 toneladas de aparatos eléctricos en sus plantas europeas.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const data = [
    { i: BarChart3, t: "Recolección de datos", d: "Electrodomésticos, tipos de metal y agregación por niveles." },
    { i: Leaf, t: "Consumo y reutilización", d: "Hogar, sector público, reciclaje y reutilización." },
    { i: Globe2, t: "Datos de carbono", d: "Recopilación y análisis continuo de emisiones." },
  ];
  const goals = [
    { v: "−5%", l: "Tratamiento de residuos del gobierno" },
    { v: "−55%", l: "Contaminación de agua y suelo" },
    { v: "+50", l: "Empleos directos generados" },
    { v: "+100", l: "Aportes fiscales por operación" },
  ];
  return (
    <section id="ventajas" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Ventajas operativas"
          title="Diseñado para gobernar los residuos urbanos."
          desc="Un sistema de datos que conecta hogares, sector público, gastronomía y administración pública en una sola capa."
        />
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {data.map((d) => (
            <Card key={d.t} className="bg-card-gradient border-border p-8">
              <d.i className="w-7 h-7 text-accent mb-5" />
              <h3 className="text-xl font-semibold mb-2">{d.t}</h3>
              <p className="text-sm text-muted-foreground">{d.d}</p>
            </Card>
          ))}
        </div>
        <Card className="bg-gradient-primary text-primary-foreground p-10 border-0">
          <div className="grid md:grid-cols-4 gap-8">
            {goals.map((g) => (
              <div key={g.l}>
                <div className="text-5xl font-bold">{g.v}</div>
                <div className="text-sm mt-2 opacity-80">{g.l}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Technology() {
  const steps = [
    { i: Truck, t: "Recolección", d: "Recogida de todo tipo de desechos metálicos y electrónicos." },
    { i: Factory, t: "Fundición", d: "Procesamiento a partir de biopellets como materia prima." },
    { i: Recycle, t: "Producción", d: "Primera y tercera fase de fabricación de derivados." },
    { i: Truck, t: "Carga y envío", d: "Logística hacia plantas socias y compradores globales." },
  ];
  return (
    <section id="tecnologia" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Tecnología de reciclaje"
          title="Del desecho urbano al aluminio listo para reuso."
          desc="Un proceso lineal de cuatro fases convierte la chatarra urbana y los electrónicos en materia prima certificada."
        />
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <Card className="lg:col-span-2 overflow-hidden border-border p-0 min-h-[320px]">
            <img src={recyclingMetal} alt="Metales reciclados" width={1280} height={896} loading="lazy" className="w-full h-full object-cover" />
          </Card>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="bg-card-gradient border-border p-6 h-full hover:border-primary/40 transition">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center">
                      <s.i className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-muted-foreground">Fase {i + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  const [step, setStep] = useState(0);
  const flow = [
    { i: Smartphone, t: "Descargar y abrir", d: "El usuario instala la app STA City y selecciona el servicio." },
    { i: ScanLine, t: "Escanear y vender", d: "Escanea chatarra o electrónicos: confirma cantidad y valor monetario." },
    { i: Coins, t: "Puntos de carbono", d: "Obtén puntos «de carbono» por cada operación realizada." },
    { i: Wallet, t: "Canjear por dinero", d: "Convierte los puntos acumulados en efectivo cuando quieras." },
  ];
  return (
    <section id="app" className="py-28 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-10 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <img src={appPhone} alt="App STA City" width={1024} height={1280} loading="lazy" className="relative rounded-3xl shadow-elegant w-full max-w-sm mx-auto" />
        </div>
        <div className="lg:col-span-7">
          <SectionHeader
            kicker="App STA City"
            title="Un clic. Tus residuos. Tu beneficio."
            desc="Vende cualquier tipo de chatarra o electrónico desde casa, recibe pago y acumula puntos de carbono canjeables."
          />
          <div className="space-y-2">
            {flow.map((s, i) => (
              <button
                key={s.t}
                onClick={() => setStep(i)}
                className={`w-full text-left flex items-start gap-4 p-5 rounded-xl border transition ${
                  step === i
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border bg-card-gradient hover:border-primary/40"
                }`}
              >
                <span className={`w-10 h-10 rounded-lg grid place-items-center shrink-0 ${
                  step === i ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-primary"
                }`}>
                  <s.i className="w-5 h-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Paso 0{i + 1}</span>
                  </div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                </div>
                <ChevronRight className={`w-4 h-4 mt-3 transition ${step === i ? "text-primary translate-x-1" : "text-muted-foreground"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Expansion() {
  const cities = [
    { name: "Varsovia", country: "Polonia", phase: "Piloto" },
    { name: "Sarajevo", country: "Bosnia y Herzegovina", phase: "Piloto" },
    { name: "Podgorica", country: "Montenegro", phase: "Próxima" },
    { name: "Cracovia", country: "Polonia", phase: "Fase 2" },
  ];
  return (
    <section id="expansion" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Plan de expansión"
          title="Ciudades piloto para un ecosistema regional."
          desc="STA selecciona ciudades estratégicas para reducir más del 30% las emisiones de carbono regionales y disminuir la contaminación local."
        />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            {cities.map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="bg-card-gradient border-border p-6 flex items-center gap-5 hover:border-primary/50 transition group">
                  <span className="w-12 h-12 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:scale-110 transition">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-muted-foreground">{c.country}</div>
                  </div>
                  <Badge variant="outline" className="border-primary/40 text-primary">{c.phase}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
          <Card className="bg-card-gradient border-border p-10">
            <Target className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">El reto europeo</h3>
            <p className="text-muted-foreground mb-6">
              Más del <span className="text-foreground font-semibold">45%</span> del territorio europeo es montañoso o
              accidentado, y la chatarra y desechos electrónicos urbanos crecen un{" "}
              <span className="text-foreground font-semibold">20% cada año</span>. STA ofrece la red logística y digital
              para revertirlo.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: "30%", l: "Reducción CO₂ regional" },
                { v: "45%", l: "Territorio difícil cubierto" },
                { v: "20%", l: "Crecimiento anual residuos" },
              ].map((s) => (
                <div key={s.l} className="p-4 rounded-lg bg-background/40">
                  <div className="text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Carbon() {
  return (
    <section id="carbono" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Centro de comercio de carbono"
          title="Del residuo certificado al activo negociable."
          desc="STA convierte cada operación de reciclaje en datos auditables y certificados que las marcas pueden comprar como prueba de reducción de emisiones."
        />
        <Tabs defaultValue="modelo" className="w-full">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="modelo">Modelo EU ETS</TabsTrigger>
            <TabsTrigger value="sta">Modelo STA</TabsTrigger>
          </TabsList>
          <TabsContent value="modelo" className="mt-6">
            <Card className="bg-card-gradient border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Marco actual europeo</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "La UE asigna cuotas de emisión de carbono a empresas.",
                  "Las compañías reportan periódicamente sus emisiones.",
                  "Excedentes de carbono pueden transferirse; déficits se compran.",
                  "El reciclaje de materiales y compostaje cuentan como reducción.",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-primary mt-1">●</span>{t}</li>
                ))}
              </ul>
            </Card>
          </TabsContent>
          <TabsContent value="sta" className="mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { t: "Clasificar por marca", d: "STA segmenta residuos urbanos por marca y material, generando datos trazables." },
                { t: "Venta de datos certificados", d: "Los datos se venden a marcas que generan el mismo tipo de residuos." },
                { t: "Prueba de reducción", d: "Las empresas usan los datos y videos como prueba de reducción de carbono." },
              ].map((s, i) => (
                <Card key={s.t} className="bg-card-gradient border-border p-6">
                  <div className="text-xs text-primary mb-3">PASO 0{i + 1}</div>
                  <h3 className="font-semibold mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function Goals() {
  const rows = [
    { k: "Ciudades activas", a: "4 · 300 mil usuarios", b: "8 · 500 mil usuarios" },
    { k: "Planta de procesamiento", a: "1 · 5M€ en 12 meses", b: "1 · 8M€+ en 24 meses" },
    { k: "Capacidad anual", a: "3.600 t / año", b: "20.000+ t / año" },
    { k: "Puntos de recolección", a: "3 · 100 t/mes", b: "6 · 300 t/mes" },
    { k: "Agentes de la app", a: "6", b: "20" },
  ];
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Datos operativos"
          title="De piloto a operación industrial en dos etapas."
        />
        <Card className="bg-card-gradient border-border overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-4 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <div>Métrica</div>
            <div>Primera etapa</div>
            <div>Segunda etapa</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.k} className={`grid grid-cols-3 px-6 py-5 items-center ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="font-medium">{r.k}</div>
              <div className="text-muted-foreground">{r.a}</div>
              <div className="text-primary font-medium">{r.b}</div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 grain opacity-50" />
      <div className="relative max-w-5xl mx-auto text-center">
        <Badge className="bg-primary/15 text-primary border-primary/30 mb-6">Visión 2028</Badge>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Más del <span className="text-gradient">70%</span> de los residuos metálicos<br />urbanos, reciclados.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          En los próximos tres años, STA alcanzará más de un millón de usuarios en Europa, procesará 10.000+ toneladas de
          residuos y normalizará el comercio de emisiones de carbono de los metales.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow">
            Unirse a la red <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-border">
            Contactar al equipo
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-gradient-primary grid place-items-center text-primary-foreground">
            <Recycle className="w-3.5 h-3.5" />
          </span>
          <span className="font-semibold text-foreground">STA\CUT</span>
          <span>· Reciclaje urbano inteligente</span>
        </div>
        <div>© {new Date().getFullYear()} STA City. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
