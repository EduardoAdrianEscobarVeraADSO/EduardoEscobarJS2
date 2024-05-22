const filtrar = x => x.name === "layout-correct";

(async () => {
  let response = await fetch('user.json');
  let user = await response.json();
  let respuestGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  let usuariogithub = await respuestGithub.json();
  usuariogithub.forEach(element => {
    if (element.name === "layout-correct") {
      console.log(element)
    }
  })
})