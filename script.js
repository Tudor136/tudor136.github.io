/**
 * VICTORIA COSMOS LTD - Interactive Corporate Scripts
 * Trilingual switching (EN / DE / FR), Multi-Driver Roster Selection, Rate Estimator & B2B Inquiries
 */

// --- 1. Multilingual Translations Dictionary (EN / DE / FR) ---
const translations = {
  en: {
    top_info: "📍 UK Corporate HQ: London (Reg. No. 17497277) | Continental Hub: Saarland – Luxembourg – Frankfurt – Grand Est",
    top_portal: "B2B Portal",
    top_lux_portal: "✨ Luxury Chauffeur & AI Vetting →",
    nav_luxury: "✨ Luxury & AI Vetting",
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
    hero_cta_lux: 'Luxury Chauffeurs ("Chauffeur Only") & AI Vetting',
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
    card_cta_est: "Open Dedicated Luxury Chauffeur & AI Vetting Division →",
    r1_badge: "LEAD SENIOR CHAUFFEUR • 98/100 AI BENCHMARK",
    r1_btn_profile: "View Real-Photo Dossier & 98/100 AI Audit →",
    ft_copy: "© 2026 Victoria Cosmos Ltd. All rights reserved. Registered in England & Wales (No. 17497277).",
    ft_legal: "Legal Notice"
  },
  de: {
    top_info: "📍 UK Hauptsitz: London (Reg. No. 17497277) | Einsatzbasis: Saarland – Luxemburg – Frankfurt – Grand Est",
    top_portal: "B2B-Portal",
    top_lux_portal: "✨ Luxus-Chauffeure & KI-Prüfung →",
    nav_luxury: "✨ Luxus & KI-Vetting",
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
    hero_cta_lux: 'Luxus-Chauffeure („Chauffeur Only“) & KI-Vetting',
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
    card_cta_est: "Zur Luxus-Chauffeur- & KI-Prüfungsseite →",
    r1_badge: "LEAD SENIOR CHAUFFEUR • 98/100 KI-BENCHMARK",
    r1_btn_profile: "Echtfoto-Dossier & 98/100 KI-Audit Ansehen →",
    ft_copy: "© 2026 Victoria Cosmos Ltd. Alle Rechte vorbehalten. Eingetragen in England & Wales (Nr. 17497277).",
    ft_legal: "Rechtlicher Hinweis"
  },
  fr: {
    top_info: "📍 Siège UK : Londres (Reg. No. 17497277) | Base Opérationnelle : Sarre – Luxembourg – Francfort – Grand Est",
    top_portal: "Portail B2B",
    top_lux_portal: "✨ Chauffeurs de Luxe & Audit IA →",
    nav_luxury: "✨ Luxe & Audit IA",
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
    hero_cta_lux: 'Chauffeurs de Luxe (« Chauffeur Seul ») & Audit IA',
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
    card_cta_est: "Ouvrir la Division Chauffeurs de Luxe & Audit IA →",
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
    r1_badge: "CHAUFFEUR SENIOR PRINCIPAL • RÉFÉRENCE IA 98/100",
    r1_btn_profile: "Voir le Dossier Photos Réelles & Audit IA 98/100 →",
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
  const routeEl = document.getElementById('routeSelect');
  const freqEl = document.getElementById('frequencySelect');
  const vehEl = document.getElementById('vehicleType');
  const priceBox = document.getElementById('resultPrice');
  const notesBox = document.getElementById('resultNotes');
  if (!routeEl || !freqEl || !vehEl || !priceBox || !notesBox) return;

  const route = routeEl.value;
  const freq = freqEl.value;
  const veh = vehEl.value;

  const data = routeRates[route] || routeRates.local;
  const vehMult = vehicleMultipliers[veh] || 1.0;
  const freqMult = frequencyDiscounts[freq] || 1.0;

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

const routeSelectEl = document.getElementById('routeSelect');
const frequencySelectEl = document.getElementById('frequencySelect');
const vehicleTypeEl = document.getElementById('vehicleType');
if (routeSelectEl) routeSelectEl.addEventListener('change', updateCalculator);
if (frequencySelectEl) frequencySelectEl.addEventListener('change', updateCalculator);
if (vehicleTypeEl) vehicleTypeEl.addEventListener('change', updateCalculator);

// --- 5. Mobile Menu Toggle ---
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// --- 6. Shared B2B Dispatch Helper & Form Submission Handlers ---
async function transmitB2BDispatch(storageKey, record, subjectLine, apiPayload, mailtoLines) {
  try {
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    existing.push(record);
    localStorage.setItem(storageKey, JSON.stringify(existing));
  } catch (err) {
    // Ignore storage quota errors
  }

  const mailtoUrl = `mailto:operations@victoriacosmos.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(mailtoLines.join('\r\n'))}`;
  let deliveredViaApi = false;
  try {
    const response = await fetch('https://formsubmit.co/ajax/operations@victoriacosmos.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(Object.assign({
        _subject: subjectLine,
        _template: 'table'
      }, apiPayload))
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

  if (!deliveredViaApi) {
    window.location.href = mailtoUrl;
  }
  return { deliveredViaApi, mailtoUrl };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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

  if (submitBtn) submitBtn.disabled = true;

  const subjectLine = `B2B Proposal Request: ${comp} (${interest.toUpperCase()} | Unit: ${rosterUnit})`;
  const mailtoLines = [
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
  ];

  const { mailtoUrl } = await transmitB2BDispatch('vc_b2b_inquiries', inquiry, subjectLine, {
    company: comp,
    contact_person: person,
    email: email,
    phone: phone,
    service_interest: interest,
    preferred_unit: rosterUnit,
    message: msg || 'Requesting Master Services Agreement & B2B rates',
    submitted_at: inquiry.timestamp
  }, mailtoLines);

  const safePerson = escapeHtml(person);
  const safeComp = escapeHtml(comp);
  const safeUnit = escapeHtml(rosterUnit);

  feedback.className = 'form-feedback success';
  if (currentLang === 'de') {
    feedback.innerHTML = `✓ Vielen Dank, ${safePerson}! Ihre Anfrage für <strong>${safeComp}</strong> (Einheit: <strong>${safeUnit}</strong>) wurde an unsere Disposition übermittelt. Falls sich Ihr E-Mail-Programm nicht automatisch geöffnet hat, <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">klicken Sie bitte hier für den Direktversand</a>.`;
  } else if (currentLang === 'fr') {
    feedback.innerHTML = `✓ Merci, ${safePerson} ! Votre demande pour <strong>${safeComp}</strong> (Unité : <strong>${safeUnit}</strong>) a été transmise à notre bureau de dispatch. Si votre messagerie ne s'est pas ouverte automatiquement, <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">cliquez ici pour envoyer directement</a>.`;
  } else {
    feedback.innerHTML = `✓ Thank you, ${safePerson}! Your inquiry for <strong>${safeComp}</strong> (Unit: <strong>${safeUnit}</strong>) has been transmitted to our dispatch desk. If you prefer direct email confirmation, <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">click here to send via your mail client</a>.`;
  }

  if (submitBtn) submitBtn.disabled = false;
  document.getElementById('proposalForm').reset();
}

// Initial calculation run
updateCalculator();


// --- 7. Luxury Household Page Translations & AI Vetting Engine (EN / DE / FR) ---
const luxuryI18n = {
  en: {
    lux_top_hub: "Main Fleet Hub ←",
    lux_logo_sub: "LUXURY HOUSEHOLD CHAUFFEURS",
    lux_nav_hub: "Corporate Hub",
    lux_nav_offers: "B2B Offers",
    lux_nav_profile: "Flagship VCL-GC-79",
    lux_nav_vetting: "Chauffeur Onboarding (AI)",
    lux_nav_cta: "Contract Chauffeur",
    lux_hero_badge: 'PRIVATE HOUSEHOLD & EXECUTIVE "CHAUFFEUR ONLY" DIVISION',
    lux_hero_title: 'Vetted Luxury Chauffeurs <span class="highlight-gold">For Your Own Vehicles</span> &amp; Private Estate Intendance.',
    lux_hero_desc: 'Engineered exclusively for discerning families, Family Offices, and corporate boards across Luxembourg, Southwest Germany, and Grand Est. Our vetted senior chauffeurs drive your own Mercedes S-Class, Maybach, Range Rover, Porsche, or Bentley — arriving daily in total non-live-in autonomy via our agency 2013 VW CC R-Line Chase-Car under B2B Werkvertrag (§ 631 BGB, 0% VAT Reverse Charge).',
    lux_hero_cta1: 'View Corporate "Chauffeur Only" Offers',
    lux_hero_cta2: "Inspect Vetted Profile: VCL-GC-79",
    lux_hero_cta3: "Apply as Luxury Chauffeur (AI Vetting)",
    lux_stat_1: "AI Reliability Benchmark",
    lux_stat_2: "Night-Shift Proven Punctuality",
    lux_stat_3: "Pure B2B Werkvertrag (§ 631 BGB)",
    lux_stat_4: "100% Family Privacy Commute",
    lux_offers_tag: 'CORPORATE B2B PACKAGES • "CHAUFFEUR ONLY" IN CLIENT FLEET',
    lux_offers_title: "Dedicated Luxury Chauffeur Offers Without Payroll Burden",
    lux_offers_sub: "You keep 100% ownership and insurance control of your prestige fleet. Victoria Cosmos Ltd supplies the vetted executive driver, full confidentiality NDA, replacement continuity guarantee, and cross-border B2B 0% VAT Reverse Charge invoicing.",
    lux_o1_cat: "CONTINUITY & TRIAL MANDATE",
    lux_o1_title: "5-Day Pilot & Family Office Backup Chauffeur",
    lux_o1_price: "€ 1,850 – € 2,450 <small>Net / 5 Days (0% VAT)</small>",
    lux_o1_desc: "Zero-commitment 5-day operational mandate (50h/week) to cover executive leave, private jet arrivals (Findel Luxaviation, Frankfurt GAT / EDFE, Baden-Baden FKB), or evaluate our flagship chauffeur directly in your family vehicles before signing a monthly retainer.",
    lux_o1_f1: "✓ Drives your S-Class, Maybach, Range Rover, Porsche or Bentley",
    lux_o1_f2: "✓ Autonomous daily commute (2013 VW CC R-Line Chase-Car)",
    lux_o1_f3: "✓ Early-morning 04:30 AM FBO readiness guaranteed",
    lux_o1_f4: "✓ Strict 24-month NDA & non-circumvention protection",
    lux_o1_btn: "Select 5-Day Trial Offer →",
    lux_o2_badge: "FLAGSHIP ESTATE RETAINER",
    lux_o2_cat: "DEDICATED PRIVATE HOUSEHOLD",
    lux_o2_title: "Monthly Chauffeur de Maître & Garage Intendance",
    lux_o2_price: "€ 5,600 – € 7,800 <small>/ Month Net (0% VAT)</small>",
    lux_o2_desc: "Full-time executive chauffeur & trusted household man-friday dedicated to your residence and corporate board. Combines flawless chauffeuring in your vehicles with proactive garage stewardship, dealer service runs, and discrete villa oversight.",
    lux_o2_f1: "✓ Priority executive, spouse, and school-run mobility",
    lux_o2_f2: "✓ Fleet warming, detailing & dealership servicing coordination",
    lux_o2_f3: "✓ Residence technical contractor & parcel supervision",
    lux_o2_f4: "✓ 100% Agency replacement backup during leave or illness",
    lux_o2_btn: "Request Monthly Household Contract →",
    lux_o3_cat: "ON-DEMAND BOARD MANDATE",
    lux_o3_title: "Executive 10h Day & Diplomatic FBO Protocol",
    lux_o3_price: "€ 380 – € 550 <small>/ 10h Day Net (0% VAT)</small>",
    lux_o3_desc: "Precision single-day or multi-day deployment for roadshows, shareholder meetings in Kirchberg or Frankfurt Bankenviertel, diplomatic delegations in Strasbourg, and private luxury showroom guest transfers using client or partner fleet vehicles.",
    lux_o3_f1: "✓ Business suit etiquette & calm defensive driving",
    lux_o3_f2: "✓ Multilingual team: IT (C1), EN (B2), RO, DE/FR support",
    lux_o3_f3: "✓ Zero AÜG employee-leasing liability (§ 631 BGB)",
    lux_o3_f4: "✓ Instant single B2B invoice from UK Ltd entity",
    lux_o3_btn: "Book 10h Executive Mandate →",
    lux_fp_tag: "100% REAL PHOTOGRAPHS • AI BEHAVIORAL TRACK-RECORD AUDIT",
    lux_fp_title: "Flagship Profile: Gabriel C. (Ref: VCL-GC-79)",
    lux_fp_sub: "Luxury households value proven human dedication over empty titles. Our AI Vetting Engine analyzed years of verified night-shift commercial driving, zero-accident history, and personal conduct — awarding Ref: VCL-GC-79 our highest Luxury Household Readiness score (98/100).",
    lux_fp_role: 'Lead Luxury Chauffeur ("Chauffeur Only"), Private Estate Intendant & Precision Driver',
    lux_fp_badge_score: "LUXURY AI SCORE",
    lux_real_pill: "✓ 100% Genuine Real Photograph (Zero AI Editing)",
    lux_cap_1: "Formal Shirt & Calm Demeanor",
    lux_cap_2: "Athletic Build (176 cm / 78 kg)",
    lux_cap_3: "Executive & Film Character Presence",
    lux_photo_note: "<strong>Strict Real-Photo Policy:</strong> Victoria Cosmos Ltd publishes exclusively authentic, unedited photographs of Gabriel C. (Ref: VCL-GC-79). Additional tailored suit portraits or a live video introduction via our dispatch desk are provided upon corporate inquiry prior to trial booking.",
    lux_sp_l1: "Core Languages:",
    lux_sp_v1: "Italian C1 (Native Bilingual), English B1/B2, Romanian Native, Operational DE",
    lux_sp_l2: "Operating Radius:",
    lux_sp_v2: "Luxembourg, Saarland, Frankfurt/Taunus, Baden-Baden, Strasbourg (Max 90–120 min)",
    lux_sp_l3: "Arrival Logistics:",
    lux_sp_v3: "Autonomous Daily Commute (Non-Live-In) via 2013 VW CC R-Line Chase-Car",
    lux_sp_l4: "Client Protection:",
    lux_sp_v4: "Signed NDA & 24-Month Non-Circumvention (€15,000 Penalty via UK Ltd)",
    lux_end_title: "Personally Endorsed & Guaranteed by Victoria Cosmos Management",
    lux_end_sub: "Rated Tier-1 for conscientious work ethic, 8+ years zero-incident road record, and absolute household discretion.",
    lux_audit_h: 'Why Private Estates Choose Night-Shift Tested Dedication Over "Show-Off" CVs',
    lux_audit_intro: "Wealthy families rarely want arrogant chauffeurs with inflated egos. Their #1 fear is unreliability at 04:30 AM before a private flight, reckless speed with children onboard, or household indiscretion. Gabriel C.'s multi-year German night-shift commercial driving record proves five rare traits:",
    lux_pb1_lbl: "1. Iron Discipline & 04:30 AM Flight Readiness (Night-Shift Proven)",
    lux_pb1_desc: "Years of uninterrupted night shifts in Germany across winter storms and tight deadlines guarantee effortless, zero-excuse punctuality for dawn departures and late jet arrivals.",
    lux_pb2_lbl: "2. Defensive Smooth Driving & Fleet Protection (8+ Yrs Unfallfrei)",
    lux_pb2_desc: "Conditioned for calm passenger comfort, zero abrupt braking, and meticulous protection of S-Class, Maybach, Range Rover, and Porsche mechanicals.",
    lux_pb3_lbl: "3. Character Discretion, Zero Vices on Duty & Loyalty",
    lux_pb3_desc: "Conscientious, silent professional who respects family privacy boundaries (non-live-in model), signs strict confidentiality NDAs, and builds lasting trust.",
    lux_pb4_lbl: "4. Hands-On Garage & Residence Stewardship (Intendance)",
    lux_pb4_desc: "Between drives, proactively handles fleet battery/fluid warming, detailing trips, TÜV/dealer maintenance, contractor supervision, and confidential family errands.",
    lux_pb5_lbl: "5. Multilingual Household Protocol (IT / EN / RO / DE)",
    lux_pb5_desc: "Native-level Italian C1 (ideal for Italian banking/industrialist families in Luxembourg & SW Germany) plus fluent operational English B2 and Romanian.",
    lux_fp_btn1: "Request 5-Day Trial with Gabriel C. →",
    lux_fp_btn2: "Download PDF Dossier",
    lux_vet_tag: "PUBLIC CHAUFFEUR ONBOARDING & AI EVALUATION PORTAL",
    lux_vet_title: "Apply to Join the Victoria Cosmos Luxury Chauffeur Roster",
    lux_vet_sub: "Are you a dedicated professional driver seeking high-tier private household or corporate placements? Register publicly below. Our AI Vetting Engine analyzes your real operational discipline (including night-shift reliability, safety record, and work ethic) against our Gabriel C. (VCL-GC-79) 98/100 Benchmark to determine whether your activity qualifies for Luxury Household placement.",
    lux_vet_form_h: "Candidate Operational Profile & Real Photo Submission",
    lux_vet_banner: '<strong>Notice:</strong> You do not need past "royalty butler" titles to qualify for our Luxury Tier. Conscientious track records (such as multi-year night shifts, medical courier precision, zero-accident commercial driving, and disciplined character) score heavily in our AI evaluation.',
    vet_btn_analyze: "🤖 Run AI Luxury Vetting Analysis",
    vet_btn_submit: "Submit Dossier for Admin Approval →",
    lux_c_tag: "DIRECT B2B HOUSEHOLD & FAMILY OFFICE DISPATCH",
    lux_c_title: "Contract Our Vetted Luxury Chauffeur Division",
    lux_c_sub: "All chauffeur introductions, 5-day continuity trials, and monthly private household retainers are contracted exclusively through Victoria Cosmos Ltd (UK Reg. No. 17497277) under 24-month Kundenschutz protection.",
    lux_ci_desc: "Private Household Chauffeurs, Estate Intendance & Executive Protection Support",
    lux_f_comp: "Family Office / Private Household / Company *",
    lux_f_person: "Chief of Staff / Authorized Representative *",
    lux_f_pkg: "Corporate Mandate Package *",
    lux_f_msg: "Client Vehicles, Start Date & Confidentiality / Briefing Notes:",
    lux_f_submit: "Request Confidential Chauffeur Mandate →"
  },
  de: {
    lux_top_hub: "Hauptseite Flottenlogistik ←",
    lux_logo_sub: "LUXUS-CHAUFFEURE & PRIVATHAUSHALTE",
    lux_nav_hub: "Firmen-Hub",
    lux_nav_offers: "B2B-Angebote",
    lux_nav_profile: "Profil VCL-GC-79",
    lux_nav_vetting: "Chauffeur-Bewerbung (KI)",
    lux_nav_cta: "Chauffeur Buchen",
    lux_hero_badge: 'PRIVATHAUSHALT & EXECUTIVE „CHAUFFEUR ONLY“ DIVISION',
    lux_hero_title: 'Geprüfte Luxus-Chauffeure <span class="highlight-gold">für Ihre eigenen Fahrzeuge</span> &amp; Anwesen-Intendanz.',
    lux_hero_desc: 'Speziell entwickelt für anspruchsvolle Familien, Family Offices und Vorstände in Luxemburg, Südwestdeutschland und Grand Est. Unsere geprüften Chauffeure steuern Ihre eigene Mercedes S-Klasse, Maybach, Range Rover, Porsche oder Bentley – mit täglicher autarker Anreise über unser Agentur-Begleitfahrzeug (2013 VW CC R-Line Chase-Car) als B2B-Werkvertrag (§ 631 BGB, 0% USt. Reverse Charge).',
    lux_hero_cta1: 'Firmen-Angebote „Chauffeur Only“ ansehen',
    lux_hero_cta2: "Referenzprofil prüfen: VCL-GC-79",
    lux_hero_cta3: "Als Luxus-Chauffeur bewerben (KI-Analyse)",
    lux_stat_1: "KI-Zuverlässigkeits-Benchmark",
    lux_stat_2: "Nachtschicht-geprüfte Pünktlichkeit",
    lux_stat_3: "Reiner Werkvertrag (§ 631 BGB)",
    lux_stat_4: "100% Privatsphäre (Non Live-In)",
    lux_offers_tag: 'B2B-PAKETE • „CHAUFFEUR ONLY“ IM KUNDENFAHRZEUG',
    lux_offers_title: "Exklusive Chauffeur-Angebote ohne Personalrisiko",
    lux_offers_sub: "Ihre Luxusfahrzeuge bleiben zu 100 % in Ihrem Eigentum und Ihrer Versicherung. Victoria Cosmos Ltd stellt den geprüften Vorstandsfahrer mit strikter NDA, Ausfallgarantie und 0% USt. Reverse-Charge-Rechnung.",
    lux_o1_cat: "KONTINUITÄTS- & TESTMANDAT",
    lux_o1_title: "5-Tage Pilot-Mandat & Family Office Backup",
    lux_o1_price: "1.850 € – 2.450 € <small>Netto / 5 Tage (0% USt.)</small>",
    lux_o1_desc: "Unverbindliches 5-Tage-Mandat (50 Std./Woche) zur Urlaubsvertretung, für Privatjet-Ankünfte (Findel Luxaviation, Frankfurt GAT / EDFE, Baden-Baden FKB) oder zum Kennenlernen unseres Lead-Chauffeurs direkt in Ihren Fahrzeugen.",
    lux_o1_f1: "✓ Fährt Ihre S-Klasse, Maybach, Range Rover, Porsche oder Bentley",
    lux_o1_f2: "✓ Autarke Anreise per Agentur-Chase-Car (2013 VW CC R-Line)",
    lux_o1_f3: "✓ Garantierte Einsatzbereitschaft ab 04:30 Uhr morgens",
    lux_o1_f4: "✓ Strikte 24-Monate-NDA & Kundenschutzklausel",
    lux_o1_btn: "5-Tage-Testmandat wählen →",
    lux_o2_badge: "HAUPT-RETAINER FÜR PRIVATANWESEN",
    lux_o2_cat: "DEDIZIERTER PRIVATHAUSHALT",
    lux_o2_title: "Monats-Retainer Chauffeur de Maître & Garagenpflege",
    lux_o2_price: "5.600 € – 7.800 € <small>/ Monat Netto (0% USt.)</small>",
    lux_o2_desc: "Fester Vorstandsfahrer & diskreter Anwesensbetreuer im Kundenfahrzeug. Verbindet ruhige Executive-Fahrten mit aktiver Garagenpflege, Werkstatt-/TÜV-Fahrten und technischer Objektkoordination.",
    lux_o2_f1: "✓ Priorisierte Mobilität für Vorstand, Familie & Schulfahrten",
    lux_o2_f2: "✓ Bewegungsfahrten, Fahrzeugaufbereitung & Service-Termine",
    lux_o2_f3: "✓ Aufsicht über Handwerker, Lieferungen & Anwesen",
    lux_o2_f4: "✓ 100% Vertretungsgarantie durch Victoria Cosmos Kader",
    lux_o2_btn: "Monats-Retainer anfragen →",
    lux_o3_cat: "TAGESMANDAT & FBO-PROTOKOLL",
    lux_o3_title: "Executive 10h-Tagessatz & Diplomatischer Transfer",
    lux_o3_price: "380 € – 550 € <small>/ 10h-Tag Netto (0% USt.)</small>",
    lux_o3_desc: "Präziser Tageseinsatz für Roadshows, Verwaltungsratstermine auf dem Kirchberg oder in Frankfurt sowie anspruchsvolle Autohaus-VIP-Kunden.",
    lux_o3_f1: "✓ Business-Anzug-Etikette & ruhige Defensivfahrweise",
    lux_o3_f2: "✓ Mehrsprachiges Team: IT (C1), EN (B2), RO, DE/FR",
    lux_o3_f3: "✓ Kein AÜG-Verleihrisiko (§ 631 BGB Werkvertrag)",
    lux_o3_f4: "✓ Klare B2B-Nettoabrechnung über UK Limited",
    lux_o3_btn: "10h-Executive-Mandat buchen →",
    lux_fp_tag: "100% ECHTE FOTOS • KI-VERHALTENS- & ZUVERLÄSSIGKEITSAUDIT",
    lux_fp_title: "Referenzprofil: Gabriel C. (Ref: VCL-GC-79)",
    lux_fp_sub: "Privathaushalte schätzen bewiesene Hingabe mehr als leere Titel. Unsere KI-Analyse bewertete jahrelange gewerbliche Nachtschicht-Disziplin und 8+ Jahre Unfallfreiheit mit dem Spitzenwert 98/100.",
    lux_fp_role: 'Lead Luxus-Chauffeur („Chauffeur Only“), Anwesen-Intendant & Präzisionsfahrer',
    lux_fp_badge_score: "LUXUS-KI-WERT",
    lux_real_pill: "✓ 100% Echtes Originalfoto (Keine KI-Manipulation)",
    lux_cap_1: "Business-Hemd & ruhige Ausstrahlung",
    lux_cap_2: "Sportliche Statur (176 cm / 78 kg)",
    lux_cap_3: "Executive- & Film-Präsenz",
    lux_photo_note: "<strong>Strenge Echtfoto-Richtlinie:</strong> Victoria Cosmos Ltd veröffentlicht ausschließlich authentische Fotos von Gabriel C. (Ref: VCL-GC-79). Weitere Business-Anzug-Aufnahmen oder ein kurzes Video-Kennenlernen stellen wir auf Anfrage vor dem 5-Tage-Piloten bereit.",
    lux_sp_l1: "Sprachen:",
    lux_sp_v1: "Italienisch C1 (bilingual fließend), Englisch B1/B2, Rumänisch Muttersprache, DE (Einsatzverständnis)",
    lux_sp_l2: "Einsatzradius:",
    lux_sp_v2: "Luxemburg, Saarland, Frankfurt/Taunus, Baden-Baden, Straßburg (Max. 90–120 Min.)",
    lux_sp_l3: "Anfahrt:",
    lux_sp_v3: "Tägliches Pendeln (Non Live-In) mit 2013 VW CC R-Line Chase-Car",
    lux_sp_l4: "Kundenschutz:",
    lux_sp_v4: "NDA & 24 Monate Kundenschutz (15.000 € Vertragsstrafe über UK Ltd)",
    lux_end_title: "Persönlich empfohlen & garantiert durch die Geschäftsführung Victoria Cosmos",
    lux_end_sub: "Tier-1-Bewertung für Gewissenhaftigkeit, 8+ Jahre unfallfreie Fahrpraxis und absolute Diskretion im Haushalt.",
    lux_audit_h: "Warum Privathaushalte nachtschicht-geprüfte Verlässlichkeit vorziehen",
    lux_audit_intro: "Wohlhabende Familien suchen keine überheblichen Chauffeure. Ihre größte Sorge ist Unpünktlichkeit um 04:30 Uhr vor einem Privatflug oder fehlende Diskretion. Gabriels jahrelange Nachtschicht-Routine beweist fünf seltene Stärken:",
    lux_pb1_lbl: "1. Eiserne Disziplin & 04:30 Uhr Abflugbereitschaft (Nachtschicht-erprobt)",
    lux_pb1_desc: "Jahrelange ununterbrochene Nachtschichten in Deutschland garantieren kompromisslose Pünktlichkeit am frühen Morgen.",
    lux_pb2_lbl: "2. Ruhige, defensive Fahrkultur (8+ Jahre Unfallfrei)",
    lux_pb2_desc: "Sanftes Beschleunigen, vorausschauendes Bremsen und Materialschonung bei S-Klasse, Maybach, Range Rover & Porsche.",
    lux_pb3_lbl: "3. Charakterstärke, keine Laster im Dienst & Loyalität",
    lux_pb3_desc: "Diskret, respektiert die Privatsphäre der Familie (Non Live-In) und unterzeichnet strenge Vertraulichkeitsvereinbarungen.",
    lux_pb4_lbl: "4. Praktische Garagen- & Anwesensbetreuung (Intendanz)",
    lux_pb4_desc: "Übernimmt zwischen den Fahrten Fahrzeugpflege, Servicefahrten, Handwerkeraufsicht und vertrauliche Besorgungen.",
    lux_pb5_lbl: "5. Mehrsprachiges Haushaltsprotokoll (IT / EN / RO / DE)",
    lux_pb5_desc: "Italienisch C1 (ideal für italienische Unternehmer-/Bankerfamilien in LU/DE) sowie Englisch B2 und Rumänisch.",
    lux_fp_btn1: "5-Tage-Test mit Gabriel C. anfragen →",
    lux_fp_btn2: "B2B-Dossier (PDF) herunterladen",
    lux_vet_tag: "ÖFFENTLICHES CHAUFFEUR-BEWERBUNGSPORTAL & KI-ANALYSE",
    lux_vet_title: "Als Luxus-Chauffeur bei Victoria Cosmos bewerben",
    lux_vet_sub: "Sie sind ein gewissenhafter Berufsfahrer und möchten für Privathaushalte oder Vorstände fahren? Tragen Sie Ihre echte Berufserfahrung ein. Unsere KI prüft Ihre Nachtschicht-Disziplin, Unfallfreiheit und Sorgfalt gegen unseren 98/100 Benchmark (Ref: VCL-GC-79).",
    lux_vet_form_h: "Bewerberprofil & Echtfoto-Einreichung",
    lux_vet_banner: '<strong>Hinweis:</strong> Sie brauchen keinen früheren Titel als „Hof-Butler“. Gewissenhafte Leistungsträger (z. B. jahrelange Nachtschichten, Medizinkurier, unfallfreie Berufspraxis) erreichen in unserer KI-Analyse Spitzenwerte für das Luxus-Segment.',
    vet_btn_analyze: "🤖 KI-Luxus-Eignungsprüfung starten",
    vet_btn_submit: "Dossier zur manuellen Freigabe senden →",
    lux_c_tag: "DIREKTE DISPOSITION FÜR FAMILY OFFICES & PRIVATHAUSHALTE",
    lux_c_title: "Unsere geprüfte Luxus-Chauffeur-Division beauftragen",
    lux_c_sub: "Alle Vermittlungen, 5-Tage-Tests und Monats-Retainer laufen exklusiv über die Victoria Cosmos Ltd (UK Reg. No. 17497277) mit 24 Monaten Kundenschutz.",
    lux_ci_desc: "Privatchauffeure, Anwesen-Intendanz & Vorstandsmobilität",
    lux_f_comp: "Family Office / Privathaushalt / Unternehmen *",
    lux_f_person: "Bevollmächtigter Ansprechpartner / Chief of Staff *",
    lux_f_pkg: "Gewünschtes B2B-Mandatspaket *",
    lux_f_msg: "Fahrzeugmodelle, Startdatum & Vertraulichkeitshinweise:",
    lux_f_submit: "Vertrauliche Chauffeur-Anfrage senden →"
  },
  fr: {
    lux_top_hub: "Retour Portail Flottes ←",
    lux_logo_sub: "CHAUFFEURS DE MAÎTRE & MAISONS PRIVÉES",
    lux_nav_hub: "Hub Corporate",
    lux_nav_offers: "Offres B2B",
    lux_nav_profile: "Profil VCL-GC-79",
    lux_nav_vetting: "Inscription Chauffeur (IA)",
    lux_nav_cta: "Contracter un Chauffeur",
    lux_hero_badge: 'DIVISION MAISONS PRIVÉES & DIRECTION « CHAUFFEUR SEUL »',
    lux_hero_title: 'Chauffeurs de Maître Vérifiés <span class="highlight-gold">Sur Vos Propres Véhicules</span> &amp; Intendance Privée.',
    lux_hero_desc: 'Conçue pour les familles fortunées, Family Offices et directions bancaires au Luxembourg, en Allemagne du Sud-Ouest et dans le Grand Est. Nos chauffeurs vérifiés conduisent votre Mercedes Classe S, Maybach, Range Rover, Porsche ou Bentley — avec trajet domicile-travail autonome (Non Live-In) via notre véhicule d\'agence 2013 VW CC R-Line Chase-Car sous contrat B2B (0% TVA autoliquidation).',
    lux_hero_cta1: 'Voir les Offres Entreprise « Chauffeur Seul »',
    lux_hero_cta2: "Examiner le Profil Référence : VCL-GC-79",
    lux_hero_cta3: "S'inscrire comme Chauffeur de Luxe (Audit IA)",
    lux_stat_1: "Score Référence IA",
    lux_stat_2: "Fiabilité Prouvée de Nuit",
    lux_stat_3: "Contrat B2B Sans Risque RH",
    lux_stat_4: "Intimité Familiale 100% Préservée",
    lux_offers_tag: 'FORFAITS B2B ENTREPRISE • « CHAUFFEUR SEUL » SUR FLOTTE CLIENT',
    lux_offers_title: "Offres Dédiées aux Maisons Privées sans Charges Salariales",
    lux_offers_sub: "Vous conservez 100 % du contrôle et de l'assurance de vos véhicules de prestige. Victoria Cosmos Ltd fournit le chauffeur exécutif vérifié, la clause de confidentialité NDA, le remplacement garanti et une facturation B2B à 0 % TVA.",
    lux_o1_cat: "MANDAT D'ESSAI & CONTINUITÉ",
    lux_o1_title: "Mandat Pilote 5 Jours & Remplacement Family Office",
    lux_o1_price: "1 850 € – 2 450 € <small>HT / 5 Jours (0% TVA)</small>",
    lux_o1_desc: "Mandat de 5 jours (50h/semaine) sans engagement long terme pour pallier les congés, assurer les arrivées jet privé (Findel Luxaviation, Francfort GAT, Baden-Baden FKB) ou évaluer notre chauffeur sur vos propres véhicules.",
    lux_o1_f1: "✓ Conduite sur votre Classe S, Maybach, Range Rover ou Porsche",
    lux_o1_f2: "✓ Trajets autonomes quotidiens (Chase-Car 2013 VW CC R-Line)",
    lux_o1_f3: "✓ Ponctualité garantie dès 04h30 du matin",
    lux_o1_f4: "✓ Accord NDA strict & non-sollicitation 24 mois",
    lux_o1_btn: "Choisir l'Offre Essai 5 Jours →",
    lux_o2_badge: "FORFAIT PHARE MAISON PRIVÉE",
    lux_o2_cat: "MAISON PRIVÉE DÉDIÉE",
    lux_o2_title: "Abonnement Mensuel Chauffeur de Maître & Intendance Garage",
    lux_o2_price: "5 600 € – 7 800 € <small>/ Mois HT (0% TVA)</small>",
    lux_o2_desc: "Chauffeur exécutif à plein temps et homme de confiance dédié à votre résidence et direction. Allie conduite soignée, entretien du garage, suivi concessions/contrôles techniques et supervision discrète des prestataires.",
    lux_o2_f1: "✓ Mobilité prioritaire dirigeants, famille & trajets scolaires",
    lux_o2_f2: "✓ Maintien mécanique, detailing & passages en concession",
    lux_o2_f3: "✓ Supervision des artisans et réception confidentielle",
    lux_o2_f4: "✓ Continuité de remplacement 100% garantie par l'agence",
    lux_o2_btn: "Demander un Abonnement Mensuel →",
    lux_o3_cat: "MISSION PONCTUELLE & PROTOCOLE FBO",
    lux_o3_title: "Forfait Journée 10h Direction & Protocole Diplomatique",
    lux_o3_price: "380 € – 550 € <small>/ Jour 10h HT (0% TVA)</small>",
    lux_o3_desc: "Intervention à la journée pour roadshows, conseils d'administration au Kirchberg ou Francfort, délégations européennes à Strasbourg et transferts clients VIP.",
    lux_o3_f1: "✓ Tenue costume irréprochable & conduite apaisée",
    lux_o3_f2: "✓ Équipe multilingue : IT (C1), EN (B2), RO, support DE/FR",
    lux_o3_f3: "✓ Zéro prêt de main-d'œuvre (Contrat d'Entreprise UK Ltd)",
    lux_o3_f4: "✓ Facture B2B unique HT 0% TVA",
    lux_o3_btn: "Réserver un Mandat 10h →",
    lux_fp_tag: "100% PHOTOS RÉELLES • AUDIT IA DE FIABILITÉ COMPORTEMENTALE",
    lux_fp_title: "Profil Phare : Gabriel C. (Réf: VCL-GC-79)",
    lux_fp_sub: "Les familles fortunées privilégient la conscience professionnelle éprouvée aux titres prétentieux. Notre moteur IA a analysé ses années de conduite commerciale de nuit et son dossier vierge (>8 ans), lui attribuant la note record de 98/100.",
    lux_fp_role: 'Chauffeur de Maître Principal (« Chauffeur Seul »), Intendant de Domaine & Conducteur de Précision',
    lux_fp_badge_score: "SCORE IA LUXE",
    lux_real_pill: "✓ 100% Photographie Réelle Authentique (Zéro Retouche IA)",
    lux_cap_1: "Chemise Blanche & Attitude Posée",
    lux_cap_2: "Stature Athlétique (176 cm / 78 kg)",
    lux_cap_3: "Présence Exécutive & Cinéma",
    lux_photo_note: "<strong>Politique Stricte de Photos Réelles :</strong> Victoria Cosmos Ltd publie uniquement des photographies réelles de Gabriel C. (Réf: VCL-GC-79). D'autres portraits en costume ou une présentation vidéo en direct sont fournis sur demande.",
    lux_sp_l1: "Langues :",
    lux_sp_v1: "Italien C1 (Bilingue Natif), Anglais B1/B2, Roumain Natif, Allemand opérationnel",
    lux_sp_l2: "Zone d'action :",
    lux_sp_v2: "Luxembourg, Sarre, Francfort/Taunus, Baden-Baden, Strasbourg (Max 90–120 min)",
    lux_sp_l3: "Logistique d'arrivée :",
    lux_sp_v3: "Trajets autonomes (Non Live-In) via 2013 VW CC R-Line Chase-Car",
    lux_sp_l4: "Protection Client :",
    lux_sp_v4: "NDA signé & Non-Sollicitation 24 Mois (Pénalité 15 000 € via UK Ltd)",
    lux_end_title: "Personnellement Recommandé & Garanti par la Direction Victoria Cosmos",
    lux_end_sub: "Classé Tier-1 pour sa conscience professionnelle, >8 ans sans sinistre et sa discrétion absolue.",
    lux_audit_h: "Pourquoi les Maisons Privées choisissent un Chauffeur éprouvé de Nuit",
    lux_audit_intro: "La plus grande crainte d'un dirigeant ayant un vol privé à 05h00 du matin est l'absence de fiabilité. Les années de service nocturne de Gabriel C. démontrent cinq qualités exceptionnelles :",
    lux_pb1_lbl: "1. Discipline de Fer & Disponibilité Vol 04h30 (Éprouvé de Nuit)",
    lux_pb1_desc: "Des années de conduite de nuit en Allemagne garantissent une ponctualité sans faille à toute heure.",
    lux_pb2_lbl: "2. Conduite Douce, Préventive & Respect Mécanique (>8 ans sans accident)",
    lux_pb2_desc: "Conduite fluide pour le confort des passagers et la préservation de vos Classe S, Maybach, Range Rover et Porsche.",
    lux_pb3_lbl: "3. Discrétion Morale, Zéro Vice en Service & Loyauté",
    lux_pb3_desc: "Professionnel silencieux respectant l'intimité familiale (régime Non Live-In) sous clause de confidentialité stricte.",
    lux_pb4_lbl: "4. Soin Quotidien du Garage & Intendance de Propriété",
    lux_pb4_desc: "Entre deux trajets : suivi d'entretien, préparation des véhicules, coordination des prestataires et courses confidentielles.",
    lux_pb5_lbl: "5. Maîtrise Multilingue VIP (IT / EN / RO / DE)",
    lux_pb5_desc: "Italien C1 natif (précieux pour les familles d'entrepreneurs et banquiers italiens au Luxembourg/Allemagne), Anglais B2 et Roumain.",
    lux_fp_btn1: "Demander un Essai 5 Jours avec Gabriel C. →",
    lux_fp_btn2: "Télécharger le Dossier PDF",
    lux_vet_tag: "PORTAIL PUBLIC D'INSCRIPTION CHAUFFEURS & ÉVALUATION IA",
    lux_vet_title: "Rejoindre l'Effectif de Chauffeurs de Luxe Victoria Cosmos",
    lux_vet_sub: "Chauffeur professionnel consciencieux ? Inscrivez-vous publiquement ci-dessous. Notre moteur IA analyse votre parcours (régularité de nuit, conduite sans sinistre, polyvalence) face à notre référence Gabriel C. (98/100) pour qualifier votre profil en catégorie Luxe.",
    lux_vet_form_h: "Profil Opérationnel du Candidat & Photos Réelles",
    lux_vet_banner: '<strong>Note importante :</strong> Nul besoin d\'un titre antérieur de « majordome de palais ». Une discipline prouvée (travail de nuit sur plusieurs années, coursier médical ponctuel, 0 accident) obtient un score maximal.',
    vet_btn_analyze: "🤖 Lancer l'Analyse IA Profil Luxe",
    vet_btn_submit: "Soumettre pour Validation Manuelle →",
    lux_c_tag: "DISPATCH DIRECT FAMILY OFFICES & MAISONS PRIVÉES",
    lux_c_title: "Contracter Notre Division Chauffeurs de Luxe Vérifiés",
    lux_c_sub: "Chaque mise en relation, test de 5 jours ou forfait mensuel est contracté exclusivement via Victoria Cosmos Ltd (UK Reg. No. 17497277) avec protection anti-contournement de 24 mois.",
    lux_ci_desc: "Chauffeurs de Maître, Intendance de Propriétés & Protocole VIP",
    lux_f_comp: "Family Office / Maison Privée / Société *",
    lux_f_person: "Responsable / Représentant Autorisé *",
    lux_f_pkg: "Forfait B2B Souhaité *",
    lux_f_msg: "Véhicules du client, date de début & consignes de confidentialité :",
    lux_f_submit: "Envoyer la Demande Confidentielle →"
  }
};

// Merge Luxury dictionary into global translations object
Object.keys(luxuryI18n).forEach(lang => {
  if (translations[lang]) {
    Object.assign(translations[lang], luxuryI18n[lang]);
  }
});

// Accessible Form Validation Helper (modern :user-invalid + aria-invalid / aria-describedby sync + legacy fallback)
(function initAccessibleFormValidation() {
  const supportsUserInvalid = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('selector(:user-invalid)');
  const linkError = (el, shown) => {
    const errorId = el.dataset ? el.dataset.error : null;
    if (!errorId) return;
    const ids = (el.getAttribute('aria-describedby') || '').split(/\s+/).filter(id => id && id !== errorId);
    if (shown) ids.push(errorId);
    if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
    else el.removeAttribute('aria-describedby');
  };

  const dirtyMap = new WeakMap();
  const syncField = (el) => {
    if (!el || !el.matches || !el.matches('input, select, textarea')) return;
    const isInvalid = supportsUserInvalid
      ? el.matches(':user-invalid')
      : (dirtyMap.has(el) && !el.validity.valid);
    el.setAttribute('aria-invalid', isInvalid ? 'true' : 'false');
    if (!supportsUserInvalid) {
      el.classList.toggle('user-invalid-fallback', isInvalid);
    }
    linkError(el, isInvalid);
  };

  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.setAttribute('aria-invalid', 'false');
  });

  document.addEventListener('blur', (e) => {
    if (!e.target || !e.target.checkValidity) return;
    dirtyMap.set(e.target, true);
    syncField(e.target);
  }, true);

  document.addEventListener('input', (e) => {
    if (e.target && e.target.hasAttribute && e.target.hasAttribute('aria-invalid')) {
      syncField(e.target);
    }
  });

  document.addEventListener('change', (e) => {
    if (!e.target || !e.target.checkValidity) return;
    dirtyMap.set(e.target, true);
    syncField(e.target);
  }, true);

  document.addEventListener('invalid', (e) => {
    dirtyMap.set(e.target, true);
    if (!supportsUserInvalid) e.target.classList.add('user-invalid-fallback');
    syncField(e.target);
  }, true);

  window.__vcSyncFormAccessibility = function(formEl) {
    if (!formEl) return;
    [...formEl.elements].forEach(el => {
      if (el.checkValidity) {
        dirtyMap.set(el, true);
        if (!supportsUserInvalid && !el.validity.valid) el.classList.add('user-invalid-fallback');
        syncField(el);
      }
    });
  };
})();

// 1-Click Offer Selection on luxury.html -> Scrolls to #luxury-contact
function selectLuxuryOffer(pkgCode, pkgLabel, unitCode) {
  const pkgEl = document.getElementById('luxPackageSelect');
  const unitEl = document.getElementById('luxUnitSelect');
  const msgEl = document.getElementById('luxMessage');
  if (pkgEl && pkgCode) pkgEl.value = pkgCode;
  if (unitEl && unitCode) unitEl.value = unitCode;
  if (msgEl) {
    if (currentLang === 'de') {
      msgEl.value = `Vertrauliche B2B-Mandatsanfrage [${pkgLabel}] für Einheit [${unitCode}]. Bitte senden Sie den Rahmenvertrag (§ 631 BGB, 0% USt. Reverse Charge) sowie mögliche Termine für ein kurzes Video-Vorabgespräch.`;
    } else if (currentLang === 'fr') {
      msgEl.value = `Demande confidentielle de mandat B2B [${pkgLabel}] pour l'unité [${unitCode}]. Merci de nous transmettre votre contrat d'entreprise (0% TVA) et vos créneaux pour un entretien vidéo préalable.`;
    } else {
      msgEl.value = `Confidential B2B mandate inquiry [${pkgLabel}] for vetted unit [${unitCode}]. Please send your Master Agreement (Werkvertrag § 631 BGB, 0% VAT Reverse Charge) and video intro availability.`;
    }
  }
  const targetSec = document.getElementById('luxury-contact');
  if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const firstInput = document.getElementById('luxComp');
    if (firstInput) firstInput.focus();
  }, 450);
}

// --- AI Luxury Chauffeur Vetting Engine (Scored vs Ref: VCL-GC-79 Benchmark) ---
function evaluateChauffeurProfile() {
  const form = document.getElementById('aiVettingForm');
  if (!form) return null;

  const name = (document.getElementById('vetName')?.value || '').trim() || 'Candidate';
  const city = (document.getElementById('vetCity')?.value || '').trim();
  const driveYears = parseInt(document.getElementById('vetDriveYears')?.value || '0', 10);
  const accidents = parseInt(document.getElementById('vetAccidents')?.value || '0', 10);
  const nightTier = parseInt(document.getElementById('vetNightYears')?.value || '1', 10);
  const modeEl = form.querySelector('input[name="vet_mode"]:checked');
  const mode = modeEl ? modeEl.value : 'chauffeur_only';
  const summaryText = (document.getElementById('vetSummary')?.value || '').toLowerCase();

  // 1. Night-Shift & Dawn Readiness (Max 25 pts)
  let nightScore = nightTier === 5 ? 25 : (nightTier === 3 ? 18 : 8);

  // 2. Driving Experience & Accident-Free Safety (Max 25 pts)
  let expPts = driveYears >= 8 ? 13 : (driveYears >= 5 ? 10 : (driveYears >= 3 ? 7 : 4));
  let accidentPts = accidents === 0 ? 12 : (accidents === 1 ? 4 : 0);
  let safetyScore = expPts + accidentPts;

  // 3. Discretion, Clean Record & Real Photo Integrity (Max 20 pts)
  let discScore = 0;
  if (document.getElementById('chkZeroVice')?.checked) discScore += 7;
  if (document.getElementById('chkCleanRecord')?.checked) discScore += 7;
  if (document.getElementById('chkNonLiveIn')?.checked) discScore += 4;
  if (document.getElementById('chkRealPhotos')?.checked) discScore += 2;

  // 4. Garage, FBO Protocol & Estate Intendance (Max 15 pts)
  let garageScore = 0;
  if (document.getElementById('chkGarage')?.checked) garageScore += 5;
  if (document.getElementById('chkFbo')?.checked) garageScore += 5;
  if (document.getElementById('chkEstate')?.checked) garageScore += 5;

  // 5. Multilingual Capability & AI Text Track-Record Audit (Max 15 pts)
  const langCount = ['langDe', 'langEn', 'langFr', 'langIt', 'langRo']
    .filter(id => document.getElementById(id)?.checked).length;
  let langPts = Math.min(10, langCount * 3);
  if (document.getElementById('langEn')?.checked && (document.getElementById('langDe')?.checked || document.getElementById('langIt')?.checked || document.getElementById('langFr')?.checked)) {
    langPts = Math.min(10, langPts + 1);
  }
  const disciplineKeywords = ['night', 'nacht', 'nuit', 'noapte', 'unfallfrei', 'accident', 'calm', 'discreet', 'diskret', 'punctual', 'reliable', 'fließend', 'fluent', 'conscientious', 'courier', 'kurier', 'medical', 'executive', 'luxury'];
  let keywordHits = disciplineKeywords.filter(kw => summaryText.includes(kw)).length;
  let narrativePts = Math.min(5, keywordHits + (summaryText.length >= 40 ? 2 : 0));
  let textLangScore = Math.min(15, langPts + narrativePts);

  const totalScore = Math.min(100, nightScore + safetyScore + discScore + garageScore + textLangScore);

  // Classify tier & generate localized verdict
  let tierClass = 'tier-reject';
  let tierLabel = 'BELOW THRESHOLD (<70)';
  let headline = 'Requires stronger accident-free history or schedule reliability.';
  let coaching = '';

  if (totalScore >= 85 && accidents === 0) {
    tierClass = 'tier-luxury';
    if (currentLang === 'de') {
      tierLabel = 'TIER-1 LUXUS-HAUSHALT GEEIGNET (≥85 PKT.)';
      headline = `${escapeHtml(name)} erfüllt den Victoria Cosmos Luxus-Standard (Benchmark Ref: VCL-GC-79).`;
      coaching = `Starke Übereinstimmung (${totalScore}/100) bei Zuverlässigkeit, Unfallfreiheit und Diskretion. Nach manueller Admin-Prüfung Ihrer echten Geschäftsfotos & Ihres Führungszeugnisses empfehlen wir Sie aktiv für Private Estates & Family Offices („Chauffeur Only“).`;
    } else if (currentLang === 'fr') {
      tierLabel = 'QUALIFIÉ TIER-1 MAISONS DE LUXE (≥85 PTS)';
      headline = `${escapeHtml(name)} atteint le standard d'excellence Victoria Cosmos (Réf: VCL-GC-79).`;
      coaching = `Score élevé (${totalScore}/100) grâce à la régularité horaire, l'absence de sinistres et l'intendance. Après validation manuelle de vos photos réelles et du casier judiciaire, votre profil peut intégrer nos offres « Chauffeur Seul ».`;
    } else {
      tierLabel = 'QUALIFIED: TIER-1 LUXURY HOUSEHOLD (≥85 PTS)';
      headline = `${escapeHtml(name)} matches Victoria Cosmos Private Household Standards (vs. Ref: VCL-GC-79 98/100).`;
      coaching = `Strong behavioral alignment (${totalScore}/100): Proven schedule endurance, clean safety record, and estate versatility make this activity recommendable for Luxury "Chauffeur Only" mandates pending manual Admin verification of real photos and background check.`;
    }
  } else if (totalScore >= 70 && accidents <= 1) {
    tierClass = 'tier-fleet';
    if (currentLang === 'de') {
      tierLabel = 'TIER-2 B2B FLOTTENLOGISTIK GEEIGNET (70–84)';
      headline = `${escapeHtml(name)} qualifiziert sich für Autohaus-Überführungen & Jockey-Teams.`;
      coaching = `Gute Basis (${totalScore}/100) für Fahrzeugüberführungen (Team Alpha / B2B). Für Tier-1 Family Offices empfehlen wir den Nachweis von 0 Unfällen, Nacht-/Früheinsatzpraxis sowie mindestens 2 Fremdsprachen + Garagen-Intendanz.`;
    } else if (currentLang === 'fr') {
      tierLabel = 'QUALIFIÉ TIER-2 CONVOYAGE FLOTTES B2B (70–84)';
      headline = `${escapeHtml(name)} est éligible pour les transferts concessions & équipes mobiles.`;
      coaching = `Bon profil (${totalScore}/100) pour le convoyage automobile B2B. Pour accéder au rang Tier-1 Maisons Privées, renforcez la disponibilité matinale 04h30, les langues étrangères ou la gestion de garage.`;
    } else {
      tierLabel = 'QUALIFIED: TIER-2 B2B FLEET LOGISTICS (70–84 PTS)';
      headline = `${escapeHtml(name)} qualifies for Dealership Fleet Transfers & Team Alpha Jockey Squads.`;
      coaching = `Solid operational score (${totalScore}/100) suited for B2B fleet movement (${mode}). To unlock Tier-1 Private Estates (≥85 pts), expand dawn/night reliability proof, multilingual range, or garage stewardship markers.`;
    }
  } else {
    tierClass = 'tier-reject';
    if (currentLang === 'de') {
      tierLabel = 'UNTER BENCHMARK (<70) – RÜCKSPRACHE';
      headline = 'Aktuell noch nicht für direkte VIP-Mandate freigebbar.';
      coaching = `Aktuelle Bewertung: ${totalScore}/100. Ein unfallfreier Verlauf über mehrere Jahre, Nichtraucher-Disziplin im Dienst sowie strikte Verlässlichkeit zu Früh-/Nachtzeiten sind Voraussetzung für Victoria Cosmos Mandanten.`;
    } else if (currentLang === 'fr') {
      tierLabel = 'SOUS LE SEUIL (<70) – EN ATTENTE';
      headline = 'Critères actuels insuffisants pour les mandats VIP directs.';
      coaching = `Score actuel : ${totalScore}/100. Un historique sans sinistre responsable et une disponibilité horaire rigoureuse sont obligatoires avant toute présentation à nos clients.`;
    } else {
      tierLabel = 'BELOW LUXURY BENCHMARK (<70 PTS)';
      headline = 'Does not yet meet minimum B2B / Household threshold.';
      coaching = `Current score: ${totalScore}/100. Luxury households require zero recent at-fault incidents, verifiable schedule endurance, clean-record attestation, and authentic business attire photographs.`;
    }
  }

  // Update AI Results DOM Panel
  const totalEl = document.getElementById('aiTotalScore');
  const pillEl = document.getElementById('aiTierPill');
  const headEl = document.getElementById('aiTierHeadline');
  const coachEl = document.getElementById('aiCoachingText');
  if (totalEl) totalEl.textContent = String(totalScore);
  if (pillEl) {
    pillEl.className = `tier-pill ${tierClass}`;
    pillEl.textContent = tierLabel;
  }
  if (headEl) headEl.textContent = headline;
  if (coachEl) coachEl.textContent = coaching;

  const setBar = (valId, barId, val, max) => {
    const vEl = document.getElementById(valId);
    const bEl = document.getElementById(barId);
    if (vEl) vEl.textContent = `${val} / ${max}`;
    if (bEl) bEl.style.width = `${Math.round((val / max) * 100)}%`;
  };
  setBar('mNightVal', 'mNightBar', nightScore, 25);
  setBar('mSafetyVal', 'mSafetyBar', safetyScore, 25);
  setBar('mDiscretionVal', 'mDiscretionBar', discScore, 20);
  setBar('mGarageVal', 'mGarageBar', garageScore, 15);
  setBar('mLangVal', 'mLangBar', textLangScore, 15);

  return {
    name,
    city,
    driveYears,
    accidents,
    nightTier,
    mode,
    totalScore,
    tierLabel,
    breakdown: { nightScore, safetyScore, discScore, garageScore, textLangScore }
  };
}

// Photo upload pre-check (rejects obvious synthetic filenames and displays selected real photos count)
const vetPhotosInput = document.getElementById('vetPhotos');
const photoCheckStatus = document.getElementById('photoCheckStatus');
if (vetPhotosInput && photoCheckStatus) {
  vetPhotosInput.addEventListener('change', () => {
    const files = [...(vetPhotosInput.files || [])];
    if (files.length === 0) {
      photoCheckStatus.textContent = '';
      return;
    }
    const flagged = files.filter(f => /ai[-_ ]?generated|midjourney|dalle|stable[-_ ]?diffusion|synthetic/i.test(f.name));
    if (flagged.length > 0) {
      photoCheckStatus.style.color = '#f87171';
      photoCheckStatus.textContent = `❌ Rejected filename (${flagged[0].name}): AI-generated/synthetic photos are strictly forbidden. Upload 100% real photos only.`;
    } else {
      photoCheckStatus.style.color = '#4ade80';
      photoCheckStatus.textContent = `✓ ${files.length} real photo file(s) staged for Admin Visual Inspection (${files.map(f => f.name).join(', ')}).`;
    }
  });
}

// Wire AI Vetting Analysis button & Form submission
const runAiVettingBtn = document.getElementById('runAiVettingBtn');
const aiVettingForm = document.getElementById('aiVettingForm');
if (runAiVettingBtn) {
  runAiVettingBtn.addEventListener('click', () => {
    const res = evaluateChauffeurProfile();
    const panel = document.getElementById('aiResultStatus');
    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return res;
  });
}

if (aiVettingForm) {
  aiVettingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (window.__vcSyncFormAccessibility) window.__vcSyncFormAccessibility(aiVettingForm);
    if (!aiVettingForm.checkValidity()) {
      const firstBad = aiVettingForm.querySelector(':invalid, .user-invalid-fallback');
      if (firstBad) firstBad.focus();
      return;
    }

    const aiRes = evaluateChauffeurProfile();
    const email = document.getElementById('vetEmail').value.trim();
    const phone = document.getElementById('vetPhone').value.trim();
    const summary = document.getElementById('vetSummary').value.trim();
    const files = [...(document.getElementById('vetPhotos')?.files || [])].map(f => f.name);
    const submitBtn = document.getElementById('submitVettingBtn');
    const feedback = document.getElementById('vettingFormFeedback');

    if (submitBtn) submitBtn.disabled = true;

    const record = {
      type: 'driver_onboarding_ai_vetting',
      candidate_name: aiRes.name,
      base_city: aiRes.city,
      email: email,
      phone: phone,
      operating_mode: aiRes.mode,
      ai_score: aiRes.totalScore,
      ai_tier: aiRes.tierLabel,
      photo_filenames: files,
      summary: summary,
      timestamp: new Date().toISOString()
    };

    const subjectLine = `Driver Onboarding Application [AI Score: ${aiRes.totalScore}/100 | ${aiRes.tierLabel}]: ${aiRes.name}`;
    const mailtoLines = [
      `Victoria Cosmos Ltd — Public Chauffeur Onboarding & AI Vetting Submission`,
      `Candidate: ${aiRes.name}`,
      `Base City: ${aiRes.city}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Preferred Operating Track: ${aiRes.mode}`,
      `AI Benchmark Score: ${aiRes.totalScore}/100 (${aiRes.tierLabel})`,
      `Breakdown -> Night Discipline: ${aiRes.breakdown.nightScore}/25 | Safety: ${aiRes.breakdown.safetyScore}/25 | Discretion: ${aiRes.breakdown.discScore}/20 | Estate/Garage: ${aiRes.breakdown.garageScore}/15 | Languages & Text: ${aiRes.breakdown.textLangScore}/15`,
      `Selected Real Photos: ${files.length ? files.join(', ') : '(Attach real photos in email)'}`,
      ``,
      `Work History Summary:`,
      summary
    ];

    const { mailtoUrl } = await transmitB2BDispatch('vc_driver_applications', record, subjectLine, record, mailtoLines);
    const safeName = escapeHtml(aiRes.name);

    feedback.className = 'form-feedback success';
    if (currentLang === 'de') {
      feedback.innerHTML = `✓ Bewerbung von <strong>${safeName}</strong> erfasst (KI-Score: <strong>${aiRes.totalScore}/100</strong>). Ihr Profil durchläuft nun das manuelle Admin-Vetting. Bitte senden Sie Ihre echten Geschäftsfotos ggf. direkt per Klick: <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">E-Mail mit Fotos an Dispatch senden</a>.`;
    } else if (currentLang === 'fr') {
      feedback.innerHTML = `✓ Candidature de <strong>${safeName}</strong> enregistrée (Score IA : <strong>${aiRes.totalScore}/100</strong>). Votre dossier passe en validation manuelle Admin. Joignez vos photos réelles si nécessaire : <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">Envoyer par e-mail au Dispatch</a>.`;
    } else {
      feedback.innerHTML = `✓ Dossier for <strong>${safeName}</strong> recorded (AI Benchmark Score: <strong>${aiRes.totalScore}/100</strong>). Status: Pending manual Admin Vetting of real photographs and background records. <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">Attach &amp; send real photos via email client</a>.`;
    }

    if (submitBtn) submitBtn.disabled = false;
  });
}

// Wire Luxury Contract Request Form (#luxuryContractForm)
const luxuryContractForm = document.getElementById('luxuryContractForm');
if (luxuryContractForm) {
  luxuryContractForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (window.__vcSyncFormAccessibility) window.__vcSyncFormAccessibility(luxuryContractForm);
    if (!luxuryContractForm.checkValidity()) {
      const firstBad = luxuryContractForm.querySelector(':invalid, .user-invalid-fallback');
      if (firstBad) firstBad.focus();
      return;
    }

    const comp = document.getElementById('luxComp').value.trim();
    const person = document.getElementById('luxPerson').value.trim();
    const email = document.getElementById('luxEmail').value.trim();
    const phone = document.getElementById('luxPhone').value.trim();
    const pkg = document.getElementById('luxPackageSelect').value;
    const unit = document.getElementById('luxUnitSelect').value;
    const msg = document.getElementById('luxMessage').value.trim();
    const submitBtn = document.getElementById('luxSubmitBtn');
    const feedback = document.getElementById('luxFormFeedback');

    if (submitBtn) submitBtn.disabled = true;

    const record = {
      type: 'luxury_household_mandate',
      company: comp,
      contact_person: person,
      email: email,
      phone: phone,
      package: pkg,
      preferred_unit: unit,
      message: msg,
      timestamp: new Date().toISOString()
    };

    const subjectLine = `Confidential Luxury Chauffeur Mandate: ${comp} (${pkg.toUpperCase()} | Unit: ${unit})`;
    const mailtoLines = [
      `Victoria Cosmos Ltd — Luxury Chauffeur ("Chauffeur Only") Mandate Request`,
      `Family Office / Household / Company: ${comp}`,
      `Authorized Representative: ${person}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Package: ${pkg}`,
      `Preferred Vetted Unit: ${unit}`,
      `Timestamp: ${record.timestamp}`,
      ``,
      `Vehicles & Briefing Details:`,
      msg || '(Standard Master Agreement requested)'
    ];

    const { mailtoUrl } = await transmitB2BDispatch('vc_luxury_mandates', record, subjectLine, record, mailtoLines);
    const safePerson = escapeHtml(person);
    const safeComp = escapeHtml(comp);
    const safeUnit = escapeHtml(unit);

    feedback.className = 'form-feedback success';
    if (currentLang === 'de') {
      feedback.innerHTML = `✓ Vielen Dank, ${safePerson}! Ihre vertrauliche Anfrage für <strong>${safeComp}</strong> (Chauffeur: <strong>${safeUnit}</strong>) wurde an unsere Geschäftsführung übermittelt. <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">Direktversand per E-Mail öffnen</a>.`;
    } else if (currentLang === 'fr') {
      feedback.innerHTML = `✓ Merci, ${safePerson} ! Votre demande confidentielle pour <strong>${safeComp}</strong> (Chauffeur : <strong>${safeUnit}</strong>) a été transmise à notre direction. <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">Ouvrir dans votre messagerie</a>.`;
    } else {
      feedback.innerHTML = `✓ Thank you, ${safePerson}! Your confidential inquiry for <strong>${safeComp}</strong> (Unit: <strong>${safeUnit}</strong>) has been routed to Managing Dispatch. <a href="${mailtoUrl}" style="color:#fbbf24;text-decoration:underline;">Open direct email copy</a>.`;
    }

    if (submitBtn) submitBtn.disabled = false;
    luxuryContractForm.reset();
  });
}
