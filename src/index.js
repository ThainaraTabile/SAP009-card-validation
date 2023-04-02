import validator from './validator.js';

// Obter referências aos elementos HTML relevantes
const numeroCartaoInput = document.querySelector('.campos-numero-cartao');
const numCartaoImpressoInput = document.querySelector('.num-cartao-impresso');


numeroCartaoInput.addEventListener('input', () => {

   const numeroCartao = numeroCartaoInput.value;
   const numCartaoFormatado = numeroCartao.replace(/(\d{4})/g, '$1.').substring(0, 19);
   numCartaoImpressoInput.value = validator.maskify(numCartaoFormatado);
   const bandeiraCartao = pegandoBandeiraCartao(numeroCartao);
   const imgBandeira = pegandoImgBandeira(bandeiraCartao);
   const divBandeiraCartao = document.querySelector('.bandeira-cartao');
   divBandeiraCartao.style.backgroundImage = `url(${imgBandeira})`;

   function pegandoBandeiraCartao(numeroCartao) {
      if (numeroCartao.match(/^4[0-9]/)) {
         return "visa";
      } else if (numeroCartao.match(/^5[1-5]/)) {
         return "mastercard";
      } else if (numeroCartao.match(/^3[4-7]/)) {
         return "amex";
      } else if (numeroCartao.match(/^3[0]/)) {
         return "diners";
      } else if (numeroCartao.match(/6[0]/)) {
         return "discover";
      } else {
         return "unknown";
      }
   }

   function pegandoImgBandeira(bandeiraCartao) {
      if (bandeiraCartao === "visa") {
         return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png";
      } else if (bandeiraCartao === "mastercard") {
         return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png";
      } else if (bandeiraCartao === "amex") {
         return "https://img2.gratispng.com/20180802/bjr/kisspng-logo-american-express-computer-icons-sign-payment-amex-icons-5b63167f33c0e7.460691621533220479212.jpg";
      } else if (bandeiraCartao === "diners") {
         return "https://logospng.org/download/diners-club-international/logo-diners-club-international-icon-256.png";
      } else if (bandeiraCartao === "discover") {
         return "https://marcas-logos.net/wp-content/uploads/2021/06/Discover-logo.png";
      } else {
         return "";
      }
   }

   const nomeInputTitular = document.querySelector('.campo-nome-usuario');
   const nomeImpressoInput = document.querySelector('.nome-impresso');
   nomeInputTitular.addEventListener('input', () => {
      const nomeTitutlar = nomeInputTitular.value;
      const nomeTitularFormatado = nomeTitutlar.toUpperCase();
      nomeImpressoInput.value = nomeTitularFormatado;
   });

   const anoInput = document.querySelector('.ano-vencimento');
   const anoImpressoInput = document.querySelector('.ano-impresso');
   anoInput.addEventListener('input', () => {
      const anoVencimento = anoInput.value;
      anoImpressoInput.value = anoVencimento;
   });

   const cvvInput = document.querySelector('.cvv-cartao');
   const cvvImpressoInput = document.querySelector('.cvv-impresso');
   cvvInput.addEventListener('input', () => {
      const cvvCartao = cvvInput.value;
      cvvImpressoInput.value = cvvCartao;
   });
   const mesVencimentoSelect = document.querySelector('.mes-vencimento');
   const mesVencimentoImpresso = document.querySelector('.mes-impresso');
   mesVencimentoSelect.addEventListener('change', () => {
      const mesVencimento = mesVencimentoSelect.value;
      mesVencimentoImpresso.value = mesVencimento;
   });

   const btnComprar = document.querySelector('.btn-compra');
   const msgErroCartao = document.querySelector(".msg-erros-preenchimento");
   const msgValidacao = document.querySelector(".msg-validacao");
   const dataAtual = new Date();

   btnComprar.addEventListener('click', () => {

      const nomeTitular = nomeInputTitular.value.trim();
      const mesVencimento = parseInt(mesVencimentoSelect.value.trim());
      const anoVencimento = parseInt(anoInput.value.trim());
      const cvvCartao = cvvInput.value.trim();

      switch (true) {
         case (!nomeTitular || !mesVencimento || !anoVencimento || !cvvCartao):
            msgErroCartao.innerHTML = 'Preencha todos os campos';
            return;
         case (anoVencimento < dataAtual.getFullYear()):
         case (anoVencimento === dataAtual.getFullYear() && mesVencimento < dataAtual.getMonth() + 1):
            return msgErroCartao.innerHTML = 'Data de vencimento inválida! Por favor, digite novamente.';
         case (validator.isValid(numeroCartao)):
            return msgErroCartao.innerHTML = '', 
            msgValidacao.innerHTML = 'Seu cartão foi validado e sua compra confirmada, em breve você receberá em seu e-mail detalhes do pedido.';
         case (!validator.isValid(numeroCartao)):
            return msgErroCartao.innerHTML = 'O número do cartão de crédito é inválido!';
         default:
            return msgErroCartao.innerHTML = '';
      }
   });
});
