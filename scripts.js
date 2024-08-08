$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Modal functionality
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');
    var loginButton = document.getElementById('loginButton');
    var registerButton = document.getElementById('registerButton');
    var loginClose = document.getElementById('loginClose');
    var registerClose = document.getElementById('registerClose');

    loginButton.onclick = function () {
        loginModal.style.display = 'block';
    }
    registerButton.onclick = function () {
        registerModal.style.display = 'block';
    }
    loginClose.onclick = function () {
        loginModal.style.display = 'none';
    }
    registerClose.onclick = function () {
        registerModal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    // Chatbot toggle functionality
    var minimizeChatbot = document.getElementById('minimizeChatbot');
    var closeChatbot = document.getElementById('closeChatbot');
    var chatbotMessages = document.getElementById('chatbot-messages');
    var chatbotInput = document.getElementById('chatbot-input');

    minimizeChatbot.onclick = function () {
        if (chatbotMessages.style.display === 'none') {
            chatbotMessages.style.display = 'block';
            chatbotInput.style.display = 'flex';
        } else {
            chatbotMessages.style.display = 'none';
            chatbotInput.style.display = 'none';
        }
    }

    closeChatbot.onclick = function () {
        var chatbot = document.getElementById('chatbot');
        chatbot.style.display = 'none';
    }
});
