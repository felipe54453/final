document.addEventListener('DOMContentLoaded', function() {


    let params = coDesExtract();
    let id = params.id;
    console.log(id);
    
    coDesReplace('.menu-desktop', db);
    coDesReplace('.dropdown', db);
    coDesReplace('.projetos', db);
    coDesReplace('.projetos-1',db["portfolio"][id]);
    console.log(db["portfolio"][id]["categoria"]);
    coDesReplace('.projeto-item',db['id']);
    coDesReplace('body', params);

});


