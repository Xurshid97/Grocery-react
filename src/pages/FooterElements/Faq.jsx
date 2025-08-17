import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Qanday mahsulotlarni buyurtma berishim mumkin?",
      answer:
        "Mahsulotlarni ko'rib chiqing va 'Savatchaga qo'shish' tugmasini bosing. Savatchangizni har qanday vaqtda savatcha belgisini bosish orqali ko'rishingiz mumkin.",
    },
    {
      question: "Savatchamdagi mahsulotlar miqdorini o'zgartirishim yoki olib tashlashim mumkinmi?",
      answer:
        "Ha, savatcha sahifasiga o'ting. Siz har bir mahsulotni oshirish, kamaytirish yoki olib tashlash imkoniyatlarini topasiz.",
    },
    {
      question: "Mahsulotlarni buyurtma berish uchun hisob yaratishim kerakmi?",
      answer:
        "Siz hisob yaratmasdan mahsulotlarni ko'rib chiqishingiz mumkin, lekin buyurtma berish uchun tezkor ro'yxatdan o'tish yoki tizimga kirish talab etiladi.",
    },
    {
      question: "Qanday to'lov usullari qabul qilinadi?",
      answer:
        "Biz Kredit/Debet kartalari, Internet-bank va Naqd pul (COD) to'lovlarini qabul qilamiz, bu sizning hududingizda mavjudligiga qarab.",
    },
    {
      question: "Buyurtmamni qanday kuzatishim mumkin?",
      answer:
        "Buyurtmangizni joylashtirgandan so'ng, profilga o'ting > 'Mening buyurtmalarim' bo'limiga kirib, jonli yangilanishlar va buyurtma tarixini ko'rishingiz mumkin.",
    },
    {
      question: "Bepul yetkazib berish uchun minimal buyurtma qiymati bormi?",
      answer:
        "Ha, 50 000 so'm dan yuqori buyurtmalar bepul yetkazib berish uchun mos keladi. Kichikroq buyurtmalar uchun kichik yetkazib berish haqiqati qo'llaniladi.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Frequently Asked Questions">
              Odatiy beriladigan savollar
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
