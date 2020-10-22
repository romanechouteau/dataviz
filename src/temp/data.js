const json = require('./data.json')
const { isString, upperFirst, startCase, toLower, isEmpty, compact, split, capitalize, countBy, forEach, map, orderBy, lowerCase, sortBy } = require('lodash')
const fs = require('fs')

const data = json['Réponses au formulaire 1']

const total = data.length

const categories = {
  birth: 'identite',
  animal: 'autre',
  serie: 'cine',
  film: 'cine',
  language: 'identite',
  food: 'autre',
  social: 'reseaux',
  video: 'streaming',
  music: 'streaming',
  computer: 'techno',
  city: 'identite',
  emoji: 'reseaux',
  games: 'techno',
  color: 'autre'
}

const newData = {
  birth: [],
  animal: [],
  serie: [],
  film: [],
  language: [],
  food: [],
  social: [],
  video: [],
  music: [],
  computer: [],
  city: [],
  emoji: [],
  games: [],
  color: []
}

const countData = {
  birth: [],
  animal: [],
  serie: [],
  film: [],
  language: [],
  food: [],
  social: [],
  video: [],
  music: [],
  computer: [],
  city: [],
  emoji: [],
  games: [],
  color: []
}

const statData = {
  identite: {
    name: 'Identité',
    stats: {
      birth: {
        question: 'Année de naissance',
        phrase: 'Il est né en',
        values: []
      },
      language: {
        question: 'Langues',
        phrase: 'Il sait parler',
        values: []
      },
      city: {
        question: 'Ville d\'origine',
        phrase: 'Sa ville d\'origine est',
        values: []
      }
    }
  },
  autre: {
    name: 'Autre',
    stats: {
      animal: {
        question: 'Animal de compagnie',
        phrase: 'Son animal de compagnie préféré est',
        values: []
      },
      food: {
        question: 'Commande de nourriture',
        phrase: 'Il commande de la nourriture',
        values: []
      },
      color: {
        question: 'Couleur',
        phrase: 'Sa couleur est',
        values: []
      }
    }
  },
  cine: {
    name: 'Cinéma & séries',
    stats: {
      serie: {
        question: 'Série',
        phrase: 'Sa série préférée est',
        values: []
      },
      film: {
        question: 'Genre cinématographique',
        phrase: 'Le genre cinématographique qu\'il préfère est',
        values: []
      }
    }
  },
  streaming: {
    name: 'Streaming',
    stats: {
      video: {
        question: 'Vidéos',
        phrase: 'La plateforme de streaming vidéo qu\'il utilise le plus est',
        values: []
      },
      music: {
        question: 'Musique',
        phrase: 'Sa plateforme de streaming de musique préférée est',
        values: []
      }
    }
  },
  techno: {
    name: 'Technologie',
    stats: {
      computer: {
        question: 'Marque d\'ordinateur',
        phrase: 'Sa marque d’ordinateur fétiche est',
        values: []
      },
      games: {
        question: 'Console de jeux vidéos',
        phrase: 'Sa console de jeux vidéo préférée est',
        values: []
      }
    }
  },
  reseaux: {
    name: 'Relations',
    stats: {
      social: {
        question: 'Réseaux sociaux',
        phrase: 'Le réseau social qu’il utilise le plus est',
        values: []
      },
      emoji: {
        question: 'Emojis',
        phrase: 'Son emoji préféré est',
        values: []
      }
    }
  }
}

const properties = ['birth', 'animal', 'serie', 'film', 'language', 'food', 'social', 'video', 'music', 'computer', 'city', 'emoji', 'games', 'color']

data.forEach((value, id) => {
  let serie = value['Quelle est votre série préférée ?'] || null
  if (/GOT/gi.test(serie)) {
    serie = 'Game of Thrones'
  } else if (/Sherlock Holmes/gi.test(serie)) {
    serie = 'Sherlock'
  } else if (/\s/g.test(serie)) {
    serie = serie.trim()
    const tempserie = split(serie, /\s/g)
    serie = tempserie.map((val) => {
      if (/\bof\b/gi.test(val) || /\band\b/gi.test(val)) {
        return toLower(val)
      } else {
        return upperFirst(val)
      }
    }).join(' ')
  }

  let music = value['Quelle plateforme de streaming de musique utilisez-vous le plus ?'] || null
  if (/Spot/gi.test(music)) {
    music = 'Spotify'
  }

  let computer = value['Quelle est la marque de votre ordinateur ?'] || null
  if (/fait main/gi.test(computer)) {
    computer = 'DIY'
  } else if (/Mac/gi.test(computer)) {
    computer = 'Apple'
  }

  let emoji = value['Quel est votre émoji préféré ?'] || null
  if (/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(emoji)) {
    emoji = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.exec(emoji)[0]
  } else if (/soleil/gi.test(emoji)) {
    emoji = '☀️'
  } else if (/rangées de dents/gi.test(emoji)) {
    emoji = '😁'
  }

  let language = value['Quelles langues sais-tu parler ?'] || null
  let templanguage = []
  language = language.replace('Francais', 'Français').replace(/\(et anglais très basique\)/gi, 'et Anglais').replace(/Un poquito espanol/gi, 'Espagnol').replace(/La seule qui vaille le coup/gi, 'Français').replace(/Le français de France/gi, 'Français')
  if (/\d+/g.test(language)) {
  } else if (/,/g.test(language) && /\bet\b/g.test(language)) {
    templanguage = split(language, 'et').join(',').split(',')
  } else if (/,/g.test(language)) {
    templanguage = split(language, ',')
  } else if (/\//g.test(language)) {
    templanguage = split(language, '/')
  } else if (/\s-\s/g.test(language)) {
    templanguage = split(language, /\s-\s/g)
  } else if (/et/gi.test(language)) {
    templanguage = split(language, /et/gi)
  } else if (/\s/gi.test(language)) {
    templanguage = split(language, /\s/gi)
  } else {
    templanguage = [language]
  }
  language = isEmpty(templanguage) ? [] : compact(templanguage.map(val => {
    val = val.replace(/(espagnole|\bSi\b)/gi, 'Espagnol').replace(/\b(FR|Oui)\b/gi, 'Français').replace(/(\b(ENG|angl|Yes)\b)/gi, 'Anglais').replace('XD', '')
    return capitalize(val.trim())
  }))

  let city = value['Quelle est votre ville d’origine ?'] || null
  city = /^[A-Z\s-]+$/g.test(city.trim()) ? startCase(toLower(city)) : city
  if (/Marseille/gi.test(city)) {
    city = 'Marseille'
  } else if (/Sartrouville/gi.test(city)) {
    city = 'Sartrouville'
  } else if (/\s\/\s/gi.test(city)) {
    city = split(city, /\s\/\s/g)[0]
  }

  const values = {
    birth: /\d{4}/g.test(value['Quelle est votre année de naissance ?']) ? /\d{4}/g.exec(value['Quelle est votre année de naissance ?'])[0] : null,
    animal: value['Quel est votre animal de compagnie préféré ?'] || null,
    serie,
    film: value['Quel est votre genre de film préféré?'] || null,
    language,
    food: value['Combien de fois commande-tu à manger par semaine ?'] || null,
    social: value['Quel réseau social utilisez-vous le plus?'] || null,
    video: value['Quelle plateforme de streaming vidéo utilisez-vous le plus ?'] || null,
    music,
    computer,
    city,
    emoji,
    games: value['Quelle est votre console de jeux vidéos préférée ?'] || null,
    color: value['Quelle est votre couleur préférée ?'] || null
  }
  properties.forEach((val) => {
    if (/aucun/gi.test(values[val])) {
      values[val] = null
    } else if (isString(values[val])) {
      values[val] = upperFirst(values[val].trim())
    }
    newData[val].push({ value: values[val], id })
  })
})

forEach(newData.language, (entry, i) => {
  newData.language[i].value = sortBy(entry.value)
})

properties.forEach(val => {
  countData[val] = countBy(newData[val], 'value')
})

forEach(countData, (questions, id) => {
  statData[categories[id]].stats[id].values = orderBy(map(questions, (count, answer) => {
    let display
    if (answer === null) {
      display = '/'
    } else if (id === 'birth' || id === 'city' || id === 'serie' || id === 'film' || id === 'computer' || id === 'social' || id === 'emoji' || id === 'music' || id === 'video') {
      display = answer
    } else if (id === 'animal') {
      if (answer !== 'Loutre' && answer !== 'Chèvre' && answer !== 'Vanina') {
        display = 'le ' + lowerCase(answer)
      } else {
        display = 'la ' + lowerCase(answer)
      }
    } else if (id === 'language') {
      const temp = answer.split(',')
      display = temp[0]
      for (let i = 1; i < temp.length; i++) {
        display += i < temp.length - 1 ? ', ' + temp[i] : ' et ' + temp[i]
      }
    } else if (id === 'food') {
      if (answer !== 'Jamais') {
        display = answer + ' par semaine'
      } else {
        display = answer
      }
    } else if (id === 'games') {
      if (answer !== 'PC') {
        display = 'la ' + answer
      } else {
        display = 'le ' + answer
      }
    } else if (id === 'color') {
      display = 'le ' + lowerCase(answer)
    }
    return { name: answer, value: count / total * 100, display: display }
  }), 'value', 'desc')
})

fs.writeFile('./src/assets/data.json', JSON.stringify(statData), (err) => {
  if (err) throw err
  console.log('Data written to file')
})
