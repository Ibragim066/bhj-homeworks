const dropdown = document.querySelector('.dropdown');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

dropdown.addEventListener('click', (evt) => {
    dropdownList.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].onclick = () => {
        dropdownValue.closest('div').textContent = dropdownLink[i].textContent;
        return false;
    }
}