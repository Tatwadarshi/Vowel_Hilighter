export function vowelHighlighter(text, resultId, display = "none"){
    // let block = document.getElementById(textId);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsBlock = ['A', 'E', 'I', 'O', 'U'];
    let colors = ['red', 'green', 'blue', 'violet', 'chocolate'];
    let result = "";
    // let text = block.textContent;
    let added = 0;
    let character;
    let vowel;
    for(character of text)
    {
        added = 0;
        for(vowel of vowels)
        {
            if (vowel == character)
            {
                result += `<span class = "${vowel}" style = "color:${colors[vowels.indexOf(vowel)]}">` + vowel + '</span>';
                added =1;
                break;
            }
        }

        for(vowel of vowelsBlock)
        {
            if (vowel == character)
            {
                result += `<span class = "${vowel}" style = "color:${colors[vowelsBlock.indexOf(vowel)]}">` + vowel + '</span>';
                added =1;
                break;
            }
        }
        
        if(added!=1)
            {
                result += character;
                added = 1;
            }
    }

    document.getElementById(resultId).innerHTML = result;
    block.style.display = display;
    
}

// vowelHighlighter("para-1", "result");