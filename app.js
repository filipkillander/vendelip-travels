const trips = [
  {
    city: "Barcelona",
    country: "Spanien",
    themeClass: "theme-barcelona",
    dates: "28 april 2026 till 1 maj 2026",
    fit: "Bäst om ni vill ha en storstad med kvällspuls, gotiska gränder, långa luncher och den där lite slitna elegansen som gör att en plats känns levd snarare än uppställd.",
    timing:
      "Ruttsnapshotarna visar flera direktval ARN–BCN. De lägsta priserna drar gärna mot sen utresa, men Barcelona går också att få till med snyggare tider om ni accepterar ett lite högre flygpris.",
    baggage:
      "Jag har lagt på 1 500 kr för bagage, så att Barcelona inte ser billigare ut på papper än den faktiskt blir i verkligheten.",
    caveat:
      "Barcelona håller ihop fint på flygsidan. Det som springer iväg är i stället de hotell som faktiskt ger rätt känsla i Barri Gòtic och runt de äldre kvarteren.",
    visuals: {
      city: {
        label: "Stadskänsla",
        title: "Barcelona i kvällsljus",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Skyline%20Barcelona,%20December%202025.jpg?width=1800",
        source:
          "https://commons.wikimedia.org/wiki/File:Skyline_Barcelona,_December_2025.jpg",
      },
      area: {
        label: "Hotellområde",
        title: "Gothic Quarter",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Gothic%20Quarter,%20Barcelona,%20Spain%20%28Unsplash%29.jpg?width=1800",
        source:
          "https://commons.wikimedia.org/wiki/File:Gothic_Quarter,_Barcelona,_Spain_(Unsplash).jpg",
      },
    },
    options: [
      {
        tier: "Budget",
        hotel: "Hotel Gotico",
        room: "Dubbel- eller tvåbäddsrum · ej återbetalningsbar",
        transportHotelSek: 9971,
        tripTotalSek: 15971,
        hotelSek: 6133,
        flightSek: 1538,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Ej återbetalningsbar",
        taxNote: "Stadsskatt på 6,27 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Det här är fortfarande Barcelona-kortet som bäst håller ihop mot er faktiska transportbudget. Läget är rätt, och exakta datumsidan ligger fortfarande precis under 10k när bil, parkering, flyg och bagage räknas in.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-bcn/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/es/gotico.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Gotico%20Barcelona",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-BCN",
            url: "https://www.trip.com/flights/airport-arn-city-bcn/",
          },
          {
            label: "Booking Hotel Gotico · exakt datum",
            url: "https://www.booking.com/hotel/es/gotico.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Gothic Quarter-bildkälla",
            url: "https://commons.wikimedia.org/wiki/File:Gothic_Quarter,_Barcelona,_Spain_(Unsplash).jpg",
          },
        ],
      },
      {
        tier: "Mitt i prick",
        hotel: "Duquesa de Cardona",
        room: "Standard dubbelrum · fri avbokning",
        transportHotelSek: 11627,
        tripTotalSek: 17627,
        hotelSek: 7790,
        flightSek: 1538,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Fri avbokning till 27 april 2026",
        taxNote: "Stadsskatt på 6,27 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Det här är Barcelona-valet som bäst matchar er brief när boutique-känsla väger tyngre än att pressa sista kronan. Du får mer hotellromantik och ett tydligare vuxet uttryck än budgetkortet.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-bcn/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/es/duquesadecardona.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Duquesa%20de%20Cardona%20Barcelona",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-BCN",
            url: "https://www.trip.com/flights/airport-arn-city-bcn/",
          },
          {
            label: "Booking Duquesa de Cardona · exakt datum",
            url: "https://www.booking.com/hotel/es/duquesadecardona.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Barcelona skyline 2025",
            url: "https://commons.wikimedia.org/wiki/File:Skyline_Barcelona,_December_2025.jpg",
          },
        ],
      },
      {
        tier: "Utökad",
        hotel: "Duquesa de Cardona",
        room: "Deluxe dubbelrum inkl. frukost · fri avbokning",
        transportHotelSek: 14653,
        tripTotalSek: 20653,
        hotelSek: 10815,
        flightSek: 1538,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Fri avbokning till 27 april 2026",
        taxNote: "Stadsskatt på 6,27 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Om Barcelona vinner på ren känsla är det här den version som faktiskt gör hotellet till en del av resan. Det är också här Barcelona tydligt lämnar er ursprungliga ram och blir ett medvetet stretch-val.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-bcn/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/es/duquesadecardona.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Duquesa%20de%20Cardona%20Barcelona",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-BCN",
            url: "https://www.trip.com/flights/airport-arn-city-bcn/",
          },
          {
            label: "Booking Duquesa de Cardona · exakt datum",
            url: "https://www.booking.com/hotel/es/duquesadecardona.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Gothic Quarter-bildkälla",
            url: "https://commons.wikimedia.org/wiki/File:Gothic_Quarter,_Barcelona,_Spain_(Unsplash).jpg",
          },
        ],
      },
    ],
  },
  {
    city: "Paris",
    country: "Frankrike",
    themeClass: "theme-paris",
    dates: "28 april 2026 till 1 maj 2026",
    fit: "Bäst om ni vill ge efter för caféliv, vänsterbank, små hotellbarer och den sortens storstadsromantik som känns som att resa in i sin egen favoritfilm.",
    timing:
      "Paris-rutten är stark på pappret med flera direktalternativ. Det man behöver se upp med är mindre själva flyget och mer vilken flygplats och vilka tider som faktiskt ger en snygg helhet.",
    baggage:
      "Jag har lagt på 1 200 kr för bagage och tillägg, eftersom Paris gärna ser billigt ut i första sökningen men mindre förlåtande ut när extras börjar komma på.",
    caveat:
      "Paris är shortlistans tydligaste hjärta-före-budget-val. Det är inte flyget som fäller kalkylen, utan hotellpriserna i de kvarter ni faktiskt vill bo i.",
    visuals: {
      city: {
        label: "Stadskänsla",
        title: "Seine i kvällsljus",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Seine%20River%20in%20Paris%20%2847138441792%29.jpg?width=1800",
        source:
          "https://commons.wikimedia.org/wiki/File:Seine_River_in_Paris_(47138441792).jpg",
      },
      area: {
        label: "Hotellområde",
        title: "Saint-Germain",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Faubourg%20Saint-Germain,%20Paris,%20France%20%28Unsplash%29.jpg?width=1800",
        source:
          "https://commons.wikimedia.org/wiki/File:Faubourg_Saint-Germain,_Paris,_France_(Unsplash).jpg",
      },
    },
    options: [
      {
        tier: "Budget",
        hotel: "Dauphine Saint Germain",
        room: "Dubbelrum · ej återbetalningsbar",
        transportHotelSek: 13104,
        tripTotalSek: 19104,
        hotelSek: 10097,
        flightSek: 1007,
        baggageSek: 1200,
        driveParkingSek: 800,
        flex: "Ej återbetalningsbar",
        taxNote: "Stadsskatt på 5,53 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Det här är billigaste Paris-adressen som fortfarande känns som vänsterbanken och inte som ett avkall på hela resans idé. Men Paris är dyrt exakt de här nätterna, så även budgetkortet hamnar klart över er ursprungsram.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-par/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/fr/dauphinesaintgermain.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Dauphine%20Saint%20Germain%20Paris",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-PAR",
            url: "https://www.trip.com/flights/airport-arn-city-par/",
          },
          {
            label: "Booking Dauphine Saint Germain · exakt datum",
            url: "https://www.booking.com/hotel/fr/dauphinesaintgermain.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Saint-Germain-bildkälla",
            url: "https://commons.wikimedia.org/wiki/File:Faubourg_Saint-Germain,_Paris,_France_(Unsplash).jpg",
          },
        ],
      },
      {
        tier: "Mitt i prick",
        hotel: "Hotel Verneuil Saint-Germain",
        room: "Small Double Room · fri avbokning",
        transportHotelSek: 15274,
        tripTotalSek: 21274,
        hotelSek: 12267,
        flightSek: 1007,
        baggageSek: 1200,
        driveParkingSek: 800,
        flex: "Fri avbokning till 26 april 2026",
        taxNote: "Stadsskatt på 8,45 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Det här är fortfarande min tydligaste Paris-match för er brief: mer boutique, mer lågmäld Saint-Germain-känsla och mer av den vuxna kvartersromantik ni faktiskt gillar.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-par/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/fr/verneuil.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Verneuil%20Saint-Germain%20Paris",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-PAR",
            url: "https://www.trip.com/flights/airport-arn-city-par/",
          },
          {
            label: "Booking Hotel Verneuil · exakt datum",
            url: "https://www.booking.com/hotel/fr/verneuil.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Seine i Paris",
            url: "https://commons.wikimedia.org/wiki/File:Seine_River_in_Paris_(47138441792).jpg",
          },
        ],
      },
      {
        tier: "Utökad",
        hotel: "Hotel Du Quai Voltaire",
        room: "Classic room med flodutsikt · fri avbokning",
        transportHotelSek: 15951,
        tripTotalSek: 21951,
        hotelSek: 12944,
        flightSek: 1007,
        baggageSek: 1200,
        driveParkingSek: 800,
        flex: "Fri avbokning till 26 april 2026",
        taxNote: "Stadsskatt på 8,45 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "När Paris får vara mer romantisk än rationell är det här uppgraderingen jag hade tittat på. Flodutsikten gör något med hela resans ton, även om prislappen tydligt lämnar budgetspåret.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-par/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/fr/du-quai-voltaire.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Du%20Quai%20Voltaire%20Paris",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-PAR",
            url: "https://www.trip.com/flights/airport-arn-city-par/",
          },
          {
            label: "Booking Hotel Du Quai Voltaire · exakt datum",
            url: "https://www.booking.com/hotel/fr/du-quai-voltaire.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Saint-Germain-bildkälla",
            url: "https://commons.wikimedia.org/wiki/File:Faubourg_Saint-Germain,_Paris,_France_(Unsplash).jpg",
          },
        ],
      },
    ],
  },
  {
    city: "Rom",
    country: "Italien",
    themeClass: "theme-rome",
    dates: "28 april 2026 till 1 maj 2026",
    fit: "Bäst om ni vill ha varm kvällsluft, trattorior, torg, vin och den sortens stad som känns nästan löjligt romantisk när den väl sitter.",
    timing:
      "Rutten till Rom är absolut görbar, men exakt på ert datumfönster får man oftare välja mellan lägsta pris och den där snygga, enkla tidtabellen man egentligen vill ha.",
    baggage:
      "Jag har lagt på 1 500 kr för bagage eftersom Rom lätt ser mer lättköpt ut än den faktiskt blir när lågprisuppläggen fått sina tillägg.",
    caveat:
      "Rom ger mest tillbaka när man väljer kvarter med omsorg. Just nu är det tyvärr också en stad där rätt läge kostar mer än den gamla översikten antydde.",
    visuals: {
      city: {
        label: "Stadskänsla",
        title: "Rom över taken",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Rome_Skyline_%288012016319%29.jpg?width=1800",
        source:
          "https://commons.wikimedia.org/wiki/File:Rome_Skyline_(8012016319).jpg",
      },
      area: {
        label: "Hotellområde",
        title: "Trastevere by night",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Maria%20in%20Trastevere%20Night%20%2815302984162%29.jpg?width=1800",
        source:
          "https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Trastevere_Night_(15302984162).jpg",
      },
    },
    options: [
      {
        tier: "Budget",
        hotel: "Leonardo Boutique Hotel Rome Monti",
        room: "Comfort Double Room · ej återbetalningsbar",
        transportHotelSek: 13926,
        tripTotalSek: 19926,
        hotelSek: 10161,
        flightSek: 1465,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Ej återbetalningsbar",
        taxNote: "Stadsskatt på 7,50 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Det här är den mest rationella ingången till Rom just nu, men Rom är betydligt dyrare på exakt hotellnivå än vad den tidigare översikten antydde. Det här kortet är därför mer ett lägsta rimligt Rom än ett egentligt budgetfynd.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-rom/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/it/dei-borgia.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Leonardo%20Boutique%20Hotel%20Rome%20Monti",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-ROM",
            url: "https://www.trip.com/flights/airport-arn-city-rom/",
          },
          {
            label: "Booking Leonardo Boutique Hotel Rome Monti · exakt datum",
            url: "https://www.booking.com/hotel/it/dei-borgia.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Rom över taken",
            url: "https://commons.wikimedia.org/wiki/File:Rome_Skyline_(8012016319).jpg",
          },
        ],
      },
      {
        tier: "Mitt i prick",
        hotel: "Leonardo Boutique Hotel Rome Monti",
        room: "Comfort Double Room inkl. frukost · fri avbokning",
        transportHotelSek: 15757,
        tripTotalSek: 21757,
        hotelSek: 11992,
        flightSek: 1465,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Fri avbokning till 26 april 2026",
        taxNote: "Stadsskatt på 7,50 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Det här är det mest bokningsvänliga Monti-kortet eftersom ni får frukost och fri avbokning utan att byta kvarter. Prismässigt är det dock tydligt ett hjärta-före-budget-val.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-rom/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/it/dei-borgia.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Leonardo%20Boutique%20Hotel%20Rome%20Monti",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-ROM",
            url: "https://www.trip.com/flights/airport-arn-city-rom/",
          },
          {
            label: "Booking Leonardo Boutique Hotel Rome Monti · exakt datum",
            url: "https://www.booking.com/hotel/it/dei-borgia.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Trastevere by night",
            url: "https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Trastevere_Night_(15302984162).jpg",
          },
        ],
      },
      {
        tier: "Utökad",
        hotel: "Hotel Santa Maria",
        room: "Dubbelrum inkl. frukost · delvis återbetalningsbar",
        transportHotelSek: 16049,
        tripTotalSek: 22049,
        hotelSek: 12284,
        flightSek: 1465,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Delvis återbetalningsbar",
        taxNote: "Stadsskatt på 6 EUR per person och natt tillkommer på hotellsidan.",
        note:
          "Om ni väljer Rom med hjärtat är det här uppgraderingen som faktiskt förändrar känslan i resan. Trastevere, innergård och klosterbyggnad ger mer romantik än de mer rationella Monti-korten.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-rom/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/it/santa-maria-roma.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Santa%20Maria%20Rome",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-ROM",
            url: "https://www.trip.com/flights/airport-arn-city-rom/",
          },
          {
            label: "Booking Hotel Santa Maria · exakt datum",
            url: "https://www.booking.com/hotel/it/santa-maria-roma.html?checkin=2026-04-28&checkout=2026-05-01&group_adults=2&no_rooms=1&group_children=0",
          },
          {
            label: "Trastevere by night",
            url: "https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Trastevere_Night_(15302984162).jpg",
          },
        ],
      },
    ],
  },
  {
    city: "Bologna",
    country: "Italien",
    themeClass: "theme-bologna",
    dates: "28 april 2026 till 1 maj 2026",
    fit: "Bäst om ni värderar långa middagar, vinbarer, arkader och lågmäld romantik högre än att själva flygrutten ska vara den smidigaste i listan.",
    timing:
      "Det här är fortfarande shortlistans knöligaste rutt. På exakt era datum ser ett stopp ofta rimligast ut, men på plats känns Bologna mer självklar än vad flyglogiken först antyder.",
    baggage:
      "Jag har lagt på 1 500 kr för att inte låta Bologna vinna på ett för optimistiskt bagagescenario.",
    caveat:
      "Bologna är fortfarande det mest harmoniska totalvalet om ni ser till känsla per krona. Den enda verkliga brasklappen är att flygrutten tjänar mest på en dags flexibilitet.",
    visuals: {
      city: {
        label: "Stadskänsla",
        title: "Piazza Maggiore",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Piazza_Maggiore_bologna.jpg?width=1800",
        source: "https://en.wikipedia.org/wiki/Bologna",
      },
      area: {
        label: "Hotellområde",
        title: "Portiker i kvällsljus",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Bologna,%20Str.%20Maggiore,%20portico.jpg?width=1800",
        source: "https://commons.wikimedia.org/wiki/File:Bologna,_Str._Maggiore,_portico.jpg",
      },
    },
    options: [
      {
        tier: "Budget",
        hotel: "Hotel Porta San Mamolo",
        room: "Dubbel- eller tvåbäddsrum inkl. frukost · ej återbetalningsbar",
        transportHotelSek: 9696,
        tripTotalSek: 15696,
        hotelSek: 5748,
        flightSek: 1648,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Ej återbetalningsbar",
        taxNote: "10 % moms ligger utanför hotellsidans visade pris.",
        note:
          "Det här är fortfarande hela shortlistans bästa lugna romantik per krona. Med dagens exakta hotellpris kliver Bologna åter in som den enda riktigt starka kandidaten nära er 10k-linje.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-blq/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/it/porta-san-mamolo.html",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Porta%20San%20Mamolo%20Bologna",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-BLQ",
            url: "https://www.trip.com/flights/airport-arn-city-blq/",
          },
          {
            label: "Booking Hotel Porta San Mamolo",
            url: "https://www.booking.com/hotel/it/porta-san-mamolo.html",
          },
          {
            label: "Bologna-bildkälla",
            url: "https://commons.wikimedia.org/wiki/File:Piazza_Maggiore_bologna.jpg",
          },
        ],
      },
      {
        tier: "Mitt i prick",
        hotel: "Hotel Porta San Mamolo",
        room: "Dubbel- eller tvåbäddsrum inkl. frukost · fri avbokning",
        transportHotelSek: 10951,
        tripTotalSek: 16951,
        hotelSek: 7003,
        flightSek: 1648,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Fri avbokning till 25 april 2026",
        taxNote: "10 % moms ligger utanför hotellsidans visade pris.",
        note:
          "Det här är Bologna-kortet jag själv hade velat boka först om ni vill låsa stad nu men ändå slippa känna er helt fast. Samma kvarter, bättre trygghet, fortfarande rimligare än Barcelona, Paris och Rom.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-blq/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/it/porta-san-mamolo.html",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Porta%20San%20Mamolo%20Bologna",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-BLQ",
            url: "https://www.trip.com/flights/airport-arn-city-blq/",
          },
          {
            label: "Booking Hotel Porta San Mamolo",
            url: "https://www.booking.com/hotel/it/porta-san-mamolo.html",
          },
          {
            label: "Portiker i Bologna",
            url: "https://commons.wikimedia.org/wiki/File:Bologna,_Str._Maggiore,_portico.jpg",
          },
        ],
      },
      {
        tier: "Utökad",
        hotel: "Hotel Porta San Mamolo",
        room: "Deluxe-lägenhet med kaffemaskin · ej återbetalningsbar",
        transportHotelSek: 11299,
        tripTotalSek: 17299,
        hotelSek: 7351,
        flightSek: 1648,
        baggageSek: 1500,
        driveParkingSek: 800,
        flex: "Ej återbetalningsbar",
        taxNote: "10 % moms ligger utanför hotellsidans visade pris.",
        note:
          "Om Bologna vinner på magkänsla är det här den bästa vuxenuppgraderingen: mer plats, kaffemaskin och samma tysta läge. Det här är ett av få premiumkort i shortlistan som fortfarande håller sig under er stretch på 12k.",
        links: [
          {
            label: "Flygrutt",
            url: "https://www.trip.com/flights/airport-arn-city-blq/",
          },
          {
            label: "Hotell",
            url: "https://www.booking.com/hotel/it/porta-san-mamolo.html",
          },
          {
            label: "Google Maps",
            url: "https://www.google.com/maps/search/?api=1&query=Hotel%20Porta%20San%20Mamolo%20Bologna",
          },
        ],
        sources: [
          {
            label: "Trip.com ARN-BLQ",
            url: "https://www.trip.com/flights/airport-arn-city-blq/",
          },
          {
            label: "Booking Hotel Porta San Mamolo",
            url: "https://www.booking.com/hotel/it/porta-san-mamolo.html",
          },
          {
            label: "Bologna-bildkälla",
            url: "https://commons.wikimedia.org/wiki/File:Piazza_Maggiore_bologna.jpg",
          },
        ],
      },
    ],
  },
];

const compareProfiles = {
  Barcelona: {
    flight: {
      easeScore: 4,
      directness: "Flera direktval",
      timing: "Billigast lutar kväll ut, men morgon finns",
      airportFeel: "BCN är enkel att jobba med",
    },
    country: {
      romanceScore: 4,
      vegoScore: 5,
      vibeScore: 4,
      mood: "Livlig och sen",
      bestFor: "Kaféliv, vinbarer och gotiska kvarter",
      rhythm: "Mest puls i shortlistan",
    },
  },
  Paris: {
    flight: {
      easeScore: 5,
      directness: "Många direktalternativ",
      timing: "Smidigaste flygbilden totalt",
      airportFeel: "Flera flygplatser att välja mellan",
    },
    country: {
      romanceScore: 5,
      vegoScore: 5,
      vibeScore: 5,
      mood: "Klassisk och cafétung",
      bestFor: "Saint-Germain-känsla och kultur",
      rhythm: "Mest ikonisk storstadsromantik",
    },
  },
  Rom: {
    flight: {
      easeScore: 3,
      directness: "Går fint, men kräver kompromiss",
      timing: "Pris och tider linjerar inte alltid",
      airportFeel: "Bra när rätt avgång hittas",
    },
    country: {
      romanceScore: 5,
      vegoScore: 4,
      vibeScore: 5,
      mood: "Filmisk och varm",
      bestFor: "Torg, trattorior och kvällsflanerande",
      rhythm: "Mest stadsvärme och dramatik",
    },
  },
  Bologna: {
    flight: {
      easeScore: 2,
      directness: "Knöligast flyglogik",
      timing: "En dags flex hjälper mycket",
      airportFeel: "Bäst om ni prioriterar stad över rutt",
    },
    country: {
      romanceScore: 4,
      vegoScore: 4,
      vibeScore: 4,
      mood: "Lugnare och mer lokal",
      bestFor: "Mat, vin och lågmäld romantik",
      rhythm: "Mest småskalig av de fyra",
    },
  },
};

const lastCheckedLabel = "12 mars 2026";
const favoritesStorageKey = "varresa-favoriter-v1";
const budgetGoalSek = 10000;
const stretchGoalSek = 12000;
const budgetMeterCapSek = 16000;

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const formatSek = (value) =>
  new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(value);

const getBudgetState = (amount) => {
  if (amount <= budgetGoalSek) {
    return {
      label: "Inom 10k-målet",
      className: "ok",
      delta: `${formatSek(budgetGoalSek - amount)} under mål`,
    };
  }

  if (amount <= stretchGoalSek) {
    return {
      label: "Inom 12k-stretchen",
      className: "stretch",
      delta: `${formatSek(amount - budgetGoalSek)} över 10k`,
    };
  }

  if (amount <= budgetMeterCapSek) {
    return {
      label: "Över er stretch",
      className: "warn",
      delta: `${formatSek(amount - stretchGoalSek)} över 12k`,
    };
  }

  return {
    label: "Klart över er ram",
    className: "warn",
    delta: `${formatSek(amount - stretchGoalSek)} över 12k`,
  };
};

const getBudgetMeterWidth = (amount) =>
  Math.min((amount / budgetMeterCapSek) * 100, 100).toFixed(2);

const app = document.querySelector("#app");

const compareModes = {
  flight: {
    label: "Flyg",
    sorts: [
      { key: "flightPrice", label: "Billigast flyg" },
      { key: "midPackage", label: "Billigast mitt i prick" },
      { key: "ease", label: "Smidigast flyg" },
    ],
  },
  country: {
    label: "Land & känsla",
    sorts: [
      { key: "romance", label: "Mest romantik" },
      { key: "vego", label: "Bäst för vego" },
      { key: "vibe", label: "Mest kvarterskänsla" },
    ],
  },
};

const defaultSortByMode = {
  flight: "midPackage",
  country: "romance",
};

const mobileDefaultTierByCity = {
  Barcelona: "Mitt i prick",
  Paris: "Mitt i prick",
  Rom: "Budget",
  Bologna: "Budget",
};

const loadFavorites = () => {
  try {
    const saved = window.localStorage.getItem(favoritesStorageKey);
    const parsed = JSON.parse(saved ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const state = {
  mode: "flight",
  sort: defaultSortByMode.flight,
  favorites: loadFavorites(),
  openCities: [trips[0].city],
  mobileTierByCity: { ...mobileDefaultTierByCity },
};

const decisionPicks = [
  {
    label: "Bäst totalval inom briefen",
    city: "Barcelona",
    tier: "Mitt i prick",
    reason:
      "Bästa kombinationen av direktflyg, kvarterskänsla, vegetariskt spelrum och en totalsumma som fortfarande håller sig inom er 12k-stretch.",
    featured: true,
  },
  {
    label: "Smidigast inom 10k",
    city: "Barcelona",
    tier: "Budget",
    reason:
      "Det tryggaste sättet att hålla er transportram utan att ge upp gamla kvarter, kvällspuls och enkel flyglogik.",
  },
  {
    label: "Mest känsla per krona",
    city: "Bologna",
    tier: "Budget",
    reason:
      "Det mest romantiska under 10k om ni prioriterar stadskänsla och hotellcharm högre än den smidigaste flygdagen.",
  },
  {
    label: "Bästa boutique-stretch",
    city: "Bologna",
    tier: "Utökad",
    reason:
      "Det tydligaste vuxenvalet inom er stretch: mer hotellkänsla, kaffemaskin och fortfarande under 12k för transport + hotell.",
  },
];

const getTierOption = (trip, tier) => trip.options.find((option) => option.tier === tier);

const makeCityId = (trip) => slugify(trip.city);

const makeOptionId = (trip, option) => `${slugify(trip.city)}--${slugify(option.tier)}`;

const getLowestTransportOption = () =>
  [...trips]
    .flatMap((trip) => trip.options.map((option) => ({ trip, option })))
    .sort((left, right) => left.option.transportHotelSek - right.option.transportHotelSek)[0];

const findOptionById = (optionId) => {
  for (const trip of trips) {
    for (const option of trip.options) {
      if (makeOptionId(trip, option) === optionId) {
        return { trip, option };
      }
    }
  }

  return null;
};

const setOpenCity = (city) => {
  state.openCities = city ? [city] : [];
};

const applyHashToState = (hash) => {
  const targetId = hash.replace(/^#/, "");

  if (!targetId) {
    return false;
  }

  const optionMatch = findOptionById(targetId);

  if (optionMatch) {
    setOpenCity(optionMatch.trip.city);
    state.mobileTierByCity[optionMatch.trip.city] = optionMatch.option.tier;
    return true;
  }

  const cityMatch = trips.find((trip) => makeCityId(trip) === targetId);

  if (cityMatch) {
    setOpenCity(cityMatch.city);
    return true;
  }

  return false;
};

const scrollToHashTarget = (hash) => {
  const targetId = hash.replace(/^#/, "");
  const target = document.getElementById?.(targetId);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const saveFavorites = () => {
  try {
    window.localStorage.setItem(favoritesStorageKey, JSON.stringify(state.favorites));
  } catch {
    // Ignore storage errors and keep the UI usable.
  }
};

const compareSorters = {
  flightPrice: (trip) => getTierOption(trip, "Budget").flightSek,
  midPackage: (trip) => getTierOption(trip, "Mitt i prick").transportHotelSek,
  ease: (trip) => -compareProfiles[trip.city].flight.easeScore,
  romance: (trip) => -compareProfiles[trip.city].country.romanceScore,
  vego: (trip) => -compareProfiles[trip.city].country.vegoScore,
  vibe: (trip) => -compareProfiles[trip.city].country.vibeScore,
};

const sortTripsForCompare = (sortKey) =>
  [...trips].sort((left, right) => {
    const leftScore = compareSorters[sortKey](left);
    const rightScore = compareSorters[sortKey](right);

    if (leftScore !== rightScore) {
      return leftScore - rightScore;
    }

    const leftMid = getTierOption(left, "Mitt i prick").transportHotelSek;
    const rightMid = getTierOption(right, "Mitt i prick").transportHotelSek;
    return leftMid - rightMid;
  });

const renderCompareSummary = () => {
  const cheapestFlight = sortTripsForCompare("flightPrice")[0];
  const cheapestMid = sortTripsForCompare("midPackage")[0];
  const mostRomantic = sortTripsForCompare("romance")[0];

  return `
    <div class="compare-summary">
      <article class="compare-summary-card">
        <span>Billigast flyg</span>
        <strong>${cheapestFlight.city}</strong>
        <p>${formatSek(getTierOption(cheapestFlight, "Budget").flightSek)} för två</p>
      </article>
      <article class="compare-summary-card">
        <span>Billigast mitt i prick</span>
        <strong>${cheapestMid.city}</strong>
        <p>${formatSek(getTierOption(cheapestMid, "Mitt i prick").transportHotelSek)} transport + hotell</p>
      </article>
      <article class="compare-summary-card">
        <span>Mest romantik</span>
        <strong>${mostRomantic.city}</strong>
        <p>${compareProfiles[mostRomantic.city].country.bestFor}</p>
      </article>
    </div>
  `;
};

const renderDecisionSection = () => {
  return `
    <section class="decision-section" id="slutval">
      <div class="decision-head">
        <div>
          <p class="compare-kicker">Sista beslutsrundan</p>
          <h2>Om ni bara ska titta på fyra saker först, börja här</h2>
          <p>
            Toppen här premierar bara kort som faktiskt håller ihop när flyg, bagage,
            bil, parkering och hotell räknas in. Därför lyfts Barcelona och Bologna
            först, medan Paris och Rom ligger kvar längre ner som mer hjärtstyrda men
            tydligt dyrare alternativ på just era datum.
          </p>
        </div>
        <div class="method-meta">
          <span>Appnamn: Vendelip Travels</span>
          <span>Kuraterad för Filip + Vendela</span>
        </div>
      </div>

      <div class="decision-grid">
        ${decisionPicks
          .map((pick) => {
            const trip = trips.find((candidate) => candidate.city === pick.city);
            const option = getTierOption(trip, pick.tier);
            const profile = compareProfiles[trip.city];
            const budgetState = getBudgetState(option.transportHotelSek);
            return `
              <article class="decision-card ${pick.featured ? "featured" : ""}">
                <div class="decision-topline">
                  <span>${pick.label}</span>
                  <p class="status ${budgetState.className}">${budgetState.label}</p>
                </div>
                <h3>${pick.city} · ${pick.tier}</h3>
                <p>${pick.reason}</p>
                <div class="decision-price-row">
                  <div class="decision-meta">
                    <strong>${formatSek(option.transportHotelSek)}</strong>
                    <span>transport + hotell</span>
                  </div>
                  <div class="decision-meta">
                    <strong>${formatSek(option.tripTotalSek)}</strong>
                    <span>total resa inkl. 6 000 kr på plats</span>
                  </div>
                </div>
                <div class="decision-metrics">
                  <div class="metric-box">
                    <span>Flyg idag</span>
                    <strong>${formatSek(option.flightSek)}</strong>
                  </div>
                  <div class="metric-box">
                    <span>Bagage</span>
                    <strong>${formatSek(option.baggageSek)}</strong>
                  </div>
                  <div class="metric-box">
                    <span>Flygläge</span>
                    <strong>${profile.flight.easeScore}/5</strong>
                  </div>
                </div>
                <p class="decision-story">
                  <strong>Flygbedömning:</strong> ${profile.flight.directness}. ${profile.flight.timing}.
                </p>
                <a href="#${makeOptionId(trip, option)}">Till kortet</a>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
};

const renderMobileQuickNav = () => `
  <nav class="mobile-quicknav" aria-label="Snabbnavigering för mobil">
    <div class="mobile-quicknav-track">
      <a href="#slutval">Slutval</a>
      <a href="#favoriter">Favoriter</a>
      <a href="#jamfor">Jämför</a>
      ${trips
        .map((trip) => `<a href="#${makeCityId(trip)}">${trip.city}</a>`)
        .join("")}
    </div>
  </nav>
`;

const renderMethodSection = () => {
  const closestBudget = getLowestTransportOption();

  return `
    <section class="method-section" id="metod">
      <div class="method-head">
        <div>
          <p class="compare-kicker">Så läser ni siffrorna</p>
          <h2>Byggd för att vara lätt att känna i magen och lätt att lita på</h2>
          <p>
            Den här versionen prioriterar exakta hotellpriser framför snygga antaganden.
            Flyg, bagage och bilkostnad ligger kvar som egna delar, så att ni direkt ser
            vad som faktiskt driver totalsumman i varje stad.
          </p>
        </div>
        <div class="method-meta">
          <span>Senast dubbelkollad ${lastCheckedLabel}</span>
          <span>Närmast 10k just nu: ${closestBudget.trip.city} ${closestBudget.option.tier.toLowerCase()}</span>
        </div>
      </div>

      <div class="method-grid">
        <article class="method-card">
          <span>Hotell</span>
          <strong>Exakt datumsida</strong>
          <p>Alla hotellkort bygger nu på 28 april till 1 maj 2026, 2 vuxna och 1 rum.</p>
        </article>
        <article class="method-card">
          <span>Flyg</span>
          <strong>Ruttsnapshot samma dag</strong>
          <p>Flygdelen är billigaste rimliga ruttsignal från dagens flygsidor, medan bagaget läggs separat.</p>
        </article>
        <article class="method-card">
          <span>Totalen</span>
          <strong>Transport + hotell först</strong>
          <p>Kortens huvudsumma är hotell + flyg + bagage + bil/parkering. Sedan visas total resa med ert antagna spend på 6 000 kr.</p>
        </article>
        <article class="method-card">
          <span>Brasklapp</span>
          <strong>Lokala skatter kan tillkomma</strong>
          <p>Flera hotellsidor visar stadsskatt eller moms utanför priset. Det står i varje kort så att ni ser var risken finns.</p>
        </article>
      </div>
    </section>
  `;
};

const renderGuideStrip = () => {
  const smoothest = sortTripsForCompare("ease")[0];
  const bestValue = getLowestTransportOption();
  const bestBalanced = trips.find((trip) => trip.city === "Barcelona");

  return `
    <div class="guide-strip">
      <article class="guide-card">
        <span>För Filip & Vendela just nu</span>
        <strong>Minst flygfriktion: ${smoothest.city}</strong>
        <p>${compareProfiles[smoothest.city].flight.timing}.</p>
      </article>
      <article class="guide-card">
        <span>Närmast er budgetram</span>
        <strong>${bestValue.trip.city} ${bestValue.option.tier.toLowerCase()}</strong>
        <p>${formatSek(bestValue.option.transportHotelSek)} för transport + hotell.</p>
      </article>
      <article class="guide-card">
        <span>Bästa kombon av känsla och rimlighet</span>
        <strong>${bestBalanced.city} mitt i prick</strong>
        <p>${formatSek(getTierOption(bestBalanced, "Mitt i prick").transportHotelSek)} för transport + hotell, med betydligt smidigare flyglogik än Bologna.</p>
      </article>
    </div>
  `;
};

const renderBudgetMeter = (amount) => {
  const state = getBudgetState(amount);

  return `
    <div class="budget-meter-card">
      <div class="budget-meter-copy">
        <span>Mot er transportbudget</span>
        <strong>${state.label}</strong>
        <p>${state.delta}</p>
      </div>
      <div
        class="budget-meter ${state.className}"
        style="--budget-width: ${getBudgetMeterWidth(amount)}%;"
        aria-hidden="true"
      >
        <span class="budget-meter-goal"></span>
        <span class="budget-meter-stretch"></span>
        <span class="budget-meter-fill"></span>
      </div>
    </div>
  `;
};

const renderFavoritesSection = () => {
  const favorites = state.favorites.map(findOptionById).filter(Boolean);

  return `
    <section class="favorites-section" id="favoriter">
      <div class="favorites-head">
        <div>
          <p class="compare-kicker">Favoriter</p>
          <h2>Era pinnade upplägg hamnar här</h2>
          <p>
            Pinna de upplägg som väcker något direkt. Då får ni en egen liten finalista
            högst upp, utan att behöva jaga tillbaka genom hela sidan.
          </p>
        </div>
        <div class="favorites-meta">
          <span>${favorites.length} sparade</span>
          <span>Priser uppdaterade ${lastCheckedLabel}</span>
        </div>
      </div>

      ${
        favorites.length
          ? `
            <div class="favorites-grid">
              ${favorites
                .map(({ trip, option }) => {
                  const optionId = makeOptionId(trip, option);
                  const budgetState = getBudgetState(option.transportHotelSek);
                  return `
                    <article class="favorite-card">
                      <div class="favorite-top">
                        <div>
                          <span class="compare-rank">${trip.city}</span>
                          <h3>${option.tier} · ${trip.country}</h3>
                          <p class="favorite-status ${budgetState.className}">${budgetState.label}</p>
                        </div>
                        <button
                          class="favorite-btn active"
                          type="button"
                          data-favorite-id="${optionId}"
                          aria-pressed="true"
                        >
                          Avpinna
                        </button>
                      </div>
                      <p class="favorite-hotel">${option.hotel}</p>
                      <div class="favorite-prices">
                        <div class="metric-box">
                          <span>Transport + hotell</span>
                          <strong>${formatSek(option.transportHotelSek)}</strong>
                        </div>
                        <div class="metric-box">
                          <span>Total resa</span>
                          <strong>${formatSek(option.tripTotalSek)}</strong>
                        </div>
                      </div>
                      <p>${option.note}</p>
                      <div class="favorite-links">
                        <a href="#${optionId}">Till kortet</a>
                        <a href="${option.links[1].url}" target="_blank" rel="noreferrer">Hotell</a>
                        <a href="${option.links[2].url}" target="_blank" rel="noreferrer">Google Maps</a>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </div>
          `
          : `
            <div class="favorites-empty">
              <strong>Inga favoriter ännu.</strong>
              <p>
                Använd knappen <em>Pinna</em> på valfritt kort så bygger ni snabbt en
                egen shortlist här överst.
              </p>
            </div>
          `
      }
    </section>
  `;
};

const renderCompareCard = (trip, index) => {
  const budgetOption = getTierOption(trip, "Budget");
  const midOption = getTierOption(trip, "Mitt i prick");
  const profile = compareProfiles[trip.city];

  if (state.mode === "flight") {
    return `
      <article class="compare-card">
        <div class="compare-card-head">
          <div>
            <span class="compare-rank">#${index + 1}</span>
            <h3>${trip.city}</h3>
            <p>${trip.country}</p>
          </div>
          <div class="compare-price">
            <span>Flygsnapshot</span>
            <strong>${formatSek(budgetOption.flightSek)}</strong>
          </div>
        </div>

        <div class="compare-metrics">
          <div class="metric-box">
            <span>Mitt i prick</span>
            <strong>${formatSek(midOption.transportHotelSek)}</strong>
          </div>
          <div class="metric-box">
            <span>Bagage</span>
            <strong>${formatSek(budgetOption.baggageSek)}</strong>
          </div>
          <div class="metric-box">
            <span>Smidighet</span>
            <strong>${profile.flight.easeScore}/5</strong>
          </div>
        </div>

        <ul class="compare-points">
          <li><span>Direkthet</span><strong>${profile.flight.directness}</strong></li>
          <li><span>Tidskänsla</span><strong>${profile.flight.timing}</strong></li>
          <li><span>Flygkänsla</span><strong>${profile.flight.airportFeel}</strong></li>
        </ul>
      </article>
    `;
  }

  return `
    <article class="compare-card">
      <div class="compare-card-head">
        <div>
          <span class="compare-rank">#${index + 1}</span>
          <h3>${trip.city}</h3>
          <p>${trip.country}</p>
        </div>
        <div class="compare-price">
          <span>Landston</span>
          <strong>${profile.country.mood}</strong>
        </div>
      </div>

      <div class="score-row">
        <span class="score-pill">Romantik ${profile.country.romanceScore}/5</span>
        <span class="score-pill">Vego ${profile.country.vegoScore}/5</span>
        <span class="score-pill">Vibe ${profile.country.vibeScore}/5</span>
      </div>

      <ul class="compare-points">
        <li><span>Bäst för</span><strong>${profile.country.bestFor}</strong></li>
        <li><span>Tempo</span><strong>${profile.country.rhythm}</strong></li>
        <li><span>Mitt i prick</span><strong>${formatSek(midOption.transportHotelSek)}</strong></li>
      </ul>
    </article>
  `;
};

const renderCompareSection = () => {
  const orderedTrips = sortTripsForCompare(state.sort);
  const modeConfig = compareModes[state.mode];

  return `
    <section class="compare-section" id="jamfor">
      <div class="compare-head">
        <div class="compare-copy">
          <p class="compare-kicker">Snabbjämförelse</p>
          <h2>Snabbsortera shortlistan innan ni fördjupar er</h2>
          <p>
            Tanken här är enkel: ni ska kunna förstå vad som är smidigast att resa till,
            vad som känns mest som ni och vilka städer som kräver att budgeten får ta en smäll.
          </p>
        </div>

        <div class="compare-controls">
          <div class="toggle-row">
            ${Object.entries(compareModes)
              .map(
                ([modeKey, mode]) => `
                  <button
                    class="toggle-btn ${state.mode === modeKey ? "active" : ""}"
                    type="button"
                    data-compare-mode="${modeKey}"
                  >
                    ${mode.label}
                  </button>
                `
              )
              .join("")}
          </div>

          <div class="toggle-row">
            ${modeConfig.sorts
              .map(
                (sort) => `
                  <button
                    class="toggle-btn subtle ${state.sort === sort.key ? "active" : ""}"
                    type="button"
                    data-compare-sort="${sort.key}"
                  >
                    ${sort.label}
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      </div>

      ${renderCompareSummary()}
      ${renderGuideStrip()}

      <div class="compare-grid">
        ${orderedTrips.map((trip, index) => renderCompareCard(trip, index)).join("")}
      </div>
    </section>
  `;
};

const renderMobileTierTabs = (trip, selectedTier) => `
  <div class="mobile-tier-tabs" role="tablist" aria-label="${trip.city} prisnivåer">
    ${trip.options
      .map(
        (option) => `
          <button
            class="toggle-btn subtle mobile-tier-btn ${selectedTier === option.tier ? "active" : ""}"
            type="button"
            data-mobile-city="${trip.city}"
            data-mobile-tier="${option.tier}"
            aria-pressed="${selectedTier === option.tier}"
          >
            ${option.tier}
          </button>
        `
      )
      .join("")}
  </div>
`;

const renderOptionCard = (trip, option, selectedTier) => {
  const optionId = makeOptionId(trip, option);
  const budgetState = getBudgetState(option.transportHotelSek);

  return `
    <article class="option-card ${selectedTier === option.tier ? "is-mobile-active" : ""}" id="${optionId}">
      <div class="option-top">
        <div class="option-badges">
          <span class="tier">${option.tier}</span>
          <span class="status ${budgetState.className}">${budgetState.label}</span>
        </div>
        <button
          class="favorite-btn ${state.favorites.includes(optionId) ? "active" : ""}"
          type="button"
          data-favorite-id="${optionId}"
          aria-pressed="${state.favorites.includes(optionId)}"
        >
          ${state.favorites.includes(optionId) ? "Pinnad" : "Pinna"}
        </button>
      </div>
      <div>
        <h3>${option.hotel}</h3>
        <div class="meta-line">
          <span>${option.room}</span>
        </div>
      </div>

      <div class="price-grid">
        <div class="price-box">
          <span>Transport + hotell</span>
          <strong>${formatSek(option.transportHotelSek)}</strong>
        </div>
        <div class="price-box">
          <span>Total inkl. 6 000 kr på plats</span>
          <strong>${formatSek(option.tripTotalSek)}</strong>
        </div>
      </div>

      ${renderBudgetMeter(option.transportHotelSek)}

      <ul class="breakdown">
        <li><span>Hotellpris från datumsida</span><strong>${formatSek(option.hotelSek)}</strong></li>
        <li><span>Flygrutt idag</span><strong>${formatSek(option.flightSek)}</strong></li>
        <li><span>Bagageestimat</span><strong>${formatSek(option.baggageSek)}</strong></li>
        <li><span>Bil + Arlanda</span><strong>${formatSek(option.driveParkingSek)}</strong></li>
      </ul>

      <p>${option.note}</p>
      <div class="fine-print">
        <span>${option.flex}</span>
        <span>${option.taxNote}</span>
      </div>

      <div class="links">
        ${option.links
          .map(
            (link) =>
              `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
          )
          .join("")}
      </div>

      <div class="sources">
        <span>Källor</span>
        ${option.sources
          .map(
            (source) =>
              `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`
          )
          .join("")}
      </div>
    </article>
  `;
};

const renderTrips = () =>
  trips
    .map(
      (trip) => {
        const selectedTier = state.mobileTierByCity[trip.city] ?? trip.options[1]?.tier ?? trip.options[0].tier;
        const selectedOption = getTierOption(trip, selectedTier) ?? trip.options[0];
        const isOpen = state.openCities.includes(trip.city);
        const budgetState = getBudgetState(selectedOption.transportHotelSek);
        const profile = compareProfiles[trip.city];

        return `
          <section class="city-section ${trip.themeClass}" id="${makeCityId(trip)}">
            <div class="city-mobile-summary">
              <button
                class="city-mobile-toggle"
                type="button"
                data-city-toggle="${trip.city}"
                aria-expanded="${isOpen}"
              >
                <div class="city-mobile-copy">
                  <span>${trip.country}</span>
                  <strong>${trip.city}</strong>
                  <p>${selectedOption.tier} · ${formatSek(selectedOption.transportHotelSek)} · flyg ${profile.flight.easeScore}/5</p>
                </div>
                <div class="city-mobile-side">
                  <span class="status ${budgetState.className}">${budgetState.label}</span>
                  <span class="city-mobile-arrow">${isOpen ? "Stäng" : "Öppna"}</span>
                </div>
              </button>
            </div>

            <div class="city-content ${isOpen ? "is-open" : ""}">
              <div class="city-header">
                <article class="city-copy">
                  <div class="city-kicker">
                    <span class="chip">${trip.country}</span>
                    <span class="chip">${trip.dates}</span>
                  </div>
                  <h2>${trip.city}</h2>
                  <p>${trip.fit}</p>
                  <div class="city-notes">
                    <div class="note"><strong>Tider:</strong> <span>${trip.timing}</span></div>
                    <div class="note"><strong>Bagagelogik:</strong> <span>${trip.baggage}</span></div>
                    <div class="note"><strong>Brasklapp:</strong> <span>${trip.caveat}</span></div>
                  </div>
                </article>
                <aside class="city-visuals">
                  <a class="visual-card" href="${trip.visuals.city.source}" target="_blank" rel="noreferrer">
                    <img src="${trip.visuals.city.image}" alt="${trip.city}" loading="lazy" />
                    <div class="visual-label">
                      <span>${trip.visuals.city.label}</span>
                      <strong>${trip.visuals.city.title}</strong>
                    </div>
                  </a>
                  <a class="visual-card" href="${trip.visuals.area.source}" target="_blank" rel="noreferrer">
                    <img src="${trip.visuals.area.image}" alt="${trip.visuals.area.title}" loading="lazy" />
                    <div class="visual-label">
                      <span>${trip.visuals.area.label}</span>
                      <strong>${trip.visuals.area.title}</strong>
                    </div>
                  </a>
                </aside>
              </div>

              ${renderMobileTierTabs(trip, selectedOption.tier)}

              <div class="options-grid">
                ${trip.options
                  .map((option) => renderOptionCard(trip, option, selectedOption.tier))
                  .join("")}
              </div>
            </div>
          </section>
        `;
      }
    )
    .join("");

const bindCompareControls = () => {
  app.querySelectorAll("[data-compare-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.compareMode;
      state.sort = defaultSortByMode[state.mode];
      render();
    });
  });

  app.querySelectorAll("[data-compare-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sort = button.dataset.compareSort;
      render();
    });
  });

  app.querySelectorAll("[data-favorite-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const favoriteId = button.dataset.favoriteId;

      if (state.favorites.includes(favoriteId)) {
        state.favorites = state.favorites.filter((id) => id !== favoriteId);
      } else {
        state.favorites = [favoriteId, ...state.favorites];
      }

      saveFavorites();
      render();
    });
  });

  app.querySelectorAll("[data-city-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const city = button.dataset.cityToggle;
      state.openCities = state.openCities.includes(city) ? [] : [city];
      render();
    });
  });

  app.querySelectorAll("[data-mobile-tier]").forEach((button) => {
    button.addEventListener("click", () => {
      const city = button.dataset.mobileCity;
      const tier = button.dataset.mobileTier;
      state.mobileTierByCity[city] = tier;
      setOpenCity(city);
      render();
    });
  });

  app.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      const shouldRerender = applyHashToState(hash);

      if (!shouldRerender) {
        return;
      }

      event.preventDefault();
      render();

      if (window.history?.replaceState) {
        window.history.replaceState(null, "", hash);
      } else if (window.location) {
        window.location.hash = hash;
      }

      window.requestAnimationFrame?.(() => scrollToHashTarget(hash));
    });
  });
};

const render = () => {
  app.innerHTML = `${renderMobileQuickNav()}${renderDecisionSection()}${renderFavoritesSection()}${renderMethodSection()}${renderCompareSection()}${renderTrips()}`;
  bindCompareControls();
};

const initialHash = window.location?.hash ?? "";
applyHashToState(initialHash);
render();

if (initialHash) {
  window.requestAnimationFrame?.(() => scrollToHashTarget(initialHash));
}
