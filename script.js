   function agendar() {
      // Captura as opções selecionadas pelo usuário
      const tipoAtendimento = document.getElementById('tipoAtendimento').value;
      const convenio = document.getElementById('convenio').value;

      // Monta uma mensagem automática com os dados escolhidos
      const mensagem = `Olá! Gostaria de agendar uma ${tipoAtendimento} pelo convênio ${convenio}.`;

      // Número de WhatsApp da secretária (coloque o número real)
      const numeroWhatsApp = '5516981205496';
      // Monta o link de redirecionamento para o WhatsApp
      const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      // Abre o WhatsApp em uma nova aba
      window.open(link, '_blank');
    }

