function closeNav() {
    document.querySelector('#nav-check').checked = false
}
function updateCharCount() {
    var maxLength = 200
    var currentLength = document.querySelector('#message').value.length
    var charCount = maxLength - currentLength
    document.querySelector('#char-count').innerHTML = charCount
}
