import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Switcher from "../components/switcher";
import AnimatedHead from "../components/animated-head";
import AnimatedDiv from "../components/animated-div";

const tasks = [
  "обеспечивает необходимые условия для личностного и физического развития, укрепления здоровья, профессионального самоопределения и творческого труда детей и подростков;",
  "ведет работу по привлечению занимающихся к систематическим занятиям физической культурой и спортом, оказывает всестороннюю помощь общеобразовательным школам в организации спортивно-массовой работы по видам спорта;",
  "выявляет в процессе обучения способных детей и подростков для привлечения их к специализированным тренировочным занятиям и подготовке спортсменов высокого класса для сборных команд Московской области;",
  "обеспечивает приобретение занимающимися минимума знаний в области гигиены и первой медицинской помощи, а также овладение теоретическими основами и приемами оценки уровня физического развития;",
  "проводит мероприятия по формированию у занимающихся общей культуры, организации их содержательного отдыха.",
];

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar navlight={true} tagline={false} />

      <main className="bg-white text-primary-blue dark:bg-black dark:text-white">
        <section
          className="relative w-full py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sport/сollage.webp')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-10">
              <AnimatedHead text="КАК МЫ РАБОТАЕМ" />
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

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <AnimatedDiv className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 md:p-10">
              <p className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed">
                Спортивная школа «КАШИРА» является учреждением, деятельность которого направлена на
                выполнение социально значимых функций. В своей деятельности тренеры-преподаватели и
                руководство школы осуществляют выполнение следующих задач:
              </p>

              <ul className="mt-6 space-y-4 text-slate-700 dark:text-gray-300 text-lg leading-relaxed list-disc pl-6">
                {tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/team"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-blue transition-colors"
                >
                  КОЛЛЕКТИВ
                </Link>
              </div>
            </AnimatedDiv>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <Switcher />
    </>
  );
}
