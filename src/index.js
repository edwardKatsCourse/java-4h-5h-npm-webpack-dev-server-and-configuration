import {printAlert} from "./js/index_2";


+function () {
    let h1 = document.createElement('h1');
    h1.innerText = 'Hello WebPack!';

    document.getElementsByTagName('body')[0].appendChild(h1);
    printAlert();
}();
