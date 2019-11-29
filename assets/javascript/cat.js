document.addEventListener('DOMContentLoaded', function() {


    let params = coDesExtract();
    let id = params.id;
    console.log(id);
    
    coDesReplace('.projetos-1',db["portfolio"][id]["categoria"]);
    coDesReplace('.projetos',db["portfolio"][id]["categoria"])
    console.log(db["portfolio"][id]["categoria"]);
 

});
