
export function route(page) {
    // Remova todas as classes de background existentes
    document.documentElement.classList.remove('backgroundHome', 'backgroundUniverse', 'backgroundExploration');

    // Adicione a classe de background apropriada com base na página
    switch (page) {
        case 'home':
            document.documentElement.classList.add('backgroundHome');
            break;
        case 'universe':
            document.documentElement.classList.add('backgroundUniverse');
            break;
        case 'exploration':
            document.documentElement.classList.add('backgroundExploration');
            break;
        default:
            break;
    }
}


