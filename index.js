let objDevInHouse = {
    plataforma: "DevInHouse",
    cursos: {
        dados: ["SQL"],
        backend: ["Java", "Spring"],
        frontend: ["Javascript", "React"]
    },
    inovacao_constante: true
};

console.log(objDevInHouse);

let objUser = {
    nome: 'Gustavo',
    idade: 40,
    cidade: 'Florianópolis'
};

console.log(objUser)

objUser['nome'] = 'Gustavo E. C. Menescal';

objUser['idade'] = objUser.idade.toString();

objDevInHouse['objUser'] = objUser;

console.table(objDevInHouse);
console.table(objUser);