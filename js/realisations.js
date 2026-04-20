let list = document.querySelectorAll('.list');
let click2 = document.querySelectorAll('.click2');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < click2.length; k++) {
            click2[k].classList.remove('active');
            click2[k].classList.add('hide');

            if (click2[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                click2[k].classList.remove('hide');
                click2[k].classList.add('active');
            }
        }
    })
}


