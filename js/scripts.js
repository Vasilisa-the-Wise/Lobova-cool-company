document.getElementById('orderSubmit').addEventListener('click', function () {
    const productName = document.getElementById('productName').value.trim();
    const productQuantity = document.getElementById('productQuantity').value;
    const userPhone = document.getElementById('userPhone').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();

    const phonePattern = /^\+7\d{3}-\d{3}-\d{2}-\d{2}$/;
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!phonePattern.test(userPhone)) {
        alert('Введите телефон в формате +7***-***-**-**');
        return;
    }
    if (!emailPattern.test(userEmail)) {
        alert('Введите корректный E-mail');
        return;
    }

    document.getElementById('orderResult').textContent = `Заказ принят: ${productName}, Количество: ${productQuantity}, Телефон: ${userPhone}, E-mail: ${userEmail}`;
});

document.querySelector('.btn').addEventListener('mouseover', function () {
    this.style.backgroundColor = 'orange';
});

document.querySelector('.offer__title').addEventListener('click', function () {
    this.style.color = 'purple';
});
