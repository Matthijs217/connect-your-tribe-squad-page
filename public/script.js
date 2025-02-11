document.addEventListener('DOMContentLoaded', () => {
  let refreshButtons = document.querySelectorAll('.refresh-btn');

  refreshButtons.forEach(button => {
      button.addEventListener('click', () => {
          let personInfo = button.closest('.person-info').querySelector('.info-text');
          
          // De data-attributen van de persoon
          let personData = [
              { label: 'Geboortedatum:', value: button.dataset.birthdate },  // Geboortedatum
              { label: 'Favoriete Kleur:', value: button.dataset.favcolor },  // Favoriete kleur
              { label: 'Favoriete Land:', value: button.dataset.favcountry }  // Favoriet land
          ];

          // Zoek de huidige waarde die getoond wordt in .info-text
          let currentIndex = personData.findIndex(data => personInfo.textContent.includes(data.value));

          // Bepaal de volgende waarde
          let nextIndex = (currentIndex + 1) % personData.length;  // Als we de laatste hebben bereikt, gaan we weer naar de eerste

          // Update de info-text met het volgende label en waarde
          personInfo.textContent = `${personData[nextIndex].label} ${personData[nextIndex].value}`;

          if (personData[nextIndex].value === button.dataset.favcolor) {
              personInfo.style.color = personData[nextIndex].value;
          } else {
              personInfo.style.color = '';
          }
      });
  });
});
