const wishlist = [
  {
    name: "PSYCHOTIC PRE WORKOUT",
    price: "₹1,85,000",
    image: "https://rukminim2.flixcart.com/image/416/416/l16rde80/protein-supplement/u/c/5/creatine-psychotic-pre-workout-fruit-punch-flavour-best-selling-original-imagcsgd5gmxxzbd.jpeg?q=70&crop=false",
    link: "https://www.flipkart.com/insane-labz-psychotic-pre-workout-fruit-punch-flavour-best-selling-strongest-creatine/p/itm107578ea29678",
    site: "Flipkart"
  },
  {
    name: "Whey Protein Isolate 4kg",
    price: "₹8,000 – ₹11,000",
    image: "https://m.media-amazon.com/images/I/71RodF-LMZL._SX569_.jpg",
    link: "https://www.amazon.in/MuscleBlaze-Monohydrate-AstraGin%C2%AE-Chocolate-Trustified/dp/B0FQVC1661/ref=sr_1_3_sspa?crid=2P28UYVY76G54&dib=eyJ2IjoiMSJ9.iXPQeKwJoVp3bJiRq0diIFiDiOc-k9kpuWqWab-x9d-hgTeXHHECwqm6Ss0bGXVkdDxYsSXYV89tB6LVFAsMPVLdnjk1zTtduZ_8QBX2d0Ef7uQrVqnhidQdf9IOBMcxNmqqjaRqLbTux5SeCvX_RZWaqWbjQRycqV-xjgF0bZvMCl5Nzrm_tCukvCz_QKW5LnWjzuTcTmJNB1363MCDtk8e6etdng8kpSmIr8ux4-g_2eHXq9eXr3yZ6haHOwX2Gdwvc2GC3eyA5sGPqOBEKg5JcU5vQwcgQqJhnTzylqg.SbIFw9ilo8GkxPL24a0ogU_JTWcTJ_HK-Q2O8vC2wNU&dib_tag=se&keywords=whey%2Bprotein%2B4%2Bkg&qid=1764757738&sprefix=whey%2Bprotein%2B4%2Bkg%2Caps%2C474&sr=8-3-spons&aref=ZnqtJvxn1E&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    site: "Amazon"
  },
  {
    name: "Lever Belt (Weightlifting Belt)",
    price: "₹1,499 – ₹2,499",
    image: "https://m.media-amazon.com/images/I/81S7rWUSjbL._SX522_.jpg",
    link: "https://www.amazon.in/Hack-Athletics-Multipurpose-Deadlifts-Powerlifting/dp/B0BSFZWZQZ/ref=sr_1_1_sspa?crid=11KT534URBJMZ&dib=eyJ2IjoiMSJ9.pgYl2IW5fthILiBp663k5hBNUmxpGARZfB-pk203a6l5E6ehwOkpCvPMRAqKVzDnp7f3x70mZABh_S3IxN4WaNctW3sgMgEsIgO6DLH9Ug_8pgkheozdD95d-dyeydJoNcpBKWjQ44LSPtaQfa8ClRg9T9363mxt5iry69pD_aMbACq8N7Nx1YAQrZdDqix3ndXf1BCDxQFmZ7kszkRh0N8kqeiBknQrTqbjpXTsdKgyiva0ujrL74zURrWAz_-Y_ubdKaKcx4gSTCWC6J5RoQh0NVndxNBRbRY6TSbgLwk.-ATNJ-7IXdVw8W4wiVi1QE0G-CvcIwoZhqBmgobL8pY&dib_tag=se&keywords=lever%2Bbelt&qid=1764757813&sprefix=lever%2Bbelt%2Caps%2C474&sr=8-1-spons&aref=T8KsrZHFxW&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&smid=A1449UPJGEAF36&th=1",
    site: "Amazon"
  },
  {
    name:"Realme Tablet",
    image:"https://m.media-amazon.com/images/I/81-S7eXkoJL._SX522_.jpg",
    link:"https://www.amazon.in/Redmi-Pad-Pro-Snapdragon-10000mAh/dp/B0D9VNB98Z/ref=sr_1_2_sspa?crid=PB1UDVZWOQ42&dib=eyJ2IjoiMSJ9.A81-yHJH4X-8YZPhHBZ0GWukyhwnskSj1r15sHzi5OtkR2JCjCtPx7Q3M6V5xf-hsNnPLBlBkRtO0bXRs4-OJ9e35-YKaimtMPWVlelrm1O6u52OXks07IiQxKSYXbvlnQQHKIASvG9qXndOriO2bptrLZL7tU8F-dXFcUdkSDUkFonVjN8gp5DjgPlTll26OcLEFsjBnOd40F0WUNMElsAot_rfLSSf732POkqWOOE.ckQY5Y2kQpq78EslnffpVtgmqSAlgLBFn_bxRZ3syeo&dib_tag=se&keywords=one%2Bplus%2Btablet&nsdOptOutParam=true&qid=1764757932&sprefix=one%2Bplus%2Btable%2Caps%2C470&sr=8-2-spons&aref=44DtmHcwRw&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    site: "Amazon"
    
  }

];

const container = document.getElementById("wishlist");

wishlist.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.image}">
    <h3>${item.name}</h3>
    <a href="${item.link}" target="_blank" class="buy-btn">
      Check on ${item.site} 🎁
    </a>
  `;

  container.appendChild(card);
});



