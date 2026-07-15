/*
 * Curriculum avancé de CodeQuest Academy.
 * Ce fichier complète le noyau historique sans le modifier : 15 leçons HTML
 * et 15 leçons PHP, soit 30 leçons par langage après fusion du catalogue.
 */
window.CODEQUEST_ADVANCED_LESSONS = [
  {
    id: 'html-16-textarea', language: 'html', title: 'Recueillir un message', subtitle: 'Ajoutez une zone de texte multiligne.',
    explanation: ['La balise <code>&lt;textarea&gt;</code> permet de saisir plusieurs lignes.', 'Les attributs <code>name</code> et <code>rows</code> décrivent la donnée et la hauteur initiale.'],
    mission: 'Créez une zone de texte nommée bio avec 4 lignes visibles.',
    requirements: ['Utiliser <code>&lt;textarea&gt;</code>', 'Ajouter <code>name="bio"</code>', 'Définir <code>rows="4"</code>'],
    tip: 'Le contenu initial se place entre textarea et /textarea.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <form>\n      <!-- Ajoutez la biographie -->\n    </form>\n  </body>\n</html>`,
    rules: [
      { regex: /<textarea\b(?=[^>]*name\s*=\s*["']bio["'])(?=[^>]*rows\s*=\s*["']4["'])[^>]*>[\s\S]*<\/textarea>/i, hint: 'Ajoutez textarea avec name="bio" et rows="4".' },
      { regex: /<form\b[^>]*>[\s\S]*<textarea[\s\S]*<\/textarea>[\s\S]*<\/form>/i, hint: 'Placez la zone de texte dans le formulaire.' }
    ]
  },
  {
    id: 'html-17-select', language: 'html', title: 'Proposer un choix', subtitle: 'Construisez une liste déroulante.',
    explanation: ['<code>&lt;select&gt;</code> regroupe des choix représentés par des balises <code>&lt;option&gt;</code>.', 'La valeur envoyée vient de l’attribut <code>value</code>.'],
    mission: 'Créez un select nommé langage proposant HTML et PHP.',
    requirements: ['Créer <code>&lt;select name="langage"&gt;</code>', 'Ajouter une option HTML', 'Ajouter une option PHP'],
    tip: 'Chaque option possède une valeur et un texte visible.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <form>\n      <!-- Choix du langage -->\n    </form>\n  </body>\n</html>`,
    assistTexts: ['HTML', 'PHP'],
    rules: [
      { regex: /<select\b[^>]*name\s*=\s*["']langage["'][^>]*>[\s\S]*<\/select>/i, hint: 'Créez select avec name="langage".' },
      { regex: /<option\b[^>]*value\s*=\s*["']html["'][^>]*>\s*HTML\s*<\/option>[\s\S]*<option\b[^>]*value\s*=\s*["']php["'][^>]*>\s*PHP\s*<\/option>/i, hint: 'Ajoutez les options HTML puis PHP.' }
    ]
  },
  {
    id: 'html-18-data', language: 'html', title: 'Stocker une donnée personnalisée', subtitle: 'Découvrez les attributs data-*.',
    explanation: ['Les attributs <code>data-*</code> stockent une information propre à l’interface.', 'JavaScript pourra ensuite la lire avec <code>dataset</code>.'],
    mission: 'Créez un article avec data-niveau="debutant" et le texte « Mission HTML ».',
    requirements: ['Utiliser <code>&lt;article&gt;</code>', 'Ajouter <code>data-niveau="debutant"</code>', 'Afficher Mission HTML'],
    tip: 'Un attribut data personnalisé commence toujours par data-.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Carte de mission -->\n  </body>\n</html>`,
    assistTexts: ['Mission HTML'],
    rules: [
      { regex: /<article\b[^>]*data-niveau\s*=\s*["']debutant["'][^>]*>/i, hint: 'Ajoutez data-niveau="debutant" à article.' },
      { regex: /<article\b[^>]*>\s*Mission HTML\s*<\/article>/i, hint: 'Placez « Mission HTML » dans article.' }
    ]
  },
  {
    id: 'html-19-audio', language: 'html', title: 'Intégrer un son', subtitle: 'Utilisez le lecteur audio natif.',
    explanation: ['<code>&lt;audio controls&gt;</code> affiche les commandes du lecteur.', '<code>&lt;source&gt;</code> précise le fichier et son type MIME.'],
    mission: 'Ajoutez un lecteur audio avec mission.mp3 au format audio/mpeg.',
    requirements: ['Créer <code>&lt;audio controls&gt;</code>', 'Ajouter <code>mission.mp3</code>', 'Préciser <code>audio/mpeg</code>'],
    tip: 'Placez source à l’intérieur de audio.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Lecteur audio -->\n  </body>\n</html>`,
    tabCompletions: ['mission.mp3', 'audio/mpeg'],
    rules: [
      { regex: /<audio\b[^>]*\bcontrols\b[^>]*>[\s\S]*<\/audio>/i, hint: 'Ajoutez un élément audio avec controls.' },
      { regex: /<source\b(?=[^>]*src\s*=\s*["']mission\.mp3["'])(?=[^>]*type\s*=\s*["']audio\/mpeg["'])[^>]*>/i, hint: 'Ajoutez source mission.mp3 de type audio/mpeg.' }
    ]
  },
  {
    id: 'html-20-iframe', language: 'html', title: 'Intégrer une autre page', subtitle: 'Donnez un titre accessible à une iframe.',
    explanation: ['Une <code>&lt;iframe&gt;</code> affiche une autre page dans la page actuelle.', 'Son attribut <code>title</code> explique son contenu aux technologies d’assistance.'],
    mission: 'Intégrez map.html avec le titre exact « Carte interactive ».',
    requirements: ['Utiliser <code>&lt;iframe&gt;</code>', 'Définir <code>src="map.html"</code>', 'Ajouter le titre accessible'],
    tip: 'Une iframe possède une balise fermante.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Carte intégrée -->\n  </body>\n</html>`,
    assistTexts: ['Carte interactive'], tabCompletions: ['map.html'],
    rules: [
      { regex: /<iframe\b(?=[^>]*src\s*=\s*["']map\.html["'])(?=[^>]*title\s*=\s*["']Carte interactive["'])[^>]*>[\s\S]*<\/iframe>/i, hint: 'Ajoutez iframe avec src et title.' },
      { regex: /title\s*=\s*["']Carte interactive["']/i, hint: 'Le titre doit être exactement « Carte interactive ».' }
    ]
  },
  {
    id: 'html-21-dialog', language: 'html', title: 'Créer une boîte de dialogue', subtitle: 'Utilisez le composant dialog natif.',
    explanation: ['<code>&lt;dialog&gt;</code> représente une fenêtre modale ou non modale.', 'Un formulaire avec <code>method="dialog"</code> peut la fermer sans JavaScript.'],
    mission: 'Créez dialog id="confirmation" avec un bouton « Fermer » dans un form method="dialog".',
    requirements: ['Créer le dialog confirmation', 'Utiliser <code>method="dialog"</code>', 'Ajouter le bouton Fermer'],
    tip: 'Placez form et button dans dialog.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Dialogue de confirmation -->\n  </body>\n</html>`,
    assistTexts: ['Fermer'],
    rules: [
      { regex: /<dialog\b[^>]*id\s*=\s*["']confirmation["'][^>]*>[\s\S]*<\/dialog>/i, hint: 'Créez dialog id="confirmation".' },
      { regex: /<form\b[^>]*method\s*=\s*["']dialog["'][^>]*>[\s\S]*<button\b[^>]*>\s*Fermer\s*<\/button>[\s\S]*<\/form>/i, hint: 'Ajoutez le formulaire dialog et son bouton Fermer.' }
    ]
  },
  {
    id: 'html-22-time', language: 'html', title: 'Décrire une date', subtitle: 'Rendez une date compréhensible par les machines.',
    explanation: ['<code>&lt;time&gt;</code> associe un texte humain à une valeur normalisée.', 'L’attribut <code>datetime</code> utilise généralement le format AAAA-MM-JJ.'],
    mission: 'Affichez « 15 juillet 2026 » avec datetime="2026-07-15".',
    requirements: ['Utiliser <code>&lt;time&gt;</code>', 'Ajouter la date normalisée', 'Afficher la date en français'],
    tip: 'La valeur normalisée va dans datetime, le texte lisible entre les balises.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <p>Prochaine session : <!-- date --></p>\n  </body>\n</html>`,
    assistTexts: ['15 juillet 2026'], tabCompletions: ['2026-07-15'],
    rules: [
      { regex: /<time\b[^>]*datetime\s*=\s*["']2026-07-15["'][^>]*>/i, hint: 'Ajoutez datetime="2026-07-15".' },
      { regex: /<time\b[^>]*>\s*15 juillet 2026\s*<\/time>/i, hint: 'Affichez « 15 juillet 2026 » dans time.' }
    ]
  },
  {
    id: 'html-23-address', language: 'html', title: 'Présenter un contact', subtitle: 'Utilisez la sémantique adaptée aux coordonnées.',
    explanation: ['<code>&lt;address&gt;</code> contient les coordonnées liées au document.', 'Un lien <code>mailto:</code> ouvre le logiciel de courrier de l’utilisateur.'],
    mission: 'Dans address, créez un lien vers contact@example.com affichant « Nous écrire ».',
    requirements: ['Créer <code>&lt;address&gt;</code>', 'Utiliser un lien mailto', 'Afficher Nous écrire'],
    tip: 'L’adresse mail suit directement mailto: dans href.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Contact -->\n  </body>\n</html>`,
    assistTexts: ['Nous écrire'], tabCompletions: ['mailto:contact@example.com'],
    rules: [
      { regex: /<address\b[^>]*>[\s\S]*<\/address>/i, hint: 'Ajoutez une balise address complète.' },
      { regex: /<address[\s\S]*<a\b[^>]*href\s*=\s*["']mailto:contact@example\.com["'][^>]*>\s*Nous écrire\s*<\/a>[\s\S]*<\/address>/i, hint: 'Ajoutez le lien mailto et son texte dans address.' }
    ]
  },
  {
    id: 'html-24-quote', language: 'html', title: 'Citer une source', subtitle: 'Structurez une citation longue.',
    explanation: ['<code>&lt;blockquote&gt;</code> représente une citation autonome.', 'L’attribut <code>cite</code> peut indiquer l’URL de la source.'],
    mission: 'Créez une citation « Le code se lit plus souvent qu’il ne s’écrit. » provenant de source.html.',
    requirements: ['Utiliser <code>&lt;blockquote&gt;</code>', 'Définir <code>cite="source.html"</code>', 'Afficher la citation exacte'],
    tip: 'Cite décrit la source sans forcément être visible.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Citation -->\n  </body>\n</html>`,
    assistTexts: ['Le code se lit plus souvent qu’il ne s’écrit.'], tabCompletions: ['source.html'],
    rules: [
      { regex: /<blockquote\b[^>]*cite\s*=\s*["']source\.html["'][^>]*>/i, hint: 'Ajoutez cite="source.html" à blockquote.' },
      { regex: /<blockquote\b[^>]*>\s*Le code se lit plus souvent qu[’']il ne s[’']écrit\.\s*<\/blockquote>/i, hint: 'Recopiez la citation dans blockquote.' }
    ]
  },
  {
    id: 'html-25-description-list', language: 'html', title: 'Définir un vocabulaire', subtitle: 'Associez des termes à leur définition.',
    explanation: ['<code>&lt;dl&gt;</code> contient une liste de descriptions.', '<code>&lt;dt&gt;</code> porte le terme et <code>&lt;dd&gt;</code> sa définition.'],
    mission: 'Créez une liste de description : HTML — Langage de structure.',
    requirements: ['Créer <code>&lt;dl&gt;</code>', 'Ajouter le terme HTML', 'Ajouter la définition demandée'],
    tip: 'Placez dt puis dd dans dl.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Mini glossaire -->\n  </body>\n</html>`,
    assistTexts: ['HTML', 'Langage de structure'],
    rules: [
      { regex: /<dl\b[^>]*>[\s\S]*<\/dl>/i, hint: 'Ajoutez une liste dl complète.' },
      { regex: /<dt\b[^>]*>\s*HTML\s*<\/dt>[\s\S]*<dd\b[^>]*>\s*Langage de structure\s*<\/dd>/i, hint: 'Ajoutez le terme et sa définition.' }
    ]
  },
  {
    id: 'html-26-picture', language: 'html', title: 'Adapter une image', subtitle: 'Choisissez une source selon l’écran.',
    explanation: ['<code>&lt;picture&gt;</code> propose plusieurs sources d’image.', 'Le navigateur sélectionne le premier <code>&lt;source&gt;</code> dont media correspond.'],
    mission: 'Dans picture, utilisez mobile.jpg sous 600px et desktop.jpg comme image par défaut.',
    requirements: ['Créer <code>&lt;picture&gt;</code>', 'Ajouter la source mobile', 'Ajouter l’image desktop'],
    tip: 'img sert toujours de solution de repli dans picture.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <!-- Image responsive -->\n  </body>\n</html>`,
    tabCompletions: ['mobile.jpg', 'desktop.jpg', '(max-width: 600px)'],
    rules: [
      { regex: /<picture\b[^>]*>[\s\S]*<\/picture>/i, hint: 'Créez une balise picture complète.' },
      { regex: /<source\b(?=[^>]*media\s*=\s*["']\(max-width:\s*600px\)["'])(?=[^>]*srcset\s*=\s*["']mobile\.jpg["'])[^>]*>/i, hint: 'Ajoutez la source mobile sous 600px.' },
      { regex: /<img\b[^>]*src\s*=\s*["']desktop\.jpg["'][^>]*>/i, hint: 'Ajoutez desktop.jpg dans img.' }
    ]
  },
  {
    id: 'html-27-srcset', language: 'html', title: 'Servir la bonne résolution', subtitle: 'Décrivez plusieurs largeurs d’image.',
    explanation: ['<code>srcset</code> liste plusieurs fichiers et leur largeur réelle.', '<code>sizes</code> décrit la largeur d’affichage prévue.'],
    mission: 'Ajoutez srcset avec image-480.jpg 480w et image-960.jpg 960w, puis sizes="100vw".',
    requirements: ['Utiliser <code>srcset</code>', 'Déclarer les deux largeurs', 'Ajouter <code>sizes="100vw"</code>'],
    tip: 'Séparez les candidats de srcset par une virgule.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <img src="image-960.jpg" alt="Paysage">\n  </body>\n</html>`,
    tabCompletions: ['image-480.jpg 480w, image-960.jpg 960w', '100vw'],
    rules: [
      { regex: /<img\b[^>]*srcset\s*=\s*["'][^"']*image-480\.jpg\s+480w\s*,\s*image-960\.jpg\s+960w[^"']*["'][^>]*>/i, hint: 'Ajoutez les deux candidats dans srcset.' },
      { regex: /<img\b[^>]*sizes\s*=\s*["']100vw["'][^>]*>/i, hint: 'Ajoutez sizes="100vw" à img.' }
    ]
  },
  {
    id: 'html-28-skip-link', language: 'html', title: 'Permettre de sauter la navigation', subtitle: 'Ajoutez un lien d’évitement accessible.',
    explanation: ['Un lien d’évitement permet aux utilisateurs clavier d’aller directement au contenu.', 'Sa cible est l’identifiant de la région principale.'],
    mission: 'Créez « Aller au contenu » vers #contenu et un main id="contenu".',
    requirements: ['Créer le lien d’évitement', 'Utiliser <code>href="#contenu"</code>', 'Créer la cible main'],
    tip: 'Placez le lien tout au début de body.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <nav>Navigation</nav>\n    <!-- Contenu principal -->\n  </body>\n</html>`,
    assistTexts: ['Aller au contenu'], tabCompletions: ['#contenu'],
    rules: [
      { regex: /<a\b[^>]*href\s*=\s*["']#contenu["'][^>]*>\s*Aller au contenu\s*<\/a>/i, hint: 'Ajoutez le lien « Aller au contenu ».' },
      { regex: /<main\b[^>]*id\s*=\s*["']contenu["'][^>]*>[\s\S]*<\/main>/i, hint: 'Ajoutez main id="contenu".' }
    ]
  },
  {
    id: 'html-29-fieldset', language: 'html', title: 'Regrouper des champs', subtitle: 'Donnez un titre à un groupe de contrôles.',
    explanation: ['<code>&lt;fieldset&gt;</code> regroupe des champs liés.', '<code>&lt;legend&gt;</code> donne un nom accessible au groupe.'],
    mission: 'Créez un fieldset « Préférences » avec une checkbox name="newsletter".',
    requirements: ['Utiliser <code>&lt;fieldset&gt;</code>', 'Ajouter la légende Préférences', 'Ajouter la checkbox newsletter'],
    tip: 'Legend doit être le premier enfant de fieldset.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <body>\n    <form>\n      <!-- Préférences -->\n    </form>\n  </body>\n</html>`,
    assistTexts: ['Préférences'],
    rules: [
      { regex: /<fieldset\b[^>]*>\s*<legend\b[^>]*>\s*Préférences\s*<\/legend>/i, hint: 'Ajoutez fieldset puis legend « Préférences ».' },
      { regex: /<input\b(?=[^>]*type\s*=\s*["']checkbox["'])(?=[^>]*name\s*=\s*["']newsletter["'])[^>]*>/i, hint: 'Ajoutez la checkbox newsletter.' }
    ]
  },
  {
    id: 'html-30-seo', language: 'html', title: 'Préparer le référencement', subtitle: 'Décrivez et identifiez la page.',
    explanation: ['La meta description résume le contenu pour les moteurs de recherche.', 'Un lien canonique indique l’URL de référence de la page.'],
    mission: 'Ajoutez la description « Apprendre HTML et PHP avec CodeQuest. » et l’URL canonique https://example.com/.',
    requirements: ['Ajouter la meta description', 'Respecter le contenu exact', 'Ajouter le lien canonical'],
    tip: 'Les deux balises se placent dans head.',
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="UTF-8">\n    <title>CodeQuest</title>\n    <!-- SEO -->\n  </head>\n  <body></body>\n</html>`,
    assistTexts: ['Apprendre HTML et PHP avec CodeQuest.'], tabCompletions: ['https://example.com/'],
    rules: [
      { regex: /<meta\b(?=[^>]*name\s*=\s*["']description["'])(?=[^>]*content\s*=\s*["']Apprendre HTML et PHP avec CodeQuest\.["'])[^>]*>/i, hint: 'Ajoutez la meta description exacte.' },
      { regex: /<link\b(?=[^>]*rel\s*=\s*["']canonical["'])(?=[^>]*href\s*=\s*["']https:\/\/example\.com\/["'])[^>]*>/i, hint: 'Ajoutez le lien canonical vers example.com.' }
    ]
  },

  {
    id: 'php-16-strict', language: 'php', title: 'Comparer strictement', subtitle: 'Vérifiez la valeur et son type.',
    explanation: ['L’opérateur <code>===</code> compare la valeur et le type.', 'Il évite les conversions implicites parfois surprenantes de <code>==</code>.'],
    mission: 'Si $role est strictement égal à « admin », affichez « Bienvenue admin ».',
    requirements: ['Utiliser <code>===</code>', 'Comparer avec admin', 'Afficher Bienvenue admin'],
    tip: 'Écrivez trois signes égal pour une comparaison stricte.',
    starter: `<?php\n$role = "admin";\n// Comparez strictement le rôle\n\n?>`,
    assistTexts: ['admin', 'Bienvenue admin'],
    rules: [
      { regex: /if\s*\(\s*\$role\s*===\s*["']admin["']\s*\)\s*\{/i, hint: 'Utilisez if ($role === "admin").' },
      { regex: /echo\s+["']Bienvenue admin["']\s*;/i, hint: 'Affichez « Bienvenue admin ».' }
    ], output: 'Bienvenue admin'
  },
  {
    id: 'php-17-match', language: 'php', title: 'Choisir avec match', subtitle: 'Retournez une valeur selon un cas.',
    explanation: ['L’expression <code>match</code> compare strictement une valeur.', 'Chaque branche retourne directement un résultat et <code>default</code> couvre les autres cas.'],
    mission: 'Affectez à $message « Disponible » si $statut vaut actif, sinon « Indisponible » avec match.',
    requirements: ['Utiliser <code>match ($statut)</code>', 'Créer le cas actif', 'Ajouter une branche default'],
    tip: 'Une expression match se termine par un point-virgule.',
    starter: `<?php\n$statut = "actif";\n// Créez $message avec match\n\n?>`,
    assistTexts: ['Disponible', 'Indisponible'],
    rules: [
      { regex: /\$message\s*=\s*match\s*\(\s*\$statut\s*\)\s*\{/i, hint: 'Affectez match ($statut) à $message.' },
      { regex: /["']actif["']\s*=>\s*["']Disponible["'][\s\S]*default\s*=>\s*["']Indisponible["']/i, hint: 'Ajoutez le cas actif et default.' }
    ], output: 'Disponible'
  },
  {
    id: 'php-18-nullable', language: 'php', title: 'Accepter une valeur absente', subtitle: 'Combinez type nullable et valeur de secours.',
    explanation: ['Le type <code>?string</code> accepte une chaîne ou null.', 'L’opérateur <code>??</code> fournit une valeur lorsque l’expression vaut null.'],
    mission: 'Créez afficherNom(?string $nom): string qui retourne $nom ou « Visiteur ».',
    requirements: ['Typer le paramètre en <code>?string</code>', 'Déclarer le retour string', 'Utiliser <code>?? "Visiteur"</code>'],
    tip: 'Le point d’interrogation se place avant le type.',
    starter: `<?php\n// Créez la fonction afficherNom\n\n?>`,
    assistTexts: ['Visiteur'],
    rules: [
      { regex: /function\s+afficherNom\s*\(\s*\?string\s+\$nom\s*\)\s*:\s*string\s*\{/i, hint: 'Écrivez la signature nullable complète.' },
      { regex: /return\s+\$nom\s*\?\?\s*["']Visiteur["']\s*;/i, hint: 'Retournez $nom ?? "Visiteur".' }
    ], output: 'Visiteur'
  },
  {
    id: 'php-19-require', language: 'php', title: 'Charger une dépendance', subtitle: 'Incluez un fichier une seule fois.',
    explanation: ['<code>require_once</code> charge un fichier indispensable.', 'Le suffixe once empêche un second chargement accidentel.'],
    mission: 'Chargez config.php avec require_once puis affichez APP_NAME.',
    requirements: ['Utiliser <code>require_once</code>', 'Charger config.php', 'Afficher la constante APP_NAME'],
    tip: 'Une constante PHP ne commence pas par $.',
    starter: `<?php\n// Chargez la configuration\n\n?>`,
    tabCompletions: ['config.php'],
    rules: [
      { regex: /require_once\s*(?:\(\s*)?["']config\.php["']\s*\)?\s*;/i, hint: 'Chargez config.php avec require_once.' },
      { regex: /echo\s+APP_NAME\s*;/i, hint: 'Affichez la constante APP_NAME.' }
    ], output: 'CodeQuest'
  },
  {
    id: 'php-20-namespace', language: 'php', title: 'Organiser avec un namespace', subtitle: 'Évitez les collisions de noms.',
    explanation: ['Un <code>namespace</code> place classes et fonctions dans un espace de noms.', 'Sa déclaration vient au début du fichier PHP.'],
    mission: 'Déclarez namespace App puis une classe vide Mission.',
    requirements: ['Déclarer <code>namespace App;</code>', 'Créer <code>class Mission</code>', 'Ajouter les accolades de classe'],
    tip: 'Le namespace précède la déclaration de classe.',
    starter: `<?php\n// Organisez la classe Mission\n\n?>`,
    rules: [
      { regex: /namespace\s+App\s*;/i, hint: 'Déclarez namespace App;' },
      { regex: /class\s+Mission\s*\{[\s\S]*\}/i, hint: 'Créez la classe Mission avec ses accolades.' }
    ], output: 'Classe App\\Mission'
  },
  {
    id: 'php-21-class', language: 'php', title: 'Créer un objet', subtitle: 'Regroupez état et comportement dans une classe.',
    explanation: ['Une classe est un plan servant à créer des objets.', 'Une propriété publique est accessible depuis l’extérieur avec <code>-&gt;</code>.'],
    mission: 'Créez class User avec la propriété publique typée string $nom.',
    requirements: ['Créer <code>class User</code>', 'Déclarer une propriété publique', 'Typer <code>$nom</code> en string'],
    tip: 'La propriété se déclare dans les accolades de la classe.',
    starter: `<?php\n// Créez la classe User\n\n?>`,
    rules: [
      { regex: /class\s+User\s*\{/i, hint: 'Déclarez class User.' },
      { regex: /public\s+string\s+\$nom\s*;/i, hint: 'Ajoutez public string $nom;' }
    ], output: 'Classe User'
  },
  {
    id: 'php-22-constructor', language: 'php', title: 'Initialiser un objet', subtitle: 'Utilisez un constructeur typé.',
    explanation: ['<code>__construct</code> s’exécute lors de la création d’un objet.', '<code>$this</code> désigne l’instance actuelle.'],
    mission: 'Dans User, créez __construct(string $nom) et affectez-le à $this->nom.',
    requirements: ['Créer le constructeur', 'Typer le paramètre string', 'Affecter <code>$this->nom</code>'],
    tip: 'Utilisez $this->nom = $nom;',
    starter: `<?php\nclass User {\n  public string $nom;\n  // Ajoutez le constructeur\n}\n?>`,
    rules: [
      { regex: /function\s+__construct\s*\(\s*string\s+\$nom\s*\)\s*\{/i, hint: 'Ajoutez __construct(string $nom).' },
      { regex: /\$this\s*->\s*nom\s*=\s*\$nom\s*;/i, hint: 'Affectez $nom à $this->nom.' }
    ], output: 'Utilisateur initialisé'
  },
  {
    id: 'php-23-encapsulation', language: 'php', title: 'Protéger une propriété', subtitle: 'Exposez les données avec une méthode.',
    explanation: ['Une propriété <code>private</code> n’est accessible que dans sa classe.', 'Un getter public contrôle la façon de lire cette valeur.'],
    mission: 'Créez private int $score = 0 et getScore(): int qui retourne le score.',
    requirements: ['Déclarer la propriété privée', 'Créer <code>getScore(): int</code>', 'Retourner <code>$this->score</code>'],
    tip: 'Le getter ne reçoit aucun paramètre.',
    starter: `<?php\nclass Joueur {\n  // Protégez le score\n}\n?>`,
    rules: [
      { regex: /private\s+int\s+\$score\s*=\s*0\s*;/i, hint: 'Ajoutez private int $score = 0;' },
      { regex: /public\s+function\s+getScore\s*\(\s*\)\s*:\s*int\s*\{[\s\S]*return\s+\$this\s*->\s*score\s*;[\s\S]*\}/i, hint: 'Créez le getter typé retournant le score.' }
    ], output: '0'
  },
  {
    id: 'php-24-inheritance', language: 'php', title: 'Hériter d’une classe', subtitle: 'Spécialisez un comportement existant.',
    explanation: ['<code>extends</code> crée une classe enfant à partir d’une classe parent.', 'L’enfant récupère les membres accessibles du parent.'],
    mission: 'Créez Admin qui extends User et une méthode role(): string retournant « admin ».',
    requirements: ['Créer <code>class Admin extends User</code>', 'Ajouter <code>role(): string</code>', 'Retourner admin'],
    tip: 'La classe User est déjà fournie.',
    starter: `<?php\nclass User {}\n// Créez la classe Admin\n\n?>`,
    assistTexts: ['admin'],
    rules: [
      { regex: /class\s+Admin\s+extends\s+User\s*\{/i, hint: 'Déclarez Admin extends User.' },
      { regex: /function\s+role\s*\(\s*\)\s*:\s*string\s*\{[\s\S]*return\s+["']admin["']\s*;/i, hint: 'Créez role(): string retournant admin.' }
    ], output: 'admin'
  },
  {
    id: 'php-25-interface', language: 'php', title: 'Définir un contrat', subtitle: 'Imposez une méthode avec une interface.',
    explanation: ['Une interface décrit les méthodes qu’une classe doit fournir.', '<code>implements</code> engage la classe à respecter ce contrat.'],
    mission: 'Créez interface Affichable avec afficher(): string, puis Carte implements Affichable.',
    requirements: ['Créer l’interface Affichable', 'Déclarer la méthode afficher', 'Faire implémenter l’interface par Carte'],
    tip: 'La méthode de l’interface se termine par un point-virgule.',
    starter: `<?php\n// Définissez le contrat puis la classe Carte\n\n?>`,
    rules: [
      { regex: /interface\s+Affichable\s*\{[\s\S]*public\s+function\s+afficher\s*\(\s*\)\s*:\s*string\s*;[\s\S]*\}/i, hint: 'Déclarez l’interface et sa méthode typée.' },
      { regex: /class\s+Carte\s+implements\s+Affichable\s*\{/i, hint: 'Créez Carte implements Affichable.' },
      { regex: /class\s+Carte[\s\S]*function\s+afficher\s*\(\s*\)\s*:\s*string/i, hint: 'Implémentez afficher dans Carte.' }
    ], output: 'Contrat respecté'
  },
  {
    id: 'php-26-exception', language: 'php', title: 'Gérer une exception', subtitle: 'Interceptez une erreur contrôlée.',
    explanation: ['<code>throw</code> déclenche une exception.', 'Le bloc <code>catch</code> l’intercepte afin de réagir sans arrêter brutalement le programme.'],
    mission: 'Lancez Exception("Erreur") dans try puis affichez son message dans catch.',
    requirements: ['Créer un bloc <code>try</code>', 'Utiliser <code>throw new Exception</code>', 'Intercepter et afficher le message'],
    tip: 'Récupérez le message avec $e->getMessage().',
    starter: `<?php\n// Gérez une exception\n\n?>`,
    assistTexts: ['Erreur'],
    rules: [
      { regex: /try\s*\{[\s\S]*throw\s+new\s+Exception\s*\(\s*["']Erreur["']\s*\)\s*;/i, hint: 'Lancez la nouvelle Exception dans try.' },
      { regex: /catch\s*\(\s*Exception\s+\$e\s*\)\s*\{[\s\S]*echo\s+\$e\s*->\s*getMessage\s*\(\s*\)\s*;/i, hint: 'Interceptez Exception $e et affichez son message.' }
    ], output: 'Erreur'
  },
  {
    id: 'php-27-json', language: 'php', title: 'Produire du JSON', subtitle: 'Transformez un tableau pour une API.',
    explanation: ['<code>json_encode</code> transforme une valeur PHP en JSON.', 'Le résultat est une chaîne qui peut être envoyée à une application cliente.'],
    mission: 'Encodez $profil avec json_encode dans $json puis affichez $json.',
    requirements: ['Conserver le tableau profil', 'Appeler <code>json_encode</code>', 'Afficher la chaîne JSON'],
    tip: 'Stockez le résultat avant de l’afficher.',
    starter: `<?php\n$profil = ["nom" => "Ada", "niveau" => 3];\n// Produisez le JSON\n\n?>`,
    rules: [
      { regex: /\$json\s*=\s*json_encode\s*\(\s*\$profil\s*\)\s*;/i, hint: 'Affectez json_encode($profil) à $json.' },
      { regex: /echo\s+\$json\s*;/i, hint: 'Affichez ensuite $json.' }
    ], output: '{"nom":"Ada","niveau":3}'
  },
  {
    id: 'php-28-file', language: 'php', title: 'Lire un fichier', subtitle: 'Chargez le contenu d’un fichier texte.',
    explanation: ['<code>file_get_contents</code> lit un fichier entier dans une chaîne.', 'Son résultat peut être stocké puis traité ou affiché.'],
    mission: 'Lisez message.txt dans $contenu puis affichez la variable.',
    requirements: ['Utiliser <code>file_get_contents</code>', 'Lire message.txt', 'Afficher <code>$contenu</code>'],
    tip: 'Le chemin du fichier est passé en argument.',
    starter: `<?php\n// Lisez le message\n\n?>`,
    tabCompletions: ['message.txt'],
    rules: [
      { regex: /\$contenu\s*=\s*file_get_contents\s*\(\s*["']message\.txt["']\s*\)\s*;/i, hint: 'Lisez message.txt dans $contenu.' },
      { regex: /echo\s+\$contenu\s*;/i, hint: 'Affichez $contenu.' }
    ], output: 'Contenu du fichier'
  },
  {
    id: 'php-29-session', language: 'php', title: 'Mémoriser une session', subtitle: 'Conservez une donnée entre plusieurs pages.',
    explanation: ['<code>session_start()</code> démarre ou reprend une session.', 'La superglobale <code>$_SESSION</code> stocke les données associées au visiteur.'],
    mission: 'Démarrez la session puis stockez 2 dans $_SESSION["niveau"].',
    requirements: ['Appeler <code>session_start()</code>', 'Utiliser <code>$_SESSION</code>', 'Créer la clé niveau valant 2'],
    tip: 'session_start doit être appelé avant tout affichage.',
    starter: `<?php\n// Démarrez et renseignez la session\n\n?>`,
    rules: [
      { regex: /session_start\s*\(\s*\)\s*;/i, hint: 'Appelez session_start();' },
      { regex: /\$_SESSION\s*\[\s*["']niveau["']\s*\]\s*=\s*2\s*;/i, hint: 'Stockez 2 dans la clé niveau de $_SESSION.' }
    ], output: 'Niveau 2 mémorisé'
  },
  {
    id: 'php-30-password', language: 'php', title: 'Protéger un mot de passe', subtitle: 'Hachez puis vérifiez une information sensible.',
    explanation: ['<code>password_hash</code> crée une empreinte sécurisée.', '<code>password_verify</code> compare un mot de passe à cette empreinte sans le déchiffrer.'],
    mission: 'Hachez $motDePasse avec PASSWORD_DEFAULT puis vérifiez-le dans une condition if.',
    requirements: ['Utiliser <code>password_hash</code>', 'Passer <code>PASSWORD_DEFAULT</code>', 'Tester avec <code>password_verify</code>'],
    tip: 'Ne stockez jamais directement un mot de passe en clair.',
    starter: `<?php\n$motDePasse = "CodeQuest!";\n// Hachez puis vérifiez le mot de passe\n\n?>`,
    tabCompletions: ['PASSWORD_DEFAULT'],
    rules: [
      { regex: /\$hash\s*=\s*password_hash\s*\(\s*\$motDePasse\s*,\s*PASSWORD_DEFAULT\s*\)\s*;/i, hint: 'Créez $hash avec password_hash et PASSWORD_DEFAULT.' },
      { regex: /if\s*\(\s*password_verify\s*\(\s*\$motDePasse\s*,\s*\$hash\s*\)\s*\)\s*\{/i, hint: 'Testez password_verify($motDePasse, $hash) dans if.' }
    ], output: 'Mot de passe vérifié'
  }
];
