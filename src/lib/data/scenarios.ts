import type { ScenarioProps } from "$lib/types/Types";

export const scenarios: ScenarioProps[] = [
  {
    description: "Die Klimaerwärmung führt zu schmelzenden Polkappen, was zu steigendem Meeresspiegel führt.",
    option1: {
      description: "Mit einem Flugzeug sprühst du Chemikalien in die Stratosphäre, um die Sonneneinstrahlung zu reduzieren.",
      explanation: "Indem das Sonnenlicht zurück ins Weltall reflektiert wird, wird die Erderwärmung verlangsamt. Die verhindert kurzfristig ein weiteres Schmelzen der Polkappen. Die Chemikalien sind jedoch keine nachhaltige Lösung, da sie den Ausstoss der Treibhausgase nicht verringern. Zudem musst du für einen konkreten Einfluss der Chemikalien jährlich ca. 2.25 Mia. Dollar investieren.",
      consequences: {
        economy: -20,
        environment: -5,
        society: 0,
        health: 0
      }
    },
    option2: {
      description: "Du nimmst die führenden Personen aller Länder bei der Hand und führst ein verpflichtendes Klimaabkommen ein. Das soll für eine drastische Reduzierung der CO2-Emissionen weltweit führen.",
      explanation: "Im Gegensatz zum Parises Klimaabkommen ist dein neues Abkommen ein bindendes Abkommen für alle Staaten. Die Einführung führt zu Spannungen und dauert lange. Der langfristige Effekt auf die Umwelt ist jedoch positiv, da die CO2 Bilanz verbessert wird. Die Investitionen aller Länder kosten jedoch viel Geld. Langfristig stärken sie die Wirtschaft jedoch, da neue Arbeitsplätze geschaffen werden.",
      consequences: {
        economy: 5,
        environment: 20,
        society: -10,
        health: 0
      }
    }
  },
  {
    description: "Durch die Bildungsschere von Erst- & Drittweltländern droht eine weitere grosse Flüchtlingswelle. Du willst den Zugang zu Bildung für viele Menschen leichter zugänglich machen.",
    option1: {
      description: "Du förderst den Ausbau von Schulen in unterentwickelten Regionen.",
      explanation: "Durch das Einstellen von qualifizierten Lehrkräften und dem Verwenden von modernen Lehrmitteln, erhöht sich die Bildungsqualität. Der Zugang zu Bildung wird erleichtert, und die Bildungsschere wird kleiner. Langfristig führt es zu einer Abnahme der Armut. Die Investitition kostet jedoch.",
      consequences: {
        economy: -10,
        environment: 0,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Du unterstützt die Entwicklung von global zugänglichen Online-Bildungsplattformen.",
      explanation: "Die Entwicklung der Online-Plattformen ist relativ kostengünstig. Vorallem Menschen in unterentwickelten Regionen haben so Zugriff zu qualitativ hochwertiger Bildung, ohne auf eine physische Schule angewiesen zu sein. Dich kostet jedoch die Einführung der dafür notwendigen Infrastruktur eine Menge Geld, da alle Zugang zum Internet haben sollen. Langfristig führt die Massnahme zu einer Abnahme der Armut.",
      consequences: {
        economy: -10,
        environment: 0,
        society: 10,
        health: 0
      }
    }
  }
]