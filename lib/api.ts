import type { Post } from "@/lib/types"

// Mock data for blog posts
const posts: Post[] = [
  {
    id: "1",
    title: "The Evolution of Rap: From Old School to Modern Hip-Hop",
    excerpt: "Explore the rich history of rap music, from its origins in the Bronx to today's global phenomenon.",
    content:
      "Rap music has undergone a remarkable evolution since its inception in the 1970s. Born in the Bronx, New York, it began as a form of expression for marginalized communities, giving voice to their struggles and experiences.\n\nThe old school era of the 1980s saw pioneers like Grandmaster Flash, Run-DMC, and Public Enemy laying the groundwork with their innovative beats and socially conscious lyrics. This period was characterized by simple drum machines, funk samples, and straightforward rhyme schemes.\n\nThe 1990s marked the golden age of hip-hop, with artists like Tupac Shakur, The Notorious B.I.G., and Nas elevating the genre with complex storytelling and introspective themes. The East Coast-West Coast rivalry also defined this era, tragically culminating in the deaths of two of rap's greatest icons.\n\nAs we entered the 2000s, rap continued to diversify with the rise of Southern rap, crunk, and snap music. Artists like Lil Wayne, T.I., and OutKast brought new sounds and styles to the mainstream.\n\nToday's rap landscape is more varied than ever, with subgenres like trap, mumble rap, and drill coexisting alongside more traditional styles. Artists like Kendrick Lamar, J. Cole, and Drake have achieved unprecedented commercial success while maintaining lyrical depth.\n\nThe digital age has democratized rap music production and distribution, allowing independent artists to build careers without major label support. Social media and streaming platforms have created new pathways to success, changing how artists connect with fans.\n\nAs rap continues to evolve, it remains a powerful cultural force, influencing fashion, language, and social movements worldwide. Its journey from block parties in the Bronx to global dominance is a testament to its enduring appeal and adaptability.",
    author: "Marcus Johnson",
    date: "2023-05-15",
    coverImage: "https://consequence.net/wp-content/uploads/2023/08/hiphop-songs-social.jpg",
    tags: ["history", "hip-hop", "music", "culture"],
  },
  {
    id: "2",
    title: "Kendrick Lamar's 'To Pimp a Butterfly': A Masterpiece 8 Years Later",
    excerpt: "Revisiting Kendrick Lamar's groundbreaking album and its lasting impact on hip-hop and social discourse.",
    content:
      "When Kendrick Lamar released 'To Pimp a Butterfly' on March 15, 2015, few could have predicted its seismic impact on both hip-hop and the broader cultural landscape. Eight years later, the album stands not just as Lamar's magnum opus, but as one of the most important musical works of the 21st century.\n\nMusically, 'To Pimp a Butterfly' represented a bold departure from contemporary hip-hop trends. While trap beats dominated the airwaves, Lamar crafted a rich sonic tapestry that drew from jazz, funk, soul, and spoken word. Working with producers like Flying Lotus, Thundercat, and Terrace Martin, he created a sound that was simultaneously innovative and deeply rooted in Black musical traditions.\n\nLyrically, the album is a tour de force of storytelling and social commentary. Lamar explores themes of racial identity, systemic oppression, survivor's guilt, and self-love with unparalleled depth and nuance. Tracks like 'Alright' became anthems for the Black Lives Matter movement, while 'The Blacker the Berry' confronted intraracial tensions with unflinching honesty.\n\nThe album's cultural significance extended far beyond music charts. It arrived at a crucial moment in American history, as racial tensions were heightened following the killings of Trayvon Martin, Michael Brown, and many others. Lamar's unflinching examination of these issues provided both comfort and challenge to listeners grappling with these realities.\n\nAcademically, 'To Pimp a Butterfly' has been the subject of countless analyses, with courses dedicated to studying its literary and social significance at universities across the country. Its complex metaphors and layered narratives continue to reveal new meanings with each listen.\n\nEight years on, the album's influence can be heard in the work of countless artists who have been inspired by Lamar's willingness to prioritize artistic integrity over commercial appeal. Its legacy is secure as a work that not only pushed musical boundaries but also challenged listeners to confront uncomfortable truths about America and themselves.",
    author: "Jasmine Williams",
    date: "2023-03-15",
    coverImage: "https://thetowerlight.com/wp-content/uploads/2019/03/kendrick-lamar-pimp-butterfly-cover-1200x630.jpg",
    tags: ["kendrick lamar", "album review", "classics", "social impact"],
  },
  {
    id: "3",
    title: "The Rise of Drill Music: From Chicago to Global Phenomenon",
    excerpt:
      "How drill music spread from Chicago's South Side to become a worldwide movement, transforming along the way.",
    content:
      "Drill music, characterized by its dark, violent lyrics and trap-influenced beats, emerged from Chicago's South Side around 2011. Chief Keef's 'I Don't Like' catapulted the genre into the mainstream, capturing the harsh realities of life in some of Chicago's most disadvantaged neighborhoods.\n\nWhat distinguished drill from other rap subgenres was its unfiltered portrayal of street life. Artists like Lil Durk, G Herbo (formerly Lil Herb), and King Louie rapped about their lived experiences with violence, poverty, and survival, often naming real people and places in their lyrics. This authenticity resonated with listeners but also drew criticism for potentially glorifying violence.\n\nThe production style of drill was equally distinctive, featuring menacing beats typically set at around 60-70 BPM, heavy 808 bass lines, and sinister melodies. Producers like Young Chop helped define this sound, creating instrumentals that matched the grim lyrical content.\n\nAs drill spread beyond Chicago, it underwent fascinating regional transformations. In the UK, artists adopted the style but infused it with elements of grime and UK garage, creating a unique hybrid. Figures like Headie One, Central Cee, and the late Pop Smoke in Brooklyn further evolved the sound, incorporating their local slang and cultural references.\n\nNew York drill emerged as a powerful force around 2019, spearheaded by Pop Smoke and producers like 808Melo who blended UK drill's sliding bass patterns with New York's aggressive rap tradition. Following Pop Smoke's tragic death in 2020, artists like Fivio Foreign have carried the torch, bringing drill to mainstream success.\n\nDrill has continued its global journey, with scenes developing in Australia, France, Ireland, and beyond. Each region adds its own cultural flavor while maintaining the core elements that make drill distinctive.\n\nDespite ongoing controversies and attempts by authorities to suppress it (including removing videos from YouTube and canceling concerts), drill music has proven remarkably resilient. It has evolved from a hyperlocal Chicago phenomenon to a global movement that gives voice to marginalized communities worldwide, demonstrating hip-hop's enduring power as a vehicle for authentic storytelling.",
    author: "Darnell Thompson",
    date: "2023-07-22",
    coverImage: "https://tfr.agency/wp-content/uploads/drill-1024x576.jpg",
    tags: ["drill", "chicago", "uk drill", "pop smoke"],
  },
  {
    id: "4",
    title: "Breaking Down J. Cole's '4 Your Eyez Only' - A Conceptual Masterpiece",
    excerpt: "An in-depth analysis of J. Cole's powerful concept album that tells a story of life, death, and legacy.",
    content:
      "Released in 2016, J. Cole's '4 Your Eyez Only' stands as one of his most cohesive and emotionally resonant works. On the surface, it's a collection of 10 tracks that explore themes of love, fatherhood, and mortality. But deeper listening reveals a complex narrative structure that elevates the album to the status of a conceptual masterpiece.\n\nThe album operates on two parallel storylines. One follows Cole's personal journey into marriage and fatherhood, while the other tells the story of James McMillan Jr., a fictional character (though likely based on real people in Cole's life) who is killed at age 22, leaving behind a daughter. The album is framed as a recording meant for James's daughter to listen to when she's old enough to understand her father's life and the circumstances of his death.\n\nThe album opens with 'For Whom the Bell Tolls,' setting a somber tone as it contemplates suicide and despair. This transitions into 'Immortal,' where Cole raps from James's perspective about the cycle of crime and violence that many young Black men find themselves trapped in.\n\n'Deja Vu' and 'Ville Mentality' further develop both narratives, with Cole exploring romance and James reflecting on his desire to escape street life. 'She's Mine Pt. 1' and 'She's Mine Pt. 2' form a powerful pair, with the former describing falling in love and the latter celebrating the birth of a daughter—both Cole's actual experiences and parallel events in James's life.\n\n'Change' marks a pivotal moment, as James resolves to transform his life for his daughter's sake, only to be killed before he can fully realize this transformation. The album culminates in the title track, a powerful 8-minute finale where Cole directly addresses James's daughter, explaining her father's life choices and expressing his love for her.\n\nWhat makes '4 Your Eyez Only' exceptional is Cole's ability to blur the lines between his story and James's, creating a powerful meditation on Black fatherhood, legacy, and mortality. The sparse production—often just piano, bass, and drums—creates an intimate atmosphere that foregrounds the narrative.\n\nCritically acclaimed for its storytelling and emotional depth, the album debuted at number one on the Billboard 200 and was certified platinum. More importantly, it demonstrated Cole's growth as an artist willing to sacrifice commercial appeal for artistic integrity, using his platform to tell stories that might otherwise go unheard.",
    author: "Alicia Foster",
    date: "2023-02-10",
    coverImage: "https://teensinprint.com/wp-content/uploads/2023/03/stephen-leonardi-uwbHjySAhqg-unsplash-1000x600.jpg",
    tags: ["j cole", "album analysis", "concept albums", "storytelling"],
  },
  {
    id: "5",
    title: "The Women Revolutionizing Rap: Breaking Barriers in a Male-Dominated Genre",
    excerpt:
      "From Queen Latifah to Megan Thee Stallion, how female rappers have fought for recognition and reshaped hip-hop.",
    content:
      "Hip-hop has historically been dominated by male voices, but women have been integral to the genre's evolution since its inception. Despite facing double standards, sexism, and limited opportunities, female rappers have consistently broken barriers and expanded the possibilities of rap music.\n\nThe 1980s and early 1990s saw pioneering artists like Roxanne Shanté, MC Lyte, and Queen Latifah establish themselves in the male-dominated landscape. Queen Latifah's 'U.N.I.T.Y.' directly confronted the misogyny prevalent in hip-hop culture, while Salt-N-Pepa brought female sexuality to the forefront with hits like 'Push It' and 'Let's Talk About Sex.'\n\nThe late 1990s marked a commercial breakthrough for female rappers. Lauryn Hill's 'The Miseducation of Lauryn Hill' remains one of the most acclaimed hip-hop albums ever, seamlessly blending rap with R&B and addressing complex themes of love, motherhood, and spirituality. Meanwhile, Missy Elliott revolutionized the sound and visual aesthetics of hip-hop with her futuristic approach and production innovations.\n\nThe early 2000s saw Lil' Kim and Foxy Brown embrace explicit sexuality in their lyrics, reclaiming the male gaze and turning it into a source of empowerment. Eve and Trina established themselves as formidable lyricists who could go toe-to-toe with any male counterpart.\n\nAfter a period of reduced visibility for women in mainstream rap, Nicki Minaj emerged as a dominant force in the 2010s. Her technical skill, versatile flow, and larger-than-life persona helped her break numerous chart records and open doors for a new generation.\n\nToday, we're witnessing an unprecedented golden era for female rap. Artists like Cardi B, Megan Thee Stallion, Doja Cat, and City Girls have achieved massive commercial success while maintaining creative control of their images and narratives. The diversity among current female rappers is striking, from Rapsody's conscious lyricism to Rico Nasty's punk-influenced sound.\n\nWhat's particularly notable about the current wave is the solidarity among female rappers, with collaborations like 'WAP' demonstrating how women can amplify each other's success rather than competing for the limited spots historically allocated to them.\n\nAs we look to the future, emerging artists like Ice Spice, GloRilla, and Flo Milli are further expanding the possibilities of what female rap can be, ensuring that women's voices will continue to shape hip-hop for generations to come.",
    author: "Tiana Rodriguez",
    date: "2023-08-05",
    coverImage: "https://images.squarespace-cdn.com/content/v1/5b7daccd36099bdf85fb2f76/1549038372080-1CGIMHSGVUEB1RPS3G7G/ke17ZwdGBToddI8pDm48kOB2OupOKASzB0A6_-IvL2V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYlcyplCgv95DdMBk-x9RJhxztYD1w1ryhiPx85z-nMuPbgGo70Di_mcebCcFu9X9w/banner.jpg?format=1500w",
    tags: ["female rappers", "women in hip-hop", "representation", "music industry"],
  },
  {
    id: "6",
    title: "The Art of Sampling: How Hip-Hop Transforms Musical History",
    excerpt:
      "Exploring how sampling has been central to hip-hop's development and its complex relationship with musical tradition.",
    content:
      "Sampling—the practice of incorporating portions of existing recordings into new compositions—has been fundamental to hip-hop since its earliest days. What began as DJs looping breaks from funk and soul records at block parties has evolved into a sophisticated art form that raises fascinating questions about creativity, copyright, and cultural heritage.\n\nThe Bronx pioneers of the 1970s, like DJ Kool Herc, Grandmaster Flash, and Afrika Bambaataa, laid the groundwork by isolating and extending the instrumental breaks from records to keep dancers moving. This technique evolved with technology, as drum machines and samplers made it possible to chop, manipulate, and recombine sounds with unprecedented precision.\n\nProducers like Marley Marl, the Bomb Squad, and DJ Premier developed distinctive approaches to sampling in the 1980s and early '90s. The Bomb Squad's production for Public Enemy created dense sonic collages from dozens of samples, while DJ Premier favored minimalist arrangements that highlighted carefully chosen jazz snippets and scratched hooks.\n\nThe golden age of sampling was curtailed by a series of copyright lawsuits, most notably Grand Upright Music v. Warner Bros. Records (1991), which established that unauthorized sampling constituted copyright infringement. This legal shift forced producers to either pay for sample clearance—often prohibitively expensive—or find new approaches.\n\nDespite these challenges, sampling has remained central to hip-hop production. Producers like J Dilla, Madlib, and The Alchemist have pushed the art form forward, manipulating samples beyond recognition or digging for increasingly obscure records to sample. Kanye West's early work demonstrated how sped-up soul samples could create a distinctive sound, while producers like Just Blaze showed how samples could be combined with live instrumentation.\n\nBeyond its technical aspects, sampling represents a dialogue between past and present. When producers sample jazz, funk, or soul records, they're not just borrowing sounds but connecting with and recontextualizing Black musical traditions. This practice has preserved and introduced older music to new generations, with many sampled artists experiencing renewed interest in their work.\n\nThe debate around sampling continues to evolve. While some view it as appropriation, others see it as a form of homage and cultural continuity. What's clear is that sampling has expanded our understanding of musical creativity, challenging the Western emphasis on originality by highlighting the value of reinterpretation and transformation.\n\nAs technology continues to advance, with AI now capable of generating sample-like sounds, the art of sampling will undoubtedly continue to evolve. But its core essence—finding new meaning in existing sounds—remains a testament to hip-hop's innovative spirit.",
    author: "Raymond Chen",
    date: "2023-04-18",
    coverImage: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3A3L443GOJDHZCXGZS5X42OC2A.png",
    tags: ["sampling", "production", "music history", "copyright"],
  },
  {
    id: "7",
    title: "Rap's Global Expansion: How Hip-Hop Adapts to Local Cultures",
    excerpt:
      "From French rap to K-hip-hop, examining how countries around the world have embraced and transformed rap music.",
    content:
      "Hip-hop, born in the Bronx in the 1970s, has become one of America's most significant cultural exports, taking root in countries across the globe. What makes this global expansion particularly fascinating is how each region adapts rap to reflect local languages, musical traditions, and social realities.\n\nFrance developed one of the earliest and most robust hip-hop scenes outside the United States. French rap emerged in the 1980s and gained prominence in the 1990s with groups like IAM and Supreme NTM addressing issues facing immigrant communities in the banlieues. Today, artists like PNL and Booba have achieved massive success by blending trap influences with distinctly French sensibilities.\n\nThe UK initially struggled to find its authentic rap voice, often mimicking American styles. This changed with the emergence of grime in the early 2000s, a distinctly British genre pioneered by artists like Wiley and Dizzee Rascal. Grime's frenetic energy, rapid-fire delivery, and electronic production created a template for British rap that has since evolved into UK drill and other subgenres.\n\nIn Latin America, reggaeton incorporated rap elements to create a new sound that has conquered global charts. Meanwhile, countries like Cuba developed their own rap traditions, with groups like Orishas blending hip-hop with traditional Cuban music.\n\nAfrica has seen explosive growth in rap across the continent. South African hip-hop evolved from kwaito into a diverse scene with artists rapping in multiple languages. Nigeria's scene blends Afrobeats with rap, while Senegal's politically conscious rap movement has become a powerful voice for youth.\n\nIn Asia, South Korea has developed a particularly vibrant hip-hop culture. K-hip-hop artists like Epik High, Jay Park, and more recently MINO and Zico have created a distinctive sound that respects hip-hop traditions while incorporating Korean musical elements. The rise of labels like AOMG and H1GHR MUSIC has further legitimized Korean rap.\n\nJapan's hip-hop scene dates back to the 1980s and has developed its own unique aesthetic, with artists like Kohh gaining international recognition. Meanwhile, China has seen the rise of rap despite government censorship, highlighted by the popularity of shows like 'The Rap of China.'\n\nWhat unites these diverse manifestations of hip-hop is how they all maintain core elements of the culture—beats, rhymes, and often graffiti and breakdancing—while addressing local concerns and incorporating regional musical traditions. This adaptability speaks to hip-hop's universal appeal as a form of expression for marginalized voices and youth culture worldwide.\n\nAs digital platforms continue to connect global hip-hop communities, we're seeing increasing collaboration across borders, creating new hybrid styles that transcend geographic boundaries while still honoring local roots.",
    author: "Omar Sanchez",
    date: "2023-06-30",
    coverImage: "https://media.npr.org/assets/img/2023/08/10/hiphop50_future1_custom-a25d51922b51ea2e7df7ef4006d7f672cd9b659d.jpg",
    tags: ["global hip-hop", "international rap", "cultural exchange", "music trends"],
  },
  {
    id: "8",
    title: "The Business of Rap: How Streaming Changed the Game",
    excerpt: "Examining how streaming platforms have revolutionized rap music's business model and artist careers.",
    content:
      "The transition from physical albums to digital streaming has fundamentally transformed the music industry, with particularly profound implications for rap music. This shift has altered everything from how artists release music to how they build careers and generate revenue.\n\nIn the pre-streaming era, success in rap typically followed a predictable path: sign to a major label, release singles to radio, drop an album, tour, and repeat. This model favored established gatekeepers who controlled access to distribution channels and promotional resources. Independent artists faced significant barriers to entry, often relying on mixtapes and underground networks to build followings.\n\nThe rise of streaming platforms like Spotify, Apple Music, and YouTube has democratized distribution, allowing artists to reach global audiences without major label backing. This has coincided with rap becoming the most popular genre on streaming services, creating unprecedented opportunities for emerging artists.\n\nThe economics of streaming have incentivized different release strategies. Rather than the traditional album cycle, many rap artists now favor frequent single releases or shorter projects to maintain consistent visibility on playlists and algorithms. The importance of creating 'playlist-friendly' tracks has influenced creative decisions, sometimes favoring shorter songs with immediate hooks.\n\nPlaylist placement has become crucial currency in the streaming economy. Curators at streaming platforms wield significant influence, capable of breaking new artists through placements on popular playlists like Spotify's RapCaviar. This has created new power dynamics and gatekeepers, though arguably more accessible ones than in the radio era.\n\nSocial media platforms have become inextricably linked with streaming success. Artists like Lil Nas X and Doja Cat have leveraged viral moments on TikTok to drive streams, while others use Instagram and Twitter to create narratives that encourage fans to engage with their music. The line between marketing and content creation has blurred.\n\nThe data-driven nature of streaming has also changed how labels scout and develop talent. Artists who demonstrate streaming potential through independent releases often secure more favorable deals than in the past, though questions remain about the long-term sustainability of streaming royalties for most artists.\n\nDespite these transformations, certain fundamentals remain unchanged. Building a dedicated fan base, creating distinctive music, and developing a compelling personal brand are still essential for long-term success. What's changed is that artists now have more direct access to their audience and more control over their careers.\n\nAs we look to the future, emerging technologies like NFTs and social tokens may further reshape rap's business model, potentially creating new revenue streams and ownership models. What's clear is that the most successful artists will be those who can adapt to these evolving dynamics while maintaining artistic integrity.",
    author: "Michelle Carter",
    date: "2023-01-25",
    coverImage: "https://media.pitchfork.com/photos/5c76cde28a62e1373c013ebd/2:1/w_2560%2Cc_limit/SoundcloudRap.jpg",
    tags: ["music business", "streaming", "industry", "digital music"],
  },
  {
    id: "9",
    title: "The Poetry of Rap: Literary Techniques in Hip-Hop Lyricism",
    excerpt:
      "Analyzing the sophisticated wordplay, metaphors, and narrative techniques that make rap a contemporary poetic form.",
    content:
      "While rap music is often celebrated for its beats and cultural impact, its lyrical complexity deserves equal recognition. The best rap lyrics employ sophisticated literary techniques that rival traditional poetry, creating works of verbal art that reward close analysis and repeated listening.\n\nRhyme in rap extends far beyond simple end rhymes. MCs like Rakim pioneered complex rhyme schemes in the 1980s, using internal rhymes, multisyllabic rhymes, and slant rhymes to create intricate patterns. Artists like Eminem have pushed this technical virtuosity to new heights, sometimes rhyming entire phrases or constructing nested rhyme structures that span multiple bars.\n\nMetaphor and simile are fundamental to rap lyricism. When Nas raps 'My poetry's deep, I never fell,' in 'N.Y. State of Mind,' he's using metaphor to compare his lyrics to an ocean. Kendrick Lamar's 'Swimming Pools (Drank)' uses alcohol as an extended metaphor for various forms of escape and pressure. These figurative techniques allow rappers to convey complex ideas in compact, evocative language.\n\nAlliteration, assonance, and consonance create musicality beyond rhyme. GZA's 'Liquid Swords' is filled with alliterative phrases like 'Life as a shorty shouldn't be so rough,' where the repeated 'sh' sound creates sonic cohesion. These techniques help lyrics flow smoothly and emphasize key words.\n\nWordplay and double entendre allow rappers to pack multiple meanings into single phrases. Jay-Z's lyrics are particularly rich in double meanings, as in 'Moment of Clarity' when he raps 'I dumb down for my audience / And double my dollars,' simultaneously explaining and demonstrating his commercial strategy.\n\nNarrative techniques in rap range from linear storytelling to complex, fragmented perspectives. Slick Rick's 'Children's Story' exemplifies straightforward narrative, while songs like Kendrick Lamar's 'Sing About Me, I'm Dying of Thirst' employ multiple narrators and shifting viewpoints to create a multidimensional story.\n\nExtended metaphors and conceptual frameworks often structure entire songs or albums. Nas's 'I Gave You Power' adopts the perspective of a gun to explore violence, while Lupe Fiasco's 'The Cool' develops a complex allegory about the seductions of street life.\n\nThese literary techniques aren't merely ornamental—they serve rap's fundamental purpose of communicating lived experiences and social realities. The density and complexity of rap lyrics allow artists to convey nuanced perspectives on topics from systemic racism to personal struggle.\n\nAcademic institutions have increasingly recognized rap's literary merit, with universities offering courses analyzing hip-hop lyrics alongside traditional poetry. This recognition affirms what fans have long known: at its best, rap represents a sophisticated form of contemporary poetry that both builds on and extends literary traditions.",
    author: "Kiara Washington",
    date: "2023-09-12",
    coverImage: "https://www.thesaurus.com/e/wp-content/uploads/2023/08/20230802_states_poetry-1920x1080-1.jpg",
    tags: ["lyricism", "poetry", "wordplay", "literary analysis"],
  },
  {
    id: "10",
    title: "The Influence of Atlanta on Modern Rap: How the South Got Something to Say",
    excerpt:
      "Tracing Atlanta's rise from hip-hop underdog to the genre's dominant creative force over the past two decades.",
    content:
      "When André 3000 of OutKast famously declared 'The South got something to say' at the 1995 Source Awards, he was challenging the hip-hop establishment that had long dismissed Southern rap. Nearly three decades later, Atlanta has not only gained respect but has become the undisputed center of hip-hop innovation, fundamentally reshaping the sound and business of rap music.\n\nAtlanta's rise began in the 1990s with the emergence of labels like LaFace and So So Def. OutKast's blend of funk, soul, and Southern distinctiveness created an alternative to the dominant East and West Coast sounds, while Goodie Mob coined the term 'Dirty South' to describe the region's emerging identity. T.I., Ludacris, and Jeezy further established Atlanta's commercial viability in the early 2000s.\n\nThe mid-2000s saw the rise of snap music and crunk, with artists like Lil Jon and D4L creating club-ready anthems that emphasized hooks and energy over traditional lyricism. This period marked a shift toward dance-oriented rap that would influence the genre for years to come.\n\nGucci Mane emerged as a pivotal figure, releasing a prolific stream of mixtapes that built a devoted following and established a template for independent success. His raw authenticity and distinctive vocal style influenced countless artists who followed.\n\nThe trap sound, characterized by 808 bass, skittering hi-hats, and synthesized melodies, became Atlanta's signature contribution to hip-hop production. Producers like Zaytoven, Mike WiLL Made-It, and Metro Boomin developed distinctive approaches to trap that have become the dominant sound in mainstream rap.\n\nYoung Thug revolutionized rap vocals with his melodic, sometimes abstract approach, pushing the boundaries of what rap could sound like. His influence can be heard in artists across the country who have adopted elements of his style.\n\nAtlanta's impact extends beyond sonics to business models. The city pioneered the use of mixtapes as a primary vehicle for artist development, bypassing traditional industry structures. Quality Control Music exemplifies Atlanta's entrepreneurial spirit, building a rap empire with artists like Migos and Lil Baby.\n\nThe city's collaborative ecosystem has been crucial to its success. Atlanta artists and producers frequently work together, creating a distinctive regional sound while allowing for constant evolution. Studios like Patchwerk and Means Street have served as creative hubs where artists exchange ideas and develop new approaches.\n\nToday, artists like 21 Savage, Future, and Playboi Carti continue Atlanta's tradition of innovation, while newer voices like Lil Baby and Gunna have achieved massive success by building on the foundation laid by their predecessors.\n\nAtlanta's dominance represents more than just a geographical shift in hip-hop; it signifies a fundamental change in how rap music sounds, how it's created, and how it's distributed. The South didn't just have something to say—it transformed the conversation entirely.",
    author: "DeAndre Mitchell",
    date: "2023-07-08",
    coverImage: "https://media.npr.org/assets/img/2020/08/02/essay-1-joelle-avelino_wide-086bee7767b2b6f12845ccaaf3f52f48d3e5ecae.jpg",
    tags: ["atlanta", "southern rap", "trap", "regional sounds"],
  },
  {
    "id": "11",
    "title": "Drake's Global Impact: How One Artist Redefined Modern Hip-Hop",
    "excerpt": "Examining how Drake bridged rap and pop while creating a blueprint for success that transformed the music industry.",
    "content": "When Aubrey 'Drake' Graham emerged from Toronto in the late 2000s, few could have predicted how thoroughly he would transform hip-hop's sound, business model, and global reach. From his early mixtapes to his record-breaking streaming numbers, Drake has redefined what success looks like in modern music.\n\nDrake's rise began with the 2009 mixtape 'So Far Gone,' which showcased his unique ability to blend vulnerable introspection with ambitious confidence. His signing to Lil Wayne's Young Money Entertainment positioned him within hip-hop while his background as a television actor on 'Degrassi' gave him crossover appeal.\n\nMusically, Drake pioneered a sound that merged rap with R&B sensibilities, creating a template that countless artists would follow. Working closely with producer Noah '40' Shebib, he developed a atmospheric, moody sonic palette that became instantly recognizable. His willingness to sing as well as rap opened new possibilities for hip-hop expression.\n\nWith albums like 'Take Care' (2011) and 'Nothing Was the Same' (2013), Drake established himself as both a critical and commercial force. His introspective lyrics about fame, relationships, and insecurity resonated with a generation navigating similar themes in the social media age.\n\nDrake's business acumen proved as influential as his music. He leveraged social media masterfully, turning phrases into memes and album releases into cultural events. His OVO (October's Very Own) brand expanded beyond music into fashion and business ventures, creating a blueprint for artist entrepreneurship.\n\nThe Toronto native also globalized hip-hop in unprecedented ways. His embrace of international sounds—from UK grime to Jamaican dancehall to Nigerian afrobeats—brought these influences into the mainstream while expanding his worldwide appeal. His 2016 album 'Views' and its single 'One Dance' demonstrated his global approach, becoming streaming phenomena.\n\nDrake's impact on the business of music cannot be overstated. He recognized the shift to streaming earlier than most, releasing mixtapes like 'If You're Reading This It's Too Late' (2015) directly to digital platforms. His 2018 album 'Scorpion' broke numerous streaming records, confirming his understanding of how modern music is consumed.\n\nHis influence extends to artist development as well. Through his OVO Sound label, he's nurtured talents like PartyNextDoor and Majid Jordan, extending his sound through a roster of like-minded artists.\n\nDespite facing criticism and high-profile feuds, Drake's cultural dominance has remained remarkably consistent for over a decade. Albums like 'Certified Lover Boy' (2021) and 'Her Loss' (2022) continued his commercial success while evolving his sound.\n\nPerhaps most significantly, Drake created a new archetype for what a hip-hop superstar could be: emotionally expressive, genre-fluid, and globally minded. His willingness to show vulnerability challenged hip-hop's traditional masculine posturing, while his melodic approach expanded the genre's sonic possibilities.\n\nAs streaming continues to dominate music consumption and genre boundaries become increasingly fluid, Drake's early recognition of these trends appears prescient. His legacy lies not just in his own catalog but in how thoroughly he transformed the landscape for everyone who followed.",
    "author": "Marcus Thompson",
    "date": "2023-09-15",
    "coverImage": "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24786672/DRAKE_ANIMATION.gif?quality=90&strip=all&crop=7.8125,0,84.375,100",
    "tags": ["drake", "toronto", "ovo", "global influence"]
  },
  {
    "id": "12",
    "title": "Nicki Minaj's Reign: How the Queen of Rap Built Her Empire",
    "excerpt": "Exploring how Nicki Minaj broke barriers, redefined female rap, and built a lasting legacy in a male-dominated industry.",
    "content": "When Nicki Minaj burst onto the scene in the late 2000s, female rappers were severely underrepresented in mainstream hip-hop. Over a decade later, her influence is undeniable—she's not only secured her place as one of rap's most successful artists regardless of gender, but she's also created opportunities for a new generation of women in hip-hop.\n\nOnika Tanya Maraj-Petty's journey began in Queens, New York, where the Trinidad-born artist developed the fierce technical skills and theatrical flair that would become her signature. Her early mixtapes caught the attention of Lil Wayne, leading to her signing with Young Money Entertainment in 2009.\n\nMinaj's 2010 debut album 'Pink Friday' announced her as a commercial force, with hits like 'Super Bass' showcasing her ability to create pop crossover moments while maintaining her rap credibility. The album's success challenged the prevailing industry belief that female rappers couldn't achieve mainstream success.\n\nWhat set Minaj apart was her versatility. She could deliver rapid-fire, technically complex verses that displayed her pure rapping ability, as on 'Monster,' her scene-stealing collaboration with Kanye West. Yet she could also create pop confections and dance tracks, expanding her audience beyond traditional hip-hop fans.\n\nHer use of alter egos—from the aggressive Roman Zolanski to the proper British Harajuku Barbie—showcased her theatrical approach to performance and allowed her to explore different facets of her artistry. This character-driven approach influenced a generation of artists who followed.\n\nMinaj's impact extended beyond music. Her distinctive aesthetic, combining anime influences, Harajuku fashion, and bold color choices, created a visual identity as recognizable as her sound. Her elaborate wigs, colorful costumes, and signature pink branding built a comprehensive artistic vision.\n\nAs her career progressed with albums like 'Pink Friday: Roman Reloaded' (2012) and 'The Pinkprint' (2014), Minaj continued to balance commercial success with artistic growth. Songs like 'Anaconda' became cultural phenomena while tracks like 'Pills N Potions' revealed her emotional depth.\n\nMinaj's business acumen proved as formidable as her artistic talents. She built an empire that included fragrance lines, clothing collections, and endorsement deals with major brands. Her Beats by Dre collaboration and MAC Viva Glam campaign demonstrated her marketing power.\n\nPerhaps most significantly, Minaj succeeded in a hip-hop landscape that had historically marginalized female voices. She refused to be pitted against other women, eventually embracing her role as a mentor to emerging female rappers. Her success created space for the diverse range of female rap talent that has emerged in recent years.\n\nWith 'Queen' (2018) and subsequent releases, Minaj reinforced her status while continuing to evolve. Her loyal fanbase, self-named the Barbz, represents one of music's most dedicated fan communities, mobilizing to support her releases and defend her legacy.\n\nMinaj's technical prowess—her complex rhyme schemes, varied flows, and distinctive vocal delivery—ensured her respect within hip-hop circles. Meanwhile, her pop sensibilities and larger-than-life persona brought rap to audiences who might otherwise have remained unreached.\n\nAs female rap experiences a renaissance with artists like Cardi B, Megan Thee Stallion, and Doja Cat achieving unprecedented success, Nicki Minaj's pioneering role cannot be overstated. She didn't just succeed within the existing system—she transformed it, creating a template for female rap superstardom that balanced authenticity with ambition.",
    "author": "Jasmine Williams",
    "date": "2023-10-22",
    "coverImage": "https://www.thenation.com/wp-content/uploads/2024/02/BENBASSAT-Nicki_Minaj-Stephen-ftr.jpg",
    "tags": ["nicki minaj", "female rap", "queens", "young money"]
  },

]

interface GetPostsOptions {
  page?: number
  search?: string
}

export async function getPosts({ page = 1, search = "" }: GetPostsOptions) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const postsPerPage = 6

  // Filter posts by search term
  const filteredPosts = posts.filter((post) => {
    if (!search) return true

    const searchLower = search.toLowerCase()
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower) ||
      post.author.toLowerCase().includes(searchLower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  })

  // Calculate pagination
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const currentPage = Math.max(1, Math.min(page, totalPages))

  // Get posts for current page
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage,
  }
}

export async function getPostById(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return posts.find((post) => post.id === id) || null
}

export async function getRelatedPosts(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const currentPost = posts.find((post) => post.id === id)

  if (!currentPost) return []

  // Find posts with similar tags
  const relatedPosts = posts
    .filter((post) => post.id !== id) // Exclude current post
    .map((post) => {
      // Count matching tags
      const matchingTags = post.tags.filter((tag) => currentPost.tags.includes(tag)).length

      return { ...post, matchingTags }
    })
    .sort((a, b) => b.matchingTags - a.matchingTags) // Sort by most matching tags
    .slice(0, 3) // Get top 3 related posts
    .map(({ matchingTags, ...post }) => post) // Remove the matchingTags property

  return relatedPosts
}

