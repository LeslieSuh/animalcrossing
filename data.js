let words = [
  ["Alfonso", "アルベルト", "Alphonse", "알베르트"],
  ["Alli", "クロコ", "Ali", "크로크"],
  ["Boots", "ホウサク", "Croko", "풍작"],
  ["Del", "ヤマト", "Hector", "파도맨"],
  ["Drago", "タツオ", "Drago", "용남이"],
  ["Gayle", "アリゲッティ", "Odile", "앨리"],
  ["Liz", "ストロベリー", "Lisette", "N/A"],
  ["Roswell", "ピロンコン", "Roswell", "삐로코"],
  ["Sly", "ハイド", "Chuck", "하이드"],
  ["Anabelle", "あるみ", "Anabelle", "아롱이"],
  ["Annalisa", "みやび", "Roberta", "설백"],
  ["Antonio", "マコト", "Antonio", "퍼거머"],
  ["Cyrano", "さくらじま", "Cyrano", "사지마"],
  ["Lulu", "ルル", "N/A", "N/A"],
  ["Nosegay", "アリンコ", "Tamara", "N/A"],
  ["Olaf", "アントニオ", "Blair", "안토니오"],
  ["Pango", "パトラ", "Mathilda", "패트라"],
  ["Snooty", "こまち", "Tarina", "스누티"],
  ["Zoe", "ビーフン", "Cléo", "소면"],
  ["Beardo", "ベアード", "Eustache", "베어드"],
  ["Charlise", "チャーミー", "Zabou", "챠미"],
  ["Chow", "チャウヤン", "Chulin", "츄양"],
  ["Curt", "ガンテツ", "Curt", "뚝심"],
  ["Dozer", "スリープ", "Doudou", "N/A"],
  ["Grizzly", "ムー", "Grizzly", "무뚝"],
  ["Groucho", "クロー", "Ronchon", "거무틱"],
  ["Ike", "ダイク", "Isaac", "대공"],
  ["Klaus", "クマロス", "Klaus", "곰도로스"],
  ["Megan", "キャンディ", "Candy", "캔디"],
  ["Nate", "バッカス", "Nathan", "박하스"],
  ["Paula", "レイチェル", "Wendy", "레이첼"],
  ["Pinky", "タンタン", "Rosine", "링링"],
  ["Teddy", "たいへいた", "Teddy", "병태"],
  ["Tutu", "れんにゅう", "Tutu", "연유"],
  ["Ursala", "ネーヤ", "Oursula", "네이아"],
  ["Aisle", "アイル", "N/A", "N/A"],
  ["Barold", "ニッシー", "Manu", "곰시"],
  ["Bluebear", "グルミン", "Myrtille", "글루민"],
  ["Cheri", "アセロラ", "Rosalie", "아세로라"],
  ["Chester", "パンタ", "Placide", "팬타"],
  ["Cupcake", "クリスピー", "Bella", "N/A"],
  ["Judy", "みすず", "Laura", "미애"],
  ["June", "メイ", "Agnès", "메이"],
  ["Kody", "アイダホ", "Bill", "아이다호"],
  ["Maple", "メープル", "Léa", "메이첼"],
  ["Marty", "マーティー", "Marty", "마티"],
  ["Murphy", "のりお", "Eddie", "머피"],
  ["Olive", "ピッコロ", "Grisa", "올리브"],
  ["Pekoe", "ジャスミン", "Pauline", "재스민"],
  ["Poko", "ポコ", "N/A", "N/A"],
  ["Poncho", "ポンチョ", "Théo", "봉추"],
  ["Pudge", "きんぞう", "Gradub", "우띠"],
  ["Stitches", "パッチ", "Miro", "패치"],
  ["Tammy", "アネッサ", "Vanessa", "아네사"],
  ["Vladimir", "ガビ", "Vladimir", "곰비"],
  ["Ace", "フェザー", "Boumboum", "페더"],
  ["Admiral", "イッテツ", "Maréchal", "일섭"],
  ["Anchovy", "アンチョビ", "Miguel", "안초비"],
  ["Flash", "みちる", "Maurice", "N/A"],
  ["🇺🇸: Jacob 🇬🇧: Jakey", "ジャコテン", "Jacob", "야곱"],
  ["Jacques", "ジョッキー", "Jacky", "쪼끼"],
  ["Jay", "ツバクロ", "Gérard", "참돌이"],
  ["Jitters", "ジーニョ", "Gilbert", "딩요"],
  ["Joe", "ジョー", "N/A", "N/A"],
  ["Lucha", "マスカラス", "Condor", "마스카라스"],
  ["Madam Rosa", "マダムロザ", "N/A", "N/A"],
  ["Medli", "メドリ", "Médolie", "메들리"],
  ["Midge", "うずまき", "Michèle", "핑글이"],
  ["Otis", "たくあん", "Otis", "N/A"],
  ["Peck", "ふみたろう", "Pec", "문대"],
  ["Piper", "レイコ", "Neige", "파이프"],
  ["Robin", "パーチク", "Robie", "파틱"],
  ["Shoukichi", "しょうきち", "N/A", "N/A"],
  ["Sparro", "ちゅんのすけ", "Darius", "춘섭"],
  ["Twiggy", "ピーチク", "Titi", "핀틱"],
  ["Twirp", "ダンガン", "Neuneu", "N/A"],
  ["Angus", "セルバンテス", "Angus", "반데스"],
  ["Chuck", "ビフテキ", "Léon", "N/A"],
  ["Coach", "テッチャン", "Arnold", "철소"],
  ["Oxford", "イワオ", "Sorbonne", "N/A"],
  ["Rodeo", "ロデオ", "Flèche", "로데오"],
  ["Stu", "モーリス", "Beubeu", "모리스"],
  ["T-Bone", "ボルシチ", "Steakos", "티본"],
  ["Weldon", "ベルダン", "N/A", "N/A"],
  ["Vic", "ノルマン", "Toto", "노르망"],
  ["Ankha", "ナイル", "Neferti", "클레오"],
  ["Bob", "ニコバン", "Robert", "히죽"],
  ["Felicity", "みかっち", "Maud", "예링"],
  ["Felyne", "アイルー", "Felyne", "아이루"],
  ["Kabuki", "かぶきち", "Kabuki", "가북희"],
  ["Katt", "ちょい", "Kat", "쵸이"],
  ["Kid Cat", "１ごう", "Câlin", "1호"],
  ["Kiki", "キャビア", "Kiki", "캐비어"],
  ["Kitty", "キャビア", "Kitty", "쇼콜라"],
  ["Lolly", "ラムネ", "Linette", "사이다"],
  ["Meow", "ミャウ", "N/A", "N/A"],
  ["Merry", "さっち", "Suzy", "유네찌"],
  ["Mitzi", "マール", "Mistigri", "마르"],
  ["Moe", "ジンペイ", "Momo", "진상"],
  ["Monique", "ジェーン", "Monique", "제인"],
  ["Olivia", "オリビア", "Olivia", "올리비아"],
  ["Pierre", "ピエール", "N/A", "N/A"],
  ["Punchy", "ビンタ", "Cédric", "빙티"],
  ["purrl", "たま", "Perle", "타마"],
  ["Raymond", "ジャック", "Raymond", "잭슨"],
  ["Rosie", "ブーケ", "Rosie", "부케"],
  ["Rudy", "チャス", "Rougepif", "찰스"],
  ["Stinky", "アセクサ", "Tupux", "땀띠"],
  ["Tabby", "トラこ", "Tigri", "호냥이"],
  ["Tangy", "ヒャクパー", "Marine", "백프로"],
  ["Tom", "バンタム", "Tom", "밴덤"],
  ["Ava", "ドミグラ", "Eva", "에바"],
  ["Bechy", "アリア", "Sonya", "아리아"],
  ["Benedict", "ぺしみち", "Dimitri", "페니실린"],
  ["Betty", "ホイップ", "Betty", "N/A"],
  ["Broffina", "カサンドラ", "Jo", "히킨"],
  ["Egbert", "しもやけ", "Herbert", "김희"],
  ["Goose", "ケンタ", "Pouli", "건태"],
  ["Hank", "タツた", "Bruce", "N/A"],
  ["Hector", "ピロシ", "Hector", "N/A"],
  ["Ken", "クロベエ", "Ken", "오골"],
  ["Knox", "キンカク", "Wolfram", "금끼오"],
  ["Leigh", "ディアナ", "Huguette", "N/A"],
  ["Plucky", "パタヤ", "Poulette", "파타야"],
  ["Rhoda", "ブイヨン", "Arlette", "N/A"],
  ["Belle", "ミルク", "Belle", "N/A"],
  ["Bessie", "アモーレ", "Florette", "N/A"],
  ["Carrot", "キャロット", "N/A", "N/A"],
  ["Naomi", "ハナコ", "Maiko", "화자"],
  ["Norma", "いさこ", "Norma", "미자"],
  ["Patty", "カルピ", "Margaux", "밀크"],
  ["Petunia", "しもふり", "Pétunia", "N/A"],
  ["Tipper", "まきば", "Valé", "마틸다"],
  ["Bam", "タケル", "Nacer", "록키"],
  ["Beau", "ペーター", "Stefaon", "피터"],
  ["Bruce", "ブルース", "Boubou", "브루스"][
    ("Chelsea", "チェルシー", "Chelsea", "첼시")
  ],
  ["Deirdre", "ナディア", "Bichoune", "나디아"],
  ["Diana", "ナタリー", "Didi", "나탈리"],
  ["Erik", "チャック", "Abraham", "자끄"],
  ["Fauna", "ドレミ", "Bibi", "솔미"],
  ["Fuchsia", "ジェシカ", "Rosanne", "제시카"],
  ["Lopez", "トムソン", "Jon", "톰슨"],
  ["Shino", "よしの", "Shino", "요비"],
  ["Zell", "ネルソン", "Régis", "넬슨"],
  ["Bea", "ベーグル", "Béa", "베이글"],
  ["Benjamin", "ハチ", "Bernardo", "땡칠이"],
  ["Biskit", "ロビン", "Crocket", "로빈"],
  ["Bones", "トミ", "Nonos", "토미"],
  ["Bow", "バウ", "N/A", "N/A"],
  ["Butch", "ジョン", "Avril", "존"],
  ["Cherry", "ハンナ", "Anna", "한나"],
  ["Cookie", "ペリーヌ", "Cookie", "베리"],
  ["Daisy", "バニラ", "Naomie", "바닐라"],
  ["Frett", "シャンペン", "Foufou", "샹펜"],
  ["Goldie", "キャラメル", "Mirza", "카라멜"],
  ["Lucky", "ラッキー", "Ramsès", "럭키"],
  ["Mac", "チャンプ", "Brutus", "챔프"],
  ["Maddie", "マロン", "Olympe", "마롱"],
  ["Marcel", "もんじゃ", "Ismaël", "에드워드"],
  ["Masa", "マサ", "N/A", "N/A"],
  ["Megumi", "めぐみ", "N/A", "N/A"],
  ["Portia", "ブレンダ", "Dalma", "블랜더"],
  ["Shep", "ボブ", "Mehdi", "밥"],
  ["Walker", "ベン", "George", "벤"],
  ["Bill", "ピータン", "Choco", "코코아"],
  ["Deena", "まりも", "Mina", "마리모"],
  ["Derwin", "ボン", "Prof", "봉"],
  ["Drake", "フォアグラ", "Colvert", "푸아그라"],
  ["Freckles", "マグロ", "Caro", "다랑어"],
  ["Fruity", "フルデイ", "N/A", "N/A"],
  ["Gloria", "スワンソン", "Déborah", "마릴린"],
  ["Joey", "リチャード", "Joseph", "리처드"],
  ["Ketchup", "ケチャップ", "Ketchup", "케첩"],
  ["Maelle", "アンヌ", "Maëlle", "앤"],
  ["Mallary", "スミモモ", "Mallory", "스미모"],
  ["Miranda", "ミランダ", "Maëllis", "미란다"],
  ["Molly", "カモミ", "Molly", "귀오미"],
  ["Pate", "ナッキー", "Terrine", "나키"],
  ["Pompom", "のりっぺ", "Pompon", "주디"],
  ["Quillson", "タックン", "Narcisse", "덕근"],
  ["Scoot", "マモル", "Scooter", "지키미"],
  ["Shinabiru", "シナビル", "N/A", "N/A"],
  ["Weber", "アチョット", "Bébert", "아잠만"],
  ["Amelia", "アンデス", "Aurélie", "안데스"],
  ["Apollo", "アポロ", "Apollon", "아폴로"],
  ["Avery", "クスケチャ", "Faust", "쿠스케처"],
  ["Buzz", "ひでよし", "Phébus", "근엄"],
  ["Celia", "ティファニー", "Garance", "티파니"],
  ["Frank", "ハルク", "Greggae", "헐크"],
  ["Keaton", "フランク", "Enzo", "프랭크"],
  ["Pierce", "セバスチャン", "Napoléon", "세바스찬"],
  ["Quetzal", "ハチェット", "Quetzal", "N/A"],
  ["Quinn", "シオン", "Astair", "시온"],
  ["Sterling", "ギンカク", "Manfred", "은수리"],
  ["Axel", "エックスエル", "Axel", "엑스엘리"],
  ["Big Top", "３ごう", "Miles", "3호"],
  ["Chai", "フィーカ", "Chaï", "피카"],
  ["Cyd", "パンクス", "Punk", "펑크스"],
  ["Dizzy", "ヒュージ", "Pachy", "휴지"],
  ["Elina", "ビンディ", "Fanfan", "N/A"],
  ["Ellie", "エクレア", "Ella", "에끌레르"],
  ["Eloise", "エレフィン", "Éloïse", "엘레핀"],
  ["Margie", "サリー", "Maguy", "샐리"],
  ["Opal", "オパール", "Opaline", "오팔"],
  ["Paolo", "パオロ", "Paolo", "파올로"],
  ["Tia", "ティーナ", "Fanny", "티나"],
  ["Tucker", "はじめ", "Barry", "맘모"],
  ["Camofrog", "フルメタル", "Milos", "충성"],
  ["Cousteau", "ハルマキ", "Figaro", "왕서방"],
  ["Croque", "タイシ", "Carlos", "투투"],
  ["Diva", "アイーダ", "Violette", "아이다"],
  ["Drift", "ドク", "Gordon", "덕"],
  ["Emerald", "ケロミ", "Émeraude", "N/A"],
  ["Frobert", "コージィ", "Verbert", "구리구리"],
  ["Gigi", "リンダ", "Gloria", "린다"],
  ["Henry", "ヘンリー", "Henri", "헨리"],
  ["Huck", "ストロー", "Bajoue", "스트로"],
  ["Jambette", "エスメラルダ", "Gambette", "에스메랄다"],
  ["Jeremiah", "クワトロ", "Jérémie", "드리미"],
  ["Lily", "レイニー", "Raina", "레이니"],
  ["Prince", "カール", "Prince", "카일"],
  ["Puddles", "チョキ", "Rénata", "가위"],
  ["Raddle", "カックン", "Fabien", "개군"],
  ["Ribbot", "ガチャ", "Crabot", "철컥"],
  ["Sunny", "サニー", "N/A", "N/A"],
  ["Tad", "タンボ", "Rénato", "텀보"],
  ["Wart Jr.", "サム", "Crakos", "샘"],
  ["Billy", "アーシンド", "Seguin", "힘드러"],
  ["Chevre", "ユキ", "Biquette", "윤이"],
  ["Gruff", "ビリー", "Grognon", "빌리"],
  ["Iggy", "オトマツ", "Cabri", "N/A"],
  ["Kidd", "やさお", "Mokhtar", "염두리"],
  ["Nan", "スミ", "Nana", "순이"],
  ["Pashmina", "バーバラ", "Chavrina", "바바라"],
  ["Sherb", "レム", "Capri", "래미"],
  ["Sven", "チャマジ", "Sven", "N/A"],
  ["Velma", "ピティエ", "Véra", "벨마"],
  ["Al", "たもつ", "Gustave", "우락"],
  ["Boone", "まんたろう", "Babouin", "만복이"],
  ["Boyd", "ボイド", "Primo", "보이드"],
  ["Cesar", "アラン", "César", "앨런"],
  ["Hans", "スナイル", "Loran", "스나일"],
  ["Jane", "フィーバ", "Jane", "N/A"],
  ["Louie", "マッスル", "Louis", "머슬"],
  ["Peewee", "ダンベル", "Gogo", "덤벨"],
  ["Rilla", "リラ", "Rilla", "릴라"],
  ["Rocket", "４ごう", "Gertrude", "4호"],
  ["Violet", "ウズメ", "Gaëlle", "줌마"],
  ["Yodel", "ヨーデル", "Thomas", "N/A"],
  ["Apple", "アップル", "Esther", "애플"],
  ["Clay", "どぐろう", "Guido", "햄둥"],
  ["Flurry", "ゆきみ", "Emma", "뽀야미"],
  ["Graham", "グラハム", "Graham", "글라햄"],
  ["Hamlet", "ハムスケ", "Jojo", "햄스틴"],
  ["Hamphrey", "ハムジ", "Charles", "햄쥐"],
  ["Holden", "のりぼう", "Glutin", "노리보"],
  ["Marlo", "ドンチャン", "Marlou", "보스터"],
  ["Rodney", "ジミー", "Chico", "지미"],
  ["Soleil", "シャンティ", "Stella", "샨티"],
  ["Bertha", "あんこ", "Bertha", "베티"],
  ["Biff", "ガブリエル", "Biff", "가브리엘"],
  ["Bubbles", "チャコ", "Hippy", "차코"],
  ["Bitty", "エーミー", "Potama", "비티"],
  ["Clara", "クララ", "N/A", "N/A"],
  ["Harry", "オリバー", "Bob", "올리버"],
  ["Hippeux", "ディビッド", "Paulito", "데이빗"],
  ["Lulu", "エルニーニョ", "Lulu", "N/A"],
  ["Rocco", "ゴンザレス", "Bebel", "곤잘레스"],
  ["Rollo", "ピポクラテス", "Hippo", "N/A"],
  ["Annalise", "シルブプレ", "Âne-lise", "실부플레"],
  ["Buck", "ヴァヤシコフ", "Daniel", "바야시코프"],
  ["Cleo", "アイソトープ", "Cléa", "아이소토프"],
  ["Clyde", "デースケ", "Dorian", "마철이"],
  ["Colton", "アンソニー", "Tony", "안소니"],
  ["Ed", "キザノホマレ", "Édouard", "꺼벙"],
  ["Epona", "エポナ", "Epona", "에포나"],
  ["Elmer", "サブレ", "Martin", "샤브렌"],
  ["Filly", "7ごう", "Palomina", "7호"],
  ["Julian", "ジュリー", "Lico", "유니오"],
  ["Papi", "オカッピ", "Bourrico", "마사마"],
  ["Peaches", "ドサコ", "Prune", "말자"],
  ["Reneigh", "リアーナ", "Jennifer", "리아나"],
  ["Roscoe", "シュバルツ", "Rosco", "슈베르트"],
  ["Savannah", "サバンナ", "Savana", "사반나"],
  ["Victoria", "セントアロー", "Victoria", "센트엘로"],
  ["Winnie", "マキバスター", "Anne", "카로틴"],
  ["Astrid", "キッズ", "Rhona", "펑키맘"],
  ["Carrie", "マミィ", "Kanga", "마미"],
  ["Kitt", "アップリケ", "Poquette", "애플리케"],
  ["Koharu", "こはる", "N/A", "N/A"],
  ["Marcie", "マリア", "Selma", "마리아"],
  ["Marcy", "モジモジ", "Marcia", "N/A"],
  ["Marcy", "モジモジ", "Marcia", "N/A"],
  ["Mathilda", "アザラク", "Mathilde", "안젤라"],
  ["Rooney", "マイク", "Mike", "마이크"],
  ["Sylvia", "シルビア", "Madsi", "실비아"],
  ["Valise", "エプロン", "Pochette", "N/A"],
  ["Walt", "カンロク", "Walt", "관록"],
  ["Alice", "メルボルン", "Alice", "멜버른"],
  ["Canberra", "キャンベラ", "Kolala", "캔버라"],
  ["Eugene", "ロッキー", "Jamy", "코알"],
  ["Faith", "マーチ", "Kolette", "마치"],
  ["Gonzo", "ゴンゾー", "Gonzo", "근성"],
  ["Huggy", "ダッコ", "Tina", "N/A"],
  ["Lyman	オズモンド", "Kalyptus", "오즈먼드"],
  ["Melba", "アデレード", "Melba", "아델레이드"],
  ["Ozzie", "ドングリ", "Koko", "동동이"],
  ["Sydney", "シドニー", "Koaline", "시드니"],
  ["Yuka", "ユーカリ", "Calypso", "유카리"],
  ["Aziz", "アッサム", "Aziz", "N/A"],
  ["Bud", "グラさん", "Léonard", "선글"],
  ["Elvis", "キング", "Elvis", "킹"],
  ["Jūbei", "ジュウベエ", "N/A", "N/A"],
  ["Leopold", "ティーチャー", "Leandro", "티처"],
  ["Lionel", "ライオネル", "Léopold", "라이오넬"],
  ["Mott", "リック", "Aimé", "릭"],
  ["Rex", "サンデー", "Léo", "렉스"],
  ["Rory", "アーサー", "Hercule", "아더"],
  ["Anicotti", "ラザニア", "Annie", "라자냐"],
  ["Bella", "イザベラ", "Belle", "이자벨"],
  ["Bettina", "マルコ", "Sabrina", "마르카"],
  ["Bree", "サラ", "Quenotte", "사라"],
  ["Broccolo", "ブロッコリー", "Steven", "브로콜리"],
  ["Candi", "かんゆ", "Sucrette", "사탕"],
  ["Chadder", "チーズ", "Mozzar", "치즈"],
  ["Chico", "チューボー", "Rapido", "N/A"],
  ["Dora", "とめ", "Dora", "티미"],
  ["Flossie", "ピスタチオ", "Chiquita", "N/A"],
  ["Greta", "ふくこ", "Greta", "복자"],
  ["Limberg", "らっきょ", "Gruyère", "단무지"],
  ["Moose", "ピン", "Joachim", "핑"],
  ["Penelope", "チューこ", "Missy", "찍순이"],
  ["Penny", "ネズこ", "Barbara", "N/A"],
  ["Petri", "リカ", "Shimi", "리카"],
  ["Rizzo", "ちょろきち", "Sourizzi", "조르쥐"],
  ["Rod", "ジャン", "Marcel", "쟝"],
  ["Samson", "ピース", "Samson", "피스"],
  ["Champ", "さるお", "Thibaut", "몽돌이"],
  ["Deli", "デリー", "Magogo", "델리"],
  ["Elise", "モンこ", "Élise", "몽자"],
  ["Flip", "さすけ", "Rudy", "원승"],
  ["Monty	サルモンティ", "Lourant", "몽티"],
  ["Nana", "チッチ", "Mireille", "키키"],
  ["Shari", "シェリー", "Luna", "젤리"],
  ["Simon", "エテキチ", "Simon", "시몬"],
  ["Tammi", "エイプリル", "Lili", "에이프릴"],
  ["Tiansheng", "テンシン", "Tiansheng", "제천"],
  ["Cephalobot", "ギーガー", "Octoborg", "기가"],
  ["Inkwell", "スミダクン", "Pigmento", "멍무리"],
  ["Marina", "タコリーナ", "Marina", "문리나"],
  ["Octavian	おくたろう", "Octave", "문복"],
  ["Zucker", "タコヤ", "Marvin", "탁호"],
  ["Blanche", "しのぶ", "Sophie", "신옥"],
  ["Cranston", "トキオ", "Gabin", "타키"],
  ["Flora", "フララ", "Justine", "플라라"],
  ["Gladys", "ちとせ", "Gladys", "빅토리아"],
  ["Julia", "ジュリア", "Julie", "줄리아"],
  ["Phil", "ケイン", "Phil", "케인"],
  ["Phoebe", "ヒノコ", "Faustine", "휘니"],
  ["Queenie	タキュ", "Reine", "택주"],
  ["Rio", "デジャネイロ", "Estrella", "데자네"],
  ["Sandy", "ラン", "Ottie", "샌디"],
  ["Sprocket", "ヘルツ", "Laflèche", "헤르츠"],
  ["Wolfgang", "ロボ", "Wolfgang", "로보"],
  ["Whitney", "ビアンカ", "Blanche", "비앙카"],
  ["W. Link", "ウルフリンク", "Link l.", "울프 링크"],
  ["Vivian", "ヴァネッサ", "Viviane", "바네사"],
  ["Tarou", "タロウ", "N/A", "N/A"],
  ["Skye", "リリィ", "Marilou", "릴리"],
  ["Lobo", "ブンジロウ", "Lobo", "늑태"],
  ["Kyle", "リカルド", "Gary", "리카르도"],
  ["Freya", "ツンドラ", "Luppa", "산드라"],
  ["Fang", "シベリア", "Pierrot", "시베리아"],
  ["Dobie", "けん", "Loupiot", "켄"],
  ["Chief", "チーフ", "Chef", "대장"],
  ["Audie", "モニカ", "Monica", "모니카"],
  ["Tybalt", "ハリマオ", "Jeff", "티볼트"],
  ["Rowan", "ゴメス", "Marito", "고메스"],
  ["Rolf", "チョモラン", "Ralf", "호랭이"],
  ["Leonardo", "ヒョウタ", "Dolph", "범호"],
  ["Claudia", "マリリン", "Vanina", "신디"],
  ["Bianca", "コユキ", "Noémie", "백희"],
  ["Bangle", "ルーズ", "Bengale", "루주"],
  ["Viché", "みさき", "Mara", "미사키"],
  ["Tasha", "ナターシャ", "Nadeige", "나타샤"],
  ["Sylvana", "もんぺ", "Mounia", "실바나"],
  ["Static", "スパーク", "Électro", "스파크"],
  ["Sheldon", "クリス", "Roy", "크리스"],
  ["Sally", "ララミー", "Damia", "라라미"],
  ["Ricky", "カジロウ", "Rocky", "갈가리"],
  ["Poppy", "グミ", "Irène", "다람"],
  ["Pecan", "レベッカ", "Pécan", "레베카"],
  ["Peanut", "ももこ", "Rachida", "핑키"],
  ["Nibbles", "ガリガリ", "Lola", "그리미"],
  ["Mint", "ミント", "Amande", "민트"],
  ["Marshal", "ジュン", "Mathéo", "쭈니"],
  ["Kit", "キット", "N/A", "N/A"],
  ["Ione", "スピカ", "Terra", "스피카"],
  ["Hazel", "アイリス", "Pamela", "아이리스"],
  ["Filbert", "リッキー", "Filibert", "리키"],
  ["Cece", "なぎさ", "Kala", "나기사"],
  ["Caroline", "キャロライン", "Isabelle", "캐롤라인"],
  ["Cally", "パセリ", "Célia", "파슬리"],
  ["Blaire", "シルエット", "Cachou", "실루엣"],
  ["Agent S", "２ごう", "Ninjette", "2호"],
  ["Woolio", "ホシオ", "Moumoute", "N/A"],
  ["Willow", "マリー", "Maï", "마리"],
  ["Wendy", "みぞれ", "Karen", "눈송이"],
  ["Vesta", "メリヤス", "Hélaine", "메리어스"],
  ["Timbra", "つかさ", "Sélène", "잔디"],
  ["Stella", "アクリル", "Bigoudi", "아크릴"],
  ["Pietro", "ジュペッティ", "Pietro", "피엘"],
  ["Muffy", "フリル", "Charlène", "프릴"],
  ["Gen", "げん", "N/A", "N/A"],
  ["Frita", "ウェンディ", "Clarabêl", "웬디"],
  ["Eunice", "モヘア", "Bérénice", "곱슬이"],
  ["Étoile", "エトワール", "Étoile", "에뜨와르"],
  ["Dom", "ちゃちゃまる", "Bouloche", "차둘"],
  ["Curlos", "カルロス", "Tonton", "카를로스"],
  ["Cashmere", "ラムール", "Cashmir", "캐시미어"],
  ["Baabara", "トロワ", "Bêêtty", "트로와"],
  ["Tiara", "ワイハ", "Tiara", "N/A"],
  ["Tank", "くるぶし", "Ben", "탱크"],
  ["Spike", "スクワット", "Rhino", "스쿼트"],
  ["Rhonda", "ユメコ", "Renée", "론다"],
  ["Renée", "おさい", "Rina", "뿔님이"],
  ["Patricia", "パトリシア", "N/A", "N/A"],
  ["Merengue", "パティ", "Patty", "스트로베리"],
  ["Hornsby", "みつお", "Cornio", "뿌람"],
  ["Azalea", "ペチュニア", "Azalée", "페튜니아"],
  ["Toby", "トビー", "Toby", "토비"],
  ["Tiffany", "バズレー", "Tiphaine", "바슬레"],
  ["Snake", "モモチ", "Jeannot", "닌토"],
  ["Sasha", "ミッチェル", "Alix", "미첼"],
  ["Ruby", "ルナ", "Rubis", "루나"],
  ["Pippy", "ロッタ", "Nadia", "로타"],
  ["O'Hare", "サントス", "Civet", "산토스"],
  ["Mira", "ミラコ", "Grisette", "미랑"],
  ["Hopkins", "プースケ", "Grignote", "홉킨스"],
  ["Genji", "ゲンジ", "Kali", "토시"],
  ["Gaston", "モサキチ", "Gaston", "대길"],
  ["Gabi", "ペチカ", "Gaby", "패티카"],
  ["Francine", "フランソワ", "Nadine", "프랑소와"],
  ["Dotty", "マーサ", "Dorothée", "서머"],
  ["Doc", "トビオ", "Doc", "토니"],
  ["Cole", "アマミン", "Épicure", "아마민"],
  ["Coco", "やよい", "Coco", "이요"],
  ["Claude", "ビネガー", "Claude", "비니거"],
  ["Chrissy", "クリスチーヌ", "Kristine", "크리스틴"],
  ["Carmen", "チョコ", "Zoé", "초코"],
  ["Bunnie", "リリアン", "Clara", "릴리안"],
  ["Bonbon", "ミミィ", "Sylvette", "미미"],
  ["Truffles", "トンコ", "Trufa", "탱고"],
  ["Sue E", "ブルジョア", "Peguy", "N/A"],
  ["Aurora", "オーロラ", "Aurore", "오로라"],
  ["Boomer	ショーイ", "Ethan", "팽기"],
  ["Chabwick", "のぶお", "Zinzin", "펭구"],
  ["Cube", "ビス", "Cube", "빙수"],
  ["Flo", "レイラ", "Nora", "레이라"],
  ["Friga", "サブリナ", "Friga", "사브리나"],
  ["Gwen", "ポーラ", "Gwen", "폴라"],
  ["Hopper", "ダルマン", "Victor", "달만이"],
  ["Iggly", "のりまき", "Urbain", "김말이"],
  ["Puck", "ホッケー", "Hervé", "하키"],
  ["Roald", "ペンタ", "Reynald", "펭수"],
  ["Sprinkle", "フラッペ", "Laurie", "크리미"],
  ["Tex", "ボルト", "Émilien", "볼트"],
  ["Wade", "カマボコ", "Miglou", "호떡"],
  ["Agnes", "アグネス", "Pansy", "아그네스"],
  ["Boris", "ダリー", "Boris", "보리"],
  ["Chops", "トンファン", "Aaron", "돈후앙"],
  ["Cobb", "ハカセ", "Porken", "박사"],
  ["Curly", "ハムカツ", "Tirbou", "햄까스"],
  ["Gala", "ためこ", "Camille", "꽃지"],
  ["Ganon", "ガノン", "Ganon", "가논"],
  ["Hambo", "はちまき", "Jambo", "N/A"],
  ["Hugh", "クッチャネ", "Bonno", "먹고파"],
  ["Kevin", "イノッチ", "Jean-Bon", "멧지"],
  ["Lucy", "ルーシー", "Lucie", "루시"],
  ["Maggie", "マーガレット", "Marjorie", "마가렛"],
  ["Pancetti", "ブリトニー", "Lydie", "브리트니"],
  ["Peggy", "ちえり", "Rose", "체리"],
  ["Pigleg", "バチコーメ", "Xavier", "N/A"],
  ["Rasher", "グレオ", "Salami", "글레이"],
  ["🇺🇸: Spork 🇬🇧: Crackle", "ポーク", "Justin", "포크"],
];
