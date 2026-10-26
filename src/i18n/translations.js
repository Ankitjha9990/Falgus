/**
 * Falgu website — centralized translation dictionary
 * Source of truth: Falgus_Hindi_Translation.xlsx
 *
 * Structure: translations[key][lang]
 * Usage:  const t = useT()   →   t('hero.heading1')
 */

export const translations = {
  /* ── Navigation ── */
  'nav.home':       { en: 'Home',        hi: 'होम' },
  'nav.model':      { en: 'Model',       hi: 'मॉडल' },
  'nav.farmers':    { en: 'For Farmers', hi: 'किसानों के लिए' },
  'nav.buyers':     { en: 'For Buyers',  hi: 'खरीदारों के लिए' },
  'nav.contact':    { en: 'Contact',     hi: 'संपर्क' },
  'nav.openMenu':   { en: 'Open navigation menu',  hi: 'नेविगेशन मेनू खोलें' },
  'nav.closeMenu':  { en: 'Close navigation menu', hi: 'नेविगेशन मेनू बंद करें' },
  'nav.logoAlt':    { en: "Falgu's logo",           hi: "Falgu's लोगो" },
  'nav.logoAriaLabel': { en: "Falgu's — go to homepage", hi: "Falgu's — होम पेज पर जाएँ" },
  'nav.toggleAriaLabel': {
    en: 'Switch to Hindi',
    hi: 'Switch to English',
  },

  /* ── Hero ── */
  'hero.heading1':   { en: "Bihar's 360°",         hi: 'बिहार का 360°' },
  'hero.heading2':   { en: 'mushroom ecosystem.',  hi: 'मशरूम इकोसिस्टम।' },
  'hero.sub1':       { en: 'Enabling farmers to grow year-round, earn better,', hi: 'किसानों को सालभर खेती करने, बेहतर कमाई करने' },
  'hero.sub2':       { en: 'and nourish a healthier India.',                   hi: 'और एक स्वस्थ भारत को पोषण देने में सक्षम बनाना।' },
  'hero.cta':        { en: 'Explore Our Work',  hi: 'हमारा काम देखें' },
  'hero.ctaAria':    { en: 'Explore our work — scroll to About section', hi: 'हमारा काम देखें — About सेक्शन पर जाएँ' },
  'hero.watchBtn':   { en: 'Watch Our Story',  hi: 'हमारी कहानी देखें' },
  'hero.watchAria':  { en: 'Watch Our Story — 2 min video', hi: 'हमारी कहानी देखें — 2 मिनट का वीडियो' },
  'hero.videoSub':   { en: '2 min video',      hi: '2 मिनट का वीडियो' },
  'hero.scroll':     { en: 'SCROLL\nTO EXPLORE', hi: 'और जानने\nके लिए स्क्रॉल करें' },
  'hero.scrollAria': { en: 'Scroll down to explore', hi: 'और जानने के लिए नीचे स्क्रॉल करें' },
  'hero.imgAlt': {
    en: "Organic composition of Bihar farmland, a mushroom growing room, and freshly harvested mushrooms — representing Falgu's 360° ecosystem",
    hi: "बिहार के खेत, मशरूम उगाने का कमरा और ताज़ा तोड़े गए मशरूम, जो Falgu's के 360° इकोसिस्टम को दर्शाते हैं",
  },
  'hero.trustAlt': {
    en: 'Trusted partners including Startup India, IIM Bodh Gaya, ICICI Foundation, Buddha Institute, and Canara Bank',
    hi: 'भरोसेमंद साझेदार: स्टार्टअप इंडिया, आईआईएम बोधगया, आईसीआईसीआई फाउंडेशन, बुद्धा इंस्टीट्यूट और केनरा बैंक',
  },
  /* Story modal */
  'hero.watchOurStory':     { en: 'Watch Our Story',                hi: 'हमारी कहानी देखें' },
  'hero.closeVideoAria':    { en: 'Close Watch Our Story video',    hi: 'वीडियो बंद करें' },
  'hero.iframeTitle':       { en: "Falgu's brand story",            hi: "Falgu's की कहानी" },
  'hero.sectionAria':       { en: "Falgu's — Bihar's 360° mushroom ecosystem", hi: "Falgu's — बिहार का 360° मशरूम इकोसिस्टम" },

  /* ── Problem ── */
  'problem.sectionAria':  { en: 'The Problem — seasonal mushroom production', hi: 'समस्या — मौसमी मशरूम उत्पादन' },
  'problem.eyebrow':      { en: 'The Problem',   hi: 'समस्या' },
  'problem.h2a':          { en: 'Year-round mushroom farming', hi: 'सालभर मशरूम की खेती' },
  'problem.h2b':          { en: 'is expensive.', hi: 'महंगी है।' },
  'problem.h2c':          { en: 'Production is still', hi: 'उत्पादन आज भी' },
  'problem.h2d':          { en: 'seasonal.',     hi: 'मौसमी है।' },
  'problem.body1':        { en: 'Farmers know how to grow mushrooms.', hi: 'किसान मशरूम उगाना जानते हैं।' },
  'problem.body2':        { en: 'The challenge is building infrastructure', hi: 'असली चुनौती है सालभर उत्पादन के लिए' },
  'problem.body3':        { en: 'for year-round production.', hi: 'इंफ्रास्ट्रक्चर तैयार करना।' },
  'problem.farmerImgAlt': {
    en: 'A farmer inside a mushroom growing room holding freshly harvested mushrooms',
    hi: 'मशरूम उगाने के कमरे में ताज़ा तोड़े गए मशरूम हाथ में लिए एक किसान',
  },
  'problem.chartAlt': {
    en: 'Seasonal production window chart: main growing period October through February, off-season March through September. Mostly 80% of production happens in these months.',
    hi: 'मौसमी उत्पादन चार्ट: मुख्य उत्पादन अवधि अक्टूबर से फरवरी, ऑफ-सीज़न मार्च से सितंबर। लगभग 80% उत्पादन अक्टूबर से फरवरी के बीच होता है।',
  },

  /* ── Model ── */
  'model.sectionAria':  { en: 'The Falgu Model', hi: 'Falgu मॉडल' },
  'model.eyebrow':      { en: 'The Falgu Model', hi: 'Falgu मॉडल' },
  'model.h2a':          { en: 'From growers to buyers,', hi: 'उगाने वालों से लेकर खरीदारों तक,' },
  'model.h2b':          { en: "Falgu's connects it all.", hi: "Falgu's सबको जोड़ता है।" },
  'model.sub':          { en: 'Infrastructure, coordination and market access, working together year-round.', hi: 'इंफ्रास्ट्रक्चर, तालमेल और बाज़ार तक पहुँच, सालभर एक साथ।' },
  'model.flowAria':     { en: 'Three stages in the Falgu model', hi: 'Falgu मॉडल के तीन चरण' },
  /* Stage 1 */
  'model.stage1.title': { en: "Falgu's Hub", hi: "Falgu's हब" },
  'model.stage1.desc':  { en: 'Dedicated Compost Infrastructure', hi: 'कम्पोस्ट के लिए समर्पित इंफ्रास्ट्रक्चर' },
  'model.stage1.alt':   { en: "Falgu's dedicated compost infrastructure hub", hi: "Falgu's का समर्पित कम्पोस्ट इंफ्रास्ट्रक्चर हब" },
  /* Stage 2 */
  'model.stage2.title': { en: 'Partner Growers', hi: 'साझेदार किसान' },
  'model.stage2.desc':  { en: 'Farms & Growing Rooms', hi: 'खेत और मशरूम उगाने के कमरे' },
  'model.stage2.alt':   { en: 'Falgu partner growers, farms and growing rooms', hi: 'Falgu के साझेदार किसान, खेत और मशरूम उगाने के कमरे' },
  /* Stage 3 */
  'model.stage3.title': { en: 'We buy from growers', hi: 'हम किसानों से खरीदते हैं' },
  'model.stage3.desc':  { en: 'Collect · Grade · Supply', hi: 'संग्रह · ग्रेडिंग · आपूर्ति' },
  'model.stage3.alt':   { en: 'Falgu mushroom collection, grading, and supply facility', hi: 'Falgu की मशरूम संग्रह, ग्रेडिंग और आपूर्ति इकाई' },

  /* ── Farmers ── */
  'farmers.sectionAria':  { en: 'For Farmers — income opportunity and support', hi: 'किसानों के लिए — आय का अवसर और सहायता' },
  'farmers.eyebrow':      { en: 'For Farmers',   hi: 'किसानों के लिए' },
  'farmers.h2a':          { en: 'Your income,',  hi: 'आपकी आमदनी,' },
  'farmers.h2b':          { en: 'five times over.', hi: 'पाँच गुना।' },
  'farmers.body':         {
    en: 'A seasonal cultivator earns \u20B950,000\u201380,000 from a three-month crop. With compost, a room and a contract, the same family can earn five times that on the same land.',
    hi: 'एक मौसमी किसान तीन महीने की फसल से ₹50,000–80,000 कमाता है। कम्पोस्ट, एक कमरा और एक अनुबंध के साथ, वही परिवार उसी ज़मीन पर इसका पाँच गुना कमा सकता है।',
  },
  'farmers.imgAlt': {
    en: 'Three women farmers proudly displaying bags of freshly harvested mushrooms, with a graphic comparing seasonal and year-round income',
    hi: 'ताज़ा तोड़े गए मशरूम के थैले गर्व से दिखाती तीन महिला किसान, साथ में मौसमी और सालभर की आमदनी की तुलना का ग्राफ़िक',
  },
  /* Benefit 1 */
  'farmers.b1.title': { en: "You don't need capital upfront", hi: 'शुरुआत में पूँजी की ज़रूरत नहीं' },
  'farmers.b1.body':  { en: 'Bank finance and subsidy cover most of the room. We help you get both.', hi: 'कमरे का ज़्यादातर खर्च बैंक लोन और सब्सिडी से पूरा होता है। दोनों दिलाने में हम आपकी मदद करते हैं।' },
  /* Benefit 2 */
  'farmers.b2.title': { en: "You don't need a buyer", hi: 'खरीदार ढूँढने की ज़रूरत नहीं' },
  'farmers.b2.body':  { en: 'We sign the buy-back before you plant, at a price agreed in advance.', hi: 'बुवाई से पहले ही हम पहले से तय कीमत पर बाय-बैक (वापस खरीद) का अनुबंध करते हैं।' },
  /* Benefit 3 */
  'farmers.b3.title': { en: "You don't need to learn alone", hi: 'अकेले सीखने की ज़रूरत नहीं' },
  'farmers.b3.body':  { en: 'Our team is with you every cycle, from spawning to harvest.', hi: 'बीज डालने (स्पॉनिंग) से लेकर तुड़ाई तक, हर चक्र में हमारी टीम आपके साथ है।' },

  /* ── Buyers ── */
  'buyers.sectionAria':  { en: 'For Buyers — mushrooms you can count on', hi: 'खरीदारों के लिए — भरोसेमंद मशरूम' },
  'buyers.eyebrow':      { en: 'For Buyers',          hi: 'खरीदारों के लिए' },
  'buyers.h2a':          { en: 'Mushrooms you can',   hi: 'ऐसे मशरूम, जिन पर' },
  'buyers.h2b':          { en: 'count on.',            hi: 'आप भरोसा कर सकें।' },
  'buyers.body':         { en: 'Consistent grading. Coordinated supply. One partner from farm to market.', hi: 'एक जैसी ग्रेडिंग। तालमेल वाली आपूर्ति। खेत से बाज़ार तक एक ही साझेदार।' },
  'buyers.cta':          { en: 'Discuss Your Supply Needs', hi: 'अपनी आपूर्ति की ज़रूरतों पर बात करें' },
  'buyers.ctaAria':      { en: 'Discuss your supply needs — scroll to contact section', hi: 'अपनी आपूर्ति की ज़रूरतों पर बात करें — Contact सेक्शन पर जाएँ' },
  'buyers.stripAria':    { en: 'Buyer benefits', hi: 'खरीदारों के लाभ' },
  'buyers.imgAlt': {
    en: 'Workers carefully sorting and grading freshly harvested mushrooms in a packing facility',
    hi: 'पैकिंग यूनिट में ताज़ा तोड़े गए मशरूम को सावधानी से छाँटते और ग्रेड करते कर्मचारी',
  },
  /* Strip benefits */
  'buyers.b1.title': { en: 'Steadier Supply',       hi: 'ज़्यादा स्थिर आपूर्ति' },
  'buyers.b1.body':  { en: 'Plan beyond seasonal peaks.', hi: 'सिर्फ़ सीज़न के भरोसे नहीं, सालभर की योजना बनाएँ।' },
  'buyers.b2.title': { en: 'Consistent Grading',    hi: 'एक जैसी ग्रेडिंग' },
  'buyers.b2.body':  { en: 'Sorted and packed with care.', hi: 'सावधानी से छाँटे और पैक किए गए।' },
  'buyers.b3.title': { en: 'Simpler Procurement',   hi: 'आसान खरीद' },
  'buyers.b3.body':  { en: 'One coordinated partner.', hi: 'एक ही साझेदार, पूरा तालमेल।' },

  /* ── Contact ── */
  'contact.sectionAria':  { en: "Contact — Let's Grow Together", hi: 'संपर्क — साथ मिलकर आगे बढ़ें' },
  'contact.eyebrow':      { en: 'Contact',               hi: 'संपर्क' },
  'contact.h2a':          { en: "Let's Grow",            hi: 'आइए, साथ मिलकर' },
  'contact.h2b':          { en: 'Together.',             hi: 'आगे बढ़ें।' },
  'contact.sub':          { en: "Have a question? We'd love to hear from you.", hi: 'कोई सवाल है? हमें आपसे बात करके खुशी होगी।' },
  'contact.formAria':     { en: 'Contact form',          hi: 'संपर्क फ़ॉर्म' },
  'contact.panelAria':    { en: 'Contact form',          hi: 'संपर्क फ़ॉर्म' },
  'contact.name':         { en: 'Name',                  hi: 'नाम' },
  'contact.namePh':       { en: 'Your name',             hi: 'अपना नाम' },
  'contact.email':        { en: 'Email',                 hi: 'ईमेल' },
  'contact.emailPh':      { en: 'Your email address',   hi: 'अपना ईमेल पता' },
  'contact.phone':        { en: 'Phone Number',          hi: 'फ़ोन नंबर' },
  'contact.phonePh':      { en: 'Your phone number',    hi: 'अपना फ़ोन नंबर' },
  'contact.role':         { en: 'I am a',               hi: 'आप कौन हैं?' },
  'contact.rolePh':       { en: 'Select an option',     hi: 'एक विकल्प चुनें' },
  'contact.roleFarmer':   { en: 'Farmer',               hi: 'किसान' },
  'contact.roleBuyer':    { en: 'Buyer',                hi: 'खरीदार' },
  'contact.rolePartner':  { en: 'Partner / Investor',  hi: 'साझेदार / निवेशक' },
  'contact.roleOther':    { en: 'Other',               hi: 'अन्य' },
  'contact.message':      { en: 'Message',              hi: 'संदेश' },
  'contact.messagePh':    { en: 'Write your message...', hi: 'अपना संदेश लिखें...' },
  'contact.submit':       { en: 'Send Message',         hi: 'संदेश भेजें' },
  'contact.submitting':   { en: 'Sending...',           hi: 'भेजा जा रहा है...' },
  'contact.submitAria':   { en: 'Send your message',   hi: 'अपना संदेश भेजें' },
  'contact.orCall':       { en: 'Or call',             hi: 'या कॉल करें' },
  /* Form submission states */
  'contact.successTitle': { en: 'Thank you for your message!', hi: 'आपके संदेश के लिए धन्यवाद!' },
  'contact.successBody':  {
    en: 'We have received your message and will get back to you shortly. To reach us directly, call',
    hi: 'हमें आपका संदेश प्राप्त हो गया है और हम जल्द ही आपसे संपर्क करेंगे। हमसे सीधे संपर्क करने के लिए कॉल करें',
  },
  'contact.successBodyOr':  { en: 'or email', hi: 'या ईमेल करें' },
  'contact.sendAnother':    { en: 'Send Another Message', hi: 'एक और संदेश भेजें' },
  'contact.submitError':    {
    en: 'Something went wrong while submitting. Please try again or reach out directly.',
    hi: 'संदेश भेजने में कोई समस्या आई। कृपया पुनः प्रयास करें या सीधे संपर्क करें।',
  },
  /* Validation errors */
  'contact.errName':    { en: 'Name is required.',           hi: 'नाम ज़रूरी है।' },
  'contact.errEmail':   { en: 'Email is required.',          hi: 'ईमेल ज़रूरी है।' },
  'contact.errEmailInvalid': { en: 'Please enter a valid email.', hi: 'कृपया सही ईमेल दर्ज करें।' },
  'contact.errMessage': { en: 'Please enter your message.',  hi: 'कृपया अपना संदेश लिखें।' },

  /* ── Footer ── */
  'footer.location':      { en: 'Our Location',  hi: 'हमारा पता' },
  'footer.address':       { en: 'Gaya, Bihar',   hi: 'गया, बिहार' },
  'footer.quickLinks':    { en: 'Quick Links',   hi: 'उपयोगी लिंक' },
  'footer.home':          { en: 'Home',          hi: 'होम' },
  'footer.about':         { en: 'About',         hi: 'हमारे बारे में' },
  'footer.ourModel':      { en: 'Our Model',     hi: 'हमारा मॉडल' },
  'footer.farmers':       { en: 'For Farmers',   hi: 'किसानों के लिए' },
  'footer.buyers':        { en: 'For Buyers',    hi: 'खरीदारों के लिए' },
  'footer.statement':     {
    en: 'Enabling farmers to grow year-round,\nearn better, and nourish a healthier India.',
    hi: 'किसानों को सालभर खेती करने, बेहतर कमाई करने\nऔर एक स्वस्थ भारत को पोषण देने में सक्षम बनाना।',
  },
  'footer.copyright':     { en: "© 2026 Falgu's. All rights reserved.", hi: "© 2026 Falgu's. सर्वाधिकार सुरक्षित।" },
  'footer.privacy':       { en: 'Privacy Policy',    hi: 'गोपनीयता नीति' },
  'footer.terms':         { en: 'Terms of Service',  hi: 'सेवा की शर्तें' },
  'footer.logoAlt':       { en: "Falgu's logo",      hi: "Falgu's लोगो" },

  /* ── Legal page ── */
  'legal.back':           { en: 'Back to home',   hi: 'होम पर वापस जाएँ' },
  'legal.eyebrow':        { en: 'Legal',          hi: 'कानूनी' },
  'legal.privacyTitle':   { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  'legal.termsTitle':     { en: 'Terms of Service', hi: 'सेवा की शर्तें' },
  'legal.privacyIntro':   {
    en: 'How Falgu handles personal information submitted through the website and business communications.',
    hi: 'Falgu वेबसाइट और व्यावसायिक संचार के माध्यम से प्रस्तुत व्यक्तिगत जानकारी को कैसे संभालता है।',
  },
  'legal.termsIntro':     {
    en: 'The rules governing use of the Falgu website and the nature of business communications made through it.',
    hi: 'Falgu वेबसाइट के उपयोग और उसके माध्यम से किए गए व्यावसायिक संचार को नियंत्रित करने वाले नियम।',
  },

  /* ── main aria ── */
  'main.aria': { en: "Falgu's — Bihar's 360° Mushroom Ecosystem", hi: "Falgu's — बिहार का 360° मशरूम इकोसिस्टम" },
}

/**
 * Tiny hook — returns a translate function bound to the current lang.
 * Import useLang from LanguageContext, then call useT() in a component.
 */
export function t(key, lang) {
  const entry = translations[key]
  if (!entry) {
    if (import.meta.env.DEV) console.warn(`[i18n] Missing key: "${key}"`)
    return key
  }
  return entry[lang] ?? entry.en ?? key
}
