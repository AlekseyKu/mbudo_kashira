// src\app\documents\page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AnimatedDiv from "../components/animated-div";
import AnimatedHead from "../components/animated-head";

// Типы для документов
interface DocumentItem {
  name: string;
  url?: string;
  type?: 'pdf' | 'docx' | 'doc' | 'pptx' | 'xls';
}

interface DocumentCategory {
  id: string;
  title: string;
  documents?: DocumentItem[];
  textContent?: string;
  link?: string;
  linkText?: string;
}

// Общие документы (существующие)
const commonDocuments: DocumentItem[] = [
  // { name: "Расписание занятий на 2025 год", url: "/doc/Расписание СШ КАШИРА с 01.02.2025.pdf", type: "pdf" },
  // { name: "Платные услуги", url: "/doc/платные услуги.pdf", type: "pdf" },
  { name: "Приказ 14 от 24.03.2025. О внедрении в практику Антикоррупционных стандартов", url: "/doc/приказ 14 от 24.03.2025. О внедрении в практику Антикоррупционных стандартов.pdf", type: "pdf" },
  { name: "Приказ 15 от 24.03.2025 Об утверждении Плана меропиятий по реализации антикоррупционной политики", url: "/doc/приказ 15 от 24.03.2025 Об утверждении Плана меропиятий по реализации антикоррупционной политики.pdf", type: "pdf" },
  { name: "приказ 16 от 24.03.2025 Об утверждении Порядка уведомления работодателя о склонении к коррупционным правонарушениям", url: "/doc/приказ 16 от 24.03.2025 Об утверждении Порядка уведомления работодателя о склонении к коррупционным правонарушениям.pdf", type: "pdf" },
  { name: "Приказ 17 от 24.03.2025 приказ 17 от 24.03.2025 Об утверждении кодекса этики", url: "/doc/приказ 17 от 24.03.2025 Об утверждении кодекса этики.pdf", type: "pdf" }, 
  { name: "Приказ 23 от 24.03.2025 О противодействии коррупции", url: "/doc/приказ 23 от 24.03.2025 О противодействии коррупции.pdf", type: "pdf" },
  { name: "Сводная ведомость результатов проведения специальной оценки условий труда", url: "/doc/Сводная ведомость.pdf", type: "pdf" },
  { name: "Перечень рекомендуемых мероприятий по улучшению условий труда", url: "/doc/Перечень мероприятий.pdf", type: "pdf" },
];

// Документы из блока "Общая информация"
const generalInfoDocuments: DocumentItem[] = [
  { name: "Устав", url: "/doc/Общая-информация/1. Устав.pdf", type: "pdf" },
  { name: "Выписка из реестра лицензий", url: "/doc/Выписка из реестра лицензий.pdf", type: "pdf" },
  { name: "Правила внутреннего распорядка обучающихся", url: "/doc/Общая-информация/3. Правила внутреннего распорядка обучающихся.pdf", type: "pdf" },
  { name: "ПВТР", url: "/doc/Общая-информация/4. ПВТР.pdf", type: "pdf" },
  { name: "Коллективный договор", url: "/doc/Общая-информация/5. Коллективный договор.pdf", type: "pdf" },
  { name: "Правила приема обучающихся", url: "/doc/Общая-информация/6. Правила приема обучающихся.pdf", type: "pdf" },
  { name: "Режим занятий обучающихся", url: "/doc/Общая-информация/7. Режим занятий обучающихся.pdf", type: "pdf" },
  { name: "Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся", url: "/doc/Общая-информация/8. Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся.pdf", type: "pdf" },
  { name: "Порядок и основания перевода, отчисления и восстановления обучающихся", url: "/doc/Общая-информация/9. Порядок и основания перевода, отчисления и восстановления обучающихся.pdf", type: "pdf" },
  { name: "Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися", url: "/doc/Общая-информация/10. Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися.pdf", type: "pdf" },
  { name: "Отчет о результатах самообследования за 01.01.2025 по 01.10.2025", url: "/doc/Общая-информация/11. Отчет о результатах самообследования за 01.01.2025 по 01.10.2025.docx", type: "docx" },
];

// Документы из блока "Структура и органы управления образовательной организацией"
const structureDocuments: DocumentItem[] = [
  { name: "Структура и органы управления образовательной организацией", url: "/doc/Структура-и-органы-управления/Структура и органы управления образовательной организацией.pdf", type: "pdf" },
];

// Текст для блока "Образование"
const educationInfoText = `В МБУ ДО СШ «КАШИРА» реализуются дополнительные образовательные программы спортивной подготовки по следующим видам спорта: футбол, спортивная гимнастика, плавание, лыжные гонки, бокс, лёгкая атлетика, шахматы, самбо, волейбол.
Форма обучения: очная.
Язык, на котором осуществляется образование (обучение) в МБУ ДО СШ «КАШИРА»: русский.
Численность обучающихся по реализуемым образовательным программам:
1) Общая численность обучающихся — 603 человека.
2) Численность обучающихся за счет бюджетных ассигнований местных бюджетов — 603 человека.
Лицензия на осуществление образовательной деятельности (выписка из реестра лицензий на осуществление образовательной деятельности):
Регистрационный номер лицензии: № Л035-01255-50/00636884
Дата предоставления лицензии: 09.01.2023
Лицензируемый вид деятельности: Дополнительное образование детей и взрослых.`;

// Документы из блока "Образование"
const educationDocuments: DocumentItem[] = [
  { name: "ООП СП по шахматам", url: "/doc/Образование/1 ООП СП по шахматам.pdf", type: "pdf" },
  { name: "ООП СП по боксу", url: "/doc/Образование/2 ООП СП по боксу.pdf", type: "pdf" },
  { name: "ООП СП по волейболу", url: "/doc/Образование/3 ООП СП по волейболу.pdf", type: "pdf" },
  { name: "ООП СП по легкой атлетике", url: "/doc/Образование/5 ООП СП по легкой атлетике.pdf", type: "pdf" },
  { name: "ООП СП по лыжным гонкам", url: "/doc/Образование/6 ООП СП по лыжным гонкам.pdf", type: "pdf" },
  { name: "ООП СП по самбо", url: "/doc/Образование/7 ООП СП посамбо.pdf", type: "pdf" },
  { name: "ООП СП по футболу", url: "/doc/Образование/8 ООП СП по футболу.pdf", type: "pdf" },
  { name: "ООП СП по плаванию", url: "/doc/Образование/9 ООП СП по плаванию.pdf", type: "pdf" },
  { name: "ООП СП по спортивной гимнастике", url: "/doc/Образование/10 ООП СП по спортивной гимнастике.pdf", type: "pdf" },
  { name: "Положение о языке образования", url: "/doc/Образование/Положение о языке образования.docx", type: "docx" },
];

// Текст для блока "Руководство"
const leadershipText = `Руководитель образовательной организации:
Гречишникова Ирина Геннадьевна,
директор,
тел. +7 (915) 477-54-58,
электронная почта — romozanicha@mail.ru

Заместители руководителя образовательной организации:
Сурогина Елена Юрьевна,
заведующий отделения,
тел. +7 (496) 696-76-89,
электронная почта — wasys@mail.ru`;

// Текст для блока "Материально-техническое обеспечение и оснащенность"
const materialSupportText = `СШ «КАШИРА» располагает всеми необходимыми ресурсами и инфраструктурой для осуществления образовательной деятельности.
Материально-техническая база школы соответствует санитарным нормам, правилам пожарной безопасности и в полной мере позволяет решать задачи обучения и воспитания детей.
1) О материально-техническом обеспечении образовательной деятельности, в том числе в отношении инвалидов и лиц с ограниченными возможностями здоровья:
а) оборудованные учебные кабинеты: не предусмотрено.
б) объекты для проведения практических занятий:
спортивные залы, плавательный бассейн, открытые плоскостные сооружения.
в) библиотека: не предусмотрено.
г) объекты спорта:
стадион "Спартак", стадион «Локомотив», спортзал «Юность», ФОК «ОЛИМП»
д) средства обучения и воспитания:
спортивное оборудование.
е) доступ к информационным системам и информационно-телекоммуникационным сетям:
не предусмотрено.
ж) электронные образовательные ресурсы, к которым обеспечивается доступ обучающихся:
не предусмотрено.
2) О специальных условиях для получения образования инвалидами и лицами с ограниченными возможностями здоровья:
а) об обеспечении доступа в здания образовательной организации, инвалидами и лицами с ограниченными возможностями здоровья: обеспечен доступ в здания ФОК «ОЛИМП», спортзал «Юность».
б) о наличии специальных технических средств обучения коллективного и индивидуального пользования инвалидов и лиц с ограниченными возможностями здоровья: не предусмотрено.`;

// Документы из блока "Платные образовательные услуги"
const paidServicesDocuments: DocumentItem[] = [
  { name: "Документ о порядке оказания платных образовательных услуг", url: "/doc/Платные образовательные услуги/1. Документ о порядке оказния платных образовательных услуг.pdf", type: "pdf" },
  { name: "Документ об утверждении стоимости обучения по каждой образовательной программе", url: "/doc/Платные образовательные услуги/3. Документ об утверждении стоимости обучения по каждой образовательной программе.pdf", type: "pdf" },
  { name: "Образец договора об оказании платных", url: "/doc/Платные образовательные услуги/2. Образец договора об оказании платных.doc", type: "doc" },
];

// Документы из блока "Финансово-хозяйственная деятельность"
const financialActivityDocuments: DocumentItem[] = [
  { name: "План финансово-хозяйственной деятельности МБУ ДО СШ КАШИРА", url: "/doc/Финансово-хозяйственная деятельность/План финансово-хозяйственной деятельности МБУ ДО СШ КАШИРА.pdf", type: "pdf" },
  { name: "Информация о поступлении и расходовании финансовых и материальных средств по итогам финансового года", url: "/doc/Финансово-хозяйственная деятельность/Информация о поступлении и  расходовании финансовых и материальных средств по итогам финансового года.pdf", type: "pdf" },
  { name: "Информация об объеме образовательной деятельности, финансовое обеспечение которой осуществляется за счет местных бюджетов", url: "/doc/Финансово-хозяйственная деятельность/Информация об объеме образовательной деятельности, финансовое обеспечение которой осуществляется за счет местных бюджетов.xls", type: "xls" },
];

// Текст для блока "Международное сотрудничество"
const internationalCooperationText = `Заключение и планируемые к заключению договоры с иностранными и/или международными организациями по вопросам образования и науки: не предусмотрено.`;

// Текст для блока "Организация питания в образовательной организации"
const nutritionText = `Организация питания обучающихся в СШ «КАШИРА» не осуществляется.`;

// Текст для блока "Образовательные стандарты и требования"
const educationalStandardsText = `Образовательные стандарты и требования`;

// Текст для блока "Основные сведения"
const basicInfoText = `Полное наименование образовательной организации: Муниципальное бюджетное учреждение дополнительного образования «Спортивная школа «КАШИРА» городского округа Кашира Московской области.
Сокращённое наименование образовательной организации: МБУ ДО «СШ «КАШИРА».
Дата создания образовательной организации: 14.09.1995 г.
Учредитель образовательной организации: муниципальное образование «Городской округ Кашира Московской области» (142903, РФ, Московская обл., г. Кашира, ул. Ленина, д.2.)
График работы образовательной организации: 
понедельник-воскресенье 09:00-21:00.
Контактные телефоны: +7 (496 69) 6-76-89.
Адрес электронной почты образовательной организации: 
dush-kashira@yandex.ru

Места осуществления образовательной деятельности:
142903, РФ, Московская обл., г. Кашира, ул. Металлургов д. 7 корп. 2.
Регистрационный номер лицензии: № Л035-01255-50/00636884
Дата предоставления лицензии: 09.01.2023
Лицензируемый вид деятельности: Дополнительное образование детей и взрослых.`;

// Категории документов
const documentCategories: DocumentCategory[] = [
  {
    id: "basic-info",
    title: "Основные сведения",
    textContent: basicInfoText,
  },
  {
    id: "general-info",
    title: "Общая информация",
    documents: generalInfoDocuments,
  },
  {
    id: "structure",
    title: "Структура и органы управления образовательной организацией",
    documents: structureDocuments,
  },
  {
    id: "education",
    title: "Образование",
    textContent: educationInfoText,
    documents: educationDocuments,
  },
  {
    id: "leadership",
    title: "Руководство",
    textContent: leadershipText,
  },
  {
    id: "material-support",
    title: "Материально-техническое обеспечение и оснащенность",
    textContent: materialSupportText,
  },
  {
    id: "paid-services",
    title: "Платные образовательные услуги",
    documents: paidServicesDocuments,
  },
  {
    id: "financial-activity",
    title: "Финансово-хозяйственная деятельность",
    documents: financialActivityDocuments,
  },
  {
    id: "international-cooperation",
    title: "Международное сотрудничество",
    textContent: internationalCooperationText,
  },
  {
    id: "nutrition",
    title: "Организация питания в образовательной организации",
    textContent: nutritionText,
  },
  {
    id: "educational-standards",
    title: "Образовательные стандарты и требования",
    textContent: educationalStandardsText,
    link: "https://share.google/WkzuYlvN4WznSfKmg",
    linkText: "Перейти к образовательным стандартам и требованиям",
  },
  {
    id: "common",
    title: "Противодействии коррупции",
    documents: commonDocuments,
  },
];

export default function DocumentsPage() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-black dark:text-white">

        <section className="relative w-full py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/sport/сollage.webp')`}}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <AnimatedHead text="ДОКУМЕНТЫ" />
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* ДОКУМЕНТЫ - АККОРДЕОН */}
        <section className="container mx-auto px-4 py-12">
          <div className="container relative max-w-[2000px]">
            <AnimatedHead 
              text="Сведения об образовательной организации" 
              className="md:text-3xl text-2xl font-semibold text-primary-blue dark:text-white mb-8 text-center" 
            />
            <div className="space-y-4">
              {documentCategories.map((category, index) => (
                <AnimatedDiv
                  key={category.id}
                  className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden"
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="font-medium">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`text-xl text-primary-blue dark:text-white flex justify-between items-center p-5 w-full font-medium text-start transition-colors ${
                        openCategories.has(category.id)
                          ? "bg-gray-50 dark:bg-slate-800"
                          : "bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span>{category.title}</span>
                      <svg
                        className={`size-5 shrink-0 transition-transform ${
                          openCategories.has(category.id) ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipPath="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    className={`transition-all duration-300 ${
                      openCategories.has(category.id) ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="p-5">
                      {/* Если есть текстовое содержимое */}
                      {category.textContent && (
                        <div className="text-slate-700 dark:text-gray-300 whitespace-pre-line leading-relaxed mb-6">
                          {category.textContent}
                        </div>
                      )}

                      {/* Если есть ссылка */}
                      {category.link && (
                        <div className="mb-6">
                          <Link
                            href={category.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <span>{category.linkText || "Перейти по ссылке"}</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        </div>
                      )}

                      {/* Если есть документы */}
                      {category.documents && (
                        <div className={`grid md:grid-cols-2 gap-4 ${category.textContent ? 'mt-0' : ''}`}>
                          {category.documents.map((doc, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
                            >
                              <svg
                                className="w-8 h-8 text-primary-blue dark:text-accent-red flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm9 1.414L16.586 7H15V5.414zM8 9h8v2H8V9zm0 4h8v2H8v-13zm0 4h8v2H8v-2z" />
                              </svg>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-primary-blue dark:text-white break-words">
                                  {doc.name}
                                </p>
                                {doc.url && (
                                  <Link
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-slate-600 dark:text-slate-300 hover:underline mt-1 inline-block"
                                  >
                                    {doc.type === 'pdf' ? 'Открыть PDF' : doc.type === 'docx' ? 'Скачать DOCX' : doc.type === 'doc' ? 'Скачать DOC' : doc.type === 'xls' ? 'Скачать XLS' : 'Скачать файл'}
                                  </Link>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedDiv className="text-4xl font-bold mb-6">
              <h2>Стань частью нашей команды!</h2>
            </AnimatedDiv>
            <Link
              href="/contact"
              className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue"
            >
              Контакты
            </Link>
          </div>
        </section> */}
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}