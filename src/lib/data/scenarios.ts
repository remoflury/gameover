import type { ScenarioProps } from "$lib/types/Types";

export const tutorialScenario: ScenarioProps = {
  title: "Tutorial",
  description: "Die Klimaerwärmung führt zu schmelzenden Polkappen, was zu steigendem Meeresspiegel führt.",
  image: 'tutorial.jpg',
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
    title: "Schmelzende Polarkappen",
    description: "Die Klimaerwärmung führt zu schmelzende Polkappen, was zu steigendem Meeresspiegel führt.",
    image: '01.jpg',
    option1: {
      description: "Ich sprühe mit einem Flugzeug Chemikalien in die Stratosphäre, um die Sonneneinstrahlung zu reduzieren. ",
      explanation: "Indem das Sonnenlicht zurück ins Weltall reflektiert wrid, wird die Erderwärmung verlangsamt. Die verhindert kurzfristig ein weiteres Schmelzen der Polkappen. Die Chemikalien sind jedoch keine nachhaltige Lösung, da sie den Ausstoss der Treibhausgase nicht verringern. Zudem musst du für einen konkreten Einfluss der Chemikalien jährlich ca. 2.25 Mia. Dollar investieren.",
      consequences: {
        economy: -20,
        environment: -5,
        society: 0,
        health: 0
      }
    },
    option2: {
      description: "Ich nehme die führenden Personen aller Länder bei der Hand und führe ein verpflichtendes Klimaabkommen ein, das zu einer drastischen Reduzierung der CO2-Emissionen weltweit führen soll.",
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
    title: "Bildung für Alle",
    description: "Durch die Bildungsschere von Erst- & Drittweltländern droht eine weitere grosse Flüchtlingswelle. Du willst den Zugang zu Bildung für viele Menschen leichter zugänglich machen.",
    image: '14.png',
    option1: {
      description: "Ich fördere den Ausbau von Schulen in unterentwickelten Regionen.",
      explanation: "Durch das Einstellen von qualifizierten Lehrkräften und dem Verwenden von modernen Lehrmitteln, erhöht sich die Bildungsqualität. Der Zugang zu Bildung wird erleichtert, und die Bildungsschere wird kleiner. Langfristig führt es zu einer Abnahme der Armut. Die Investitition kostet jedoch.",  
      consequences: {
        economy: -10,
        environment: 0,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Ich unterstütze die Entwicklung von global zugänglichen Online-Bildungsplattformen.",
      explanation: "Die Entwicklung der Online-Plattformen ist relativ kostengünstig. Vorallem Menschen in unterentwickelten Regionen haben so Zugriff zu qualitativ hochwertiger Bildung, ohne auf eine physische Schule angewiesen zu sein. Dich kostet jedoch die Einführung der dafür notwendigen Infrastruktur eine Menge Geld, da alle Zugang zum Internet haben sollen. Langfristig führt die Massnahme zu einer Abnahme der Armut.",
      consequences: {
        economy: -10,
        environment: 0,
        society: 10,
        health: 0
      }
    }
  },
  {
    title: "Dürre",
    description: "In Hafghanistan droht eine Lebensmittelkrise aufgrund von Dürre und schlechten Erntebedingungen. Eine Zuname von Armut, Gesundheitsproblemen, sozialen Unruhen steht bevor. ",
    image: '12.jpg',
    option1: {
      description: "Mit der Unterstützung von Erstweltländern führe ich in Hafghanistan moderne, nachhaltige Landwirtschaftstechniken und -praktiken ein.",
      explanation: "Die Investition in fortschrittliche und ressourceneffiziente Landwirtschaftstechnologien zeigt Wirkung, doch erst bei der nächsten Ernte. Das Programm zur Schulung von Bauern findet jedoch Anklang und verhindert so soziale Unruhen. Da die Massnahmen schnell passieren mussten, kostet es dich eine ganze Stange Geld.",
      consequences: {
        economy: -10,
        environment: 10,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Schnelle Massnahmen sind gefragt: Sofort schicke ich tausende Lastwagen mit günstigen Lebensmitteln ins Land.",
      explanation: "Die schnelle Massnahme zeigt Wirkung. Weniger Menschen verhungern und sichert vorübergehend die Nahrungsmittelversorgung. Das riesige Aufgebot an Lastwagen hat aber auch Nachteile: Es wird eine Unmenge an CO2 ausgestossen. Und ein möglicher Ernteausfall im nächsten Jahr kann mit dieser Lösung nicht verhindert werden.",
      consequences: {
        economy: 0,
        environment: -10,
        society: 0,
        health: 20
      }
    }
  },
  {
    title: "Luftnot in Los Tangeles",
    description: "In der Grossstadt Los Tangeles steigen die Luftverschmutzung und die damit verbundenen Gesundheitsprobleme dramatisch an.", 
    image: '15.jpg',
    option1: {
      description: "Ich führe eine Umweltzone mit strengen Emissionsgrenzwerten für Fahrzeuge ein. ",
      explanation: "Diese Massnahme würde den Verkehr von Fahrzeugen mit hohen Emissionen in bestimmten Teilen der Stadt einschränken. Dadurch könnte die Luftqualität verbessert und gesundheitliche Risiken reduziert werden. Langfristig könnte dies auch die Entwicklung und den Verkauf umweltfreundlicher Fahrzeuge fördern. Die Herausforderung besteht darin, die wirtschaftlichen Auswirkungen auf den Verkehr und lokale Unternehmen zu managen.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 10,
        health: 10
      }
    },
    option2: {
      description: "Ich investiere in erneuerbare Energien und umweltfreundliche Technologien, um eine grüne Wirtschaft zu fördern.",
      explanation: "Die Investition in erneuerbare Energien wie Solarenergie und Windkraft schafft Arbeitsplätze. Gleichzeitig nimmt die Umweltverschmutzung ab. Die Investitionen sind aber teuer, da du auch die bestehenden, nicht grünen Industrieren im Wandel unterstützen musst. Die Gesundheitsprobleme nehmen mit der Zeit jedoch ab.",
      consequences: {
        economy: 0,
        environment: 10,
        society: 0,
        health: 10
      }
    }
  },
  {
    title: "Soziale Gerechtigkeit in Brasolia",
    description: "In Brasolia gibt es wachsende Spannungen zwischen verschiedenen Bevölkerungsgruppen. Du suchst nach Wegen, um die Kluft zwischen Arm und Reich zu verringern und soziale Gerechtigkeit zu fördern.",
    image: '5.jpg',
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
    }
  },
  {
    title: "Wasserkrise in Mumabi",
    description: "In der schnell wachsenden Stadt Mumabi in Indoria leiden die Einwohner unter Wasserknappheit und mangelnder sanitärer Infrastruktur, was zu Gesundheitsrisiken und Umweltproblemen führt.",
    image: '16.jpg',
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
    }
  },
  {
    title: "Bestlé Verpackung",
    description: "Der Lebensmittelkonzern Bestlé steht vor der Entscheidung, entweder weiterhin kostengünstige, aber umweltschädliche Plastikverpackungen zu verwenden oder auf teurere, biologisch abbaubare Verpackungsmaterialien umzusteigen. Er will so die Nachhaltigkeit fördern und die Umweltbelastung reduzieren.",
    image: '17.jpg',
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
        society: -5,
        health: 0
      }
    }
  },
  {
    title: "Gleichstellung Mädchen und Frauen",
    description: "In einer ländlichen Gemeinde in Mongoria sind Mädchen und Frauen unverhältnismässig von Bildungsmangel, frühzeitiger Heirat und geschlechtsspezifischer Gewalt betroffen. Du musst dich entscheiden, um die Ungleichheit zu bekämpfen.",
    image: '14.jpg',
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
    }
  },
  {
    title: "Verhütungsmittel",
    description: "Eine ländliche Gemeinde in Luruguay steht vor der Entscheidung, wie sie den Zugang zu Verhütungsmitteln verbessern kann. Für die Gemeinde hast du beschränkte Ressourcen und musst entscheiden, welche Strategie du verfolgst, um die Gesundheit und das Wohlergehen der Bevölkerung zu verbessern.",
    image: '18.jpg',
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
    }
  },
  {
    title: "Energiekrise",
    description: "Krassland greift unerwartet die Gurkaine an. Viele Länder boykottieren den Gasexport von Krassland. Andere Energien sind dringendst gefragt, ein kalter Winter steht vor der Türe.",
    image: '08.jpg',
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
    }
  },
  {
    title: "Tsunami",
    description: "Ein katastrophales Erdbeben erschüttert die Region um Tahini, gefolgt von einem verheerenden Tsunami. Die Naturkatastrophe hat verheerende Auswirkungen auf die Inselgemeinschaft, ihre Infrastruktur und die Lebensgrundlagen der Menschen.",
    image: '32.jpg',
    option1: {
      description: "Ich setze sofort alle Ressourcen ein, verstärke Evakuierungen und sichere lebenswichtige Versorgung, um die unmittelbaren Auswirkungen zu minimieren.",  
      explanation: "Der sofortige Einsatz aller verfügbaren Ressourcen zeigt eine effektive Reaktion auf die Katastrophe. Durch verstärkte Evakuierungsteams, Einrichtung medizinischer Versorgungseinrichtungen und Priorisierung von Nahrungsmittel- sowie Wasserversorgung wird die Verlustzahl minimiert. Die schnelle Hilfe sichert das Überleben der Bevölkerung.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 10,
        health: 10
      }
    },
    option2: {
      description: "Ich wähle langfristige Wiederaufbaustrategien nach einer umfassenden Schadensanalyse, um Infrastruktur und Gemeinschaft widerstandsfähiger gegen Naturkatastrophen zu machen.",
      explanation: "Die Verzögerung bei der Soforthilfe in führt zu einem höheren Verlust an Menschenleben. Langfristige Pläne allein können die akuten Bedürfnisse nicht rechtzeitig erfüllen, was zu grösseren menschlichen Tragödien führt.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -10,
        health: -10
      }
    }
  },
  {
    title: "Influenza Virus",
    description: "Die Influenza-Viren sind mutiert und führen zu einer neuartigen Nebenwirkung: Betroffene werden produktiver, sind aber ermüdet.",
    image: '29.jpg',
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
    }
  },
  {
    title: "Schattenleopard",
    description: "Für ausgestorben geglaubt, tauchen plötzlich Berichte über Schattenleoparden im Regenwald auf.",
    image: '02.jpg',
    option1: {
      description: "Ich beschliesse, das Gebiet zu schützen und international als Naturschutzgebiet zu deklarieren. Forscher werden finanziert, um den Schattenleoparden zu erforschen und Schutzmassnahmen zu entwickeln.",
      explanation: "Die Entscheidung, das Gebiet zu schützen und als Naturschutzgebiet zu deklarieren, zieht Wilderer und rücksichtslose Touristen an. Dies gefährdet die Schattenleoparden und führt zu einem Anstieg der menschlichen Einflüsse, trotz finanzieller Forschungsunterstützung.",
      consequences: {
        economy: 20,
        environment: -10,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Ich halte die Entdeckung der Schattenleoparden geheim, um Wilderei und übermässigen Tourismus zu vermeiden. Im Stillen finanziere ich Forschung, um effektive Schutzmassnahmen zu entwickeln, bevor ich die Information öffentlich mache.",
      explanation: "Die geheime Entscheidung, die Schattenleopardenentdeckung vorerst zu verschweigen, bewahrt sie vor Wilderei und übermässigem Tourismus. Durch finanzierte Forschung entstehen effektive Schutzmassnahmen, bevor die Information öffentlich wird, was langfristig zum Schutz der Art beiträgt.",
      consequences: {
        economy: 0,
        environment: 10,
        society: 0,
        health: 0
      }
    }
  },
  {
    title: "Hauskatzen",
    description: "In Kuhan wurden bei Hauskatzen unbekannte Viren entdeckt, die auf Menschen übertragbar sind. Viele Menschen sind bereits infiziert, und besonders für Kinder kann die Krankheit tödlich sein. Die Besitzer der Katzern lehnen das Töten der Tiere ab.",
    image: '29.png',
    option1: {
      description: "Ich setze auf alternative Massnahmen, um die Ausbreitung des Virus unter Katzen zu stoppen, ohne sie zu töten. Intensive Forschung und Entwicklung von Heilmitteln stehen im Fokus.",
      explanation: "Die Entscheidung, alternative Massnahmen gegen den Katzenvirus zu ergreifen, bewahrt das ökologische Gleichgewicht und fördert nachhaltige Lösungen. Trotzdem sind viele Kinder an der Infektion gestorben, was durch präventive Massnahmen hätte vermieden werden können.",
      consequences: {
        economy: 0,
        environment: 5,
        society: 10,
        health: -20
      }
    },
    option2: {
      description: "Als drastische Massnahme zur Pandemieeindämmung befürworte ich das Töten der infizierten Katzen, um Kinderleben zu schützen.",
      explanation: "Die Entscheidung, infizierte Katzen zu töten, stoppt die Virusverbreitung und schützt Menschen, besonders Kinder. Allerdings sorgt diese Massnahme für starken Widerstand von den Besitzern der Katzen und entfacht eine ethische Debatte über den Umgang mit Tierpopulationen.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -10,
        health: 20
      }
    }
  },
  {
    title: "Erneuerbare Energie in Wiederlanden",
    description: "Der Ausbau von Wind- und Solarenergie in der Wiederlanden hat dazu geführt, dass mittlerweile 70% des Energiebedarfs aus erneuerbaren Quellen gedeckt werden. Die Bevölkerung ist aber unzufrieden und der Meinung, dass ihr Land durch die Windräder und Solarzellen verwüstet wird. ",
    image: '11.jpg',
    option1: {
      description: "Um Bedenken der Bevölkerung bezüglich Landschaftsverwüstung zu adressieren, reguliere ich den weiteren Ausbau von Wind- und Solarenergie strenger. Strenge Richtlinien und sorgfältige Prüfung neuer Projekte sollen die Landschaft bewahren und Unzufriedenheit verringern.",
      explanation: "Die Entscheidung, den Ausbau von Wind- und Solarenergie stärker zu regulieren, um die Landschaft zu schützen, führt zu einem Rückgang neuer Projekte in diesen Bereichen. Obwohl die visuelle Verschandelung minimiert wird, verlangsamt sich der Fortschritt im Bereich erneuerbare Energien. Es könnte jedoch zu einer erhöhten Zufriedenheit in der Bevölkerung führen, da ihre Bedenken ernst genommen wurden.",
      consequences: {
        economy: 0,
        environment: -10,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Trotz Bedenken setze ich auf den Ausbau erneuerbarer Energien. Investitionen in Technologie und Bürgerbeteiligung sollen visuelle Beeinträchtigungen minimieren und die Fortschritte in erneuerbarer Energie vorantreiben.",
      explanation: "Die Entscheidung, den Fokus weiterhin auf erneuerbare Energien zu legen, führt zu Fortschritten im Bereich sauberer Energie. Die Investitionen in technologische Innovationen und Designverbesserungen minimieren zwar die visuellen Auswirkungen, aber die Unzufriedenheit in der Bevölkerung bleibt bestehen. Die Fortführung dieser Strategie könnte zu einem weiteren Anstieg der erneuerbaren Energiequellen führen, jedoch auf Kosten der Akzeptanz in der Gemeinschaft.",
      consequences: {
        economy: 0,
        environment: 10,
        society: -20,
        health: 0
      }
    }
  },
  {
    title: "Neuer Planet endeckt",
    description: "Astronomen haben einen unbekannten Planeten entdeckt, der lebensfreundliche Bedingungen aufweist und eine Alternative zur Erde sein könnte.",
    image: '22.jpg',
    option1: {
      description: "Ich leite die Entwicklung in innovative Raumfahrttechnologien, um eine bemannte Mission zum lebensfreundlichen Planeten zu ermöglichen und eine nachhaltige menschliche Kolonie zu gründen.",
      explanation: "Die Investition in die Raumfahrt hat positive Auswirkungen auf die Wirtschaft, da neue Technologien und Arbeitsplätze geschaffen werden. Jedoch hat es eine schlechte Auswirkung auf die Umwelt, da durch die Raumfahrmissionen schädliche Chemikalien in die Atmosphäre gelangen. Die Gesellschaft ist aber aufgeregt wegen der spannenden Entdeckung und Möglichkeiten, die die neue Kolonie bringen könnte.",
      consequences: {
        economy: 5,
        environment: -20,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Ich investiere verstärkt in Umweltschutzmassnahmen für die Erde, um den ökologischen Fussabdruck zu verringern und nachhaltige Technologien zu entwickeln, während ich den neuen Planeten als eine Option für die Zukunft erforschen.",
      explanation:"Die Entscheidung, in Umweltschutzmassnahmen zu investieren, wirkt sich positiv auf die Umwelt aus und trägt dazu bei, den ökologischen Fussabdruck zu verringern. Das führt jedoch kurzfristig zu wirtschaftlichen Herausforderungen, da gewinnorientierte Aktivitäten eingeschränkt werden. Die Gesellschaft schätzt die Bemühungen im Umweltschutz, während die Forschung am neuen Planeten als eine vielversprechende Option für die Zukunft betrachtet wird.",
      consequences: {
        economy: -10,
        environment: 10,
        society: -5,
        health: 0
      }
    }
  },
  {
    title: "Invasive Flora",
    description: "Eine invasive Spezies bedroht die heimische Flora und Fauna in einem wichtigen Naturreservat. Handlungsbedarf besteht, um das Ökosystem zu schützen.",
    image: '06.jpg',
    option1: {
      description: "Ich mobilisiere Ressourcen für eine gross angelegte Entfernung der invasiven Spezies, um das Gleichgewicht des Naturreservats wiederherzustellen.",
      explanation: "Die Entfernung der invasiven Spezies erzielt kurzfristige Erfolge, führt jedoch zu ökologischen Problemen. Neue resistente Arten breiten sich aus, und aggressive Bekämpfungsmassnahmen schädigen die ursprüngliche Flora und Fauna des Naturreservats. Die kurzfristige Lösung verursacht langfristige ökologische Schäden und einen Verlust an Artenvielfalt. Umweltschützer und die Bevölkerung sind enttäuscht über die mangelnde Effektivität und die negativen Auswirkungen.",
      consequences: {
        economy: 0,
        environment: -20,
        society: -10,
        health: 0
      }
    },
    option2: {
      description: "Ich entscheide mich dafür, das Naturreservat für einen begrenzten Zeitraum zu schliessen, um eine Ausbreitung der invasiven Spezies zu verhindern. In dieser Zeit werden nachhaltige Massnahmen zur Rehabilitation des Ökosystems ergriffen.",
      explanation: "Die Entscheidung, das Naturreservat vorübergehend zu schliessen, um eine Ausbreitung der invasiven Spezies zu verhindern, ermöglicht die Implementierung nachhaltiger Massnahmen. In dieser Zeit wird das Ökosystem rehabilitiert und langfristige Schäden vermieden. Die Wiedereröffnung des Reservats erfolgt in einer verbesserten Umgebung, in der die heimische Flora und Fauna von den durchgeführten nachhaltigen Massnahmen profitieren. Diese Entscheidung stärkt das Bewusstsein für Umweltschutz und nachhaltiges Management.",
      consequences: {
        economy: 0,
        environment: 20,
        society: 5,
        health: 0
      }
    }
  },
  {
    title: "Autobahn im Gian Canyon",
    description: "Bürger in der Nähe des Giant Canyons wollen eine Autobahn quer durch die Felsen um schneller von A zu B zu kommen. Die gibt grosse Proteste von Naturschützern und Umweltaktivisten, welche gegen den Bau sind.",
    image: '23.jpg',
    option1: {
      description: "Ich lehne den Bau der Autobahn ab und fördere den Ausbau öffentlicher Verkehrsmittel, um Umweltauswirkungen zu minimieren.",
      explanation: "Die Ablehnung des Autobahnbaus wird von Naturschützern und Umweltaktivisten begrüsst, da dies die Integrität des Giant Canyons schützt. Der Fokus auf öffentlichen Verkehr wird als umweltfreundliche Alternative unterstützt und trägt zur Reduzierung von Verkehrsbelastung und Umweltauswirkungen bei. Diese Entscheidung könnte jedoch auf Widerstand von Bürgern stossen, die die Autobahnbefürworten.",
      consequences: {
        economy: 0,
        environment: 10,
        society: -10,
        health: 0
      }
    },
    option2: {
      description: "Ich genehmige den Bau der Autobahn, um die wirtschaftliche Entwicklung zu fördern. Allerdings implementiere ich strenge Umweltauflagen, um die Auswirkungen auf die Natur zu begrenzen.",
      explanation: "Die Genehmigung des Autobahnbaus wird die wirtschaftliche Entwicklung in der Region fördern und Arbeitsplätze schaffen. Die Implementierung strenger Umweltauflagen zeigt ein Bemühen, die Auswirkungen auf die Natur zu minimieren. Dies könnte zu einem Kompromiss zwischen wirtschaftlichen Interessen und Umweltschutz führen, jedoch könnten Naturschützer weiterhin Bedenken hinsichtlich der langfristigen Auswirkungen haben. Bürger könnten die Entscheidung als einen Schritt in die richtige Richtung sehen, um sowohl wirtschaftliche Entwicklung als auch Umweltschutz zu berücksichtigen.",
      consequences: {
        economy: 0,
        environment: -10,
        society: -10,
        health: 0
      }
    }
  },
  {
    title: "Bing Bon Trend",
    description: "Ein Bing Bong Trend führt dazu, dass sich viele Menschen sich selber gröbere Verletzungen zutun, was zu einer Überbelastung der lokalen Krankenhäuser führt.",
    image: '31.jpg',
    option1: {
      description: "Ich implementiere gezielte Aufklärungskampagnen und psychologische Unterstützungsmassnahmen, um die Menschen über die Risiken des Bing Bong Trends aufzuklären. Gleichzeitig stärke ich die Verfügbarkeit von psychologischen Gesundheitsdiensten, um Menschen in Krisensituationen zu helfen und die Überlastung der Krankenhäuser zu reduzieren.",
      explanation:"Die Aufklärung und psychologische Unterstützung erhöhen das Bewusstsein für die Risiken des Bing Bong Trends. Dies führt zu einer abnehmenden Zahl selbst zugefügter Verletzungen und entlastet die Krankenhäuser. Die gestärkte Verfügbarkeit von psychologischen Gesundheitsdiensten unterstützt Menschen in Krisensituationen, und langfristig wird auf eine nachhaltige Reduzierung der selbst zugefügten Verletzungen hingearbeitet.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 10,
        health: 10
      }
    },
    option2: {
      description: "Ich erlasse strengere Vorschriften und Gesetze, die den Bing Bong Trend einschränken und gegebenenfalls kriminalisieren. Durch verstärkte Überwachung und Sanktionen versuche ich, die Anzahl der selbst zugefügten Verletzungen zu verringern und somit die Belastung für die lokalen Krankenhäuser zu reduzieren.",
      explanation: "Die strengeren Vorschriften führen zur Abnahme des Bing Bong Trends durch Abschreckungseffekte. Krankenhäuser werden kurzfristig entlastet, aber die Einschränkung persönlicher Freiheiten führt zu Unzufriedenheit und sozialen Spannungen.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -20,
        health: -5
      }
    }
  },
  {
    title: "Abfallmanagement",
    description: "In einer Küstenstadt in Hailand musst du entscheiden, wie das Abfallmanagement verbessert werden kann, um die Verschmutzung der Ozeane zu minimieren.",
    image: '4.jpg',
    option1: {
      description: "Ich unterstütze ein Recyclingprogramm, das die Wiederverwendung von Materialien fördert und illegale Müllentsorgung streng bestraft. Dies könnte den Plastikmüll reduzieren und die Meeresumwelt schützen.",
      explanation:"Die Investition in ein effizientes Recyclingprogramm und die Förderung der Wiederverwendung von Materialien zeigen schnelle Erfolge. Plastikmüll wird reduziert, illegale Müllentsorgung wird durch strenge Strafen minimiert, und die Meeresumwelt erfährt eine positive Veränderung. Die Bevölkerung schätzt die Bemühungen zur Umweltschonung, und die Stadt wird als Vorreiter im nachhaltigen Abfallmanagement angesehen.",
      consequences: {
        economy: -20,
        environment: 10,
        society: -5,
        health: 0
      }
    },
    option2: {
      description:"Ich plane den Ausbau von Müllverbrennungsanlagen, um das Abfallvolumen zu reduzieren.",
      explanation: "Der Ausbau von Müllverbrennungsanlagen führt kurzfristig zu einer schnellen Entsorgung von Müll. Jedoch birgt dies Risiken für die Luftqualität und die Gesundheit der Anwohner. Die Umweltauswirkungen sind negativ, da Verbrennungsrückstände und Emissionen die Luftqualität beeinträchtigen. Die Entscheidung stösst auf Widerstand in der Bevölkerung, da Gesundheitsbedenken und Umweltauswirkungen sichtbar werden.",
      consequences: {
        economy: 0,
        environment: -5,
        society: -10,
        health: -20
      }
    }
  },
  {
    title: "Gesundheit in Quenia",
    description:"In einer abgelegenen Region in Quenia hast du begrenzte Mittel, um die Gesundheitsvorsorge zu verbessern. Die Bevölkerung leidet unter mangelnder medizinischer Versorgung, und du musst entscheiden, wie die begrenzten Ressourcen am effektivsten eingesetzt werden.",
    image: '18.jpg',
    option1: {
      description: "Ich investiere in den Aufbau von Gesundheitszentren, die grundlegende medizinische Versorgung und Impfprogramme anbieten. ",
      explanation: "Die Investition in den Aufbau von Gesundheitszentren erfordert beträchtliche Mittel, und die kurzfristigen Ergebnisse sind möglicherweise nicht so spürbar wie bei mobilen Gesundheitskliniken. Die Infrastruktur ist zwar nachhaltiger, aber die unmittelbaren Bedürfnisse der Bevölkerung in abgelegenen Gebieten könnten vernachlässigt werden. Die begrenzten Ressourcen führen möglicherweise nicht zu einer effizienten Abdeckung und könnten die Verbesserungen in der Gesundheitsversorgung behindern.",
      consequences: {
        economy: -10,
        environment: 0,
        society: 0,
        health: -10
      }
    },
    option2: {
      description:"Ich setze auf mobile Gesundheitskliniken, um auch abgelegene Gebiete zu erreichen. Dies ermöglicht eine breitere Abdeckung, könnte aber weniger dauerhafte Infrastruktur schaffen.",
      explanation: "Die Entscheidung für mobile Gesundheitskliniken ermöglicht eine breitere Abdeckung und erreicht auch abgelegene Gebiete. Die kurzfristigen Verbesserungen sind spürbar, insbesondere in schwer zugänglichen Regionen. Die Bevölkerung ist dankbar für den Zugang zu mobilen Gesundheitsdiensten, und die Flexibilität ermöglicht eine effiziente Versorgung. Trotz der begrenzten Mittel wird eine grössere Anzahl von Menschen erreicht und unterstützt, was sich positiv auf die Gesundheit und Lebensqualität auswirkt.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 10,
        health: 10
      }
    }
  },
  {
    title: "Urbanisierung",
    description:"In Ton Dong musst du entscheiden, wie die Urbanisierung gestaltet wird, um den Bedarf an Wohnraum zu decken und gleichzeitig die Umweltauswirkungen zu minimieren.",
    image: '10.jpg',
    option1: {
      description: "Ich fördere vertikales Bauen, um den begrenzten Platz effizient zu nutzen. Dies könnte zu einer schnellen Bereitstellung von Wohnraum führen, aber die Ressourcen für Infrastruktur und Energie sind hoch.",
      explanation: "Die Förderung von vertikalem Bauen und Hochhäusern ermöglicht eine schnelle Bereitstellung von Wohnraum und effiziente Nutzung des begrenzten Platzes in Ton Dong. Die städtische Landschaft wird rasch transformiert, und die wachsende Bevölkerung findet in den Hochhäusern Unterkunft. Die schnelle Urbanisierung trägt zur wirtschaftlichen Entwicklung bei, schafft Arbeitsplätze und befriedigt den dringenden Bedarf an Wohnraum. Allerdings sind die Ressourcen für Infrastruktur und Energieverbrauch hoch, was langfristig Herausforderungen mit sich bringen könnte.",
      consequences: {
        economy: -10,
        environment: 10,
        society: 10,
        health: 0
      }
    },
    option2: {
      description:"Ich setze auf nachhaltige Stadtentwicklung mit grünen Stadtteilen, Parks und ökologischen Bauvorschriften. Dies könnte die Lebensqualität verbessern, erfordert jedoch mehr Zeit und Investitionen.",
      explanation: "Die Entscheidung für nachhaltige Stadtentwicklung erfordert mehr Zeit und Investitionen, um grüne Stadtteile, Parks und ökologische Bauvorschriften umzusetzen. Obwohl dies die Lebensqualität verbessert und langfristige ökologische Vorteile bringt, wird die Bereitstellung von Wohnraum langsamer sein. Die Urbanisierung könnte nicht mit der steigenden Bevölkerung mithalten, was möglicherweise zu sozialen Herausforderungen führt. Dennoch wird die Stadt langfristig von einer umweltfreundlichen Infrastruktur profitieren.",
      consequences: {
        economy: 0,
        environment: 10,
        society: -10,
        health: 0
      }
    }
  },
  {
    title: "Förderung der Landwirtschaft",
    description:"In einer ländlichen Region in Ähmopien steht die Bevölkerung vor Ernährungssicherheitsproblemen. Du musst entscheiden, wie die Landwirtschaft gefördert werden kann, um die Ernährung der Bevölkerung zu sichern.",
    image: '24.jpg',
    option1: {
      description: "Ich unterstütze den Einsatz von gentechnisch veränderten Pflanzen, um die Ernteerträge zu steigern und die Nahrungssicherheit kurzfristig zu verbessern. Dies birgt jedoch Risiken für die Umwelt und die traditionelle Landwirtschaft.",
      explanation: "Trotz der kurzfristigen Verbesserung der Nahrungssicherheit durch gentechnisch veränderte Pflanzen treten langfristige Umweltprobleme auf. Der Einsatz dieser Pflanzen birgt Risiken für die natürliche Umwelt und führt zu einem Verlust traditioneller Anbaumethoden. Die ökologische Vielfalt könnte gefährdet sein, was langfristig zu weiteren Problemen führen könnte.",
      consequences: {
        economy: 0,
        environment: -10,
        society: 0,
        health: 10
      }
    },
    option2: {
      description:"Ich fördere den Einsatz traditioneller Anbaumethoden, unterstütze lokale Bauerngenossenschaften und setze auf nachhaltige landwirtschaftliche Praktiken. Dies könnte langfristig zu einer stabilen und nachhaltigen Ernährungssicherheit führen.",
      explanation: "Die Förderung traditioneller Anbaumethoden und nachhaltiger landwirtschaftlicher Praktiken trägt langfristig zu einer stabilen Ernährungssicherheit bei. Lokale Bauerngenossenschaften werden gestärkt, was zu einer nachhaltigen wirtschaftlichen Entwicklung führt. Die Umwelt wird geschont, und die ländliche Gemeinschaft kann auf eine langfristige, nachhaltige Nahrungssicherheit hoffen.",
      consequences: {
        economy: 0,
        environment: 10,
        society: 10,
        health: 0
      }
    }
  },
  {
    title: "Fischsterben",
    description:"In Dorwegen herrscht eine Überfischung und gleichzeitiges Fischsterben.",
    image: '26.jpg',
    option1: {
      description: "Ich erlasse strikte Fangquoten und schaffe Schutzgebiete, um die Fischbestände zu erhalten.",
      explanation: "Die Einführung von Fangquoten und Schutzgebieten in Dorwegen führt zu langfristiger Erholung der Fischbestände und nachhaltiger Fischerei. Obwohl kurzfristige wirtschaftliche Einbussen möglich sind, profitieren Fischer langfristig von stabilen Ressourcen und einer gesunden Umwelt.",
      consequences: {
        economy: -10,
        environment: 10,
        society: 0,
        health: 0
      }
    },
    option2: {
      description:"Ich fördere den Ausbau der Fischereiindustrie, um wirtschaftliches Wachstum zu fördern.",
      explanation: "Die Förderung des Fischereiausbaus bringt kurzfristige Gewinne, birgt jedoch das Risiko von Überfischung und ökologischen Schäden. Dies könnte zu langfristigen Problemen für Fischer führen und die Umwelt nachhaltig beeinträchtigen.",
      consequences: {
        economy: 20,
        environment: -20,
        society: 5,
        health: 0
      }
    }
  },
  {
    title: "Fischsterben",
    description:"In Dorwegen herrscht eine Überfischung und gleichzeitiges Fischsterben.",
    image: '26.jpg',
    option1: {
      description: "Ich erlasse strikte Fangquoten und schaffe Schutzgebiete, um die Fischbestände zu erhalten.",
      explanation: "Die Einführung von Fangquoten und Schutzgebieten in Dorwegen führt zu langfristiger Erholung der Fischbestände und nachhaltiger Fischerei. Obwohl kurzfristige wirtschaftliche Einbussen möglich sind, profitieren Fischer langfristig von stabilen Ressourcen und einer gesunden Umwelt.",
      consequences: {
        economy: -10,
        environment: 10,
        society: 0,
        health: 0
      }
    },
    option2: {
      description:"Ich fördere den Ausbau der Fischereiindustrie, um wirtschaftliches Wachstum zu fördern.",
      explanation: "Die Förderung des Fischereiausbaus bringt kurzfristige Gewinne, birgt jedoch das Risiko von Überfischung und ökologischen Schäden. Dies könnte zu langfristigen Problemen für Fischer führen und die Umwelt nachhaltig beeinträchtigen.",
      consequences: {
        economy: 20,
        environment: -20,
        society: 5,
        health: 0
      }
    }
  },
  {
    title: "Elektroschrott",
    description:"In einem aufstrebenden Technologiestaat in Müdkorea stehst du vor der Herausforderung, den steigenden Elektronikschrott zu bewältigen und gleichzeitig die Umweltauswirkungen zu minimieren.",
    image: '17.jpg',
    option1: {
      description: "Ich fördere das Recycling von Elektronikgeräten und setze strenge Umweltauflagen für Elektronikhersteller. Dies könnte zu einer Reduzierung von Elektronikschrott und umweltfreundlicheren Produkten führen, erfordert jedoch internationale Zusammenarbeit.",
      explanation: "Die Förderung des Elektronik-Recyclings und die Einführung strenger Umweltauflagen für Elektronikhersteller in Müdkorea führen zu einer Reduzierung von Elektronikschrott und umweltfreundlicheren Produkten. Diese Massnahmen erfordern internationale Zusammenarbeit und tragen langfristig zu einer nachhaltigen Elektronikindustrie bei.",
      consequences: {
        economy: 10,
        environment: 10,
        society: 0,
        health: 0
      }
    },
    option2: {
      description:"Ich ermutige zu regelmässigem Upgrade und Austausch von Elektronikgeräten, um wirtschaftliches Wachstum zu fördern. Dies könnte kurzfristig zu höheren Verkaufszahlen führen, birgt jedoch das Risiko von Umweltauswirkungen.",
      explanation: "Die Förderung von regelmässigem Upgrade und Austausch von Elektronikgeräten führt kurzfristig zu höheren Verkaufszahlen und wirtschaftlichem Wachstum. Jedoch birgt dies das Risiko von verstärktem Elektronikschrott und negativen Umweltauswirkungen, da die Lebensdauer der Geräte verkürzt wird.",
      consequences: {
        economy: 20,
        environment: -20,
        society: 0,
        health: 0
      }
    }
  },
  {
    title: "Rassismus im Gesundheitswesen",
    description: "In Sheden stehst du vor der beunruhigenden Realität, dass schwarze Bürgerinnen und Bürger nicht den gleichen medizinischen Standard im Krankenhaus erhalten wie ihre weissen Mitbürgerinnen und Mitbürger. ",
    image: '5.jpg',
    option1: {
      description: "Ich sensibilisiere medizinisches Personal, um Vorurteile abzubauen und die kulturelle Kompetenz zu stärken. Dabei werden klare Richtlinien eingeführt, um einen einheitlichen medizinischen Standard für alle Patienten sicherzustellen",
      explanation: "Obwohl die Sensibilisierungskampagne gestartet wurde, bleibt der Einfluss begrenzt. Die Schulungen zeigen nur geringe Fortschritte, und trotz klaren Richtlinien und Überwachungsmechanismen gibt es weiterhin Unterschiede in der medizinischen Behandlung. Die rassistische Ungleichheit im Gesundheitswesen von Sheden bleibt bestehen, und die erhofften Veränderungen treten nicht in dem Masse ein, wie erhofft.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -10,
        health: -5
      }
    },
    option2: {
      description: "Ich fördere Vielfalt im Gesundheitswesen durch strukturelle Veränderungen. Unabhängige Überprüfungen der medizinischen Standards sollen Diskriminierung bei der Behandlung verhindern. Das Ziel ist eine langfristige Verbesserung von Gleichstellung und Vielfalt im Gesundheitssektor.",
      explanation: "Die strukturellen Veränderungen und die Förderung von Diversität im Gesundheitswesen von Sheden zeigen erhebliche positive Auswirkungen. Eine vielfältigere Belegschaft entsteht, und die unabhängigen Überprüfungen der medizinischen Standards gewährleisten eine gleichberechtigte Behandlung für alle Patientinnen und Patienten, unabhängig von ihrer Hautfarbe. Diese Entscheidung legt einen soliden Grundstein für anhaltende Gleichstellung und Vielfalt im Gesundheitssektor von Sheden.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 10,
        health: 10
      }
    }
  },
  {
    title: "Schutz des Eukalyptuswaldes",
    description: "In Margentinien schreitet die rücksichtslose Abholzung eines bedeutenden Eukalyptuswaldes rasant voran. Die indigenen Völker verlieren ihren Lebensraum, was schwerwiegende Auswirkungen auf ihre traditionelle Lebensweise hat. Du musst Massnahmen ergreifen, um den Landraub und die Verletzung der indigenen Rechte zu stoppen.",
    image: '2.jpg',
    option1: {
      description: "Ich verbiete sofort die Abholzung des Eukalyptuswaldes und schütze die indigenen Völker. Mit geschützten Gebieten und alternativen Einkommensquellen erhalte ich den sozialen Zusammenhalt und bewahre die Umweltintegrität des Waldes.",
      explanation: "Die Entscheidung für ein sofortiges Abholzungsverbot im Eukalyptuswald zeigt schnelle Erfolge. Die indigenen Völker behalten ihren Lebensraum, geschützte Gebiete fördern ihre Lebensweise, und alternative Einkommensquellen stärken den sozialen Zusammenhalt. Die Umweltintegrität des Waldes bleibt erhalten, und langfristig trägt dies zu einer nachhaltigen Entwicklung bei.",
      consequences: {
        economy: 0,
        environment: 10,
        society: 10,
        health: 0
      }
    },
    option2: {
      description: "Ich erlaube eine kontrollierte Abholzung unter strengen Umweltauflagen, um wirtschaftliche Entwicklung zu fördern. Ein Teil der Einnahmen wird für Kompensationsmassnahmen zur Unterstützung der indigenen Völker verwendet. Ich plane alternative Lebensräume und setze Massnahmen um, um die indigene Gemeinschaft bei Veränderungen zu helfen und die Umweltauswirkungen zu minimieren.",  
      explanation: "Die kontrollierte Abholzung unter strengen Umweltauflagen ermöglicht wirtschaftliche Entwicklungen, während ein Teil der Einnahmen die indigenen Völker unterstützt. Kompensationsmassnahmen helfen bei der Bewältigung der Veränderungen, und die Planung alternativer Lebensräume mildert die Auswirkungen auf die indigene Gemeinschaft.",
      consequences: {
        economy: 10,
        environment: -5,
        society: 0,
        health: 0
      }
    }
  },
  {
    title: "Ölunfall",
    description: "Ein Frachtschiff im Pazifik hat einen schweren Unfall, bei dem viel Öl ins Meer gelangte. Die Strände sind bereits verschmutzt, und die Auswirkungen auf Fische, Meeressäuger und Vögel sind katastrophal. Die Meeresbiodiversität ist akut gefährdet.",
    image: '30.jpg',
    option1: {
      description: "Um die Auswirkungen der Ölkatastrophe zu minimieren, mobilisiere ich sofort Teams zur Bekämpfung des ausgelaufenen Öls. Gleichzeitig koordiniere ich Rettungseinsätze, um bedrohte Tiere aus den verschmutzten Gewässern zu bergen. Dabei setze ich Technologien wie Ölsperren, Absaugsysteme und Reinigungsschiffe ein, um die Ausbreitung des Öls zu stoppen und die geschädigte Tierwelt zu retten.",
      explanation: "Sofortige Mobilisierung und fortschrittliche Technologien führen zu beeindruckenden Erfolgen bei der Beseitigung des ausgelaufenen Öls. Rettungseinsätze retten zahlreiche bedrohte Tiere, während die umgehenden Massnahmen einen dramatischen Verlust an Meeresbiodiversität verhindern und die schnelle Erholung der Umwelt fördern. Die Effizienz erfordert jedoch erhebliche finanzielle Ressourcen für den Erhalt der Technologien und Rettungsmassnahmen.",
      consequences: {
        economy: -10,
        environment: -5,
        society: 0,
        health: -5
      }
    },
    option2: {
      description: "Aufgrund der Schwierigkeiten, das Öl schnell und effektiv zu bekämpfen, entscheide ich mich dafür, die gefährdeten Küstenbereiche zu evakuieren. Gleichzeitig richte ich temporäre Schutzgebiete für bedrohte Meeresbewohner ein, um ihre Migration in saubere Gewässer zu fördern. So erhalten die Tiere vorübergehend geschützte Lebensräume.",
      explanation: "Aufgrund der verzögerten Reaktion und Schwierigkeiten, das Öl schnell und effektiv zu bekämpfen, hat sich die Verschmutzung weiter ausgebreitet. Die Strände sind jetzt stärker von Öl bedeckt, und die Auswirkungen auf Fische, Meeressäuger und Seevögel sind noch verheerender. Die Evakuierung der gefährdeten Küstenbereiche und die Einrichtung temporärer Schutzgebiete erfolgt zwar, aber das Öl hat bereits einen erheblichen Schaden verursacht.",
      consequences: {
        economy: -5,
        environment: -20,
        society: -10,
        health: -10
      }
    }
  },
  {
    title: "Derben vs. Grosovaren",
    description: "In Derbien sind Ausschreitungen zwischen Derben und Grosovaren ausgebrochen. Die Spannungen zwischen den beiden Gruppen haben sich verschärft, und die Situation eskaliert.",
    image: '19.png',
    option1: {
      description: "Ich entscheide mich für einen Dialog zwischen den Derben und Grosovaren, um friedliche Lösungen zu finden. Vermittlungsbemühungen und Gespräche werden intensiviert, um zu einer friedlichen Koexistenz beizutragen.",
      explanation: "Die Entscheidung für einen Dialog zwischen den Derben und Grosovaren zeigt positive Auswirkungen auf die langfristige gesellschaftliche Stabilität. Durch Vermittlungsbemühungen und verstärkte Gespräche wird versucht, friedliche Lösungen zu finden. Diese Massnahmen tragen dazu bei, die Spannungen zu reduzieren und eine friedliche Koexistenz zwischen den Gruppen zu fördern. Die Aussicht auf langfristige Harmonie und Zusammenarbeit steigt, obwohl es Zeit und Geduld erfordert.",
      consequences: {
        economy: -10,
        environment: -5,
        society: 0,
        health: -5
      }
    },
    option2: {
      description: "Aufgrund der Schwierigkeiten, das Öl schnell und effektiv zu bekämpfen, entscheide ich mich dafür, die gefährdeten Küstenbereiche zu evakuieren. Gleichzeitig richte ich temporäre Schutzgebiete für bedrohte Meeresbewohner ein, um ihre Migration in saubere Gewässer zu fördern. So erhalten die Tiere vorübergehend geschützte Lebensräume.",
      explanation: "Aufgrund der verzögerten Reaktion und Schwierigkeiten, das Öl schnell und effektiv zu bekämpfen, hat sich die Verschmutzung weiter ausgebreitet. Die Strände sind jetzt stärker von Öl bedeckt, und die Auswirkungen auf Fische, Meeressäuger und Seevögel sind noch verheerender. Die Evakuierung der gefährdeten Küstenbereiche und die Einrichtung temporärer Schutzgebiete erfolgt zwar, aber das Öl hat bereits einen erheblichen Schaden verursacht.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 10,
        health: 0
      }
    }
  },
  {
    title: "Derben vs. Grosovaren",
    description: "In Derbien sind Ausschreitungen zwischen Derben und Grosovaren ausgebrochen. Die Spannungen zwischen den beiden Gruppen haben sich verschärft, und die Situation eskaliert.",
    image: '19.png',
    option1: {
      description: "Ich entscheide mich für einen Dialog zwischen den Derben und Grosovaren, um friedliche Lösungen zu finden. Vermittlungsbemühungen und Gespräche werden intensiviert, um zu einer friedlichen Koexistenz beizutragen.",
      explanation: "Die Entscheidung für einen Dialog zwischen den Derben und Grosovaren zeigt positive Auswirkungen auf die langfristige gesellschaftliche Stabilität. Durch Vermittlungsbemühungen und verstärkte Gespräche wird versucht, friedliche Lösungen zu finden. Diese Massnahmen tragen dazu bei, die Spannungen zu reduzieren und eine friedliche Koexistenz zwischen den Gruppen zu fördern. Die Aussicht auf langfristige Harmonie und Zusammenarbeit steigt, obwohl es Zeit und Geduld erfordert.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -10,
        health: 0
      }
    },
    option2: {
      description: "Ich setze auf eine härtere Gangart und verstärkst die Sicherheitskräfte, um die Ausschreitungen zu unterdrücken. Dies könnte kurzfristig zu einer gewissen Stabilität führen, birgt jedoch das Risiko einer weiteren Eskalation und tieferen Spaltungen in der Gesellschaft.",
      explanation: "Die Entscheidung für eine härtere Gangart und verstärkte Sicherheitskräfte bringt kurzfristige Ruhe, da Ausschreitungen unterdrückt werden. Jedoch eskaliert die Lage weiter, führt zu massiven Unruhen und stösst auf starken Widerstand in der Bevölkerung. Proteste brechen aus, Spaltungen vertiefen sich, und ein Putsch verschärft die Situation, was zu einem ernsthaften Zusammenbruch der Gesellschaft führt. Das erhöhte Misstrauen und der Unmut hinterlassen langanhaltende Instabilität und Unsicherheit in Derbien.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -10,
        health: 0
      }
    }
  },
  {
    title: "LGTBQ+ Rechte ",
    description: "In Foland werden Mitglieder der LGBTQ+-Gemeinschaft, insbesondere Homosexuelle, zunehmend verfolgt und diskriminiert. Die Regierung steht vor der Herausforderung, wie sie mit dieser Menschenrechtsverletzung umgehen soll.",
    image: '21.jpg',
    option1: {
      description: "Ich setzte auf einen umfassenden gesetzgeberischen und gesellschaftlichen Wandel. Durch die Einführung von Gesetzen, die die Rechte von LGBTQ+-Personen schützen, und durch Sensibilisierungskampagnen versuche ich, die Akzeptanz und Gleichbehandlung zu fördern.",
      explanation: "In Foland wurden neue Gesetze eingeführt, um die Rechte der LGBTQ+-Gemeinschaft zu schützen. Durch Aufklärungskampagnen in der Gesellschaft wird die Akzeptanz und Gleichbehandlung gefördert. Diese Massnahmen haben bereits positive Veränderungen bewirkt und tragen dazu bei, dass die Gesellschaft in Foland langfristig toleranter und inklusiver wird.",
      consequences: {
        economy: 0,
        environment: 0,
        society: 20,
        health: 0
      }
    },
    option2: {
      description: "Ich verschärfe die Diskriminierung und führe restriktive Gesetze gegen Homosexualität ein.",
      explanation: "Die Entscheidung, gegen Homosexualität restriktive Gesetze einzuführen, bringt kurzfristig politische Ruhe. Aber es entstehen schwere Probleme: Menschenrechtsverletzungen und Unruhen im Land nehmen zu. Das Land wird isoliert, sein Ansehen sinkt, und die Grundrechte der Bürgerinnen und Bürger werden beeinträchtigt. Das stellt eine langfristige Belastung für die nationale und internationale Reputation dar.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -20,
        health: 0
      }
    }
  },
  {
    title: "Weltbevölkerung",
    description: "Die Weltbevölkerung wächst rasant und die Ressourcen werden knapper.",
    image: '5.jpg',
    option1: {
      description: "Ich führe eine strenge Geburtenkontrolle ein, um das Bevölkerungswachstum zu verlangsamen.",
      explanation: "Geburtenkontrolle führt kurzfristig zu einem Bevölkerungsrückgang, der den Druck auf die Ressourcen verringert. Es gibt jedoch ethische Bedenken und soziale Unruhen.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -20,
        health: 0
      }
    },
    option2: {
      description: "Ich investiere in Bildung und Gesundheit, um die Lebensqualität zu verbessern, in der Hoffnung, dass dadurch die Geburtenrate freiwillig sinkt.",
      explanation: "Investitionen in Bildung und Gesundheit führen langfristig zu einer informierten und gesunden Bevölkerung, die freiwillig weniger Kinder bekommt. Der positive Effekt für die Gesellschaft ist gross, aber es dauert Jahre, bis die Ergebnisse sichtbar werden.",
      consequences: {
        economy: 0,
        environment: 0,
        society: -10,
        health: 5
      }
    }
  },
  {
    title: "Weltweites Altern",
    description: "Die Weltbevölkerung wird immer älter und es gibt neue Herausforderungen im Gesundheitswesen und im Arbeitsmarkt.",
    image: '27.jpg',
    option1: {
      description: "Menschen über 80 Jahren werden zum assistierten Tod (Exit) begleitet. So soll der Überalterung der Bevölkerung entgegengewirkt werden.",
      explanation: "Die Entscheidung, Menschen über 80 Jahren zum assistierten Tod zu begleiten, drastisch reduziert die Überalterung, entlastet kurzfristig Gesundheitswesen und Arbeitsmarkt. Jedoch birgt sie ethische Bedenken, wie den Verlust von Lebenserfahrung, mögliche Stigmatisierung und die Gefahr einer Interpretation als Menschenrechtsverletzung.",
      consequences: {
        economy: 0,
        environment: 5,
        society: -20,
        health: 5
      }
    },
    option2: {
      description: "Ich setze flexible Arbeitsmodelle und Bildungsprogramme ein, um ältere Menschen länger im Arbeitsmarkt zu halten und ihre aktive Teilnahme in der Gesellschaft zu fördern.",
      explanation: "Flexible Arbeitsmodelle und Weiterbildungsprogramme ermöglichen es älteren Menschen, länger im Erwerbsleben zu bleiben, was sich positiv auf die Wirtschaft und auf die Gesellschaft auswirkt, da die jüngere Bevölkerung Finanziell entlastet werden.",
      consequences: {
        economy: 20,
        environment: 0,
        society: 5,
        health: 0
      }
    }
  },
  {
    title: "Walfang",
    description: "Tschinesische Fischer wurden auf hoher See beim Walfang erwischt. Es wurde enthüllt, dass sie ein Untergrundnetzwerk für den Walfang etabliert und beträchtliche Gewinne daraus erzielt haben. Seit ihrem Auftreten hat der Walfang um drastisch zugenommen.",
    image: '25.jpg',
    option1: {
      description: "Ich erlasse ein weltweites Walfangverbot und setzte mich für den Schutz aller Walarten ein.",
      explanation: "Ein weltweites Verbot des kommerziellen Walfangs trägt zum Schutz gefährdeter Arten bei und sichert langfristig das Gleichgewicht der Meere. Es kann jedoch wirtschaftliche Auswirkungen auf Gemeinschaften haben, die traditionell vom Walfang abhängig sind.",
      consequences: {
        economy: -5,
        environment: 20,
        society: -10,
        health: 0
      }
    },
    option2: {
      description: "Ich unterstütze kontrollierten Walfang für wissenschaftliche Forschungszwecke und traditionelle Gemeinschaften, die auf den Walfang angewiesen sind. Dabei werden strenge Schutzmassnahmen für gefährdete Arten eingeführt.",
      explanation: "Durch die Unterstützung des kontrollierten Walfangs für wissenschaftliche Zwecke und traditionelle Gemeinschaften können lokale Bedürfnisse berücksichtigt werden. Es besteht jedoch die Gefahr, dass Quoten nicht eingehalten werden und der Walfang zu einer übermässigen Belastung bestimmter Arten führt",
      consequences: {
        economy: 10,
        environment: -20,
        society: 5,
        health: 0
      }
    }
  },
  {
    title: "Heuschnupfen",
    description: "Steigende Temperaturen aufgrund des Klimawandels führen zu einer deutlichen Zunahme von Pollen in der Luft, was weltweit zu einem starken Anstieg von Heuschnupfenfällen führt. Die Symptome sind so stark, dass es aufgrund der Schwellungen in der Nase und im Rachen sogar zu Todesfällen kommt.",
    image: '29.png',
    option1: {
      description:"Ich baue Krankenhäuser aus, stärke die Forschung im Bereich der Allergien aus und sorge für eine Versorgung von betroffenen Menschen.",
      explanation: "Durch den Ausbau von Krankenhäusern und die Stärkung der Allergieforschung verbesserst du die Gesundheitsversorgung und die Lebensqualität der Menschen. Die gesteigerte Forschung im Bereich Allergien ermöglicht eine bessere Diagnose und Behandlung von allergischen Erkrankungen, was die Gesundheit der betroffenen Bevölkerung positiv beeinflusst.",
      consequences: {
        economy: -5,
        environment: -20,
        society: 0,
        health: 10
      }
    },
    option2: {
      description: "Ich fokussiere die Ressourcen auf erneuerbarer Energien um den Klimawandel einzudämmen und die Treibhausgase zu reduzieren und so hoffentlich die Pollenanzahl abzuschwächen.",
      explanation: "Die Fokussierung auf erneuerbare Energien ist ein wichtiger Schritt zur Eindämmung des Klimawandels und zur Reduzierung von Treibhausgasen. Dies trägt dazu bei, Umweltbelastungen zu minimieren und langfristig die Lebensbedingungen auf der Erde zu verbessern. Allerdings wirken solche Massnahmen erst langfristig. In der Zwischenzeit sterben viele Menschen.",
      consequences: {
        economy: 0,
        environment: 10,
        society: 0,
        health: -20
      }
    }
  },
  {
    title: "Flüchtlinge",
    description: "Es werden mehrere Flüchtlinge auf einem kaputten Schiff and der Küste von Lorkai von der Küstenpolizei gefunden. Unter den Geflüchteten sind Familien mit Kindern, welche schon halbwegs verhungert und verfroren sind.",
    image: '28.jpg',
    option1: {
      description: "Ich verplichte das Land Lorkai trotz Einwände alle Flüchtlinge und ihnen Schutz und Geborgenheit zu bieten.",
      explanation: "Die Entscheidung, alle Flüchtlinge aufzunehmen, zeigt Mitmenschlichkeit und solidarisches Handeln. Dies würde den Geflüchteten die dringend benötigte Hilfe und Zuflucht bieten. Allerdings könnten mögliche Einwände darauf hinweisen, dass dies Ressourcen erfordert, die anderswo benötigt werden könnten. Die Umsetzung erfordert die Bereitstellung von Unterkünften, Nahrungsmitteln, medizinischer Versorgung und Bildung für die Flüchtlinge, was finanzielle und soziale Herausforderungen mit sich bringt.",
      consequences: {
        economy: -10,
        environment: 0,
        society: -10,
        health: 0
      }
    },
    option2: {
      description: "Ich schicke die Flüchtlinge wieder auf ihren Weg nach Hause, da die Ressourcen für die Aufnahme als zu kostenintensiv betrachtet werden und anderweitig eingesetzt werden könnten.",
      explanation: "Die Entscheidung, die Flüchtlinge abzuweisen, könnte auf pragmatischen Überlegungen basieren, bei denen die begrenzten Ressourcen für die eigene Bevölkerung als Priorität betrachtet werden. Dies könnte jedoch ethische Bedenken und internationale Kritik nach sich ziehen. Die Umsetzung erfordert möglicherweise verstärkte Kontrollen an den Grenzen und die Zusammenarbeit mit anderen Ländern, um eine humane Lösung für die Flüchtlinge zu finden.",
      consequences: {
        economy: 10,
        environment: 0,
        society: -20,
        health: 0
      }
    }
  },
]