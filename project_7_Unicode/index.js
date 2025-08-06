document.getElementById('getUnicode').addEventListener('click', function(){
    const input = document.getElementById('charInput').value;
    if(input.length === 0){
        document.getElementById('output').textContent = "please enter a character.";
        return;
    }
    const value = input.codePointAt(0);
    document.getElementById('output').textContent = `The Unicode value of "${input}" is : ${value}`;
})