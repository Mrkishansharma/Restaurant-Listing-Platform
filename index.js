for (let i = 0; i < 50; i++) {
    fetch('http://localhost:8080/api/v1/restaurant', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "name": "sonam" + i,
            "address": "apwn",
            "contact": "6659123423454344",
            "email": "aa@gmail.com",
            "description": "hello world",
            "ss": "sadasd"
        }),
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })
}