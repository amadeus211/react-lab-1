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

    const gpayButton = document.querySelector('.gpay-button-fill button');
    const monoPayButton = document.querySelector('.mono-pay img');
    const cardHolderInput = document.getElementById('cardHolder');
    const commentInput = document.getElementById('comment');

    gpayButton.addEventListener('click', logTransaction);
    monoPayButton.addEventListener('click', logTransaction);

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

    const commentInputs = document.querySelectorAll('.inputF');

    commentInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.value.trim() !== '') {
                input.classList.add('active');
            } else {
                input.classList.remove('active');
            }
        });
    });
});
