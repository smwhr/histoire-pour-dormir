var storyContent = ﻿{"inkVersion":20,"root":[["ev",230,"srnd","pop","/ev","\n",{"->":"init"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"init":[["^Pierre s'ennuie dans sa chambre. Papa est en bas.","\n","^Il a une idée : il pourrait aller voir son papi et sa mamie !","\n",["ev",{"CNT?":".^"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Papa ne semble pas vraiment disposé à accompagner Pierre...",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"CNT?":".^"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Papa ne semble vraiment pas disposé à accompagner Pierre !",{"->":".^.^.^.14"},null]}],"nop","\n","ev","str",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Demander à",{"->":".^.^.17"},null],"s1":["pop",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Insister auprès de",{"->":".^.^.23"},null],"s1":["pop","^Demander encore à",{"->":".^.^.23"},null],"s2":["pop","^Redemander à",{"->":".^.^.23"},null],"#f":5}],{"->":".^.^.17"},null],"#f":5}],"^ papa.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Faire son sac.","/str",{"CNT?":".^"},3,">","/ev",{"*":".^.c-1","flg":5},{"c-0":["\n","^– Papa",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^, on peut aller voir papi et mamie",{"->":".^.^.29"},null],"s1":["pop","^, on peut y aller maintenant",{"->":".^.^.29"},null],"s2":["pop","^, j'aimerais vraiment aller voir papi et mamie",{"->":".^.^.29"},null],"s3":["pop","^, quand est-ce qu'on va voir papi et mami",{"->":".^.^.29"},null],"#f":5}],"^ ?","\n","^– ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Je ne peux pas",{"->":".^.^.17"},null],"s1":["pop","^Pas maintenant",{"->":".^.^.17"},null],"#f":5}],"^,","\n","<>","^ ",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^je dois faire la vaisselle",{"->":".^.^.23"},null],"s1":["pop","^je dois faire la lessive",{"->":".^.^.23"},null],"s2":["pop","^je travaille",{"->":".^.^.23"},null],"#f":5}],"^,","\n","<>","^ ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^tout à l'heure",{"->":".^.^.17"},null],"s1":["pop","^attends un peu",{"->":".^.^.17"},null],"#f":5}],"^.","\n",{"->":".^.^"},{"#f":5}],"c-1":["\n","^– Tant pis, j'irai tout seul !","\n",{"->":"sac"},{"#f":5}],"#f":5,"#n":"opts"}],null],{"#f":1}],"sac":[["^Pierre décide de préparer tout seul son sac pour le voyage.","\n",["ev","str","^Prendre son doudou","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Remplir une gourde d'eau","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Se faire un sandwich","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Récupérer un paquet de mouchoirs","/str","/ev",{"*":".^.c-3","flg":20},["ev",{"^->":"sac.0.opts.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","choiceCnt",0,"==","/ev",{"*":".^.^.c-4","flg":19},{"s":["^En route !",{"->":"$r","var":true},null]}],{"c-0":["\n","^Et hop, dans le sac le doudou !","\n","ev",{"VAR?":"Backpack"},{"VAR?":"doudou"},"+",{"VAR=":"Backpack","re":true},"/ev",{"->":".^.^"},{"#f":5}],"c-1":["\n","^On ferme bien le bouchon pour ne pas que la gourde fuie dans le sac !","\n","ev",{"VAR?":"Backpack"},{"VAR?":"gourde"},"+",{"VAR=":"Backpack","re":true},"/ev",{"->":".^.^"},{"#f":5}],"c-2":["\n","^Un énorme sandwich, grand comme ça, il rentre à peine !","\n","ev",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"+",{"VAR=":"Backpack","re":true},"/ev",{"->":".^.^"},{"#f":5}],"c-3":["\n","^Ça peut être bien utile des mouchoirs en papier. Hop, dans la poche de devant.","\n","ev",{"VAR?":"Backpack"},{"VAR?":"mouchoirs"},"+",{"VAR=":"Backpack","re":true},"/ev",{"->":".^.^"},{"#f":5}],"c-4":["ev",{"^->":"sac.0.opts.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],"\n",{"->":"foret"},{"#f":5}],"#f":5,"#n":"opts"}],null],{"#f":1}],"foret":["^Pierre fait un signe à son papa, pousse la porte et s'engage sur le petit chemin.","\n","^Pierre arrive dans une grande forêt toute sombre.","\n",{"->":".^.path_choice"},{"path_choice":[["^Pierre arrive à un embranchement.","\n",["ev",{"CNT?":"foret.continue"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ForestFear"},1,"+",{"VAR=":"ForestFear","re":true},"/ev","^On dirait que Pierre s'est perdu...","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"CNT?":"foret.continue"},6,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ForestFear"},1,"+",{"VAR=":"ForestFear","re":true},"/ev","^Pierre commence à avoir très peur dans cette grande forêt.","\n",{"->":".^.^.^.14"},null]}],"nop","\n","ev",{"CNT?":"foret.continue"},8,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ForestFear"},1,"+",{"VAR=":"ForestFear","re":true},"/ev","^Une ombre mystérieuse semble poursuivre Pierre !","\n",{"->":".^.^.^.22"},null]}],"nop","\n","ev",{"CNT?":"foret.continue"},12,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Pierre commence à avoir un peu faim...","\n",{"->":".^.^.^.30"},null]}],"nop","\n","ev","str","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ Courir",{"->":".^.^.^.41"},null]}],[{"->":".^.b"},{"b":["^Continuer",{"->":".^.^.^.41"},null]}],"nop","^ tout droit.","/str",0,1,"rnd",0,">","/ev",{"*":".^.c-0","flg":5},"ev","str","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ Courir",{"->":".^.^.^.60"},null]}],[{"->":".^.b"},{"b":["^Continuer",{"->":".^.^.^.60"},null]}],"nop","^ vers la droite.","/str",0,1,"rnd",0,">","/ev",{"*":".^.c-1","flg":5},"ev","str","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ Courir",{"->":".^.^.^.79"},null]}],[{"->":".^.b"},{"b":["^Continuer",{"->":".^.^.^.79"},null]}],"nop","^ vers la gauche.","/str",0,1,"rnd",0,">","choiceCnt",2,"<","&&","/ev",{"*":".^.c-2","flg":5},"ev","str","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ Courir",{"->":".^.^.^.102"},null]}],[{"->":".^.b"},{"b":["^Continuer",{"->":".^.^.^.102"},null]}],"nop","^ tout droit.","/str","choiceCnt",2,"<","/ev",{"*":".^.c-3","flg":5},"ev","str","ev",{"CNT?":"foret.face_au_loup"},3,"<","/ev",[{"->":".^.b","c":true},{"b":[["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Faire face à l'Ombre",{"->":".^.^.23"},null],"s1":["pop","^Se confronter à l'Ombre",{"->":".^.^.23"},null],"s2":["pop","^Affronter l'Ombre",{"->":".^.^.23"},null],"#f":5}],{"->":".^.^.^.119"},null]}],[{"->":".^.b"},{"b":["^Bon, si on arrêtait de fuir un peu ?",{"->":".^.^.^.119"},null]}],"nop","/str",{"VAR?":"ForestFear"},{"VAR?":"fear"},">=",{"CNT?":"foret.continue"},10,">","&&","/ev",{"*":".^.c-4","flg":5},"ev","str","^Manger le sandwich","/str",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"?",{"CNT?":"foret.continue"},12,">=","&&","/ev",{"*":".^.c-5","flg":21},{"c-0":["\n","ev",{"VAR?":"front"},"/ev",{"->":"foret.continue"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"right"},"/ev",{"->":"foret.continue"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"left"},"/ev",{"->":"foret.continue"},{"#f":5}],"c-3":["\n","ev",{"VAR?":"front"},"/ev",{"->":"foret.continue"},{"#f":5}],"c-4":["\n",{"->":"foret.face_au_loup"},{"#f":5}],"c-5":["\n","^Pierre mange son sandwich, ça le rassure un peu.","\n","ev",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"-",{"VAR=":"Backpack","re":true},"/ev","ev",{"VAR?":"ForestFear"},1,"-",{"VAR=":"ForestFear","re":true},"/ev",{"->":".^.^"},{"#f":5}],"#f":5,"#n":"opts"}],null],{"#f":1}],"continue":[{"temp=":"dir"},["ev",{"VAR?":"dir"},{"VAR?":"front"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Pierre ","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ s'enfuit",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["^continue",{"->":".^.^.^.9"},null]}],"nop","^ tout droit.","\n",{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"dir"},{"VAR?":"left"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Pierre ","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ s'enfuit",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["^prend",{"->":".^.^.^.9"},null]}],"nop","^ à gauche.","\n",{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"dir"},{"VAR?":"right"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Pierre ","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ s'enfuit",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["^prend",{"->":".^.^.^.9"},null]}],"nop","^ à droite.","\n",{"->":".^.^.^.4"},null]}],"nop","<>","^ ","ev",{"VAR?":"ForestFear"},{"VAR?":"terrified"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev","visit",5,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^L'Ombre le poursuit !",{"->":".^.^.35"},null],"s1":["pop","^ Plus vite, plus vite !",{"->":".^.^.35"},null],"s2":["pop","^L'Ombre le rattrape !",{"->":".^.^.35"},null],"s3":["pop","^ L'Ombre semble s'éloigner... puis revenir !",{"->":".^.^.35"},null],"s4":["pop","^Cours cours Pierre !",{"->":".^.^.35"},null],"#f":5}],"\n",{"->":".^.^.^.13"},null]}],"nop","\n",{"->":".^.^.path_choice.0.opts"},{"#f":1}],"face_au_loup":[["^L'ombre s'approche.","\n","^Elle est terrifiante.","\n","^On dirait...","\n","ev",{"CNT?":".^.is_loup"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":".^.^.^.is_loup"},{"->":".^.^.^.10"},null]}],"nop","\n","ev","str","^Ah non ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^mais",{"->":".^.^.17"},null],"#f":5}],"^ ça fait ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^toujours",{"->":".^.^.17"},null],"#f":5}],"^ trop peur en fait !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Aller, soyons courageux !","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"foret.path_choice.0.opts"},{"->":".^.^.is_loup"},{"#f":5}],"c-1":["\n",{"->":".^.^.is_loup"},{"#f":5}],"is_loup":["^Mais oui c'est ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^vraiment",{"->":".^.^.17"},null],"#f":5}],"^ un loup !","\n","ev","str","^Mais non, on n'aime ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^toujours",{"->":".^.^.17"},null],"#f":5}],"^ pas les loups !","/str",{"CNT?":".^"},3,"<","/ev",{"*":".^.c-2","flg":5},"ev","str","^On a dit qu'on était courageux...","/str","/ev",{"*":".^.c-3","flg":4},{"c-2":["\n",{"->":"foret.path_choice.0.opts"},{"->":".^.^.^.met_loup"},{"#f":5}],"c-3":["\n",{"->":".^.^.^.met_loup"},{"#f":5}],"#f":5}],"met_loup":["^Le loup s'approche de Pierre en faisant des bruits terribles.","\n",["ev",{"^->":"foret.face_au_loup.0.met_loup.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^– Va t'en le loup !",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.met_loup.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":2},{"s":["^– Ça va, le loup ?",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"foret.face_au_loup.0.met_loup.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Le loup lâche un petit sanglot.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-5":["ev",{"^->":"foret.face_au_loup.0.met_loup.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-0"},{"#f":5}],"#f":5}],"g-0":["^– J'ai si mal au ventre, gémit le Loup. J'ai si faim que mon estomac fait des gargouillis terrifiants et tout le monde s'enfuit en me voyant.","\n",["ev",{"^->":"foret.face_au_loup.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":2},{"s":["^– Tu es un loup gentil ?",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.g-0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":2},{"s":["^– Tu es un loup méchant ?",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"foret.face_au_loup.0.g-0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^– Oui","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-7":["ev",{"^->":"foret.face_au_loup.0.g-0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^– Non, au contraire","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["<>","^, je suis le plus gentil des loups.","\n",[["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^– Veux-tu quelquechose à manger ?",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^– Veux-tu m'accompagner de l'autre côté de la forêt ?",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^– Oh oui, avec plaisir ! dit le Loup, qu'as-tu à me proposer","\n",[["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-8.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"?","/ev",{"*":".^.^.c-0","flg":19},{"s":["^– Je peux te donner un bon sandwich",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-8.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^– En fait je n'ai rien du tout...",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-8.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->t->":"foret.donne_sandwich"},{"->":".^.^.^.^"},{"->":".^.^.^.^.^.^.mene_travers_foret"},{"#f":5}],"c-1":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-8.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^– Ce n'est pas grave, dit le Loup.","\n",{"->":".^.^.^.^"},{"->":".^.^.^.^.^.^.mene_travers_foret"},{"#f":5}]}],{"#f":5}],"c-9":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",{"CNT?":"foret.donne_sandwich"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^– Suis moi ! dit le Loup","\n",{"->":".^.^.^.^.^.^.mene_travers_foret"},{"->":".^.^.^.11"},null]}],"nop","\n","^– Aurais-tu quelquechose à me donner en échange ?","\n",[["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.15.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"?","/ev",{"*":".^.^.c-0","flg":19},{"s":["^– Tiens, voilà un bon sandwich !",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.15.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.^.c-8.9.c-1"},"!","/ev",{"*":".^.^.c-1","flg":19},{"s":["^– Je te promets un sandwich dès qu'on est de l'autre côté.",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.15.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^– Non, ","ev",{"CNT?":".^.^.^.^.^.c-8.9.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ comme je te l'ai déjà dit, ",{"->":".^.^.^.5"},null]}],"nop","^je n'ai rien du tout...",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.15.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->t->":"foret.donne_sandwich"},"<>","^ Maintenant suis moi !","\n",{"->":".^.^.^.^.^.^.mene_travers_foret"},{"->":".^.^.^.^.^.^.mene_travers_foret"},{"#f":5}],"c-1":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.15.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^– Oh ! J'ai hâte ! Suis moi !","\n",{"->":".^.^.^.^.^.^.mene_travers_foret"},{"->":".^.^.^.^.^.^.mene_travers_foret"},{"#f":5}],"c-2":["ev",{"^->":"foret.face_au_loup.0.g-1.opt_manger.c-9.15.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^– Ce n'est pas grave, dit le Loup. Suis moi.","\n",{"->":".^.^.^.^.^.^.mene_travers_foret"},{"#f":5}]}],{"#f":5}],"#f":5,"#n":"opt_manger"}],{"#f":5}],"mene_travers_foret":["^Le Loup ","ev",{"CNT?":"foret.donne_sandwich"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ encore tout affaibli",{"->":".^.^.^.6"},null]}],"nop","^ mène Pierre ","ev",{"CNT?":"foret.donne_sandwich"},"/ev",[{"->":".^.b","c":true},{"b":["^ d'un pas assuré",{"->":".^.^.^.12"},null]}],"nop","^ à travers la grande forêt. Ça fait tout de suite moins peur quand on a un guide !","\n","ev",{"CNT?":".^.^.g-1.opt_manger.c-9.15.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^– Tu m'avais promis un sandwich, puis-je l'avoir ?","\n",["ev",{"^->":"foret.face_au_loup.0.mene_travers_foret.18.b.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"?","/ev",{"*":".^.^.c-0","flg":19},{"s":["^– Oui, le voilà !",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.mene_travers_foret.18.b.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"!?","/ev",{"*":".^.^.c-1","flg":19},{"s":["^– Malheureusement, je l'ai déjà mangé.",{"->":"$r","var":true},null]}],["ev",{"^->":"foret.face_au_loup.0.mene_travers_foret.18.b.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"?","/ev",{"*":".^.^.c-2","flg":19},{"s":["^– Je préfère le garder pour moi !",{"->":"$r","var":true},null]}],{"->":".^.^.^.19"},{"c-0":["ev",{"^->":"foret.face_au_loup.0.mene_travers_foret.18.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->t->":"foret.donne_sandwich"},"<>","^ J'ai eu raison de te faire confiance !","\n",{"->":"foret.end"},{"#f":5}],"c-1":["ev",{"^->":"foret.face_au_loup.0.mene_travers_foret.18.b.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^– Mais ?! Bon, d'accord, tant pis, soupire le Loup.","\n",{"->":"foret.end"},{"#f":5}],"c-2":["ev",{"^->":"foret.face_au_loup.0.mene_travers_foret.18.b.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^– Oh ! Bon, d'accord, tant pis, soupire le Loup.","\n",{"->":"foret.end"},{"#f":5}]}]}],"nop","\n",{"->":"foret.end"},{"#f":5}]}],{"#f":1}],"donne_sandwich":["^Pierre donne son sandwich au loup gentil qui se sent tout de suite beaucoup mieux !","\n","^Son poil noir s'éclaircit. Maintenant ça se voit que c'est un loup gentil !","\n","^– Merci beacoup ! s'exclame le Loup.","\n","ev",{"VAR?":"Backpack"},{"VAR?":"sandwich"},"-",{"VAR=":"Backpack","re":true},"/ev","ev","void","/ev","->->",{"#f":1}],"end":["^Le Loup dit au revoir à Pierre et retourne ","ev",{"CNT?":".^.^.donne_sandwich"},"/ev",[{"->":".^.b","c":true},{"b":["^ en gambadant",{"->":".^.^.^.5"},null]}],"nop","^ dans la grande forêt ","ev",{"CNT?":".^.^.donne_sandwich"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ en poussant des gémissements terribles",{"->":".^.^.^.12"},null]}],"nop","^.","\n",{"->":"riviere"},{"#f":1}],"#f":1}],"riviere":[["^Pierre arrive au bord d'une large rivière.","\n",["ev",{"^->":"riviere.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^– Peut-être pourrais-je la traverser à la nage ?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"riviere.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Pierre se penche pour toucher l'eau. Il y a beaucoup trop de courant !","\n","done",{"#f":5}]}],{"#f":1}],"rest":[["^Prend dans son sac :","\n",["^Doudou","\n",["^Mouchoirs","\n",["^Gourde","\n",["^Sandwich","\n","^Grande foret qui fait peur, bruits terrifiants.","\n","^Ombre. Rencontre loup ! Terrifié ! Mais en fait c'est un loup gentil. Les gens ont peur de lui du coup il peut pas aller au magasin et personne ne lui apporte des courses !","\n","^Loup qui a faim on lui donne un morceau du sandwich !","\n","^Loup emmene de l'autre coté, remercie et au revoir.","\n","^Grande riviere. On se penche allongé pour toucher l'eau : il y a bcp trop de courant ! Il faudrait construire un pont. On rencontre un castor. Qui a soif et voudrait de l'eau. On lui donne de l'eau de la gourde ! Il construit un barrage on peut traverser !","\n","^Champs de blé. Epis de blé trop haut. On se perd ! Quand soudain on entend des eternuments ! Lapin ! C'est son champs. Demande d'aide. Accepte mais trop d'allergies... on lui donne un mouchoir. Lapin emmene de l'autre coté.","\n","^Enfin la maison de papi mamie.","\n","^Tu m'as l'air bien fatigué, donne nous ton sac et va t'allonger.","\n","^On s'endort mais il nous manque qqch ! C'est le doudou ! Il est dans le sac en bas ! On descend le prendre et au dodo !","\n","^Bonne nuit !","\n","end",{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"global decl":["ev",{"list":{},"origins":["Backpack"]},{"VAR=":"Backpack"},{"list":{},"origins":["DirectionsForet"]},{"VAR=":"DirectionsForet"},{"list":{"ForestFear.okay":1}},{"VAR=":"ForestFear"},"/ev","end",null],"#f":1}],"listDefs":{"Backpack":{"doudou":1,"gourde":2,"sandwich":3,"mouchoirs":4},"DirectionsForet":{"front":1,"left":2,"right":3},"ForestFear":{"okay":1,"lost":2,"fear":3,"terrified":4}}};