document.querySelector('.button-1').addEventListener('click', () => {
    let data = document.querySelector('.task-1').value;
    document.querySelector('.out-1').innerHTML += data;
})
document.querySelector('.button-2').addEventListener('click', () => {
    let data = document.querySelector('.task-2').value; // получаем строку с числом '2'
    //let data = +document.querySelector('.task-2').value;  чтоб получить число ставим + перед document
    document.querySelector('.out-2').innerHTML += data;
});
document.querySelector('.button-3').addEventListener('click', () => {
    let data = document.querySelector('.task-3').value;
    document.querySelector('.out-3').innerHTML = data;
});
document.querySelector('.button-4').addEventListener('click', () => {
    let data = document.querySelector('.task-4').value;
    document.querySelector('.out-4').innerHTML = data;
});
document.querySelector('.task-5').addEventListener('input', () => {
    let data = document.querySelector('.task-5').value;
    document.querySelector('.out-5').innerHTML = data;
});
document.querySelector('.button-6').addEventListener('click', () => {
    let data = document.querySelector('.c6').value;
    if(document.querySelector('.c6').checked) {
        document.querySelector('.out-6').innerHTML = data;
    }
    else{
        document.querySelector('.out-6').innerHTML = '';
    }
   
});