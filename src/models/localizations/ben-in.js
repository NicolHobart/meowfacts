const facts = [
  "১৯৮৭(1987) সালে আমেরিকার এক নম্বর পোষা প্রাণী হিসাবে বিড়াল কুকুরকে ছাড়িয়ে যায়।",
  "যেসব বিড়াল একসাথে থাকে তারা মাঝে মাঝে একে অপরের মাথা ঘষে দেখায় যে তাদের লড়াই করার কোন ইচ্ছা নেই। অল্পবয়সী বিড়ালরা এটি প্রায়শই করে, বিশেষ করে যখন তারা উত্তেজিত হয়।",
  "মা বিড়াল তাদের বিড়ালছানাদের লিটার বাক্স ব্যবহার করতে শেখায়।",
  "জীবনের প্রাথমিক পর্যায়ে আপনি যেভাবে বিড়ালছানাদের সাথে আচরণ করেন তা পরবর্তী জীবনে এটির ব্যক্তিত্বের বৈশিষ্ট্যগুলি উপস্থাপন করবে।",
  // "Contrary to popular belief, the cat is a social animal. A pet cat will respond and answer to speech , and seems to enjoy human companionship.",
  // "When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
  // "Neutering a cat extends its life span by two or three years.",
  "বিড়াল, বিশেষ করে বয়স্ক বিড়ালদের ক্যান্সার হয়। অনেক সময় এই রোগ সফলভাবে চিকিত্সা করা যেতে পারে।",
  "বিড়াল মিষ্টি স্বাদ করতে পারে না",
  "বিড়ালদের খাবারে অবশ্যই চর্বি থাকতে হবে কারণ তারা নিজেরাই এটি তৈরি করতে পারে না।",
  // "Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
  "টাইলেনল এবং চকলেট উভয়ই বিড়ালদের জন্য বিষাক্তকর",
  // "Many cats cannot properly digest cows milk. Milk and milk products give them diarrhea.",
  "গড় বিড়ালের খাবার প্রায় পাঁচটি ইঁদুরের সমান।",
  // "The average cat food meal is the equivalent to about five mice.",
  // "Cats can get tapeworms from eating fleas. These worms live inside the cat forever, or until they are removed with medication. They reproduce by shedding a link from the end of their long bodies. This link crawls out the cat's anus, and sheds hundreds of eggs. These eggs are injested by flea larvae, and the cycles continues. Humans may get these tapeworms too, but only if they eat infected fleas. Cats with tapeworms should be dewormed by a veterinarian.",
  "বিড়ালরা ইঁদুর খেয়ে টেপওয়ার্ম পেতে পারে৷ আপনার বিড়ালরা যদি ইঁদুর ধরে ফেলে এটি থেকে পুরস্কার কেড়ে নেওয়াই ভাল।",
  "বিড়ালের মধ্যে এইডসের একটি রূপ বিদ্যমান।",
  "সিয়ামিজ বিড়ালের বিন্দুর রঙ তাপ সম্পর্কিত। শীতল অঞ্চলগুলি গাঢ়",

  // "Siamese kittens are born white because of the heat inside the mother's uterus before birth. This heat keeps the kittens' hair from darkening on the points.",
  // "People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.",
  // "Studies now show that the allergen in cats is related to their scent glands. Cats have scent glands on their faces and at the base of their tails. Entire male cats generate the most scent. If this secretion from the scent glands is the allergen, allergic people should tolerate spayed female cats the best.",
  // "Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
  // "Cats are subject to gum disease and to dental caries. They should have their teeth cleaned by the vet or the cat dentist once a year.",
  // "Many people fear catching a protozoan disease, Toxoplasmosis, from cats. This disease can cause illness in the human, but more seriously, can cause birth defects in the unborn. Toxoplasmosis is a common disease, sometimes spread through the feces of cats. It is caused most often from eating raw or rare beef. Pregnant women and people with a depressed immune system should not touch the cat litter box. Other than that, there is no reason that these people have to avoid cats.",
  // "The ancestor of all domestic cats is the African Wild Cat which still exists today.",
  // "In ancient Egypt, killing a cat was a crime punishable by death.",
  // "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
  // "In the Middle Ages, during the Festival of Saint John, cats were burned alive in town squares.",
  // "The first cat show was in 1871 at the Crystal Palace in London.",
  // "Today there are about 100 distinct breeds of the domestic cat.",
  // "Like birds, cats have a homing ability that uses its biological clock, the angle of the sun, and the Earth's magnetic field. A cat taken far from its home can return to it. But if a cat's owners move far from its home, the cat can't find them.",
  // "Cats bury their feces to cover their trails from predators.",
  // "Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If you poke the tail of a sleeping cat, it will respond accordingly.",
  // "Besides smelling with their nose, cats can smell with an additional organ called the Jacobson's organ, located in the upper surface of the mouth.",
  // "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
  // "Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
  // "Julius Ceasar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
  // "Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
  // "The word 'cat' in various languages: French: chat; German: katze; Italian: gatto; Spanish/Portugese: gato; Yiddish: kats; Maltese: qattus; Swedish/Norwegian: katt; Dutch: kat; Icelandic: kottur; Greek: catta; Hindu: katas; Japanese:neko; Polish: kot; Ukranian: kotuk; Hawiian: popoki; Russian: koshka; Latin: cattus; Egyptian: mau; Turkish: kedi; Armenian: Gatz; Chinese: mao; Arabic: biss; Indonesian: kucing; Bulgarian: kotka; Malay: kucing; Thai/Vietnamese: meo; Romanian: pisica; Lithuanian: katinas; Czech: kocka; Slovak: macka; Armenian: gatz; Basque: catua; Estonian: kass; Finnish: kissa; Swahili: paka.",
  // "Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!",
  // "Cats can be taught to walk on a leash, but a lot of time and patience is required to teach them. The younger the cat is, the easier it will be for them to learn.",
  // "Purring not always means happiness. Purring could mean a cat is in terrible pain such as during childbirth. Kitten will purr to their mother to let her know they are getting enough milk while nursing. Purring is a process of inhaling and exhaling, usually performed while the mouth is closed. But don't worry, if your cat is purring while your gently petting her and holding her close to you - that is a happy cat!",
  // "The catnip plant contains an oil called hepetalactone which does for cats what marijuana does to some people. Not all cats react to it those that do appear to enter a trancelike state. A positive reaction takes the form of the cat sniffing the catnip, then licking, biting, chewing it, rub & rolling on it repeatedly, purring, meowing & even leaping in the air.",
  // "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their talk horizontally or tucked between their legs while walking.",
  // "A happy cat holds her tail high and steady.",
  // "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
  // "Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.",
  // "Baking chocolate is the most dangerous chocolate to your cat.",
  // "You check your cats pulse on the inside of the back thigh, where the leg joins to the body. Normal for cats: 110-170 beats per minute.",
  // "Jaguars are the only big cats that don't roar.",
  // "A cats field of vision is about 185 degrees.",
  // "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
  // "The Maine Coone is the only native American long haired breed.",
  // "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
  // "Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.",
  // "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
  // "Not every cat gets 'high' from catnip. Whether or not a cat responds to it depends upon a recessive gene: no gene, no joy.",
  // "A cat can sprint at about thirty-one miles per hour.",
  // "In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.",
  // "Cats have been domesticated for half as long as dogs have been.",
  // "A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.",
  // "A cat can spend five or more hours a day grooming himself.",
  // "All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.",
  // "Both humans and cats have identical regions in the brain responsible for emotion.",
  // "A cat's brain is more similar to a man's brain than that of a dog.",
  // "A cat has more bones than a human; humans have 206, and the cat - 230.",
  // "Cats have 30 vertebrae--5 more than humans have.",
  // "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
  // "Cats have over 20 muscles that control their ears.",
  // "A group of cats is called a clowder.",
  // "There are cats who have survived falls from over 32 stories (320 meters) onto concrete.",
  // "Cats sleep 70% of their lives.",
  // "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
  // "A cat has ran for mayor of Mexico City in 2013.",
  // "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.",
  // 'When cats grimace, they are usually "taste-scenting." They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.',
  // "Cats can not taste sweetness.",
  // "Owning a cat can reduce the risk of stroke and heart attack by a third.",
  // "Wikipedia has a recording of a cat meowing because why not?",
  // "The worlds largest cat measured 48.5 inches long. https://www.youtube.com/watch?v=gc5M0aGc_EI",
  // "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypts pharaohs.",
  // "A cats purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment. Similarly, the frequency of a domestic cats purr is the same at which muscles and bones repair themselves.",
  // "Adult cats only meow to communicate with humans.",
  "বিশ্বের সবচেয়ে ধনী বিড়ালের মূল্য 1 কোটি  30 লাখ ডলার তার মালিক  মারা যাওয়ার পরে সে সব টাকা পায়ে ।",
  // "Your cat recognizes your voice but just acts too cool to care (probably because they are).",
  "বিড়াল প্রায়ই ল্যাকটোজ সহ্য করতে পারে না, তাই তাদের দুধ দেওয়া বন্ধ করুন!",
  "বিড়াল তাদের দৈর্ঘ্যের ছয় গুণ পর্যন্ত লাফ দিতে পারে",
  "বিড়াল 33টি বিভিন্ন প্রজাতির বিলুপ্তিতে অবদান রেখেছে।",
  "বিড়াল বেঁচে থাকার জন্য সমুদ্রের জল পান করতে পারে ",
  // "Cheetahs communicate by purring and meowing like housecats, they cannot roar like big cats (e.g. lions).",
];

const langName = "bengali",
  langISO = "ben",
  langLocale = "in",
  langLocaleName = "India";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
