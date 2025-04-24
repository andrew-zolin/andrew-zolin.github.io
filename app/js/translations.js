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
        'how-it-works': 'Bu qanday ishlaydi',
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
