import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Recycle,
  Leaf,
  Factory,
  Smartphone,
  BarChart3,
  Globe2,
  Coins,
  ArrowRight,
  Building2,
  Truck,
  Cpu,
  ScanLine,
  Wallet,
  Target,
  MapPin,
  ChevronRight,
  Sparkles,
  Database,
  Layers,
  Server,
  Network,
  Settings,
  Shield,
  Home,
  UtensilsCrossed,
  GraduationCap,
  Hotel,
  Users,
  Gavel,
  Flame,
  Package,
  CircleDollarSign,
  FileCheck,
  Gauge,
  Trash2,
  Mountain,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroCity from "@/assets/hero-city.jpg";
import recoveredMaterials from "@/assets/recycling-metal.jpg";
import factoryImg from "@/assets/factory.jpg";
import appPhone from "@/assets/app-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STA · Reciclaje Urbano Inteligente" },
      {
        name: "description",
        content:
          "STA\\CUT: ecosistema urbano para procesamiento integral de residuos, app ciudadana y comercio de carbono en Europa.",
      },
      { property: "og:title", content: "STA · Reciclaje Urbano Inteligente" },
      {
        property: "og:description",
        content:
          "Residuos urbanos, datos de carbono y participación ciudadana en una sola plataforma.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const sections = [
  { id: "top", label: "Inicio" },
  { id: "empedrado", label: "Empedrado" },
  { id: "perfil", label: "Perfil" },
  { id: "ventajas", label: "Ventajas" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "arquitectura", label: "Arquitectura" },
  { id: "app", label: "App" },
  { id: "expansion", label: "Expansión" },
  { id: "carbono", label: "Carbono" },
  { id: "datos", label: "Datos" },
  { id: "vision", label: "Visión" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Empedrado />
      <Profile />
      <Advantages />
      <Technology />
      <Architecture />
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
        <Button
          size="sm"
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 border-0"
        >
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
        <img
          src={heroCity}
          alt="Ciudad sostenible STA"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="absolute inset-0 grain" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-8">
          <Badge className="bg-secondary text-primary border-primary/30 mb-6">
            <Sparkles className="w-3 h-3 mr-1.5" /> Ecosistema urbano · desde 2016
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Reciclaje urbano,
            <br />
            <span className="text-gradient">reinventado.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            STA\CUT integra recolección, clasificación y valorización de residuos urbanos, una app
            ciudadana de un solo clic y un centro de comercio de carbono para construir el
            ecosistema urbano sostenible de Europa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow"
            >
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
            { v: "Mixtos", l: "Residuos urbanos de hogares y comercios" },
            { v: "E-waste", l: "Electrónicos y aparatos recuperables" },
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

const empedradoImpact = [
  { value: "130+", label: "empleos directos regionales estimados", icon: Users },
  { value: "$540M", label: "ahorro fiscal anual por desvío del vertedero", icon: Coins },
  { value: "83%", label: "más recolección de críticos con app en 1 año", icon: Smartphone },
  { value: "96%", label: "menos metano con compostaje aeróbico", icon: Leaf },
];

const empedradoPillars = [
  {
    id: "empleo",
    icon: Users,
    kicker: "💼 Una Fábrica de Empleo Genuino",
    title: "El reciclaje es una industria intensiva en mano de obra.",
    body: "Las cifras son contundentes: 36 empleos directos por cada 10.000 toneladas de residuos reciclados. El enterramiento genera 6 empleos para la misma cantidad y la incineración apenas 1. En actividades de reutilización, el efecto multiplicador puede llegar a 200 veces más puestos de trabajo que en vertederos convencionales.",
    metrics: [
      { value: "36", label: "empleos directos / 10.000 t recicladas" },
      { value: "6", label: "empleos en relleno sanitario" },
      { value: "1", label: "empleo en incineración" },
      { value: "200x", label: "multiplicador en reutilización" },
    ],
  },
  {
    id: "presupuesto",
    icon: Coins,
    kicker: "💰 Eficiencia Presupuestaria y Valor de Mercado",
    title: "No enterremos recursos que tienen un valor de mercado real.",
    body: "Al desviar residuos del vertedero, el municipio puede ahorrar más de $540.000.000 de pesos anuales en tasas de disposición y logística, con recuperación de inversión en menos de siete años. Cada tonelada reciclada inyecta aproximadamente $94.900 en salarios locales y más de $13.700 en recaudación fiscal directa.",
    metrics: [
      { value: "$540M", label: "ahorro fiscal directo anual" },
      { value: "<7 años", label: "recuperación estimada de inversión" },
      { value: "$94.900", label: "salarios locales por tonelada" },
      { value: "$13.700", label: "recaudación fiscal directa por tonelada" },
      { value: "95%", label: "menos energía para aluminio vs. virgen" },
      { value: "50%", label: "ahorro energético en acero y vidrio" },
      { value: "64%", label: "energía ahorrada en papel" },
      { value: "80%", label: "agua ahorrada en papel" },
    ],
  },
  {
    id: "app",
    icon: Smartphone,
    kicker: "📱 Tecnología al Servicio del Vecino",
    title: "Una app de recompensas para maximizar la recuperación.",
    body: "Vecinos y comercios podrán solicitar con un clic el retiro domiciliario de residuos de alto valor. Cada retiro genera Puntos de Carbono basados en ahorro ambiental verificado y una moneda verde canjeable por productos promocionales o efectivo.",
    metrics: [
      { value: "1 clic", label: "solicitud de retiro domiciliario" },
      { value: "83%", label: "aumento de recolección crítica observado" },
      { value: "110 kg", label: "CO₂e secuestrado por t de compost" },
      { value: "$65.400", label: "valorización internacional por tonelada" },
    ],
  },
  {
    id: "compost",
    icon: Leaf,
    kicker: "🌱 El “Oro Verde”",
    title: "Compostaje y créditos de carbono para el sector agropecuario.",
    body: "Su municipio puede ser proveedor de fertilizante biológico para toda la zona. Cada tonelada de compost aplicada al suelo secuestra 110 kg de CO₂ equivalente; el compostaje aeróbico reduce en un 96% las emisiones de metano asociadas a residuos orgánicos en basurales.",
    metrics: [
      { value: "110 kg", label: "CO₂e secuestrado por t de compost" },
      { value: "96%", label: "reducción de emisiones de metano" },
      { value: "$43.600", label: "retorno directo productor/municipio" },
      { value: "100%", label: "valor biológico devuelto al suelo" },
    ],
  },
  {
    id: "salud",
    icon: Shield,
    kicker: "🏥 Salud Pública",
    title: "Una ciudad que respira mejor.",
    body: "La planta de reciclaje es una política sanitaria regional. La gestión eficiente con reciclaje y compostaje puede reducir la quema de basura y la contaminación ambiental, con beneficios de calidad del aire que también alcanzan a ciudades vecinas.",
    metrics: [
      { value: "-2,07%", label: "NO₂ en centros urbanos" },
      { value: "-3,62%", label: "CO en centros urbanos" },
      { value: "120", label: "muertes prematuras prevenibles / millón" },
      { value: "regional", label: "impacto positivo en municipios vecinos" },
    ],
  },
  {
    id: "sede",
    icon: Globe2,
    kicker: "🌎 Sede Regional",
    title: "El cerebro operativo para Latinoamérica.",
    body: "La primera municipalidad en adoptar este sistema se posiciona como centro tecnológico y operativo regional: base de datos central, monitoreo, recaudación fiscal superior y exportación de soluciones para municipios vecinos.",
    metrics: [
      { value: "100.000", label: "personas en consorcio regional" },
      { value: "hub", label: "base de datos y monitoreo central" },
      { value: "$13.700", label: "ingreso fiscal directo por tonelada" },
      { value: "LATAM", label: "modelo exportable de soluciones urbanas" },
    ],
  },
];

function Empedrado() {
  return (
    <section id="empedrado" className="relative overflow-hidden py-28 px-6 bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-primary opacity-[0.06]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-4xl mb-12"
        >
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
            <Target className="w-3.5 h-3.5 mr-1.5" /> Empedrado · Gestión Regional de Vanguardia
          </Badge>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Empedrado: el salto hacia una{" "}
            <span className="text-gradient">gestión regional de vanguardia</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Señor Intendente: deje de gestionar “basura” y lidere la recuperación de recursos. De un
            municipio de 20.000 habitantes a un Consorcio Regional de 100.000 personas, el impacto
            de una planta de reciclaje no es solo ambiental: es una reactivación económica con
            números verificados.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {empedradoImpact.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Card className="bg-card-gradient border-border p-6 h-full hover:border-primary/50 transition group">
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:scale-110 transition">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {item.value}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-6">
          {empedradoPillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="bg-card-gradient border-border p-6 lg:p-8 hover:border-primary/50 transition overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-70" />
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="relative w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow">
                        <pillar.icon className="w-6 h-6" />
                        <span className="absolute -inset-1 rounded-2xl bg-primary/20 blur-lg -z-10" />
                      </span>
                      <div>
                        <div className="text-xs text-primary uppercase tracking-wider mb-1">
                          Pilar {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold">{pillar.title}</h3>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/40 text-primary mb-4">
                      {pillar.kicker}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
                  </div>
                  <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
                    {pillar.metrics.map((metric) => (
                      <motion.div
                        key={metric.label}
                        whileHover={{ scale: 1.025 }}
                        className="rounded-xl bg-background/40 border border-border/50 p-4"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
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
          desc="Fundada en 2016, STA\CUT opera plantas de tratamiento en Polonia, Bosnia y Herzegovina y Montenegro, con capacidad para valorizar materiales recuperables en circuitos industriales."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              k: "2016",
              t: "Año de fundación",
              d: "Origen en la recuperación y valorización de materiales urbanos.",
            },
            {
              icon: Globe2,
              k: "3 países",
              t: "Red de plantas",
              d: "Polonia · Bosnia · Montenegro como base operativa.",
            },
            {
              icon: Cpu,
              k: "2023",
              t: "Nace STA City",
              d: "Ecosistema de app urbana tras años de I+D.",
            },
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
            <img
              src={factoryImg}
              alt="Planta de reciclaje STA"
              width={1600}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Card>
          <Card className="bg-card-gradient border-border p-10 flex flex-col justify-center">
            <Badge className="w-fit bg-primary/10 text-primary border-primary/30 mb-4">
              Capacidad operativa
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              Residuos mixtos · electrónicos · recuperables
            </h3>
            <p className="text-muted-foreground">
              STA y sus socios reciben, clasifican y procesan flujos urbanos de residuos: orgánicos,
              plásticos, textiles, electrónicos, inertes y fracciones metálicas. Cada material se
              deriva a reutilización, reciclaje, compostaje, recuperación energética o valorización
              industrial según su trazabilidad y demanda de mercado.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const dataPillars = [
    {
      i: Database,
      t: "Recolección de datos",
      items: [
        "Datos actualizados sobre electrodomésticos",
        "Datos sobre fracciones recuperables",
        "Análisis de agregación por niveles de datos",
      ],
    },
    {
      i: Leaf,
      t: "Consumo y reutilización",
      items: [
        "Consumo de los hogares",
        "Consumo público",
        "Datos sobre separación, reciclaje y reutilización",
        "Datos de consumo",
      ],
    },
    {
      i: Globe2,
      t: "Emisiones de carbono",
      items: [
        "Datos sobre las emisiones de «carbono»",
        "Recopilación continua de fuentes urbanas",
        "Análisis de huella por sector",
      ],
    },
  ];
  const goals = [
    { v: "−5%", l: "Tratamiento de residuos por parte del gobierno" },
    { v: "−55%", l: "Tasa de contaminación de agua y suelo" },
    { v: "+50", l: "Empleos directos generados" },
    { v: "100+", l: "Aportes fiscales por operación" },
    { v: "+", l: "Datos ambientales abiertos a la ciudad" },
    { v: "↑", l: "Ingresos fiscales y presupuestarios" },
  ];
  const scope = [
    { i: Home, t: "Residentes" },
    { i: Hotel, t: "Hoteles" },
    { i: Factory, t: "Fábricas" },
    { i: GraduationCap, t: "Educación urbana" },
    { i: Gavel, t: "Organismos gubernamentales" },
    { i: UtensilsCrossed, t: "Gastronomía" },
  ];
  const standards = [
    {
      i: Shield,
      t: "Normas de gestión",
      d: "Protocolos unificados de clasificación y trazabilidad.",
    },
    {
      i: CircleDollarSign,
      t: "Impuesto futuro de actividad",
      d: "STA habilita el modelo fiscal de actividad de los residentes.",
    },
    {
      i: Gavel,
      t: "Supervisión gubernamental",
      d: "Dashboards de control para autoridades locales.",
    },
    {
      i: Settings,
      t: "Administración de software",
      d: "Gestión centralizada de operaciones y agentes.",
    },
  ];
  return (
    <section id="ventajas" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Ventajas operativas"
          title="Conceptos de diseño para el tratamiento urbano de residuos."
          desc="STA combina recolección granular de datos, análisis de consumo y trazabilidad de carbono para gobernar todo el ciclo de residuos urbanos."
        />
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {dataPillars.map((d) => (
            <Card key={d.t} className="bg-card-gradient border-border p-8">
              <d.i className="w-7 h-7 text-accent mb-5" />
              <h3 className="text-xl font-semibold mb-4">{d.t}</h3>
              <ul className="space-y-2">
                {d.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-primary text-primary-foreground p-10 border-0 mb-12">
          <div className="text-xs uppercase tracking-wider opacity-80 mb-6">Objetivo general</div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {goals.map((g) => (
              <div key={g.l}>
                <div className="text-4xl font-bold">{g.v}</div>
                <div className="text-xs mt-2 opacity-90">{g.l}</div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-card-gradient border-border p-8">
            <Badge className="w-fit bg-primary/10 text-primary border-primary/30 mb-4">
              Ámbito de aplicación
            </Badge>
            <h3 className="text-2xl font-semibold mb-5">A quién sirve STA</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {scope.map((s) => (
                <div key={s.t} className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                  <s.i className="w-5 h-5 text-primary" />
                  <span className="text-sm">{s.t}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="bg-card-gradient border-border p-8">
            <Badge className="w-fit bg-accent/15 text-accent border-accent/30 mb-4">
              Marco regulatorio
            </Badge>
            <h3 className="text-2xl font-semibold mb-5">Normas y gobernanza</h3>
            <ul className="space-y-4">
              {standards.map((s) => (
                <li key={s.t} className="flex gap-4">
                  <span className="w-9 h-9 rounded-lg bg-secondary text-primary grid place-items-center shrink-0">
                    <s.i className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="font-medium text-sm">{s.t}</div>
                    <div className="text-sm text-muted-foreground">{s.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const steps = [
    {
      i: Truck,
      t: "Recolección",
      d: "Recogida de residuos urbanos separados en origen desde hogares, comercios y puntos de recolección.",
    },
    {
      i: Flame,
      t: "Recuperación energética y tratamiento térmico",
      d: "Tratamiento de fracciones no reciclables mediante procesos autorizados, priorizando recuperación de energía cuando el material no admite reuso.",
    },
    {
      i: Factory,
      t: "Clasificación y preparación",
      d: "Transformación inicial: separación fina, prensado, descontaminación y conversión en fracciones listas para valorización.",
    },
    {
      i: Recycle,
      t: "Valorización de materiales",
      d: "Materiales recuperables derivados del reciclaje urbano listos para reutilización, reciclaje o venta a plantas socias.",
    },
    {
      i: Package,
      t: "Logística y destino final",
      d: "Logística hacia plantas socias, compradores y circuitos de valorización autorizados.",
    },
  ];
  const outputs = [
    "Fracciones metálicas recuperadas",
    "Electrónicos y componentes clasificados",
    "Plásticos, vidrio, textiles e inertes derivados a socios",
    "Datos certificados de carbono y destino por lote",
  ];
  return (
    <section id="tecnologia" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Tecnología de reciclaje"
          title="Del desecho urbano a materiales recuperables."
          desc="Cinco fases convierten residuos urbanos y electrónicos en materiales, energía y datos verificables. Las fracciones metálicas son una parte del proceso, no el foco principal."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow">
                      <s.i className="w-5 h-5" />
                    </span>
                    <span className="text-3xl font-bold text-muted-foreground/30">0{i + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          <Card className="overflow-hidden border-border p-0 min-h-[320px]">
            <img
              src={recoveredMaterials}
              alt="Materiales recuperados en planta STA"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Card>
          <Card className="bg-card-gradient border-border p-8 flex flex-col justify-center">
            <Badge className="w-fit bg-accent/15 text-accent border-accent/30 mb-4">
              Productos derivados
            </Badge>
            <h3 className="text-2xl font-semibold mb-5">Lo que sale de la planta</h3>
            <ul className="space-y-3">
              {outputs.map((o) => (
                <li key={o} className="flex items-start gap-3 text-muted-foreground">
                  <FileCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    {
      i: Network,
      t: "Capacidad de interfaz",
      desc: "Servicios compartidos de datos e integración de interfaces.",
      items: [
        "Interfaz de consulta de datos",
        "Servicio de intercambio de datos",
        "Interfaz de programación (API)",
        "Interfaz para compartir",
        "Interfaz de aplicaciones temáticas",
      ],
    },
    {
      i: Layers,
      t: "Capacidad de aplicación",
      desc: "Plataforma STA, monitoreo y gestión centralizada.",
      items: [
        "Monitoreo del estado operativo",
        "Diseño de la plataforma STA",
        "Manejo y disposición de módulos",
        "Control de información de productos",
        "Asignación de recursos STA",
        "Recolección y procesamiento de datos",
        "Control de emisiones de carbono",
        "Gestión de emergencias STA",
      ],
    },
    {
      i: Settings,
      t: "Capacidad de soporte",
      desc: "Plataformas de gestión, control y clasificación.",
      items: [
        "Plataforma de gestión y asignación",
        "Plataforma de clasificación de basura",
        "Sistema de control y envío de mensajes",
        "Gestión por cuadrículas",
        "Coordinación de emergencias",
        "Sistema de monitoreo de operaciones",
        "Cálculo de datos de «carbono»",
      ],
    },
    {
      i: Cpu,
      t: "Capacidad de recursos",
      desc: "Middleware y componentes del sistema.",
      items: [
        "Middleware para sistemas GIS",
        "Middleware para servidores de aplicaciones",
        "Middleware de mensajería",
        "Componentes de soporte de terceros",
      ],
    },
    {
      i: Server,
      t: "Hardware básico",
      desc: "Infraestructura física y operativa.",
      items: [
        "Vehículos de recolección",
        "Puntos de recolección",
        "Empleados STA",
        "Información regional",
        "Servidores · almacenamiento · PCs · PADs · Internet",
      ],
    },
  ];
  return (
    <section id="arquitectura" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Parte 02 · Arquitectura"
          title="Sistema de administración STA City."
          desc="Cinco capas integradas que conectan hardware, middleware, plataformas operativas y APIs públicas. La arquitectura resuelve la integración de datos, reserva capacidad para sistemas futuros y construye una base de datos temática completa."
        />
        <div className="space-y-3">
          {layers.map((l, i) => (
            <motion.div
              key={l.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="bg-card-gradient border-border p-6 lg:p-8 hover:border-primary/40 transition">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3 flex lg:flex-col gap-4 items-start">
                    <span className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shrink-0 shadow-glow">
                      <l.i className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-xs text-primary uppercase tracking-wider mb-1">
                        Capa 0{i + 1}
                      </div>
                      <h3 className="text-lg font-semibold">{l.t}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{l.desc}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {l.items.map((it) => (
                      <div
                        key={it}
                        className="text-sm px-3 py-2 rounded-md bg-background/40 border border-border/50 text-muted-foreground"
                      >
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  const [step, setStep] = useState(0);
  const flow = [
    {
      i: Smartphone,
      t: "Descargar y abrir",
      d: "El usuario descarga la app STA City desde su tienda de aplicaciones y la abre por primera vez.",
    },
    {
      i: Settings,
      t: "Seleccionar servicio",
      d: "El usuario elige el servicio: separar residuos, entregar recuperables, vender electrónicos o consultar puntos.",
    },
    {
      i: ScanLine,
      t: "Escanear código",
      d: "Escanea o registra el residuo para confirmar la fracción, cantidad estimada y valor de recuperación.",
    },
    {
      i: Truck,
      t: "Recogida a domicilio",
      d: "Con un clic, STA recoge el residuo a domicilio y realiza el pago cuando corresponde.",
    },
    {
      i: Coins,
      t: "Acumular puntos «carbono»",
      d: "Cada operación genera puntos de datos de «carbono» trazables, vinculados al material reciclado.",
    },
    {
      i: Wallet,
      t: "Canjear por dinero",
      d: "Los puntos acumulados se pueden canjear por dinero en efectivo cuando el usuario lo desee.",
    },
    {
      i: Factory,
      t: "Clasificación en planta",
      d: "Todos los residuos llegan a la planta STA: se clasifican por fracción; los recuperables se reutilizan o reciclan, los orgánicos se compostan cuando corresponde, y las fracciones no valorizables se derivan a tratamiento autorizado.",
    },
  ];
  return (
    <section id="app" className="py-28 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-10 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <img
            src={appPhone}
            alt="App STA City"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative rounded-3xl shadow-elegant w-full max-w-sm mx-auto"
          />
          <Card className="bg-card-gradient border-border p-5 mt-6 max-w-sm mx-auto">
            <p className="text-sm text-muted-foreground">
              STA ofrece, a través de su aplicación,{" "}
              <span className="text-foreground font-medium">
                servicios de datos precisos sobre residuos urbanos y emisiones de carbono
              </span>{" "}
              de las ciudades, mejorando el reciclaje urbano y promoviendo el ciclo ecológico.
            </p>
          </Card>
        </div>
        <div className="lg:col-span-7">
          <SectionHeader
            kicker="App STA City"
            title="Un clic. Tus residuos. Tu beneficio."
            desc="«Click City»: separa, entrega o vende residuos recuperables y electrónicos desde casa, recibe pago cuando corresponde y acumula puntos de carbono canjeables por dinero en efectivo."
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
                <span
                  className={`w-10 h-10 rounded-lg grid place-items-center shrink-0 ${
                    step === i
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-secondary text-primary"
                  }`}
                >
                  <s.i className="w-5 h-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Paso 0{i + 1}</span>
                  </div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 mt-3 transition ${step === i ? "text-primary translate-x-1" : "text-muted-foreground"}`}
                />
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
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    {c.phase}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
          <Card className="bg-card-gradient border-border p-10">
            <Target className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">El reto europeo</h3>
            <p className="text-muted-foreground mb-6">
              Más del <span className="text-foreground font-semibold">45%</span> del territorio
              europeo es montañoso o accidentado, y los residuos urbanos y electrónicos crecen un{" "}
              <span className="text-foreground font-semibold">20% cada año</span>. STA ofrece la red
              logística y digital para revertirlo.
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
          desc="STA selecciona una ciudad regional como centro de comercio de datos de carbono (CUT), convirtiendo cada operación de reciclaje en datos auditables que las marcas pueden adquirir como prueba de reducción de emisiones."
        />
        <Tabs defaultValue="modelo" className="w-full">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="modelo">Modelo EU ETS</TabsTrigger>
            <TabsTrigger value="sta">Modelo STA CUT</TabsTrigger>
            <TabsTrigger value="reciclaje">Reciclaje de residuos</TabsTrigger>
          </TabsList>
          <TabsContent value="modelo" className="mt-6">
            <Card className="bg-card-gradient border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/30">EU ETS</Badge>
                <h3 className="text-xl font-semibold">Marco actual europeo</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "La Unión Europea lleva a cabo la asignación de cuotas de emisión de «carbono».",
                  "Empresas y organizaciones participan en la compraventa de datos de «carbono».",
                  "Las empresas reportan periódicamente sus datos de emisiones de «carbono».",
                  "Determinados actos se consideran reducción de emisiones por parte de las empresas.",
                  "Excedentes de datos de «carbono» pueden transferirse; déficits se pueden comprar.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          </TabsContent>
          <TabsContent value="sta" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  t: "Clasificación por marca",
                  d: "STA clasifica residuos urbanos por marca de material para generar datos trazables por origen.",
                },
                {
                  t: "Documentación multimedia",
                  d: "STA proporciona explicaciones con datos, videos e imágenes de cada tipo de material a lo largo de todo el proceso.",
                },
                {
                  t: "Trazabilidad hasta producto final",
                  d: "Documentación de cómo cada materia prima reciclada se reutiliza en nuevas materias primas o productos finales.",
                },
                {
                  t: "Venta a marcas correspondientes",
                  d: "STA vende los datos reciclados a empresas que generan el mismo tipo de residuo. Las marcas pueden firmar contratos directos para que CUT recicle sus desechos.",
                },
                {
                  t: "Prueba de reducción CO₂",
                  d: "Las empresas utilizan los datos, videos y materiales como prueba auditable de su reducción de emisiones de «carbono».",
                },
                {
                  t: "Subasta de certificados",
                  d: "Diferentes marcas pujan por la adquisición de datos CUT y los certificados de «carbono» correspondientes.",
                },
              ].map((s, i) => (
                <Card
                  key={s.t}
                  className="bg-card-gradient border-border p-6 hover:border-primary/40 transition"
                >
                  <div className="text-xs text-primary mb-3 font-medium">PASO 0{i + 1}</div>
                  <h3 className="font-semibold mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reciclaje" className="mt-6">
            <Card className="bg-card-gradient border-border p-8">
              <h3 className="text-xl font-semibold mb-4">
                Reciclaje de residuos como reducción certificada
              </h3>
              <p className="text-muted-foreground mb-6">
                Bajo el marco europeo, varias prácticas cuentan como reducción de emisiones para las
                empresas participantes. STA integra todas en su plataforma:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    i: Recycle,
                    t: "Reciclaje de materiales",
                    d: "Recuperación de fracciones reutilizables y electrónicos para reincorporar a la cadena productiva.",
                  },
                  {
                    i: Flame,
                    t: "Recargo por energía",
                    d: "Aprovechamiento energético de residuos no reutilizables como combustible alternativo.",
                  },
                  {
                    i: Leaf,
                    t: "Compostaje orgánico",
                    d: "Tratamiento biológico de residuos orgánicos urbanos para uso agrícola.",
                  },
                ].map((r) => (
                  <div
                    key={r.t}
                    className="p-5 rounded-lg bg-background/40 border border-border/50"
                  >
                    <r.i className="w-6 h-6 text-accent mb-3" />
                    <div className="font-medium mb-1">{r.t}</div>
                    <p className="text-sm text-muted-foreground">{r.d}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function Goals() {
  const rows = [
    {
      k: "Ciudades en operación",
      i: Building2,
      a: { v: "4 ciudades", s: "300 mil usuarios" },
      b: { v: "8 ciudades", s: "500 mil usuarios" },
    },
    {
      k: "Planta de procesamiento",
      i: Factory,
      a: { v: "1 planta · 5M€", s: "Ciclo: 12 meses" },
      b: { v: "1 planta · 8M€+", s: "Ciclo: 24 meses" },
    },
    {
      k: "Capacidad de procesamiento",
      i: Gauge,
      a: { v: "3.600 t / año", s: "Operación piloto" },
      b: { v: "20.000+ t / año", s: "Escala industrial" },
    },
    {
      k: "Puntos de recolección",
      i: MapPin,
      a: { v: "3 puntos", s: "100 t / mes" },
      b: { v: "6 puntos", s: "300 t / mes" },
    },
    {
      k: "Agentes de la aplicación",
      i: Users,
      a: { v: "6 agentes", s: "" },
      b: { v: "20 agentes", s: "" },
    },
  ];
  return (
    <section id="datos" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Datos operativos"
          title="De piloto a operación industrial en dos etapas."
          desc="Objetivos de datos operativos para el tratamiento integral de residuos de STA, organizados en una primera etapa de validación de mercado y una segunda etapa de escalamiento industrial."
        />
        <Card className="bg-card-gradient border-border overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-4 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <div className="col-span-4">Métrica</div>
            <div className="col-span-4">Primera etapa</div>
            <div className="col-span-4">Segunda etapa</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.k}
              className={`grid grid-cols-12 px-6 py-5 items-center gap-2 ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="col-span-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-secondary text-primary grid place-items-center shrink-0">
                  <r.i className="w-4 h-4" />
                </span>
                <div className="font-medium text-sm">{r.k}</div>
              </div>
              <div className="col-span-4">
                <div className="font-semibold">{r.a.v}</div>
                {r.a.s && <div className="text-xs text-muted-foreground mt-0.5">{r.a.s}</div>}
              </div>
              <div className="col-span-4">
                <div className="font-semibold text-primary">{r.b.v}</div>
                {r.b.s && <div className="text-xs text-muted-foreground mt-0.5">{r.b.s}</div>}
              </div>
            </div>
          ))}
        </Card>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            {
              i: TrendingUp,
              t: "Crecimiento de usuarios",
              d: "De 300k a 500k usuarios activos entre etapas.",
            },
            {
              i: Mountain,
              t: "Capacidad multiplicada x5",
              d: "De 3.600 a más de 20.000 toneladas anuales procesadas.",
            },
            {
              i: Trash2,
              t: "Red de puntos duplicada",
              d: "De 3 a 6 puntos, escalando la recolección urbana.",
            },
          ].map((s) => (
            <Card key={s.t} className="bg-card-gradient border-border p-6">
              <s.i className="w-6 h-6 text-accent mb-3" />
              <div className="font-semibold mb-1">{s.t}</div>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </Card>
          ))}
        </div>
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
          Más del <span className="text-gradient">70%</span> de los residuos urbanos
          <br />
          reciclados o valorizados.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          En los próximos tres años, STA alcanzará más de un millón de usuarios en Europa, procesará
          10.000+ toneladas de residuos y normalizará el comercio de emisiones de carbono asociado
          al reciclaje.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow"
          >
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
