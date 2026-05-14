function orderNow(product){
function addMessage(text, type){

    const div = document.createElement('div');

    div.className = `message ${type}`;

    div.innerText = text;

    messagesDiv.appendChild(div);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function zomboReply(text){

    text = text.toLowerCase();

    if(text.includes('love')) {
        return '❤️ I recommend the Rose Quartz Love Ring for attraction and emotional healing.';
    }

    if(text.includes('money') || text.includes('wealth')) {
        return '💰 The Citrine Prosperity Ring is powerful for wealth and promotions.';
    }

    if(text.includes('protection')) {
        return '🛡️ The Black Onyx Protection Ring shields against negativity.';
    }

    if(text.includes('luck')) {
        return '🍀 The Green Aventurine Luck Ring attracts opportunities and success.';
    }

    if(text.includes('price')) {
        return '💎 Our rings range between $60 and $75 depending on the crystal.';
    }

    if(text.includes('order')) {
        window.open('https://wa.me/256787329794','_blank');
        return '📲 Redirecting you to WhatsApp ordering.';
    }

    return '✨ Welcome to Jajja Rings. Ask me about love, protection, luck or wealth rings.';
}

sendBtn.onclick = () => {

    const text = inputField.value.trim();

    if(!text) return;

    addMessage(text,'user');

    inputField.value = '';

    setTimeout(()=>{
        addMessage(zomboReply(text),'bot');
    },500);
}

inputField.addEventListener('keypress', function(e){
    if(e.key === 'Enter') sendBtn.click();
});
