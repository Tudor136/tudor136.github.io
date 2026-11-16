/**
 * VICTORIA COSMOS LTD - Interactive Corporate Scripts
 * Trilingual switching (EN / DE / FR), Multi-Driver Roster Selection, Rate Estimator & B2B Inquiries
 */

// --- 1. Multilingual Translations Dictionary (EN / DE / FR) ---
const translations = {
  en: {
    top_info: "📍 UK Corporate HQ: London (Reg. No. 17497277) | Continental Hub: Saarland – Luxembourg – Frankfurt – Grand Est",
    top_portal: "B2B Portal",
    nav_services: "Services",
    nav_roster: "Chauffeur Roster",
    nav_auto: "Fleet Logistics",
    nav_estates: "Private Estates",
    nav_defense: "Defense Support",
    nav_calc: "Rate Estimator",
    nav_about: "About Us",
    nav_contact: "Request Proposal",
    hero_badge: "PREMIER B2B FLEET & EXECUTIVE CHAUFFEUR AGENCY",
    hero_title: 'Flawless Execution in <span class="highlight-gold">Fleet Logistics</span> & Executive Intendance.',
    hero_desc: "Victoria Cosmos Ltd bridges premium UK corporate management with a vetted multi-driver operational bench across Luxembourg, Southwest Germany (Frankfurt, Baden-Baden, Mannheim, Saarland), and Grand Est (Strasbourg, Metz).",
    hero_cta1: "Explore B2B Solutions",
    hero_cta2: "Schedule Dispatch Call",
    stat_zero: "Accident-Free Execution",
    stat_response: "Rapid Regional Response",
    stat_reverse: "EU-UK Reverse Charge VAT",
    stat_dod: "US Commercial Ready",
    pillars_tag: "CAPABILITIES & DIVISIONS",
    pillars_title: "Engineered for Precision, Discretion & Speed",
    pillars_subtitle: "Three dedicated operational pillars delivering turnkey management with zero capital burden on our clients.",
    p1_cat: "AUTOMOTIVE DIVISION",
    p1_title: "Dealership Fleet Relocation & VIP Hol- und Bringservice",
    p1_desc: "Seamless transfer of premium and corporate vehicles across branches in Saarland, Kaiserslautern, Frankfurt Airport, Strasbourg/Metz, and Luxembourg. Full dealer-plate integration with end-to-end digital photo e-PV reports.",
    p1_f1: "✓ Inter-branch inventory shuttles (BMW, Mercedes, Porsche)",
    p1_f2: "✓ White-glove client pick-up and delivery (Hol- und Bringservice)",
    p1_f3: "✓ Frankfurt (FRA), Luxembourg (LUX) & Strasbourg airport positioning",
    p1_f4: "✓ Transparent per-route or consolidated monthly B2B billing",
    card_cta: "Request Master Agreement →",
    badge_exclusive: "EXECUTIVE RETAINER",
    p2_cat: "PRIVATE WEALTH & ESTATES",
    p2_title: "Executive 'Chauffeur Only' (Board / Family Office) & Estate Retainer",
    p2_desc: "Vetted executive chauffeurs driving your Family Office or Board vehicle (5-day continuity backup or monthly retainer) alongside private estate oversight in Luxembourg, Bad Homburg/Frankfurt, Baden-Baden, and Saar-Lor-Lux.",
    p2_f1: "✓ 5-Day Continuity Backup or Monthly Dedicated Retainer",
    p2_f2: "✓ Fleet warming, luxury car staging & garage management",
    p2_f3: "✓ On-demand executive driving in client's own luxury vehicles",
    p2_f4: "✓ Multilingual discretion (English, Italian, German, French, Romanian)",
    card_cta_est: "Inquire Monthly Retainer →",
    p3_cat: "GOVERNMENT & DEFENSE",
    p3_title: "Defense Commercial Support & Ramstein Corridor Logistics",
    p3_desc: "Direct commercial subcontracting for US military commands (USAFE / Ramstein Air Base) and NATO supply chain partners under GPC micro-purchase thresholds with instant electronic billing.",
    p3_f1: "✓ SAM.gov registered / NCAGE eligible partner",
    p3_f2: "✓ Non-tactical material and fleet redistribution",
    p3_f3: "✓ Base gate pick-ups, depot staging, and facility assist",
    p3_f4: "✓ Rapid micro-purchase invoicing under $10,000 via GPC",
    card_cta_def: "DoD Procurement Inquiries →",
    roster_tag: "VETTED SPECIALIST PORTFOLIO",
    roster_title: "Executive Chauffeur & Mobile Fleet Roster",
    roster_subtitle: "Every mandate is backed by a multi-driver agency bench with 100% continuity guarantee. All deployments are contracted strictly through Victoria Cosmos Ltd under NDA and 24-month non-circumvention protection.",
    status_ready: "● Ready for Dispatch",
    status_standby: "● Standby / Retainer",
    r_rate_lbl: "B2B Mandate Rate:",
    r1_badge: "LEAD SENIOR CHAUFFEUR & PRECISION DRIVER",
    r1_name: "Gabriel C.",
    r1_role: "Lead Senior Chauffeur, Estate Intendant & Precision / Picture Car Driver (without risk stunts / ohne Risiko-Stunts)",
    r1_bio: "8+ years accident-free professional driving across luxury sedans (S-Class, Maybach, Porsche, Bentley) and cross-border fleet corridors. Available for Board & Family Office vehicles ('Chauffeur Only'), private estate oversight, and TV/cinema precision camera-car tracking (strictly without risk stunts).",
    r1_t1: "🇮🇹 Italian C1 Native",
    r1_t2: "🇬🇧 English B2 Operational",
    r1_t3: "🇷🇴 Romanian Native",
    r1_t4: "🎬 Picture Car (No Risk Stunts)",
    r1_t5: "🛡️ NDA & VIP Protocol",
    r1_rate: "€ 360 – € 550 / Day • € 5,600+/Mo",
    r1_btn: "Book This Chauffeur (Ref: VCL-GC-79) →",
    r2_name: "Marcus V.",
    r2_role: "Board & Security Chauffeur (Vorstandsfahrer im Kundenfahrzeug)",
    r2_bio: "12+ years serving Single & Multi-Family Offices in Bad Homburg, Frankfurt Bankenviertel, and Baden-Baden (FKB / EDFE FBO tarmac protocol). Specialized in armored/executive wheelhouses (Mercedes S-Guard, BMW 7 Protection) and 5-day continuity replacements.",
    r2_t1: "🇩🇪 German C2 Native",
    r2_t2: "🇬🇧 English C1 Fluent",
    r2_t3: "🛡️ DEKRA D1 Standard",
    r2_t4: "✈️ FBO GAT / EDFE / FKB",
    r2_rate: "€ 490 – € 680 / Day • € 7,400+/Mo",
    r2_btn: "Book This Chauffeur (Ref: VCL-MV-82) →",
    r3_name: "Laurent D.",
    r3_role: "Chauffeur de Maître & Diplomatic Protocol Specialist",
    r3_bio: "10+ years experience with Kirchberg private banks, Senningerberg Family Offices, Luxaviation VIP Terminal (Findel LUX), and European parliamentary delegations in Strasbourg. Available in client-owned vehicles ('Chauffeur Only') or long-term corporate retainer.",
    r3_t1: "🇫🇷 French C2 Native",
    r3_t2: "🇬🇧 English C1 Fluent",
    r3_t3: "🇱🇺 Lux. / Diplomatic Protocol",
    r3_t4: "🏛️ Kirchberg / EU Quarter",
    r3_rate: "€ 380 – € 580 / Day • € 5,800+/Mo",
    r3_btn: "Book This Chauffeur (Ref: VCL-LD-80) →",
    r4_name: "Team Alpha (4-Driver Unit)",
    r4_role: "Mobile Dealership Jockey Squad + 2013 VW CC R-Line Chase-Car",
    r4_bio: "Self-contained 4-driver fleet relocation unit accompanied by our own agency support vehicle (<strong>2013 VW CC R-Line Chase-Car</strong>) for instant crew retrieval and VIP document/key courier runs. Moves 12–20 vehicles/day across dealership branches with real-time photo e-PV and Saturday 0% surcharge.",
    r4_t1: "🚗 4× Vetted Transfer Drivers",
    r4_t2: "🏎️ Incl. VW CC R-Line Chase-Car",
    r4_t3: "📸 Real-Time Photo e-PV",
    r4_t4: "📄 Werkvertrag § 631 BGB (0% VAT)",
    r4_rate: "€ 210 – € 310 / Driver / Day (+ Chase-Car)",
    r4_btn: "Deploy Team Alpha (Ref: VCL-TA-04) →",
    roster_legal_note: "<strong>Strict Agency Non-Circumvention & Dispatch Protocol:</strong> All chauffeurs and jockey units operate under exclusive mandate with <strong>Victoria Cosmos Ltd (UK Reg. No. 17497277)</strong>. Direct solicitation is prohibited (24-month Kundenschutz, €15,000 liquidated damages). Centralized dispatch & contracting: <strong>operations@victoriacosmos.com</strong> | <strong>+49 174 4026367</strong> | <strong>+44 7448 115676</strong>.",
    adv_tag: "THE VICTORIA COSMOS STANDARD",
    adv_title: "Why Automotive Dealerships & Family Offices Partner With Us",
    adv_lead: "We operate under a clear principle: you never buy vehicles or maintain idle payroll. We deliver the operational force, you maintain 100% control over your assets.",
    b1_title: "Zero Asset Overhead",
    b1_desc: "Transfers run on existing dealer plates (Rote Kennzeichen) and client vehicle insurance. Crew retrieval runs via our own 2013 VW CC R-Line Chase-Car.",
    b2_title: "Full German & French Legal Compliance (Zero Staff-Leasing Trap)",
    b2_desc: "Structured strictly as deliverables-based service contracts (Werkvertrag § 631 BGB / Contrat d'entreprise). Eliminates German AÜG and French Marchandage penalties completely.",
    b3_title: "Cross-Border B2B Reverse Charge (0% VAT)",
    b3_desc: "Direct billing from Victoria Cosmos Ltd (UK) to European corporate entities with 0% VAT friction under Article 196 EU VAT Directive.",
    cred_badge: "CORPORATE PROFILE",
    cred_l1: "Jurisdiction:",
    cred_v1: "England & Wales, United Kingdom",
    cred_l2: "Core Activity:",
    cred_v2: "Automotive Logistics & Executive Mobility",
    cred_l3: "Primary Hub:",
    cred_v3: "Saar-Lor-Lux / Rhein-Main / Grand Est",
    cred_l4: "Payment Terms:",
    cred_v4: "Upfront Retainer or Net 7 Days B2B",
    cred_l5: "Language Capabilities:",
    cred_v5: "English, German, French, Italian, Romanian",
    cred_l6: "Support Vehicle:",
    cred_v6: "2013 VW CC R-Line Agency Chase-Car",
    cred_btn: "Download Company Dossier",
    calc_tag: "INSTANT ESTIMATION TOOL",
    calc_title: "Calculate Your B2B Fleet Transfer & Chauffeur Rates",
    calc_subtitle: "Transparent 2026 B2B benchmarks for automotive dealerships, fleet operators, and Family Offices across Luxembourg, Germany, and Grand Est.",
    calc_lbl_route: "Select Transfer Corridor:",
    calc_lbl_freq: "Volume & Service Model (2026):",
    calc_lbl_veh: "Vehicle Category:",
    opt_rt_local: "Neunkirchen ↔ Saarbrücken Hub (Short-Haul <50 km)",
    opt_rt_homburg: "Neunkirchen ↔ Homburg / Zweibrücken (<30 km)",
    opt_rt_ramstein: "Saarland ↔ Kaiserslautern / Ramstein Area (~45 km)",
    opt_rt_trier: "Saarland ↔ Trier / Mosel Corridor (~85 km)",
    opt_rt_metz: "Saarland ↔ Metz / Strasbourg (Grand Est FR, 75–125 km)",
    opt_rt_lux: "Saarland ↔ Luxembourg City / Findel Airport (~115 km)",
    opt_rt_fra: "Saarland Corridor ↔ Frankfurt Airport FRA (~140 km)",
    opt_rt_custom: "Long-Distance / Multi-Stop Transfer (200–500+ km)",
    opt_frq_single: "Single Spot Transfer (Auf eigener Achse)",
    opt_frq_vol: "Rahmenvertrag Volume (≥20 cars/month or Batch ≥3/day)",
    opt_frq_jockey: "Dedicated Jockey / Shuttle SLA (8h–9h Full Day)",
    opt_frq_chauf: "Executive 'Chauffeur Only' in Client Vehicle (10h Day)",
    opt_frq_ret: "Full Monthly Retainer (Dedicated Fleet / Executive SLA)",
    opt_veh_std: "Standard Passenger Car / Fleet Vehicle",
    opt_veh_exec: "Premium / Executive (BMW 7, Mercedes S, Audi A8)",
    opt_veh_exo: "Luxury Supercar / Exotic (Porsche, Bentley, AMG)",
    opt_veh_van: "Commercial Transporter (Sprinter / Minibus ≤ 3.5t)",
    calc_res_title: "ESTIMATED B2B RATE",
    calc_vat_badge: "Reverse Charge (0% VAT B2B)",
    calc_cta_btn: "Lock In This Route / Request Contract",
    contact_tag: "GET STARTED TODAY",
    contact_title: "Request an Official B2B Framework Agreement",
    contact_subtitle: "Contact our corporate dispatch office directly or book a specific chauffeur / mobile jockey unit below.",
    ci_desc: "Executive Mobility, Logistics & Facility Management",
    ci_hq_lbl: "Headquarters:",
    ci_hq_val: "London, England, United Kingdom (Reg. No. 17497277)",
    ci_base_lbl: "Regional Operating Base:",
    ci_base_val: "66538 Neunkirchen (Saarland), Germany<br>(Serving Luxembourg, Frankfurt, Baden-Baden, Grand Est)",
    ci_tel_lbl: "Dispatch & Management Direct:",
    ci_tel_val: "+49 174 4026367 (Operations / DE)<br>+44 7448 115676 (Corporate HQ / UK)",
    ci_mail_lbl: "Official Email:",
    ci_badge: "✓ UK Registered Entity • Reverse Charge Invoicing • Zero Staff-Leasing Trap",
    form_lbl_comp: "Company / Dealership / Family Office *",
    form_lbl_person: "Contact Person & Role *",
    form_lbl_email: "Business Email *",
    form_lbl_phone: "Phone Number *",
    form_lbl_service: "Service of Interest *",
    form_lbl_roster: "Preferred Chauffeur / Unit (Optional):",
    form_lbl_msg: "Project Details / Route Frequency / Pilot Request:",
    form_submit_btn: "Transmit B2B Proposal Request →",
    opt_srv_auto: "B2B Dealership Vehicle Transfers & Mobile Jockey Team",
    opt_srv_estate: "Executive Chauffeur ('Chauffeur Only') & Private Estate Retainer",
    opt_srv_def: "Defense Support / Ramstein Logistics",
    opt_srv_custom: "Picture Car Precision Driving (No Risk Stunts) / Custom B2B",
    opt_unit_any: "First Available Specialist / Dispatch Allocation",
    opt_unit_gc: "Ref: VCL-GC-79 — Gabriel C. (Lead Senior Chauffeur & Precision Driver)",
    opt_unit_mv: "Ref: VCL-MV-82 — Marcus V. (DE/EN Board & Security Chauffeur)",
    opt_unit_ld: "Ref: VCL-LD-80 — Laurent D. (FR/EN/LU Chauffeur de Maître)",
    opt_unit_ta: "Ref: VCL-TA-04 — Team Alpha (4-Driver Jockey Unit + VW CC R-Line Chase-Car)",
    ph_comp: "e.g. Autohaus Porsche Zentrum / Family Office S.A.",
    ph_person: "e.g. Markus Weber, Fleet Manager / Chief of Staff",
    ph_email: "operations@company.de",
    ph_phone: "+49 / +352 / +33 ...",
    ph_msg: "Tell us about your transfer routes, 5-day backup chauffeur dates, or end-of-month peak pilot requirements...",
    ft_copy: "© 2026 Victoria Cosmos Ltd. All rights reserved. Registered in England & Wales (No. 17497277).",
    ft_legal: "Legal Notice"
  },
  de: {
    top_info: "📍 UK Hauptsitz: London (Reg. No. 17497277) | Einsatzbasis: Saarland – Luxemburg – Frankfurt – Grand Est",
    top_portal: "B2B-Portal",
    nav_services: "Leistungen",
    nav_roster: "Chauffeur-Kader",
    nav_auto: "Fuhrparklogistik",
    nav_estates: "Family Office",
    nav_defense: "Militär & DoD",
    nav_calc: "Kalkulator",
    nav_about: "Über Uns",
    nav_contact: "Angebot",
    hero_badge: "ERSTKLASSIGE B2B FUHRPARK- & VORSTANDSFAHRER-AGENTUR",
    hero_title: 'Perfektion in <span class="highlight-gold">Fahrzeug&shy;überführung</span> &amp; exklusiver Intendanz.',
    hero_desc: "Victoria Cosmos Ltd verbindet britisches Corporate Management mit einem geprüften Multi-Chauffeur-Kader im Saarland, Frankfurt/Taunus, Baden-Baden, Mannheim, Luxemburg und Grand Est.",
    hero_cta1: "B2B Lösungen Entdecken",
    hero_cta2: "Dispositions-Gespräch Vereinbaren",
    stat_zero: "100% Unfallfreie Fahrpraxis",
    stat_response: "Reaktionszeit unter 2 Stunden",
    stat_reverse: "0% USt. B2B Reverse Charge",
    stat_dod: "US DoD & NATO zertifizierbar",
    pillars_tag: "UNSERE DIVISIONEN",
    pillars_title: "Präzision, Diskretion und Schnelligkeit",
    pillars_subtitle: "Drei spezialisierte Geschäftsbereiche für maximale Entlastung – vollkommen ohne Investitionsrisiko oder Personalüberhang für Ihr Unternehmen.",
    p1_cat: "AUTOMOBIL-LOGISTIK",
    p1_title: "Fahrzeugüberführung & Mobile Jockey-Teams für Autohäuser",
    p1_desc: "Zuverlässige Überführung von Neu-, Gebraucht- und Leasingfahrzeugen zwischen Filialen im Saarland, Rhein-Main, Baden, Grand Est und Luxemburg – inkl. digitalem Foto-Übergabeprotokoll (e-PV) und eigenem VW CC R-Line Chase-Car.",
    p1_f1: "✓ Filial-Shuttles & Bestandsausgleich (BMW, Mercedes, Porsche)",
    p1_f2: "✓ Repräsentativer VIP Hol- und Bringservice inkl. Einweisung",
    p1_f3: "✓ Flughafen-Positionierung Frankfurt (FRA), Luxemburg (LUX) & Straßburg",
    p1_f4: "✓ Transparente Einzelabrechnung oder monatliche Sammelrechnung",
    card_cta: "Rahmenvertrag anfordern →",
    badge_exclusive: "VORSTANDSFAHRER & RETAINER",
    p2_cat: "FAMILY OFFICE & PRIVATE ANWESEN",
    p2_title: "Ersatz-Vorstandsfahrer („Chauffeur Only“) & Liegenschafts-Intendanz",
    p2_desc: "Diskrete Bereitstellung von Vorstandsfahrern für Ihr Kundenfahrzeug (5-Tage-Backup bei Ausfall/Urlaub oder Monatspauschale) sowie Betreuung privater Anwesen in Luxemburg, Bad Homburg/Frankfurt und Baden-Baden.",
    p2_f1: "✓ 5-Tage Kontinuitäts-Backup oder festes Monats-Retainer",
    p2_f2: "✓ Bewegungsfahrten, Fahrzeugpflege & Garagen-Management",
    p2_f3: "✓ Vorstands- und Familienfahrten im eigenen Kundenfahrzeug",
    p2_f4: "✓ Mehrsprachige Diskretion (Englisch, Italienisch, Deutsch, Französisch, Rumänisch)",
    card_cta_est: "Monatspauschale / Backup anfragen →",
    p3_cat: "VERTEIDIGUNG & REGIERUNG",
    p3_title: "Kommerzielle Unterstützung Air Base Ramstein & NATO-Korridor",
    p3_desc: "Direkte kommerzielle Dienstleistungen für US Air Force Europe (Ramstein Air Base) unterhalb der $10.000 GPC-Mikrobeschaffungsgrenze mit schneller elektronischer Abrechnung.",
    p3_f1: "✓ SAM.gov registrierbar / NCAGE-fähige UK-Gesellschaft",
    p3_f2: "✓ Nichttaktischer Material- und Flottentransfer",
    p3_f3: "✓ Base-Gate-Abholungen, Depot-Bereitstellung & Objektservice",
    p3_f4: "✓ Schnelle GPC-Mikrobeschaffungs-Abrechnung unter $10.000",
    card_cta_def: "DoD Beschaffungsanfrage →",
    roster_tag: "GEPRÜFTES SPEZIALISTEN-PORTFOLIO",
    roster_title: "Unser Executive Chauffeur- & Jockey-Kader",
    roster_subtitle: "Jedes Mandat wird durch unsere Multi-Fahrer-Agentur mit 100% Ausfallsicherheit abgesichert. Alle Einsätze erfolgen exklusiv über die Victoria Cosmos Ltd unter strikter NDA und 24 Monaten Kundenschutz.",
    status_ready: "● Sofort Einsatzbereit",
    status_standby: "● Standby / Retainer",
    r_rate_lbl: "B2B-Mandatstarif (Netto):",
    r1_badge: "LEAD SENIOR CHAUFFEUR & PRÄZISIONSFAHRER",
    r1_name: "Gabriel C.",
    r1_role: "Lead Senior Chauffeur, Liegenschafts-Intendant & Precision / Picture Car Driver (ohne Risiko-Stunts)",
    r1_bio: "Über 8 Jahre unfallfreie Fahrpraxis auf Luxuslimousinen (S-Klasse, Maybach, Porsche, Bentley) und grenzüberschreitenden Flottenkorridoren. Verfügbar als Vorstandsfahrer im Kundenfahrzeug, Liegenschaftsbetreuer sowie für TV-/Film-Präzisionsfahrten (strikt ohne Risiko-Stunts).",
    r1_t1: "🇮🇹 Italienisch C1 Muttersprache",
    r1_t2: "🇬🇧 Englisch B2 Fließend",
    r1_t3: "🇷🇴 Rumänisch Muttersprache",
    r1_t4: "🎬 Picture Car (Ohne Risiko-Stunts)",
    r1_t5: "🛡️ NDA & VIP-Protokoll",
    r1_rate: "360 € – 550 € / Tag • ab 5.600 € / Monat",
    r1_btn: "Chauffeur Buchen (Ref: VCL-GC-79) →",
    r2_name: "Marcus V.",
    r2_role: "Vorstandsfahrer & Sicherheitschauffeur (im Kundenfahrzeug)",
    r2_bio: "12+ Jahre Erfahrung für Single & Multi-Family Offices in Bad Homburg, Frankfurt Bankenviertel und Baden-Baden (FKB / EDFE GAT Vorfeld-Protokoll). Spezialisiert auf Sonderschutz-/Vorstandsfahrzeuge und 5-Tage-Kontinuitätsvertretungen.",
    r2_t1: "🇩🇪 Deutsch C2 Muttersprache",
    r2_t2: "🇬🇧 Englisch C1 Verhandlungssicher",
    r2_t3: "🛡️ DEKRA D1 Standard",
    r2_t4: "✈️ FBO GAT / EDFE / FKB",
    r2_rate: "490 € – 680 € / Tag • ab 7.400 € / Monat",
    r2_btn: "Chauffeur Buchen (Ref: VCL-MV-82) →",
    r3_name: "Laurent D.",
    r3_role: "Chauffeur de Maître & Diplomatisches Protokoll (FR/EN/LU)",
    r3_bio: "10+ Jahre Erfahrung bei Privatbanken auf dem Kirchberg, Family Offices in Senningerberg, am Luxaviation VIP-Terminal (Findel LUX) sowie für EU-Delegationen in Straßburg. Einsatz im Kundenfahrzeug oder auf Monats-Retainer.",
    r3_t1: "🇫🇷 Französisch C2 Muttersprache",
    r3_t2: "🇬🇧 Englisch C1 Fließend",
    r3_t3: "🇱🇺 Lux. / Diplomatie-Protokoll",
    r3_t4: "🏛️ Kirchberg / EU-Viertel",
    r3_rate: "380 € – 580 € / Tag • ab 5.800 € / Monat",
    r3_btn: "Chauffeur Buchen (Ref: VCL-LD-80) →",
    r4_name: "Team Alpha (4-Fahrer-Einheit)",
    r4_role: "Mobiles Autohaus-Jockey-Team + 2013 VW CC R-Line Chase-Car",
    r4_bio: "Autarke 4-Fahrer-Überführungseinheit inklusive eigenem Agentur-Begleitfahrzeug (<strong>2013 VW CC R-Line Chase-Car</strong>) für sofortigen Fahrerrücktransport und VIP-Dokumenten-/Schlüsselkurierfahrten. Bewegt 12–20 Fahrzeuge/Tag inkl. Echtzeit-Foto-e-PV und Samstags-Einsatz mit 0% Zuschlag.",
    r4_t1: "🚗 4× Geprüfte Überführungsfahrer",
    r4_t2: "🏎️ Inkl. VW CC R-Line Chase-Car",
    r4_t3: "📸 Echtzeit-Foto-e-PV",
    r4_t4: "📄 Werkvertrag § 631 BGB (0% USt.)",
    r4_rate: "210 € – 310 € / Fahrer / Tag (+ Chase-Car)",
    r4_btn: "Team Alpha Anfordern (Ref: VCL-TA-04) →",
    roster_legal_note: "<strong>Strikter Agentur-Kundenschutz & Dispositionsprotokoll:</strong> Alle Chauffeure und Jockey-Teams stehen unter exklusivem Mandat der <strong>Victoria Cosmos Ltd (UK Reg. No. 17497277)</strong>. Direkte Abwerbung ist untersagt (24 Monate Kundenschutz, 15.000 € Vertragsstrafe). Zentrale Disposition: <strong>operations@victoriacosmos.com</strong> | <strong>+49 174 4026367</strong> | <strong>+44 7448 115676</strong>.",
    adv_tag: "DER VICTORIA COSMOS STANDARD",
    adv_title: "Warum Autohäuser und Family Offices mit uns arbeiten",
    adv_lead: "Unser Grundsatz: Sie müssen keine eigenen Fahrzeuge anschaffen oder starre Fixgehälter zahlen. Wir stellen die operative Fahr- und Managementkraft bereit.",
    b1_title: "Keine Kapitalbindung / Eigenes Chase-Car",
    b1_desc: "Überführungen erfolgen auf Ihren Händlerkennzeichen (06er) oder regulärer Zulassung; der Rücktransport unserer Fahrer erfolgt über unser eigenes 2013 VW CC R-Line Chase-Car.",
    b2_title: "100% Rechtssicherheit (Werkvertrag § 631 BGB – Kein AÜG-Risiko)",
    b2_desc: "Reine Werk- und Geschäftsbesorgungsverträge mit eigenem Dispositions- und e-PV-Protokoll. Vollkommener Schutz vor verdeckter Arbeitnehmerüberlassung.",
    b3_title: "Grenzüberschreitende Netto-Abrechnung (0% USt.)",
    b3_desc: "Direkte B2B-Rechnungsstellung (UK Ltd an deutsches/luxemburgisches/französisches Unternehmen) mit 0% USt. im Reverse-Charge-Verfahren gem. Art. 196 EU-MwStSystRL.",
    cred_badge: "UNTERNEHMENSPROFIL",
    cred_l1: "Rechtsform & Sitz:",
    cred_v1: "England & Wales, UK (Reg. No. 17497277)",
    cred_l2: "Kernbereich:",
    cred_v2: "Fahrzeuglogistik & Executive Chauffeur",
    cred_l3: "Einsatzgebiet:",
    cred_v3: "Saar-Lor-Lux / Rhein-Main / Baden / Grand Est",
    cred_l4: "Zahlungsziel:",
    cred_v4: "Retainer im Voraus oder 7 Tage Netto B2B",
    cred_l5: "Sprachen im Kader:",
    cred_v5: "Deutsch, Englisch, Französisch, Italienisch, Rumänisch",
    cred_l6: "Begleitfahrzeug:",
    cred_v6: "2013 VW CC R-Line Agentur Chase-Car",
    cred_btn: "Unternehmensprofil Herunterladen",
    calc_tag: "SCHNELLKALKULATOR",
    calc_title: "Kalkulieren Sie Ihren Überführungs- & Chauffeur-Tarif",
    calc_subtitle: "Transparente B2B-Richtwerte (Nov. 2026) für Autohäuser, Flottenbetreiber und Family Offices im Dreiländereck DE–LU–FR.",
    calc_lbl_route: "Strecke / Korridor auswählen:",
    calc_lbl_freq: "Volumen & Servicemodell (2026):",
    calc_lbl_veh: "Fahrzeugkategorie:",
    opt_rt_local: "Neunkirchen ↔ Saarbrücken Hub (Kurzstrecke <50 km)",
    opt_rt_homburg: "Neunkirchen ↔ Homburg / Zweibrücken (<30 km)",
    opt_rt_ramstein: "Saarland ↔ Kaiserslautern / Ramstein (~45 km)",
    opt_rt_trier: "Saarland ↔ Trier / Mosel-Korridor (~85 km)",
    opt_rt_metz: "Saarland ↔ Metz / Straßburg (Grand Est FR, 75–125 km)",
    opt_rt_lux: "Saarland ↔ Luxemburg-Stadt / Findel Airport (~115 km)",
    opt_rt_fra: "Saarland-Korridor ↔ Frankfurt Airport FRA (~140 km)",
    opt_rt_custom: "Langstrecke / Multi-Stopp-Transfer (200–500+ km)",
    opt_frq_single: "Einzeltransfer (Auf eigener Achse)",
    opt_frq_vol: "Rahmenvertrag Volumen (≥20 KFZ/Monat oder ≥3/Tag)",
    opt_frq_jockey: "Dediziertes Jockey- / Shuttle-Tagesteam (8h–9h SLA)",
    opt_frq_chauf: "Executive „Chauffeur Only“ im Kundenfahrzeug (10h-Tag)",
    opt_frq_ret: "Monatliches Executive / Flotten-Retainer (Festkontingent)",
    opt_veh_std: "PKW Standard / Flottenfahrzeug",
    opt_veh_exec: "Oberklasse / Executive (BMW 7er, S-Klasse, A8)",
    opt_veh_exo: "Luxus-Sportwagen / Exotic (Porsche, Bentley, AMG)",
    opt_veh_van: "Transporter / VIP-Van (Sprinter / V-Klasse ≤ 3,5t)",
    calc_res_title: "GESCHÄTZTER B2B-TARIF",
    calc_vat_badge: "Reverse Charge (0% USt. B2B)",
    calc_cta_btn: "Diese Route Sichern / Vertrag Anfordern",
    contact_tag: "JETZT ZUSAMMENARBEITEN",
    contact_title: "Offizielle B2B-Rahmenvereinbarung Anfordern",
    contact_subtitle: "Kontaktieren Sie unsere Disposition direkt oder reservieren Sie einen spezifischen Chauffeur bzw. unser mobiles Jockey-Team.",
    ci_desc: "Executive Mobility, Fuhrparklogistik & Liegenschafts-Intendanz",
    ci_hq_lbl: "Unternehmenssitz (UK):",
    ci_hq_val: "London, England, United Kingdom (Reg. No. 17497277)",
    ci_base_lbl: "Operative Einsatzbasis Kontinent:",
    ci_base_val: "66538 Neunkirchen (Saarland), Deutschland<br>(Einsatzgebiet: Luxemburg, Frankfurt, Baden-Baden, Grand Est)",
    ci_tel_lbl: "Disposition & Geschäftsleitung Direkt:",
    ci_tel_val: "+49 174 4026367 (Disposition / DE)<br>+44 7448 115676 (Corporate HQ / UK)",
    ci_mail_lbl: "Offizielle E-Mail:",
    ci_badge: "✓ UK Limited • 0% USt. Reverse Charge • Werkvertrag § 631 BGB (Kein AÜG)",
    form_lbl_comp: "Unternehmen / Autohaus / Family Office *",
    form_lbl_person: "Ansprechpartner & Position *",
    form_lbl_email: "Geschäftliche E-Mail *",
    form_lbl_phone: "Telefonnummer *",
    form_lbl_service: "Gewünschter Leistungsbereich *",
    form_lbl_roster: "Bevorzugter Chauffeur / Einheit (Optional):",
    form_lbl_msg: "Projektdetails / Streckenfrequenz / Pilot-Anfrage:",
    form_submit_btn: "B2B-Vertragsanfrage Absenden →",
    opt_srv_auto: "B2B Fahrzeugüberführung & Mobiles Jockey-Team",
    opt_srv_estate: "Vorstandsfahrer ('Chauffeur Only') & Liegenschafts-Retainer",
    opt_srv_def: "Defense Support / Ramstein Logistik",
    opt_srv_custom: "Picture Car Präzisionsfahrer (Ohne Risiko-Stunts) / Sonderprojekt",
    opt_unit_any: "Nächstverfügbarer Spezialist / Dispositions-Zuteilung",
    opt_unit_gc: "Ref: VCL-GC-79 — Gabriel C. (Lead Senior Chauffeur & Präzisionsfahrer)",
    opt_unit_mv: "Ref: VCL-MV-82 — Marcus V. (DE/EN Vorstandsfahrer & Security)",
    opt_unit_ld: "Ref: VCL-LD-80 — Laurent D. (FR/EN/LU Chauffeur de Maître)",
    opt_unit_ta: "Ref: VCL-TA-04 — Team Alpha (4er-Jockey-Team + VW CC R-Line Chase-Car)",
    ph_comp: "z. B. Porsche Zentrum / Hedin Automotive / Family Office GmbH",
    ph_person: "z. B. Markus Weber, Leiter Disposition / Chief of Staff",
    ph_email: "disposition@autohaus.de",
    ph_phone: "+49 / +352 / +33 ...",
    ph_msg: "Nennen Sie uns Ihre Überführungsstrecken, Termine für das 5-Tage-Backup oder den Monatsend-Piloten...",
    ft_copy: "© 2026 Victoria Cosmos Ltd. Alle Rechte vorbehalten. Eingetragen in England & Wales (Nr. 17497277).",
    ft_legal: "Rechtlicher Hinweis"
  },
  fr: {
    top_info: "📍 Siège UK : Londres (Reg. No. 17497277) | Base Opérationnelle : Sarre – Luxembourg – Francfort – Grand Est",
    top_portal: "Portail B2B",
    nav_services: "Services",
    nav_roster: "Chauffeurs",
    nav_auto: "Convoyage",
    nav_estates: "Family Office",
    nav_defense: "Défense",
    nav_calc: "Tarifs",
    nav_about: "À Propos",
    nav_contact: "Devis B2B",
    hero_badge: "AGENCE B2B DE CONVOYAGE AUTOMOBILE & CHAUFFEURS DE MAÎTRE",
    hero_title: 'Exécution Irréprochable en <span class="highlight-gold">Logistique de Flottes</span> & Intendance VIP.',
    hero_desc: "Victoria Cosmos Ltd allie la rigueur contractuelle d'une société britannique à une équipe multi-chauffeurs opérationnelle au Luxembourg, dans le Grand Est (Strasbourg, Metz, Nancy) et en Allemagne du Sud-Ouest (Francfort, Baden-Baden, Sarre).",
    hero_cta1: "Découvrir nos Solutions B2B",
    hero_cta2: "Planifier un Appel Dispatch",
    stat_zero: "100% Conduite Sans Sinistre",
    stat_response: "Intervention Régionale < 2h",
    stat_reverse: "TVA 0% Autoliquidation B2B",
    stat_dod: "Éligible Contrats US DoD",
    pillars_tag: "NOS PÔLES D'EXPERTISE",
    pillars_title: "Précision, Discrétion et Réactivité Transfrontalière",
    pillars_subtitle: "Trois divisions B2B dédiées garantissant une continuité opérationnelle totale, sans immobilisation de capital ni passif social RH.",
    p1_cat: "DIVISION AUTOMOBILE B2B",
    p1_title: "Convoyage de Flottes Concessions & Équipe Mobile de Jockeyage",
    p1_desc: "Transfert par la route de véhicules neufs, VO et LLD entre concessions au Luxembourg, Grand Est (Metz, Nancy, Strasbourg), Sarre et Francfort. État des lieux photo numérique (e-PV) en temps réel et véhicule suiveur propre (VW CC R-Line).",
    p1_f1: "✓ Transferts inter-concessions (BMW, Mercedes, Porsche, Audi)",
    p1_f2: "✓ Livraison VIP avec protocole « Mise en main » client",
    p1_f3: "✓ Positionnement aéroports Findel (LUX), Francfort (FRA) & Strasbourg",
    p1_f4: "✓ Facturation mensuelle centralisée HT (0% TVA autoliquidation)",
    card_cta: "Demander un Contrat-Cadre →",
    badge_exclusive: "CHAUFFEUR DE MAÎTRE & RETAINER",
    p2_cat: "FAMILY OFFICE & DOMAINES PRIVÉS",
    p2_title: "Chauffeur de Maître (« Chauffeur Seul ») & Intendance de Propriétés",
    p2_desc: "Mise à disposition de chauffeurs exécutifs conduisant le véhicule de votre Family Office ou Direction (remplacement de continuité de 5 jours ou forfait mensuel) et gestion technique de résidences au Luxembourg, Strasbourg et Baden-Baden.",
    p2_f1: "✓ Forfait continuité 5 jours ou Retainer mensuel dédié",
    p2_f2: "✓ Maintien en condition, préparation flotte de prestige & garage",
    p2_f3: "✓ Conduite exécutive sur les véhicules propres du client",
    p2_f4: "✓ Discrétion multilingue (Français, Anglais, Italien, Allemand, Roumain)",
    card_cta_est: "Demander un Forfait Mensuel →",
    p3_cat: "DÉFENSE & INSTITUTIONS",
    p3_title: "Support Logistique Corridor Ramstein & Institutions Européennes",
    p3_desc: "Sous-traitance commerciale directe pour les commandements américains (USAFE / Ramstein) sous le seuil GPC de 10 000 $ ainsi que pour les délégations diplomatiques et parlementaires à Luxembourg et Strasbourg.",
    p3_f1: "✓ Partenaire éligible SAM.gov / NCAGE (UK Ltd)",
    p3_f2: "✓ Redistribution de matériel non tactique et flottes",
    p3_f3: "✓ Navettes inter-sites, logistique aéroportuaire & support",
    p3_f4: "✓ Facturation électronique rapide GPC sous 10 000 $",
    card_cta_def: "Demande Marchés Publics / DoD →",
    roster_tag: "PORTFOLIO DE SPÉCIALISTES CERTIFIÉS",
    roster_title: "Notre Effectif de Chauffeurs de Maître & Équipes Jockeys",
    roster_subtitle: "Chaque mission est soutenue par notre réserve multi-chauffeurs avec garantie de continuité à 100 %. Toutes les prestations sont facturées par Victoria Cosmos Ltd sous accord de confidentialité (NDA) et clause de non-sollicitation de 24 mois.",
    status_ready: "● Disponible Immédiatement",
    status_standby: "● Standby / Forfait",
    r_rate_lbl: "Tarif B2B HT :",
    r1_badge: "CHAUFFEUR SENIOR PRINCIPAL & CONDUCTEUR DE PRÉCISION",
    r1_name: "Gabriel C.",
    r1_role: "Chauffeur Exécutif Senior, Intendant de Domaine & Conducteur de Précision / Picture Car (sans cascades à risque)",
    r1_bio: "Plus de 8 ans de conduite professionnelle sans accident sur berlines de prestige (Classe S, Maybach, Porsche, Bentley) et corridors transfrontaliers. Disponible en « Chauffeur Seul » sur véhicule de direction/famille, intendance de propriété et conduite de précision cinéma/TV (strictement sans cascades à risque).",
    r1_t1: "🇮🇹 Italien C1 Bilingue",
    r1_t2: "🇬🇧 Anglais B2 Opérationnel",
    r1_t3: "🇷🇴 Roumain Natif",
    r1_t4: "🎬 Picture Car (Sans Cascades à Risque)",
    r1_t5: "🛡️ NDA & Protocole VIP",
    r1_rate: "360 € – 550 € / Jour • dès 5 600 € / Mois",
    r1_btn: "Réserver ce Chauffeur (Réf: VCL-GC-79) →",
    r2_name: "Marcus V.",
    r2_role: "Chauffeur de Direction & Sécurité (Vorstandsfahrer sur véhicule client)",
    r2_bio: "12+ ans d'expérience auprès de Single & Multi-Family Offices à Bad Homburg, Francfort et Baden-Baden (protocole tarmac FBO FKB / EDFE). Spécialiste des berlines blindées/exécutives et des remplacements de continuité de 5 jours.",
    r2_t1: "🇩🇪 Allemand C2 Natif",
    r2_t2: "🇬🇧 Anglais C1 Courant",
    r2_t3: "🛡️ Certifié DEKRA D1",
    r2_t4: "✈️ FBO GAT / EDFE / FKB",
    r2_rate: "490 € – 680 € / Jour • dès 7 400 € / Mois",
    r2_btn: "Réserver ce Chauffeur (Réf: VCL-MV-82) →",
    r3_name: "Laurent D.",
    r3_role: "Chauffeur de Maître & Spécialiste Protocole Diplomatique (FR/EN/LU)",
    r3_bio: "10+ ans d'expérience auprès des banques privées du Kirchberg, des Family Offices de Senningerberg, du terminal VIP Luxaviation (Findel LUX) et des institutions européennes à Strasbourg. Disponible sur véhicule client ou forfait mensuel.",
    r3_t1: "🇫🇷 Français C2 Natif",
    r3_t2: "🇬🇧 Anglais C1 Courant",
    r3_t3: "🇱🇺 Protocole Lux. / Diplomatique",
    r3_t4: "🏛️ Kirchberg / Quartier Européen",
    r3_rate: "380 € – 580 € / Jour • dès 5 800 € / Mois",
    r3_btn: "Réserver ce Chauffeur (Réf: VCL-LD-80) →",
    r4_name: "Équipe Alpha (Unité Mobile 4 Chauffeurs)",
    r4_role: "Escouade Mobile de Jockeyage Concessions + Chase-Car VW CC R-Line 2013",
    r4_bio: "Unité autonome de 4 convoyeurs accompagnée de notre véhicule suiveur d'agence (<strong>2013 VW CC R-Line Chase-Car</strong>) pour la récupération immédiate des équipages et le transport express de clés/documents VIP. Transfère 12 à 20 véhicules/jour avec e-PV photo temps réel et 0 % de majoration le samedi.",
    r4_t1: "🚗 4× Convoyeurs Certifiés",
    r4_t2: "🏎️ Incl. Chase-Car VW CC R-Line",
    r4_t3: "📸 e-PV Photo Temps Réel",
    r4_t4: "📄 Contrat d'Entreprise (0% TVA)",
    r4_rate: "210 € – 310 € / Chauffeur / Jour (+ Chase-Car)",
    r4_btn: "Déployer l'Équipe Alpha (Réf: VCL-TA-04) →",
    roster_legal_note: "<strong>Protocole Strict de Non-Sollicitation & Dispatch :</strong> Tous les chauffeurs et unités de convoyage opèrent sous mandat exclusif de <strong>Victoria Cosmos Ltd (UK Reg. No. 17497277)</strong>. Toute sollicitation directe est interdite (protection client de 24 mois, pénalité forfaitaire de 15 000 €). Dispatch centralisé : <strong>operations@victoriacosmos.com</strong> | <strong>+49 174 4026367</strong> | <strong>+44 7448 115676</strong>.",
    adv_tag: "LE STANDARD VICTORIA COSMOS",
    adv_title: "Pourquoi les Groupes de Distribution & Family Offices nous choisissent",
    adv_lead: "Notre principe : vous n'immobilisez aucun capital et n'alourdissez jamais votre masse salariale fixe. Nous déployons la force opérationnelle, vous gardez 100 % du contrôle de vos actifs.",
    b1_title: "Zéro Immobilisation d'Actifs & Véhicule Suiveur Dédié",
    b1_desc: "Les transferts s'effectuent sous votre assurance flotte ; la rotation de nos chauffeurs est assurée par notre propre véhicule support 2013 VW CC R-Line Chase-Car.",
    b2_title: "Conformité Juridique Totale (Contrat d'Entreprise – Zéro Délit de Marchandage)",
    b2_desc: "Prestations structurées exclusivement au résultat (Contrat d'entreprise / Werkvertrag § 631 BGB) avec Responsable de mission et e-PV numérique propres.",
    b3_title: "Facturation B2B Transfrontalière à 0 % de TVA (Autoliquidation)",
    b3_desc: "Facturation directe depuis Victoria Cosmos Ltd (UK) vers votre société au Luxembourg, en France ou en Allemagne en autoliquidation de TVA (Art. 196 Directive TVA UE).",
    cred_badge: "PROFIL CORPORATIF",
    cred_l1: "Juridiction & Siège :",
    cred_v1: "Angleterre & Pays de Galles, UK (N° 17497277)",
    cred_l2: "Activité Principale :",
    cred_v2: "Logistique Flottes & Chauffeurs de Maître",
    cred_l3: "Hub Opérationnel :",
    cred_v3: "Sarre-Lor-Lux / Grand Est / Rhin-Main",
    cred_l4: "Conditions de Paiement :",
    cred_v4: "Retainer d'avance ou Net 7 Jours B2B",
    cred_l5: "Langues de l'Équipe :",
    cred_v5: "Français, Anglais, Allemand, Italien, Roumain",
    cred_l6: "Véhicule Support :",
    cred_v6: "Chase-Car d'Agence 2013 VW CC R-Line",
    cred_btn: "Télécharger le Dossier Corporatif",
    calc_tag: "SIMULATEUR DE TARIFS B2B",
    calc_title: "Estimez vos Tarifs de Convoyage & Chauffeur Exécutif",
    calc_subtitle: "Grilles tarifaires B2B HT (Novembre 2026) pour groupes de concessions, loueurs et Family Offices dans le triangle Luxembourg – Grand Est – Allemagne.",
    calc_lbl_route: "Sélectionnez le Corridor de Transfert :",
    calc_lbl_freq: "Volume & Modèle de Prestation (2026) :",
    calc_lbl_veh: "Catégorie de Véhicule :",
    opt_rt_local: "Neunkirchen ↔ Sarrebruck Hub (Courte distance <50 km)",
    opt_rt_homburg: "Neunkirchen ↔ Homburg / Zweibrücken (<30 km)",
    opt_rt_ramstein: "Sarre ↔ Kaiserslautern / Zone Ramstein (~45 km)",
    opt_rt_trier: "Sarre ↔ Trèves / Corridor Moselle (~85 km)",
    opt_rt_metz: "Sarre ↔ Metz / Nancy / Strasbourg (Grand Est FR, 75–125 km)",
    opt_rt_lux: "Sarre ↔ Luxembourg-Ville / Aéroport Findel (~115 km)",
    opt_rt_fra: "Corridor Sarre ↔ Aéroport Francfort FRA (~140 km)",
    opt_rt_custom: "Convoyage Longue Distance / Multi-Sites (200–500+ km)",
    opt_frq_single: "Transfert Unitaire par la Route (Spot)",
    opt_frq_vol: "Contrat-Cadre Volume (≥20 véh./mois ou Lot ≥3/jour)",
    opt_frq_jockey: "Journée Jockey / Navette Dédiée (Forfait 8h–9h SLA)",
    opt_frq_chauf: "Chauffeur de Maître « Chauffeur Seul » sur Véhicule Client (10h)",
    opt_frq_ret: "Forfait Mensuel Dédié (Retainer Flotte / Family Office)",
    opt_veh_std: "Berline Standard / Véhicule de Flotte",
    opt_veh_exec: "Berline Exécutive (Classe S, BMW Série 7, Audi A8)",
    opt_veh_exo: "Prestige / Supercar (Porsche, Bentley, Maybach, AMG)",
    opt_veh_van: "Utilitaire / Van VIP (Sprinter / Classe V ≤ 3,5t)",
    calc_res_title: "TARIF B2B HT ESTIMÉ",
    calc_vat_badge: "Autoliquidation (0% TVA B2B)",
    calc_cta_btn: "Bloquer ce Tarif / Demander un Contrat",
    contact_tag: "DÉMARRER UNE COLLABORATION",
    contact_title: "Demander un Contrat-Cadre B2B ou Réserver une Unité",
    contact_subtitle: "Contactez directement notre bureau de dispatch ou sélectionnez un chauffeur / une équipe mobile ci-dessous.",
    ci_desc: "Mobilité Exécutive, Logistique de Flottes & Intendance Privée",
    ci_hq_lbl: "Siège Social (UK) :",
    ci_hq_val: "Londres, Angleterre, Royaume-Uni (Reg. No. 17497277)",
    ci_base_lbl: "Base Opérationnelle Régionale :",
    ci_base_val: "66538 Neunkirchen (Sarre), Allemagne<br>(Couverture : Luxembourg, Grand Est, Francfort, Baden-Baden)",
    ci_tel_lbl: "Dispatch & Direction Direct :",
    ci_tel_val: "+49 174 4026367 (Opérations / DE)<br>+44 7448 115676 (Siège UK)",
    ci_mail_lbl: "E-mail Officiel :",
    ci_badge: "✓ Société UK • Facturation 0% TVA Autoliquidation • Zéro Prêt de Main-d'Œuvre",
    form_lbl_comp: "Société / Concession / Family Office *",
    form_lbl_person: "Personne de Contact & Fonction *",
    form_lbl_email: "E-mail Professionnel *",
    form_lbl_phone: "Téléphone *",
    form_lbl_service: "Prestation Souhaitée *",
    form_lbl_roster: "Chauffeur / Unité Souhaitée (Optionnel) :",
    form_lbl_msg: "Détails du Projet / Fréquence / Test Pilote Fin de Mois :",
    form_submit_btn: "Transmettre la Demande de Contrat B2B →",
    opt_srv_auto: "Convoyage de Flottes Concessions & Équipe Mobile Jockey",
    opt_srv_estate: "Chauffeur de Maître ('Chauffeur Seul') & Intendance Privée",
    opt_srv_def: "Support Défense / Logistique Ramstein",
    opt_srv_custom: "Conducteur de Précision Cinéma/TV (Sans Cascades à Risque) / Sur-Mesure",
    opt_unit_any: "Premier Spécialiste Disponible / Allocation Dispatch",
    opt_unit_gc: "Réf: VCL-GC-79 — Gabriel C. (Chauffeur Senior & Conducteur de Précision)",
    opt_unit_mv: "Réf: VCL-MV-82 — Marcus V. (Chauffeur de Direction DE/EN & Sécurité)",
    opt_unit_ld: "Réf: VCL-LD-80 — Laurent D. (Chauffeur de Maître FR/EN/LU)",
    opt_unit_ta: "Réf: VCL-TA-04 — Équipe Alpha (Escouade 4 Jockeys + Chase-Car VW CC R-Line)",
    ph_comp: "ex. CAR Avenue / Groupe Kroely / Family Office S.A.",
    ph_person: "ex. Jean-Luc Martin, Resp. Logistique VO / Chief of Staff",
    ph_email: "logistique@concession.lu",
    ph_phone: "+352 / +33 / +49 ...",
    ph_msg: "Précisez vos flux de convoyage, dates de remplacement 5 jours ou besoins pour le test pilote de fin de mois...",
    ft_copy: "© 2026 Victoria Cosmos Ltd. Tous droits réservés. Immatriculée en Angleterre et au Pays de Galles (N° 17497277).",
    ft_legal: "Mentions Légales"
  }
};

// --- 2. Language Switcher Logic ---
let currentLang = 'en';

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = e.target.getAttribute('data-lang');
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  updateCalculator();
}

// --- 3. Roster Unit Direct Booking Pre-Fill ---
function selectRosterUnit(refCode, unitLabel, serviceCategory) {
  const interestEl = document.getElementById('interestType');
  const rosterEl = document.getElementById('rosterUnitSelect');
  const msgEl = document.getElementById('messageText');

  if (interestEl && serviceCategory) {
    interestEl.value = serviceCategory;
  }
  if (rosterEl && refCode) {
    rosterEl.value = refCode;
  }
  if (msgEl) {
    if (currentLang === 'de') {
      msgEl.value = `Anfrage für Einheit/Chauffeur [${unitLabel}]: Bitte senden Sie uns ein unverbindliches B2B-Angebot / den Rahmenvertrag (Werkvertrag § 631 BGB, 0% USt. Reverse Charge) für folgenden Einsatzzeitraum: `;
    } else if (currentLang === 'fr') {
      msgEl.value = `Demande de réservation pour [${unitLabel}] : Merci de nous transmettre votre proposition B2B / Contrat-Cadre (TVA 0% autoliquidation) pour les dates ou volumes suivants : `;
    } else {
      msgEl.value = `Booking request for [${unitLabel}]: Please provide your B2B proposal / Master Services Agreement (0% VAT Reverse Charge) for the following dates or transfer volume: `;
    }
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    const compInput = document.getElementById('compName');
    if (compInput) compInput.focus();
  }, 450);
}

// --- 4. Rate Estimator Interactive Logic (Calibrated to Nov 2026 B2B Benchmarks) ---
const routeRates = {
  local: {
    baseMin: 95, baseMax: 130, km: 25,
    descEn: "Short-haul intra-Saarland transfer (<50 km). Includes digital e-PV handover protocol.",
    descDe: "Kurzstrecken-Transfer im Saarland (<50 km). Inkl. digitalem e-PV Übergabeprotokoll.",
    descFr: "Transfert courte distance en Sarre (<50 km). Inclut le protocole photo numérique e-PV."
  },
  homburg: {
    baseMin: 95, baseMax: 125, km: 20,
    descEn: "Local corridor transfer (Neunkirchen – Homburg/Zweibrücken, <30 km).",
    descDe: "Lokaler Korridor-Transfer (Neunkirchen – Homburg/Zweibrücken, <30 km).",
    descFr: "Transfert corridor local (Neunkirchen – Homburg/Zweibrücken, <30 km)."
  },
  ramstein: {
    baseMin: 135, baseMax: 185, km: 45,
    descEn: "Saarland to Ramstein/Kaiserslautern hub. Ideal for US Military Sales & fleet shuttles.",
    descDe: "Saarland nach Kaiserslautern/Ramstein. Ideal für US Military Sales & Filial-Shuttles.",
    descFr: "Corridor Sarre ↔ Kaiserslautern/Ramstein. Idéal pour concessions & flottes US Military Sales."
  },
  trier: {
    baseMin: 165, baseMax: 225, km: 85,
    descEn: "Mosel valley corridor (50–200 km bracket @ 0.95 €/km PKW base).",
    descDe: "Mosel-Korridor (Mittelstrecke 50–200 km @ 0,95 €/km PKW-Basis).",
    descFr: "Corridor vallée de la Moselle (tranche 50–200 km @ 0,95 €/km base VP)."
  },
  metz: {
    baseMin: 110, baseMax: 175, km: 90,
    descEn: "Cross-border Grand Est FR transfer (Metz / Strasbourg, validly registered vehicles only).",
    descDe: "Grenzüberschreitender Grand-Est-Transfer (Metz / Strasbourg, nur regulär zugelassene KFZ).",
    descFr: "Transfert transfrontalier Grand Est (Metz / Nancy / Strasbourg, véhicules immatriculés uniquement)."
  },
  lux: {
    baseMin: 220, baseMax: 310, km: 115,
    descEn: "Cross-border transfer to Luxembourg City / Findel Airport (1.05–1.30 €/km benchmark).",
    descDe: "Grenzüberschreitender Transfer nach Luxemburg / Findel Airport (1,05–1,30 €/km Richtwert).",
    descFr: "Transfert transfrontalier vers Luxembourg-Ville / Aéroport du Findel (référence 1,05–1,30 €/km HT)."
  },
  frankfurt: {
    baseMin: 230, baseMax: 330, km: 140,
    descEn: "Express corridor to Frankfurt Airport (FRA) / Bad Homburg / Rhine-Main hub.",
    descDe: "Express-Transfer zum Flughafen Frankfurt am Main (FRA) / Bad Homburg / Rhein-Main.",
    descFr: "Corridor express vers Francfort Aéroport (FRA) / Bad Homburg / Rhin-Main."
  },
  custom: {
    baseMin: 210, baseMax: 445, km: 350,
    descEn: "Long-distance transfer (200–500+ km @ 0.75–0.85 €/km net).",
    descDe: "Langstrecken-Überführung (200–500+ km @ 0,75–0,85 €/km netto).",
    descFr: "Convoyage longue distance (200–500+ km @ 0,75–0,85 €/km HT)."
  }
};

const vehicleMultipliers = {
  standard: 1.0,
  executive: 1.22,
  exotic: 1.40,
  van: 1.38
};

const frequencyDiscounts = {
  single: 1.0,
  weekly_5: 0.78, // Rahmenvertrag / Sammelaufträge (-20% to -35%)
  jockey_day: 1.0,
  chauffeur_day: 1.0,
  retainer: 0.75
};

function updateCalculator() {
  const route = document.getElementById('routeSelect').value;
  const freq = document.getElementById('frequencySelect').value;
  const veh = document.getElementById('vehicleType').value;

  const data = routeRates[route] || routeRates.local;
  const vehMult = vehicleMultipliers[veh] || 1.0;
  const freqMult = frequencyDiscounts[freq] || 1.0;

  const priceBox = document.getElementById('resultPrice');
  const notesBox = document.getElementById('resultNotes');

  if (freq === 'retainer') {
    let retainerMin = 4650;
    let retainerMax = 6900;
    if (route === 'lux' || route === 'frankfurt' || veh === 'exotic') {
      retainerMin = 5600;
      retainerMax = 8400;
    }
    priceBox.innerHTML = `€ ${retainerMin.toLocaleString()} – € ${retainerMax.toLocaleString()} <span style="font-size: 1rem; color: #94a3b8; font-weight: normal;">/ Month (Netto / HT)</span>`;
    if (currentLang === 'de') {
      notesBox.innerHTML = "Monatliche Bereitstellungspauschale im Voraus (1. Werktag, ~165–173 Std. SLA inkl. Backup-Garantie, Werkvertrag § 631 BGB, 0% USt. Reverse Charge).";
    } else if (currentLang === 'fr') {
      notesBox.innerHTML = "Forfait mensuel B2B payable d'avance (1er jour ouvré, SLA ~165–173h incl. garantie de remplacement, Contrat d'entreprise, TVA 0% autoliquidation).";
    } else {
      notesBox.innerHTML = "Monthly advance B2B retainer (payable on the 1st business day, ~165–173h SLA incl. replacement guarantee, Werkvertrag § 631 BGB, 0% VAT Reverse Charge).";
    }
  } else if (freq === 'jockey_day') {
    let dayMin = 240, dayMax = 310;
    if (route === 'metz') { dayMin = 210; dayMax = 260; }
    if (route === 'lux') { dayMin = 280; dayMax = 350; }
    priceBox.innerHTML = `€ ${dayMin} – € ${dayMax} <span style="font-size: 1rem; color: #94a3b8; font-weight: normal;">/ Day (8h–9h)</span>`;
    if (currentLang === 'de') {
      notesBox.innerHTML = "Dedizierter Jockey-/Shuttle-Tagessatz (8h–9h) für Autohäuser & Vermieter (optional 4-Fahrer Team Alpha + VW CC R-Line Chase-Car @ 0,40–0,55 €/km). Ca. 35% unter den Vollkosten eines Festangestellten (4.590 €/Monat).";
    } else if (currentLang === 'fr') {
      notesBox.innerHTML = "Forfait journalier Jockey / Navette (8h–9h) pour concessions & loueurs (option Équipe Alpha 4 chauffeurs + Chase-Car VW CC R-Line @ 0,40–0,55 €/km HT). Jusqu'à 35% d'économie vs. CDI interne.";
    } else {
      notesBox.innerHTML = "Dedicated Jockey / Fleet Shuttle daily SLA (8h–9h) for dealerships & rental fleets (optional 4-driver Team Alpha + VW CC R-Line Chase-Car @ €0.40–0.55/km). Saves ~35% vs. internal full-time driver cost (€4,590/month).";
    }
  } else if (freq === 'chauffeur_day') {
    let chMin = 330, chMax = 550;
    if (route === 'lux' || route === 'frankfurt') { chMin = 360; chMax = 700; }
    priceBox.innerHTML = `€ ${chMin} – € ${chMax} <span style="font-size: 1rem; color: #94a3b8; font-weight: normal;">/ 10h Day (34–75 €/h)</span>`;
    if (currentLang === 'de') {
      notesBox.innerHTML = "Segment 1 „Chauffeur Only“ (Ersatz-Vorstandsfahrer / Chauffeur de Maître im Kundenfahrzeug, 10h-Paket). Ideal als 5-Tage-Kontinuitäts-Backup. Mehrarbeit: 40–65 €/Std. netto.";
    } else if (currentLang === 'fr') {
      notesBox.innerHTML = "Segment 1 « Chauffeur Seul » (Chauffeur de Maître / Direction dans le véhicule du client, forfait 10h). Idéal en remplacement de continuité de 5 jours. Heures sup. : 40–65 €/h HT.";
    } else {
      notesBox.innerHTML = "Segment 1 'Chauffeur Only' (Executive / Board Driver in client's own vehicle, 10h package). Ideal for 5-day continuity backup mandates. Overtime: €40–65/h net.";
    }
  } else {
    const min = Math.round(data.baseMin * vehMult * freqMult);
    const max = Math.round(data.baseMax * vehMult * freqMult);

    priceBox.innerHTML = `€ ${min} – € ${max}`;
    const desc = currentLang === 'de' ? data.descDe : (currentLang === 'fr' ? data.descFr : data.descEn);
    let suffix = ` (Net per vehicle on own axle. Optional upsells: EV charge ≥80% +€30, wash +€24.95, handover briefing +€30).`;
    if (currentLang === 'de') {
      suffix = ` (Netto pro Fahrzeug auf eigener Achse. Optional: EV-Laden ≥80% +30 €, Wäsche +24,95 €, Einweisung +30 €).`;
    } else if (currentLang === 'fr') {
      suffix = ` (HT par véhicule par la route. Options : recharge EV ≥80% +30 €, lavage anti-pénalité LLD +24,95 €, mise en main +30 €).`;
    }
    notesBox.innerHTML = desc + suffix;
  }
}

document.getElementById('routeSelect').addEventListener('change', updateCalculator);
document.getElementById('frequencySelect').addEventListener('change', updateCalculator);
document.getElementById('vehicleType').addEventListener('change', updateCalculator);

// --- 5. Mobile Menu Toggle ---
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// --- 6. B2B Form Submission Handler (Live Delivery + Mailto Fallback + Local Backup) ---
async function handleFormSubmit() {
  const comp = document.getElementById('compName').value.trim();
  const person = document.getElementById('contactPerson').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const interest = document.getElementById('interestType').value;
  const rosterUnitEl = document.getElementById('rosterUnitSelect');
  const rosterUnit = rosterUnitEl ? rosterUnitEl.value : 'any';
  const msg = document.getElementById('messageText').value.trim();
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');

  const inquiry = {
    company: comp,
    contact: person,
    email: email,
    phone: phone,
    interest: interest,
    preferred_unit: rosterUnit,
    message: msg,
    timestamp: new Date().toISOString()
  };

  // 1. Store local audit backup
  try {
    const existing = JSON.parse(localStorage.getItem('vc_b2b_inquiries') || '[]');
    existing.push(inquiry);
    localStorage.setItem('vc_b2b_inquiries', JSON.stringify(existing));
  } catch (err) {
    // Ignore storage quota errors
  }

  if (submitBtn) {
    submitBtn.disabled = true;
  }

  const subjectLine = `B2B Proposal Request: ${comp} (${interest.toUpperCase()} | Unit: ${rosterUnit})`;
  const mailtoBody = [
    `Company / Dealership / Family Office: ${comp}`,
    `Contact Person: ${person}`,
    `Business Email: ${email}`,
    `Phone: ${phone}`,
    `Service Division: ${interest}`,
    `Preferred Chauffeur / Roster Unit: ${rosterUnit}`,
    `Timestamp: ${inquiry.timestamp}`,
    ``,
    `Project Details / Route Frequency:`,
    msg || '(No additional message provided)'
  ].join('\r\n');
  const mailtoUrl = `mailto:operations@victoriacosmos.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(mailtoBody)}`;

  // 2. Attempt live HTTP POST via FormSubmit AJAX endpoint for operations@victoriacosmos.com
  let deliveredViaApi = false;
  try {
    const response = await fetch('https://formsubmit.co/ajax/operations@victoriacosmos.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: subjectLine,
        _template: 'table',
        company: comp,
        contact_person: person,
        email: email,
        phone: phone,
        service_interest: interest,
        preferred_unit: rosterUnit,
        message: msg || 'Requesting Master Services Agreement & B2B rates',
        submitted_at: inquiry.timestamp
      })
    });
    if (response.ok) {
      const resData = await response.json();
      if (resData && (resData.success === 'true' || resData.success === true)) {
        deliveredViaApi = true;
      }
    }
  } catch (networkErr) {
    deliveredViaApi = false;
  }

  // 3. If API is unactivated or offline, trigger automatic mailto dispatch so zero leads are lost
  if (!deliveredViaApi) {
    window.location.href = mailtoUrl;
  }

  feedback.className = 'form-feedback success';
  if (currentLang === 'de') {
    feedback.innerHTML = `✓ Vielen Dank, ${person}! Ihre Anfrage für <strong>${comp}</strong> (Einheit: <strong>${rosterUnit}</strong>) wurde an unsere Disposition übermittelt. Falls sich Ihr E-Mail-Programm nicht automatisch geöffnet hat, <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">klicken Sie bitte hier für den Direktversand</a>.`;
  } else if (currentLang === 'fr') {
    feedback.innerHTML = `✓ Merci, ${person} ! Votre demande pour <strong>${comp}</strong> (Unité : <strong>${rosterUnit}</strong>) a été transmise à notre bureau de dispatch. Si votre messagerie ne s'est pas ouverte automatiquement, <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">cliquez ici pour envoyer directement</a>.`;
  } else {
    feedback.innerHTML = `✓ Thank you, ${person}! Your inquiry for <strong>${comp}</strong> (Unit: <strong>${rosterUnit}</strong>) has been transmitted to our dispatch desk. If you prefer direct email confirmation, <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">click here to send via your mail client</a>.`;
  }

  if (submitBtn) {
    submitBtn.disabled = false;
  }
  document.getElementById('proposalForm').reset();
}

// Initial calculation run
updateCalculator();
