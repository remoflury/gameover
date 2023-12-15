import type { EventProps } from "$lib/types/Types";

export const events: EventProps[] = [
  {
    id: 1,
    title: "Überflutung!",
    description: "Eine Staudamm in der Nähe von Yichang (Tschina) ist wegen schlechter Wartung geborsten.",
    consequences: {
      economy: -10,
      environment: -10,
      society: -10,
      health: -10
    },
    image: '36.jpg',
    effect: 'negative'
  },
  {
    id: 2,
    title: "neue Tabletten",
    description:"Die Forschung hat neue Tabletten als Wasserzusatz erfunden, welche günstig und schnell sauberes Trinkwasser ermöglichen.",
    consequences: {
      economy: 0,
      environment: 0,
      society: 10,
      health: 20
    },
    image: '26.jpg',
    effect: 'positive'
  },
  {
    id: 3,
    title: "Schiffverkehr",
    description: "Die Welt kann sich auf ein CO2 Abkommen für den Schiffverkehr auf internationalen Gewässern einigen. Nun dürfen nur noch Schiffe, die keine fossilen Treibstoff verwenden, gebaut werden.",
    consequences: {
      economy: 0,
      environment: 20,
      society: 0,
      health: 0
    },
    image: '35.jpg',
    effect: 'positive'
  },
  {
    id: 4,
    title: "Trockenheit",
    description: "Eine Jahrhundertdürre führt in Kangola zu hohen Ernteausfällen. Tausende verhungern.",
    consequences: {
      economy: -10,
      environment: 0,
      society: -10,
      health: -5
    },
    image: '12.jpg',
    effect: 'negative'
  },
  {
    id: 5,
    title: "Dürre",
    description: "Eine Jahrhundertdürre führt in Timbabwe zu hohen Ernteausfällen. Die Mitgliedsstaaten der UNO raffen sich zusammen, und schicken soviele Hilfsgüter, dass sogar das Nachbarsland davon profitiert.",
    consequences: {
      economy: 0,
      environment: 0,
      society: 10,
      health: 10
    },
    image: '12.jpg',
    effect: 'positive'
  },
  {
    id: 6,
    title: "Computer Chips",
    description: "Die jahrelang angehaltenen Lieferschwierigkeiten von Computer Chips führt zu einem drastischen Aufschwung der Wirtschaft.",
    consequences: {
      economy: 30,
      environment: 0,
      society: 0,
      health: 0
    },
    image: '34.jpg',
    effect: 'positive'
  },
  {
    id: 7,
    title: "Massaker!",
    description: "Der Wolf of Wallstreet wurde Realität - wegen zu heissen Temperaturen hatten die Sicherheitskräfte frei, als ein Wolf die Wallstreet stürmte.",
    consequences: {
      economy: -10,
      environment: 0,
      society: 0,
      health: 0
    },
    image: '33.jpg',
    effect: 'negative'
  },
  {
    id: 8,
    title: "Saurer Regen",
    description: "Lang anhaltender saurer Regen führt in der Grossstadt von Rio de Waneiro dazu, dass viele Leute krank werden und deshalb nicht arbeiten gehen können.",
    consequences: {
      economy: -10,
      environment: 0,
      society: 0,
      health: -10
    },
    image: '29.jpg',
    effect: 'negative'
  },
  {
    id: 9,
    title: "Vulkanausbruch",
    description: "Der Vulkan Brakabau in Rumatra bricht aus. Durch die Asche in der Atmosphäre sinkt die Durchschnittstemperatur um 2°C und viele Ernten fallen aus.",
    consequences: {
      economy: 0,
      environment: -10,
      society: 0,
      health: -10
    },
    image: '03.jpg',
    effect: 'negative'
  },
  {
    id: 10,
    title: "Kabumm!",
    description: "Perdogans Arroganz wurde das Opfer einer hafghanischen Atombombe. Der nachfolgende 5 jährige Krieg forderte viele Todesopfer. Das Kriegsgebiet ist bis heute vermint.",
    consequences: {
      economy: -10,
      environment: -10,
      society: -10,
      health: -10
    },
    image: '08.jpg',
    effect: 'negative'
  },
  {
    id: 11,
    title: "Veganismus",
    description: "Veganismus hat weltweit an Akzeptanz zugelegt, ein regelrechter Trend. Die Langzeitfolgen von Fleischkonsum wie Arthrose sinken und weniger Nutztiere führen zu einem vermindertem CO2 Ausststoss. Sogar die Wirtschaft blüht auf, da sich neue, grosse Wirtschaftszweite eröffnen.",
    consequences: {
      economy: 10,
      environment: 10,
      society: 10,
      health: 10
    },
    image: '06.jpg',
    effect: 'positive'
  },
]