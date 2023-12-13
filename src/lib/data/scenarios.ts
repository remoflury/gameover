import type { ScenarioProps } from "$lib/types/Types";

export const tutorialScenario: ScenarioProps = {
  description: "Die Klimaerwärmung führt zu schmelzenden Polkappen, was zu steigendem Meeresspiegel führt.",
  image: 'klimaerwaermung.png',
  option1: {
    description: "Ich sprühe mit einem Flugzeug Chemikalien in die Stratosphäre, um die Sonneneinstrahlung zu reduzieren.",
    explanation: "Indem das Sonnenlicht zurück ins Weltall reflektiert wird, wird die Erderwärmung verlangsamt. Dies verhindert kurzfristig ein weiteres Schmelzen der Polkappen. Die Chemikalien sind jedoch keine nachhaltige Lösung, da sie den Ausstoss der Treibhausgase nicht verringern. Zudem musst du für einen konkreten Einfluss der Chemikalien jährlich ca. 2.25 Mia. Dollar investieren.",
    consequences: {
      economy: -20,
      environment: -5,
      society: 0,
      health: 0
    }
  },
  option2: {
    description: "Ich nehme die führenden Personen aller Länder bei der Hand und führe ein verpflichtendes Klimaabkommen ein, das zu einer drastischen Reduzierung der CO2-Emissionen weltweit führen soll.",
    explanation: "Im Gegensatz zum Pariser Klimaabkommen ist dein neues Abkommen ein bindendes Abkommen für alle Staaten. Die Einführung führt zu Spannungen und dauert lange. Der langfristige Effekt auf die Umwelt ist jedoch positiv, da die CO2 Bilanz verbessert wird. Die Investitionen aller Länder kosten jedoch viel Geld. Langfristig stärken sie die Wirtschaft jedoch, da neue Arbeitsplätze geschaffen werden.",
    consequences: {
      economy: 5,
      environment: 20,
      society: -10,
      health: 0
    }
  }
}

export const scenarios: ScenarioProps[] = [
  {
    description: "Die Klimaerwärmung führt zu schmelzenden Polkappen, was zu steigendem Meeresspiegel führt.",
    image: 'klimaerwaermung.png',
    option1: {
      description: "Ich sprühe mit einem Flugzeug Chemikalien in die Stratosphäre, um die Sonneneinstrahlung zu reduzieren.",
      explanation: "Indem das Sonnenlicht zurück ins Weltall reflektiert wird, wird die Erderwärmung verlangsamt. Dies verhindert kurzfristig ein weiteres Schmelzen der Polkappen. Die Chemikalien sind jedoch keine nachhaltige Lösung, da sie den Ausstoss der Treibhausgase nicht verringern. Zudem musst du für einen konkreten Einfluss der Chemikalien jährlich ca. 2.25 Mia. Dollar investieren.",
      consequences: {
        economy: -20,
        environment: -5,
        society: 0,
        health: 0
      }
    },
    option2: {
      description: "Ich nehme die führenden Personen aller Länder bei der Hand und führe ein verpflichtendes Klimaabkommen ein, das zu einer drastischen Reduzierung der CO2-Emissionen weltweit führen soll.",
      explanation: "Im Gegensatz zum Pariser Klimaabkommen ist dein neues Abkommen ein bindendes Abkommen für alle Staaten. Die Einführung führt zu Spannungen und dauert lange. Der langfristige Effekt auf die Umwelt ist jedoch positiv, da die CO2 Bilanz verbessert wird. Die Investitionen aller Länder kosten jedoch viel Geld. Langfristig stärken sie die Wirtschaft jedoch, da neue Arbeitsplätze geschaffen werden.",
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
    image: 'bildungsschere.png',
    option1: {
      description: "Ich fördere den Ausbau von Schulen in unterentwickelten Regionen.",
      explanation: "Durch das Einstellen von qualifizierten Lehrkräften und dem Verwenden von modernen Lehrmitteln, erhöht sich die Bildungsqualität. Der Zugang zu Bildung wird erleichtert, und die Bildungsschere wird kleiner. Langfristig führt es zu einer Abnahme der Armut. Die Investition kostet jedoch.",
      consequences: {
        economy: -10,
        environment: 0,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Ich unterstütze die Entwicklung von global zugänglichen Online-Bildungsplattformen.",
      explanation: "Die Entwicklung der Online-Plattformen ist relativ kostengünstig. Vor allem Menschen in unterentwickelten Regionen haben so Zugriff zu qualitativ hochwertiger Bildung, ohne auf eine physische Schule angewiesen zu sein. Dich kostet jedoch die Einführung der dafür notwendigen Infrastruktur eine Menge Geld, da alle Zugang zum Internet haben sollen. Langfristig führt die Massnahme zu einer Abnahme der Armut.",
      consequences: {
        economy: -10,
        environment: 0,
        society: 10,
        health: 0
      }
    }
  },
  {
    description: "In Hafghanistan droht eine Lebensmittelkrise aufgrund von Dürre und schlechten Erntebedingungen. Eine Zunahme von Armut, Gesundheitsproblemen, sozialen Unruhen steht bevor.",
    image: 'lebensmittelkrise.png',
    option1: {
      description: "Mit der Unterstützung von Erstweltländern führe ich in Hafghanistan moderne, nachhaltige Landwirtschaftstechniken und -praktiken ein.",
      explanation: "Die Investition in fortschrittliche und ressourceneffiziente Landwirtschaftstechnologien zeigt Wirkung, doch erst bei der nächsten Ernte. Das Programm zur Schulung von Bauern findet jedoch Anklang und verhindert so soziale Unruhen. Da die Massnahmen schnell passieren mussten, kostet es dich eine ganze Stange Geld.",
      consequences: {
        economy: -20,
        environment: 10,
        society: 15,
        health: 10
      }
    },
    option2: {
      description: "Schnelle Massnahmen sind gefragt: Sofort schicke ich tausende Lastwagen mit günstigen Lebensmitteln ins Land.",
      explanation: "Die schnelle Massnahme zeigt Wirkung. Weniger Menschen verhungern und sichern vorübergehend die Nahrungsmittelversorgung. Das riesige Aufgebot an Lastwagen hat aber auch Nachteile: Es wird eine Unmenge an CO2 ausgestossen. Und ein möglicher Ernteausfall im nächsten Jahr kann mit dieser Lösung nicht verhindert werden.",
      consequences: {
        economy: -15,
        environment: -10,
        society: 10,
        health: 5
      }
    }
  },
  {
    description: "In der Grossstadt Los Tangeles steigen die Luftverschmutzung und die damit verbundenen Gesundheitsprobleme dramatisch an.",
    image: 'bildname.png',
    option1: {
      description: "Ich führe eine Umweltzone mit strengen Emissionsgrenzwerten für Fahrzeuge ein.",
      explanation: "Diese Massnahme würde den Verkehr von Fahrzeugen mit hohen Emissionen in bestimmten Teilen der Stadt einschränken. Dadurch könnte die Luftqualität verbessert und gesundheitliche Risiken reduziert werden. Langfristig könnte dies auch die Entwicklung und den Verkauf umweltfreundlicher Fahrzeuge fördern.",
      consequences: {
        economy: -5,
        environment: 15,
        society: 5,
        health: 10
      }
    },
    option2: {
      description: "Ich investiere in den Ausbau des öffentlichen Nahverkehrs und in die Förderung von Elektromobilität.",
      explanation: "Diese Investition würde den Bedarf an individuellem Autoverkehr reduzieren und die Luftverschmutzung verringern. Der Ausbau des öffentlichen Nahverkehrs würde es den Bürgern erleichtern, auf umweltfreundlichere Verkehrsmittel umzusteigen. Diese Massnahme würde auch langfristig zur Verbesserung der städtischen Infrastruktur beitragen.",
      consequences: {
        economy: -10,
        environment: 20,
        society: 10,
        health: 15
      }
    },
  },
  {
    description: "In Brasolia gibt es wachsende Spannungen zwischen verschiedenen Bevölkerungsgruppen. Du suchst nach Wegen, um die Kluft zwischen Arm und Reich zu verringern und soziale Gerechtigkeit zu fördern.",
    image: 'bildname.png',
    option1: {
      description: "Ich führe ein Steuersystem ein, bei dem Reiche stärker besteuert werden (Progression). Zudem verteile ich die Einnahmen zur Unterstützung benachteiligter Gruppen um.",
      explanation: "Durch die Einführung von sozialen Programmen, Bildung und Gesundheitsdienste für einkommensschwache Gruppen wird die Einkommensungleichheit verringert. Gleichzeitig verbessert sich der Zugang zu grundlegenden Dienstleistungen. Das Steuersystem ist jedoch nicht komplett gerecht und effizient, weshalb es das wirtschaftliche Wachstum ein bisschen hemmt.",
      consequences: {
        economy: -5,
        environment: 0,
        society: 10,
        health: 10
      }
    },
    option2: {
      description: "Ich führe Quoten und Anreize für Unternehmen ein, die die Inklusion und Diversität in der Arbeitswelt fördern.",
      explanation: "Deine Strategie baut über die Zeit strukturelle Barrieren ab und verbessert die wirtschaftliche Teilnahme von Minderheiten. Die Anreize kosten dich jedoch auch ein wenig Geld.",
      consequences: {
        economy: -5,
        environment: 0,
        society: 10,
        health: 0
      }
    },
  },
  {
    description: "In der schnell wachsenden Stadt Mumabi in Indoria leiden die Einwohner unter Wasserknappheit und mangelnder sanitärer Infrastruktur, was zu Gesundheitsrisiken und Umweltproblemen führt.",
    image: 'bildname.png',
    option1: {
      description: "Ich starte einen grossangelegten Bau von Staudämmen zur Wasserregulierung und zur Energiegewinnung.",
      explanation: "Während die Lösung das Wasserproblem und die Energieversorgung beheben kann, hat es potenziell negative Auswirkungen auf die Umwelt. Der Stausee zerstört Ökosysteme und führt zur Umsiedlung von Gemeinden. Es besteht zudem das Risiko, dass landwirtschaftliche Flächen flussabwärts austrocknen.",
      consequences: {
        economy: 10,
        environment: -20,
        society: -10,
        health: 0
      }
    },
    option2: {
      description: "Um die Investitionen und die Effizienz zu steigern, führe ich eine grossflächige Wasserprivatisierung ein.",
      explanation: "Die Lösung führt zu einer verbesserten Infrastruktur und Versorgung. Die Wasserpreise steigen jedoch und der Zugang zu sauberem Wasser für arme Haushalte wird somit eingeschränkt. Umweltstandards und nachhaltige Praktiken werden bei der Umsetzung vernachlässigt.",
      consequences: {
        economy: -5,
        environment: -10,
        society: -10,
        health: 10
      }
    },
  },
  {
    description: "Der Lebensmittelkonzern Bestlé steht vor der Entscheidung, entweder weiterhin kostengünstige, aber umweltschädliche Plastikverpackungen zu verwenden oder auf teurere, biologisch abbaubare Verpackungsmaterialien umzusteigen. Er will so die Nachhaltigkeit fördern und die Umweltbelastung reduzieren.",
    image: 'bildname.png',
    option1: {
      description: "Als Präsident schreibe ich vor, dass Bestlé Plastikverpackungen beibehalten muss.",
      explanation: "Bestlé kann Kosten einsparen. Jedoch wird die Umwelt durch Plastikmüll wieter belastet und es ergeben sich langfristige Schäden an Ökosystemen. Es ergibt auch mögliche gesundheitliche Bedenken durch Mikroplastik in der Nahrungskette.",
      consequences: {
        economy: 10,
        environment: -10,
        society: 0,
        health: -5
      }
    },
    option2: {
      description: "Als Präsident schreibe ich den Wechsel zu umweltfreundlichen, biologisch abbaubaren Verpackungen vor.",
      explanation: "Die Kosten für die neuen Verpackungen steigen. Jedoch hat die Förderung eines umweltbewussten Verhaltens einen positiven Einfluss auf das Umweltbewusstsein der Kunden von Bestlé. Durch die deutliche Reduzierung der Umweltbelastung durch Plastikabfälle wird eine Kreislaufwirtschaft gefördert.",
      consequences: {
        economy: -10,
        environment: 10,
        society: 5,
        health: 0
      }
    },
  },
  {
    description: "In einer ländlichen Gemeinde in Mongoria sind Mädchen und Frauen unverhältnismässig von Bildungsmangel, frühzeitiger Heirat und geschlechtsspezifischer Gewalt betroffen. Du musst dich entscheiden, um die Ungleichheit zu bekämpfen.",
    image: 'bildname.png',
    option1: {
      description: "Ich konzentriere mich auf Bildungsprogramme in den betroffenen Regionen, um Mädchen und jungen Frauen Zugang zu Schulbildung und Berufsausbildung zu ermöglichen.",
      explanation: "Durch die Erhöhung der Beschäftigungsfähigkeit und des Einkommenspotenzials der Frauen ergibt sich eine positivie, wirtschaftliche Entwicklung der Gemeinde. Durch nachhaltige Bildung & Gleichstellung der Geschlecher verringert sich die Anzahl von Kinderhochzeiten.",
      consequences: {
        economy: 5,
        environment: 0,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Ich setze mich für Massnahmen zur Bekämpfung von geschlechtsspezifischer Gewalt ein, einschliesslich Sensibilisierungskampagnen und Unterstützungsdiensten für Opfer.",
      explanation: "Die erhöhte Sicherheit von Frauen führt zu einer höhere Beteiligung der Frauen am Arbeitsmarkt. Durch die Stärkung des Rechtsschutzes für Frauen ergibt sich ein kultureller Wandel, hin bis zu mehr Geschlechtergerechtigkeit. Auch sind weniger Frauen physischer und psychischer Gewalt ausgesetzt.",
      consequences: {
        economy: 5,
        environment: 0,
        society: 10,
        health: 5
      }
    },
  },
  {
    description: "Eine ländliche Gemeinde in Luruguay steht vor der Entscheidung, wie sie den Zugang zu Verhütungsmitteln verbessern kann. Für die Gemeinde hast du beschränkte Ressourcen und musst entscheiden, welche Strategie du verfolgst, um die Gesundheit und das Wohlergehen der Bevölkerung zu verbessern.",
    image: 'bildname.png',
    option1: {
      description: "Ich konzentriere die wenigen Ressourcen auf die Bereitstellung von Verhütungsmitteln.",
      explanation: "Zwar haben die Menschen Zugang zu Verhütungsmittel, wie sie korrekt angewendet werden ist jedoch noch ein anderes Thema. Dennoch gehen die ungewollten Schwangerschaften zurück und die Ansteckungsrate von sexuell übertragbaren Krankheiten nimmt ab. Entgegen der Erwartungen, sparst du längerfristig ein wenig Geld. Da weniger ungeplante Schwangerschaften auftreten, führt dies zu erheblichen Einsparungen. Viele Kondome landen leider in der Toilette oder auf der Strasse, was für die Umwelt nicht förderlich ist.",
      consequences: {
        economy: 5,
        environment: -5,
        society: 0,
        health: 10
      }
    },
    option2: {
      description: "Ich konzentriere die wenigen Ressourcen auf die Aufklärung.",
      explanation: "Familienplanung ist nun möglich, das Thema Sex wird nun auch weniger stigmatisiert. Die ungeplanten Schwangerschaften gehen zurück. So sparst du längerfristig Geld, da du weniger Geld für die ungeplanten Schwangerschaften aufwenden musst. Die Ansteckungsrate an sexuell übertragbaren Krankheiten bleibt jedoch hoch.",
      consequences: {
        economy: 5,
        environment: 0,
        society: 5,
        health: -5
      }
    },
  },
  {
    description: "Krassland greift unerwartet die Gurkaine an. Viele Länder boykottieren den Gasexport von Krassland. Andere Energien sind dringendst gefragt, ein kalter Winter steht vor der Türe.",
    image: 'bildname.png',
    option1: {
      description: "Ich kratze alles Geld zusammen und führe Investitionen in Wasser- und Windkraft aus.",
      explanation: "Die Umwelt freuts, es ist sicher die ökologische Variante. Leider frieren viele Menschen im Winter, weil die Massnahmen zu spät greifen. Die Investitionen sind initial auch sehr teuer.",
      consequences: {
        economy: -10,
        environment: 20,
        society: 0,
        health: -10
      }
    },
    option2: {
      description: "Da die Menschen schon frieren, entscheide ich mich einmal und für alle die Kohlespeicher zu leeren und als Energiequelle zu nutzen. Danach investiere ich in nachhaltige Energiequellen.",
      explanation: "Durch den Verkauf der Kohle an die Energieunternehmen verdienst du Geld, was du gleich für die Investitionen nutzen kannst. Deine Umwelt leider aber, die Verbrennung der Kohlespeicher führt zu einem massiven CO2-Ausstoss. Ein Vorteil hats: Die Menschen frieren im Winter nicht.",
      consequences: {
        economy: 10,
        environment: -20,
        society: 0,
        health: 10
      }
    },
  },
  {
    description: "Die schmelzenden Polkappen sind eine direkte Folge der Erderwärmung. Nun drohen küstennahe Städte wie Mumabi oder Fidney unterzugehen. Millionen von Menschen würden ihr Zuhause verlieren.",
    image: 'bildname.png',
    option1: {
      description: "Ich nutze meine gesamten Ressourcen, um die Millionen Menschen umzusiedeln. Leider bleibt kein Geld für weitere Massnahmen.",
      explanation: "Das Unterfangen ist extrem ressourcenintensiv, da Unterkunft und Umsiedlung für Millionen von Menschen organisiert werden muss. Die Menschen freuts, da sie eine neue Bleibe haben und die Weltregierung um sie kümmert - niemand stirbt. Jedoch führt der Anstieg des Meeresspiegels dazu, dass viel Müll aus den neu überschwemmten Gebieten im Meer landet.",
      consequences: {
        economy: -10,
        environment: -10,
        society: 10,
        health: 10
      }
    },
    option2: {
      description: "Ich nutze meine gesamten Ressourcen, um das Fortschreiten der schmelzenden Polkappen zu verhindern. Leider bleibt kein Geld für weitere Massnahmen.",
      explanation: "Du investierst in CO2-Speicherung, um einen anhaltenden Effekt zu erzielen. Es ist teuer, aber eine nachhaltige Lösung für die Umwelt. Die Menschen fühlen sich in ihrer bedrohten Lage jedoch nicht von der Regierung wahrgenommen und entsprechend unsicher.",
      consequences: {
        economy: -10,
        environment: 20,
        society: -10,
        health: 0
      }
    },
  },
  {
    description: "Die Influenza-Viren sind mutiert und führen zu einer neuartigen Nebenwirkung: Betroffene werden produktiver, sind aber ermüdet.",
    image: 'bildname.png',
    option1: {
      description: "Als Präsident unternehme ich nichts und überlasse der Natur ihren freien Lauf.",
      explanation: "Die erhöhte Produktivität steigert die Wirtschaft. Viele Menschen sind aber ausgelaugt. Die Gesellschaft ist empört darüber, dass die Regierung nichts unternimmt.",
      consequences: {
        economy: 20,
        environment: 0,
        society: -10,
        health: -20
      }
    },
    option2: {
      description: "Ich entwickle schnell einen neuartigen mRNA-Impfstoff.",
      explanation: "Die Investition in einen neuartigen mRNA Impfstoff kostet dich einiges an Geld, doch die Forschung und die Pharmaindustrie profitiert davon. Die Gesellschaft fühlt sich von der Weltregierung ernst genommen und es enstehen fast keine Langzeitfolgen durch die Infektionen.",
      consequences: {
        economy: 5,
        environment: 0,
        society: 5,
        health: 0
      }
    },
  },


];


// import type { ScenarioProps } from "$lib/types/Types";

// export const scenarios: ScenarioProps[] = [
//   {
//     description: "Die Klimaerwärmung führt zu schmelzenden Polkappen, was zu steigendem Meeresspiegel führt.",
//     image: 'bildname.png',
//     option1: {
//       description: "Mit einem Flugzeug sprühst du Chemikalien in die Stratosphäre, um die Sonneneinstrahlung zu reduzieren.",
//       explanation: "Indem das Sonnenlicht zurück ins Weltall reflektiert wird, wird die Erderwärmung verlangsamt. Die verhindert kurzfristig ein weiteres Schmelzen der Polkappen. Die Chemikalien sind jedoch keine nachhaltige Lösung, da sie den Ausstoss der Treibhausgase nicht verringern. Zudem musst du für einen konkreten Einfluss der Chemikalien jährlich ca. 2.25 Mia. Dollar investieren.",
//       consequences: {
//         economy: -20,
//         environment: -5,
//         society: 0,
//         health: 0
//       }
//     },
//     option2: {
//       description: "Du nimmst die führenden Personen aller Länder bei der Hand und führst ein verpflichtendes Klimaabkommen ein. Das soll für eine drastische Reduzierung der CO2-Emissionen weltweit führen.",
//       explanation: "Im Gegensatz zum Parises Klimaabkommen ist dein neues Abkommen ein bindendes Abkommen für alle Staaten. Die Einführung führt zu Spannungen und dauert lange. Der langfristige Effekt auf die Umwelt ist jedoch positiv, da die CO2 Bilanz verbessert wird. Die Investitionen aller Länder kosten jedoch viel Geld. Langfristig stärken sie die Wirtschaft jedoch, da neue Arbeitsplätze geschaffen werden.",
//       consequences: {
//         economy: 5,
//         environment: 20,
//         society: -10,
//         health: 0
//       }
//     }
//   },
//   {
//     description: "Durch die Bildungsschere von Erst- & Drittweltländern droht eine weitere grosse Flüchtlingswelle. Du willst den Zugang zu Bildung für viele Menschen leichter zugänglich machen.",
//     image: 'bildname.png',
//     option1: {
//       description: "Du förderst den Ausbau von Schulen in unterentwickelten Regionen.",
//       explanation: "Durch das Einstellen von qualifizierten Lehrkräften und dem Verwenden von modernen Lehrmitteln, erhöht sich die Bildungsqualität. Der Zugang zu Bildung wird erleichtert, und die Bildungsschere wird kleiner. Langfristig führt es zu einer Abnahme der Armut. Die Investitition kostet jedoch.",
//       consequences: {
//         economy: -10,
//         environment: 0,
//         society: 10,
//         health: 0
//       }
//     },
//     option2: {
//       description: "Du unterstützt die Entwicklung von global zugänglichen Online-Bildungsplattformen.",
//       explanation: "Die Entwicklung der Online-Plattformen ist relativ kostengünstig. Vorallem Menschen in unterentwickelten Regionen haben so Zugriff zu qualitativ hochwertiger Bildung, ohne auf eine physische Schule angewiesen zu sein. Dich kostet jedoch die Einführung der dafür notwendigen Infrastruktur eine Menge Geld, da alle Zugang zum Internet haben sollen. Langfristig führt die Massnahme zu einer Abnahme der Armut.",
//       consequences: {
//         economy: -10,
//         environment: 0,
//         society: 10,
//         health: 0
//       }
//     }
//   }
// ]
