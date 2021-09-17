~ SEED_RANDOM(230)

LIST Backpack = doudou, gourde, sandwich, mouchoirs

-> init

=== init
Pierre est un petit garçon qui s'ennuie dans sa chambre. <>
Son Papa est en bas à s'affairer. <>
Pierre s'ennuie tellement. Il a déjà joué avec tous ses jouets. #CLASS: lettrine
Il a soudain une idée : il pourrait aller voir son papi et sa mamie !

-(opts)
{opts == 3: Papa ne semble pas vraiment disposé à accompagner Pierre...}
{opts == 4: Papa ne semble vraiment pas disposé à accompagner Pierre !}

+ [{Demander à|{~Insister auprès de|Demander encore à|Redemander à}} papa.]
    – Papa{, on peut aller voir papi et mamie ?|, on peut y aller maintenant ?|, j'aimerais vraiment aller voir papi et mamie !|, quand est-ce qu'on va voir papi et mamie ?}
    – {~Je ne peux pas|Pas maintenant}, 
      <> {~je dois faire la vaisselle|je dois faire la lessive|je travaille|je dois coucher le bébé}, 
      <> {~tout à l'heure|attends un peu}.
    ->opts
+{opts > 3} [Faire son sac.]
    – Tant pis, j'irai tout seul ! déclare alors Pierre.
    -> sac

=== sac
Pierre décide de préparer tout seul son sac pour le voyage.
-(opts)
* [Prendre son doudou]
    Et hop, dans le sac le doudou !
    ~ Backpack += doudou
    -> opts
* [Remplir une gourde d'eau]
    On ferme bien le bouchon pour ne pas que la gourde coule dans le sac !
    ~ Backpack += gourde
    -> opts
* [Se faire un sandwich]
    Un énorme sandwich, grand comme ça, il rentre à peine !
    ~ Backpack += sandwich
    -> opts
* [Récupérer un paquet de mouchoirs]
    Ça peut être bien utile des mouchoirs en papier. Hop, dans la poche de devant.
    ~ Backpack += mouchoirs
    -> opts
* {CHOICE_COUNT() == 0} En route !
    -> foret
    
    
=== foret
Pierre fait un signe à son papa, pousse la porte et s'engage sur le petit chemin.

Le petit garçon arrive devant une grande forêt. Elle est toute sombre. <>
On y entend le bruit des animaux qui y vivent : des coucous, des hiboux : <>
rien de bien méchant en tout cas ! #CLASS: lettrine

Pierre entre dans la forêt. <>
-> path_choice

LIST DirectionsForet = front, left, right
LIST ForestFear = (okay), lost, fear, terrified
= path_choice
Il arrive à un embranchement.

-(opts)
{continue == 4: 
    ~ ForestFear ++
    On dirait que Pierre s'est perdu...
}
{continue == 6: 
    ~ ForestFear ++
    Pierre commence à avoir très peur dans cette grande forêt.
}

{continue == 8: 
    ~ ForestFear ++
    Une ombre mystérieuse semble poursuivre Pierre !
}

{continue == 12: 
    Pierre commence à avoir un peu faim...
}

+{RANDOM(0,1) > 0} [{ForestFear == terrified: Courir|Continuer} tout droit.]
    -> continue(front)
+{RANDOM(0,1) > 0} [{ForestFear == terrified: Courir|Continuer} vers la droite.]
    -> continue(right)
+{ (RANDOM(0,1) > 0 and CHOICE_COUNT() < 2) } [{ForestFear == terrified: Courir|Continuer} vers la gauche.]
    -> continue(left)
+{CHOICE_COUNT() < 2} [{ForestFear == terrified: Courir|Continuer} tout droit.]
    -> continue(front)
+{ForestFear >= fear and continue > 10} [{face_au_loup < 3:{~Faire face à l'Ombre|Se confronter à l'Ombre|Affronter l'Ombre}|Bon, si on arrêtait de fuir un peu ?}]
    ->face_au_loup
* {Backpack has sandwich and continue >= 12} [Manger le sandwich]
    Pierre mange son sandwich, ça le rassure un peu.
    ~ Backpack -= sandwich
    ~ ForestFear--
    ->opts
    
= continue(dir)
{
    - dir == front: Pierre {ForestFear == terrified: s'enfuit|continue} tout droit.
    - dir == left: Pierre {ForestFear == terrified: s'enfuit|prend} à gauche.
    - dir == right: Pierre {ForestFear == terrified: s'enfuit|prend} à droite.
}<> {ForestFear == terrified: 
        {~L'Ombre le poursuit !| Plus vite, plus vite !|L'Ombre le rattrape !| L'Ombre semble s'éloigner... puis revenir !|Cours cours Pierre !}
    }
-> path_choice.opts


= face_au_loup
L'ombre s'approche.
Elle est terrifiante.
On dirait...
{is_loup:
    -> is_loup
}

+ [Ah non {|mais} ça fait {|toujours} trop peur en fait !]
    -> path_choice.opts
+ [Aller, soyons courageux !]
    
    
-(is_loup) 
Mais oui c'est {|vraiment} un loup !
+ {is_loup < 3} [Mais non, on n'aime {|toujours} pas les loups !]
    -> path_choice.opts
+ [On a dit qu'on était courageux...]

-(met_loup)

Le loup s'approche de Pierre en faisant des bruits terribles.
+ – Va t'en le loup !
    Le loup lâche un petit sanglot. 
+ – Ça va, le loup ?

- 
– J'ai si mal au ventre, gémit le Loup. J'ai si faim que mon estomac fait des gargouillis terrifiants et tout le monde s'enfuit en me voyant.

+ – Tu es un loup gentil ?
    – Oui
+ – Tu es un loup méchant ?
    – Non, au contraire
-
<>, je suis le plus gentil des loups. 

-(opt_manger)
* – Veux-tu quelquechose à manger ?
    – Oh oui, avec plaisir ! dit le Loup, qu'as-tu à me proposer
    * * {Backpack has sandwich} – Je peux te donner un bon sandwich
        -> donne_sandwich -> opt_manger
    * * (declare_rien_a_manger) – En fait je n'ai rien du tout...
        – Ce n'est pas grave, dit le Loup.
        ->opt_manger
* – Veux-tu m'accompagner de l'autre côté de la forêt ?
    {donne_sandwich: 
        – Suis moi ! dit le Loup
        -> mene_travers_foret
    }
    – Aurais-tu quelquechose à me donner en échange ?
    * * {Backpack has sandwich} – Tiens, voilà un bon sandwich !
        -> donne_sandwich ->
        <> Maintenant suis moi !
        -> mene_travers_foret
    * * (promet_sandwich){not declare_rien_a_manger} – Je te promets un sandwich dès qu'on est de l'autre côté.
        – Oh ! J'ai hâte ! Suis moi !
        -> mene_travers_foret
    * * – Non, {declare_rien_a_manger: comme je te l'ai déjà dit, }je n'ai rien du tout...
        – Ce n'est pas grave, dit le Loup. Suis moi.

-(mene_travers_foret)
Le Loup {not donne_sandwich: encore tout affaibli} mène Pierre {donne_sandwich: d'un pas assuré} à travers la grande forêt. Ça fait tout de suite moins peur quand on a un guide !

{promet_sandwich:
    – Tu m'avais promis un sandwich, puis-je l'avoir ?
    * { Backpack has sandwich} – Oui, le voilà !
        -> donne_sandwich ->
        <> J'ai eu raison de te faire confiance !
        -> end
    * {Backpack hasnt sandwich} – Malheureusement, je l'ai déjà mangé.
        – Mais ?! Bon, d'accord, tant pis, soupire le Loup.
        -> end
    * {Backpack has sandwich} – Je préfère le garder pour moi !
        – Oh ! Bon, d'accord, tant pis, soupire le Loup.
        -> end
    
}
-> end


= donne_sandwich
Pierre donne son sandwich au loup gentil qui se sent tout de suite beaucoup mieux !
Son poil noir s'éclaircit. Maintenant ça se voit que c'est un loup gentil !
– Merci beacoup ! s'exclame le Loup.
~ Backpack -= sandwich
->->

= end
Le Loup dit au revoir à Pierre et retourne {donne_sandwich: en gambadant} dans la grande forêt {not donne_sandwich: en poussant des gémissements terribles}.
-> riviere


=== riviere
Pierre arrive au bord d'une large rivière.
* – Peut-être pourrais-je la traverser à la nage ?

-
Pierre se penche pour toucher l'eau. Il y a beaucoup trop de courant !

-> DONE

=== rest



Prend dans son sac :

- Doudou
- Mouchoirs
- Gourde
- Sandwich

Grande foret qui fait peur, bruits terrifiants.

Ombre. Rencontre loup ! Terrifié ! Mais en fait c'est un loup gentil. Les gens ont peur de lui du coup il peut pas aller au magasin et personne ne lui apporte des courses !

Loup qui a faim on lui donne un morceau du sandwich !

Loup emmene de l'autre coté, remercie et au revoir.

Grande riviere. On se penche allongé pour toucher l'eau : il y a bcp trop de courant ! Il faudrait construire un pont. On rencontre un castor. Qui a soif et voudrait de l'eau. On lui donne de l'eau de la gourde ! Il construit un barrage on peut traverser !

Champs de blé. Epis de blé trop haut. On se perd ! Quand soudain on entend des eternuments ! Lapin ! C'est son champs. Demande d'aide. Accepte mais trop d'allergies... on lui donne un mouchoir. Lapin emmene de l'autre coté.

Enfin la maison de papi mamie.

Tu m'as l'air bien fatigué, donne nous ton sac et va t'allonger.

On s'endort mais il nous manque qqch ! C'est le doudou ! Il est dans le sac en bas ! On descend le prendre et au dodo !

Bonne nuit !
-> END