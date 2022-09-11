
const remove_spaces = () => {
    let text = String(document.getElementById('text').value);
    let formatted_text = text.replaceAll(/\s/g,'');
    document.getElementById('text').value = String(formatted_text);
    console.log(formatted_text);
}

const copy_text = () => {
    let copy_text = String(document.getElementById('text').value)
    navigator.clipboard.writeText(copy_text)
}