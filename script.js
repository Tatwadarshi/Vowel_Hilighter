import {vowelHighlighter} from '../vowel.js';

document.addEventListener('DOMContentLoaded', function () {
    const highlightButton = document.querySelector('button');
    highlightButton.addEventListener('click', function highlight(){
        let para = document.getElementById('para-ip').value;
        vowelHighlighter(para, 'result');
    });

});
