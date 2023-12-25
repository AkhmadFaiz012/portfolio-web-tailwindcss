const scriptURL = 'https://script.google.com/macros/s/AKfycbzJ8Ahd81IZLnfW3zG2QKx-CwI92lgXN7todqycckuyqmDKnQtu41sR2ofDWr6FNLg/exec';
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

const alert_del = document.querySelectorAll('.alert-del');

alert_del.forEach((x) => {
    x.addEventListener('click', () =>
        x.parentElement.classList.add('hidden')
    );
});

form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit diklik
    //tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            //tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('hidden');
            btnKirim.classList.toggle('hidden');
            // tampilkan alert
            myAlert.classList.toggle('hidden');

            // reset form
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})