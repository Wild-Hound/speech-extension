export const playAudio = () => {
  console.log("hello world click");
  const data = {
    text: "hello world",
  };
  fetch("https://tts-api-404.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      const status = res.status;
      switch (status) {
        case 200:
          return res.json();
        case 400:
          return { code: 400 };
      }
    })
    .then((data) => {
      if (data === undefined) {
        return;
      }
      if (data.code === 400) {
        console.error("bad request");
        return;
      }
      console.log(data);
    });
};
