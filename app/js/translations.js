// Многоязычная система - EN, RU, UZ

// Словарь переводов
const translations = {
    // Английский (базовый)
    'en': {
        // Общие элементы
        'language': 'EN',
        'contact-us': 'Contact Us',
        'platform': 'Platform',
        'radiology': 'Radiology',
        'oncology': 'Oncology',
        'publications': 'Publications',
        'about-us': 'About Us',
        'radiology-problems-title': 'The Problems in Modern Radiology',
        
        // Хедер и уведомления
        'notification-text': 'Want to learn more about SOF AI Solutions? Let\'s connect!',
        
        // Футер
        'contact-title': 'Contact Us',
        'contact-description': 'We are always open and welcome any questions you have for our team. If you wish to get in touch, please fill out the form below.',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'your-message': 'Your Message',
        'name-placeholder': 'Type your name here',
        'email-placeholder': 'Type your email here',
        'message-placeholder': 'Leave your question or comment here',
        'submit-button': 'SUBMIT YOUR MESSAGE',
        'privacy-policy': 'Privacy Policy',
        'terms': 'Terms of Use',
        'copyright': '© 2025 SOF AI. All Rights Reserved.',
        
        // Radiology CXR page
        'sof-cxr-title': 'SOF INSIGHT CXR',
        'cxr-accuracy': '97-99% accuracy in detecting abnormalities on chest X-rays',
        'cxr-click-condition': 'Click on a condition to see AI detection examples',
        'disease-nodule': 'Nodule',
        'disease-pneumothorax': 'Pneumothorax',
        'disease-atelectasis': 'Atelectasis',
        'disease-cardiomegaly': 'Cardiomegaly',
        'disease-consolidation': 'Consolidation',
        'disease-tuberculosis': 'Tuberculosis',
        'disease-fibrosis': 'Fibrosis',
        'disease-mediastinal-widening': 'Mediastinal widening',
        'disease-nodule-description': 'SOF INSIGHT CXR enables AI-powered detection of lung nodules with high accuracy, helping radiologists identify potential early signs of lung cancer.',
        'detection-accuracy': 'Detection Accuracy:',
        'workflow-optimization': 'Optimized Workflow Visualization',
        'workflow-description': 'Reduce overall reading time via worklist prioritization with AI',
        'abnormal-cases': 'Abnormal Cases',
        'normal-cases': 'Normal Cases',
        'reduction': '% Reduction',
        'abnormal-time-reduction': 'Reading time for all cases reduced by 13% (p < 0.001)',
        'normal-time-reduction': 'Reading time for normal cases reduced by 33% (p < 0.001)',
        'without-ai': 'Without AI',
        'with-ai': 'With AI',
        'reading-time-all': '<Reading time for all cases>',
        'reading-time-normal': '<Reading time for normal cases>',
        'early-diagnosis': '50% of lung cancer patients can be diagnosed earlier',
        'diagnosis-description': 'SOF INSIGHT CXR successfully analyzed the chest X-ray image of a 54-year-old male patient, <span style="color: var(--primary-color);">detecting lung cancer 3 years prior</span> to when it was diagnosed',
        'with-ai-detection': 'With AI Detection',
        'detected-by-sof': 'Detected by SOF AI',
        'score-percentage': 'Score 16.7%',
        'missed-without-ai': 'Missed (without AI)',
        'improved-reading': 'Improved reading performance',
        'better-detection': 'Better detection of early-stage lung cancer <span style="color: var(--primary-color);">without increasing false-positive cases</span>',
        'sof-ai': 'SOF AI',
        'radiologists-only': 'Radiologists only',
        'radiologists-sof': 'Radiologists + SOF',
        'sensitivity': '<Sensitivity>',
        'false-positive-markers': '<False-Positive Markers Per Radiograph>',
        
        // Blog page
        'blog-title': 'Latest Insights in AI-Powered Radiology',
        'blog-description': 'New Frontiers in Diagnostics: How Artificial Intelligence Is Transforming the Analysis of X-rays and Mammograms.',
        'blog-post-1-title': 'Benefits of AI in Radiology: Most Significant Advances and Potential Applications',
        'blog-post-1-tag': 'Radiology, AI, Medical Imaging',
        'blog-post-1-date': 'March 15, 2024',
        'blog-post-1-summary': 'The integration of AI into radiology has revolutionized the way medical imaging data is processed, analyzed, and utilized. This advancement brings significant improvements in accuracy, efficiency, and patient care. Below are some of the most notable advances and potential applications of AI in radiology.',
        'blog-post-1-read-more': 'Read More',
        'blog-post-2-title': 'Artificial intelligence for breast cancer screening in mammography (AI-STREAM): preliminary analysis of a prospective multicenter cohort study',
        'blog-post-2-tag': '#AIinHealthcare, #Mammography',
        'blog-post-2-date': '06 March 2025',
        'blog-post-2-summary': 'The Emmys 2021 red carpet did not disappoint, after a too-long hiatus. Celebrities such as Anya Taylor-Joy, Catherine Zeta-Jones, Kate Winslet and Kerry Washington put on their glad rags for the seriously stylish affair.',
        'blog-post-2-read-more': 'Read More',
        'blog-post-3-title': 'Artificial Intelligence for Assessment of Endotracheal TubePosition on Chest Radiographs: Validation in Patients FromTwo Institutions',
        'blog-post-3-tag': '#ChestRadiograph, #MedicalImaging',
        'blog-post-3-date': 'January 2024',
        'blog-post-3-summary': 'Timely and accurate interpretation of chest radiographs obtainedto evaluate endotracheal tube (ETT) position is important for facilitating prompt adjust-ment if needed.',
        'blog-post-3-read-more': 'Read More',
        'read-more': 'Read More',
        
        // Publication 1 page
        'pub1-title': 'Benefits of AI in Radiology: Most Significant Advances and Potential Applications',
        'pub1-intro': 'The integration of AI into radiology has revolutionized the way medical imaging data is processed, analyzed, and utilized. This advancement brings significant improvements in accuracy, efficiency, and patient care. Below are some of the most notable advances and potential applications of AI in radiology.',
        'pub1-section1-title': '1. Enhancing Image Acquisition',
        'pub1-section1-p1': 'AI has significantly improved the process of image acquisition in radiology, making it faster and more precise. Through AI-driven algorithms, radiologists can acquire higher-quality images more quickly, while reducing common issues such as motion artifacts caused by patient movement. This not only speeds up the imaging process but also ensures better-quality data, resulting in more accurate diagnoses. Additionally, AI helps create a more comfortable patient experience by reducing the amount of time spent during imaging procedures.',
        'pub1-section2-title': '2. Streamlining Reporting and Diagnostics',
        'pub1-section2-p1': 'AI technologies are transforming how radiologists handle the large volumes of imaging data they deal with daily. The following AI applications are streamlining the diagnostic process:',
        'pub1-section3-title': '3. Advancing Prognosis with Radiomics',
        'pub1-section3-p1': 'Beyond its role in diagnosis, AI is also making significant strides in the field of prognosis through radiomics. Radiomics refers to the extraction of quantitative features from medical images that reveal patterns not immediately visible to the human eye. These features can provide valuable insights into disease progression and patient outcomes. Some of the key benefits include:',
        'pub1-section4-title': '4. Challenges and Future Directions',
        'pub1-section4-p1': 'Despite the immense potential of AI in radiology, there are still challenges to overcome, particularly in the standardization of imaging data. Variations in scanners and acquisition protocols across different healthcare institutions can affect the consistency of data.',
        'pub1-section4-p2': 'To address this, researchers are working on harmonization tools that will standardize imaging data, ensuring more reliable and consistent results.',
        'pub1-conclusion-title': 'Conclusion',
        'pub1-conclusion-p1': 'The integration of AI into radiology offers substantial improvements across multiple areas, including image acquisition, diagnostic reporting, prognosis prediction, and treatment monitoring. By automating repetitive tasks, enhancing image quality, and providing valuable insights into disease progression, AI is transforming the radiology field and improving patient care. As technology continues to evolve, the role of AI in radiology will expand, offering even greater potential for precision medicine and better patient outcomes.',
        
        // PD-L1 page
        'pdl1-title-part1': 'Sof PD-L1: AI-Powered PD-L1',
        'pdl1-title-part2': 'Quantification for Immunotherapy.',
        'pdl1-description': 'Accurate, efficient, and objective PD-L1 scoring for immuno-oncology. Powered by AI, trusted by pathologists.',
        'pdl1-benefits-title': 'Key Benefits',
        'pdl1-benefits-subtitle': 'SOF PD-L1 delivers measurable improvements in cancer immunotherapy assessment',
        'pdl1-benefit1-title': 'Close to the Ground Truth',
        'pdl1-benefit1-text': 'Trained with 1M+ cell annotations by 150+ pathologists worldwide, SOF PD-L1 generates analysis results that are close to the ground truth.',
        'pdl1-benefit2-title': 'Reduced Discrepancy',
        'pdl1-benefit2-text': 'By generating objective results, SOF PD-L1 reduces interpretation discrepancy between pathologists, leading to more consistent diagnoses and treatment decisions.',
        'pdl1-benefit3-title': 'Patient Enrichment',
        'pdl1-benefit3-text': 'Based on 96% accuracy, SOF PD-L1 finds 50% more patients eligible for immunotherapy compared to human-classified PD-L1(-) patient groups.',
        'pdl1-features-title': 'Technical Features',
        'pdl1-features-subtitle': 'Advanced AI technologies for precise PD-L1 analysis',
        'pdl1-feature1-title': 'Detection',
        'pdl1-feature1-text': 'Detects tumor cell PD-L1 +/- and inflammatory cell PD-L1 +/- from whole slide images with high precision.',
        'pdl1-feature2-title': 'Quantification',
        'pdl1-feature2-text': 'Calculates PD-L1 positive scores including TPS (Tumor Proportion Score) and CPS (Combined Positive Score).',
        'pdl1-feature3-title': 'AI Score and Report',
        'pdl1-feature3-text': 'Provides AI analysis results including PD-L1 TPS score and map within a comprehensive report.',
        'pdl1-tps-label': 'PD-L1 (TPS) > 50%',
        'pdl1-tps-value': 'TPS : 97%',
        
        // Главная страница
        'solution': 'Solution',
        'ai-description': 'SOF AI is a cutting-edge platform that leverages artificial intelligence to assist radiologists in analyzing medical images, particularly chest X-rays and mammograms, with unprecedented speed and accuracy.',
        'seamless-integration': 'Seamless Integration',
        
        // About Us страница
        'cancer-complex': 'Cancer is complex — and every case is unique.',
        'ai-expertise': 'Behind each diagnosis lies a wealth of data that needs to be understood. This is where AI excels. By analyzing vast amounts of information, AI unlocks insights that lead to new discoveries, empowering us to make smarter, more personalized treatment decisions.',
        'ai-potential': 'With these powerful, data-driven revelations, we can take meaningful steps forward in the fight against cancer. Through AI, we have the potential to not just fight cancer — but to conquer it.',
        'vision-mission': 'Vision & Mission:',
        'conquer-cancer': 'To conquer cancer through the power of AI.',
        'develop-solutions': 'We develop advanced AI solutions that detect early-stage cancer and optimize personalized treatment plans. By unlocking the potential of AI, we aim to transform cancer care, offering hope and precision in the fight against this complex disease.',

        // Главная страница - баннер
        'ai-powered-title': 'AI-powered radiology software',
        'ai-powered-subtitle': 'for faster, more accurate diagnoses.',
        'ai-powered-description': 'SOF AI helps radiologists analyze chest X-rays and mammograms with 97-99% accuracy, reducing diagnostic time by up to 85% and improving patient outcomes.',
        'stat-accuracy': 'Accuracy',
        'stat-time-saved': 'Time Saved',
        'stat-conditions': 'Conditions Detected',

        // Маркет Исследования
        'market-research-title': 'Market Research',
        'hospital-market-title': 'Hospital Market',
        'hospital-market-description': 'The global healthcare AI market is rapidly expanding, projected to surpass $150 Billion by 2030. Reflecting this trend, hospitals worldwide show immense demand for AI solutions, with surveys indicating over 70% of healthcare leaders planning significant investments in diagnostic AI to enhance efficiency and care quality.',
        'radiology-opportunity-title': 'Radiology Opportunity',
        'radiology-opportunity-description': 'Billions of diagnostic imaging procedures occur globally each year, including over 2 billion X-rays. With the AI in medical imaging market growing at a CAGR of over 30%, there\'s a critical need and vast potential for AI integration in radiology centers worldwide to manage volumes, improve diagnostic accuracy, and alleviate radiologist workload.',

        // Интеграция и особенности
        'integration-description': 'SOF AI integrates seamlessly with existing hospital PACS systems and radiology workflows. The platform supports all standard DICOM formats and can be deployed on-premises or via secure cloud infrastructure.',
        'integration-expertise': 'Our system is designed to complement radiologists\' expertise, not replace it. By handling routine cases and flagging potential abnormalities, SOF AI allows specialists to focus their attention where it\'s needed most.',
        'integration-feature-1': 'DICOM and HL7 compatibility',
        'integration-feature-2': 'On-premises or cloud deployment options',

        // Ключевые функции
        'key-features': 'Key Features',
        'feature-realtime-title': 'Real-time Analysis',
        'feature-realtime-description': 'Process X-rays and mammograms in seconds, providing immediate results to radiologists without workflow disruption.',
        'feature-visual-title': 'Visual Highlighting',
        'feature-visual-description': 'Automatically highlights regions of interest on images, drawing attention to potential abnormalities for closer examination.',
        'feature-reporting-title': 'Automated Reporting',
        'feature-reporting-description': 'Generates preliminary reports with findings and recommendations, saving radiologists valuable documentation time.',
        'feature-telemedicine-title': 'Telemedicine opportunities',
        'feature-telemedicine-description': 'Reports available 24/7 and different languages including Uzb, Rus, English.',

        // Как это работает
        'how-it-works': 'How It Works',
        
        // Радиология CXR страница
        'sof-cxr-title': 'SOF INSIGHT CXR',
        'cxr-accuracy': '97-99% accuracy in detecting abnormalities on chest X-rays',
        'cxr-click-condition': 'Click on a condition to see AI detection examples',
        'disease-nodule': 'Nodule',
        'disease-pneumothorax': 'Pneumothorax',
        'disease-atelectasis': 'Atelectasis',
        'disease-cardiomegaly': 'Cardiomegaly',
        'disease-consolidation': 'Consolidation',
        'disease-tuberculosis': 'Tuberculosis',
        'disease-fibrosis': 'Fibrosis',
        'disease-mediastinal-widening': 'Mediastinal widening',
        'disease-nodule-description': 'SOF INSIGHT CXR enables AI-powered detection of lung nodules with high accuracy, helping radiologists identify potential early signs of lung cancer.',
        'detection-accuracy': 'Detection Accuracy:',
        'workflow-optimization': 'Optimized Workflow Visualization',
        'workflow-description': 'Reduce overall reading time via worklist prioritization with AI',
        'abnormal-cases': 'Abnormal Cases',
        'normal-cases': 'Normal Cases',
        'reduction': '% Reduction',
        'abnormal-time-reduction': 'Reading time for all cases reduced by 13% (p < 0.001)',
        'normal-time-reduction': 'Reading time for normal cases reduced by 33% (p < 0.001)',
        'without-ai': 'Without AI',
        'with-ai': 'With AI',
        'reading-time-all': '<Reading time for all cases>',
        'reading-time-normal': '<Reading time for normal cases>',
        'early-diagnosis': '50% of lung cancer patients can be diagnosed earlier',
        'diagnosis-description': 'SOF INSIGHT CXR successfully analyzed the chest X-ray image of a 54-year-old male patient, <span style="color: var(--primary-color);">detecting lung cancer 3 years prior</span> to when it was diagnosed',
        'with-ai-detection': 'With AI Detection',
        'detected-by-sof': 'Detected by SOF AI',
        'score-percentage': 'Score 16.7%',
        'missed-without-ai': 'Missed (without AI)',
        'improved-reading': 'Improved reading performance',
        'better-detection': 'Better detection of early-stage lung cancer <span style="color: var(--primary-color);">without increasing false-positive cases</span>',
        'sof-ai': 'SOF AI',
        'radiologists-only': 'Radiologists only',
        'radiologists-sof': 'Radiologists + SOF',
        'sensitivity': '<Sensitivity>',
        'false-positive-markers': '<False-Positive Markers Per Radiograph>',
        
        // Радиология MMG страница
        'sof-mmg-title': 'SOF INSIGHT MMG',
        'mmg-accuracy': 'High precision in breast cancer detection',

        // Advanced AI for Medical Imaging Section
        'ai-medical-imaging-title': 'Advanced AI for Medical Imaging',
        'ai-medical-imaging-desc-1': 'SOF AI utilizes advanced artificial intelligence to enhance the interpretation of lung and mammography images. By leveraging state-of-the-art image processing algorithms, SOF AI automates the detection of critical regions such as lung nodules, masses, and other key structures in breast tissue, improving the speed and accuracy of diagnoses.',
        'ai-medical-imaging-desc-2': 'Designed to integrate seamlessly with standard workstations and DICOM formats, SOF AI supports healthcare professionals by streamlining the analysis of medical images. This powerful tool ensures more reliable and detailed assessments, enabling faster clinical decisions and better patient outcomes.',
        'ai-medical-imaging-desc-3': 'With its user-friendly platform and sophisticated AI-driven analysis, SOF AI provides healthcare providers with the tools they need to identify conditions earlier and with greater precision, ultimately improving the quality of care.',
        
        // Transforming Radiology Section
        'transforming-radiology-title': 'Transforming Radiology with AI',
        'transforming-radiology-desc-1': 'The integration of AI into radiology offers substantial improvements across multiple areas, including image acquisition, diagnostic reporting, prognosis prediction, and treatment monitoring. By automating repetitive tasks, enhancing image quality, and providing valuable insights into disease progression, AI is transforming the radiology field and improving patient care.',
        'transforming-radiology-desc-2': 'As technology continues to evolve, the role of AI in radiology will expand, offering even greater potential for precision medicine and better patient outcomes.',
        'try-demo': 'Try Demo',
        
        // About SOF AI Section
        'about-sof-ai': 'About SOF AI',
        'about-sof-ai-desc-1': 'SOF AI is transforming radiology and oncology through advanced AI to improve diagnostic accuracy and patient outcomes.',
        'about-sof-ai-desc-2': 'With over 4 years of medical imaging data behind our technology, we deliver reliable and clinically relevant solutions.',
        'about-sof-ai-desc-3': 'We work closely with doctors, oncologists, and specialists across the republic to ensure seamless integration into real-world clinical workflows.',
        'more-information': 'More information',
        
        // Partners Section
        'our-partners': 'Our Partners',
        'partners-description': 'Leading healthcare institutions trust SOF AI for their radiology needs',
        
        // FAQ Section
        'faq-title': 'Have Any Questions?',
        'faq-description': 'Find answers to frequently asked questions about SOF AI technology',
        'faq-workflow-title': 'How Does SOF AI Improve Radiologist Workflow?',
        'faq-workflow-answer': 'SOF AI automates the initial analysis of medical images, helping radiologists focus on critical cases, reduce reading time, and minimize diagnostic fatigue.',
        'faq-image-types-title': 'What Types of Medical Images Can SOF AI Analyze?',
        'faq-image-types-answer': 'SOF AI supports chest X-rays (CXR) and mammography (MMG), detecting conditions like nodules, consolidation, pneumothorax, and more—with 97–99% accuracy. More modalities are being added.',
        'faq-accuracy-title': 'How Accurate Is SOF AI in Detecting Abnormalities?',
        'faq-accuracy-answer': 'Our models are clinically validated with accuracy rates of up to 99%, ensuring reliable detection of both common and subtle abnormalities.',
        'faq-integration-title': 'How Does SOF AI Integrate with Existing Hospital Systems?',
        'faq-integration-answer': 'SOF AI integrates easily with PACS, RIS, and other hospital IT systems using standard protocols like DICOM and HL7—ensuring smooth adoption without workflow disruption.',
        'faq-experts-title': 'Who Are the Clinical Experts Behind SOF AI?',
        'faq-experts-answer': 'We collaborate closely with radiologists, oncologists, and specialists across the republic, ensuring our solutions are clinically relevant and aligned with real-world healthcare needs.',
        
        // Articles Section
        'interesting-articles': 'Interesting articles',
        
        // Pipeline Steps
        'pipeline-step1': 'Medical image is uploaded',
        'pipeline-step2': 'AI model processes the image',
        'pipeline-step3': 'Key abnormalities are detected',
        'pipeline-step4': 'AI highlights regions of interest and generates a report',
        'pipeline-step5': 'Radiologist reviews and confirms the diagnosis',
        
        // Mammography page
        'radiology-mmg-title': 'Mammography AI',
        'radiology-mmg-description': '96% accuracy in detecting lesions suspicious of breast cancer in mammograms.',
        'radiology-mmg-features-title': 'Disease Detection',
        'radiology-mmg-features-desc': 'Our AI engine accurately identifies suspicious lesions in mammograms that may indicate breast cancer.',
        'radiology-mmg-feature1-title': 'Lesion Detection',
        'radiology-mmg-feature1-desc': 'Our AI engine identifies and localizes suspicious lesions that may indicate breast cancer, including masses, asymmetries, and calcifications.',
        'radiology-mmg-feature2-title': 'Heatmap Visualization',
        'radiology-mmg-feature2-desc': 'Visual representation of suspicious areas with color-coded highlighting to indicate the likelihood of malignancy.',
        'radiology-mmg-feature3-title': 'BI-RADS Assessment',
        'radiology-mmg-feature3-desc': 'Automated BI-RADS scoring to assist radiologists in categorizing mammogram findings according to standardized risk assessment criteria.',
        
        // Radiology MMG page
        'mmg-title': 'SOF INSIGHT MMG',
        'mmg-accuracy': '96% accuracy',
        'mmg-description': 'in detecting lesions suspicious of breast cancer in mammograms',
        'mmg-subtitle': 'AI-powered analysis for improved breast screening',
        'normal-benign-mass': 'Normal / Benign mass',
        'malignant-mass': 'Malignant mass',
        'clinical-benefits-title': 'Clinical Benefits',
        'clinical-benefits-subtitle': 'SOF INSIGHT MMG delivers measurable improvements in breast cancer detection and workflow efficiency',
        'earlier-diagnosis-title': 'Earlier Diagnosis',
        'earlier-diagnosis-text': '40% of breast cancer patients can be diagnosed earlier. SOF INSIGHT MMG can detect cancer in cases where it was missed in traditional analysis, enabling detection up to 2 years earlier.',
        'earlier-diagnosis-example': 'In a real case example, AI successfully analyzed a mammogram from 2020 where cancer was missed, but was later diagnosed in 2022.',
        'better-detection-title': 'Better Cancer Detection',
        'better-detection-text': 'According to studies in THE LANCET Digital Health, among women with top AI scores for negative mammograms after initial reading, 13% more cancers were detected earlier with SOF INSIGHT MMG.',
        'workflow-efficiency-title': 'Workflow Efficiency',
        'workflow-efficiency-text': 'SOF INSIGHT MMG can triage 60% of cases without missing any breast cancer. The suggested workflow model, where the AI score functions as supportive information, reduces radiologists\' reading volume and complements their interpretations.',
        'density-assessment-title': 'Automated Density Assessment',
        'density-assessment-text': 'SOF INSIGHT MMG automatically analyzes and generates quantitative density assessment during breast screening, supporting recent recommendations from the European Society of Breast Imaging (EUSOBI) that patients should be informed of their breast density when screened.',
        'density-assessment-note': 'Breast density is an important risk factor for breast cancer and can impact the sensitivity of traditional mammography.',
        'pub1-future-p2': 'As AI technologies continue to evolve, we anticipate even more sophisticated applications in radiology. These might include fully autonomous diagnostic systems for certain conditions, more personalized treatment planning based on imaging data, and integration with other medical technologies for comprehensive patient care.',
        'pub1-date': 'March 15, 2024',
        'pub1-tags': 'Radiology, AI, Medical Imaging',
    },
    
    // Русский
    'ru': {
        // Общие элементы
        'language': 'RU',
        'contact-us': 'Связаться с нами',
        'platform': 'Платформа',
        'radiology': 'Радиология',
        'oncology': 'Онкология',
        'publications': 'Публикации',
        'about-us': 'О нас',
        'radiology-problems-title': 'Проблемы современной радиологии',
        
        // Хедер и уведомления
        'notification-text': 'Хотите узнать больше о решениях SOF AI? Свяжитесь с нами!',
        
        // Футер
        'contact-title': 'Связаться с нами',
        'contact-description': 'Мы всегда открыты и рады ответить на любые вопросы. Если вы хотите связаться с нами, пожалуйста, заполните форму ниже.',
        'your-name': 'Ваше имя',
        'your-email': 'Ваш email',
        'your-message': 'Ваше сообщение',
        'name-placeholder': 'Введите ваше имя',
        'email-placeholder': 'Введите ваш email',
        'message-placeholder': 'Оставьте ваш вопрос или комментарий',
        'submit-button': 'ОТПРАВИТЬ СООБЩЕНИЕ',
        'privacy-policy': 'Политика конфиденциальности',
        'terms': 'Условия использования',
        'copyright': '© 2025 SOF AI. Все права защищены.',
        
        // Radiology CXR page
        'sof-cxr-title': 'SOF INSIGHT CXR',
        'cxr-accuracy': '97-99% точность в обнаружении аномалий на рентгеновских снимках грудной клетки',
        'cxr-click-condition': 'Нажмите на состояние, чтобы увидеть примеры обнаружения ИИ',
        'disease-nodule': 'Узел',
        'disease-pneumothorax': 'Пневмоторакс',
        'disease-atelectasis': 'Ателектаз',
        'disease-cardiomegaly': 'Кардиомегалия',
        'disease-consolidation': 'Уплотнение',
        'disease-tuberculosis': 'Туберкулез',
        'disease-fibrosis': 'Фиброз',
        'disease-mediastinal-widening': 'Расширение средостения',
        'disease-nodule-description': 'SOF INSIGHT CXR обеспечивает обнаружение легочных узлов с помощью ИИ с высокой точностью, помогая радиологам выявлять потенциальные ранние признаки рака легких.',
        'detection-accuracy': 'Точность обнаружения:',
        'workflow-optimization': 'Оптимизация рабочего процесса',
        'workflow-description': 'Сокращение общего времени чтения через приоритизацию рабочего списка с помощью ИИ',
        'abnormal-cases': 'Аномальные случаи',
        'normal-cases': 'Нормальные случаи',
        'reduction': '% Сокращение',
        'abnormal-time-reduction': 'Время чтения для всех случаев сокращено на 13% (p < 0,001)',
        'normal-time-reduction': 'Время чтения для нормальных случаев сокращено на 33% (p < 0,001)',
        'without-ai': 'Без ИИ',
        'with-ai': 'С ИИ',
        'reading-time-all': '<Время чтения для всех случаев>',
        'reading-time-normal': '<Время чтения для нормальных случаев>',
        'early-diagnosis': '50% пациентов с раком легких могут быть диагностированы раньше',
        'diagnosis-description': 'SOF INSIGHT CXR успешно проанализировал рентгеновский снимок грудной клетки 54-летнего пациента, <span style="color: var(--primary-color);">обнаружив рак легких за 3 года</span> до его диагностики',
        'with-ai-detection': 'С обнаружением ИИ',
        'detected-by-sof': 'Обнаружено SOF AI',
        'score-percentage': 'Оценка 16.7%',
        'missed-without-ai': 'Пропущено (без ИИ)',
        'improved-reading': 'Улучшенная производительность чтения',
        'better-detection': 'Лучшее обнаружение рака легких на ранней стадии <span style="color: var(--primary-color);">без увеличения ложноположительных случаев</span>',
        'sof-ai': 'SOF AI',
        'radiologists-only': 'Только радиологи',
        'radiologists-sof': 'Радиологи + SOF',
        'sensitivity': '<Чувствительность>',
        'false-positive-markers': '<Ложноположительные маркеры на рентгенограмму>',
        
        // Blog page
        'blog-title': 'Последние достижения в радиологии с использованием ИИ',
        'blog-description': 'Новые рубежи в диагностике: как искусственный интеллект трансформирует анализ рентгеновских снимков и маммограмм.',
        'blog-post-1-title': 'Преимущества ИИ в радиологии: наиболее значимые достижения и потенциальные применения',
        'blog-post-1-tag': 'Радиология, ИИ, Медицинская визуализация',
        'blog-post-1-date': '15 марта 2024',
        'blog-post-1-summary': 'Интеграция ИИ в радиологию революционизировала способ обработки, анализа и использования данных медицинской визуализации. Это достижение приносит значительные улучшения в точности, эффективности и уходе за пациентами. Ниже приведены некоторые из наиболее значимых достижений и потенциальных применений ИИ в радиологии.',
        'blog-post-1-read-more': 'Подробнее',
        'blog-post-2-title': 'Искусственный интеллект для скрининга рака молочной железы в маммографии (AI-STREAM): предварительный анализ проспективного многоцентрового когортного исследования',
        'blog-post-2-tag': '#ИИвЗдравоохранении, #Маммография',
        'blog-post-2-date': '06 марта 2025',
        'blog-post-2-summary': 'Красная дорожка Эмми 2021 не разочаровала после слишком долгого перерыва. Такие знаменитости, как Аня Тейлор-Джой, Кэтрин Зета-Джонс, Кейт Уинслет и Керри Вашингтон, нарядились для этого по-настоящему стильного мероприятия.',
        'blog-post-2-read-more': 'Подробнее',
        'blog-post-3-title': 'Искусственный интеллект для оценки положения эндотрахеальной трубки на рентгенограммах грудной клетки: валидация у пациентов из двух учреждений',
        'blog-post-3-tag': '#РентгенГруднойКлетки, #МедицинскаяВизуализация',
        'blog-post-3-date': 'Январь 2024',
        'blog-post-3-summary': 'Своевременная и точная интерпретация рентгенограмм грудной клетки, полученных для оценки положения эндотрахеальной трубки (ЭТТ), важна для обеспечения быстрой корректировки при необходимости.',
        'blog-post-3-read-more': 'Подробнее',
        'read-more': 'Подробнее',
        
        // Publication 1 page
        'pub1-title': 'Преимущества ИИ в радиологии: наиболее значимые достижения и потенциальные применения',
        'pub1-intro': 'Интеграция ИИ в радиологию революционизировала способ обработки, анализа и использования данных медицинской визуализации. Это достижение приносит значительные улучшения в точности, эффективности и уходе за пациентами. Ниже приведены некоторые из наиболее значимых достижений и потенциальных применений ИИ в радиологии.',
        'pub1-section1-title': '1. Улучшение получения изображений',
        'pub1-section1-p1': 'ИИ значительно улучшил процесс получения изображений в радиологии, сделав его быстрее и точнее. С помощью алгоритмов, управляемых ИИ, радиологи могут быстрее получать изображения более высокого качества, одновременно уменьшая распространенные проблемы, такие как артефакты движения, вызванные движением пациента. Это не только ускоряет процесс визуализации, но и обеспечивает данные лучшего качества, что приводит к более точной диагностике. Кроме того, ИИ помогает создать более комфортный опыт для пациента, сокращая время, затрачиваемое на процедуры визуализации.',
        'pub1-section2-title': '2. Оптимизация отчетности и диагностики',
        'pub1-section2-p1': 'Технологии ИИ трансформируют то, как радиологи работают с большими объемами данных визуализации, с которыми они ежедневно имеют дело. Следующие приложения ИИ оптимизируют диагностический процесс:',
        'pub1-section3-title': '3. Улучшение прогнозирования с помощью радиомики',
        'pub1-section3-p1': 'Помимо своей роли в диагностике, ИИ также делает значительные успехи в области прогнозирования через радиомику. Радиомика относится к извлечению количественных характеристик из медицинских изображений, которые раскрывают паттерны, не сразу видимые человеческому глазу. Эти характеристики могут предоставить ценную информацию о прогрессировании заболевания и исходах пациентов. Некоторые из ключевых преимуществ включают:',
        'pub1-section4-title': '4. Вызовы и направления на будущее',
        'pub1-section4-p1': 'Несмотря на огромный потенциал ИИ в радиологии, все еще существуют проблемы, которые нужно преодолеть, особенно в стандартизации данных изображений. Вариации в сканерах и протоколах сбора данных в разных медицинских учреждениях могут влиять на согласованность данных.',
        'pub1-section4-p2': 'Для решения этой проблемы исследователи работают над инструментами гармонизации, которые стандартизируют данные изображений, обеспечивая более надежные и согласованные результаты.',
        'pub1-conclusion-title': 'Заключение',
        'pub1-conclusion-p1': 'Интеграция ИИ в радиологию предлагает существенные улучшения в нескольких областях, включая получение изображений, диагностическую отчетность, прогнозирование прогноза и мониторинг лечения. Автоматизируя повторяющиеся задачи, улучшая качество изображений и предоставляя ценную информацию о прогрессировании заболевания, ИИ трансформирует область радиологии и улучшает уход за пациентами. По мере развития технологий роль ИИ в радиологии будет расширяться, предлагая еще больший потенциал для прецизионной медицины и лучших результатов лечения пациентов.',
        
        // PD-L1 page
        'pdl1-title-part1': 'Sof PD-L1: ИИ для определения PD-L1',
        'pdl1-title-part2': 'Количественная оценка для иммунотерапии.',
        'pdl1-description': 'Точная, эффективная и объективная оценка PD-L1 для иммуно-онкологии. Работает на ИИ, которому доверяют патологи.',
        'pdl1-benefits-title': 'Ключевые преимущества',
        'pdl1-benefits-subtitle': 'SOF PD-L1 обеспечивает измеримые улучшения в оценке иммунотерапии рака',
        'pdl1-benefit1-title': 'Близость к эталонной истине',
        'pdl1-benefit1-text': 'Обученный на более чем 1 млн аннотаций клеток от более чем 150 патологов по всему миру, SOF PD-L1 генерирует результаты анализа, близкие к эталонной истине.',
        'pdl1-benefit2-title': 'Снижение расхождений',
        'pdl1-benefit2-text': 'Генерируя объективные результаты, SOF PD-L1 уменьшает расхождения в интерпретации между патологами, что приводит к более последовательным диагнозам и решениям о лечении.',
        'pdl1-benefit3-title': 'Расширение выбора пациентов',
        'pdl1-benefit3-text': 'На основе 96% точности, SOF PD-L1 находит на 50% больше пациентов, подходящих для иммунотерапии, по сравнению с группами пациентов PD-L1(-), классифицированными человеком.',
        'pdl1-features-title': 'Технические характеристики',
        'pdl1-features-subtitle': 'Передовые технологии ИИ для точного анализа PD-L1',
        'pdl1-feature1-title': 'Обнаружение',
        'pdl1-feature1-text': 'Обнаруживает опухолевые клетки PD-L1 +/- и воспалительные клетки PD-L1 +/- из изображений целого слайда с высокой точностью.',
        'pdl1-feature2-title': 'Количественная оценка',
        'pdl1-feature2-text': 'Рассчитывает положительные показатели PD-L1, включая TPS (показатель доли опухоли) и CPS (комбинированный положительный показатель).',
        'pdl1-feature3-title': 'ИИ-оценка и отчет',
        'pdl1-feature3-text': 'Предоставляет результаты анализа ИИ, включая оценку PD-L1 TPS и карту в рамках комплексного отчета.',
        'pdl1-tps-label': 'PD-L1 (TPS) > 50%',
        'pdl1-tps-value': 'TPS : 97%',
        
        // Главная страница
        'solution': 'Решение',
        'ai-description': 'SOF AI — это передовая платформа, использующая искусственный интеллект для помощи радиологам в анализе медицинских изображений, особенно рентгеновских снимков грудной клетки и маммограмм, с беспрецедентной скоростью и точностью.',
        'seamless-integration': 'Бесшовная интеграция',
        
        // About Us страница
        'cancer-complex': 'Рак сложен — и каждый случай уникален.',
        'ai-expertise': 'За каждым диагнозом стоит множество данных, которые необходимо понять. Именно здесь преуспевает ИИ. Анализируя огромные объемы информации, ИИ открывает инсайты, ведущие к новым открытиям, позволяя принимать более разумные, персонализированные решения по лечению.',
        'ai-potential': 'С этими мощными, основанными на данных откровениями мы можем сделать значимые шаги вперед в борьбе с раком. Благодаря ИИ у нас есть потенциал не просто бороться с раком, а победить его.',
        'vision-mission': 'Видение и миссия:',
        'conquer-cancer': 'Победить рак с помощью силы ИИ.',
        'develop-solutions': 'Мы разрабатываем передовые решения на базе ИИ, которые обнаруживают рак на ранней стадии и оптимизируют персонализированные планы лечения. Раскрывая потенциал ИИ, мы стремимся трансформировать уход за онкологическими больными, предлагая надежду и точность в борьбе с этим сложным заболеванием.',

        // Главная страница - баннер
        'ai-powered-title': 'ИИ-платформа для рентгенологии',
        'ai-powered-subtitle': 'для быстрой и точной диагностики.',
        'ai-powered-description': 'SOF AI помогает рентгенологам анализировать рентгенограммы грудной клетки и маммограммы с точностью 97-99%, сокращая время диагностики до 85% и улучшая результаты лечения пациентов.',
        'stat-accuracy': 'Точность',
        'stat-time-saved': 'Экономия времени',
        'stat-conditions': 'Выявляемых состояний',

        // Маркет Исследования
        'market-research-title': 'Исследование рынка',
        'hospital-market-title': 'Рынок больниц',
        'hospital-market-description': 'Мировой рынок ИИ в здравоохранении стремительно растет и к 2030 году превысит 150 миллиардов долларов. Отражая эту тенденцию, больницы по всему миру демонстрируют огромный спрос на решения с ИИ, а опросы показывают, что более 70% руководителей здравоохранения планируют значительные инвестиции в диагностический ИИ для повышения эффективности и качества медицинской помощи.',
        'radiology-opportunity-title': 'Возможности радиологии',
        'radiology-opportunity-description': 'Ежегодно в мире проводятся миллиарды диагностических визуализаций, включая более 2 миллиардов рентгеновских снимков. При росте рынка ИИ в медицинской визуализации со среднегодовым темпом более 30%, существует критическая потребность и огромный потенциал для интеграции ИИ в радиологических центрах по всему миру для управления объемами, повышения точности диагностики и снижения нагрузки на рентгенологов.',

        // Интеграция и особенности
        'integration-description': 'SOF AI беспрепятственно интегрируется с существующими больничными системами PACS и рабочими процессами радиологии. Платформа поддерживает все стандартные форматы DICOM и может быть развернута локально или через защищенную облачную инфраструктуру.',
        'integration-expertise': 'Наша система разработана для дополнения опыта рентгенологов, а не для их замены. Обрабатывая рутинные случаи и отмечая потенциальные аномалии, SOF AI позволяет специалистам сосредоточить свое внимание там, где это необходимо больше всего.',
        'integration-feature-1': 'Совместимость с DICOM и HL7',
        'integration-feature-2': 'Возможность локального или облачного развертывания',

        // Проблемы в современной радиологии
        'workforce-shortage': 'Нехватка персонала',
        'workforce-shortage-desc': 'Наблюдается критическая нехватка обученных радиологов, особенно в перегруженных или удаленных учреждениях.',
        'physician-overload': 'Перегрузка врачей',
        'physician-overload-desc': 'Объем медицинских изображений быстро растет, в то время как время для тщательного анализа сокращается.',
        'human-limitation': 'Человеческие ограничения',
        'human-limitation-desc': 'Субтильные паттерны и ранние признаки заболеваний часто остаются незамеченными при сканировании.',
        'missed-diagnosis': 'Упущенное диагностическое окно',
        'missed-diagnosis-desc': 'Задержки в диагностике часто приводят к упущенным возможностям раннего лечения.',
        
        // Расширенный ИИ-анализ
        'advanced-ai-title': 'Расширенный ИИ-анализ',
        'advanced-ai-desc-1': 'SOF AI использует алгоритмы глубокого обучения, обученные на миллионах медицинских изображений, для обнаружения аномалий с точностью 97-99%. Система может идентифицировать более 60 различных состояний на рентгенограммах грудной клетки и маммограммах.',
        'advanced-ai-desc-2': 'Наши проприетарные нейронные сети специально оптимизированы для медицинской визуализации, что позволяет точно обнаруживать даже тонкие признаки заболевания, которые могут быть пропущены при обычном анализе.',
        'feature-automated-detection': 'Автоматическое обнаружение аномалий',
        'feature-precise-localization': 'Точная локализация с визуализацией тепловой карты',
        'feature-automated-report': 'Автоматическое создание отчетов',
        
        // Статистика рынка
        'stat-xray-exams': 'Ежегодных рентгеновских исследований в мире',
        'stat-ai-investments': 'Руководителей, планирующих инвестиции в ИИ',
        'stat-imaging-cagr': 'Рост рынка ИИ в области визуализации',
        'stat-ai-market': 'Глобальный рынок ИИ в здравоохранении к 2030 году',

        // Ключевые функции
        'key-features': 'Ключевые функции',
        'feature-realtime-title': 'Анализ в реальном времени',
        'feature-realtime-description': 'Обработка рентгенограмм и маммограмм за секунды, предоставление немедленных результатов рентгенологам без нарушения рабочего процесса.',
        'feature-visual-title': 'Визуальное выделение',
        'feature-visual-description': 'Автоматически выделяет области интереса на изображениях, привлекая внимание к потенциальным аномалиям для более детального изучения.',
        'feature-reporting-title': 'Автоматическая отчетность',
        'feature-reporting-description': 'Генерирует предварительные отчеты с результатами и рекомендациями, экономя время рентгенологов на документацию.',
        'feature-telemedicine-title': 'Возможности телемедицины',
        'feature-telemedicine-description': 'Отчеты доступны 24/7 на разных языках, включая узбекский, русский и английский.',

        // Как это работает
        'how-it-works': 'Как это работает',
        
        // Радиология CXR страница
        'sof-cxr-title': 'SOF INSIGHT CXR',
        'cxr-accuracy': '97-99% точность в обнаружении аномалий на рентгеновских снимках грудной клетки',
        'cxr-click-condition': 'Нажмите на состояние, чтобы увидеть примеры обнаружения ИИ',
        'disease-nodule': 'Узел',
        'disease-pneumothorax': 'Пневмоторакс',
        'disease-atelectasis': 'Ателектаз',
        'disease-cardiomegaly': 'Кардиомегалия',
        'disease-consolidation': 'Уплотнение',
        'disease-tuberculosis': 'Туберкулез',
        'disease-fibrosis': 'Фиброз',
        'disease-mediastinal-widening': 'Расширение средостения',
        'disease-nodule-description': 'SOF INSIGHT CXR обеспечивает обнаружение легочных узлов с помощью ИИ с высокой точностью, помогая радиологам выявлять потенциальные ранние признаки рака легких.',
        'detection-accuracy': 'Точность обнаружения:',
        'workflow-optimization': 'Оптимизация рабочего процесса',
        'workflow-description': 'Сокращение общего времени чтения через приоритизацию рабочего списка с помощью ИИ',
        'abnormal-cases': 'Аномальные случаи',
        'normal-cases': 'Нормальные случаи',
        'reduction': '% Сокращение',
        'abnormal-time-reduction': 'Время чтения для всех случаев сокращено на 13% (p < 0,001)',
        'normal-time-reduction': 'Время чтения для нормальных случаев сокращено на 33% (p < 0,001)',
        'without-ai': 'Без ИИ',
        'with-ai': 'С ИИ',
        'reading-time-all': '<Время чтения для всех случаев>',
        'reading-time-normal': '<Время чтения для нормальных случаев>',
        'early-diagnosis': '50% пациентов с раком легких могут быть диагностированы раньше',
        'diagnosis-description': 'SOF INSIGHT CXR успешно проанализировал рентгеновский снимок грудной клетки 54-летнего пациента, <span style="color: var(--primary-color);">обнаружив рак легких за 3 года</span> до его диагностики',
        'with-ai-detection': 'С обнаружением ИИ',
        'detected-by-sof': 'Обнаружено SOF AI',
        'score-percentage': 'Оценка 16.7%',
        'missed-without-ai': 'Пропущено (без ИИ)',
        'improved-reading': 'Улучшенная производительность чтения',
        'better-detection': 'Лучшее обнаружение рака легких на ранней стадии <span style="color: var(--primary-color);">без увеличения ложноположительных случаев</span>',
        'sof-ai': 'SOF AI',
        'radiologists-only': 'Только радиологи',
        'radiologists-sof': 'Радиологи + SOF',
        'sensitivity': '<Чувствительность>',
        'false-positive-markers': '<Ложноположительные маркеры на рентгенограмму>',
        
        // Радиология MMG страница
        'sof-mmg-title': 'SOF INSIGHT MMG',
        'mmg-accuracy': 'Высокая точность в обнаружении рака молочной железы',

        // Advanced AI for Medical Imaging Section
        'ai-medical-imaging-title': 'Продвинутый ИИ для медицинской визуализации',
        'ai-medical-imaging-desc-1': 'SOF AI использует передовой искусственный интеллект для улучшения интерпретации снимков легких и маммографии. Используя современные алгоритмы обработки изображений, SOF AI автоматизирует обнаружение критических областей, таких как узлы в легких, массы и другие ключевые структуры в тканях молочной железы, повышая скорость и точность диагностики.',
        'ai-medical-imaging-desc-2': 'Разработанный для беспрепятственной интеграции со стандартными рабочими станциями и форматами DICOM, SOF AI поддерживает медицинских специалистов, упрощая анализ медицинских изображений. Этот мощный инструмент обеспечивает более надежные и детальные оценки, позволяя принимать более быстрые клинические решения и улучшая результаты лечения пациентов.',
        'ai-medical-imaging-desc-3': 'Благодаря удобной платформе и сложному анализу на основе ИИ, SOF AI предоставляет медицинским работникам инструменты, необходимые для выявления заболеваний на более ранних стадиях и с большей точностью, что в конечном итоге улучшает качество медицинской помощи.',
        
        // Transforming Radiology Section
        'transforming-radiology-title': 'Трансформация радиологии с помощью ИИ',
        'transforming-radiology-desc-1': 'Интеграция ИИ в радиологию предлагает существенные улучшения в нескольких областях, включая получение изображений, диагностическую отчетность, прогнозирование прогноза и мониторинг лечения. Автоматизируя повторяющиеся задачи, улучшая качество изображений и предоставляя ценную информацию о прогрессировании заболевания, ИИ трансформирует сферу радиологии и улучшает уход за пациентами.',
        'transforming-radiology-desc-2': 'По мере развития технологий роль ИИ в радиологии будет расширяться, предлагая еще больший потенциал для прецизионной медицины и лучших результатов лечения пациентов.',
        'try-demo': 'Попробовать демо',
        
        // About SOF AI Section
        'about-sof-ai': 'О SOF AI',
        'about-sof-ai-desc-1': 'SOF AI трансформирует радиологию и онкологию с помощью передового ИИ для повышения точности диагностики и улучшения результатов лечения пациентов.',
        'about-sof-ai-desc-2': 'С более чем 4-летними данными медицинской визуализации, лежащими в основе нашей технологии, мы предоставляем надежные и клинически значимые решения.',
        'about-sof-ai-desc-3': 'Мы тесно сотрудничаем с врачами, онкологами и специалистами по всей республике, чтобы обеспечить беспрепятственную интеграцию в реальные клинические рабочие процессы.',
        'more-information': 'Подробнее',
        
        // Partners Section
        'our-partners': 'Наши партнеры',
        'partners-description': 'Ведущие медицинские учреждения доверяют SOF AI для своих радиологических потребностей',
        
        // FAQ Section
        'faq-title': 'Есть вопросы?',
        'faq-description': 'Найдите ответы на часто задаваемые вопросы о технологии SOF AI',
        'faq-workflow-title': 'Как SOF AI улучшает рабочий процесс радиолога?',
        'faq-workflow-answer': 'SOF AI автоматизирует первичный анализ медицинских изображений, помогая радиологам сосредоточиться на критических случаях, сократить время чтения и минимизировать диагностическую усталость.',
        'faq-image-types-title': 'Какие типы медицинских изображений может анализировать SOF AI?',
        'faq-image-types-answer': 'SOF AI поддерживает рентгенограммы грудной клетки (CXR) и маммографию (MMG), обнаруживая такие состояния, как узлы, консолидация, пневмоторакс и многое другое с точностью 97-99%. Добавляются и другие модальности.',
        'faq-experts-title': 'Кто является клиническими экспертами SOF AI?',
        'faq-experts-answer': 'Мы тесно сотрудничаем с радиологами, онкологами и специалистами по всей республике, обеспечивая клиническую значимость наших решений и их соответствие реальным потребностям здравоохранения.',
        
        // Articles Section
        'interesting-articles': 'Интересные статьи',
        
        // Pipeline Steps
        'pipeline-step1': 'Загрузка медицинского изображения',
        'pipeline-step2': 'Обработка изображения моделью ИИ',
        'pipeline-step3': 'Выявление ключевых аномалий',
        'pipeline-step4': 'ИИ выделяет области интереса и генерирует отчет',
        'pipeline-step5': 'Радиолог проверяет и подтверждает диагноз',
        
        // Radiology MMG page
        'mmg-title': 'SOF INSIGHT MMG',
        'mmg-accuracy': '96% точность',
        'mmg-description': 'в обнаружении поражений, подозрительных на рак молочной железы, на маммограммах',
        'mmg-subtitle': 'Анализ на основе ИИ для улучшенного скрининга молочной железы',
        'normal-benign-mass': 'Нормальное / Доброкачественное образование',
        'malignant-mass': 'Злокачественное образование',
        'clinical-benefits-title': 'Клинические преимущества',
        'clinical-benefits-subtitle': 'SOF INSIGHT MMG обеспечивает измеримые улучшения в обнаружении рака молочной железы и эффективности рабочего процесса',
        'earlier-diagnosis-title': 'Ранняя диагностика',
        'earlier-diagnosis-text': '40% пациентов с раком молочной железы могут быть диагностированы раньше. SOF INSIGHT MMG может обнаружить рак в случаях, когда он был пропущен при традиционном анализе, позволяя обнаружить его на срок до 2 лет раньше.',
        'earlier-diagnosis-example': 'В реальном примере случая ИИ успешно проанализировал маммограмму от 2020 года, где рак был пропущен, но позже диагностирован в 2022 году.',
        'better-detection-title': 'Лучшее обнаружение рака',
        'better-detection-text': 'Согласно исследованиям в THE LANCET Digital Health, среди женщин с высокими оценками ИИ для отрицательных маммограмм после первоначального чтения, на 13% больше случаев рака было обнаружено раньше с помощью SOF INSIGHT MMG.',
        'workflow-efficiency-title': 'Эффективность рабочего процесса',
        'workflow-efficiency-text': 'SOF INSIGHT MMG может сортировать 60% случаев без пропуска рака молочной железы. Предлагаемая модель рабочего процесса, где оценка ИИ функционирует как вспомогательная информация, уменьшает объем чтения радиологов и дополняет их интерпретации.',
        'density-assessment-title': 'Автоматизированная оценка плотности',
        'density-assessment-text': 'SOF INSIGHT MMG автоматически анализирует и генерирует количественную оценку плотности во время скрининга молочной железы, поддерживая недавние рекомендации Европейского общества визуализации молочной железы (EUSOBI) о том, что пациенты должны быть информированы о плотности своей молочной железы при скрининге.',
        'density-assessment-note': 'Плотность молочной железы является важным фактором риска для рака молочной железы и может влиять на чувствительность традиционной маммографии.',
        'pub1-future-p2': 'По мере развития технологий искусственного интеллекта мы ожидаем еще более сложных приложений в радиологии. Они могут включать полностью автономные диагностические системы для определенных состояний, более персонализированное планирование лечения на основе данных визуализации и интеграцию с другими медицинскими технологиями для комплексного ухода за пациентами.',
        'pub1-date': '15 марта 2024',
        'pub1-tags': 'Радиология, ИИ, Медицинская визуализация',
    },
    
    // Узбекский
    'uz': {
        // Общие элементы
        'language': 'UZ',
        'contact-us': 'Bog\'lanish',
        'platform': 'Platforma',
        'radiology': 'Radiologiya',
        'oncology': 'Onkologiya',
        'publications': 'Nashrlar',
        'about-us': 'Biz haqimizda',
        
        // Хедер и уведомления
        'notification-text': 'SOF AI yechimlari haqida ko\'proq ma\'lumot olishni istaysizmi? Bog\'laning!',
        
        // Футер
        'contact-title': 'Bog\'lanish',
        'contact-description': 'Biz har doim ochiq va jamoamizga savollaringizni berishga xursandmiz. Agar bog\'lanishni istasangiz, quyidagi formani to\'ldiring.',
        'your-name': 'Ismingiz',
        'your-email': 'Elektron pochtangiz',
        'your-message': 'Xabaringiz',
        'name-placeholder': 'Ismingizni kiriting',
        'email-placeholder': 'Elektron pochtangizni kiriting',
        'message-placeholder': 'Savolingiz yoki fikringizni qoldiring',
        'submit-button': 'XABARNI YUBORISH',
        'privacy-policy': 'Maxfiylik siyosati',
        'terms': 'Foydalanish shartlari',
        'copyright': '© 2025 SOF AI. Barcha huquqlar himoyalangan.',
        
        // Radiology CXR page
        'sof-cxr-title': 'SOF INSIGHT CXR',
        'cxr-accuracy': 'Ko\'krak qafasi rentgenidagi anomaliyalarni aniqlashda 97-99% aniqlik',
        'cxr-click-condition': 'Sun\'iy intellekt aniqlash misollarini ko\'rish uchun holatni bosing',
        'disease-nodule': 'Tugun',
        'disease-pneumothorax': 'Pnevmotoraks',
        'disease-atelectasis': 'Atelektaz',
        'disease-cardiomegaly': 'Kardiomegaliya',
        'disease-consolidation': 'Konsolidatsiya',
        'disease-tuberculosis': 'Sil',
        'disease-fibrosis': 'Fibroz',
        'disease-mediastinal-widening': 'Mediastinal kengayish',
        'disease-nodule-description': 'SOF INSIGHT CXR sun\'iy intellekt yordamida o\'pka tugunlarini yuqori aniqlik bilan aniqlash imkonini beradi, bu esa radiologlarni o\'pka saratonining potentsial dastlabki belgilarini aniqlashga yordam beradi.',
        'detection-accuracy': 'Aniqlash aniqligi:',
        'workflow-optimization': 'Optimallashtirilgan ish jarayoni visualizatsiyasi',
        'workflow-description': 'Sun\'iy intellekt yordamida ish ro\'yxatini ustuvor qilish orqali umumiy o\'qish vaqtini kamaytirish',
        'abnormal-cases': 'Anomal holatlar',
        'normal-cases': 'Normal holatlar',
        'reduction': '% Kamaytirish',
        'abnormal-time-reduction': 'Barcha holatlar uchun o\'qish vaqti 13% ga kamaytirildi (p < 0.001)',
        'normal-time-reduction': 'Normal holatlar uchun o\'qish vaqti 33% ga kamaytirildi (p < 0.001)',
        'without-ai': 'Sun\'iy intellektsiz',
        'with-ai': 'Sun\'iy intellekt bilan',
        'reading-time-all': '<Barcha holatlar uchun o\'qish vaqti>',
        'reading-time-normal': '<Normal holatlar uchun o\'qish vaqti>',
        'early-diagnosis': 'O\'pka saratoni bilan og\'rigan bemorlarning 50% ertaroq tashxis qo\'yilishi mumkin',
        'diagnosis-description': 'SOF INSIGHT CXR 54 yoshli erkak bemorning ko\'krak qafasi rentgen tasvirini muvaffaqiyatli tahlil qildi, <span style="color: var(--primary-color);">tashxis qo\'yilgan paytdan 3 yil oldin</span> o\'pka saratonini aniqlab',
        'with-ai-detection': 'Sun\'iy intellekt aniqlagani bilan',
        'detected-by-sof': 'SOF AI tomonidan aniqlangan',
        'score-percentage': 'Ball 16.7%',
        'missed-without-ai': 'O\'tkazib yuborilgan (sun\'iy intellektsiz)',
        'improved-reading': 'Takomillashtirilgan o\'qish samaradorligi',
        'better-detection': 'Soxta-ijobiy holatlarni ko\'paytirmasdan <span style="color: var(--primary-color);">erta bosqichdagi o\'pka saratonini yaxshiroq aniqlash</span>',
        'sof-ai': 'SOF AI',
        'radiologists-only': 'Faqat radiologlar',
        'radiologists-sof': 'Radiologlar + SOF',
        'sensitivity': '<Sezuvchanlik>',
        'false-positive-markers': '<Bir rentgenogramma uchun soxta-ijobiy markerlar>',
        
        // Blog page
        'blog-title': 'Sun\'iy intellekt bilan ishlangan radiologiyadagi so\'nggi yutuqlar',
        'blog-description': 'Diagnostikada yangi imkoniyatlar: sun\'iy intellekt rentgen va mammogramma tahlilini qanday o\'zgartirmoqda',
        'blog-post-1-tag': 'Radiologiya, AI, Tibbiy tasvirlash',
        'blog-post-1-title': 'Radiologiyada AI foydalari: Eng muhim yutuqlar va potensial qo\'llanishlar',
        'blog-post-1-date': '15-Mart, 2024',
        'blog-post-1-summary': 'AI ning radiologiyaga integratsiyasi tibbiy tasvirlash ma\'lumotlarini qayta ishlash, tahlil qilish va foydalanish usulini revolutsiyalashtirdi. Bu yutuq aniqlik, samaradorlik va bemor parvarishida sezilarli yaxshilanishlar keltiradi. Quyida radiologiyada AI ning eng muhim yutuqlari va potensial qo\'llanishlari keltirilgan.',
        'blog-post-1-read-more': 'Ko\'proq o\'qish',
        
        'blog-post-2-tag': 'TEXNOLOGIYA',
        'blog-post-2-title': 'Mammografiyada ko\'krak saratoni skriningi uchun sun\'iy intellekt (AI-STREAM): prospektiv ko\'p markazli kogorta tadqiqotining dastlabki tahlili',
        'blog-post-2-date': '06-Mart, 2025',
        'blog-post-2-summary': 'Emmys 2021 qizil gilamchasi uzoq tanaffusdan so\'ng umidlarni oqlamay qolmadi. Anya Taylor-Joy, Catherine Zeta-Jones, Kate Winslet va Kerry Washington kabi mashhurlar jiddiy uslubli tadbir uchun o\'zlarini yasantirdilar.',
        'blog-post-2-read-more': 'Ko\'proq o\'qish',
        
        'blog-post-3-tag': 'TADQIQOT',
        'blog-post-3-title': 'Ko\'krak qafasi rentgenogrammalarida endotracheal trubka holatini baholash uchun sun\'iy intellekt: Ikki muassasadan kelgan bemorlarda validatsiya',
        'blog-post-3-date': 'Yanvar 2024',
        'blog-post-3-summary': 'Endotracheal trubka (ETT) holatini baholash uchun olingan ko\'krak qafasi rentgenogrammalarini o\'z vaqtida va aniq talqin qilish zarur bo\'lganda tezkor sozlashni osonlashtirish uchun muhimdir.',
        'blog-post-3-read-more': 'Ko\'proq o\'qish',
        
        // Publication 1 page
        'pub1-title': 'Radiologiyada AI foydalari: Eng muhim yutuqlar va potensial qo\'llanishlar',
        'pub1-intro': 'AI ning radiologiyaga integratsiyasi tibbiy tasvirlash ma\'lumotlarini qayta ishlash, tahlil qilish va foydalanish usulini revolutsiyalashtirdi. Bu yutuq aniqlik, samaradorlik va bemor parvarishida sezilarli yaxshilanishlar keltiradi. Quyida radiologiyada AI ning eng muhim yutuqlari va potensial qo\'llanishlari keltirilgan.',
        'pub1-section1-title': '1. Tasvir olishni yaxshilash',
        'pub1-section1-p1': 'Sun\'iy intellekt radiologiyada tasvir olish jarayonini sezilarli darajada yaxshiladi, uni tezroq va aniqroq qildi. AI tomonidan boshqariladigan algoritmlar yordamida, radiologlar yuqori sifatli tasvirlarni tezroq olishlari mumkin, shu bilan birga bemor harakati tufayli kelib chiqadigan harakat artefaktlari kabi odatiy muammolarni kamaytirishlari mumkin. Bu nafaqat tasvirlash jarayonini tezlashtiradi, balki sifatli ma\'lumotlarni ta\'minlaydi, natijada aniqroq tashxislar qo\'yiladi. Bundan tashqari, sun\'iy intellekt tasvirlash jarayonida sarflanadigan vaqtni kamaytirib, bemorlar uchun qulay sharoit yaratishga yordam beradi.',
        'pub1-section2-title': '2. Hisobot berish va diagnostikani yaxshilash',
        'pub1-section2-p1': 'AI texnologiyalari radiologlarning kundalik ishlatiladigan katta hajmdagi tasvirlash ma\'lumotlarini qayta ishlash usulini o\'zgartirmoqda. Quyidagi AI dasturlari diagnostika jarayonini optimallashtirishga yordam beradi:',
        'pub1-section3-title': '3. Radionika bilan prognozni rivojlantirish',
        'pub1-section3-p1': 'Diagnostikadagi rolidan tashqari, sun\'iy intellekt radionika orqali prognoz sohasida ham muhim yutuqlarga erishmoqda. Radionika tibbiy tasvirlardan inson ko\'zi bilan darhol ko\'rinmaydigan naqshlarni ochib beradigan miqdoriy xususiyatlarni chiqarib olishni anglatadi. Bu xususiyatlar kasallikning rivojlanishi va bemorlarning natijalari haqida qimmatli ma\'lumotlarni taqdim etishi mumkin. Ba\'zi asosiy afzalliklar quyidagilarni o\'z ichiga oladi:',
        'pub1-section4-title': '4. Muammolar va kelajak yo\'nalishlari',
        'pub1-section4-p1': 'Radiologiyada sun\'iy intellektning katta salohiyatiga qaramasdan, ayniqsa tasvirlash ma\'lumotlarini standartlashtirish sohasida hali ham yengish kerak bo\'lgan muammolar mavjud. Turli tibbiy muassasalardagi skanerlar va ma\'lumotlarni olish protokollaridagi o\'zgarishlar ma\'lumotlar izchilligiga ta\'sir ko\'rsatishi mumkin.',
        'pub1-section4-p2': 'Bu muammoni hal qilish uchun tadqiqotchilar tasvirlash ma\'lumotlarini standartlashtiradigan, ishonchli va izchil natijalarni ta\'minlaydigan uyg\'unlashtirish vositalarini ishlab chiqmoqdalar.',
        'pub1-conclusion-title': 'Xulosa',
        'pub1-conclusion-p1': 'AI ning radiologiyaga integratsiyasi tasvir olish, diagnostik hisobot, prognoz bashorati va davolashni kuzatish kabi bir nechta sohalarda sezilarli yaxshilanishlarni taqdim etadi. Takroriy vazifalarni avtomatlashtirish, tasvirlar sifatini oshirish va kasalliklarning rivojlanishi haqida qimmatli ma\'lumotlarni taqdim etish orqali AI radiologiya sohasini o\'zgartirmoqda va bemor parvarishini yaxshilamoqda. Texnologiya rivojlanishda davom etar ekan, radiologiyadagi AI ning roli kengayadi, aniq tibbiyot va bemorlar natijalarini yaxshilash uchun yanada kattaroq imkoniyatlar taqdim qiladi.',
        
        // PD-L1 page
        'pdl1-title-part1': 'Sof PD-L1: Sun\'iy intellekt bilan ishlaydigan PD-L1',
        'pdl1-title-part2': 'Immunoterapiya uchun miqdoriy baholash.',
        'pdl1-description': 'Immuno-onkologiya uchun aniq, samarali va obyektiv PD-L1 baholash. Sun\'iy intellekt bilan ishlaydi, patologlar tomonidan ishonchli.',
        'pdl1-benefits-title': 'Asosiy afzalliklar',
        'pdl1-benefits-subtitle': 'SOF PD-L1 saraton immunoterapiyasi baholashda o\'lchanadigan yaxshilanishlarni ta\'minlaydi',
        'pdl1-benefit1-title': 'Haqiqatga yaqin',
        'pdl1-benefit1-text': 'Butun dunyo bo\'ylab 150 dan ortiq patolog tomonidan 1M+ hujayra izohlariga asoslangan, SOF PD-L1 haqiqatga yaqin tahlil natijalarini yaratadi.',
        'pdl1-benefit2-title': 'Farqlarni kamaytirish',
        'pdl1-benefit2-text': 'Obyektiv natijalarni yaratish orqali, SOF PD-L1 patologlar o\'rtasidagi talqin farqini kamaytiradi, bu esa aniqroq tashxislar va davolash qarorlariga olib keladi.',
        'pdl1-benefit3-title': 'Bemor tanlashni kengaytirish',
        'pdl1-benefit3-text': '96% aniqlik asosida, SOF PD-L1 inson-tasnifli PD-L1(-) bemor guruhlariga taqqoslaganda immunoterapiyaga mos keladigan 50% ko\'proq bemorlarni topadi.',
        'pdl1-features-title': 'Texnik xususiyatlar',
        'pdl1-features-subtitle': 'PD-L1 aniq tahlili uchun ilg\'or sun\'iy intellekt texnologiyalari',
        'pdl1-feature1-title': 'Aniqlash',
        'pdl1-feature1-text': 'Butun slayd tasvirlaridan yuqori aniqlik bilan o\'smali hujayra PD-L1 +/- va yallig\'lanish hujayrasi PD-L1 +/- ni aniqlaydi.',
        'pdl1-feature2-title': 'Miqdoriy baholash',
        'pdl1-feature2-text': 'TPS (O\'smali Proporsiya Ko\'rsatkichi) va CPS (Umumiy Ijobiy Ko\'rsatkich) kabi PD-L1 ijobiy ko\'rsatkichlarni hisoblaydi.',
        'pdl1-feature3-title': 'SI baholash va hisobot',
        'pdl1-feature3-text': 'Keng qamrovli hisobot doirasida PD-L1 TPS ko\'rsatkichi va xaritasini o\'z ichiga olgan SI tahlili natijalarini taqdim etadi.',
        'pdl1-tps-label': 'PD-L1 (TPS) > 50%',
        'pdl1-tps-value': 'TPS : 97%',
        
        // Главная страница
        'solution': 'Yechim',
        'ai-description': 'SOF AI — bu sun\'iy intellektdan foydalanib, radiologlarning tibbiy tasvirlarni, ayniqsa ko\'krak qafasi rentgen suratlarini va mammogrammalarni misli ko\'rilmagan tezlik va aniqlik bilan tahlil qilishiga yordam beradigan ilg\'or platforma.',
        'seamless-integration': 'Uzluksiz integratsiya',
        
        // About Us страница
        'cancer-complex': 'Saraton murakkab — va har bir holat noyobdir.',
        'ai-expertise': 'Har bir tashxis ortida tushunish kerak bo\'lgan ma\'lumotlar majmuasi mavjud. Bu yerda sun\'iy intellekt ajralib turadi. Katta hajmli ma\'lumotlarni tahlil qilib, sun\'iy intellekt yangi kashfiyotlarga olib keladigan tushunchalarni ochib beradi, bizni yanada aqlliroq, shaxsiylashtirilgan davolash qarorlarini qabul qilishga qodir qiladi.',
        'ai-potential': 'Bu kuchli, ma\'lumotlarga asoslangan kashfiyotlar bilan biz saraton bilan kurashda muhim qadamlar tashlashimiz mumkin. Sun\'iy intellekt yordamida bizda nafaqat saraton bilan kurashish, balki uni yengish imkoniyati mavjud.',
        'vision-mission': 'Ko\'rish va vazifa:',
        'conquer-cancer': 'Sun\'iy intellekt kuchi orqali saratonni yengish.',
        'develop-solutions': 'Biz ilk bosqichdagi saratonni aniqlaydigan va shaxsiylashtirilgan davolash rejalarini optimallashtiruvchi ilg\'or sun\'iy intellekt yechimlarini ishlab chiqamiz. Sun\'iy intellekt salohiyatini ochib, biz saraton parvarishini o\'zgartirish, bu murakkab kasallik bilan kurashda umid va aniqlik taklif etishga intilamiz.',

        // Главная страница - баннер
        'ai-powered-title': 'Sun\'iy intellektga asoslangan radiologiya dasturi',
        'ai-powered-subtitle': 'tezroq va aniqroq tashxis qo\'yish uchun.',
        'ai-powered-description': 'SOF AI radiologlar ko\'krak qafasi rentgen va mammogrammalarini 97-99% aniqlik bilan tahlil qilishga, tashxis vaqtini 85% gacha qisqartirishga va bemorlar natijalarini yaxshilashga yordam beradi.',
        'stat-accuracy': 'Aniqlik',
        'stat-time-saved': 'Vaqt tejash',
        'stat-conditions': 'Aniqlangan holatlar',

        // Маркет Исследования
        'market-research-title': 'Bozor tadqiqoti',
        'hospital-market-title': 'Shifoxona bozori',
        'hospital-market-description': 'Global sog\'liqni saqlash AI bozori tez rivojlanmoqda va 2030 yilga kelib 150 milliard dollardan oshishi kutilmoqda. Ushbu tendentsiyani aks ettirib, butun dunyo shifoxonalari AI yechimlariga katta talab ko\'rsatmoqda, so\'rovlar shuni ko\'rsatadiki, sog\'liqni saqlash rahbarlarining 70 foizdan ortig\'i samaradorlikni oshirish va sifatli xizmat ko\'rsatish uchun diagnostik AI-ga katta investitsiyalar kiritishni rejalashtirmoqda.',
        'radiology-opportunity-title': 'Radiologiya imkoniyatlari',
        'radiology-opportunity-description': 'Har yili dunyo bo\'ylab millardlab diagnostik tasvirlash tartiblari, shu jumladan 2 milliarddan ortiq rentgen tekshiruvlari o\'tkaziladi. Tibbiy tasvirlashdagi AI bozori yiliga 30% dan ortiq CAGR o\'sishi bilan dunyo bo\'ylab radiologiya markazlarida hajmlarni boshqarish, diagnostika aniqligini oshirish va radiolog yukini kamaytirish uchun AI integratsiyasi uchun jiddiy ehtiyoj va katta salohiyat mavjud.',

        // Интеграция и особенности
        'integration-description': 'SOF AI mavjud shifoxona PACS tizimlari va radiologiya ish oqimi bilan muammosiz integratsiyalashadi. Platforma barcha standart DICOM formatlarini qo\'llab-quvvatlaydi va joyida yoki xavfsiz bulutli infratuzilma orqali o\'rnatilishi mumkin.',
        'integration-expertise': 'Bizning tizimimiz radiologlarning mutaxassisligini almashtirish emas, balki to\'ldirish uchun mo\'ljallangan. Odatiy holatlarni ko\'rib chiqish va potentsial anomaliyalarni belgilash orqali SOF AI mutaxassislarga e\'tiborni eng kerakli joyga qaratish imkonini beradi.',
        'integration-feature-1': 'DICOM va HL7 mosligi',
        'integration-feature-2': 'Mahalliy yoki bulutli o\'rnatish imkoniyatlari',

        // Проблемы в современной радиологии
        'radiology-problems-title': 'Zamonaviy Radiologiyadagi Muammolar',
        'workforce-shortage': 'Mutaxassis Tanqisligi',
        'workforce-shortage-desc': 'Ayniqsa haddan tashqari yuklangan yoki chekka hududlardagi muassasalarda malakali radiologlar tanqisligi kuzatilmoqda.',
        'physician-overload': 'Shifokorlar Yuklamasi',
        'physician-overload-desc': 'Tibbiy tasvirlar hajmi tez sur\'atlar bilan o\'smoqda, batafsil tahlil uchun vaqt esa qisqarmoqda.',
        'human-limitation': 'Inson Cheklovlari',
        'human-limitation-desc': 'Tasvirlardagi nozik naqshlar va kasallikning erta belgilari ko\'pincha sezilmay qoladi.',
        'missed-diagnosis': 'Boy Berilgan Tashxis Imkoniyati',
        'missed-diagnosis-desc': 'Tashxis qo\'yishdagi kechikishlar ko\'pincha erta davolash imkoniyatlarini boy berishga olib keladi.',
        
        // Расширенный ИИ-анализ
        'advanced-ai-title': 'Rivojlangan Sun\'iy Intellekt Tahlili',
        'advanced-ai-desc-1': 'SOF AI millionlab tibbiy tasvirlarda o\'qitilgan chuqur o\'rganish algoritmlaridan foydalanib, 97-99% aniqlik bilan anomaliyalarni aniqlaydi. Tizim ko\'krak qafasi rentgen va mammogrammalarda 60 dan ortiq turli kasalliklarni aniqlay oladi.',
        'advanced-ai-desc-2': 'Bizning maxsus neyron tarmoqlarimiz tibbiy vizualizatsiya uchun maxsus optimallashtirilgan bo\'lib, an\'anaviy tahlilda ko\'zdan qochishi mumkin bo\'lgan kasallikning hatto nozik belgilarini ham aniq aniqlash imkonini beradi.',
        'feature-automated-detection': 'Anomaliyalarni avtomatik aniqlash',
        'feature-precise-localization': 'Issiqlik xaritasi vizualizatsiyasi bilan aniq lokalizatsiya',
        'feature-automated-report': 'Avtomatlashtirilgan hisobot yaratish',
        
        // Статистика рынка
        'stat-xray-exams': 'Yillik Global Rentgen Tekshiruvlari',
        'stat-ai-investments': 'Sun\'iy Intellektga Investitsiya Rejasidagi Rahbarlar',
        'stat-imaging-cagr': 'Tasvirlashda Sun\'iy Intellekt Bozorining O\'sishi',
        'stat-ai-market': '2030 yilga kelib Global Sog\'liqni Saqlash Sun\'iy Intellekt Bozori',

        // Ключевые функции
        'key-features': 'Asosiy xususiyatlar',
        'feature-realtime-title': 'Real vaqt tahlili',
        'feature-realtime-description': 'Rentgen va mammogrammalarni soniyalar ichida qayta ishlaydi, radiologlar uchun ish oqimini buzmasdan darhol natijalar beradi.',
        'feature-visual-title': 'Vizual ajratib ko\'rsatish',
        'feature-visual-description': 'Tasvirlarda qiziqish sohalarini avtomatik ravishda ajratib ko\'rsatadi, yaqinroq ko\'rib chiqish uchun potentsial anomaliyalarga e\'tiborni jalb qiladi.',
        'feature-reporting-title': 'Avtomatlashtirilgan hisobot',
        'feature-reporting-description': 'Radiologlarning qimmatli hujjatlashtirish vaqtini tejash uchun natijalar va tavsiyalar bilan dastlabki hisobotlarni yaratadi.',
        'feature-telemedicine-title': 'Telemeditsina imkoniyatlari',
        'feature-telemedicine-description': 'Hisobotlar 24/7 va turli tillarda mavjud, jumladan o\'zbek, rus va ingliz tillarida.',

        // Как это работает
        'how-it-works': 'Qanday ishlaydi',
        
        // Радиология CXR страница
        'sof-cxr-title': 'SOF INSIGHT CXR',
        'cxr-accuracy': 'Ko\'krak qafasi rentgen tasvirlaridagi anomaliyalarni aniqlashda 97-99% aniqlik',
        'cxr-click-condition': 'Sun\'iy intellekt aniqlash namunalarini ko\'rish uchun kasallikni bosing',
        'disease-nodule': 'Tugunchalar',
        'disease-pneumonia': 'Pnevmoniya',
        'disease-tuberculosis': 'Sil',
        'disease-effusion': 'Suyuqlik to\'planishi',
        'disease-atelectasis': 'Atelektaz',
        'disease-cardiomegaly': 'Kardiomegaliya',
        'disease-pneumothorax': 'Pnevmotoraks',
        'disease-mass': 'Massa',
        'disease-infiltration': 'Infiltratsiya',
        'workflow-optimization': 'Optimallashtirilgan ish jarayoni vizualizatsiyasi',
        'normal-cases': 'Normal holatlar',
        'abnormal-cases': 'Anomal holatlar',
        'early-diagnosis': 'O\'pka saratoni bilan og\'rigan bemorlarning 50% ertaroq tashxis qo\'yilishi mumkin',
        'improved-reading': 'Tahlil qilish samaradorligi oshgan',
        'better-detection': 'Ilk bosqichdagi o\'pka saratonini yaxshiroq aniqlash',
        
        // Радиология MMG страница
        'sof-mmg-title': 'SOF INSIGHT MMG',
        'mmg-accuracy': 'Ko\'krak saratonini aniqlashda yuqori aniqlik',

        // Advanced AI for Medical Imaging Section
        'ai-medical-imaging-title': 'Tibbiy tasvirlash uchun rivojlangan sun\'iy intellekt',
        'ai-medical-imaging-desc-1': 'SOF AI o\'pka va mammografiya tasvirlarini talqin qilishni yaxshilash uchun ilg\'or sun\'iy intellektdan foydalanadi. Zamonaviy tasvirlarni qayta ishlash algoritmlaridan foydalangan holda, SOF AI o\'pka tugunlari, massalar va ko\'krak to\'qimasidagi boshqa muhim tuzilmalar kabi muhim sohalarni avtomatik aniqlaydi, tashxis tezligi va aniqligini oshiradi.',
        'ai-medical-imaging-desc-2': 'Standart ish stantsiyalari va DICOM formatlari bilan muammosiz integratsiyalashish uchun mo\'ljallangan SOF AI tibbiy tasvirlarni tahlil qilishni oqimlashtirib, sog\'liqni saqlash mutaxassislarini qo\'llab-quvvatlaydi. Bu kuchli vosita ishonchliroq va batafsilroq baholashni ta\'minlaydi, tezroq klinik qarorlar qabul qilish va bemorlar natijalarini yaxshilashga imkon beradi.',
        'ai-medical-imaging-desc-3': 'Foydalanuvchi uchun qulay platforma va sun\'iy intellektga asoslangan murakkab tahlil bilan SOF AI sog\'liqni saqlash provayderlari turli holatlarni ertaroq va katta aniqlik bilan aniqlashlari uchun zarur bo\'lgan vositalarni taqdim etadi, bu esa sog\'liqni saqlash sifatini yaxshilaydi.',
        
        // Transforming Radiology Section
        'transforming-radiology-title': 'Sun\'iy intellekt bilan radiologiyani o\'zgartirish',
        'transforming-radiology-desc-1': 'Radiologiyaga sun\'iy intellektni joriy etish tasvirlarni olish, diagnostik hisobot, prognoz bashorati va davolashni kuzatish kabi bir nechta sohalarda sezilarli yaxshilanishlarni taklif etadi. Takroriy vazifalarni avtomatlashtirish, tasvirlar sifatini oshirish va kasalliklarning rivojlanishi haqida qimmatli ma\'lumotlarni taqdim etish orqali sun\'iy intellekt radiologiya sohasini o\'zgartirmoqda va bemor parvarishini yaxshilamoqda.',
        'transforming-radiology-desc-2': 'Texnologiya rivojlanishda davom etar ekan, radiologiyadagi AI ning roli kengayadi, aniq tibbiyot va bemorlar natijalarini yaxshilash uchun yanada kattaroq imkoniyatlar taklif qiladi.',
        'try-demo': 'Demoni sinab ko\'ring',
        
        // About SOF AI Section
        'about-sof-ai': 'SOF AI haqida',
        'about-sof-ai-desc-1': 'SOF AI diagnostika aniqligini oshirish va bemorlar natijalarini yaxshilash uchun ilg\'or sun\'iy intellekt orqali radiologiya va onkologiyani o\'zgartirmoqda.',
        'about-sof-ai-desc-2': 'Texnologiyamiz ortida 4 yildan ortiq tibbiy tasvirlash ma\'lumotlari bilan biz ishonchli va klinik jihatdan muhim yechimlarni taqdim etamiz.',
        'about-sof-ai-desc-3': 'Biz respublika bo\'ylab shifokorlar, onkologlar va mutaxassislar bilan yaqin hamkorlikda ishlaymiz, bu esa haqiqiy klinik ish jarayonlariga muammosiz integratsiyalashni ta\'minlaydi.',
        'more-information': 'Ko\'proq ma\'lumot',
        
        // Partners Section
        'our-partners': 'Bizning hamkorlar',
        'partners-description': 'Yetakchi tibbiyot muassasalari o\'z radiologik ehtiyojlari uchun SOF AI ga ishonishadi',
        
        // FAQ Section
        'faq-title': 'Savollaringiz bormi?',
        'faq-description': 'SOF AI texnologiyasi haqida tez-tez so\'raladigan savollarga javoblarni toping',
        'faq-workflow-title': 'SOF AI radiolog ish jarayonini qanday yaxshilaydi?',
        'faq-workflow-answer': 'SOF AI tibbiy tasvirlarning dastlabki tahlilini avtomatlashtiradi, radiologlarning muhim holatlarga e\'tibor qaratish, o\'qish vaqtini qisqartirish va diagnostik charchoqni minimallashtirishga yordam beradi.',
        'faq-image-types-title': 'SOF AI qanday tibbiy tasvirlarni tahlil qila oladi?',
        'faq-image-types-answer': 'SOF AI ko\'krak qafasi rentgen (CXR) va mammografiyani (MMG) qo\'llab-quvvatlaydi, tugunlar, konsolidatsiya, pnevmotoraks va boshqa holatlarni 97-99% aniqlik bilan aniqlaydi. Yangi modalliklar qo\'shilmoqda.',
        'faq-experts-title': 'SOF AI ortidagi klinik ekspertlar kimlar?',
        'faq-experts-answer': 'Biz respublika bo\'ylab radiologlar, onkologlar va mutaxassislar bilan yaqin hamkorlikda ishlaymiz, bu bizning yechimlarimiz klinik jihatdan ahamiyatli va real sog\'liqni saqlash ehtiyojlariga mos kelishini ta\'minlaydi.',
        
        // Articles Section
        'interesting-articles': 'Qiziqarli maqolalar',
        
        // Pipeline Steps
        'pipeline-step1': 'Tibbiy tasvir yuklanadi',
        'pipeline-step2': 'Sun\'iy intellekt modeli tasvirni qayta ishlaydi',
        'pipeline-step3': 'Asosiy anomaliyalar aniqlanadi',
        'pipeline-step4': 'Sun\'iy intellekt qiziqarli hududlarni ajratib ko\'rsatadi va hisobot yaratadi',
        'pipeline-step5': 'Radiolog tashxisni ko\'rib chiqadi va tasdiqlaydi',
        
        // Mammography page
        'radiology-mmg-title': 'Mammografiya AI',
        'radiology-mmg-description': 'Mammogrammalarda ko\'krak saratoni shubhali bo\'lgan o\'choqlarni aniqlashda 96% aniqlik.',
        'radiology-mmg-features-title': 'Kasallikni Aniqlash',
        'radiology-mmg-features-desc': 'Bizning AI tizimlari mammogrammalarda ko\'krak saratonini anglatishi mumkin bo\'lgan shubhali o\'choqlarni aniq aniqlaydi.',
        'radiology-mmg-feature1-title': 'O\'choqlarni Aniqlash',
        'radiology-mmg-feature1-desc': 'Bizning AI tizimimiz massalar, asimmetriyalar va kalsifikatsiyalar kabi ko\'krak saratonini anglatishi mumkin bo\'lgan shubhali o\'choqlarni aniqlaydi va joylashtiriladi.',
        'radiology-mmg-feature2-title': 'Issiqlik Xaritasi Vizualizatsiyasi',
        'radiology-mmg-feature2-desc': 'Yomonlashish ehtimolini ko\'rsatish uchun rang-kodlangan ajratib ko\'rsatish bilan shubhali sohalarning vizual tasvirlari.',
        'radiology-mmg-feature3-title': 'BI-RADS Baholash',
        'radiology-mmg-feature3-desc': 'Standartlashtirilgan xavfni baholash mezonlariga muvofiq mammogramma natijalarini toifalashda radiologlar yordamida avtomatlashtirilgan BI-RADS baholash.',
        
        // Radiology MMG page
        'mmg-title': 'SOF INSIGHT MMG',
        'mmg-accuracy': '96% aniqlik',
        'mmg-description': 'mammogrammalarda ko\'krak saratoni shubhali zararlanishlarni aniqlashda',
        'mmg-subtitle': 'Sun\'iy intellekt yordamida ko\'krak skriningini yaxshilash tahlili',
        'normal-benign-mass': 'Normal / Xavfsiz massa',
        'malignant-mass': 'Xavfli massa',
        'clinical-benefits-title': 'Klinik foydalari',
        'clinical-benefits-subtitle': 'SOF INSIGHT MMG ko\'krak saratoni aniqlash va ish jarayoni samaradorligini o\'lchanadigan darajada oshiradi',
        'earlier-diagnosis-title': 'Ertaroq tashxis',
        'earlier-diagnosis-text': 'Ko\'krak saratoni bilan og\'rigan bemorlarning 40% ertaroq tashxis qo\'yilishi mumkin. SOF INSIGHT MMG an\'anaviy tahlilda o\'tkazib yuborilgan hollarda saratonni aniqlay oladi, bu 2 yilgacha oldinroq aniqlash imkonini beradi.',
        'earlier-diagnosis-example': 'Haqiqiy holatda, sun\'iy intellekt 2020 yildagi mammogrammani muvaffaqiyatli tahlil qildi, u yerda saraton o\'tkazib yuborilgan, lekin keyinchalik 2022 yilda aniqlangan.',
        'better-detection-title': 'Yaxshiroq saraton aniqlash',
        'better-detection-text': 'THE LANCET Digital Health-dagi tadqiqotlarga ko\'ra, dastlabki o\'qishdan keyin salbiy mammogrammalar uchun yuqori sun\'iy intellekt ballariga ega ayollar orasida SOF INSIGHT MMG yordamida 13% ko\'proq saraton ertaroq aniqlangan.',
        'workflow-efficiency-title': 'Ish jarayoni samaradorligi',
        'workflow-efficiency-text': 'SOF INSIGHT MMG ko\'krak saratonini yo\'qotmagan holda 60% holatlarni saralashi mumkin. Sun\'iy intellekt bali qo\'shimcha ma\'lumot sifatida ishlatiladigan taklif etilgan ish jarayoni modeli radiologlarning o\'qish hajmini kamaytiradi va ularning talqinlarini to\'ldiradi.',
        'density-assessment-title': 'Avtomatlashtirilgan zichlik baholash',
        'density-assessment-text': 'SOF INSIGHT MMG ko\'krak skriningi paytida zichlikning miqdoriy baholanishini avtomatik ravishda tahlil qiladi va yaratadi, Yevropa ko\'krak vizualizatsiyasi jamiyati (EUSOBI) tomonidan bemorlar skrining qilinganda ularning ko\'krak zichligi haqida ma\'lumot berilishi kerakligi to\'g\'risidagi yangi tavsiyalarni qo\'llab-quvvatlaydi.',
        'density-assessment-note': 'Ko\'krak zichligi ko\'krak saratoni uchun muhim xavf omili hisoblanadi va an\'anaviy mammografiya sezgirligiga ta\'sir qilishi mumkin.',
        'pub1-future-p2': 'Sun\'iy intellekt texnologiyalari rivojlanishda davom etar ekan, biz radiologiyada yanada murakkab ilovalarni kutmoqdamiz. Bularga ma\'lum holatlar uchun to\'liq avtonom diagnostika tizimlari, tasvirlash ma\'lumotlariga asoslangan yanada individuallashtirilgan davolash rejasi va kompleks bemor parvarishi uchun boshqa tibbiy texnologiyalar bilan integratsiya kirishi mumkin.',
        'pub1-date': '15-mart, 2024',
        'pub1-tags': 'Radiologiya, Sun\'iy intellekt, Tibbiy tasvirlash',
    }
};

// Код для управления меню выбора языка
document.addEventListener('DOMContentLoaded', function() {
    // Переменные и селекторы
    const languageSelector = document.querySelector('.language-selector');
    const dropdownContent = document.querySelector('.language-dropdown-content');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Упрощенная функция показа/скрытия меню
    function toggleDropdown(show) {
        if (dropdownContent) {
            if (show === undefined) {
                show = dropdownContent.style.display !== 'block';
            }
            
            dropdownContent.style.display = show ? 'block' : 'none';
        }
    }
    
    // Добавляем задержку для предотвращения случайного закрытия
    let dropdownTimeout;
    
    // Обработка клика по языку
    languageSelector.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown();
    });
    
    // Открытие меню при наведении
    languageDropdown.addEventListener('mouseenter', function() {
        clearTimeout(dropdownTimeout);
        toggleDropdown(true);
    });
    
    // Закрытие меню при уходе курсора - с задержкой
    languageDropdown.addEventListener('mouseleave', function() {
        dropdownTimeout = setTimeout(() => {
            toggleDropdown(false);
        }, 300);
    });
    
    // Закрытие меню при клике вне его оставляем для мобильных устройств
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-dropdown')) {
            toggleDropdown(false);
        }
    });
    
    // Добавляем упрощенный обработчик для выбора языка
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Получаем язык и код языка
            const lang = this.getAttribute('data-lang');
            const langCode = option.closest('.mobile-language-switcher') ? lang.toUpperCase() : 
                            option.querySelector('.lang-indicator').textContent;
            
            // Обновляем текст кнопки
            if (languageSelector) {
                languageSelector.querySelector('span').textContent = langCode;
            }
            
            // Обновляем активный класс
            languageOptions.forEach(opt => {
                // Снимаем выделение у всех опций
                opt.classList.remove('active');
                
                // Сбрасываем стили для мобильных кнопок
                if (opt.closest('.mobile-language-switcher')) {
                    opt.style.background = 'rgba(80, 160, 255, 0.15)';
                    opt.style.color = 'var(--light-text)';
                    opt.style.boxShadow = 'none';
                }
            });
            
            // Активируем выбранный язык
            this.classList.add('active');
            
            // Стилизуем активный элемент
            if (this.closest('.mobile-language-switcher')) {
                this.style.background = 'var(--primary-color)';
                this.style.color = '#fff';
                this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
            }
            
            // Переключаем язык
            if (typeof changeLanguage === 'function') {
                changeLanguage(lang);
            }
            
            // Закрываем меню
            toggleDropdown(false);
        });
    });
});


// Текущий язык (по умолчанию английский)
let currentLanguage = localStorage.getItem('language') || 'en';

// Функция для перевода всех элементов на странице
function translatePage() {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', currentLanguage);
    
    // Обновляем текст кнопки языка в хедере
    const languageButtons = document.querySelectorAll('.language-selector');
    languageButtons.forEach(button => {
        button.textContent = translations[currentLanguage]['language'];
    });
    
    // Перевод всех элементов с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Перевод всех плейсхолдеров с атрибутом data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Функция для смены языка
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        translatePage();
        
        // Обновляем активный класс для кнопок языка
        document.querySelectorAll('.language-option').forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
}

// Инициализируем переводы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчики событий для кнопок языка
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Применяем перевод для текущего языка
    translatePage();
});
