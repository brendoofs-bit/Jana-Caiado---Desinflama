import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Check, 
  Heart, 
  Star, 
  ShieldCheck, 
  Clock, 
  Users, 
  Activity,
  ArrowRight,
  ChevronDown,
  X,
  BookOpen,
  ShoppingBag,
  Calendar,
  Video,
  Plus,
  Minus,
  Frown,
  Sprout,
  HelpCircle,
  Lock,
  MessageCircle
} from 'lucide-react';
import { Button } from './components/Button';
import { IMG_EXPERT, IMG_HERO_METHOD, HOTMART_LINK, WHATSAPP_LINK } from './constants';

const Hero = () => (
  <header className="relative bg-gradient-to-b from-cream-100 to-cream-50 pt-20 pb-32 overflow-hidden">
    <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
      
      {/* Title */}
      <div className="mb-6 flex justify-center">
         <h1 className="font-serif text-6xl md:text-8xl text-terra-500 italic leading-tight">
           Desinflama
         </h1>
      </div>
      
      <p className="text-xl md:text-2xl text-brown-900 font-serif mb-10">
        É possível viver sem dor — com endometriose.
      </p>
      
      {/* Description */}
      <p className="text-lg text-brown-800/80 mb-10 max-w-3xl mx-auto leading-relaxed">
        Conheça o protocolo nutricional desenvolvido pela nutricionista Janaína Caiado para mulheres com endometriose, que tem demonstrado reduzir, de forma significativa, as queixas de dor das pacientes acompanhadas em consultório.
        <br/><br/>
        Um método estruturado a partir de diversas especializações e ampla prática clínica — com foco em reduzir a inflamação, aliviar sintomas e reconectar você ao seu corpo.
      </p>

      {/* Specializations - Moved Below Description, Above CTA */}
      <div className="mb-10 max-w-2xl mx-auto">
        <p className="text-brown-900 font-medium mb-2 uppercase tracking-wide text-sm md:text-base">
          A união das especializações de Janaína Caiado:
        </p>
        <p className="text-terra-600 font-serif italic text-lg md:text-xl">
          Low FODMAPs • Nutrição Funcional • Saúde da Mulher • Condutas Clínicas Baseadas em Evidência
        </p>
      </div>
      
      {/* CTA Section - Primary Sale, Secondary Lead */}
      <div className="flex flex-col items-center gap-4">
        <Button href={HOTMART_LINK} variant="success" className="text-lg px-10 py-5 no-underline uppercase tracking-wide">
          QUERO COMEÇAR O PROTOCOLO AGORA
        </Button>
        
        <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-brown-800/70 mt-2">
           <span className="flex items-center gap-1"><Lock size={14}/> Pagamento Seguro</span>
           <span className="hidden md:inline">•</span>
           <span className="flex items-center gap-1"><ShieldCheck size={14}/> Garantia de 7 Dias</span>
        </div>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700 underline text-sm mt-4 font-medium flex items-center gap-2">
           <MessageCircle size={16}/>
           Tenho dúvidas, quero entrar no grupo de espera
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
        {[
          { label: "Mulheres Transformadas", value: "2.400+" },
          { label: "Taxa de Sucesso", value: "86,3%" },
          { label: "Redução de Dores", value: "80%" },
          { label: "Primeiros Resultados", value: "60 dias" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-cream-200">
            <div className="text-2xl md:text-3xl font-serif text-terra-500 font-bold">{stat.value}</div>
            <div className="text-xs text-brown-800/70 uppercase tracking-wide mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Decorative background element */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-terra-400/20 via-transparent to-transparent"></div>
  </header>
);

const ProblemAwareness = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brown-900 mb-6">
          A ENDOMETRIOSE ESTÁ <span className="text-red-500/80 underline decoration-terra-400/30">DESTRUINDO SUA VIDA</span>
          <br />E Você Sente Que Ninguém Entende
        </h2>
        
        <div className="bg-cream-100 p-8 rounded-2xl border-l-4 border-terra-500 text-left max-w-3xl mx-auto shadow-sm">
          <p className="text-brown-900 font-medium text-lg leading-relaxed">
            <strong className="text-terra-600">REALIDADE:</strong> 1 em cada 10 mulheres no Brasil vive com endometriose.
            <br/><br/>
            São mais de <span className="text-terra-600 font-bold">7 MILHÕES DE BRASILEIRAS</span> lidando com dores e sintomas que, muitas vezes, não são compreendidos por quem está ao redor.
            <br/><br/>
            A sua dor não é "frescura".<br/>
            Não é "cólica normal".<br/>
            Não é "coisa da sua cabeça".
            <br/><br/>
            A endometriose é uma condição inflamatória real — e merece cuidado, respeito e acolhimento.
          </p>
        </div>
      </div>

      <div className="mb-16 max-w-4xl mx-auto">
        <div className="bg-terra-100/50 p-6 rounded-xl border border-terra-200">
           <p className="text-brown-900 italic text-center">
             <strong>IMPORTANTE:</strong> a cirurgia pode ajudar em muitos casos, mas ela não encerra, sozinha, esse processo inflamatório. Por isso, o cuidado contínuo — incluindo o olhar nutricional e de estilo de vida — faz tanta diferença na qualidade de vida.
           </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          { icon: Users, text: "176 MILHÕES de mulheres no mundo têm endometriose (OMS)" },
          { icon: Clock, text: "7 a 10 ANOS é o tempo médio para diagnóstico correto" },
          { icon: AlertTriangle, text: "60% das mulheres não respondem adequadamente a tratamentos hormonais" },
          { icon: Activity, text: "50% perdem dias de trabalho mensalmente por dor incapacitante" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-6 bg-cream-50 rounded-xl border border-cream-200">
            <item.icon className="w-8 h-8 text-terra-500 shrink-0" />
            <p className="text-brown-900/80 font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-brown-900 text-cream-50 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
             <div className="bg-terra-500 p-3 rounded-full animate-pulse">
               <Activity className="w-8 h-8 text-white" />
             </div>
          </div>
          <h3 className="font-serif text-2xl font-bold mb-4 text-terra-200">PROCESSO INFLAMATÓRIO CRÔNICO</h3>
          <p className="text-lg text-cream-50/90">
            Na endometriose, o corpo pode permanecer em um estado contínuo de inflamação. Isso ajuda a explicar por que a dor pode ser intensa e persistente — mesmo fora do período menstrual.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Symptoms = () => {
  const symptoms = [
    "Cólicas tão fortes que te fazem vomitar ou desmaiar?",
    "Dor durante relações sexuais que acabam com sua intimidade?",
    "Intestino inflamado, inchaço absurdo (barriga de grávida)?",
    "Cansaço extremo que nenhum descanso resolve?",
    "Sangramento intenso e irregular que atrapalha tudo?",
    "Depressão por sentir que perdeu o controle do próprio corpo?"
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-center font-serif text-3xl text-brown-900 mb-12">
          Quantos desses sintomas você reconhece?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {symptoms.map((symptom, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-red-50 text-red-400 p-2 rounded-full shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-brown-800 font-medium">{symptom}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScientificContext = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-brown-900 text-cream-50 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Abstract shapes bg */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-terra-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 space-y-8">
          <h3 className="font-serif text-2xl md:text-3xl text-terra-400 mb-6 border-b border-white/10 pb-6">
            A Ciência da Inflamação
          </h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-cream-50/90">
            <p>
              <strong className="text-white">Estudos científicos mostram</strong> que a endometriose está associada a pioras significativas na qualidade de vida física, emocional e social, impactando a atividade física, as relações, o bem-estar mental e a saúde geral.
            </p>
            <p>
              O impacto da endometriose vai muito além da dor menstrual tradicional — ele permeia diversos aspectos do dia a dia da mulher.
            </p>
            
            <div className="pl-6 border-l-2 border-terra-500 italic my-8">
              "Você não está exagerando. Não é 'normal sentir dor'. E não é algo que se resolve apenas com um analgésico."
            </div>

            <p>
              Ainda assim, muitas mulheres seguem ouvindo que precisam apenas “relaxar” ou “se acostumar com a dor”.
            </p>
            <p>
              Enquanto você lê isso, <strong className="text-terra-400">processos inflamatórios podem estar ativos no seu corpo.</strong> Na endometriose, a inflamação crônica está associada à dor persistente, à formação de aderências e à progressão das lesões.
            </p>
            <p>
              Quando não é abordada de forma adequada, essa inflamação pode continuar impactando tecidos, órgãos e a qualidade de vida ao longo do tempo.
            </p>
            
            <div className="bg-terra-600/20 p-6 rounded-xl border border-terra-500/30 mt-8">
              <p className="font-semibold text-center text-white">
                Por isso, o manejo nutricional estratégico não é opcional — é parte do cuidado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhoIsThisFor = () => (
  <section className="py-20 bg-cream-100">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brown-900">
          Para quem é o Protocolo EndoLivre?
        </h2>
        <p className="text-brown-700 mt-4">Descubra se este é o caminho certo para o seu momento</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card: É para você */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-terra-500">
          <h3 className="font-serif text-2xl text-brown-900 mb-6 flex items-center gap-3">
            <span className="bg-terra-100 text-terra-600 p-2 rounded-full"><Check size={24} /></span>
            É PARA VOCÊ QUE:
          </h3>
          <ul className="space-y-4">
            {[
              "Sente dores incapacitantes que analgésicos não resolvem mais",
              "Sofre com inchaço abdominal constante ('barriga de endo')",
              "É tentante e quer preparar o corpo para engravidar",
              "Já fez cirurgia e a dor voltou (ou quer evitar que volte)",
              "Busca um caminho natural para complementar o tratamento médico",
              "Está disposta a ajustar a alimentação para recuperar sua vida"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-terra-500 shrink-0 mt-0.5" />
                <span className="text-brown-800 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card: Não é para você */}
        <div className="bg-cream-200/50 p-8 rounded-2xl border-t-4 border-gray-400">
          <h3 className="font-serif text-2xl text-gray-700 mb-6 flex items-center gap-3">
            <span className="bg-gray-200 text-gray-600 p-2 rounded-full"><X size={24} /></span>
            NÃO É PARA VOCÊ QUE:
          </h3>
          <ul className="space-y-4">
            {[
              "Busca uma pílula mágica para resolver tudo sem esforço",
              "Acredita que 'sentir dor é normal de ser mulher'",
              "Não está disposta a testar novos hábitos alimentares",
              "Acha que a inflamação se resolve apenas com remédios",
              "Não quer assumir o protagonismo da própria saúde"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-600 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Expert = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <span className="bg-terra-200 text-brown-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Conheça a Especialista
        </span>
        <h2 className="font-serif text-4xl mt-4 text-brown-900">
          Conheça Janaina Caiado
        </h2>
        <p className="text-brown-800/70 mt-2">A Nutricionista Que Está Devolvendo a Vida a Milhares de Mulheres</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 bg-cream-50 p-8 md:p-12 rounded-3xl shadow-xl border border-cream-100">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative group">
            <img 
              src={IMG_EXPERT} 
              alt="Janaina Caiado Nutricionista" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brown-900/80 to-transparent p-6">
              <p className="text-white font-serif text-xl">Janaina Caiado</p>
              <p className="text-white/80 text-sm">Nutricionista Especialista</p>
            </div>
          </div>
          {/* Decorative outline */}
          <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-terra-200 rounded-2xl hidden md:block"></div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-lg text-brown-800 leading-relaxed">
            Janaina Caiado não é mais uma nutricionista genérica. Ela é <strong className="text-terra-600">ESPECIALISTA CERTIFICADA pela Monash University (Austrália)</strong> no Protocolo Low FODMAP - o único protocolo com validação científica internacional para tratamento nutricional da endometriose.
          </p>
          <p className="text-lg text-brown-800 leading-relaxed">
            Com <strong>mais de 8 anos</strong> dedicados exclusivamente a mulheres com endometriose, Janaina desenvolveu uma abordagem única que combina ciência de ponta com sensibilidade humana.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full text-terra-500 shadow-sm"><ShieldCheck size={20}/></div>
              <span className="text-sm font-medium text-brown-900">Certificação Internacional</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full text-terra-500 shadow-sm"><Users size={20}/></div>
              <span className="text-sm font-medium text-brown-900">+2.400 alunas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full text-terra-500 shadow-sm"><Activity size={20}/></div>
              <span className="text-sm font-medium text-brown-900">Resultados em 60 dias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section className="py-20 bg-cream-50">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brown-900 mb-4">ENDOLIVRE</h2>
        <p className="text-xl text-brown-800/80">O Protocolo Nutricional Completo para Reduzir a Inflamação</p>
      </div>

      <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
         <img 
          src={IMG_HERO_METHOD} 
          alt="Mulher trabalhando sem dor" 
          className="w-full h-64 md:h-80 object-cover object-center opacity-90"
         />
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-center max-w-md mx-4">
               <h3 className="font-serif text-2xl text-brown-900 mb-2">5 Pilares do Protocolo</h3>
               <p className="text-brown-700 text-sm">Baseado em evidências científicas</p>
            </div>
         </div>
      </div>

      <div className="space-y-4">
        {[
          { num: "1", title: "PROTOCOLO ANTIINFLAMATÓRIO", desc: "Elimine os alimentos que alimentam a inflamação." },
          { num: "2", title: "PROTOCOLO LOW FODMAP ADAPTADO", desc: "Reduza inchaço e dor intestinal em dias." },
          { num: "3", title: "NUTRIÇÃO REGENERATIVA", desc: "Alimentos que curam o intestino e equilibram hormônios." },
          { num: "4", title: "SUPLEMENTOS: O QUE REALMENTE FUNCIONA?", desc: "Excessos podem atrapalhar — e até piorar os sintomas." },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-xl border border-cream-200 transition-all hover:border-terra-300 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center bg-terra-500 text-white font-serif text-xl font-bold rounded-full shrink-0 shadow-lg">
              {step.num}
            </div>
            <div>
              <h4 className="font-bold text-brown-900 text-lg">{step.title}</h4>
              <p className="text-brown-700/80 text-sm md:text-base">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Deliverables = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brown-900 mb-4">
          O Arsenal Completo Contra a Endometriose
        </h2>
        <p className="text-brown-700 max-w-2xl mx-auto">
          Tudo o que você precisa para aplicar o protocolo de forma simples, prática e segura.
          Sem adivinhações, apenas o passo a passo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { 
            icon: Video, 
            title: "Aulas Explicativas", 
            desc: "Aulas ministradas exclusivamente pela nutricionista Jana Caiado, onde ela explica toda sua bagagem e experiência com endometriose. Após anos ela consegue te explicar com leveza como identificar os itens que fazem mal para VOCÊ!" 
          },
          { 
            icon: BookOpen, 
            title: "Guia Low FODMAPs", 
            desc: "Lista prática de alimentos e quantidades seguras, com observações baseadas em Nutrição Funcional para ajudar você a escolher melhor — no dia a dia." 
          },
          { 
            icon: ShieldCheck, 
            title: "Protocolo Antiinflamatório", 
            desc: "Orientações simples e estratégicas para reduzir inflamação e apoiar a qualidade de vida de quem tem endometriose." 
          },
          { 
            icon: Calendar, 
            title: "Calendário 2026", 
            desc: "Um material para você acompanhar seus sintomas e monitorar sua evolução ao longo do ano." 
          },
          { 
            icon: Activity, 
            title: "Guia: Score de Dor", 
            desc: "Aprenda a compreender melhor a sua dor e a avaliar a evolução dos seus sintomas ao longo do tempo. Um guia simples e prático para ajudar você a recuperar o controle sobre o seu corpo — com consciência e autonomia." 
          },
          { 
            icon: Users, 
            title: "Suporte", 
            desc: "Aqui, você terá apoio para todas as suas dúvidas. Não será 'apenas uma dieta', e sim um direcionamento completo para sua qualidade de vida — com orientação, acolhimento e acompanhamento ao longo do processo." 
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream-50 hover:bg-cream-100 p-8 rounded-xl border border-cream-200 transition-colors group">
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-terra-500 shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <item.icon size={28} />
            </div>
            <h3 className="font-serif text-xl text-brown-900 font-bold mb-3">{item.title}</h3>
            <p className="text-brown-700/80 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button href={HOTMART_LINK} variant="success" className="text-lg px-8 py-4 no-underline animate-pulse uppercase tracking-wide">
           GARANTA SEU ACESSO A TODO ARSENAL AGORA
        </Button>
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section className="py-20 bg-brown-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-cream-50 blur-3xl"></div>
       <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-terra-500 blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-16 text-cream-50">
        <span className="text-terra-400 font-bold uppercase tracking-wider text-sm">Suas Conquistas</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-2">
          O Que Você Vai CONQUISTAR <br/> Com o Protocolo EndoLivre
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Redução drástica da inflamação",
          "Ciclos menstruais menos intensos e mais regulares",
          "Fim do inchaço abdominal constante (barriga de grávida)",
          "Intestino regulado e sem dor",
          "Vida sexual sem dor e com prazer novamente",
          "Clareza mental e foco (fim da névoa cerebral)",
          "Volte a trabalhar sem faltas por dor",
          "Planeje sua vida sem medo do próximo ciclo",
          "Autoestima e confiança recuperadas"
        ].map((benefit, i) => (
          <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-terra-500/50 transition-colors">
            <div className="bg-terra-500 rounded-full p-1 shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-cream-50 font-medium text-lg">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button href={HOTMART_LINK} variant="secondary" className="text-lg px-12 no-underline">
          QUERO VIVER ESSA TRANSFORMAÇÃO
        </Button>
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section className="py-20 bg-white border-y border-cream-200 relative overflow-hidden">
     {/* Decorative BG */}
     <div className="absolute top-0 right-0 w-1/2 h-full bg-cream-50/50 skew-x-12 translate-x-1/3 pointer-events-none"></div>

     <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-terra-100 overflow-hidden">
           <div className="bg-terra-500 p-6 text-center">
              <h2 className="text-white font-serif text-3xl font-bold">OFERTA ESPECIAL</h2>
              <p className="text-white/90">Acesso Imediato ao Protocolo Completo</p>
           </div>
           
           <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl text-brown-900 font-serif mb-6">
                Comece sua jornada sem dor hoje mesmo
              </h3>
              
              <div className="space-y-4 mb-8 text-left max-w-lg mx-auto">
                 <div className="flex items-center gap-3">
                    <Check className="text-green-500 shrink-0"/>
                    <span className="text-brown-700">Protocolo Antiinflamatório & Low FODMAP</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Check className="text-green-500 shrink-0"/>
                    <span className="text-brown-700">Aulas Explicativas com Janaína Caiado</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Check className="text-green-500 shrink-0"/>
                    <span className="text-brown-700">Guia de Suplementação Específica</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Check className="text-green-500 shrink-0"/>
                    <span className="text-brown-700">Materiais de Apoio (Calendário, Score de Dor)</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Check className="text-green-500 shrink-0"/>
                    <span className="text-brown-700">Garantia Incondicional de 7 dias</span>
                 </div>
              </div>

              <Button href={HOTMART_LINK} variant="success" className="text-xl py-5 w-full md:w-auto px-12 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                 SIM! QUERO ME INSCREVER AGORA
              </Button>
              
              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="text-terra-500" size={20}/>
                    <span>Risco Zero: 7 dias de garantia</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Lock className="text-terra-500" size={20}/>
                    <span>Ambiente Seguro Hotmart</span>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const TwoPaths = () => (
  <section className="py-20 bg-cream-50">
    <div className="container mx-auto px-4 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-terra-100 text-brown-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <span className="text-terra-600">🌷</span> ÚLTIMA CHANCE
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-brown-900 mb-4">
          Você tem 2 caminhos a partir daqui...
        </h2>
        <p className="text-brown-700 text-lg">
          Escolha com consciência — porque a endometriose não para enquanto você decide.
        </p>
      </div>

      {/* Paths Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Path 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-200 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-full">
               <Frown className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-bold text-xl text-brown-900">Caminho 1: continuar como está</h3>
          </div>
          <p className="text-brown-700 leading-relaxed">
            Dor e inchaço como rotina, faltas no trabalho, medo do próximo ciclo, dependência de remédios e frustração por não ver evolução consistente. A doença segue progredindo enquanto você tenta "aguentar".
          </p>
        </div>

        {/* Path 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-terra-100 flex flex-col h-full relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="bg-green-100 p-2 rounded-full">
               <Sprout className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-xl text-brown-900">Caminho 2: entrar no EndoLivre</h3>
          </div>
          <p className="text-brown-700 leading-relaxed relative z-10">
            Você recebe um plano completo, cardápios, lista de alimentos, passo a passo Low FODMAP adaptado, suplementação e estilo de vida — tudo organizado para reduzir inflamação e te devolver controle, com suporte e comunidade.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-cream-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-center font-serif text-4xl text-brown-900 mb-16">Resultados Reais</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex text-terra-500 mb-4">
            {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
          </div>
          <h4 className="font-bold text-brown-900 mb-2">Escala de dor: 9/10 → 2/10 em 10 semanas</h4>
          <p className="text-brown-700 italic mb-6">
            "Eu era refém da endometriose. Faltava trabalho, brigava com meu marido pela dor, chorava todo mês. O protocolo da Janaina me devolveu a VIDA. Hoje sou outra mulher!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terra-200 rounded-full flex items-center justify-center text-brown-900 font-bold">M</div>
            <div>
              <p className="font-bold text-sm text-brown-900">Mariana, 32 anos</p>
              <p className="text-xs text-brown-600">Empresária • São Paulo</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex text-terra-500 mb-4">
            {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
          </div>
          <h4 className="font-bold text-brown-900 mb-2">Engravidou naturalmente após 3 anos tentando</h4>
          <p className="text-brown-700 italic mb-6">
            "Gastei R$ 40.000 em tratamentos que não funcionaram. O EndoLivre custou menos que uma consulta e foi o único que realmente mudou minha realidade. Estou grávida de 5 meses!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terra-200 rounded-full flex items-center justify-center text-brown-900 font-bold">C</div>
            <div>
              <p className="font-bold text-sm text-brown-900">Camila, 28 anos</p>
              <p className="text-xs text-brown-600">Designer • Rio de Janeiro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "O protocolo funciona para quem tem endometriose profunda?",
      a: "Sim. A inflamação é o combustível da endometriose, seja ela superficial ou profunda. Ao reduzir a inflamação sistêmica através da alimentação, você reduz os sintomas e melhora a qualidade de vida, independentemente do grau."
    },
    {
      q: "Preciso saber cozinhar pratos complexos?",
      a: "Não! O foco do EndoLivre é a praticidade. Você terá acesso a cardápios simples, com ingredientes fáceis de encontrar no supermercado. Nada de ficar horas na cozinha."
    },
    {
      q: "Sou vegetariana/vegana, posso fazer?",
      a: "Com certeza. O protocolo é totalmente adaptável. Ensinamos as substituições corretas para que você tenha todos os nutrientes necessários sem consumir carne, se assim preferir."
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "Muitas alunas relatam melhora significativa no inchaço e na disposição já nos primeiros 15 dias. A redução consistente da dor costuma ocorrer de forma progressiva ao longo dos primeiros 2 meses de aplicação correta."
    },
    {
      q: "Uso anticoncepcional/DIU, interfere em algo?",
      a: "O protocolo nutricional atua em paralelo ao tratamento médico. Ele potencializa seu bem-estar e não interfere negativamente em tratamentos hormonais prescritos pelo seu médico."
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-center font-serif text-3xl text-brown-900 mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-cream-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-50/50 transition-colors"
              >
                <span className="font-medium text-brown-900 text-lg pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-terra-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-terra-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-brown-700 leading-relaxed border-t border-cream-100">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterCTA = () => (
  <footer className="bg-cream-100 py-20 border-t border-terra-200">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <Heart className="w-16 h-16 text-terra-500 mx-auto mb-6" fill="currentColor" />
      
      <h2 className="font-serif text-3xl md:text-5xl text-brown-900 mb-6">
        Sua última chance de viver sem dor está a um clique
      </h2>
      
      <p className="text-brown-800 text-lg mb-10">
        Você está nesta página porque está DESESPERADA por uma solução. 
        <br/>Endometriose não tem cura, <strong className="text-terra-600">MAS TEM CONTROLE TOTAL</strong>.
      </p>

      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-terra-100 max-w-xl mx-auto">
        <p className="font-serif text-xl text-brown-900 mb-6">
          Comece agora sua jornada
        </p>
        <Button href={HOTMART_LINK} variant="success" fullWidth className="text-lg py-5 animate-bounce-slow no-underline">
          COMPRAR O PROTOCOLO AGORA
        </Button>
        <div className="mt-4 pt-4 border-t border-cream-100">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-terra-600 font-bold hover:text-terra-700 underline flex items-center justify-center gap-2">
               <MessageCircle size={16}/>
               Ainda tenho dúvidas? Falar no Grupo VIP
            </a>
        </div>
      </div>
      
      <p className="text-brown-400 text-sm mt-16">
        © {new Date().getFullYear()} EndoLivre - Janaina Caiado. Todos os direitos reservados.
        <br/>Este produto não substitui o parecer médico profissional.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <ProblemAwareness />
      <Symptoms />
      <ScientificContext />
      <WhoIsThisFor />
      <Methodology />
      <Deliverables />
      <Expert />
      <Transformation />
      <TwoPaths />
      <OfferSection />
      <Testimonials />
      <FAQ />
      <FooterCTA />
    </div>
  );
}