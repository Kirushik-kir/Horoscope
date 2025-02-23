async function changeText(a) {
    if (a === 1) {
        const response = await askAI("Напиши гороскоп для тельцов");
        alert(response); // Отображаем результат в `alert`
    }
}

async function askAI(question) {
    const a = 'ЙОУ'; // Вставьте ваш API-ключ
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    try {
        const response = await axios.post(
            endpoint,
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'Вы умный помощник.' },
                    { role: 'user', content: question },
                ],
                max_tokens: 300,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${a}`,
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Ошибка при запросе к API:', error.message);
        return 'Произошла ошибка, попробуйте ещё раз.';
    }
}

// Вызов функции для проверки
changeText(1);