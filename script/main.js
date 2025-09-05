const questions = [
  {
    text: "Jahat banget ya dunia sama kamu..",
    options: ["Banget...", "Ngga kokk 😊"]
  },
  {
    text: "Kamu sering ngerasa sendirian ga?",
    options: ["Sering", "Jarang"]
  },
  {
    text: "Kalau lagi jatuh, ada yang bantuin kamu?",
    options: ["Ada", "Ga ada"]
  },
  {
    text: "Kamu lebih milih diem atau cerita?",
    options: ["Diem", "Cerita"]
  },
  {
    text: "Hidup ini berat buat kamu?",
    options: ["Iya", "Nggak kok"]
  },
  {
    text: "Kamu lebih nyaman sama malam atau siang?",
    options: ["Malam", "Siang"]
  },
  {
    text: "Kalau lagi capek, biasanya kamu tidur atau nangis?",
    options: ["Tidur", "Nangis"]
  },
  {
    text: "Kamu gampang percaya orang lain?",
    options: ["Banget", "Susah"]
  },
  {
    text: "Pernah ngerasa nggak ada yang peduli?",
    options: ["Pernah", "Jarang"]
  },
  {
    text: "Kamu tipe yang overthinking atau bodo amat?",
    options: ["Overthinking", "Bodo amat"]
  },
  {
    text: "Kalau galau, biasanya denger lagu sedih?",
    options: ["Iya", "Enggak"]
  },
  {
    text: "Kamu lebih sering simpan perasaan atau ungkapin?",
    options: ["Simpan", "Ungkapin"]
  },
  {
    text: "Menurut kamu cinta itu nyakitin apa nyembuhin?",
    options: ["Nyakitin", "Nyembuhin"]
  },
  {
    text: "Kalau ada masalah, lebih suka cerita ke orang atau dipendem?",
    options: ["Cerita", "Pendam"]
  },
  {
    text: "Kamu masih inget masa kecil kamu?",
    options: ["Inget jelas", "Udah kabur"]
  },
  {
    text: "Pernah pura-pura senyum padahal sakit?",
    options: ["Sering", "Jarang"]
  },
  {
    text: "Kalau bisa balik ke masa lalu, mau nggak?",
    options: ["Mau banget", "Enggak perlu"]
  },
  {
    text: "Kamu ngerasa hidup kamu hampa?",
    options: ["Kadang", "Enggak kok"]
  },
  {
    text: "Kalau lagi sendiri, sering ngobrol sama diri sendiri?",
    options: ["Iya", "Jarang"]
  },
  {
    text: "Pernah berharap bisa jadi orang lain?",
    options: ["Pernah", "Enggak pernah"]
  },
  {
  text: "Kalau lagi down, biasanya nyari hiburan atau diem aja?",
  options: ["Nyari hiburan", "Diem aja"]
},
{
  text: "Kamu percaya kalau semua orang bisa berubah?",
  options: ["Percaya", "Ragu"]
},
{
  text: "Kalau disakiti, lebih milih maafin atau bales?",
  options: ["Maafin", "Bales"]
},
{
  text: "Kamu lebih suka nyimpen kenangan atau buang semuanya?",
  options: ["Nyimpen", "Buang"]
},
{
  text: "Pernah ngerasa kangen sama orang yang udah pergi?",
  options: ["Pernah", "Jarang"]
},
{
  text: "Kalau lagi sakit hati, biasanya diem atau cerita?",
  options: ["Diem", "Cerita"]
},
{
  text: "Menurut kamu teman sejati itu beneran ada?",
  options: ["Ada", "Cuma dongeng"]
},
{
  text: "Kamu lebih suka jujur walau nyakitin atau bohong demi baik?",
  options: ["Jujur", "Bohong baik"]
},
{
  text: "Kalau bisa ngulang momen bahagia, mau banget?",
  options: ["Mau banget", "Enggak"]
},
{
  text: "Kamu tipe yang lebih mikirin diri sendiri atau orang lain?",
  options: ["Diri sendiri", "Orang lain"]
},
{
  text: "Kalau lagi suntuk, lebih pilih keluar jalan atau rebahan?",
  options: ["Keluar jalan", "Rebahan"]
},
{
  text: "Kamu lebih gampang percaya orang atau lebih waspada?",
  options: ["Percaya gampang", "Waspada"]
},
{
  text: "Kalau ada masalah, langsung dihadapin atau nunda?",
  options: ["Hadepin", "Nunda"]
},
{
  text: "Kamu lebih suka suasana ramai atau sepi?",
  options: ["Ramai", "Sepi"]
},
{
  text: "Pernah pura-pura senyum padahal hancur di dalam?",
  options: ["Pernah", "Jarang"]
},
{
  text: "Kalau dikasih pilihan, mending bisa baca pikiran atau bisa ngilang?",
  options: ["Baca pikiran", "Ngilang"]
},
{
  text: "Kamu lebih percaya sama logika atau perasaan?",
  options: ["Logika", "Perasaan"]
},
{
  text: "Kalau ada temen jatuh, kamu hibur dulu atau bercanda dulu?",
  options: ["Hibur", "Bercanda"]
},
{
  text: "Kamu lebih suka nulis diary/chat pribadi atau nggak peduli?",
  options: ["Suka nulis", "Nggak peduli"]
},
{
  text: "Kalau bisa ketemu diri kecil kamu, mau nasehatin apa?",
  options: ["Jangan nyerah", "Nikmatin aja"]
},
{
  text: "Lebih deket sama ayah atau ibu?",
  options: ["Ayah", "Ibu"]
},
{
  text: "Kalau orang tua marah, biasanya kamu diem atau bales?",
  options: ["Diem", "Bales"]
},
{
  text: "Pernah curhat serius ke orang tua?",
  options: ["Pernah", "Belum pernah"]
},
{
  text: "Menurut kamu, orang tua lebih sering keras atau lembut?",
  options: ["Keras", "Lembut"]
},
{
  text: "Kalau orang tua lagi capek, kamu biasanya bantu atau pura-pura nggak liat?",
  options: ["Bantu", "Pura-pura nggak liat"]
},
{
  text: "Kamu lebih sering minta izin dulu atau langsung jalan?",
  options: ["Minta izin", "Langsung jalan"]
},
{
  text: "Kalau disuruh pilih, lebih sakit bikin kecewa orang tua atau kecewa sahabat?",
  options: ["Orang tua", "Sahabat"]
},
{
  text: "Pernah bohong sama orang tua?",
  options: ["Pernah", "Nggak pernah"]
},
{
  text: "Kalau orang tua lagi salah paham, kamu jelasin atau diem aja?",
  options: ["Jelasin", "Diem"]
},
{
  text: "Hal apa yang paling pengen kamu kasih ke orang tua nanti?",
  options: ["Kebahagiaan", "Kebebasan"]
}
];


let current = parseInt(localStorage.getItem("currentQ")) || 0;
let answers = JSON.parse(localStorage.getItem("answers")) || [];

function showQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    document.getElementById("question-text").innerText = q.text;
    document.getElementById("btnA").innerText = q.options[0];
    document.getElementById("btnB").innerText = q.options[1];
  } else {
    document.getElementById("question-box").innerHTML = "<p>Perjalanan lo udah selesai<hr> Jawaban lo bukan sekadar pilihan, tapi cerminan siapa diri lo sebenarnya.</p>";
    document.querySelector(".options").style.display = "none";
  }
}

function answer(choice) {
  answers[current] = choice;
  localStorage.setItem("answers", JSON.stringify(answers));
  current++;
  localStorage.setItem("currentQ", current);
  showQuestion();
}

window.onload = showQuestion;