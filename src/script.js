
   document.addEventListener("DOMContentLoaded", function() {
      const moneyInputContenteditable = document.querySelector('.money-input-contenteditable');
      const chipButtons = document.querySelectorAll('.chip-button');

      chipButtons.forEach(function(button) {
         button.addEventListener('click', function() {
            const valueToAdd = parseInt(button.querySelector('.main-label').textContent.replace(/[^\d]/g, ''));
            const currentValue = parseInt(moneyInputContenteditable.textContent.replace(/[^\d]/g, ''));
            const newValue = currentValue + valueToAdd;
            moneyInputContenteditable.textContent = newValue;
         });
      });
   });


   document.addEventListener("DOMContentLoaded", function() {
    const gpayButton = document.querySelector('.gpay-button-fill button');
    const monoPayButton = document.querySelector('.mono-pay img');
    const moneyInputContenteditable = document.querySelector('.money-input-contenteditable');
    const cardHolderInput = document.getElementById('cardHolder');
    const commentInput = document.getElementById('comment');

    gpayButton.addEventListener('click', function() {
        logTransaction();
    });

    monoPayButton.addEventListener('click', function() {
        logTransaction();
    });

    function logTransaction() {
        const name = cardHolderInput.value;
        const comment = commentInput.value;
        const amount = moneyInputContenteditable.textContent.trim();

        console.log("Name:", name);
        console.log("Comment:", comment);
        console.log("Amount:", amount);

        cardHolderInput.value = '';
        commentInput.value = '';
        moneyInputContenteditable.textContent = '0';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.getElementById('comment');

    commentInput.addEventListener('input', function() {
        if (commentInput.value.trim() !== '') {
            commentInput.classList.add('active');
        } else {
            commentInput.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.getElementById('cardHolder');

    commentInput.addEventListener('input', function() {
        if (commentInput.value.trim() !== '') {
            commentInput.classList.add('active');
        } else {
            commentInput.classList.remove('active');
        }
    });
});

