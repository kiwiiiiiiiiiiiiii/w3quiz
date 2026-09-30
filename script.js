/* ══════════════════════════════════════════════════════════════
   PRINCIPAL EXAM 2026 — राधाकृष्णन आयोग (1948–49) Quiz Engine
   ══════════════════════════════════════════════════════════════ */

// ── QUESTION DATA (50 Questions) ──
const quizData = [
  {
    q: "राधाकृष्णन आयोग का गठन किस वर्ष हुआ था?",
    options: ["1950", "1946", "1948", "1952"],
    correct: 2,
    explanation: "राधाकृष्णन आयोग (विश्वविद्यालय शिक्षा आयोग) का गठन नवम्बर 1948 में भारत सरकार द्वारा किया गया था।"
  },
  {
    q: "विश्वविद्यालय शिक्षा आयोग के अध्यक्ष कौन थे?",
    options: ["डॉ. ए.एल. मुदालियर", "डॉ. डी.एस. कोठारी", "डॉ. जाकिर हुसैन", "डॉ. सर्वपल्ली राधाकृष्णन"],
    correct: 3,
    explanation: "विश्वविद्यालय शिक्षा आयोग के अध्यक्ष डॉ. सर्वपल्ली राधाकृष्णन थे, जो बाद में भारत के राष्ट्रपति भी बने।"
  },
  {
    q: "राधाकृष्णन आयोग में कुल कितने सदस्य थे (अध्यक्ष सहित)?",
    options: ["10", "8", "12", "15"],
    correct: 0,
    explanation: "राधाकृष्णन आयोग में अध्यक्ष सहित कुल 10 सदस्य थे, जिनमें कुछ विदेशी विशेषज्ञ भी शामिल थे।"
  },
  {
    q: "राधाकृष्णन आयोग ने अपनी रिपोर्ट कब प्रस्तुत की?",
    options: ["1948", "1950", "1951", "1949"],
    correct: 3,
    explanation: "राधाकृष्णन आयोग ने अपनी रिपोर्ट अगस्त 1949 में भारत सरकार को प्रस्तुत की।"
  },
  {
    q: "राधाकृष्णन आयोग का मुख्य उद्देश्य क्या था?",
    options: [
      "भारतीय विश्वविद्यालय शिक्षा में सुधार हेतु सुझाव देना",
      "प्राथमिक शिक्षा में सुधार",
      "व्यावसायिक शिक्षा का विस्तार",
      "महिला शिक्षा को बढ़ावा देना"
    ],
    correct: 0,
    explanation: "राधाकृष्णन आयोग का मुख्य उद्देश्य भारतीय विश्वविद्यालय शिक्षा की स्थिति का अध्ययन कर उसमें सुधार हेतु सुझाव प्रस्तुत करना था।"
  },
  {
    q: "राधाकृष्णन आयोग को किस अन्य नाम से जाना जाता है?",
    options: [
      "माध्यमिक शिक्षा आयोग",
      "विश्वविद्यालय शिक्षा आयोग",
      "राष्ट्रीय शिक्षा आयोग",
      "उच्च शिक्षा परिषद"
    ],
    correct: 1,
    explanation: "राधाकृष्णन आयोग को 'विश्वविद्यालय शिक्षा आयोग' (University Education Commission) के नाम से भी जाना जाता है।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षा का कौन-सा उद्देश्य सर्वाधिक महत्वपूर्ण बताया?",
    options: [
      "तकनीकी प्रशिक्षण",
      "आर्थिक विकास",
      "व्यावसायिक कुशलता",
      "लोकतांत्रिक नागरिकता का विकास"
    ],
    correct: 3,
    explanation: "राधाकृष्णन आयोग ने लोकतांत्रिक नागरिकता के विकास को शिक्षा का सबसे महत्वपूर्ण उद्देश्य बताया ताकि छात्र जिम्मेदार नागरिक बन सकें।"
  },
  {
    q: "राधाकृष्णन आयोग ने स्नातक पाठ्यक्रम की अवधि कितने वर्ष की सिफारिश की?",
    options: ["2 वर्ष", "4 वर्ष", "3 वर्ष", "5 वर्ष"],
    correct: 2,
    explanation: "राधाकृष्णन आयोग ने स्नातक (डिग्री) पाठ्यक्रम की अवधि तीन वर्ष की सिफारिश की थी।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालय अनुदान आयोग (UGC) की स्थापना की सिफारिश किसलिए की?",
    options: [
      "परीक्षा प्रणाली में सुधार के लिए",
      "शिक्षक प्रशिक्षण के लिए",
      "पाठ्यक्रम निर्माण के लिए",
      "विश्वविद्यालयों को वित्तीय सहायता एवं मानक बनाए रखने के लिए"
    ],
    correct: 3,
    explanation: "आयोग ने विश्वविद्यालयों को वित्तीय सहायता प्रदान करने और शैक्षिक मानकों को बनाए रखने के लिए विश्वविद्यालय अनुदान आयोग (UGC) की स्थापना की सिफारिश की।"
  },
  {
    q: "राधाकृष्णन आयोग के अनुसार शिक्षा का माध्यम क्या होना चाहिए?",
    options: [
      "क्षेत्रीय भाषाएँ एवं संघीय भाषा (हिन्दी)",
      "केवल अंग्रेजी",
      "केवल हिन्दी",
      "केवल संस्कृत"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि शिक्षा का माध्यम क्षेत्रीय भाषाएँ होनी चाहिए तथा संघीय भाषा हिन्दी को भी प्रोत्साहित किया जाना चाहिए। अंग्रेजी को संक्रमण काल में जारी रखने की बात कही गई।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षकों के वेतन के बारे में क्या सिफारिश की?",
    options: [
      "वेतन में कोई परिवर्तन नहीं",
      "शिक्षकों को केवल मानदेय दिया जाए",
      "शिक्षकों के वेतन में पर्याप्त वृद्धि की जाए",
      "वेतन राज्य सरकार तय करे"
    ],
    correct: 2,
    explanation: "आयोग ने सिफारिश की कि योग्य व्यक्तियों को शिक्षण व्यवसाय की ओर आकर्षित करने के लिए शिक्षकों के वेतन में पर्याप्त वृद्धि की जानी चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने परीक्षा प्रणाली में किस प्रकार के सुधार का सुझाव दिया?",
    options: [
      "आंतरिक मूल्यांकन और बाह्य परीक्षा दोनों का मिश्रण",
      "केवल मौखिक परीक्षा",
      "केवल बाह्य परीक्षा",
      "परीक्षा की समाप्ति"
    ],
    correct: 0,
    explanation: "आयोग ने सुझाव दिया कि परीक्षा प्रणाली में आंतरिक मूल्यांकन (Internal Assessment) और बाह्य परीक्षा दोनों का उचित मिश्रण होना चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने ग्रामीण विश्वविद्यालयों की स्थापना की सिफारिश क्यों की?",
    options: [
      "कृषि अनुसंधान के लिए",
      "सैनिक प्रशिक्षण के लिए",
      "शहरी भीड़ कम करने के लिए",
      "ग्रामीण क्षेत्रों के विकास और ग्रामीण युवाओं को उच्च शिक्षा प्रदान करने के लिए"
    ],
    correct: 3,
    explanation: "आयोग ने ग्रामीण विश्वविद्यालयों की स्थापना की सिफारिश की ताकि ग्रामीण क्षेत्रों का विकास हो सके और वहाँ के युवाओं को उच्च शिक्षा के अवसर मिल सकें।"
  },
  {
    q: "राधाकृष्णन आयोग ने कॉलेजों में न्यूनतम छात्र संख्या कितनी होनी चाहिए, यह सुझाव दिया?",
    options: ["500", "100", "300", "1000"],
    correct: 1,
    explanation: "आयोग ने सिफारिश की कि किसी भी कॉलेज में न्यूनतम 100 छात्र होने चाहिए ताकि शैक्षिक संसाधनों का उचित उपयोग हो सके।"
  },
  {
    q: "राधाकृष्णन आयोग ने किस स्तर की शिक्षा पर ध्यान केंद्रित किया?",
    options: [
      "प्राथमिक शिक्षा",
      "माध्यमिक शिक्षा",
      "प्रौढ़ शिक्षा",
      "विश्वविद्यालय (उच्च) शिक्षा"
    ],
    correct: 3,
    explanation: "राधाकृष्णन आयोग ने विशेष रूप से विश्वविद्यालय स्तर की (उच्च) शिक्षा पर ध्यान केंद्रित किया और इसमें सुधार के लिए सिफारिशें दीं।"
  },
  {
    q: "राधाकृष्णन आयोग ने धार्मिक शिक्षा के बारे में क्या कहा?",
    options: [
      "सर्वधर्म समभाव की शिक्षा दी जानी चाहिए",
      "धार्मिक शिक्षा अनिवार्य होनी चाहिए",
      "धार्मिक शिक्षा पूर्णतः प्रतिबंधित होनी चाहिए",
      "केवल हिन्दू धर्म की शिक्षा दी जाए"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालयों में सर्वधर्म समभाव की भावना विकसित करने के लिए सभी प्रमुख धर्मों के मूल सिद्धांतों की शिक्षा दी जानी चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने महिला शिक्षा के संबंध में क्या सिफारिश की?",
    options: [
      "महिलाओं को केवल गृह विज्ञान पढ़ाया जाए",
      "महिला शिक्षा का विस्तार और विकास किया जाए",
      "महिला शिक्षा अनावश्यक है",
      "महिलाओं के लिए अलग विश्वविद्यालय बनाए जाएँ"
    ],
    correct: 1,
    explanation: "आयोग ने महिला शिक्षा के विस्तार और विकास की सिफारिश की तथा कहा कि महिलाओं को उच्च शिक्षा के समान अवसर प्रदान किए जाने चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने व्यावसायिक शिक्षा के बारे में क्या सुझाव दिया?",
    options: [
      "व्यावसायिक शिक्षा बंद कर दी जाए",
      "केवल इंजीनियरिंग शिक्षा पर ध्यान दिया जाए",
      "कृषि, वाणिज्य, तकनीकी आदि व्यावसायिक शिक्षा को बढ़ावा दिया जाए",
      "व्यावसायिक शिक्षा को उच्च शिक्षा से अलग रखा जाए"
    ],
    correct: 2,
    explanation: "आयोग ने कृषि, वाणिज्य, तकनीकी तथा अन्य व्यावसायिक शिक्षा को बढ़ावा देने की सिफारिश की ताकि छात्र रोजगार के योग्य बन सकें।"
  },
  {
    q: "राधाकृष्णन आयोग ने अंग्रेजी भाषा के शिक्षण के बारे में क्या कहा?",
    options: [
      "अंग्रेजी तुरंत हटा दी जाए",
      "अंग्रेजी को एकमात्र शिक्षा माध्यम बनाया जाए",
      "अंग्रेजी केवल स्नातकोत्तर स्तर पर पढ़ाई जाए",
      "अंग्रेजी को संक्रमण काल में जारी रखा जाए"
    ],
    correct: 3,
    explanation: "आयोग ने सिफारिश की कि जब तक भारतीय भाषाएँ शिक्षा के माध्यम के रूप में पूरी तरह विकसित नहीं हो जातीं, तब तक संक्रमण काल में अंग्रेजी को जारी रखा जाए।"
  },
  {
    q: "राधाकृष्णन आयोग के किस सदस्य ने बाद में भारत के उपराष्ट्रपति का पद संभाला?",
    options: [
      "डॉ. सर्वपल्ली राधाकृष्णन (अध्यक्ष)",
      "डॉ. जाकिर हुसैन",
      "डॉ. ताराचंद",
      "डॉ. लक्ष्मणस्वामी मुदालियर"
    ],
    correct: 0,
    explanation: "आयोग के अध्यक्ष डॉ. सर्वपल्ली राधाकृष्णन ने बाद में भारत के उपराष्ट्रपति (1952–1962) और फिर राष्ट्रपति (1962–1967) का पद संभाला।"
  },
  {
    q: "राधाकृष्णन आयोग ने इंटरमीडिएट कक्षाओं के बारे में क्या सिफारिश की?",
    options: [
      "इंटरमीडिएट को तीन वर्षीय बनाया जाए",
      "इंटरमीडिएट कक्षाओं को हटाकर उच्च माध्यमिक विद्यालय बनाए जाएँ",
      "इंटरमीडिएट कक्षाओं को बनाए रखा जाए",
      "इंटरमीडिएट को माध्यमिक शिक्षा बोर्ड में शामिल किया जाए"
    ],
    correct: 1,
    explanation: "आयोग ने सिफारिश की कि इंटरमीडिएट कक्षाओं को विश्वविद्यालयों से हटाकर 12वीं कक्षा तक के उच्च माध्यमिक विद्यालय (Higher Secondary Schools) बनाए जाएँ।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षक-छात्र अनुपात कितना होना चाहिए, इसकी सिफारिश की?",
    options: [
      "1:15",
      "1:20",
      "1:10",
      "1:30"
    ],
    correct: 2,
    explanation: "आयोग ने आदर्श शिक्षक-छात्र अनुपात 1:10 (ट्यूटोरियल कक्षाओं के लिए) की सिफारिश की ताकि प्रत्येक छात्र पर व्यक्तिगत ध्यान दिया जा सके।"
  },
  {
    q: "राधाकृष्णन आयोग ने अनुसंधान (Research) के बारे में क्या कहा?",
    options: [
      "अनुसंधान अनावश्यक है",
      "अनुसंधान केवल विदेशों में किया जाए",
      "अनुसंधान केवल सरकारी संस्थानों में हो",
      "विश्वविद्यालयों में अनुसंधान कार्य को प्रोत्साहित और विकसित किया जाए"
    ],
    correct: 3,
    explanation: "आयोग ने विश्वविद्यालयों में अनुसंधान कार्य को प्रोत्साहित करने और इसके लिए पर्याप्त सुविधाएँ व धन उपलब्ध कराने की सिफारिश की।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालयों के प्रशासन में किसकी भूमिका बढ़ाने की सिफारिश की?",
    options: [
      "शिक्षाविदों और विद्वानों की",
      "राजनेताओं की",
      "व्यापारियों की",
      "सैन्य अधिकारियों की"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालयों के प्रशासन में शिक्षाविदों और विद्वानों की भूमिका बढ़ाई जाए तथा राजनीतिक हस्तक्षेप कम किया जाए।"
  },
  {
    q: "राधाकृष्णन आयोग ने पुस्तकालय सुविधाओं के बारे में क्या सिफारिश की?",
    options: [
      "पुस्तकालय अनावश्यक हैं",
      "केवल केंद्रीय पुस्तकालय बनाया जाए",
      "पुस्तकालय केवल शिक्षकों के लिए हों",
      "विश्वविद्यालयों और कॉलेजों में समृद्ध पुस्तकालय सुविधाएँ विकसित की जाएँ"
    ],
    correct: 3,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालयों और कॉलेजों में समृद्ध पुस्तकालय सुविधाएँ विकसित की जाएँ ताकि छात्र और शिक्षक अध्ययन एवं अनुसंधान कर सकें।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षा पर सकल राष्ट्रीय आय का कितना प्रतिशत व्यय करने की सिफारिश की?",
    options: [
      "कम से कम 4%",
      "कम से कम 10%",
      "कम से कम 6%",
      "कम से कम 2%"
    ],
    correct: 1,
    explanation: "राधाकृष्णन आयोग ने सिफारिश की कि शिक्षा पर सकल राष्ट्रीय आय का कम से कम 10% व्यय किया जाना चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालय शिक्षा का उद्देश्य 'ज्ञान की खोज' के अतिरिक्त और क्या बताया?",
    options: [
      "केवल रोजगार देना",
      "खेल-कूद का विकास",
      "नेतृत्व क्षमता और चरित्र निर्माण",
      "केवल डिग्री प्रदान करना"
    ],
    correct: 2,
    explanation: "आयोग ने विश्वविद्यालय शिक्षा का उद्देश्य ज्ञान की खोज के साथ-साथ नेतृत्व क्षमता का विकास और चरित्र निर्माण भी बताया।"
  },
  {
    q: "राधाकृष्णन आयोग ने कुलपति (Vice-Chancellor) की नियुक्ति कैसे होनी चाहिए, इसकी सिफारिश की?",
    options: [
      "एक समिति द्वारा योग्यता के आधार पर चयन",
      "सरकार द्वारा सीधी नियुक्ति",
      "छात्र संघ द्वारा चुनाव",
      "वरिष्ठतम प्रोफेसर को स्वतः नियुक्त किया जाए"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि कुलपति की नियुक्ति एक उचित समिति द्वारा योग्यता और अनुभव के आधार पर की जानी चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग में कितने विदेशी सदस्य शामिल थे?",
    options: [
      "पाँच",
      "दो",
      "कोई नहीं",
      "तीन"
    ],
    correct: 3,
    explanation: "राधाकृष्णन आयोग में तीन विदेशी सदस्य शामिल थे जो अमेरिका और ब्रिटेन से थे — डॉ. आर्थर ई. मॉर्गन, डॉ. जेम्स एफ. डफ और डॉ. जॉन जे. टाइगर्ट।"
  },
  {
    q: "राधाकृष्णन आयोग ने सम्बद्ध कॉलेज (Affiliated Colleges) प्रणाली के बारे में क्या कहा?",
    options: [
      "केवल सरकारी कॉलेज सम्बद्ध हों",
      "सम्बद्धता प्रणाली की कमियों को दूर कर कॉलेजों को अधिक स्वायत्तता दी जाए",
      "इसे और मजबूत किया जाए",
      "सभी कॉलेज सम्बद्ध होने चाहिए"
    ],
    correct: 1,
    explanation: "आयोग ने सम्बद्धता प्रणाली की कमियों को दूर करने और कॉलेजों को अधिक शैक्षिक एवं प्रशासनिक स्वायत्तता प्रदान करने की सिफारिश की।"
  },
  {
    q: "राधाकृष्णन आयोग ने छात्र अनुशासन के संबंध में क्या सुझाव दिया?",
    options: [
      "छात्रों में आत्मानुशासन विकसित किया जाए और शिक्षक-छात्र संबंध सुधारे जाएँ",
      "सख्त दंड व्यवस्था लागू की जाए",
      "अनुशासनहीन छात्रों को निष्कासित किया जाए",
      "छात्रों को पूर्ण स्वतंत्रता दी जाए"
    ],
    correct: 0,
    explanation: "आयोग ने सुझाव दिया कि छात्रों में बाहरी अनुशासन की बजाय आत्मानुशासन विकसित किया जाए तथा शिक्षक-छात्र संबंधों में सुधार किया जाए।"
  },
  {
    q: "राधाकृष्णन आयोग ने किस प्रकार के पाठ्यक्रम की सिफारिश की?",
    options: [
      "विदेशी विश्वविद्यालयों का पाठ्यक्रम अपनाया जाए",
      "पूर्णतः सैद्धांतिक",
      "लचीला पाठ्यक्रम जिसमें सैद्धांतिक और व्यावहारिक दोनों पक्ष हों",
      "केवल व्यावहारिक"
    ],
    correct: 2,
    explanation: "आयोग ने एक लचीले पाठ्यक्रम की सिफारिश की जिसमें सैद्धांतिक ज्ञान और व्यावहारिक अनुभव दोनों का संतुलन हो।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षकों की सेवा शर्तों के बारे में क्या सुझाव दिया?",
    options: [
      "शिक्षकों को मनचाही छुट्टी मिलनी चाहिए",
      "ठेका नियुक्ति होनी चाहिए",
      "सेवा शर्तें सरकार तय करे",
      "सेवा शर्तें सुरक्षित और आकर्षक होनी चाहिए"
    ],
    correct: 3,
    explanation: "आयोग ने सिफारिश की कि शिक्षकों की सेवा शर्तें सुरक्षित और आकर्षक हों ताकि योग्य व्यक्ति शिक्षण पेशे में आएँ और बने रहें।"
  },
  {
    q: "राधाकृष्णन आयोग ने शैक्षिक स्वतंत्रता (Academic Freedom) के बारे में क्या कहा?",
    options: [
      "सरकार शैक्षिक नीतियाँ तय करे",
      "शैक्षिक स्वतंत्रता सीमित होनी चाहिए",
      "शिक्षकों और विश्वविद्यालयों को शैक्षिक स्वतंत्रता प्राप्त होनी चाहिए",
      "शैक्षिक स्वतंत्रता केवल वरिष्ठ प्रोफेसरों को मिले"
    ],
    correct: 2,
    explanation: "आयोग ने शिक्षकों और विश्वविद्यालयों को पूर्ण शैक्षिक स्वतंत्रता प्रदान करने की सिफारिश की ताकि वे स्वतंत्र रूप से शिक्षण और अनुसंधान कर सकें।"
  },
  {
    q: "राधाकृष्णन आयोग ने स्नातकोत्तर शिक्षा की अवधि कितनी सुझाई?",
    options: [
      "3 वर्ष",
      "1 वर्ष",
      "4 वर्ष",
      "2 वर्ष"
    ],
    correct: 3,
    explanation: "आयोग ने स्नातकोत्तर (M.A./M.Sc.) पाठ्यक्रम की अवधि दो वर्ष रखने की सिफारिश की।"
  },
  {
    q: "राधाकृष्णन आयोग ने ट्यूटोरियल पद्धति (Tutorial System) के बारे में क्या सुझाव दिया?",
    options: [
      "ट्यूटोरियल पद्धति को विश्वविद्यालयों में अपनाया जाए",
      "ट्यूटोरियल पद्धति अनावश्यक है",
      "ट्यूटोरियल केवल विज्ञान विषयों में हों",
      "ट्यूटोरियल केवल प्रथम वर्ष में हों"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि ट्यूटोरियल पद्धति को विश्वविद्यालयों में अपनाया जाए ताकि छात्रों को व्यक्तिगत मार्गदर्शन मिल सके।"
  },
  {
    q: "राधाकृष्णन आयोग ने भारत में कितने विश्वविद्यालय होने चाहिए, इसके बारे में क्या कहा?",
    options: [
      "विश्वविद्यालयों की संख्या तेजी से बढ़ाई जाए",
      "प्रत्येक जिले में एक विश्वविद्यालय हो",
      "विश्वविद्यालयों की संख्या सीमित रखी जाए और गुणवत्ता पर ध्यान दिया जाए",
      "विदेशी विश्वविद्यालयों की शाखाएँ खोली जाएँ"
    ],
    correct: 2,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालयों की संख्या अनियंत्रित रूप से न बढ़ाई जाए बल्कि गुणवत्ता पर ध्यान दिया जाए।"
  },
  {
    q: "राधाकृष्णन आयोग ने छात्रावास (Hostel) सुविधाओं के बारे में क्या सिफारिश की?",
    options: [
      "छात्रावासों की उचित व्यवस्था की जाए और छात्रों को आवासीय सुविधाएँ दी जाएँ",
      "छात्रावास अनावश्यक हैं",
      "छात्रावासों में शुल्क बढ़ाया जाए",
      "छात्रावास केवल लड़कों के लिए हों"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालयों में छात्रावासों की उचित व्यवस्था होनी चाहिए ताकि छात्रों को अनुकूल शैक्षिक वातावरण मिले।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षा में नैतिक मूल्यों के बारे में क्या कहा?",
    options: [
      "नैतिक शिक्षा वैकल्पिक होनी चाहिए",
      "नैतिक मूल्य शिक्षा का हिस्सा नहीं होने चाहिए",
      "नैतिक शिक्षा केवल धार्मिक संस्थानों में दी जाए",
      "नैतिक मूल्यों की शिक्षा अनिवार्य रूप से दी जानी चाहिए"
    ],
    correct: 3,
    explanation: "आयोग ने सिफारिश की कि शिक्षा में नैतिक और आध्यात्मिक मूल्यों का समावेश अनिवार्य रूप से किया जाना चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग स्वतंत्र भारत का कौन-सा शिक्षा आयोग था?",
    options: [
      "दूसरा",
      "तीसरा",
      "पहला",
      "चौथा"
    ],
    correct: 2,
    explanation: "राधाकृष्णन आयोग (1948–49) स्वतंत्र भारत का पहला शिक्षा आयोग था जिसने उच्च शिक्षा के पुनर्गठन की सिफारिशें दीं।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालय में प्रवेश के लिए न्यूनतम आयु कितनी सुझाई?",
    options: [
      "18 वर्ष",
      "16 वर्ष",
      "17 वर्ष",
      "15 वर्ष"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालय में प्रवेश के लिए छात्र की न्यूनतम आयु 18 वर्ष होनी चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षा को किसका साधन माना?",
    options: [
      "केवल आजीविका का",
      "केवल सरकारी नौकरी का",
      "केवल व्यक्तिगत विकास का",
      "सामाजिक, आर्थिक और राजनीतिक लोकतंत्र की सफलता का"
    ],
    correct: 3,
    explanation: "आयोग ने शिक्षा को सामाजिक, आर्थिक और राजनीतिक लोकतंत्र की सफलता का प्रमुख साधन माना।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालय में अध्यापन (Teaching) की मुख्य विधि क्या सुझाई?",
    options: [
      "केवल व्याख्यान (Lecture) विधि",
      "व्याख्यान, ट्यूटोरियल और सेमिनार का मिश्रण",
      "केवल प्रयोगशाला विधि",
      "केवल दूरस्थ शिक्षा"
    ],
    correct: 1,
    explanation: "आयोग ने व्याख्यान, ट्यूटोरियल और सेमिनार के मिश्रण को अध्यापन की प्रभावी विधि बताया।"
  },
  {
    q: "राधाकृष्णन आयोग ने छात्र कल्याण (Student Welfare) के लिए क्या सिफारिश की?",
    options: [
      "छात्र कल्याण की कोई आवश्यकता नहीं",
      "छात्र कल्याण सरकार का काम है",
      "प्रत्येक विश्वविद्यालय में छात्र कल्याण विभाग की स्थापना की जाए",
      "केवल मेधावी छात्रों को कल्याणकारी सुविधाएँ मिलें"
    ],
    correct: 2,
    explanation: "आयोग ने सिफारिश की कि प्रत्येक विश्वविद्यालय में छात्र कल्याण विभाग की स्थापना की जाए जो छात्रों के शारीरिक, मानसिक और सामाजिक कल्याण का ध्यान रखे।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षा के माध्यम के संबंध में संक्रमण काल कितने वर्ष का रखने की बात कही?",
    options: [
      "3 वर्ष",
      "10 वर्ष",
      "5 वर्ष",
      "20 वर्ष"
    ],
    correct: 1,
    explanation: "आयोग ने सुझाव दिया कि अंग्रेजी से भारतीय भाषाओं में संक्रमण का काल लगभग 10 वर्ष रखा जाए ताकि भारतीय भाषाओं में शिक्षण सामग्री का विकास हो सके।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालयों में सह-शिक्षा (Co-education) के बारे में क्या कहा?",
    options: [
      "सह-शिक्षा केवल स्नातकोत्तर स्तर पर हो",
      "सह-शिक्षा पर कोई टिप्पणी नहीं की",
      "सह-शिक्षा प्रतिबंधित होनी चाहिए",
      "सह-शिक्षा का समर्थन किया"
    ],
    correct: 3,
    explanation: "राधाकृष्णन आयोग ने सह-शिक्षा का समर्थन किया और कहा कि पुरुष एवं महिला छात्रों को एक साथ शिक्षा प्राप्त करने के अवसर मिलने चाहिए।"
  },
  {
    q: "राधाकृष्णन आयोग ने शिक्षा में शारीरिक स्वास्थ्य और खेलकूद के बारे में क्या सिफारिश की?",
    options: [
      "शारीरिक शिक्षा और खेलकूद को पाठ्यक्रम का अनिवार्य अंग बनाया जाए",
      "खेलकूद अनावश्यक है",
      "खेलकूद केवल वैकल्पिक हो",
      "खेलकूद केवल प्रतियोगी स्तर पर हो"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि शारीरिक शिक्षा और खेलकूद को विश्वविद्यालय पाठ्यक्रम का अनिवार्य अंग बनाया जाए ताकि छात्रों का सर्वांगीण विकास हो सके।"
  },
  {
    q: "राधाकृष्णन आयोग ने किस प्रकार की शिक्षा को 'राष्ट्र की सबसे बड़ी आवश्यकता' बताया?",
    options: [
      "तकनीकी शिक्षा",
      "चिकित्सा शिक्षा",
      "सैनिक शिक्षा",
      "कृषि शिक्षा और ग्रामीण शिक्षा"
    ],
    correct: 3,
    explanation: "भारत की अधिकांश जनसंख्या ग्रामीण क्षेत्रों में निवास करती थी, इसलिए आयोग ने कृषि शिक्षा और ग्रामीण शिक्षा को राष्ट्र की सबसे बड़ी आवश्यकता बताया।"
  },
  {
    q: "राधाकृष्णन आयोग ने रिपोर्ट के कितने अध्याय प्रस्तुत किए?",
    options: [
      "12",
      "18",
      "15",
      "20"
    ],
    correct: 1,
    explanation: "राधाकृष्णन आयोग ने अपनी रिपोर्ट में 18 अध्याय प्रस्तुत किए जिनमें विश्वविद्यालय शिक्षा के विभिन्न पहलुओं को विस्तार से कवर किया गया।"
  },
  {
    q: "राधाकृष्णन आयोग ने विश्वविद्यालयों में शिक्षण कार्य कितने दिनों का होना चाहिए, यह सिफारिश की?",
    options: [
      "कम से कम 180 दिन",
      "कम से कम 120 दिन",
      "कम से कम 150 दिन",
      "कम से कम 200 दिन"
    ],
    correct: 0,
    explanation: "आयोग ने सिफारिश की कि विश्वविद्यालयों में प्रभावी शिक्षण कार्य कम से कम 180 दिन (तीन सत्र) का होना चाहिए।"
  }
];


// ══════════════════ APP STATE ══════════════════
let state = {
  userName: "",
  currentQ: 0,
  answers: new Array(quizData.length).fill(null),
  submitted: false,
  mapVisible: false
};

// ══════════════════ DOM REFERENCES ══════════════════
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const welcomeScreen  = $("#welcome-screen");
const quizScreen     = $("#quiz-screen");
const resultScreen   = $("#result-screen");

const userNameInput  = $("#user-name");
const nameError      = $("#name-error");
const startBtn       = $("#start-btn");

const userDisplay    = $("#user-display");
const progressText   = $("#progress-text");
const progressBar    = $("#progress-bar");
const questionNumber = $("#question-number");
const questionText   = $("#question-text");
const optionsList    = $("#options-list");
const prevBtn        = $("#prev-btn");
const nextBtn        = $("#next-btn");
const submitBtn      = $("#submit-btn");
const toggleMapBtn   = $("#toggle-map-btn");
const questionMap    = $("#question-map");

const confirmModal   = $("#confirm-modal");
const modalMessage   = $("#modal-message");
const modalCancel    = $("#modal-cancel");
const modalConfirm   = $("#modal-confirm");

const resultUserName   = $("#result-user-name");
const scoreNumber      = $("#score-number");
const scorePercentage  = $("#score-percentage");
const scoreRemark      = $("#score-remark");
const statCorrect      = $("#stat-correct");
const statWrong        = $("#stat-wrong");
const statUnanswered   = $("#stat-unanswered");
const reviewList       = $("#review-list");
const retryBtn         = $("#retry-btn");
const ringFill         = $("#ring-fill");

// ══════════════════ SVG GRADIENT (for score ring) ══════════════════
(function injectSVGGradient() {
  const svg = document.querySelector(".score-ring");
  if (!svg) return;
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.setAttribute("id", "scoreGradient");
  gradient.setAttribute("x1", "0%"); gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%"); gradient.setAttribute("y2", "0%");
  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%"); stop1.setAttribute("stop-color", "#6366f1");
  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "100%"); stop2.setAttribute("stop-color", "#8b5cf6");
  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  svg.insertBefore(defs, svg.firstChild);
})();

// ══════════════════ SCREEN MANAGEMENT ══════════════════
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ══════════════════ WELCOME SCREEN LOGIC ══════════════════
startBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (!name) {
    nameError.textContent = "⚠️ कृपया अपना नाम दर्ज करें। नाम खाली नहीं छोड़ सकते।";
    userNameInput.classList.add("input-error");
    userNameInput.focus();
    return;
  }
  nameError.textContent = "";
  userNameInput.classList.remove("input-error");
  state.userName = name;
  userDisplay.textContent = `👤 ${name}`;
  showScreen(quizScreen);
  renderQuestion();
  renderQuestionMap();
});

userNameInput.addEventListener("input", () => {
  if (userNameInput.value.trim()) {
    nameError.textContent = "";
    userNameInput.classList.remove("input-error");
  }
});

userNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startBtn.click();
});

// ══════════════════ QUESTION RENDERING ══════════════════
function renderQuestion() {
  const idx = state.currentQ;
  const q = quizData[idx];
  const total = quizData.length;

  questionNumber.textContent = `प्रश्न ${idx + 1}`;
  questionText.textContent = q.q;
  progressText.textContent = `प्रश्न ${idx + 1} / ${total}`;
  progressBar.style.width = `${((idx + 1) / total) * 100}%`;

  // Navigation
  prevBtn.disabled = idx === 0;
  nextBtn.textContent = idx === total - 1 ? "अंतिम प्रश्न" : "अगला प्रश्न →";

  // Options
  const labels = ["A", "B", "C", "D"];
  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (state.answers[idx] === i ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.answers[idx] === i ? "true" : "false");
    btn.innerHTML = `
      <span class="option-label">${labels[i]}</span>
      <span class="option-text">${opt}</span>
    `;
    btn.addEventListener("click", () => selectOption(i));
    optionsList.appendChild(btn);
  });

  updateQuestionMap();
}

function selectOption(optionIndex) {
  state.answers[state.currentQ] = optionIndex;
  renderQuestion();
}

// ══════════════════ NAVIGATION ══════════════════
prevBtn.addEventListener("click", () => {
  if (state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  }
});

// ══════════════════ QUESTION MAP ══════════════════
function renderQuestionMap() {
  questionMap.innerHTML = "";
  quizData.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "map-dot";
    dot.textContent = i + 1;
    dot.setAttribute("aria-label", `प्रश्न ${i + 1} पर जाएँ`);
    dot.addEventListener("click", () => {
      state.currentQ = i;
      renderQuestion();
    });
    questionMap.appendChild(dot);
  });
  updateQuestionMap();
}

function updateQuestionMap() {
  const dots = questionMap.querySelectorAll(".map-dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("answered", "current");
    if (i === state.currentQ) dot.classList.add("current");
    else if (state.answers[i] !== null) dot.classList.add("answered");
  });
}

toggleMapBtn.addEventListener("click", () => {
  state.mapVisible = !state.mapVisible;
  questionMap.classList.toggle("hidden", !state.mapVisible);
  toggleMapBtn.textContent = state.mapVisible ? "✕ सूची बंद करें" : "📋 प्रश्न सूची";
});

// ══════════════════ SUBMIT LOGIC ══════════════════
submitBtn.addEventListener("click", () => {
  const unanswered = state.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    modalMessage.innerHTML = `आपने <strong>${unanswered}</strong> प्रश्नों के उत्तर नहीं दिए हैं।<br>क्या आप फिर भी टेस्ट जमा करना चाहते हैं?`;
  } else {
    modalMessage.textContent = "क्या आप टेस्ट जमा करना चाहते हैं? जमा करने के बाद उत्तर बदले नहीं जा सकेंगे।";
  }
  confirmModal.classList.remove("hidden");
});

modalCancel.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
});

modalConfirm.addEventListener("click", () => {
  confirmModal.classList.add("hidden");
  state.submitted = true;
  showResults();
});

// Close modal on overlay click
confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) confirmModal.classList.add("hidden");
});

// ══════════════════ RESULTS ══════════════════
function showResults() {
  const total = quizData.length;
  let correct = 0, wrong = 0, unanswered = 0;

  quizData.forEach((q, i) => {
    if (state.answers[i] === null) unanswered++;
    else if (state.answers[i] === q.correct) correct++;
    else wrong++;
  });

  const pct = Math.round((correct / total) * 100);

  resultUserName.textContent = `🎓 ${state.userName}`;
  scoreNumber.textContent = correct;
  scorePercentage.textContent = `${pct}%`;
  statCorrect.textContent = correct;
  statWrong.textContent = wrong;
  statUnanswered.textContent = unanswered;

  // Remark
  if (pct >= 90) scoreRemark.textContent = "🏆 उत्कृष्ट! अद्भुत प्रदर्शन!";
  else if (pct >= 70) scoreRemark.textContent = "👏 बहुत अच्छा! शानदार प्रयास!";
  else if (pct >= 50) scoreRemark.textContent = "👍 अच्छा! और अभ्यास करें।";
  else if (pct >= 30) scoreRemark.textContent = "📖 और मेहनत की जरूरत है।";
  else scoreRemark.textContent = "💪 निराश न हों, दोबारा प्रयास करें!";

  // Animate ring
  const circumference = 2 * Math.PI * 54; // ~339.292
  const offset = circumference - (correct / total) * circumference;
  setTimeout(() => {
    ringFill.style.strokeDashoffset = offset;
  }, 100);

  // Build review
  buildReview(correct, wrong, unanswered);

  showScreen(resultScreen);
}

function buildReview() {
  const labels = ["A", "B", "C", "D"];
  reviewList.innerHTML = "";

  quizData.forEach((q, i) => {
    const userAns = state.answers[i];
    const isCorrect = userAns === q.correct;
    const isUnanswered = userAns === null;

    let statusClass, badgeClass, badgeText;
    if (isUnanswered) {
      statusClass = "review-unanswered";
      badgeClass = "badge-unanswered";
      badgeText = "अनुत्तरित";
    } else if (isCorrect) {
      statusClass = "review-correct";
      badgeClass = "badge-correct";
      badgeText = "✅ सही";
    } else {
      statusClass = "review-wrong";
      badgeClass = "badge-wrong";
      badgeText = "❌ गलत";
    }

    let optionsHTML = "";
    q.options.forEach((opt, j) => {
      let cls = "review-option is-neutral";
      let prefix = `${labels[j]}. `;
      let suffix = "";

      if (j === q.correct) {
        cls = "review-option is-correct";
        suffix = " ✅ (सही उत्तर)";
      }
      if (userAns === j && j !== q.correct) {
        cls = "review-option is-wrong-selected";
        suffix = " ❌ (आपका उत्तर)";
      }
      if (userAns === j && j === q.correct) {
        suffix = " ✅ (आपका उत्तर — सही)";
      }

      optionsHTML += `<div class="${cls}">${prefix}${opt}${suffix}</div>`;
    });

    const item = document.createElement("div");
    item.className = `review-item ${statusClass}`;
    item.innerHTML = `
      <div class="review-q-number">प्रश्न ${i + 1}</div>
      <span class="review-status-badge ${badgeClass}">${badgeText}</span>
      <p class="review-q-text">${q.q}</p>
      <div class="review-options">${optionsHTML}</div>
      <div class="review-explanation"><strong>व्याख्या:</strong> ${q.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

// ══════════════════ RETRY ══════════════════
retryBtn.addEventListener("click", () => {
  state.currentQ = 0;
  state.answers = new Array(quizData.length).fill(null);
  state.submitted = false;
  state.mapVisible = false;
  questionMap.classList.add("hidden");
  toggleMapBtn.textContent = "📋 प्रश्न सूची";
  ringFill.style.strokeDashoffset = 339.292;
  showScreen(welcomeScreen);
  userNameInput.value = "";
  userNameInput.focus();
});

// ══════════════════ KEYBOARD NAV ══════════════════
document.addEventListener("keydown", (e) => {
  if (!quizScreen.classList.contains("active") || state.submitted) return;
  if (e.key === "ArrowLeft" && state.currentQ > 0) {
    state.currentQ--;
    renderQuestion();
  } else if (e.key === "ArrowRight" && state.currentQ < quizData.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else if (e.key >= "1" && e.key <= "4") {
    selectOption(parseInt(e.key) - 1);
  }
});
